"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-7">
            <span className="text-white font-bold text-lg">PS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Pronto para ter um site que{" "}
            <span className="text-blue-600">trabalha por si?</span>
          </h2>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Peça um orçamento gratuito hoje. Analisamos o seu caso e respondemos em menos
            de 24 horas com uma proposta personalizada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25 text-sm"
            >
              Pedir orçamento gratuito
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/351900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 text-white font-semibold px-7 py-4 rounded-xl hover:bg-emerald-600 transition-colors text-sm"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          <p className="text-xs text-gray-400 mt-6">
            Resposta garantida em menos de 24 horas. Sem compromisso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
