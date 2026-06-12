export type Locale = "pt" | "en" | "es" | "fr" | "it" | "de";

export const localeNames: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
  fr: "FR",
  it: "IT",
  de: "DE",
};

export const localeFlags: Record<Locale, string> = {
  pt: "🇵🇹",
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
  it: "🇮🇹",
  de: "🇩🇪",
};

export type Translations = {
  nav: {
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    h1_1: string;
    h1_accent: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    proof_1: string;
    proof_2: string;
    proof_3: string;
    stat_1_label: string;
    stat_2_label: string;
    stat_3_label: string;
    stat_4_label: string;
  };
  social_proof: {
    trusted_by: string;
  };
  services: {
    label: string;
    h2: string;
    subtitle: string;
    s1_title: string;
    s1_desc: string;
    s1_b1: string;
    s1_b2: string;
    s1_b3: string;
    s2_title: string;
    s2_desc: string;
    s2_b1: string;
    s2_b2: string;
    s2_b3: string;
    s3_title: string;
    s3_desc: string;
    s3_b1: string;
    s3_b2: string;
    s3_b3: string;
    s4_title: string;
    s4_desc: string;
    s4_b1: string;
    s4_b2: string;
    s4_b3: string;
    learn_more: string;
  };
  portfolio: {
    label: string;
    h2: string;
    cta_all: string;
    p1_title: string;
    p1_category: string;
    p1_desc: string;
    p2_title: string;
    p2_category: string;
    p2_desc: string;
    coming_soon: string;
    coming_soon_desc: string;
    visit_site: string;
  };
  process: {
    label: string;
    h2: string;
    subtitle: string;
    step_1_title: string;
    step_1_desc: string;
    step_2_title: string;
    step_2_desc: string;
    step_3_title: string;
    step_3_desc: string;
    step_4_title: string;
    step_4_desc: string;
  };
  cta: {
    h2_1: string;
    h2_accent: string;
    subtitle: string;
    btn_primary: string;
    btn_whatsapp: string;
    note: string;
  };
  footer: {
    tagline: string;
    cta_btn: string;
    copyright: string;
  };
  services_page: {
    label: string;
    h1: string;
    subtitle: string;
  };
  portfolio_page: {
    label: string;
    h1: string;
    subtitle: string;
  };
  about_page: {
    label: string;
    h1: string;
    subtitle: string;
  };
  contact_page: {
    label: string;
    h1: string;
    subtitle: string;
    info_1_title: string;
    info_1_text: string;
    info_2_title: string;
    info_2_text: string;
    info_3_title: string;
    info_3_text: string;
  };
  contact_form: {
    form_title: string;
    form_subtitle: string;
    name: string;
    email: string;
    company: string;
    service: string;
    budget: string;
    message: string;
    submit: string;
    submit_full: string;
    submitting: string;
    success_title: string;
    success_text: string;
    placeholder_name: string;
    placeholder_email: string;
    placeholder_company: string;
    placeholder_message: string;
    service_placeholder: string;
    service_websites: string;
    service_landing: string;
    service_seo: string;
    service_maintenance: string;
    service_other: string;
    budget_placeholder: string;
    budget_1: string;
    budget_2: string;
    budget_3: string;
    budget_4: string;
    budget_5: string;
    privacy: string;
  };
  whatsapp: {
    tooltip: string;
  };
};

