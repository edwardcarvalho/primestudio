"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
            Sobre nós
          </p>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Ajudamos empresas a crescer com presença digital séria
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            A Prime Studio nasceu com uma convicção: as PMEs portuguesas merecem websites
            do mesmo nível das grandes empresas — sem os preços inflacionados das grandes agências.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
