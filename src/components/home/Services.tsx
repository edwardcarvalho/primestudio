"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Zap, Search, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites Profissionais",
    description:
      "Sites de presença institucional ou e-commerce com design premium, otimizados para converter visitantes em leads.",
    benefits: ["Design personalizado", "Mobile-first", "CMS integrado"],
    color: "blue",
  },
  {
    icon: Zap,
    title: "Landing Pages de Conversão",
    description:
      "Páginas dedicadas para campanhas pagas ou orgânicas, construídas com foco total em conversão e resultados mensuráveis.",
    benefits: ["Taxa de conversão elevada", "A/B testing", "Integração com CRM"],
    color: "violet",
  },
  {
    icon: Search,
    title: "SEO Técnico",
    description:
      "Auditoria completa e implementação de SEO on-page, técnico e de conteúdo para aparecer no topo do Google.",
    benefits: ["Audit completo", "Keywords estratégicas", "Relatório mensal"],
    color: "emerald",
  },
  {
    icon: Wrench,
    title: "Manutenção e Suporte",
    description:
      "Serviço contínuo de actualizações, backups, segurança e melhorias técnicas para manter o seu site sempre no melhor estado.",
    benefits: ["Backups diários", "Actualizações de segurança", "Suporte prioritário"],
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  violet: "bg-violet-50 text-violet-600",
  emerald: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
};

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Serviços
          </p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Tudo o que precisa para crescer online
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Não somos generalistas. Especializamo-nos em presença digital de alto desempenho
            para empresas que levam a sério o crescimento online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-gray-50 hover:bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colorMap[service.color]}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1 h-1 bg-blue-600 rounded-full shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/servicos"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:gap-2.5 transition-all"
                >
                  Saber mais <ArrowRight size={13} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
