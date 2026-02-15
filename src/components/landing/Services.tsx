import { MapPin, FileText, Globe, Star, Link2, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import SectionCTA from "./SectionCTA";

const services = [
  { icon: MapPin, title: "Google Business Profile", desc: "Otimização completa do seu perfil no Google Maps para aparecer nas buscas locais." },
  { icon: FileText, title: "Otimização de Site e Conteúdo", desc: "Páginas e conteúdos estratégicos focados nas palavras-chave do seu mercado." },
  { icon: Globe, title: "Citações e Diretórios Locais", desc: "Presença consistente em diretórios que reforçam sua autoridade local." },
  { icon: Star, title: "Gestão de Avaliações", desc: "Estratégias para conquistar mais avaliações positivas e responder a todas." },
  { icon: Link2, title: "Link Building Local", desc: "Construção de backlinks relevantes que fortalecem seu posicionamento." },
  { icon: BarChart3, title: "Relatórios e Acompanhamento", desc: "Dashboards mensais com métricas claras de evolução e ROI." },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Serviços inclusos
          </h2>
          <p className="font-display text-3xl font-bold md:text-4xl">
            Tudo que sua empresa precisa para dominar o Google Local
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
