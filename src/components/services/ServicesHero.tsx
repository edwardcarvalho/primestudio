"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesHero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-16 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
            {t.services_page.label}
          </p>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-5">
            {t.services_page.h1}
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
            {t.services_page.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
