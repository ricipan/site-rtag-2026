import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em até 24 horas.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Vamos conversar
            </h2>
            <p className="font-display text-3xl font-bold md:text-4xl">
              Agende sua reunião estratégica gratuita
            </p>
            <p className="mt-4 text-muted-foreground">
              Descubra como posicionar sua empresa nas primeiras posições do
              Google e atrair mais clientes todos os meses.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-border bg-card p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Nome *</label>
                <Input placeholder="Seu nome" required maxLength={100} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Empresa *</label>
                <Input placeholder="Nome da empresa" required maxLength={100} />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Telefone *</label>
                <Input placeholder="(00) 00000-0000" required type="tel" maxLength={20} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Site</label>
                <Input placeholder="www.seusite.com.br" type="url" maxLength={200} />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Mensagem (opcional)</label>
              <Textarea placeholder="Conte um pouco sobre seu negócio..." rows={4} maxLength={1000} />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
              {loading ? "Enviando..." : "Agendar Conversa Estratégica"}
              <ArrowRight size={18} />
            </Button>

            <div className="text-center pt-2">
              <p className="text-sm text-muted-foreground">ou se preferir</p>
              <a
                href="https://wa.link/yu2sa5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-primary hover:underline"
              >
                <MessageCircle size={16} />
                Fale pelo WhatsApp
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
