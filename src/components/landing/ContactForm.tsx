import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const proofs = [
  { icon: TrendingUp, text: "160+ empresas posicionadas no topo do Google" },
  { icon: Users, text: "99% dos clientes renovam conosco" },
  { icon: ShieldCheck, text: "Resultados comprovados — fale com nossos clientes" },
];

export default function ContactForm() {
  return (
    <section id="contato" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-background" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Pronto para dominar o Google?
            </h2>
            <p className="font-display text-3xl font-bold md:text-5xl leading-tight">
              Seus concorrentes já estão na frente.
              <br />
              <span className="text-gradient">Quanto mais você espera, mais clientes perde.</span>
            </p>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nossos resultados falam por si — e nossos clientes comprovam. 
              Agende uma reunião estratégica gratuita e vamos te mostrar, com dados reais, 
              como posicionar sua empresa nas primeiras posições do Google e 
              gerar demanda constante de novos clientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="gap-2 text-base px-8 py-6">
              <a href="https://wa.link/yu2sa5" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Agendar Reunião Estratégica
                <ArrowRight size={18} />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {proofs.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-border bg-card/50 p-4 text-left"
              >
                <p.icon size={20} className="text-primary shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">{p.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Sem compromisso. Sem enrolação. Só resultados.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
