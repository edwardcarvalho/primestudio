"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const realProjects = [
  {
    key: "p1" as const,
    url: "https://primeestores.pt/",
    color: "from-blue-600 to-indigo-800",
    tags: ["Serviços", "SEO", "Design Premium"],
  },
  {
    key: "p2" as const,
    url: "https://portugalpratico.pt/",
    color: "from-emerald-600 to-teal-800",
    tags: ["Portal", "Next.js", "UX"],
  },
];

function BrowserMockup({ url, color }: { url: string; color: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Browser chrome */}
      <div className="bg-gray-800 px-3 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-[10px] text-gray-400 font-mono truncate">
          {url}
        </div>
      </div>
      {/* Site preview */}
      <div className={`h-36 bg-gradient-to-br ${color} relative`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <ExternalLink size={14} className="text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { t } = useLanguage();

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
              {t.portfolio.label}
            </p>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              {t.portfolio.h2}
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white font-medium transition-colors whitespace-nowrap"
          >
            {t.portfolio.cta_all} <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {realProjects.map((project, i) => {
            const title = t.portfolio[`${project.key}_title` as "p1_title" | "p2_title"];
            const category = t.portfolio[`${project.key}_category` as "p1_category" | "p2_category"];
            const desc = t.portfolio[`${project.key}_desc` as "p1_desc" | "p2_desc"];

            return (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all hover:shadow-xl"
              >
                <div className="p-5">
                  <BrowserMockup url={project.url} color={project.color} />
                </div>

                <div className="px-7 pb-7">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-800 px-2.5 py-1 rounded-full">
                        {category}
                      </span>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-0.5"
                    >
                      {t.portfolio.visit_site} <ExternalLink size={11} />
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-3 mb-2">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500 bg-gray-800 px-2.5 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
