"use client";

import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="pt-32 pb-16 bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
            Portfólio
          </p>
          <h1 className="text-5xl font-bold text-white tracking-tight mb-5">
            Projectos que geram resultados reais
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Cada projecto começa com um objectivo de negócio claro. Veja como ajudamos
            empresas portuguesas a crescer online.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
