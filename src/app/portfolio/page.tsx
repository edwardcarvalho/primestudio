import type { Metadata } from "next";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata: Metadata = {
  title: "Portfólio — Projetos Web que Geram Resultados",
  description:
    "Veja os projetos da Prime Studio: websites e landing pages criados para empresas que querem crescer online. Resultados reais, design profissional e performance comprovada.",
  alternates: {
    canonical: "https://primestudio.pt/portfolio",
  },
  openGraph: {
    title: "Portfólio | Prime Studio",
    description: "Projetos web criados para empresas que querem crescer online.",
    url: "https://primestudio.pt/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
    </>
  );
}
