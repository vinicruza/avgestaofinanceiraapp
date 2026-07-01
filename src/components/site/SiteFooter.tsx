import avLogo from "@/assets/av-logo-horizontal.png.asset.json";

const COLS = [
  {
    title: "Soluções",
    items: ["BPO Financeiro", "Gestão de Pagamentos", "Fluxo de Caixa", "Plataforma AV", "IA AV"],
  },
  { title: "Empresa", items: ["Sobre", "Casos de Uso", "Conteúdo", "Contato"] },
  { title: "Recursos", items: ["Método AV", "Central de Ajuda", "Política de Privacidade"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,1fr))] lg:px-10">
        <div>
          <img
            src={avLogo.url}
            alt="AV Gestão Financeira"
            className="h-10 w-auto brightness-0 invert"
            width={200}
            height={40}
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Combinamos pessoas, processos, tecnologia própria e IA para transformar o financeiro da
            sua empresa em uma operação previsível, eficiente e escalável.
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white">
              {c.title}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" className="text-white/65 transition hover:text-white">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1360px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} AV Gestão Financeira. Todos os direitos reservados.</span>
          <span>CNPJ 00.000.000/0001-00</span>
        </div>
      </div>
    </footer>
  );
}
