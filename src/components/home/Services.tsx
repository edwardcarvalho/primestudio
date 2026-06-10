"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Zap, Search, Wrench, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const colorMap: Record<string, { light: string; dark: string }> = {
  blue:    { light: "bg-blue-50 text-blue-600",    dark: "dark:bg-blue-900/20 dark:text-blue-400" },
  violet:  { light: "bg-violet-50 text-violet-600", dark: "dark:bg-violet-900/20 dark:text-violet-400" },
  emerald: { light: "bg-emerald-50 text-emerald-600", dark: "dark:bg-emerald-900/20 dark:text-emerald-400" },
  amber:   { light: "bg-amber-50 text-amber-600",  dark: "dark:bg-amber-900/20 dark:text-amber-400" },
};

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t.services.s1_title,
      description: t.services.s1_desc,
      benefits: [t.services.s1_b1, t.services.s1_b2, t.services.s1_b3],
      color: "blue",
    },
    {
      icon: Zap,
      title: t.services.s2_title,
      description: t.services.s2_desc,
      benefits: [t.services.s2_b1, t.services.s2_b2, t.services.s2_b3],
      color: "violet",
    },
    {
      icon: Search,
      title: t.services.s3_title,
      description: t.services.s3_desc,
      benefits: [t.services.s3_b1, t.services.s3_b2, t.services.s3_b3],
      color: "emerald",
    },
    {
      icon: Wrench,
      title: t.services.s4_title,
      description: t.services.s4_desc,
      benefits: [t.services.s4_b1, t.services.s4_b2, t.services.s4_b3],
      color: "amber",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            {t.services.label}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            {t.services.h2}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colors.light} ${colors.dark}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <span className="w-1 h-1 bg-blue-600 rounded-full shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/servicos"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:gap-2.5 transition-all"
                >
                  {t.services.learn_more} <ArrowRight size={13} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
