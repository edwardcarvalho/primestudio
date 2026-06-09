import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Serviços — Websites, Landing Pages e SEO",
  description:
    "Conheça todos os serviços da Prime Studio: criação de websites profissionais, landing pages de alta conversão, SEO técnico e manutenção. Soluções web para empresas em Portugal.",
  alternates: {
    canonical: "https://primestudio.pt/servicos",
  },
  openGraph: {
    title: "Serviços | Prime Studio",
    description:
      "Websites profissionais, landing pages e SEO para empresas que querem crescer online.",
    url: "https://primestudio.pt/servicos",
  },
};

export default function ServicosPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </>
  );
}
