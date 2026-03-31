import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionCTA from "./SectionCTA";
import colorglassAnalytics from "@/assets/colorglass-analytics.png";
import portoalegreVidrosAnalytics from "@/assets/portoalegre-vidros-analytics.png";
import vidrosArteAnalytics from "@/assets/vidros-arte-analytics.png";
import msGuinchosAnalytics from "@/assets/ms-guinchos-analytics.png";
import lucianoMatosAnalytics from "@/assets/luciano-matos-analytics.png";
import brunaPiresAnalytics from "@/assets/bruna-pires-analytics.png";

const cases = [
  {
    company: "Vitrex Vidraçaria",
    segment: "Vidraçaria",
    city: "Porto Alegre - RS",
    image: portoalegreVidrosAnalytics,
    observation: null as string | null,
    siteLink: "https://portoalegrevidros.com.br/",
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
    siteLink: "https://colorglass.net.br/",
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
    siteLink: "https://sorocabavidracaria.com.br/",
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
    siteLink: "https://portoalegreguinchos.com.br/",
    metrics: [
      { label: "Palavra-chave", before: "—", after: "1° \"guincho em Porto Alegre\"" },
      { label: "Contatos/mês", before: "—", after: "80+" },
      { label: "Posição média", before: "—", after: "1°" },
    ],
  },
  {
    company: "Luciano Matos Martelinho de Ouro",
    segment: "Martelinho de Ouro",
    city: "Novo Hamburgo - RS",
    image: lucianoMatosAnalytics,
    observation: "Do zero ao topo em 4 meses",
    siteLink: "https://lucianomartelinhodeouro.com.br/",
    metrics: [
      { label: "Palavra-chave", before: "—", after: "1° \"martelinho de ouro\"" },
      { label: "Contatos/mês", before: "0", after: "60+" },
      { label: "Posição média", before: "—", after: "1°" },
    ],
  },
  {
    company: "Bruna Pires Advocacia",
    segment: "Direito Imobiliário",
    city: "Porto Alegre - RS",
    image: brunaPiresAnalytics,
    observation: "Do zero ao topo em 6 meses",
    siteLink: "https://brunapiresadvogada.com.br/",
    metrics: [
      { label: "Palavra-chave", before: "—", after: "1° \"advogada imobiliária Porto Alegre\"" },
      { label: "Contatos/mês", before: "0", after: "40+" },
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
            Nossos clientes dominam o Google, ChatGPT e Gemini
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.slice(0, 3).map((c, i) => (
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

              {c.siteLink && (
                <a
                  href={c.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-border/50 bg-secondary/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:border-primary/30 hover:text-primary"
                >
                  <ExternalLink size={14} />
                  Ver site
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bloco de destaque entre os cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="my-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 md:p-12 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Estratégia agressiva baseada em dados reais
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            Nosso trabalho vai além do básico. Utilizamos <span className="text-primary font-semibold">ferramentas de espionagem do Google</span> para
            mapear cada palavra-chave relevante do seu mercado. A partir disso, criamos um projeto de crescimento
            personalizado cobrindo <span className="text-primary font-semibold">todos os serviços e bairros da sua cidade</span> — literalmente
            dominando a região de todas as formas. Cada decisão é guiada por dados, cada ação é estratégica.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.slice(3).map((c, i) => (
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

              {c.siteLink && (
                <a
                  href={c.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-border/50 bg-secondary/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:border-primary/30 hover:text-primary"
                >
                  <ExternalLink size={14} />
                  Ver site
                </a>
              )}
            </motion.div>
          ))}
        </div>
        <SectionCTA text="Quer ver sua empresa aqui? Vamos conversar." />
      </div>
    </section>
  );
}
