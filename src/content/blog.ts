// Conteúdo do blog da AV Gestão Financeira.
//
// Para adicionar um artigo, inclua um objeto em AV_POSTS. O `slug` vira a URL
// (/conteudo?post=slug). O corpo é um array de blocos simples renderizados pelo
// ArticleView — sem dependência de Markdown.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  /** Data de publicação (ISO). */
  date: string;
  /** Tempo de leitura em minutos. */
  readingMinutes: number;
  /** Selo opcional (ex.: "Em breve", "Roadmap"). */
  tag?: string;
  /** Frase de destaque exibida no topo do artigo. */
  lead: string;
  body: Block[];
};

export const AV_POSTS: BlogPost[] = [
  {
    slug: "tecnospeed-api-pagamentos",
    category: "Tecnologia",
    title: "Tecnospeed no sistema AV: a API de pagamentos que vai automatizar o contas a pagar",
    excerpt:
      "Estamos integrando a API de pagamentos da Tecnospeed (PlugBank) à Plataforma AV. Entenda o que muda quando pagar deixa de ser tarefa manual e vira um fluxo automático, seguro e conciliado.",
    date: "2026-07-16",
    readingMinutes: 6,
    tag: "Roadmap AV",
    lead: "Pagar deixa de ser tarefa manual e passa a ser um fluxo automático, seguro e conciliado — direto de dentro da plataforma.",
    body: [
      {
        type: "p",
        text: "Na rotina de um posto ou de qualquer operação com muitos pagamentos, o gargalo raramente é decidir o que pagar — é executar. Cada boleto exige abrir o internet banking do banco certo, digitar linha digitável, conferir valor e vencimento, agendar, salvar comprovante e, depois, lançar tudo no sistema. Multiplique isso por dezenas de pagamentos por dia, em várias contas e bancos diferentes, e você tem horas de trabalho manual — e espaço de sobra para erro.",
      },
      {
        type: "p",
        text: "É exatamente esse ponto que a próxima evolução da Plataforma AV vai atacar: estamos integrando a API de pagamentos da Tecnospeed (PlugBank) para que o pagamento aconteça de dentro da plataforma, sem pular de sistema em sistema.",
      },
      { type: "h2", text: "O que é o PlugBank da Tecnospeed" },
      {
        type: "p",
        text: "O PlugBank é o hub de APIs financeiras da Tecnospeed, criado para conectar sistemas e ERPs diretamente aos bancos. Em vez de o software falar com cada banco no formato proprietário dele (o famoso CNAB, diferente em cada instituição), a aplicação passa a falar um único idioma com a Tecnospeed, que cuida da comunicação bancária.",
      },
      {
        type: "p",
        text: "A API de pagamentos trabalha com um layout JSON único: o mesmo padrão de requisição serve para boleto, PIX, TED, DOC, pagamento de tributos e guias (DARF, GPS, GRU e outros federais, estaduais e municipais), fornecedores e folha. Não importa o banco nem o tipo de documento — a estrutura do pedido é a mesma. Isso elimina a necessidade de conhecer o CNAB de cada instituição e reduz drasticamente a complexidade da integração.",
      },
      {
        type: "ul",
        items: [
          "Um único layout para PIX, boleto, TED/DOC, tributos, guias e folha",
          "Integração com os principais bancos do país (BB, Itaú, Bradesco, Santander, Caixa, Sicoob, Sicredi, Inter, C6 e outros)",
          "Pagamentos em lote — vários títulos em uma única remessa",
          "Retorno de status de cada pagamento (registrado, pago, liquidado)",
          "Comprovantes centralizados, sem precisar caçar arquivo em cada banco",
        ],
      },
      { type: "h2", text: "O que muda na prática para o cliente AV" },
      {
        type: "p",
        text: "Com a integração, o caminho do pagamento fica curto e rastreável. O título entra na plataforma (manualmente, por importação de boletos ou até pelo agente de IA no WhatsApp), passa pela aprovação de quem tem alçada e segue para pagamento sem sair do ambiente da AV.",
      },
      {
        type: "ul",
        items: [
          "Menos janelas abertas: acabou o vai e volta entre plataforma e internet banking de cada banco",
          "Aprovação antes de pagar: só é liquidado o que foi autorizado por quem tem permissão",
          "Pagamento em lote: um clique resolve a fila do dia, em vários bancos ao mesmo tempo",
          "Conciliação nativa: o pagamento já nasce vinculado ao lançamento, com status atualizado automaticamente",
          "Trilha de auditoria: quem lançou, quem aprovou, quando pagou e qual o comprovante",
        ],
      },
      {
        type: "quote",
        text: "O objetivo não é só pagar mais rápido. É transformar o contas a pagar em um processo com controle, aprovação e rastreabilidade — do lançamento ao comprovante.",
      },
      { type: "h2", text: "Segurança e controle no centro" },
      {
        type: "p",
        text: "Automatizar pagamento sem controle é aumentar o risco, não reduzir. Por isso a integração é desenhada em cima do que a AV já pratica: limites por posto e por setor, aprovações obrigatórias para determinados valores, bloqueio de datas e trilha completa de auditoria. A tecnologia executa; a governança continua no comando.",
      },
      { type: "h2", text: "Quando chega" },
      {
        type: "p",
        text: "A integração com a Tecnospeed está no nosso roadmap de evolução da plataforma e será liberada de forma gradual para os clientes. Se você quer entender como isso se aplica à operação da sua empresa — e o que já dá para automatizar hoje com o Método AV e a plataforma —, fale com a gente.",
      },
    ],
  },
  {
    slug: "conciliacao-bancaria-automatica",
    category: "Processos",
    title: "Conciliação bancária automática: menos erro, mais controle",
    excerpt:
      "Conferir extrato no fim do mês, na mão, é retrabalho e risco. Veja como a conciliação automática — com Open Finance e IA — muda o jogo da rotina financeira.",
    date: "2026-07-10",
    readingMinutes: 4,
    lead: "Conferir extrato na mão, no fim do mês, é retrabalho e risco. A conciliação automática vira a chave.",
    body: [
      {
        type: "p",
        text: "Conciliar é responder a uma pergunta simples: o que saiu e entrou no banco bate com o que está registrado no sistema? Quando essa resposta depende de alguém abrir o extrato, imprimir, marcar linha por linha e caçar divergência, o financeiro trabalha sempre olhando para trás — e descobre problema tarde demais.",
      },
      { type: "h2", text: "Por que a conciliação manual falha" },
      {
        type: "ul",
        items: [
          "Volume alto de transações torna a conferência linha a linha inviável",
          "Lançamentos duplicados, esquecidos ou com valor divergente passam despercebidos",
          "Tarifas, taxas de cartão e estornos somem no meio do extrato",
          "A conferência só acontece no fechamento — quando já não dá para corrigir a tempo",
        ],
      },
      { type: "h2", text: "O que a automação resolve" },
      {
        type: "p",
        text: "Com a conexão bancária automática (Open Finance) puxando os lançamentos direto do banco e a inteligência artificial sugerindo os pares entre extrato e sistema, a conciliação deixa de ser um mutirão mensal e vira rotina diária. O que bate, concilia sozinho; o que diverge, sobe como exceção para uma pessoa olhar.",
      },
      {
        type: "quote",
        text: "A meta não é a IA fazer tudo sozinha. É ela resolver o óbvio e deixar o time gastar energia só onde existe divergência de verdade.",
      },
      {
        type: "p",
        text: "O resultado é um caixa confiável em tempo real, menos surpresa no fechamento e uma equipe que para de conferir e passa a analisar. Na Plataforma AV, conciliação e conexão bancária já fazem parte da operação.",
      },
    ],
  },
  {
    slug: "fluxo-de-caixa-previsto-realizado",
    category: "Fluxo de Caixa",
    title: "Fluxo de caixa: previsto x realizado na prática",
    excerpt:
      "Saldo em conta não é fluxo de caixa. Entenda por que comparar o previsto com o realizado é o que evita surpresas e sustenta boas decisões.",
    date: "2026-07-04",
    readingMinutes: 4,
    lead: "Saldo em conta não é fluxo de caixa. O que dá previsibilidade é comparar o previsto com o realizado.",
    body: [
      {
        type: "p",
        text: "Muita empresa acha que controla o caixa porque olha o saldo do banco. Mas saldo é uma foto do passado. Fluxo de caixa é o filme: o que vai entrar, o que vai sair, e quando. Sem enxergar o previsto, toda decisão vira aposta.",
      },
      { type: "h2", text: "Previsto: o mapa das próximas semanas" },
      {
        type: "p",
        text: "O previsto reúne contas a pagar programadas, recebimentos esperados, contas fixas e compromissos recorrentes. É ele que responde à pergunta que tira o sono do dono: 'vou ter caixa para honrar tudo nas próximas semanas?'.",
      },
      { type: "h2", text: "Realizado: o que de fato aconteceu" },
      {
        type: "p",
        text: "O realizado é o que entrou e saiu de verdade. Comparado ao previsto, ele mostra onde a operação escorrega: recebimento que atrasou, despesa que veio maior, pagamento que ninguém tinha provisionado.",
      },
      {
        type: "quote",
        text: "A diferença entre previsto e realizado é onde mora o aprendizado. É ela que transforma o financeiro em uma ferramenta de gestão, não só de registro.",
      },
      {
        type: "ul",
        items: [
          "Antecipa necessidade de caixa antes do aperto",
          "Mostra qual cliente ou despesa desorganiza a previsão",
          "Dá segurança para negociar prazos e planejar investimentos",
          "Substitui o 'achismo' por número no momento de decidir",
        ],
      },
      {
        type: "p",
        text: "Acompanhar previsto x realizado é justamente um dos indicadores centrais da Plataforma AV — não como planilha isolada, mas conectado aos pagamentos, recebimentos e à conciliação da operação.",
      },
    ],
  },
  {
    slug: "financeiro-organizado-nao-e-so-pagar",
    category: "Gestão Financeira",
    title: "Financeiro organizado não é apenas ter tudo pago",
    excerpt:
      "Pagar em dia é o mínimo. Financeiro organizado é ter rotina, processo e visibilidade — para decidir com segurança, não no escuro.",
    date: "2026-06-27",
    readingMinutes: 3,
    lead: "Pagar em dia é o mínimo. Organização de verdade é rotina, processo e visibilidade.",
    body: [
      {
        type: "p",
        text: "Existe uma armadilha comum: achar que o financeiro está organizado porque as contas estão pagas. Pagar em dia é importante, mas é o mínimo. Uma operação pode estar 100% em dia e, ao mesmo tempo, completamente no escuro sobre para onde o dinheiro está indo e o que vem pela frente.",
      },
      { type: "h2", text: "Os três pilares que faltam" },
      {
        type: "ul",
        items: [
          "Rotina: quem faz o quê, quando e com qual prazo — sem depender da memória de uma pessoa",
          "Processo: como pagamentos, aprovações, documentos e conferências circulam com padrão e trilha",
          "Visibilidade: indicadores confiáveis para sócios e gestores decidirem com base em número",
        ],
      },
      {
        type: "quote",
        text: "Financeiro organizado é aquele em que, se a pessoa-chave faltar, a operação não para — porque o controle está no processo, não na cabeça de alguém.",
      },
      {
        type: "p",
        text: "É essa a diferença entre apagar incêndio e conduzir a operação. E é onde a AV atua: estruturando a rotina, executando os processos e entregando a informação que faltava para decidir com segurança.",
      },
    ],
  },
  {
    slug: "dre-de-posto-conversa-com-operacao",
    category: "Postos de Combustíveis",
    title: "DRE de posto precisa conversar com a operação",
    excerpt:
      "Um DRE que não bate com a pista, a loja e o estoque vira relatório de gaveta. Veja por que financeiro e operação precisam falar a mesma língua.",
    date: "2026-06-20",
    readingMinutes: 4,
    lead: "Um DRE que não conversa com a pista, a loja e o estoque vira relatório de gaveta.",
    body: [
      {
        type: "p",
        text: "Posto é uma operação de margem apertada e volume alto. Um ponto percentual em combustível, uma quebra de estoque ou uma taxa de cartão mal conferida fazem diferença real no resultado. Por isso, o DRE de um posto não pode ser um relatório contábil distante: ele precisa conversar com a operação do dia a dia.",
      },
      { type: "h2", text: "O que precisa estar conectado" },
      {
        type: "ul",
        items: [
          "Vendas da pista e da loja/conveniência, por produto e por forma de pagamento",
          "Estoque de combustível: compras, quebras técnicas e custo real (CMV)",
          "Cartões: taxas acordadas x cobradas, sangrias e recebíveis",
          "Despesas fixas e variáveis, por posto e por setor",
        ],
      },
      {
        type: "quote",
        text: "Quando o DRE reflete a operação real, ele deixa de ser prestação de contas e vira ferramenta de decisão: dá para ver onde a margem escorre e agir.",
      },
      {
        type: "p",
        text: "Foi pensando nessa realidade que a AV nasceu operando o financeiro de redes de postos — conectando financeiro, estoque, loja e operação em uma rotina só. Um DRE que fecha com a pista não é luxo: é o que permite ao dono enxergar o resultado de verdade.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return AV_POSTS.find((p) => p.slug === slug);
}
