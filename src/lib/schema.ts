export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://primestudio.pt/#organization",
        name: "Prime Studio",
        url: "https://primestudio.pt",
        logo: {
          "@type": "ImageObject",
          url: "https://primestudio.pt/logo.svg",
          width: 180,
          height: 40,
        },
        description:
          "Agência web portuguesa especializada em criação de websites profissionais, landing pages de alta conversão e SEO técnico.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PT",
          addressRegion: "Portugal",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "hello@primestudio.pt",
          availableLanguage: ["Portuguese"],
        },
        sameAs: [
          "https://www.linkedin.com/company/primestudio",
          "https://www.instagram.com/primestudio.pt",
        ],
        priceRange: "€€",
        serviceType: [
          "Criação de websites",
          "Landing pages",
          "SEO técnico",
          "Manutenção web",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://primestudio.pt/#website",
        url: "https://primestudio.pt",
        name: "Prime Studio",
        description: "Websites profissionais que transformam visitas em clientes.",
        publisher: {
          "@id": "https://primestudio.pt/#organization",
        },
        inLanguage: "pt-PT",
      },
    ],
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: "Prime Studio",
      url: "https://primestudio.pt",
    },
    areaServed: {
      "@type": "Country",
      name: "Portugal",
    },
  };
}
