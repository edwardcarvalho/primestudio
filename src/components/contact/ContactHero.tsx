"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="pt-32 pb-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
              Contacto
            </p>
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-5">
              Vamos transformar o seu negócio online
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Peça um orçamento gratuito. Analisamos o seu caso e respondemos com uma
              proposta personalizada em menos de 24 horas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: Clock,
                title: "Resposta em 24 horas",
                text: "Comprometemo-nos a responder a todos os pedidos dentro de 1 dia útil.",
              },
              {
                icon: Mail,
                title: "hello@primestudio.pt",
                text: "Para questões gerais e projectos.",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp disponível",
                text: "Para conversas mais rápidas e informais.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 items-start bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{item.text}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