const pt: Translations = {
  nav: {
    services: "Serviços",
    portfolio: "Portfólio",
    about: "Sobre",
    contact: "Contacto",
    cta: "Pedir orçamento",
  },
  hero: {
    badge: "Agência web em Portugal",
    h1_1: "Criamos websites que",
    h1_accent: "geram clientes",
    subtitle:
      "Design premium, performance técnica e SEO integrado. Transformamos a sua presença digital numa máquina de gerar negócio — não apenas um site bonito.",
    cta_primary: "Pedir orçamento gratuito",
    cta_secondary: "Ver portfólio",
    proof_1: "Websites entregues em 2–4 semanas",
    proof_2: "Performance Lighthouse > 95",
    proof_3: "SEO incluído em todos os projetos",
    stat_1_label: "Projetos entregues",
    stat_2_label: "Score Lighthouse",
    stat_3_label: "Semanas de entrega",
    stat_4_label: "Clientes satisfeitos",
  },
  social_proof: {
    trusted_by: "Empresas que confiam em nós",
  },
  services: {
    label: "Serviços",
    h2: "Tudo o que precisa para crescer online",
    subtitle:
      "Não somos generalistas. Especializamo-nos em presença digital de alto desempenho para empresas que levam a sério o crescimento online.",
    s1_title: "Websites Profissionais",
    s1_desc:
      "Sites de presença institucional ou e-commerce com design premium, otimizados para converter visitantes em leads.",
    s1_b1: "Design personalizado",
    s1_b2: "Mobile-first",
    s1_b3: "CMS integrado",
    s2_title: "Landing Pages de Conversão",
    s2_desc:
      "Páginas dedicadas para campanhas pagas ou orgânicas, construídas com foco total em conversão e resultados mensuráveis.",
    s2_b1: "Taxa de conversão elevada",
    s2_b2: "A/B testing",
    s2_b3: "Integração com CRM",
    s3_title: "SEO Técnico",
    s3_desc:
      "Auditoria completa e implementação de SEO on-page, técnico e de conteúdo para aparecer no topo do Google.",
    s3_b1: "Audit completo",
    s3_b2: "Keywords estratégicas",
    s3_b3: "Relatório mensal",
    s4_title: "Manutenção e Suporte",
    s4_desc:
      "Serviço contínuo de actualizações, backups, segurança e melhorias técnicas para manter o seu site sempre no melhor estado.",
    s4_b1: "Backups diários",
    s4_b2: "Actualizações de segurança",
    s4_b3: "Suporte prioritário",
    learn_more: "Saber mais",
  },
  portfolio: {
    label: "Portfólio",
    h2: "Resultados que falam por si",
    cta_all: "Ver todos os projectos",
    p1_title: "Prime Estores",
    p1_category: "Website de Serviços",
    p1_desc:
      "Website profissional para empresa especializada em reparação e instalação de estores, persianas e instalações eléctricas. Presença digital clara que facilita o contacto com novos clientes.",
    p2_title: "Portugal Prático",
    p2_category: "Portal de Informação",
    p2_desc:
      "Portal informativo com guias práticos, recursos e dicas essenciais sobre vida em Portugal — para residentes e visitantes.",
    coming_soon: "Mais projectos em breve",
    coming_soon_desc: "Estamos a preparar novos casos de estudo. Contacte-nos para ver o nosso portfólio completo.",
    visit_site: "Visitar site",
  },
  process: {
    label: "Processo",
    h2: "Como trabalhamos",
    subtitle:
      "Um processo claro e transparente, do briefing ao lançamento — sem surpresas, sem atrasos desnecessários.",
    step_1_title: "Descoberta",
    step_1_desc:
      "Análise detalhada do seu negócio, mercado e concorrência. Definimos objetivos claros e KPIs mensuráveis.",
    step_2_title: "Estratégia & Design",
    step_2_desc:
      "Criamos a arquitectura de informação e o design visual alinhado com a sua marca. Aprovação antes de construir.",
    step_3_title: "Desenvolvimento",
    step_3_desc:
      "Construção com código limpo, performance máxima e SEO técnico integrado desde o primeiro dia.",
    step_4_title: "Lançamento & Crescimento",
    step_4_desc:
      "Publicação, monitorização e acompanhamento contínuo para garantir que o site gera resultados reais.",
  },
  cta: {
    h2_1: "Pronto para ter um site que",
    h2_accent: "trabalha por si?",
    subtitle:
      "Peça um orçamento gratuito hoje. Analisamos o seu caso e respondemos em menos de 24 horas com uma proposta personalizada.",
    btn_primary: "Pedir orçamento gratuito",
    btn_whatsapp: "WhatsApp",
    note: "Resposta garantida em menos de 24 horas. Sem compromisso.",
  },
  footer: {
    tagline:
      "Websites profissionais que transformam visitas em clientes. Ajudamos empresas portuguesas a crescer online com presença digital de alto nível.",
    cta_btn: "Pedir orçamento",
    copyright: "Todos os direitos reservados.",
  },
  services_page: {
    label: "Serviços",
    h1: "Soluções web para empresas que querem resultados",
    subtitle:
      "Cada serviço é pensado para gerar impacto real no seu negócio — não apenas entregamos websites, entregamos crescimento online.",
  },
  portfolio_page: {
    label: "Portfólio",
    h1: "Projectos que transformam negócios",
    subtitle:
      "Cada projecto é uma parceria. Trabalhamos lado a lado com os nossos clientes para criar soluções digitais que geram resultados reais.",
  },
  about_page: {
    label: "Sobre nós",
    h1: "Ajudamos empresas a crescer com presença digital séria",
    subtitle:
      "A Prime Studio nasceu com uma convicção: as PMEs portuguesas merecem websites do mesmo nível das grandes empresas — sem os preços inflacionados das grandes agências.",
  },
  contact_page: {
    label: "Contacto",
    h1: "Vamos transformar o seu negócio online",
    subtitle:
      "Peça um orçamento gratuito. Analisamos o seu caso e respondemos com uma proposta personalizada em menos de 24 horas.",
    info_1_title: "Resposta em 24 horas",
    info_1_text: "Comprometemo-nos a responder a todos os pedidos dentro de 1 dia útil.",
    info_2_title: "contacto@primestudio.pt",
    info_2_text: "Para questões gerais e projectos.",
    info_3_title: "WhatsApp disponível",
    info_3_text: "Para conversas mais rápidas e informais.",
  },
  contact_form: {
    form_title: "Pedir orçamento",
    form_subtitle: "Preencha o formulário e receba uma proposta gratuita.",
    name: "Nome",
    email: "Email",
    company: "Empresa",
    service: "Serviço de interesse",
    budget: "Orçamento previsto",
    message: "Mensagem",
    submit: "Enviar pedido",
    submit_full: "Enviar pedido de orçamento",
    submitting: "A enviar...",
    success_title: "Mensagem enviada!",
    success_text: "Recebemos o seu pedido. Vamos analisar e responder em menos de 24 horas com uma proposta personalizada.",
    placeholder_name: "O seu nome",
    placeholder_email: "email@empresa.pt",
    placeholder_company: "Nome da sua empresa (opcional)",
    placeholder_message: "Descreva o seu projecto — o que precisa, qual o objectivo, prazo...",
    service_placeholder: "Seleccionar serviço",
    service_websites: "Website Profissional",
    service_landing: "Landing Page",
    service_seo: "SEO Técnico",
    service_maintenance: "Manutenção e Suporte",
    service_other: "Outro",
    budget_placeholder: "Seleccionar orçamento",
    budget_1: "Menos de €1.000",
    budget_2: "€1.000 – €3.000",
    budget_3: "€3.000 – €7.000",
    budget_4: "Mais de €7.000",
    budget_5: "Ainda não sei",
    privacy: "Os seus dados são tratados de forma confidencial. Não partilhamos informação com terceiros.",
  },
  whatsapp: {
    tooltip: "Falar no WhatsApp",
  },
};

