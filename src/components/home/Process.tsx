"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Descoberta",
    description:
      "Análise detalhada do seu negócio, mercado e concorrência. Definimos objetivos claros e KPIs mensuráveis.",
  },
  {
    number: "02",
    title: "Estratégia & Design",
    description:
      "Criamos a arquitectura de informação e o design visual alinhado com a sua marca. Aprovação antes de construir.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Construção com código limpo, performance máxima e SEO técnico integrado desde o primeiro dia.",
  },
  {
    number: "04",
    title: "Lançamento & Crescimento",
    description:
      "Publicação, monitorização e acompanhamento contínuo para garantir que o site gera resultados reais.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Processo
          </p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Como trabalhamos
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Um processo claro e transparente, do briefing ao lançamento — sem surpresas,
            sem atrasos desnecessários.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gray-200" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 w-16 h-16 bg-white border-2 border-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <span className="text-xl font-bold text-blue-600">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
