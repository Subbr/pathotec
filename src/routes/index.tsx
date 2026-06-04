import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Microscope,
  FlaskConical,
  ScanSearch,
  Stethoscope,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import heroTissue from "@/assets/caso-1753-melanoma.jpg";
import carcinomaBg from "@/assets/caso-1404-carcinoma.jpg";
import faviconUrl from "@/assets/favicon.ico";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pathotec — Anatomia Patológica Veterinária" },
      { name: "description", content: "Laboratório especializado em anatomia patológica veterinária." },
    ],
    links: [
      { rel: "icon", type: "image/x-icon", href: faviconUrl },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5561996264723";
const EMAIL = "contato@pathotec.com.br";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 w-full px-4"
    >
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-border/60 bg-background/70 px-5 py-3 backdrop-blur-xl shadow-soft">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#servicos" className="transition hover:text-foreground">Serviços</a>
          <a href="#metodo" className="transition hover:text-foreground">Método</a>
          <a href="#contato" className="transition hover:text-foreground">Contato</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-royal-deep"
        >
          Enviar amostra
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-gradient-hero pt-36 pb-24 md:pt-44 md:pb-32">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img
          src={heroTissue}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-30 [mask-image:linear-gradient(to_left,black,transparent_80%)]"
        />
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-blue backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-royal animate-pulse" />
            Diagnóstico veterinário de referência
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 font-display text-5xl leading-[1.02] text-balance text-royal-deep md:text-7xl"
          >
            Precisão científica<br />
            ao serviço da<br />
            <em className="italic text-royal">vida animal.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            A Pathotec é um laboratório especializado em anatomia patológica
            veterinária. Unimos histopatologia, citologia e imuno-histoquímica em
            laudos claros, rápidos e confiáveis para a clínica do seu paciente.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lift transition hover:bg-royal-deep"
            >
              Solicitar coleta
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition hover:bg-card"
            >
              Conhecer serviços
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14 grid max-w-lg grid-cols-2 gap-8">
            {[
              { v: "7 dias", l: "Laudo médio (úteis)" },
              { v: "+600", l: "Laudos liberados" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-royal-deep">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
            <img
              src={heroTissue}
              alt="Lâmina histológica corada com hematoxilina e eosina"
              width={800}
              height={1000}
              className="aspect-[4/5] w-full object-cover"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border bg-background/85 p-4 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                  <ScanSearch className="h-4 w-4 text-royal" strokeWidth={1.6} />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-slate-blue">Caso #1753</div>
                  <div className="text-sm font-medium text-royal-deep">Melanoma — canino</div>
                </div>
                <div className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-royal">Pronto</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Microscope,
    title: "Histopatologia",
    desc: "Análise microscópica de biópsias, peças cirúrgicas com coloração H&E e especiais para laudo detalhado.",
  },
  {
    icon: FlaskConical,
    title: "Citologia",
    desc: "Punções aspirativas, imprint, swab e raspados para diagnóstico rápido do paciente.",
  },
  {
    icon: ScanSearch,
    title: "Imuno-histoquímica",
    desc: "Marcadores específicos para classificação de neoplasias e diagnósticos diferenciais.",
    hidden: true,
  },
  {
    icon: Stethoscope,
    title: "Necropsia",
    desc: "Investigação anatomopatológica completa com elucidação de causa mortis.",
  },
];

function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden py-28 md:py-36">
      {/* ambient orbs + tissue backdrop */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <img
          src={carcinomaBg}
          alt=""
          className="absolute -right-40 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full object-cover opacity-[0.08] [mask-image:radial-gradient(circle,black,transparent_70%)]"
        />
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-periwinkle/30 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full bg-royal/10 blur-3xl" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid items-end gap-8 md:grid-cols-2"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-blue">— Serviços</div>
            <h2 className="mt-4 font-display text-4xl text-royal-deep md:text-5xl">
              Um portfólio de diagnóstico<br />
              <em className="italic text-royal">completo.</em>
            </h2>
          </div>
          <p className="text-muted-foreground md:text-lg">
            Da coleta ao laudo final, integramos métodos clássicos e tecnológicos
            para apoiar decisões clínicas com confiança.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.filter((s) => !s.hidden).map((s, i) => (
            <motion.article
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -8, rotate: -0.3 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/80 p-7 shadow-soft backdrop-blur-xl transition-shadow hover:shadow-lift"
            >
              {/* gradient sheen on hover */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-periwinkle/0 via-transparent to-royal/0 opacity-0 transition-opacity duration-500 group-hover:from-periwinkle/25 group-hover:to-royal/10 group-hover:opacity-100" />
              {/* corner index */}
              <div className="absolute right-5 top-5 font-display text-xs tabular-nums text-slate-blue/70">
                0{i + 1}
              </div>

              <motion.div
                whileHover={{ rotate: 6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-royal shadow-soft transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <s.icon className="h-6 w-6" strokeWidth={1.5} />
              </motion.div>

              <h3 className="mt-7 font-display text-2xl text-royal-deep">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

              <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-royal opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1">
                Saiba mais
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>

              {/* animated bottom underline */}
              <div className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-royal via-periwinkle to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    { n: "01", t: "Coleta", d: "Orientação completa e logística de envio para todo o Brasil." },
    { n: "02", t: "Processamento", d: "Inclusão, microtomia e coloração em ambiente controlado." },
    { n: "03", t: "Análise", d: "Avaliação por patologistas veterinários especialistas." },
    { n: "04", t: "Laudo", d: "Relatório claro entregue em até 7 dias úteis, com suporte clínico." },
  ];
  return (
    <section id="metodo" className="relative overflow-hidden bg-gradient-deep py-28 text-background md:py-36">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-periwinkle">— Método</div>
          <h2 className="mt-4 font-display text-4xl text-background md:text-5xl">
            Do tecido ao diagnóstico,<br />
            <em className="italic">rastreável em cada etapa.</em>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl bg-background/15 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-royal-deep p-8"
            >
              <div className="font-display text-sm text-periwinkle">{s.n}</div>
              <div className="mt-8 font-display text-2xl text-background">{s.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-background/70">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="px-4 pb-20 pt-20 sm:px-6 md:pt-36 md:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-deep p-6 text-background shadow-lift sm:p-10 md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-periwinkle">— Contato</div>
            <h2 className="mt-4 font-display text-3xl text-background sm:text-4xl md:text-5xl">
              Pronto para enviar{" "}
              <em className="italic">sua amostra?</em>
            </h2>
            <p className="mt-6 max-w-md text-background/75">
              Fale com nossa equipe técnica. Atendemos clínicas, hospitais
              veterinários e universidades em todo o Brasil.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-royal-deep transition hover:bg-periwinkle"
            >
              Falar no WhatsApp
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="space-y-4">
            {[
              { icon: Phone, l: "WhatsApp", v: "(61) 99626-4723", href: WHATSAPP_URL, external: true },
              { icon: Mail, l: "E-mail", v: EMAIL, href: `mailto:${EMAIL}`, external: false },
              { icon: MapPin, l: "Sede", v: "Brasília · DF — Brasil" },
            ].map((c) => {
              const content = (
                <>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background/10 text-background transition group-hover:bg-background group-hover:text-royal-deep">
                    <c.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs uppercase tracking-wider text-periwinkle">{c.l}</div>
                    <div className="mt-0.5 truncate text-background">{c.v}</div>
                  </div>
                  {c.href && (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-periwinkle transition group-hover:text-background group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </>
              );
              const className =
                "group flex items-center gap-4 rounded-2xl border border-background/15 bg-background/5 p-4 backdrop-blur transition hover:bg-background/10 hover:border-background/30 sm:p-5";
              return c.href ? (
                <a
                  key={c.l}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <div key={c.l} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <Logo />
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pathotec — Anatomia Patológica Veterinária.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Services />
      <Method />
      <CTA />
      <Footer />
    </main>
  );
}
