"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "O site que a Prime Studio criou para nós triplicou os pedidos de contacto em dois meses. Design impecável e rápido a carregar.",
    author: "Miguel Santos",
    role: "CEO, Construtora Santos & Filhos",
    rating: 5,
  },
  {
    quote:
      "Finalmente uma agência que percebe de SEO a sério. Estamos na primeira página do Google para as nossas keywords principais.",
    author: "Carla Mendes",
    role: "Directora, Clínica Mendes Saúde",
    rating: 5,
  },
  {
    quote:
      "Profissionalismo do início ao fim. Entregaram antes do prazo e o resultado superou as expectativas. Voltamos a trabalhar em breve.",
    author: "Rui Ferreira",
    role: "Fundador, LogiTrans Portugal",
    rating: 5,
  },
];

const clientLogos = [
  "Santos & Filhos",
  "Clínica Mendes",
  "LogiTrans PT",
  "Grupo Almeida",
  "TechBase Lda",
  "Espaço Vivo",
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Empresas que confiam em nós
        </p>

        {/* Logo strip */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-20">
          {clientLogos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-semibold text-gray-300 hover:text-gray-400 transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="text-sm font-semibold text-gray-900">{t.author}</div>
                <div className="text-xs text-gray-400 mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
