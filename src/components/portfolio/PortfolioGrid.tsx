"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Search, Zap } from "lucide-react";

const projects = [
  {
    title: "Santos & Filhos — Construtora",
    category: "Website Institucional",
    year: "2024",
    description:
      "A Construtora Santos & Filhos precisava de um site que transmitisse credibilidade para obras de grande escala. Criámos um site institucional premium com portfólio de obras, área de carreiras e formulário de orçamento.",
    results: [
      { icon: TrendingUp, value: "+180%", label: "Contactos" },
      { icon: Users, value: "2.4x", label: "Tempo no site" },
    ],
    tags: ["Next.js", "TypeScript", "SEO", "Design Premium"],
    gradient: "from-blue-600 to-blue-900",
  },
  {
    title: "Clínica Mendes Saúde",
    category: "Website + SEO Local",
    year: "2024",
    description:
      "Clínica de saúde privada com necessidade de visibilidade local e agendamento online. Desenvolvemos um site com integração de agendamento, fichas dos médicos e SEO local agressivo.",
    results: [
      { icon: Search, value: "#1", label: "Google local" },
      { icon: TrendingUp, value: "+240%", label: "Agendamentos" },
    ],
    tags: ["WordPress", "SEO Local", "Agendamento Online"],
    gradient: "from-emerald-600 to-emerald-900",
  },
  {
    title: "LogiTrans Portugal",
    category: "Landing Page B2B",
    year: "2024",
    description:
      "Empresa de logística a entrar num mercado competitivo via Google Ads. Criámos uma landing page focada em conversão B2B com formulário de cotação e prova social estratégica.",
    results: [
      { icon: Zap, value: "8.4%", label: "Taxa conversão" },
      { icon: TrendingUp, value: "-42%", label: "Custo por lead" },
    ],
    tags: ["Landing Page", "Google Ads", "B2B", "Conversão"],
    gradient: "from-violet-600 to-violet-900",
  },
  {
    title: "Espaço Vivo — Imobiliária",
    category: "Portal Imobiliário",
    year: "2023",
    description:
      "Imobiliária regional que queria reduzir dependência de portais pagos. Desenvolvemos um portal próprio com pesquisa avançada, tours virtuais e SEO local optimizado.",
    results: [
      { icon: TrendingUp, value: "3x", label: "Tráfego orgânico" },
      { icon: Search, value: "45+", label: "Keywords top 3" },
    ],
    tags: ["Next.js", "SEO", "Portal", "Pesquisa Avançada"],
    gradient: "from-amber-600 to-orange-900",
  },
  {
    title: "TechBase — Software B2B",
    category: "Website + Blog",
    year: "2023",
    description:
      "Startup de software que precisava de posicionamento premium e geração de leads orgânicos. Site com blog técnico integrado e arquitectura de SEO por pillar pages.",
    results: [
      { icon: TrendingUp, value: "+320%", label: "Tráfego orgânico" },
      { icon: Users, value: "58", label: "Leads/mês" },
    ],
    tags: ["Next.js", "Blog", "Content Marketing", "SEO"],
    gradient: "from-cyan-600 to-blue-900",
  },
  {
    title: "Grupo Almeida — Restauração",
    category: "Presença Digital Multi-site",
    year: "2023",
    description:
      "Grupo com 4 restaurantes sem presença digital coerente. Criámos um sistema de sites unificados com identidade visual consistente e reservas online integradas.",
    results: [
      { icon: Users, value: "+95%", label: "Reservas online" },
      { icon: Search, value: "Top 3", label: "Google Maps" },
    ],
    tags: ["Multi-site", "Reservas", "SEO Local", "Branding"],
    gradient: "from-rose-600 to-rose-900",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
            >
              {/* Visual */}
              <div className={`h-52 bg-gradient-to-br ${project.gradient} relative flex items-end p-6`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-xs font-semibold text-white/70 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-white/50">{project.year}</span>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-800/50 rounded-xl">
                  {project.results.map((result) => {
                    const Icon = result.icon;
                    return (
                      <div key={result.label} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center shrink-0">
                          <Icon size={14} className="text-blue-400" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white leading-none">
                            {result.value}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">{result.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
