import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoRtag from "@/assets/logo-rtag.png";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Cases", href: "#cases" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar with social icons */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-muted/80 backdrop-blur-sm border-b border-border">
        <div className="container flex h-10 items-center justify-end gap-3">
          <a
            href="https://www.instagram.com/rtagseo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent transition-all"
            aria-label="Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="ig-grad-bar" x1="0" y1="24" x2="24" y2="0">
                  <stop offset="0%" stopColor="#feda75"/>
                  <stop offset="25%" stopColor="#fa7e1e"/>
                  <stop offset="50%" stopColor="#d62976"/>
                  <stop offset="75%" stopColor="#962fbf"/>
                  <stop offset="100%" stopColor="#4f5bd5"/>
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad-bar)" strokeWidth="2"/>
              <circle cx="12" cy="12" r="5" stroke="url(#ig-grad-bar)" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-grad-bar)"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ricieri-pandolfo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent transition-all"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="fixed top-10 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="container flex h-24 items-center justify-between">
          <a href="#">
            <img src={logoRtag} alt="RTAG" className="h-36" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden md:inline-flex">
              <a href="#contato">Agendar Reunião</a>
            </Button>
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-background p-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2 w-full">
                <a href="#contato" onClick={() => setMobileOpen(false)}>
                  Agendar Reunião
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