const en: Translations = {
  nav: {
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    cta: "Get a quote",
  },
  hero: {
    badge: "Web agency in Portugal",
    h1_1: "We create websites that",
    h1_accent: "generate clients",
    subtitle:
      "Premium design, technical performance and integrated SEO. We transform your digital presence into a client-generating machine — not just a pretty website.",
    cta_primary: "Request free quote",
    cta_secondary: "View portfolio",
    proof_1: "Websites delivered in 2–4 weeks",
    proof_2: "Lighthouse Performance > 95",
    proof_3: "SEO included in all projects",
    stat_1_label: "Delivered projects",
    stat_2_label: "Lighthouse Score",
    stat_3_label: "Weeks to deliver",
    stat_4_label: "Satisfied clients",
  },
  social_proof: {
    trusted_by: "Companies that trust us",
  },
  services: {
    label: "Services",
    h2: "Everything you need to grow online",
    subtitle:
      "We are not generalists. We specialise in high-performance digital presence for companies that take online growth seriously.",
    s1_title: "Professional Websites",
    s1_desc:
      "Institutional or e-commerce websites with premium design, optimised to convert visitors into leads.",
    s1_b1: "Custom design",
    s1_b2: "Mobile-first",
    s1_b3: "Integrated CMS",
    s2_title: "Conversion Landing Pages",
    s2_desc:
      "Dedicated pages for paid or organic campaigns, built with total focus on conversion and measurable results.",
    s2_b1: "High conversion rate",
    s2_b2: "A/B testing",
    s2_b3: "CRM integration",
    s3_title: "Technical SEO",
    s3_desc:
      "Complete audit and implementation of on-page, technical and content SEO to rank at the top of Google.",
    s3_b1: "Full audit",
    s3_b2: "Strategic keywords",
    s3_b3: "Monthly report",
    s4_title: "Maintenance & Support",
    s4_desc:
      "Continuous service of updates, backups, security and technical improvements to keep your site always at its best.",
    s4_b1: "Daily backups",
    s4_b2: "Security updates",
    s4_b3: "Priority support",
    learn_more: "Learn more",
  },
  portfolio: {
    label: "Portfolio",
    h2: "Results that speak for themselves",
    cta_all: "View all projects",
    p1_title: "Prime Estores",
    p1_category: "Services Website",
    p1_desc:
      "Professional website for a company specialised in repair and installation of blinds, shutters and electrical installations. Clear digital presence that makes it easy for new clients to get in touch.",
    p2_title: "Portugal Prático",
    p2_category: "Information Portal",
    p2_desc:
      "Informative portal with practical guides, resources and essential tips about life in Portugal — for residents and visitors.",
    coming_soon: "More projects coming soon",
    coming_soon_desc: "We are preparing new case studies. Contact us to see our full portfolio.",
    visit_site: "Visit site",
  },
  process: {
    label: "Process",
    h2: "How we work",
    subtitle:
      "A clear and transparent process, from briefing to launch — no surprises, no unnecessary delays.",
    step_1_title: "Discovery",
    step_1_desc:
      "Detailed analysis of your business, market and competition. We define clear objectives and measurable KPIs.",
    step_2_title: "Strategy & Design",
    step_2_desc:
      "We create the information architecture and visual design aligned with your brand. Approval before building.",
    step_3_title: "Development",
    step_3_desc:
      "Built with clean code, maximum performance and integrated technical SEO from day one.",
    step_4_title: "Launch & Growth",
    step_4_desc:
      "Publishing, monitoring and ongoing support to ensure the site generates real results.",
  },
  cta: {
    h2_1: "Ready to have a website that",
    h2_accent: "works for you?",
    subtitle:
      "Request a free quote today. We analyse your case and respond in less than 24 hours with a personalised proposal.",
    btn_primary: "Request free quote",
    btn_whatsapp: "WhatsApp",
    note: "Guaranteed response in less than 24 hours. No commitment.",
  },
  footer: {
    tagline:
      "Professional websites that turn visitors into clients. We help Portuguese businesses grow online with high-level digital presence.",
    cta_btn: "Get a quote",
    copyright: "All rights reserved.",
  },
  services_page: {
    label: "Services",
    h1: "Web solutions for businesses that want results",
    subtitle:
      "Each service is designed to generate real impact on your business — we don't just deliver websites, we deliver online growth.",
  },
  portfolio_page: {
    label: "Portfolio",
    h1: "Projects that transform businesses",
    subtitle:
      "Each project is a partnership. We work side by side with our clients to create digital solutions that generate real results.",
  },
  about_page: {
    label: "About us",
    h1: "We help businesses grow with serious digital presence",
    subtitle:
      "Prime Studio was born with a conviction: Portuguese SMEs deserve websites at the same level as large companies — without the inflated prices of large agencies.",
  },
  contact_page: {
    label: "Contact",
    h1: "Let's transform your business online",
    subtitle:
      "Request a free quote. We analyse your case and respond with a personalised proposal in less than 24 hours.",
    info_1_title: "Response in 24 hours",
    info_1_text: "We commit to responding to all requests within 1 business day.",
    info_2_title: "contacto@primestudio.pt",
    info_2_text: "For general enquiries and projects.",
    info_3_title: "WhatsApp available",
    info_3_text: "For faster and more informal conversations.",
  },
  contact_form: {
    form_title: "Request a quote",
    form_subtitle: "Fill in the form and receive a free proposal.",
    name: "Name",
    email: "Email",
    company: "Company",
    service: "Service of interest",
    budget: "Estimated budget",
    message: "Message",
    submit: "Send request",
    submit_full: "Send quote request",
    submitting: "Sending...",
    success_title: "Message sent!",
    success_text: "We received your request. We will analyse and respond in less than 24 hours with a personalised proposal.",
    placeholder_name: "Your name",
    placeholder_email: "email@company.com",
    placeholder_company: "Your company name (optional)",
    placeholder_message: "Describe your project — what you need, the goal, timeline...",
    service_placeholder: "Select a service",
    service_websites: "Professional Website",
    service_landing: "Landing Page",
    service_seo: "Technical SEO",
    service_maintenance: "Maintenance & Support",
    service_other: "Other",
    budget_placeholder: "Select a budget",
    budget_1: "Under €1,000",
    budget_2: "€1,000 – €3,000",
    budget_3: "€3,000 – €7,000",
    budget_4: "Over €7,000",
    budget_5: "Not sure yet",
    privacy: "Your data is handled confidentially. We do not share information with third parties.",
  },
  whatsapp: {
    tooltip: "Chat on WhatsApp",
  },
};

