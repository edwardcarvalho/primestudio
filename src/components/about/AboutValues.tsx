"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Resultados primeiro",
    description:
      "Um site bonito que não gera clientes é uma falha. Medimos sempre o impacto do nosso trabalho em métricas de negócio reais.",
  },
  {
    title: "Transparência total",
    description:
      "Sem letras pequenas, sem custos escondidos. O cliente sabe sempre o que vai receber, quando e por quanto.",
  },
  {
    title: "Qualidade sem compromisso",
    description:
      "Não aceitamos projecto que não possamos fazer bem. Preferimos dizer não a entregar algo medíocre.",
  },
  {
    title: "Parceria a longo prazo",
    description:
      "Os nossos melhores clientes são aqueles com quem trabalhamos há anos. Investimos em relações duradouras.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            Valores
          </p>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            O que nos define
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
            >
              <div className="text-5xl font-black text-gray-800 mb-4 leading-none">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
