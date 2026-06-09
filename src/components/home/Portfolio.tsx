"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Santos & Filhos — Construtora",
    category: "Website Institucional",
    description:
      "Site corporativo com portal de projectos e captação de leads. +180% de contactos em 60 dias.",
    tags: ["Next.js", "SEO", "Design Premium"],
    color: "from-blue-600 to-blue-800",
  },
  {
    title: "Clínica Mendes Saúde",
    category: "Website + Landing Page",
    description:
      "Presença digital completa com agendamento online integrado. Posição #1 Google para 5 keywords.",
    tags: ["WordPress", "SEO Local", "Agendamento"],
    color: "from-emerald-600 to-emerald-800",
  },
  {
    title: "LogiTrans Portugal",
    category: "Landing Page",
    description:
      "Landing page para geração de leads B2B em campanhas Google Ads. Taxa de conversão de 8,4%.",
    tags: ["Landing Page", "Google Ads", "Conversão"],
    color: "from-violet-600 to-violet-800",
  },
  {
    title: "Espaço Vivo — Imobiliária",
    category: "Website + SEO",
    description:
      "Portal imobiliário com pesquisa avançada e SEO local. 3x mais tráfego orgânico em 4 meses.",
    tags: ["Next.js", "SEO Local", "Portal"],
    color: "from-amber-600 to-orange-700",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
              Portfólio
            </p>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Resultados que falam por si
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white font-medium transition-colors whitespace-nowrap"
          >
            Ver todos os projectos <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all hover:shadow-xl"
            >
              {/* Visual block */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute bottom-4 right-4">
                  <ExternalLink size={18} className="text-white/40 group-hover:text-white/70 transition-colors" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold text-white/70 bg-white/10 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-gray-800 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