const es: Translations = {
  nav: {
    services: "Servicios",
    portfolio: "Portfolio",
    about: "Sobre nosotros",
    contact: "Contacto",
    cta: "Pedir presupuesto",
  },
  hero: {
    badge: "Agencia web en Portugal",
    h1_1: "Creamos sitios web que",
    h1_accent: "generan clientes",
    subtitle:
      "Diseño premium, rendimiento técnico y SEO integrado. Transformamos tu presencia digital en una máquina de generar negocio — no solo un sitio bonito.",
    cta_primary: "Pedir presupuesto gratis",
    cta_secondary: "Ver portfolio",
    proof_1: "Sitios web entregados en 2–4 semanas",
    proof_2: "Rendimiento Lighthouse > 95",
    proof_3: "SEO incluido en todos los proyectos",
    stat_1_label: "Proyectos entregados",
    stat_2_label: "Puntuación Lighthouse",
    stat_3_label: "Semanas de entrega",
    stat_4_label: "Clientes satisfechos",
  },
  social_proof: {
    trusted_by: "Empresas que confían en nosotros",
  },
  services: {
    label: "Servicios",
    h2: "Todo lo que necesitas para crecer online",
    subtitle:
      "No somos generalistas. Nos especializamos en presencia digital de alto rendimiento para empresas que toman en serio el crecimiento online.",
    s1_title: "Sitios Web Profesionales",
    s1_desc:
      "Sitios de presencia institucional o e-commerce con diseño premium, optimizados para convertir visitantes en clientes potenciales.",
    s1_b1: "Diseño personalizado",
    s1_b2: "Mobile-first",
    s1_b3: "CMS integrado",
    s2_title: "Landing Pages de Conversión",
    s2_desc:
      "Páginas dedicadas para campañas de pago u orgánicas, creadas con total enfoque en la conversión y resultados medibles.",
    s2_b1: "Alta tasa de conversión",
    s2_b2: "A/B testing",
    s2_b3: "Integración con CRM",
    s3_title: "SEO Técnico",
    s3_desc:
      "Auditoría completa e implementación de SEO on-page, técnico y de contenido para aparecer en lo alto de Google.",
    s3_b1: "Auditoría completa",
    s3_b2: "Keywords estratégicas",
    s3_b3: "Informe mensual",
    s4_title: "Mantenimiento y Soporte",
    s4_desc:
      "Servicio continuo de actualizaciones, copias de seguridad, seguridad y mejoras técnicas para mantener tu sitio siempre en óptimas condiciones.",
    s4_b1: "Copias de seguridad diarias",
    s4_b2: "Actualizaciones de seguridad",
    s4_b3: "Soporte prioritario",
    learn_more: "Saber más",
  },
  portfolio: {
    label: "Portfolio",
    h2: "Resultados que hablan por sí solos",
    cta_all: "Ver todos los proyectos",
    p1_title: "Prime Estores",
    p1_category: "Sitio Web de Servicios",
    p1_desc:
      "Sitio web profesional para empresa especializada en reparación e instalación de persianas, estores e instalaciones eléctricas. Presencia digital clara que facilita el contacto con nuevos clientes.",
    p2_title: "Portugal Prático",
    p2_category: "Portal de Información",
    p2_desc:
      "Portal informativo con guías prácticas, recursos y consejos esenciales sobre la vida en Portugal — para residentes y visitantes.",
    coming_soon: "Más proyectos próximamente",
    coming_soon_desc: "Estamos preparando nuevos casos de estudio. Contáctenos para ver nuestro portfolio completo.",
    visit_site: "Visitar sitio",
  },
  process: {
    label: "Proceso",
    h2: "Cómo trabajamos",
    subtitle:
      "Un proceso claro y transparente, desde el briefing hasta el lanzamiento — sin sorpresas, sin retrasos innecesarios.",
    step_1_title: "Descubrimiento",
    step_1_desc:
      "Análisis detallado de tu negocio, mercado y competencia. Definimos objetivos claros y KPIs medibles.",
    step_2_title: "Estrategia & Diseño",
    step_2_desc:
      "Creamos la arquitectura de información y el diseño visual alineado con tu marca. Aprobación antes de construir.",
    step_3_title: "Desarrollo",
    step_3_desc:
      "Construcción con código limpio, máximo rendimiento y SEO técnico integrado desde el primer día.",
    step_4_title: "Lanzamiento & Crecimiento",
    step_4_desc:
      "Publicación, monitorización y seguimiento continuo para garantizar que el sitio genere resultados reales.",
  },
  cta: {
    h2_1: "¿Listo para tener un sitio web que",
    h2_accent: "trabaje para ti?",
    subtitle:
      "Pide un presupuesto gratuito hoy. Analizamos tu caso y respondemos en menos de 24 horas con una propuesta personalizada.",
    btn_primary: "Pedir presupuesto gratis",
    btn_whatsapp: "WhatsApp",
    note: "Respuesta garantizada en menos de 24 horas. Sin compromiso.",
  },
  footer: {
    tagline:
      "Sitios web profesionales que convierten visitas en clientes. Ayudamos a empresas portuguesas a crecer online con presencia digital de alto nivel.",
    cta_btn: "Pedir presupuesto",
    copyright: "Todos los derechos reservados.",
  },
  services_page: {
    label: "Servicios",
    h1: "Soluciones web para empresas que quieren resultados",
    subtitle:
      "Cada servicio está pensado para generar un impacto real en tu negocio — no solo entregamos sitios web, entregamos crecimiento online.",
  },
  portfolio_page: {
    label: "Portfolio",
    h1: "Proyectos que transforman negocios",
    subtitle:
      "Cada proyecto es una alianza. Trabajamos codo a codo con nuestros clientes para crear soluciones digitales que generen resultados reales.",
  },
  about_page: {
    label: "Sobre nosotros",
    h1: "Ayudamos a las empresas a crecer con una presencia digital seria",
    subtitle:
      "Prime Studio nació con una convicción: las pymes portuguesas merecen sitios web al mismo nivel que las grandes empresas — sin los precios inflados de las grandes agencias.",
  },
  contact_page: {
    label: "Contacto",
    h1: "Transformemos tu negocio online",
    subtitle:
      "Pide un presupuesto gratuito. Analizamos tu caso y respondemos con una propuesta personalizada en menos de 24 horas.",
    info_1_title: "Respuesta en 24 horas",
    info_1_text: "Nos comprometemos a responder a todas las solicitudes en 1 día hábil.",
    info_2_title: "contacto@primestudio.pt",
    info_2_text: "Para consultas generales y proyectos.",
    info_3_title: "WhatsApp disponible",
    info_3_text: "Para conversaciones más rápidas e informales.",
  },
  contact_form: {
    form_title: "Pedir presupuesto",
    form_subtitle: "Rellena el formulario y recibe una propuesta gratuita.",
    name: "Nombre",
    email: "Email",
    company: "Empresa",
    service: "Servicio de interés",
    budget: "Presupuesto previsto",
    message: "Mensaje",
    submit: "Enviar solicitud",
    submit_full: "Enviar solicitud de presupuesto",
    submitting: "Enviando...",
    success_title: "¡Mensaje enviado!",
    success_text: "Recibimos tu solicitud. Analizaremos y responderemos en menos de 24 horas con una propuesta personalizada.",
    placeholder_name: "Tu nombre",
    placeholder_email: "email@empresa.com",
    placeholder_company: "Nombre de tu empresa (opcional)",
    placeholder_message: "Describe tu proyecto — qué necesitas, el objetivo, el plazo...",
    service_placeholder: "Seleccionar servicio",
    service_websites: "Sitio Web Profesional",
    service_landing: "Landing Page",
    service_seo: "SEO Técnico",
    service_maintenance: "Mantenimiento y Soporte",
    service_other: "Otro",
    budget_placeholder: "Seleccionar presupuesto",
    budget_1: "Menos de €1.000",
    budget_2: "€1.000 – €3.000",
    budget_3: "€3.000 – €7.000",
    budget_4: "Más de €7.000",
    budget_5: "Aún no lo sé",
    privacy: "Tus datos se tratan de forma confidencial. No compartimos información con terceros.",
  },
  whatsapp: {
    tooltip: "Chatear por WhatsApp",
  },
};

