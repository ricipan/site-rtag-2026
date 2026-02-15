import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import SectionCTA from "./SectionCTA";

const rows = [
  { feature: "Estratégia personalizada por nicho", rtag: true, others: false },
  { feature: "Gestão completa do Google Business", rtag: true, others: false },
  { feature: "Relatórios mensais detalhados", rtag: true, others: false },
  { feature: "Otimização contínua de conteúdo", rtag: true, others: false },
  { feature: "Link building local direcionado", rtag: true, others: false },
  { feature: "Gestão de avaliações", rtag: true, others: false },
  { feature: "Acompanhamento com especialista", rtag: true, others: false },
  { feature: "Contrato sem fidelidade", rtag: true, others: false },
];

export default function Comparison() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Comparativo
          </h2>
          <p className="font-display text-3xl font-bold md:text-4xl">
            RTAG vs. Soluções Genéricas
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl rounded-xl border border-border bg-card overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-0 border-b border-border bg-muted/50 p-4 text-sm font-semibold">
            <span>Recurso</span>
            <span className="text-center text-primary">RTAG</span>
            <span className="text-center text-muted-foreground">Outros</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 gap-0 p-4 text-sm ${i < rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="text-muted-foreground">{row.feature}</span>
              <span className="flex justify-center">
                <Check size={18} className="text-primary" />
              </span>
              <span className="flex justify-center">
                <X size={18} className="text-muted-foreground/40" />
              </span>
            </div>
          ))}
        </motion.div>
        <SectionCTA text="Escolha quem entrega resultado de verdade." />
      </div>
    </section>
  );
}
