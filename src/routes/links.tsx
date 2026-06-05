import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Mail, MessageCircle, Globe, Phone, Microscope, FlaskConical, Stethoscope } from "lucide-react";
import logoSrc from "@/assets/pathotec-logo-v2.png";
import histologyImg from "@/assets/caso-1753-melanoma.jpg";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Pathotec — Links" },
      { name: "description", content: "Links oficiais da Pathotec." },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Links,
});

type LinkItem = {
  label: string;
  description?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight?: boolean;
};

const LINKS: LinkItem[] = [
  { label: "Enviar amostra", href: "https://api.whatsapp.com/send/?phone=5561996264723&text&type=phone_number&app_absent=0", icon: MessageCircle, highlight: true },
  { label: "Site oficial", description: "pathotec.com.br", href: "https://pathotec.com.br/", icon: Globe },
  { label: "Instagram", description: "@patho_tec", href: "https://www.instagram.com/patho_tec/", icon: Instagram },
  { label: "E-mail", description: "contato@pathotec.com.br", href: "mailto:contato@pathotec.com.br", icon: Mail },
  { label: "Telefone", description: "+55 61 99626-4723", href: "tel:+5561996264723", icon: Phone },
];

function Links() {
  return (
    <main className="relative min-h-screen bg-aurora overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl bg-primary/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full opacity-10 blur-3xl bg-primary/20"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-16 pt-10 sm:px-8 sm:pt-16">
        <header className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center rounded-2xl border border-border bg-card/80 px-8 py-4 shadow-sm backdrop-blur-sm">
            <img src={logoSrc} alt="Pathotec" width={220} height={64} className="h-12 w-auto object-contain sm:h-14" />
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Diagnóstico veterinário de referência
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Precisão científica
            <br />
            <em className="not-italic">ao serviço da</em>{" "}
            <em className="italic text-foreground/80">vida animal.</em>
          </h1>
        </header>

        <section className="mt-8">
          <div className="flex flex-wrap justify-center gap-3 sm:grid sm:grid-cols-3 sm:gap-4">
            {[
              { icon: Microscope, label: "Histopatologia" },
              { icon: FlaskConical, label: "Citologia" },
              { icon: Stethoscope, label: "Necropsia" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex w-[calc(50%-6px)] flex-col items-center rounded-2xl border border-border bg-card/70 py-5 px-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 sm:w-full">
                <Icon className="h-6 w-6 text-foreground" />
                <span className="mt-2 text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <nav aria-label="Links" className="mt-10 flex flex-col gap-3">
          {LINKS.map((link, i) => (
      <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${i * 60}ms` }}
              className={[
                "group relative flex items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-300 ease-out",
                "hover:-translate-y-0.5 hover:shadow-lg",
                link.highlight
                  ? "border-transparent bg-primary text-primary-foreground hover:bg-primary/95"
                  : "border-border bg-card/70 text-foreground backdrop-blur-sm hover:bg-card",
              ].join(" ")}
            >
              <span aria-hidden className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100" />
              <span className={["flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105", link.highlight ? "bg-primary-foreground/10 text-primary-foreground" : "bg-secondary text-foreground"].join(" ")}>
                <link.icon className="h-5 w-5" />
              </span>
              <span className="flex flex-1 flex-col text-left">
                <span className="text-[15px] font-medium leading-tight">{link.label}</span>
                {link.description && (
                  <span className={["mt-0.5 text-xs", link.highlight ? "text-primary-foreground/70" : "text-muted-foreground"].join(" ")}>
                    {link.description}
                  </span>
                )}
              </span>
              <ArrowUpRight className={["h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5", link.highlight ? "text-primary-foreground/80" : "text-muted-foreground"].join(" ")} />
            </a>
          ))}
        </nav>

        <p className="mt-10 text-center text-[11px] text-muted-foreground/80">
          © {new Date().getFullYear()} Pathotec · Anatomia Patológica Veterinária
        </p>
      </div>
    </main>
  );
}