const fr: Translations = {
  nav: {
    services: "Services",
    portfolio: "Portfolio",
    about: "À propos",
    contact: "Contact",
    cta: "Demander un devis",
  },
  hero: {
    badge: "Agence web au Portugal",
    h1_1: "Nous créons des sites web qui",
    h1_accent: "génèrent des clients",
    subtitle:
      "Design premium, performance technique et SEO intégré. Nous transformons votre présence digitale en une machine à générer des affaires — pas seulement un joli site.",
    cta_primary: "Demander un devis gratuit",
    cta_secondary: "Voir le portfolio",
    proof_1: "Sites web livrés en 2–4 semaines",
    proof_2: "Performance Lighthouse > 95",
    proof_3: "SEO inclus dans tous les projets",
    stat_1_label: "Projets livrés",
    stat_2_label: "Score Lighthouse",
    stat_3_label: "Semaines de livraison",
    stat_4_label: "Clients satisfaits",
  },
  social_proof: {
    trusted_by: "Entreprises qui nous font confiance",
  },
  services: {
    label: "Services",
    h2: "Tout ce dont vous avez besoin pour croître en ligne",
    subtitle:
      "Nous ne sommes pas généralistes. Nous nous spécialisons dans la présence digitale haute performance pour les entreprises qui prennent au sérieux la croissance en ligne.",
    s1_title: "Sites Web Professionnels",
    s1_desc:
      "Sites institutionnels ou e-commerce avec design premium, optimisés pour convertir les visiteurs en prospects.",
    s1_b1: "Design personnalisé",
    s1_b2: "Mobile-first",
    s1_b3: "CMS intégré",
    s2_title: "Landing Pages de Conversion",
    s2_desc:
      "Pages dédiées pour les campagnes payantes ou organiques, construites avec un focus total sur la conversion et des résultats mesurables.",
    s2_b1: "Taux de conversion élevé",
    s2_b2: "A/B testing",
    s2_b3: "Intégration CRM",
    s3_title: "SEO Technique",
    s3_desc:
      "Audit complet et mise en œuvre du SEO on-page, technique et de contenu pour apparaître en tête de Google.",
    s3_b1: "Audit complet",
    s3_b2: "Mots-clés stratégiques",
    s3_b3: "Rapport mensuel",
    s4_title: "Maintenance et Support",
    s4_desc:
      "Service continu de mises à jour, sauvegardes, sécurité et améliorations techniques pour maintenir votre site toujours au meilleur niveau.",
    s4_b1: "Sauvegardes quotidiennes",
    s4_b2: "Mises à jour de sécurité",
    s4_b3: "Support prioritaire",
    learn_more: "En savoir plus",
  },
  portfolio: {
    label: "Portfolio",
    h2: "Des résultats qui parlent d'eux-mêmes",
    cta_all: "Voir tous les projets",
    p1_title: "Prime Estores",
    p1_category: "Site Web de Services",
    p1_desc:
      "Site web professionnel pour une entreprise spécialisée dans la réparation et l'installation de stores, persiennes et installations électriques. Présence digitale claire qui facilite le contact avec de nouveaux clients.",
    p2_title: "Portugal Prático",
    p2_category: "Portail d'Information",
    p2_desc:
      "Portail informatif avec des guides pratiques, des ressources et des conseils essentiels sur la vie au Portugal — pour les résidents et les visiteurs.",
    coming_soon: "Plus de projets bientôt",
    coming_soon_desc: "Nous préparons de nouvelles études de cas. Contactez-nous pour voir notre portfolio complet.",
    visit_site: "Visiter le site",
  },
  process: {
    label: "Processus",
    h2: "Comment nous travaillons",
    subtitle:
      "Un processus clair et transparent, du briefing au lancement — sans surprises, sans délais inutiles.",
    step_1_title: "Découverte",
    step_1_desc:
      "Analyse détaillée de votre entreprise, marché et concurrence. Nous définissons des objectifs clairs et des KPIs mesurables.",
    step_2_title: "Stratégie & Design",
    step_2_desc:
      "Nous créons l'architecture d'information et le design visuel aligné avec votre marque. Approbation avant de construire.",
    step_3_title: "Développement",
    step_3_desc:
      "Construction avec du code propre, performance maximale et SEO technique intégré dès le premier jour.",
    step_4_title: "Lancement & Croissance",
    step_4_desc:
      "Publication, surveillance et suivi continu pour garantir que le site génère de vrais résultats.",
  },
  cta: {
    h2_1: "Prêt à avoir un site web qui",
    h2_accent: "travaille pour vous ?",
    subtitle:
      "Demandez un devis gratuit aujourd'hui. Nous analysons votre cas et répondons en moins de 24 heures avec une proposition personnalisée.",
    btn_primary: "Demander un devis gratuit",
    btn_whatsapp: "WhatsApp",
    note: "Réponse garantie en moins de 24 heures. Sans engagement.",
  },
  footer: {
    tagline:
      "Sites web professionnels qui transforment les visites en clients. Nous aidons les entreprises portugaises à croître en ligne avec une présence digitale de haut niveau.",
    cta_btn: "Demander un devis",
    copyright: "Tous droits réservés.",
  },
  services_page: {
    label: "Services",
    h1: "Solutions web pour les entreprises qui veulent des résultats",
    subtitle:
      "Chaque service est conçu pour générer un vrai impact sur votre entreprise — nous ne livrons pas que des sites web, nous livrons la croissance en ligne.",
  },
  portfolio_page: {
    label: "Portfolio",
    h1: "Projets qui transforment les entreprises",
    subtitle:
      "Chaque projet est un partenariat. Nous travaillons côte à côte avec nos clients pour créer des solutions digitales qui génèrent de vrais résultats.",
  },
  about_page: {
    label: "À propos",
    h1: "Nous aidons les entreprises à croître avec une présence digitale sérieuse",
    subtitle:
      "Prime Studio est né avec une conviction : les PME portugaises méritent des sites web au même niveau que les grandes entreprises — sans les prix gonflés des grandes agences.",
  },
  contact_page: {
    label: "Contact",
    h1: "Transformons votre entreprise en ligne",
    subtitle:
      "Demandez un devis gratuit. Nous analysons votre cas et répondons avec une proposition personnalisée en moins de 24 heures.",
    info_1_title: "Réponse en 24 heures",
    info_1_text: "Nous nous engageons à répondre à toutes les demandes dans un délai d'1 jour ouvré.",
    info_2_title: "contacto@primestudio.pt",
    info_2_text: "Pour les questions générales et les projets.",
    info_3_title: "WhatsApp disponible",
    info_3_text: "Pour des conversations plus rapides et informelles.",
  },
  contact_form: {
    form_title: "Demander un devis",
    form_subtitle: "Remplissez le formulaire et recevez une proposition gratuite.",
    name: "Nom",
    email: "Email",
    company: "Entreprise",
    service: "Service souhaité",
    budget: "Budget prévu",
    message: "Message",
    submit: "Envoyer la demande",
    submit_full: "Envoyer la demande de devis",
    submitting: "Envoi en cours...",
    success_title: "Message envoyé !",
    success_text: "Nous avons reçu votre demande. Nous analyserons et répondrons en moins de 24 heures avec une proposition personnalisée.",
    placeholder_name: "Votre nom",
    placeholder_email: "email@entreprise.com",
    placeholder_company: "Nom de votre entreprise (facultatif)",
    placeholder_message: "Décrivez votre projet — ce dont vous avez besoin, l'objectif, le délai...",
    service_placeholder: "Sélectionner un service",
    service_websites: "Site Web Professionnel",
    service_landing: "Landing Page",
    service_seo: "SEO Technique",
    service_maintenance: "Maintenance et Support",
    service_other: "Autre",
    budget_placeholder: "Sélectionner un budget",
    budget_1: "Moins de €1 000",
    budget_2: "€1 000 – €3 000",
    budget_3: "€3 000 – €7 000",
    budget_4: "Plus de €7 000",
    budget_5: "Je ne sais pas encore",
    privacy: "Vos données sont traitées de manière confidentielle. Nous ne partageons pas d'informations avec des tiers.",
  },
  whatsapp: {
    tooltip: "Discuter sur WhatsApp",
  },
};

