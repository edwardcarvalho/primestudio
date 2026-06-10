"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center bg-white dark:bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white dark:from-gray-950 dark:via-gray-950/80 dark:to-gray-950" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            {t.hero.badge}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.08] tracking-tight mb-6">
            {t.hero.h1_1}{" "}
            <span className="text-blue-600">{t.hero.h1_accent}</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-10">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-4 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25 text-sm"
            >
              {t.hero.cta_primary}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium text-sm hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t.hero.cta_secondary}
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {[t.hero.proof_1, t.hero.proof_2, t.hero.proof_3].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <CheckCircle size={15} className="text-blue-600 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
        >
          {[
            { value: "50+", label: t.hero.stat_1_label },
            { value: "95+", label: t.hero.stat_2_label },
            { value: "2–4", label: t.hero.stat_3_label },
            { value: "100%", label: t.hero.stat_4_label },
          ].map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-gray-900 px-8 py-6">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
