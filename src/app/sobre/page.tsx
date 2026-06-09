import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "Sobre Nós — Quem é a Prime Studio",
  description:
    "Somos a Prime Studio, uma agência web portuguesa focada em criar presença digital que gera resultados reais. Conheça a nossa missão, valores e abordagem.",
  alternates: {
    canonical: "https://primestudio.pt/sobre",
  },
  openGraph: {
    title: "Sobre Nós | Prime Studio",
    description:
      "Agência web portuguesa focada em criar presença digital que gera resultados reais.",
    url: "https://primestudio.pt/sobre",
  },
};

export default function SobrePage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutCTA />
    </>
  );
}
