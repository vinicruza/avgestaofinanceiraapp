# Blog da AV — pipeline de conteúdo

Esta pasta é a base do blog da AV: onde os posts nascem como **rascunhos
revisáveis** antes de irem ao ar. Serve tanto para escrita manual quanto para a
**rotina automática de conteúdo**.

## Arquivos

| Arquivo | Papel |
|---|---|
| `GUIDELINES.md` | Fonte de verdade: posicionamento, tom, categorias e regras de SEO. **Leia sempre antes de escrever.** |
| `PAUTAS.md` | Backlog priorizado de temas. A fila de trabalho. |
| `_template.md` | Estrutura (frontmatter + esqueleto) de um post. |
| `AAAA-MM-DD-slug.md` | Cada post é um arquivo Markdown com frontmatter. |

## Como a rotina automática funciona (proposta)

A cada execução agendada, um agente:

1. Lê `GUIDELINES.md` e `PAUTAS.md`.
2. Pega a **primeira pauta não marcada** (`[ ]`).
3. Escreve o post seguindo as diretrizes e o `_template.md`, salvando em
   `content/blog/AAAA-MM-DD-slug.md` com `status: draft`.
4. Marca a pauta como `[x]` em `PAUTAS.md` com o caminho do arquivo.
5. Abre um **Pull Request** com o rascunho, para **revisão humana**.

> **Nada é publicado automaticamente.** A rotina só gera rascunhos em PR — uma
> pessoa revisa, ajusta e aprova. Isso protege a marca: conteúdo externo sempre
> passa por um olhar humano antes de ir ao ar.

## De rascunho a publicado

1. Revisar o PR: posicionamento, dados (`<!-- FONTE? -->`), SEO e tom.
2. Trocar `status: draft` → `published` no frontmatter.
3. Fazer merge.
4. **Renderização no site:** a página `/conteudo` ainda lista artigos fixos
   (placeholders com link `#`). Para os posts aparecerem de verdade, é preciso
   um passo separado: ligar a leitura destes Markdown à rota de blog. Esse passo
   é independente da geração de conteúdo e pode ser feito quando houver posts
   suficientes aprovados.
