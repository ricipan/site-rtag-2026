import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SectionCTAProps {
  text?: string;
}

export default function SectionCTA({ text = "Quer resultados como esses? Fale com a gente." }: SectionCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mt-12 text-center"
    >
      <p className="text-muted-foreground mb-4 text-sm">{text}</p>
      <Button asChild size="lg" variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10 hover:text-primary">
        <a href="https://wa.link/yu2sa5" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} />
          Agendar Reunião Estratégica
          <ArrowRight size={16} />
        </a>
      </Button>
    </motion.div>
  );
}