const it: Translations = {
  nav: {
    services: "Servizi",
    portfolio: "Portfolio",
    about: "Chi siamo",
    contact: "Contatti",
    cta: "Richiedi preventivo",
  },
  hero: {
    badge: "Agenzia web in Portogallo",
    h1_1: "Creiamo siti web che",
    h1_accent: "generano clienti",
    subtitle:
      "Design premium, performance tecnica e SEO integrato. Trasformiamo la tua presenza digitale in una macchina per generare business — non solo un bel sito.",
    cta_primary: "Richiedi preventivo gratuito",
    cta_secondary: "Vedi portfolio",
    proof_1: "Siti web consegnati in 2–4 settimane",
    proof_2: "Performance Lighthouse > 95",
    proof_3: "SEO incluso in tutti i progetti",
    stat_1_label: "Progetti consegnati",
    stat_2_label: "Punteggio Lighthouse",
    stat_3_label: "Settimane di consegna",
    stat_4_label: "Clienti soddisfatti",
  },
  social_proof: {
    trusted_by: "Aziende che si fidano di noi",
  },
  services: {
    label: "Servizi",
    h2: "Tutto ciò di cui hai bisogno per crescere online",
    subtitle:
      "Non siamo generalisti. Ci specializziamo nella presenza digitale ad alte prestazioni per le aziende che prendono sul serio la crescita online.",
    s1_title: "Siti Web Professionali",
    s1_desc:
      "Siti istituzionali o e-commerce con design premium, ottimizzati per convertire i visitatori in lead.",
    s1_b1: "Design personalizzato",
    s1_b2: "Mobile-first",
    s1_b3: "CMS integrato",
    s2_title: "Landing Page di Conversione",
    s2_desc:
      "Pagine dedicate per campagne a pagamento o organiche, costruite con totale focus sulla conversione e risultati misurabili.",
    s2_b1: "Alto tasso di conversione",
    s2_b2: "A/B testing",
    s2_b3: "Integrazione CRM",
    s3_title: "SEO Tecnico",
    s3_desc:
      "Audit completo e implementazione di SEO on-page, tecnico e dei contenuti per posizionarsi in cima a Google.",
    s3_b1: "Audit completo",
    s3_b2: "Keyword strategiche",
    s3_b3: "Report mensile",
    s4_title: "Manutenzione e Supporto",
    s4_desc:
      "Servizio continuativo di aggiornamenti, backup, sicurezza e miglioramenti tecnici per mantenere il tuo sito sempre al meglio.",
    s4_b1: "Backup giornalieri",
    s4_b2: "Aggiornamenti di sicurezza",
    s4_b3: "Supporto prioritario",
    learn_more: "Scopri di più",
  },
  portfolio: {
    label: "Portfolio",
    h2: "Risultati che parlano da soli",
    cta_all: "Vedi tutti i progetti",
    p1_title: "Prime Estores",
    p1_category: "Sito Web di Servizi",
    p1_desc:
      "Sito web professionale per un'azienda specializzata nella riparazione e installazione di tende, veneziane e impianti elettrici. Presenza digitale chiara che facilita il contatto con nuovi clienti.",
    p2_title: "Portugal Prático",
    p2_category: "Portale Informativo",
    p2_desc:
      "Portale informativo con guide pratiche, risorse e consigli essenziali sulla vita in Portogallo — per residenti e visitatori.",
    coming_soon: "Altri progetti in arrivo",
    coming_soon_desc: "Stiamo preparando nuovi casi studio. Contattaci per vedere il nostro portfolio completo.",
    visit_site: "Visita il sito",
  },
  process: {
    label: "Processo",
    h2: "Come lavoriamo",
    subtitle:
      "Un processo chiaro e trasparente, dal briefing al lancio — senza sorprese, senza ritardi inutili.",
    step_1_title: "Scoperta",
    step_1_desc:
      "Analisi dettagliata della tua azienda, mercato e concorrenza. Definiamo obiettivi chiari e KPI misurabili.",
    step_2_title: "Strategia & Design",
    step_2_desc:
      "Creiamo l'architettura informativa e il design visivo allineato al tuo brand. Approvazione prima di costruire.",
    step_3_title: "Sviluppo",
    step_3_desc:
      "Costruzione con codice pulito, massime performance e SEO tecnico integrato fin dal primo giorno.",
    step_4_title: "Lancio & Crescita",
    step_4_desc:
      "Pubblicazione, monitoraggio e supporto continuo per garantire che il sito generi risultati reali.",
  },
  cta: {
    h2_1: "Pronto ad avere un sito web che",
    h2_accent: "lavora per te?",
    subtitle:
      "Richiedi un preventivo gratuito oggi. Analizziamo il tuo caso e rispondiamo in meno di 24 ore con una proposta personalizzata.",
    btn_primary: "Richiedi preventivo gratuito",
    btn_whatsapp: "WhatsApp",
    note: "Risposta garantita in meno di 24 ore. Senza impegno.",
  },
  footer: {
    tagline:
      "Siti web professionali che trasformano le visite in clienti. Aiutiamo le aziende portoghesi a crescere online con una presenza digitale di alto livello.",
    cta_btn: "Richiedi preventivo",
    copyright: "Tutti i diritti riservati.",
  },
  services_page: {
    label: "Servizi",
    h1: "Soluzioni web per aziende che vogliono risultati",
    subtitle:
      "Ogni servizio è pensato per generare un impatto reale sulla tua azienda — non consegniamo solo siti web, consegniamo crescita online.",
  },
  portfolio_page: {
    label: "Portfolio",
    h1: "Progetti che trasformano le aziende",
    subtitle:
      "Ogni progetto è una partnership. Lavoriamo fianco a fianco con i nostri clienti per creare soluzioni digitali che generano risultati reali.",
  },
  about_page: {
    label: "Chi siamo",
    h1: "Aiutiamo le aziende a crescere con una presenza digitale seria",
    subtitle:
      "Prime Studio è nata con una convinzione: le PMI portoghesi meritano siti web allo stesso livello delle grandi aziende — senza i prezzi gonfiati delle grandi agenzie.",
  },
  contact_page: {
    label: "Contatti",
    h1: "Trasformiamo la tua azienda online",
    subtitle:
      "Richiedi un preventivo gratuito. Analizziamo il tuo caso e rispondiamo con una proposta personalizzata in meno di 24 ore.",
    info_1_title: "Risposta in 24 ore",
    info_1_text: "Ci impegniamo a rispondere a tutte le richieste entro 1 giorno lavorativo.",
    info_2_title: "contacto@primestudio.pt",
    info_2_text: "Per domande generali e progetti.",
    info_3_title: "WhatsApp disponibile",
    info_3_text: "Per conversazioni più rapide e informali.",
  },
  contact_form: {
    form_title: "Richiedi un preventivo",
    form_subtitle: "Compila il modulo e ricevi una proposta gratuita.",
    name: "Nome",
    email: "Email",
    company: "Azienda",
    service: "Servizio di interesse",
    budget: "Budget previsto",
    message: "Messaggio",
    submit: "Invia richiesta",
    submit_full: "Invia richiesta di preventivo",
    submitting: "Invio in corso...",
    success_title: "Messaggio inviato!",
    success_text: "Abbiamo ricevuto la tua richiesta. Analizzeremo e risponderemo in meno di 24 ore con una proposta personalizzata.",
    placeholder_name: "Il tuo nome",
    placeholder_email: "email@azienda.com",
    placeholder_company: "Nome della tua azienda (opzionale)",
    placeholder_message: "Descrivi il tuo progetto — cosa ti serve, l'obiettivo, la scadenza...",
    service_placeholder: "Seleziona un servizio",
    service_websites: "Sito Web Professionale",
    service_landing: "Landing Page",
    service_seo: "SEO Tecnico",
    service_maintenance: "Manutenzione e Supporto",
    service_other: "Altro",
    budget_placeholder: "Seleziona un budget",
    budget_1: "Meno di €1.000",
    budget_2: "€1.000 – €3.000",
    budget_3: "€3.000 – €7.000",
    budget_4: "Più di €7.000",
    budget_5: "Non lo so ancora",
    privacy: "I tuoi dati sono trattati in modo confidenziale. Non condividiamo informazioni con terzi.",
  },
  whatsapp: {
    tooltip: "Scrivi su WhatsApp",
  },
};

