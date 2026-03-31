import { AlertTriangle, Eye, DollarSign, Target, CheckCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  { icon: Eye, title: "Ninguém te encontra no Google nem nas IAs", desc: "Quando alguém busca pelo seu serviço no Google, ChatGPT ou Gemini, quem aparece é o concorrente — não você." },
  { icon: AlertTriangle, title: "Depende de indicação para vender", desc: "Se ninguém te indica, ninguém te liga. Seu faturamento fica na mão dos outros." },
  { icon: DollarSign, title: "Gasta com anúncios e não vê retorno", desc: "Você paga cada vez mais caro por cliques e os resultados somem quando para de pagar." },
];

const solutions = [
  { icon: Target, title: "Apareça em toda a cidade", desc: "Posicionamos sua empresa nas buscas de cada bairro, zona e cidade — para ser encontrado por quem está perto de você." },
  { icon: CheckCircle, title: "Clientes todos os meses, sem pagar anúncio", desc: "Com SEO, os resultados são permanentes. Você recebe ligações e mensagens de clientes novos todo mês." },
  { icon: TrendingUp, title: "+40% mais clientes comprovado", desc: "Nossos clientes já aumentaram em mais de 40% a quantidade de clientes — de forma orgânica e duradoura." },
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
        {/* Simple explanation */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            O que a RTAG faz?
          </h2>
          <p className="font-display text-2xl font-bold md:text-3xl mb-4">
            Explicando de forma simples
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Imagine que alguém pega o celular e digita no Google:{" "}
            <strong className="text-foreground">"encanador perto de mim"</strong> ou{" "}
            <strong className="text-foreground">"vidraçaria em Porto Alegre"</strong>.
            Nós fazemos a <strong className="text-foreground">sua empresa aparecer primeiro</strong> nessa busca.
            E fazemos isso para <strong className="text-foreground">cada bairro e cada região</strong> da sua cidade —
            sem você precisar gastar um centavo com anúncio.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-destructive mb-4">
              Isso acontece com você?
            </h2>
            <p className="font-display text-2xl font-bold md:text-3xl mb-8">
              Sua empresa está invisível para quem mais precisa dela
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
              Como a RTAG resolve
            </h2>
            <p className="font-display text-2xl font-bold md:text-3xl mb-8">
              Resultados permanentes sem depender de anúncios
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
