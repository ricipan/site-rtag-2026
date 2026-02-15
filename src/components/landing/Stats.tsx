import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 250, suffix: "+", label: "Projetos Otimizados" },
  { value: 99, suffix: "%", label: "Taxa de Renovação" },
  { value: 1500000, suffix: "+", label: "Impressões Geradas", display: "1.5M" },
  { value: 20, suffix: "+", label: "Cidades Atendidas" },
];

function StatItem({ value, suffix, label, display }: typeof stats[number]) {
  const { count, ref } = useCountUp(display ? 15 : value, 2000);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold md:text-5xl">
        <span className="text-gradient">{display ? `${(count / 10).toFixed(1)}M` : count.toLocaleString("pt-BR")}{!display && suffix}</span>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="resultados" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Resultados reais
          </h2>
          <p className="font-display text-3xl font-bold md:text-4xl">
            Números que comprovam nossa entrega
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
