import { Search, FileText, Rocket, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import SectionCTA from "./SectionCTA";

const steps = [
  { icon: Search, title: "Entendemos seu negócio", desc: "Analisamos sua empresa, sua cidade e descobrimos o que seus clientes buscam no Google, ChatGPT e Gemini." },
  { icon: FileText, title: "Criamos sua estratégia", desc: "Montamos um plano para posicionar sua empresa em cada bairro e região — no Google e nas IAs do mercado." },
  { icon: Rocket, title: "Colocamos em prática", desc: "Fazemos todas as otimizações para sua empresa aparecer no Google, ser citada pelo ChatGPT e recomendada pelo Gemini." },
  { icon: BarChart3, title: "Você recebe mais clientes", desc: "Mês a mês sua empresa recebe mais ligações, mensagens e visitas — sem gastar com anúncios." },
];

export default function Process() {
  return (
    <section id="processo" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Simples assim
          </h2>
          <p className="font-display text-3xl font-bold md:text-4xl">
            4 passos para ter mais clientes
          </p>
          <p className="text-muted-foreground mt-4">
            Você não precisa entender nada de internet. A gente cuida de tudo.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative flex items-start gap-4 pb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:text-${i % 2 === 0 ? "right" : "left"}`}
            >
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary/10 z-10">
                <step.icon size={20} className="text-primary" />
              </div>
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}>
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
                  Passo {i + 1}
                </span>
                <h3 className="font-display text-xl font-bold mt-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <SectionCTA text="Pronto para ter mais clientes? O primeiro passo é uma conversa." />
      </div>
    </section>
  );
}
