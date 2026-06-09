"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
            Não sabe por onde começar?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Fale connosco e ajudamo-lo a perceber qual o serviço mais adequado para o
            seu negócio. A consulta inicial é gratuita.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-sm"
          >
            Falar com um especialista
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
