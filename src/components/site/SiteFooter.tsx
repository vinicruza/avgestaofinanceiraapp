import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Linkedin } from "lucide-react";
import avLogo from "@/assets/av-logo-horizontal.png.asset.json";
import {
  AV_WHATSAPP_URL,
  AV_EMAIL,
  AV_WHATSAPP_LABEL,
  AV_LINKEDIN_URL,
} from "@/lib/av-config";

type FooterLink = { label: string; to?: string; href?: string; icon?: React.ComponentType<{ className?: string }> };

const SITE_LINKS: FooterLink[] = [
  { label: "Soluções", to: "/solucoes" },
  { label: "Método AV", to: "/metodo-av" },
  { label: "Plataforma AV", to: "/plataforma-av" },
  { label: "IA AV", to: "/ia-av" },
  { label: "Casos de Uso", to: "/casos-de-uso" },
  { label: "Conteúdo", to: "/conteudo" },
  { label: "Sobre", to: "/sobre" },
];

const SOLUTION_LINKS: FooterLink[] = [
  { label: "BPO Financeiro", to: "/solucoes" },
  { label: "Método AV", to: "/metodo-av" },
  { label: "Casos de Uso", to: "/casos-de-uso" },
  { label: "Plataforma AV", to: "/plataforma-av" },
  { label: "IA AV", to: "/ia-av" },
];

const CONTACT_LINKS: FooterLink[] = [
  { label: "Agendar demonstração", to: "/agendar-demonstracao" },
  { label: `WhatsApp • ${AV_WHATSAPP_LABEL}`, href: AV_WHATSAPP_URL, icon: MessageCircle },
  { label: AV_EMAIL, href: `mailto:${AV_EMAIL}`, icon: Mail },
  { label: "LinkedIn", href: AV_LINKEDIN_URL, icon: Linkedin },
];

function FooterItem({ item }: { item: FooterLink }) {
  const cls = "inline-flex items-center gap-2 text-white/65 transition hover:text-white";
  const Icon = item.icon;
  const content = (
    <>
      {Icon && <Icon className="h-4 w-4 text-brand" />}
      <span>{item.label}</span>
    </>
  );
  if (item.to) {
    return (
      <Link to={item.to} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <a
      href={item.href}
      target={item.href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={cls}
    >
      {content}
    </a>
  );
}

function Column({ title, items }: { title: string; items: FooterLink[] }) {
  return (
    <div>
      <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <FooterItem item={i} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))] lg:px-10">
        <div>
          <Link to="/" aria-label="AV Gestão Financeira — Home">
            <img
              src={avLogo.url}
              alt="AV Gestão Financeira"
              className="h-10 w-auto brightness-0 invert"
              width={200}
              height={40}
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Operação financeira, processos, tecnologia e inteligência artificial para empresas que
            precisam de mais controle, clareza e previsibilidade.
          </p>
        </div>

        <Column title="Site" items={SITE_LINKS} />
        <Column title="Soluções" items={SOLUTION_LINKS} />
        <Column title="Contato" items={CONTACT_LINKS} />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1360px] flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/50 sm:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} AV Gestão Financeira. Todos os direitos reservados.</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/politica-de-privacidade" className="hover:text-white">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="hover:text-white">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
