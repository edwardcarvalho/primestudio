"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "A nossa missão",
    text: "Democratizar o acesso a presença digital de alto nível para empresas portuguesas. Acreditamos que um negócio sério merece um site sério — independentemente da sua dimensão.",
  },
  {
    icon: Eye,
    title: "A nossa visão",
    text: "Ser a agência de referência em Portugal para PMEs que querem crescer online com estratégia, design e tecnologia de ponta — sem promessas vazias, só resultados mensuráveis.",
  },
  {
    icon: Rocket,
    title: "A nossa abordagem",
    text: "Não fazemos sites, fazemos ferramentas de negócio. Cada projecto começa com um objectivo claro e termina com métricas a comprovar o impacto. Simples, directo, eficaz.",
  },
];

export default function AboutMission() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-6">
              Não somos uma agência de design. Somos parceiros de crescimento.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              A maior parte das agências entrega um ficheiro bonito e desaparece. Nós
              ficamos — analisamos os resultados, optimizamos, ajustamos estratégias e
              fazemos questão de que cada euro investido volta multiplicado.
            </p>
            <p className="text-gray-500 leading-relaxed">
              A nossa equipa combina design de produto, desenvolvimento front-end e SEO
              estratégico num processo único que vai da ideia ao crescimento real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "50+", label: "Projectos entregues" },
              { value: "4 anos", label: "De experiência" },
              { value: "100%", label: "Taxa de satisfação" },
              { value: "24h", label: "Tempo de resposta" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100"
              >
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{pillar.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
