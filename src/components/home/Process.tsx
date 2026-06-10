"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    { number: "01", title: t.process.step_1_title, description: t.process.step_1_desc },
    { number: "02", title: t.process.step_2_title, description: t.process.step_2_desc },
    { number: "03", title: t.process.step_3_title, description: t.process.step_3_desc },
    { number: "04", title: t.process.step_4_title, description: t.process.step_4_desc },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            {t.process.label}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            {t.process.h2}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gray-200 dark:bg-gray-800" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 w-16 h-16 bg-white dark:bg-gray-950 border-2 border-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <span className="text-xl font-bold text-blue-600">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
