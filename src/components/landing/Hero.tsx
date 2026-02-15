import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Eye, MousePointerClick, PhoneCall, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { LucideIcon } from "lucide-react";

function DashboardMetric({ icon: Icon, label, value, color, decimals = 0 }: {
  icon: LucideIcon; label: string; value: number; suffix: string; color: string; decimals?: number;
}) {
  const { count, ref } = useCountUp(decimals ? value * 10 : value, 1500, false);
  const display = decimals ? (count / 10).toFixed(decimals) : count.toLocaleString("pt-BR");

  return (
    <div ref={ref} className="rounded-lg bg-secondary p-3 text-center">
      <Icon size={16} className={`mx-auto mb-1.5 ${color}`} />
      <p className={`text-lg md:text-xl font-bold font-display ${color}`}>{display}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-56 h-56 bg-accent/10 rounded-full blur-3xl" />
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <TrendingUp size={16} />
              Especialistas em SEO Local
            </div>
          </motion.div>

          <motion.h1
            className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Coloque sua empresa no{" "}
            <span className="text-gradient">topo do Google</span> e conquiste
            mais clientes
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A RTAG posiciona sua empresa nas primeiras posições do Google com
            estratégias de SEO Local comprovadas. Mais visibilidade, mais
            ligações, mais clientes.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" asChild className="gap-2 text-base px-8 py-6">
              <a href="#contato">
                Agendar Conversa Estratégica
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 py-6"
            >
              <a href="#resultados">Ver Resultados</a>
            </Button>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 mx-auto max-w-3xl"
          >
            <div className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-2xl shadow-primary/10">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">RTAG Analytics — Últimos 30 dias</span>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                <DashboardMetric icon={Eye} label="Impressões" value={48200} suffix="" color="text-primary" />
                <DashboardMetric icon={MousePointerClick} label="Cliques" value={3750} suffix="" color="text-accent" />
                <DashboardMetric icon={PhoneCall} label="Ligações" value={142} suffix="" color="text-green-400" />
                <DashboardMetric icon={MapPin} label="Posição Média" value={2.4} suffix="" decimals={1} color="text-amber-400" />
              </div>

              {/* Fake chart bars */}
              <div className="rounded-xl bg-secondary p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground">Evolução de Impressões</span>
                  <span className="text-xs text-primary font-semibold">+127% ↑</span>
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {[25, 30, 28, 40, 38, 52, 48, 60, 55, 72, 68, 85, 80, 95, 90, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-primary/60 to-primary"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.04 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
