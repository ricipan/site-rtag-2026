import { MapPin, FileText, Globe, Star, Link2, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import SectionCTA from "./SectionCTA";

const services = [
  { icon: MapPin, title: "Domínio por Bairros e Cidades", desc: "Posicionamos sua empresa nas buscas de cada bairro, zona e cidade. Quem buscar perto de você, te encontra." },
  { icon: FileText, title: "Palavras-Chave Mais Buscadas", desc: "Descobrimos exatamente o que seus clientes buscam no Google, ChatGPT e Gemini — e fazemos sua empresa aparecer para essas buscas." },
  { icon: Globe, title: "Google Business + Presença nas IAs", desc: "Seu perfil no Google Maps otimizado e conteúdo estratégico para ser recomendado pelo ChatGPT e Gemini." },
  { icon: Star, title: "Avaliações que Vendem", desc: "Mais avaliações positivas = mais confiança = mais clientes. Ajudamos você a conquistar cada uma." },
  { icon: Link2, title: "Autoridade no Google e nas IAs", desc: "Construímos a reputação digital da sua empresa para o Google confiar, o ChatGPT citar e o Gemini recomendar." },
  { icon: BarChart3, title: "Resultados que Você Acompanha", desc: "Relatórios simples e claros mostrando quantas pessoas te encontraram, ligaram e visitaram." },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            O que fazemos por você
          </h2>
          <p className="font-display text-3xl font-bold md:text-4xl">
            Tudo incluído para sua empresa dominar o Google
          </p>
          <p className="text-muted-foreground mt-4">
            Sem complicação. Cuidamos de tudo para você só se preocupar em atender os novos clientes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <SectionCTA text="Quer todos esses serviços trabalhando para sua empresa?" />
      </div>
    </section>
  );
}