const de: Translations = {
  nav: {
    services: "Leistungen",
    portfolio: "Portfolio",
    about: "Über uns",
    contact: "Kontakt",
    cta: "Angebot anfragen",
  },
  hero: {
    badge: "Webagentur in Portugal",
    h1_1: "Wir erstellen Websites, die",
    h1_accent: "Kunden generieren",
    subtitle:
      "Premium-Design, technische Performance und integriertes SEO. Wir verwandeln Ihre digitale Präsenz in eine Maschine zur Geschäftsgenerierung — nicht nur eine hübsche Website.",
    cta_primary: "Kostenloses Angebot anfragen",
    cta_secondary: "Portfolio ansehen",
    proof_1: "Websites in 2–4 Wochen geliefert",
    proof_2: "Lighthouse-Performance > 95",
    proof_3: "SEO in allen Projekten enthalten",
    stat_1_label: "Gelieferte Projekte",
    stat_2_label: "Lighthouse-Score",
    stat_3_label: "Wochen bis zur Lieferung",
    stat_4_label: "Zufriedene Kunden",
  },
  social_proof: {
    trusted_by: "Unternehmen, die uns vertrauen",
  },
  services: {
    label: "Leistungen",
    h2: "Alles, was Sie brauchen, um online zu wachsen",
    subtitle:
      "Wir sind keine Generalisten. Wir sind spezialisiert auf leistungsstarke digitale Präsenz für Unternehmen, die Online-Wachstum ernst nehmen.",
    s1_title: "Professionelle Websites",
    s1_desc:
      "Institutionelle oder E-Commerce-Websites mit Premium-Design, optimiert für die Umwandlung von Besuchern in Leads.",
    s1_b1: "Individuelles Design",
    s1_b2: "Mobile-first",
    s1_b3: "Integriertes CMS",
    s2_title: "Conversion-Landing-Pages",
    s2_desc:
      "Dedizierte Seiten für bezahlte oder organische Kampagnen, gebaut mit vollem Fokus auf Conversion und messbaren Ergebnissen.",
    s2_b1: "Hohe Konversionsrate",
    s2_b2: "A/B-Testing",
    s2_b3: "CRM-Integration",
    s3_title: "Technisches SEO",
    s3_desc:
      "Vollständiges Audit und Implementierung von On-Page-, technischem und Content-SEO, um in Google ganz oben zu erscheinen.",
    s3_b1: "Vollständiges Audit",
    s3_b2: "Strategische Keywords",
    s3_b3: "Monatlicher Bericht",
    s4_title: "Wartung & Support",
    s4_desc:
      "Kontinuierlicher Service für Updates, Backups, Sicherheit und technische Verbesserungen, damit Ihre Website immer im besten Zustand ist.",
    s4_b1: "Tägliche Backups",
    s4_b2: "Sicherheitsupdates",
    s4_b3: "Prioritäts-Support",
    learn_more: "Mehr erfahren",
  },
  portfolio: {
    label: "Portfolio",
    h2: "Ergebnisse, die für sich sprechen",
    cta_all: "Alle Projekte ansehen",
    p1_title: "Prime Estores",
    p1_category: "Dienstleistungs-Website",
    p1_desc:
      "Professionelle Website für ein Unternehmen, das auf Reparatur und Installation von Rollläden, Jalousien und Elektroinstallationen spezialisiert ist. Klare digitale Präsenz, die den Kontakt mit neuen Kunden erleichtert.",
    p2_title: "Portugal Prático",
    p2_category: "Informationsportal",
    p2_desc:
      "Informatives Portal mit praktischen Ratgebern, Ressourcen und wesentlichen Tipps zum Leben in Portugal — für Einwohner und Besucher.",
    coming_soon: "Weitere Projekte bald verfügbar",
    coming_soon_desc: "Wir bereiten neue Fallstudien vor. Kontaktieren Sie uns, um unser vollständiges Portfolio zu sehen.",
    visit_site: "Website besuchen",
  },
  process: {
    label: "Prozess",
    h2: "Wie wir arbeiten",
    subtitle:
      "Ein klarer und transparenter Prozess, vom Briefing bis zum Launch — keine Überraschungen, keine unnötigen Verzögerungen.",
    step_1_title: "Entdeckung",
    step_1_desc:
      "Detaillierte Analyse Ihres Unternehmens, Marktes und Wettbewerbs. Wir definieren klare Ziele und messbare KPIs.",
    step_2_title: "Strategie & Design",
    step_2_desc:
      "Wir erstellen die Informationsarchitektur und das visuelle Design, das auf Ihre Marke abgestimmt ist. Genehmigung vor dem Bau.",
    step_3_title: "Entwicklung",
    step_3_desc:
      "Entwicklung mit sauberem Code, maximaler Performance und integriertem technischem SEO von Anfang an.",
    step_4_title: "Launch & Wachstum",
    step_4_desc:
      "Veröffentlichung, Überwachung und kontinuierliche Begleitung, um sicherzustellen, dass die Website echte Ergebnisse liefert.",
  },
  cta: {
    h2_1: "Bereit für eine Website, die",
    h2_accent: "für Sie arbeitet?",
    subtitle:
      "Fordern Sie noch heute ein kostenloses Angebot an. Wir analysieren Ihren Fall und antworten in weniger als 24 Stunden mit einem personalisierten Angebot.",
    btn_primary: "Kostenloses Angebot anfragen",
    btn_whatsapp: "WhatsApp",
    note: "Garantierte Antwort in weniger als 24 Stunden. Ohne Verpflichtung.",
  },
  footer: {
    tagline:
      "Professionelle Websites, die Besucher in Kunden verwandeln. Wir helfen portugiesischen Unternehmen, online zu wachsen.",
    cta_btn: "Angebot anfragen",
    copyright: "Alle Rechte vorbehalten.",
  },
  services_page: {
    label: "Leistungen",
    h1: "Web-Lösungen für Unternehmen, die Ergebnisse wollen",
    subtitle:
      "Jede Leistung ist darauf ausgelegt, echten Einfluss auf Ihr Unternehmen zu haben — wir liefern nicht nur Websites, wir liefern Online-Wachstum.",
  },
  portfolio_page: {
    label: "Portfolio",
    h1: "Projekte, die Unternehmen transformieren",
    subtitle:
      "Jedes Projekt ist eine Partnerschaft. Wir arbeiten Seite an Seite mit unseren Kunden, um digitale Lösungen zu entwickeln, die echte Ergebnisse erzielen.",
  },
  about_page: {
    label: "Über uns",
    h1: "Wir helfen Unternehmen, mit ernsthafter digitaler Präsenz zu wachsen",
    subtitle:
      "Prime Studio wurde mit einer Überzeugung gegründet: Portugiesische KMU verdienen Websites auf dem gleichen Niveau wie große Unternehmen — ohne die aufgeblähten Preise der großen Agenturen.",
  },
  contact_page: {
    label: "Kontakt",
    h1: "Lassen Sie uns Ihr Unternehmen online transformieren",
    subtitle:
      "Fordern Sie ein kostenloses Angebot an. Wir analysieren Ihren Fall und antworten in weniger als 24 Stunden mit einem personalisierten Angebot.",
    info_1_title: "Antwort innerhalb 24 Stunden",
    info_1_text: "Wir verpflichten uns, alle Anfragen innerhalb von 1 Werktag zu beantworten.",
    info_2_title: "contacto@primestudio.pt",
    info_2_text: "Für allgemeine Fragen und Projekte.",
    info_3_title: "WhatsApp verfügbar",
    info_3_text: "Für schnellere und informellere Gespräche.",
  },
  contact_form: {
    form_title: "Angebot anfragen",
    form_subtitle: "Füllen Sie das Formular aus und erhalten Sie ein kostenloses Angebot.",
    name: "Name",
    email: "E-Mail",
    company: "Unternehmen",
    service: "Gewünschte Leistung",
    budget: "Geplantes Budget",
    message: "Nachricht",
    submit: "Anfrage senden",
    submit_full: "Angebotsanfrage senden",
    submitting: "Wird gesendet...",
    success_title: "Nachricht gesendet!",
    success_text: "Wir haben Ihre Anfrage erhalten. Wir analysieren und antworten in weniger als 24 Stunden mit einem personalisierten Angebot.",
    placeholder_name: "Ihr Name",
    placeholder_email: "email@unternehmen.com",
    placeholder_company: "Name Ihres Unternehmens (optional)",
    placeholder_message: "Beschreiben Sie Ihr Projekt — was Sie brauchen, das Ziel, den Zeitplan...",
    service_placeholder: "Leistung auswählen",
    service_websites: "Professionelle Website",
    service_landing: "Landing Page",
    service_seo: "Technisches SEO",
    service_maintenance: "Wartung & Support",
    service_other: "Sonstiges",
    budget_placeholder: "Budget auswählen",
    budget_1: "Unter €1.000",
    budget_2: "€1.000 – €3.000",
    budget_3: "€3.000 – €7.000",
    budget_4: "Über €7.000",
    budget_5: "Noch nicht sicher",
    privacy: "Ihre Daten werden vertraulich behandelt. Wir teilen keine Informationen mit Dritten.",
  },
  whatsapp: {
    tooltip: "Auf WhatsApp schreiben",
  },
};

export const translations: Record<Locale, Translations> = { pt, en, es, fr, it, de };
