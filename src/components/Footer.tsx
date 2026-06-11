"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { useLanguage } from "@/contexts/LanguageContext";

function FooterInner() {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t.nav.services,
      links: [
        { label: t.services.s1_title, href: "/servicos#websites" },
        { label: t.services.s2_title, href: "/servicos#landing-pages" },
        { label: t.services.s3_title, href: "/servicos#seo" },
        { label: t.services.s4_title, href: "/servicos#manutencao" },
      ],
    },
    {
      title: "Prime Studio",
      links: [
        { label: t.nav.about, href: "/sobre" },
        { label: t.nav.portfolio, href: "/portfolio" },
        { label: t.nav.contact, href: "/contacto" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Logo dark size={34} asSpan />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              {t.footer.tagline}
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t.footer.cta_btn}
              <ArrowRight size={15} />
            </Link>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-white text-sm font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Prime Studio. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:contacto@primestudio.pt"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://linkedin.com/company/primestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-xs font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/primestudio.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-xs font-semibold"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return <FooterInner />;
}
