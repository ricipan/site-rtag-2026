import { AlertTriangle, Eye, DollarSign, Target, CheckCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  { icon: Eye, title: "Invisível no Google", desc: "Clientes procuram seu serviço, mas encontram o concorrente." },
  { icon: AlertTriangle, title: "Dependência de indicação", desc: "Seu faturamento fica refém de quem lembra de você." },
  { icon: DollarSign, title: "Anúncios cada vez mais caros", desc: "Custo por clique sobe e o retorno diminui." },
];

const solutions = [
  { icon: Target, title: "Posicionamento orgânico", desc: "Apareça nas buscas de quem procura exatamente o que você oferece." },
  { icon: CheckCircle, title: "Fluxo previsível de leads", desc: "Receba contatos qualificados todos os meses, sem depender de sorte." },
  { icon: TrendingUp, title: "Investimento que escala", desc: "SEO gera resultados crescentes com custo fixo controlado." },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProblemSolution() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-destructive mb-4">
              O problema
            </h2>
            <p className="font-display text-2xl font-bold md:text-3xl mb-8">
              Sua empresa está perdendo clientes agora mesmo
            </p>
            <motion.div
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {problems.map((p) => (
                <motion.div
                  key={p.title}
                  variants={item}
                  className="flex gap-4 rounded-lg border border-border bg-card p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                    <p.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              A solução
            </h2>
            <p className="font-display text-2xl font-bold md:text-3xl mb-8">
              SEO Local gerenciado pela RTAG
            </p>
            <motion.div
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {solutions.map((s) => (
                <motion.div
                  key={s.title}
                  variants={item}
                  className="flex gap-4 rounded-lg border border-primary/20 bg-primary/5 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
