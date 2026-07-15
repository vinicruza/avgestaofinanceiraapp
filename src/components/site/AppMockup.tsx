import {
  Bell,
  Fuel,
  LayoutDashboard,
  Wallet,
  Landmark,
  ListChecks,
  BrainCircuit,
  BarChart3,
  Target,
  Building2,
  ArrowLeft,
  Video,
  MoreVertical,
  Users,
  CalendarDays,
  Search,
  Plus,
  Mic,
} from "lucide-react";

/**
 * Mockups anonimizados da Plataforma AV, recriados a partir das telas reais
 * do produto. Todos os dados (postos, valores, fornecedores, chaves) são
 * fictícios — nenhuma informação de cliente real é exibida.
 *
 * Renderizados como uma "janela de aplicativo" clara (dashboards) ou um
 * celular (agente de WhatsApp) sobre os heros escuros, no estilo dos sites
 * de SaaS modernos.
 */

/* ------------------------------------------------------------ App window */

function WindowFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-black/5">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="mx-auto flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1 text-[10px] text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          app.avgestaofinanceira.com.br
        </div>
      </div>
      {children}
    </div>
  );
}

const NAV_GROUPS: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  children?: string[];
}[] = [
  { icon: Fuel, label: "Combustível" },
  {
    icon: Wallet,
    label: "Financeiro",
    children: [
      "Dashboard",
      "DRE Gerencial",
      "Gestão de Pagamentos",
      "Contas a Receber",
      "Aprovações",
    ],
  },
  { icon: Landmark, label: "Conferência Bancária" },
  { icon: ListChecks, label: "Atividades" },
  { icon: BrainCircuit, label: "Central de Agentes" },
  { icon: BarChart3, label: "Relatórios" },
  { icon: Target, label: "Meta" },
];

