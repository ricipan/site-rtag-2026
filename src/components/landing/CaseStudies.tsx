import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import colorglassAnalytics from "@/assets/colorglass-analytics.png";
import portoalegreVidrosAnalytics from "@/assets/portoalegre-vidros-analytics.png";
import vidrosArteAnalytics from "@/assets/vidros-arte-analytics.png";
import msGuinchosAnalytics from "@/assets/ms-guinchos-analytics.png";

const cases = [
  {
    company: "Porto Alegre Vidros",
    segment: "Vidraçaria",
    city: "Porto Alegre - RS",
    image: portoalegreVidrosAnalytics,
    observation: null as string | null,
    metrics: [
      { label: "Palavra-chave", before: "—", after: "1° \"vidraçaria em Porto Alegre\"" },
      { label: "Contatos/mês", before: "15", after: "120+" },
      { label: "Posição média", before: "28°", after: "1°" },
    ],
  },
  {
    company: "ColorGlass",
    segment: "Vidros e Esquadrias",
    city: "Porto Alegre - RS",
    image: colorglassAnalytics,
    observation: "Do zero ao topo em 12 meses",
    metrics: [
      { label: "Palavra-chave", before: "—", after: "1° \"esquadrias em Porto Alegre\"" },
      { label: "Contatos/mês", before: "0", after: "150+" },
      { label: "Posição média", before: "—", after: "1°" },
    ],
  },
  {
    company: "Vidros & Arte",
    segment: "Vidraçaria",
    city: "Sorocaba - SP",
    image: vidrosArteAnalytics,
    observation: null as string | null,
    metrics: [
      { label: "Palavra-chave", before: "—", after: "1° \"vidraçaria em Sorocaba\"" },
      { label: "Contatos/mês", before: "10", after: "90+" },
      { label: "Posição média", before: "35°", after: "1°" },
    ],
  },
  {
    company: "MS Guinchos",
    segment: "Guincho",
    city: "Porto Alegre - RS",
    image: msGuinchosAnalytics,
    observation: null as string | null,
    metrics: [
      { label: "Palavra-chave", before: "—", after: "1° \"guincho em Porto Alegre\"" },
      { label: "Contatos/mês", before: "—", after: "80+" },
      { label: "Posição média", before: "—", after: "1°" },
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

              {c.image && (
                <div className="mb-4 overflow-hidden rounded-lg border border-border/50">
                  <img
                    src={c.image}
                    alt={`Resultados Google Analytics - ${c.company}`}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

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

              {c.observation && (
                <p className="mt-3 text-xs text-accent italic border-t border-border/50 pt-3">
                  ✦ {c.observation}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
