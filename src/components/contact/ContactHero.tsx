"use client";

import { motion } from "framer-motion";
import { Clock, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactHero() {
  const { t } = useLanguage();

  const infoItems = [
    { icon: Clock, title: t.contact_page.info_1_title, text: t.contact_page.info_1_text },
    { icon: Mail, title: t.contact_page.info_2_title, text: t.contact_page.info_2_text },
  ];

  return (
    <section className="pt-32 pb-16 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
              {t.contact_page.label}
            </p>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-5">
              {t.contact_page.h1}
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
              {t.contact_page.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {infoItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 items-start bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{item.text}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
