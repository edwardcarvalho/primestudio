"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const { t } = useLanguage();
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const services = [
    t.contact_form.service_websites,
    t.contact_form.service_landing,
    t.contact_form.service_seo,
    t.contact_form.service_maintenance,
    t.contact_form.service_other,
  ];

  const budgets = [
    t.contact_form.budget_1,
    t.contact_form.budget_2,
    t.contact_form.budget_3,
    t.contact_form.budget_4,
    t.contact_form.budget_5,
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setState("success");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto px-6 text-center"
        >
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={28} className="text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {t.contact_form.success_title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            {t.contact_form.success_text}
          </p>
        </motion.div>
      </section>
    );
  }

  if (state === "error") {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-red-500 font-semibold mb-4">Ocorreu um erro ao enviar. Tenta novamente.</p>
          <button
            onClick={() => setState("idle")}
            className="text-sm text-blue-600 underline"
          >
            Tentar novamente
          </button>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";

  const labelClass = "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5";

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm space-y-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {t.contact_form.form_title}
            </h2>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              {t.contact_form.form_subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>
                {t.contact_form.name} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={t.contact_form.placeholder_name}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                {t.contact_form.email} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={t.contact_form.placeholder_email}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>{t.contact_form.company}</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder={t.contact_form.placeholder_company}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>{t.contact_form.service}</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">{t.contact_form.service_placeholder}</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>{t.contact_form.budget}</label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">{t.contact_form.budget_placeholder}</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>
              {t.contact_form.message} <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder={t.contact_form.placeholder_message}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={state === "submitting"}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all text-sm"
          >
            {state === "submitting" ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {t.contact_form.submitting}
              </>
            ) : (
              <>
                {t.contact_form.submit_full}
                <ArrowRight size={16} />
              </>
            )}
          </button>

          <p className="text-xs text-gray-400 text-center">{t.contact_form.privacy}</p>
        </motion.form>
      </div>
    </section>
  );
}
