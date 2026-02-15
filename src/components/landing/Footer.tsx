import { Mail, Phone } from "lucide-react";
import logoRtag from "@/assets/logo-rtag.png";

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
            <a href="#">
              <img src={logoRtag} alt="RTAG" className="h-8" />
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
              <a href="tel:+5551998247003" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone size={14} /> (51) 99824-7003
              </a>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com/rtag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-primary/40 transition-all"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0">
                      <stop offset="0%" stopColor="#feda75"/>
                      <stop offset="25%" stopColor="#fa7e1e"/>
                      <stop offset="50%" stopColor="#d62976"/>
                      <stop offset="75%" stopColor="#962fbf"/>
                      <stop offset="100%" stopColor="#4f5bd5"/>
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" stroke="url(#ig-grad)" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-grad)"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/rtag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-primary/40 transition-all"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
                </svg>
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
