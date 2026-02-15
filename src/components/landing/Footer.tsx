import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Cases", href: "#cases" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#" className="font-display text-2xl font-bold tracking-tight">
              <span className="text-gradient">RTAG</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Posicionamos sua empresa no topo do Google com estratégias de SEO Local comprovadas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contato</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:contato@rtag.com.br" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail size={14} /> contato@rtag.com.br
              </a>
              <a href="tel:+5551999999999" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone size={14} /> (51) 99999-9999
              </a>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com/rtag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com/company/rtag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} RTAG. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
