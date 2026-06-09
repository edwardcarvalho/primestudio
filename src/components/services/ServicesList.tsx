"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Zap, Search, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "Websites Profissionais",
    tagline: "A sua melhor ferramenta de vendas",
    description:
      "Um website profissional é o cartão de visita mais poderoso da sua empresa. Criamos sites institucionais e de comércio electrónico com design premium, arquitectura optimizada para conversão e SEO técnico integrado desde o início.",
    features: [
      "Design 100% personalizado à sua marca",
      "Mobile-first e compatível com todos os dispositivos",
      "CMS para gestão autónoma de conteúdo",
      "Integração com Google Analytics e Search Console",
      "Certificado SSL e HTTPS incluído",
      "Velocidade de carregamento optimizada",
    ],
    cta: "Pedir orçamento para website",
    accent: "blue",
  },
  {
    id: "landing-pages",
    icon: Zap,
    title: "Landing Pages de Alta Conversão",
    tagline: "Páginas que transformam cliques em clientes",
    description:
      "As landing pages são a arma secreta das empresas com crescimento rápido. Criamos páginas dedicadas para campanhas pagas e orgânicas, com arquitectura focada em conversão, provas sociais estratégicas e CTAs irresistíveis.",
    features: [
      "Estrutura de conversão baseada em dados",
      "Integração com Google Ads e Meta Ads",
      "Formulários de captação de leads optimizados",
      "Pixel de rastreamento configurado",
      "A/B testing e optimização contínua",
      "Integração com CRM e email marketing",
    ],
    cta: "Pedir orçamento para landing page",
    accent: "violet",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Técnico",
    tagline: "Apareça no topo quando os seus clientes pesquisam",
    description:
      "O SEO é o canal de aquisição com melhor ROI a longo prazo. Fazemos auditoria técnica completa, optimização on-page, estratégia de keywords e link building para colocar o seu site nas primeiras posições do Google.",
    features: [
      "Auditoria SEO técnica completa",
      "Pesquisa e estratégia de keywords",
      "Optimização de títulos, meta descriptions e estrutura",
      "Schema markup e dados estruturados",
      "Análise de concorrência e gap de conteúdo",
      "Relatório mensal de posicionamento",
    ],
    cta: "Pedir auditoria SEO gratuita",
    accent: "emerald",
  },
  {
    id: "manutencao",
    icon: Wrench,
    title: "Manutenção e Suporte",
    tagline: "O seu site sempre a funcionar a 100%",
    description:
      "Um site sem manutenção fica desactualizado, lento e vulnerável. O nosso plano de manutenção garante que o seu site está sempre actualizado, seguro e com performance máxima — para que se foque no seu negócio.",
    features: [
      "Actualizações de software e segurança",
      "Backups automáticos diários",
      "Monitorização 24/7 de uptime",
      "Optimização contínua de performance",
      "Suporte técnico por email e WhatsApp",
      "Relatório mensal de estado do site",
    ],
    cta: "Ver planos de manutenção",
    accent: "amber",
  },
];

const accentStyles: Record<string, { icon: string; tag: string; border: string }> = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    tag: "bg-blue-50 text-blue-700",
    border: "border-blue-100",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600",
    tag: "bg-violet-50 text-violet-700",
    border: "border-violet-100",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    tag: "bg-emerald-50 text-emerald-700",
    border: "border-emerald-100",
  },
  amber: {
    icon: "bg-amber-50 text-amber-600",
    tag: "bg-amber-50 text-amber-700",
    border: "border-amber-100",
  },
};

export default function ServicesList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
        {services.map((service, i) => {
          const Icon = service.icon;
          const styles = accentStyles[service.accent];

          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 ${styles.tag}`}>
                  <Icon size={13} />
                  {service.title}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">
                  {service.tagline}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-7">{service.description}</p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  {service.cta}
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className={`bg-gray-50 rounded-2xl p-8 border ${styles.border} ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${styles.icon}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">O que está incluído</h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
