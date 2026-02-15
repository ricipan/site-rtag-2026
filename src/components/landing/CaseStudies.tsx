import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    company: "Vidraçaria Canoas",
    segment: "Vidraçaria",
    city: "Canoas - RS",
    metrics: [
      { label: "Impressões/mês", before: "1.200", after: "18.500" },
      { label: "Ligações/mês", before: "8", after: "95" },
      { label: "Posição média", before: "32°", after: "3°" },
    ],
  },
  {
    company: "ColorGlass",
    segment: "Vidros e Esquadrias",
    city: "Porto Alegre - RS",
    metrics: [
      { label: "Impressões/mês", before: "800", after: "22.000" },
      { label: "Ligações/mês", before: "5", after: "110" },
      { label: "Posição média", before: "45°", after: "2°" },
    ],
  },
  {
    company: "CleanPro",
    segment: "Limpeza Profissional",
    city: "São Paulo - SP",
    metrics: [
      { label: "Impressões/mês", before: "2.500", after: "35.000" },
      { label: "Ligações/mês", before: "12", after: "145" },
      { label: "Posição média", before: "28°", after: "1°" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Casos de sucesso
          </h2>
          <p className="font-display text-3xl font-bold md:text-4xl">
            Resultados reais de clientes reais
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-lg font-bold">{c.company}</h3>
                  <p className="text-sm text-muted-foreground">
                    {c.segment} · {c.city}
                  </p>
                </div>
                <ArrowUpRight size={20} className="text-primary" />
              </div>

              <div className="space-y-3">
                {c.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{m.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground/60 line-through">{m.before}</span>
                      <span className="font-semibold text-primary">{m.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