function Sidebar({ active }: { active: string }) {
  return (
    <aside className="hidden w-[168px] shrink-0 border-r border-slate-200 bg-white sm:block">
      <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3.5">
        <span className="grid h-7 w-7 place-items-center rounded-md bg-navy-deep text-[10px] font-black text-white">
          AV
        </span>
        <div className="leading-none">
          <div className="text-[10px] font-extrabold tracking-tight text-navy-deep">GESTÃO</div>
          <div className="text-[8px] font-semibold tracking-[0.12em] text-slate-400">
            FINANCEIRA
          </div>
        </div>
      </div>
      <nav className="px-2 py-2.5">
        <div className="px-2 pb-1.5 text-[8px] font-semibold uppercase tracking-wider text-slate-400">
          Menu Principal
        </div>
        {NAV_GROUPS.map((g) => {
          const groupActive = g.label === active || g.children?.includes(active);
          return (
            <div key={g.label}>
              <div
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10.5px] font-medium ${
                  groupActive ? "bg-brand-soft text-brand" : "text-slate-600"
                }`}
              >
                <g.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                {g.label}
              </div>
              {g.children && groupActive && (
                <div className="mb-1 ml-3 border-l border-slate-100 pl-2">
                  {g.children.map((c) => {
                    const childActive = c === active;
                    return (
                      <div
                        key={c}
                        className={`flex items-center justify-between rounded px-2 py-1 text-[10px] ${
                          childActive ? "font-semibold text-brand" : "text-slate-500"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          {childActive && <span className="h-1 w-1 rounded-full bg-brand" />}
                          {c}
                        </span>
                        {c === "Aprovações" && (
                          <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-red-500 text-[8px] font-bold text-white">
                            1
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

function Topbar({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
      <div className="flex items-center gap-2 text-[11px] text-slate-400">
        <LayoutDashboard className="h-3.5 w-3.5 text-slate-500" strokeWidth={1.75} />
        <span className="font-semibold text-slate-600">{title}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="relative">
          <Bell className="h-4 w-4 text-slate-400" strokeWidth={1.75} />
          <span className="absolute -right-1 -top-1 grid h-3 w-3 place-items-center rounded-full bg-red-500 text-[7px] font-bold text-white">
            6
          </span>
        </span>
        <span className="grid h-6 w-6 place-items-center rounded-full bg-navy-deep text-[9px] font-bold text-white">
          VS
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------- Dashboard Financeiro */

const POSTOS = [
  { name: "Unidade Centro", total: "R$ 20.500,00", pago: "R$ 20.500,00", pista: "R$ 20.500,00" },
  { name: "Unidade Sul", total: "R$ 51.300,00", pago: "R$ 51.300,00", pista: "R$ 51.300,00" },
];

function PostoCard({ p }: { p: (typeof POSTOS)[number] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Building2 className="h-3.5 w-3.5 text-brand" strokeWidth={1.75} />
          <span className="text-[11px] font-bold text-navy-deep">{p.name}</span>
        </div>
        <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold text-emerald-700">
          100% pago
        </span>
      </div>
      <div className="mt-2 space-y-1 text-[10px]">
        <div className="flex justify-between">
          <span className="text-slate-500">Valor Total</span>
          <span className="font-bold text-navy-deep">{p.total}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Valor Pago</span>
          <span className="font-semibold text-emerald-600">{p.pago}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">Valor Pendente</span>
          <span className="font-semibold text-slate-400">R$ 0,00</span>
        </div>
      </div>
      <div className="mt-2.5 rounded-lg bg-slate-50 px-2 py-1.5">
        <div className="flex items-center justify-between text-[9px]">
          <span className="font-semibold text-slate-600">PISTA</span>
          <span className="font-bold text-navy-deep">{p.pista}</span>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-between text-[8px] text-slate-400">
          <span>Progresso de Pagamento</span>
          <span>100%</span>
        </div>
        <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-full rounded-full bg-brand" />
        </div>
      </div>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <WindowFrame>
      <div className="flex">
        <Sidebar active="Dashboard" />
        <div className="min-w-0 flex-1 bg-slate-50">
          <Topbar title="Dashboard Financeiro" />
          <div className="p-4">
            <div className="text-center">
              <div className="text-[13px] font-extrabold tracking-tight text-navy-deep">
                Dashboard Financeiro
              </div>
              <div className="text-[9px] text-slate-400">
                Central de controle financeiro · Gestão de Pagamentos
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <div className="flex-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[9px] text-slate-500">
                Todos os Postos
              </div>
              <div className="flex-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[9px] text-slate-500">
                22/05/2026
              </div>
              <div className="rounded-lg bg-brand px-3 py-1.5 text-[9px] font-semibold text-white">
                Aplicar
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Wallet className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-[8px] font-semibold uppercase tracking-wider text-slate-400">
                    Pagamentos do dia
                  </div>
                  <div className="text-2xl font-extrabold leading-none text-navy-deep">47</div>
                  <div className="text-[8px] text-slate-400">pagamentos quitados</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-[9px] font-semibold text-emerald-600">
                    100% dos pagamentos
                  </div>
                  <div className="mt-1.5 h-1.5 w-28 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-full rounded-full bg-emerald-500" />
                  </div>
                  <div className="mt-1 text-[8px] text-slate-400">47 de 47 quitados hoje</div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {POSTOS.map((p) => (
                <PostoCard key={p.name} p={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

/* -------------------------------------------------- Gestão de Pagamentos */

const PAY_KPIS = [
  { label: "Pagamentos do Mês", value: "57", tone: "text-navy-deep" },
  { label: "Valor Total", value: "R$ 699.140", tone: "text-navy-deep" },
  { label: "Valor Pago", value: "R$ 696.967", tone: "text-emerald-600" },
  { label: "Valor Pendente", value: "R$ 2.172", tone: "text-red-500" },
];

const PAY_DAYS = [
  {
    day: "seg, 04/05",
    total: "R$ 101.662,00",
    count: "6 pagamentos",
    items: [
      ["Combustível — Distribuidora", "R$ 48.750,00"],
      ["Combustível — Regional", "R$ 45.050,00"],
      ["Iluminação — 2 refletores", "R$ 520,00"],
    ],
  },
  {
    day: "ter, 05/05",
    total: "R$ 68.060,96",
    count: "5 pagamentos",
    items: [
      ["Combustível — Distribuidora", "R$ 32.500,00"],
      ["Gestão Financeira LTDA", "R$ 1.000,00"],
    ],
  },
];

export function PaymentsMockup() {
  return (
    <WindowFrame>
      <div className="flex">
        <Sidebar active="Gestão de Pagamentos" />
        <div className="min-w-0 flex-1 bg-slate-50">
          <Topbar title="Financeiro" />
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[13px] font-extrabold tracking-tight text-navy-deep">
                  Gestão de Pagamentos
                </div>
                <div className="text-[9px] text-slate-400">Central de controle financeiro</div>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-brand px-2.5 py-1.5 text-[9px] font-semibold text-white">
                <Plus className="h-3 w-3" strokeWidth={2.5} />
                Novo Pagamento
              </div>
            </div>

            <div className="mt-3 flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[9px] text-slate-400">
              <Search className="h-3 w-3" strokeWidth={2} />
              Buscar por descrição, favorecido, dados de pagamento…
            </div>

            <div className="mt-3 grid grid-cols-4 gap-2">
              {PAY_KPIS.map((k) => (
                <div key={k.label} className="rounded-lg border border-slate-200 bg-white p-2">
                  <div className="text-[8px] text-slate-400">{k.label}</div>
                  <div className={`mt-0.5 text-[12px] font-extrabold ${k.tone}`}>{k.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {PAY_DAYS.map((d) => (
                <div
                  key={d.day}
                  className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-600">
                      <CalendarDays className="h-3 w-3 text-slate-400" />
                      {d.day}
                    </div>
                    <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold text-emerald-700">
                      Tudo pago
                    </span>
                  </div>
                  <div className="mt-2 text-center text-[13px] font-extrabold text-brand">
                    {d.total}
                  </div>
                  <div className="text-center text-[8px] text-slate-400">{d.count}</div>
                  <div className="mt-2 space-y-1 border-t border-slate-100 pt-2 text-[9px]">
                    {d.items.map(([n, v]) => (
                      <div key={n} className="flex justify-between">
                        <span className="truncate pr-2 text-slate-500">{n}</span>
                        <span className="shrink-0 font-semibold text-navy-deep">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

/* ------------------------------------------------------- Fechamento/DRE */

const DRE_KPIS = [
  { label: "Receita Líquida Acum.", value: "R$ 1.259.219" },
  { label: "Lucro Bruto Médio", value: "R$ 73.484" },
  { label: "Result. Operacional", value: "R$ 174.083" },
  { label: "Resultado Real do Ano", value: "R$ 124.774" },
];

const DRE_ROWS: { label: string; vals: string[]; bold?: boolean; neg?: boolean }[] = [
  { label: "(+) Receita Bruta", vals: ["328.682", "300.659", "322.519", "315.418"] },
  { label: "(–) Deduções", vals: ["-2.866", "-2.533", "-2.661", "0"], neg: true },
  { label: "(=) Receita Líquida", vals: ["325.815", "298.126", "319.858", "315.418"], bold: true },
  { label: "(–) CMV", vals: ["-252.516", "-229.050", "-245.634", "-238.078"], neg: true },
  { label: "(=) Lucro Bruto", vals: ["73.299", "69.076", "74.223", "77.340"], bold: true },
  {
    label: "(–) Desp. Operacionais",
    vals: ["-30.166", "-32.102", "-28.993", "-28.593"],
    neg: true,
  },
  { label: "(=) Result. Operacional", vals: ["43.132", "36.973", "45.230", "48.746"], bold: true },
];

export function DREMockup() {
  return (
    <WindowFrame>
      <div className="flex">
        <Sidebar active="DRE Gerencial" />
        <div className="min-w-0 flex-1 bg-slate-50">
          <Topbar title="Fechamento Mensal" />
          <div className="p-4">
            <div className="text-[13px] font-extrabold tracking-tight text-navy-deep">
              Fechamento Mensal
            </div>
            <div className="text-[9px] text-slate-400">Unidade Loja · abril 2026</div>

            <div className="mt-3 grid grid-cols-4 gap-2">
              {DRE_KPIS.map((k) => (
                <div key={k.label} className="rounded-lg border border-slate-200 bg-white p-2">
                  <div className="text-[8px] leading-tight text-slate-400">{k.label}</div>
                  <div className="mt-0.5 text-[11px] font-extrabold text-navy-deep">{k.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 px-3 py-2 text-[10px] font-bold text-brand">
                DRE — Comparativo Mensal (R$)
              </div>
              <table className="w-full text-[9px]">
                <thead>
                  <tr className="text-slate-400">
                    <th className="px-3 py-1 text-left font-semibold">Descrição</th>
                    {["JAN", "FEV", "MAR", "ABR"].map((m) => (
                      <th key={m} className="px-2 py-1 text-right font-semibold">
                        {m}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DRE_ROWS.map((r) => (
                    <tr key={r.label} className="border-t border-slate-50">
                      <td
                        className={`px-3 py-1 text-left ${r.bold ? "font-bold text-navy-deep" : "text-slate-500"}`}
                      >
                        {r.label}
                      </td>
                      {r.vals.map((v, i) => (
                        <td
                          key={i}
                          className={`px-2 py-1 text-right tabular-nums ${
                            r.neg
                              ? "text-red-500"
                              : r.bold
                                ? "font-semibold text-navy-deep"
                                : "text-slate-600"
                          }`}
                        >
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

/* ------------------------------------------------ Agente de IA no WhatsApp */

function WaBubble({
  sender,
  senderColor = "",
  time,
  children,
}: {
  sender?: string;
  senderColor?: string;
  time: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="max-w-[88%] rounded-lg rounded-tl-sm bg-[#202c33] px-2.5 py-1.5 text-[10.5px] leading-snug text-white/90 shadow">
        {sender && (
          <div className={`mb-0.5 text-[9.5px] font-semibold ${senderColor}`}>{sender}</div>
        )}
        <div className="whitespace-pre-line">{children}</div>
        <div className="mt-0.5 text-right text-[8px] text-white/40">{time}</div>
      </div>
    </div>
  );
}

export function WhatsAppMockup() {
  return (
    <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-[2.2rem] border-[7px] border-slate-950 bg-[#0b141a] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
      {/* header */}
      <div className="flex items-center gap-2.5 bg-[#1f2c34] px-3 py-2.5 text-white">
        <ArrowLeft className="h-4 w-4 text-white/70" />
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#334751]">
          <Users className="h-4 w-4 text-white/80" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[12px] font-semibold">PAGAMENTOS AUTOMÁTICOS</div>
          <div className="truncate text-[9px] text-white/50">AV Gestão Financeira, +3</div>
        </div>
        <Video className="h-4 w-4 text-white/60" />
        <MoreVertical className="h-4 w-4 text-white/60" />
      </div>

      {/* chat */}
      <div className="space-y-2 px-2.5 py-3">
        <WaBubble sender="~ Contas a Pagar" senderColor="text-amber-300" time="21:51">
          {
            "Posto Central.\nManutenção das bombas.\nFavorecido: Oficina Mecânica\nValor total: R$ 1.020,00\nPagamento no Pix\nData: 16/07/2026"
          }
        </WaBubble>

        <WaBubble sender="AV Gestão Financeira" senderColor="text-emerald-300" time="21:51">
          {"⏳ Identificando pagamento…"}
        </WaBubble>

        <WaBubble sender="AV Gestão Financeira" senderColor="text-emerald-300" time="21:51">
          <div className="font-semibold text-white">✅ Pagamento identificado</div>
          <div className="mt-1 space-y-0.5">
            <div>🏢 Posto: CENTRAL</div>
            <div>
              💰 Valor: <span className="font-semibold text-emerald-300">R$ 1.020,00</span>
            </div>
            <div>📅 Vencimento: 16/07/2026 (qui)</div>
            <div>👤 Favorecido: Oficina Mecânica</div>
            <div>🏷️ Categoria: Desp. Variáveis / Manutenção</div>
            <div>💳 Forma: PIX</div>
            <div>📌 Status: pendente</div>
          </div>
          <div className="mt-1.5 text-white/80">
            Responda <span className="font-bold text-white">1</span> para confirmar ou{" "}
            <span className="font-bold text-white">2</span> para cancelar.
          </div>
        </WaBubble>

        <WaBubble sender="~ Contas a Pagar" senderColor="text-amber-300" time="21:52">
          1
        </WaBubble>

        <WaBubble sender="AV Gestão Financeira" senderColor="text-emerald-300" time="21:52">
          <div className="font-semibold text-white">✅ Pagamento criado!</div>
          <div className="mt-1 space-y-0.5">
            <div>🆔 ID: #7ffddd8</div>
            <div>🏢 Posto: CENTRAL</div>
            <div>
              💰 Valor: <span className="font-semibold text-emerald-300">R$ 1.020,00</span>
            </div>
            <div>📅 Vencimento: 16/07/2026</div>
          </div>
        </WaBubble>
      </div>

      {/* input */}
      <div className="flex items-center gap-2 bg-[#1f2c34] px-3 py-2">
        <div className="flex-1 rounded-full bg-[#2a3942] px-3 py-1.5 text-[10px] text-white/40">
          Mensagem
        </div>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#00a884]">
          <Mic className="h-3.5 w-3.5 text-white" />
        </span>
      </div>
    </div>
  );
}
