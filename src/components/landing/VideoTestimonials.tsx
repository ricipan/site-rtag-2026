import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anderson Borges",
    company: "Vitrex Vidraçaria",
    result: "+120 ligações/mês",
    text: "Antes da RTAG, nosso telefone quase não tocava. Em poucos meses, passamos a receber mais de 90 ligações por mês só pelo Google. O investimento se pagou logo no primeiro mês.",
  },
  {
    name: "Ana Martins",
    company: "ColorGlass Porto Alegre",
    result: "+110 ligações/mês",
    text: "A equipe da RTAG entende de verdade como posicionar uma empresa no Google. Hoje somos referência na nossa região e os clientes nos encontram facilmente.",
  },
  {
    name: "Roberto Lima",
    company: "CleanPro São Paulo",
    result: "1º lugar no Google",
    text: "Tentamos outras agências antes, mas nenhuma entregou resultados como a RTAG. Conquistamos o primeiro lugar no Google para as principais buscas do nosso segmento.",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Depoimentos
          </h2>
          <p className="font-display text-3xl font-bold md:text-4xl">
            O que nossos clientes dizem
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 flex flex-col"
            >
              <Quote size={28} className="text-primary mb-4 shrink-0" />
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.company}</p>
                <p className="mt-1 text-sm font-medium text-primary">{t.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
