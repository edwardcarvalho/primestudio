"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PortfolioCTA() {
  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
            O próximo caso de sucesso é o seu
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Vamos analisar o seu negócio e criar uma estratégia digital que gera resultados reais.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-sm"
          >
            Pedir orçamento gratuito
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
