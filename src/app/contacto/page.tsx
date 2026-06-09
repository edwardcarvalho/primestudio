import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Peça o Seu Orçamento Gratuito",
  description:
    "Fale connosco e receba um orçamento gratuito para o seu website. A Prime Studio responde em menos de 24 horas. Vamos transformar a sua presença digital.",
  alternates: {
    canonical: "https://primestudio.pt/contacto",
  },
  openGraph: {
    title: "Contacto | Prime Studio",
    description: "Peça um orçamento gratuito. Respondemos em menos de 24 horas.",
    url: "https://primestudio.pt/contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
