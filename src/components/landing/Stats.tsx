import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 40, suffix: "%+", label: "Mais clientes para nossos parceiros" },
  { value: 160, suffix: "+", label: "Empresas atendidas" },
  { value: 99, suffix: "%", label: "Taxa de renovação" },
  { value: 20, suffix: "+", label: "Cidades cobertas" },
];

function StatItem({ value, suffix, label }: typeof stats[number]) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold md:text-5xl">
        <span className="text-gradient">{count.toLocaleString("pt-BR")}{suffix}</span>
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
            Números que falam por si
          </p>
          <p className="text-muted-foreground mt-4">
            Sem promessas vazias. Esses são os resultados reais das empresas que trabalham com a RTAG.
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
