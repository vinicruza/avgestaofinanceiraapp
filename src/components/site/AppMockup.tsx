import {
  Bell,
  ClipboardCheck,
  Fuel,
  LayoutDashboard,
  Wallet,
  Receipt,
  FileText,
  Landmark,
  ListChecks,
  BrainCircuit,
  BarChart3,
  Target,
  Building2,
} from "lucide-react";

/**
 * Mockups anonimizados da Plataforma AV, recriados a partir das telas reais
 * do produto. Todos os dados (postos, valores, fornecedores) são fictícios —
 * nenhuma informação de cliente real é exibida.
 *
 * Renderizados como uma "janela de aplicativo" clara sobre os heros escuros,
 * no estilo dos sites de SaaS modernos.
 */

function WindowFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-black/5">
      {/* barra da janela */}
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
  active?: boolean;
  children?: { label: string; active?: boolean; badge?: number }[];
}[] = [
  { icon: Fuel, label: "Combustível" },
  {
    icon: Wallet,
    label: "Financeiro",
    active: true,
    children: [
      { label: "Dashboard", active: true },
      { label: "DRE Gerencial" },
      { label: "Gestão de Pagamentos" },
      { label: "Contas a Receber" },
      { label: "Aprovações", badge: 1 },
    ],
  },
  { icon: Landmark, label: "Conferência Bancária" },
  { icon: ListChecks, label: "Atividades" },
  { icon: BrainCircuit, label: "Central de Agentes" },
  { icon: BarChart3, label: "Relatórios" },
  { icon: Target, label: "Meta" },
];

function Sidebar() {
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
        {NAV_GROUPS.map((g) => (
          <div key={g.label}>
            <div
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10.5px] font-medium ${
                g.active ? "bg-brand-soft text-brand" : "text-slate-600"
              }`}
            >
              <g.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
              {g.label}
            </div>
            {g.children && (
              <div className="mb-1 ml-3 border-l border-slate-100 pl-2">
                {g.children.map((c) => (
                  <div
                    key={c.label}
                    className={`flex items-center justify-between rounded px-2 py-1 text-[10px] ${
                      c.active ? "font-semibold text-brand" : "text-slate-500"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {c.active && <span className="h-1 w-1 rounded-full bg-brand" />}
                      {c.label}
                    </span>
                    {c.badge && (
                      <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-red-500 text-[8px] font-bold text-white">
                        {c.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function Topbar() {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
      <div className="flex items-center gap-2 text-[11px] text-slate-400">
        <LayoutDashboard className="h-3.5 w-3.5 text-slate-500" strokeWidth={1.75} />
        <span className="font-semibold text-slate-600">Dashboard Financeiro</span>
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

const POSTOS = [
  {
    name: "Unidade Centro",
    count: "1 pagamento",
    total: "R$ 20.500,00",
    pago: "R$ 20.500,00",
    pendente: "R$ 0,00",
    pista: "R$ 20.500,00",
  },
  {
    name: "Unidade Sul",
    count: "2 pagamentos",
    total: "R$ 51.300,00",
    pago: "R$ 51.300,00",
    pendente: "R$ 0,00",
    pista: "R$ 51.300,00",
  },
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
          <span className="font-semibold text-slate-400">{p.pendente}</span>
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
        <Sidebar />
        <div className="min-w-0 flex-1 bg-slate-50">
          <Topbar />
          <div className="p-4">
            <div className="text-center">
              <div className="text-[13px] font-extrabold tracking-tight text-navy-deep">
                Dashboard Financeiro
              </div>
              <div className="text-[9px] text-slate-400">
                Central de controle financeiro · Gestão de Pagamentos
              </div>
            </div>

            {/* filtros */}
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

            {/* pagamentos do dia */}
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

            {/* postos */}
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
