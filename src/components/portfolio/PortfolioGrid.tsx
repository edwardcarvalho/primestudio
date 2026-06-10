"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const realProjects = [
  {
    key: "p1" as const,
    url: "https://primeestores.pt/",
    tags: ["Serviços", "Next.js", "SEO", "Design Premium"],
    color: "from-blue-600 to-indigo-900",
    year: "2024",
  },
  {
    key: "p2" as const,
    url: "https://portugalpratico.netlify.app/",
    tags: ["Portal", "Next.js", "UX", "Conteúdo"],
    color: "from-emerald-600 to-teal-900",
    year: "2024",
  },
];

function BrowserMockup({ url, color }: { url: string; color: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10">
      <div className="bg-gray-800 px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/80" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <div className="w-2 h-2 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 bg-gray-700 rounded px-2 py-0.5 text-[10px] text-gray-400 font-mono truncate">
          {url}
        </div>
      </div>
      <div className={`h-40 bg-gradient-to-br ${color} relative`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {realProjects.map((project, i) => {
            const title    = t.portfolio[`${project.key}_title`    as "p1_title"    | "p2_title"];
            const category = t.portfolio[`${project.key}_category` as "p1_category" | "p2_category"];
            const desc     = t.portfolio[`${project.key}_desc`     as "p1_desc"     | "p2_desc"];

            return (
              <motion.article
                key={project.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all hover:shadow-xl"
              >
                <div className="p-5">
                  <BrowserMockup url={project.url} color={project.color} />
                </div>

                <div className="px-8 pb-8">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-white/70 bg-white/10 px-3 py-1.5 rounded-full">
                        {category}
                      </span>
                      <span className="text-xs text-white/40">{project.year}</span>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {t.portfolio.visit_site} <ExternalLink size={11} />
                    </a>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500 bg-gray-800 px-2.5 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Coming soon card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-gray-800 border-dashed rounded-2xl p-10 text-center"
        >
          <p className="text-lg font-semibold text-white mb-2">{t.portfolio.coming_soon}</p>
          <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">{t.portfolio.coming_soon_desc}</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            {t.nav.contact} <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
