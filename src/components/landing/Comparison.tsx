import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import SectionCTA from "./SectionCTA";

const rows = [
  { feature: "Posicionamento por bairros e cidades", rtag: true, others: false },
  { feature: "Resultados permanentes (sem pagar anúncio)", rtag: true, others: false },
  { feature: "Palavras-chave mais buscadas no Google e nas IAs", rtag: true, others: false },
  { feature: "Google Maps + presença no ChatGPT e Gemini", rtag: true, others: false },
  { feature: "Relatórios simples e claros", rtag: true, others: false },
  { feature: "Gestão de avaliações de clientes", rtag: true, others: false },
  { feature: "Acompanhamento com especialista dedicado", rtag: true, others: false },
  { feature: "Sem contrato de fidelidade", rtag: true, others: false },
];

export default function Comparison() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Por que a RTAG?
          </h2>
          <p className="font-display text-3xl font-bold md:text-4xl">
            RTAG vs. Anúncios Pagos e Agências Comuns
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
            <span>O que você ganha</span>
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
        <SectionCTA text="Escolha quem entrega resultados de verdade, sem depender de anúncios." />
      </div>
    </section>
  );
}
