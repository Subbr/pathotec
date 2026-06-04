import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Mail, MessageCircle, Globe, Phone, Microscope, FlaskConical, Stethoscope } from "lucide-react";
import logoSrc from "@/assets/pathotec-logo-v2.png";
import histologyImg from "@/assets/caso-1753-melanoma.jpg";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Pathotec — Links" },
      { name: "description", content: "Links oficiais da Pathotec: envie amostras, fale com nossa equipe e acesse nossos serviços de diagnóstico veterinário de referência." },
      { property: "og:title", content: "Pathotec — Anatomia Patológica Veterinária" },
      { property: "og:description", content: "Links oficiais da Pathotec: envie amostras, fale com nossa equipe e acesse nossos serviços." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/links" },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
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
  {
    label: "Enviar amostra",
    href: "https://api.whatsapp.com/send/?phone=5561996264723&text&type=phone_number&app_absent=0",
    icon: MessageCircle,
    highlight: true,
  },
  {
    label: "Site oficial",
    description: "pathotec.com.br",
    href: "https://pathotec.com.br/",
    icon: Globe,
  },
  {
    label: "Instagram",
    description: "@patho_tec",
    href: "https://www.instagram.com/patho_tec/",
    icon: Instagram,
  },
  {
    label: "E-mail",
    description: "contato@pathotec.com.br",
    href: "mailto:contato@pathotec.com.br",
    icon: Mail,
  },
  {
    label: "Telefone",
    description: "+55 61 99626-4723",
    href: "tel:+5561996264723",
    icon: Phone,
  },
];

function Links() {
  return (
    <main className="relative min-h-screen bg-aurora overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ backgroundImage: `url(${histologyImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ backgroundImage: `url(${histologyImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-16 pt-10 sm:px-8 sm:pt-16">
        <header className="flex flex-col items-center text-center">
          <div className="group relative flex items-center justify-center rounded-full border border-border bg-card/80 px-10 py-5 shadow-[0_8px_30px_-12px_oklch(0.5_0.1_300/0.25)] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_12px_40px_-12px_oklch(0.5_0.15_300/0.35)]">
            <img
              src={logoSrc}
              alt="Pathotec"
              width={220}
              height={64}
              className="mx-auto block h-12 w-auto object-contain object-center sm:h-14"
            />
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Diagnóstico veterinário de referência
          </p>

          <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Precisão científica
            <br />
            <em className="font-medium not-italic">ao serviço da</em>{" "}
            <em className="italic text-foreground/90">vida animal.</em>
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
            <LinkCard key={link.href} {...link} index={i} />
          ))}
        </nav>

        <p className="mt-10 text-center text-[11px] text-muted-foreground/80">
          © {new Date().getFullYear()} Pathotec · Anatomia Patológica Veterinária
        </p>
      </div>
    </main>
  );
}

function LinkCard({ label, description, href, icon: Icon, highlight, index }: LinkItem & { index: number }) {
  const isExternal = href.startsWith("http");
  return (
    
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{ animationDelay: `${index * 60}ms` }}
      className={[
        "group relative flex items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-2 fill-mode-both",
        "hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-18px_oklch(0.3_0.1_290/0.45)]",
        highlight
          ? "border-transparent bg-primary text-primary-foreground hover:bg-primary/95"
          : "border-border bg-card/70 text-foreground backdrop-blur-sm hover:border-tint/60 hover:bg-card",
      ].join(" ")}
    >
      <span aria-hidden className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100" />
      <span className={["flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105", highlight ? "bg-primary-foreground/10 text-primary-foreground" : "bg-secondary text-foreground"].join(" ")}>
        <Icon className="h-4.5 w-4.5" />
      </span>
      <span className="flex flex-1 flex-col text-left">
        <span className="text-[15px] font-medium leading-tight">{label}</span>
        {description && (
          <span className={["mt-0.5 text-xs", highlight ? "text-primary-foreground/70" : "text-muted-foreground"].join(" ")}>
            {description}
          </span>
        )}
      </span>
      <ArrowUpRight className={["h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5", highlight ? "text-primary-foreground/80" : "text-muted-foreground"].join(" ")} />
    </a>
  );
}
