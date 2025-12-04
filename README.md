<!-- prettier-ignore -->
# Gifs App

Uma aplicação simples para buscar e navegar por GIFs usando a API do GIPHY. Feita com Vite, React e TypeScript — pequena, rápida e pronta para expansão.

---

## ✨ Visão geral

O `gifs-app` permite pesquisar GIFs por termos, visualizar resultados e rever pesquisas anteriores. É ideal como projeto de front-end didático ou base para algo maior — com separação clara entre API, ações e componentes.

---

## 🚀 Funcionalidades

- **Busca de GIFs** por termo de pesquisa.
- **Histórico de buscas**: reexecutar pesquisas anteriores com um clique.
- **Arquitetura simples** com chamadas API isoladas em `src/gifs/api`, ações em `src/gifs/actions` e componentes em `src/gifs/components`.
- **TypeScript** com interfaces para as respostas da API.

---

## 🧰 Stack tecnológica

- **Vite** — bundler e servidor de desenvolvimento.
- **React** + **TypeScript** — UI e tipagem.
- **Axios** — chamadas HTTP.

---

## Estrutura do projeto (resumida)

- `src/gifs/api/giphy.api.ts`: cliente para a API do GIPHY.
- `src/gifs/actions/get-gifs-by-query.action.ts`: ação que busca GIFs.
- `src/gifs/components/GiftList.tsx`: lista de GIFs.
- `src/gifs/components/PreviousSearches.tsx`: histórico de pesquisas.
- `src/shared/components/SeachBar.tsx`: componente de busca reutilizável.

---

## ⚙️ Pré-requisitos

- Node.js (recomendado v16+)

---

## 📥 Instalação

No diretório do projeto, instale as dependências:

```zsh
npm install
```

---

## 🔧 Variáveis de ambiente

Para usar a API do GIPHY, defina uma variável de ambiente com sua chave:

```zsh
export VITE_GIPHY_API_KEY="sua_chave_aqui"
```

O código espera que a chave esteja disponível como `import.meta.env.VITE_GIPHY_API_KEY` (padrão Vite).

---

## 🏁 Scripts úteis

- **Iniciar servidor de desenvolvimento**:

```zsh
npm run dev
```

- **Build para produção**:

```zsh
npm run build
```

- **Ver build localmente**:

```zsh
npm run preview
```

- **Formatar / checar / lint**:

```zsh
npm run format
npm run check
npm run lint
```

---

## 🛠️ Como contribuir

- Faça um fork e abra um PR com mudanças pequenas e focadas.
- Prefira commits atômicos e mensagens claras.
- Se for adicionar uma feature que precisa de chave de API, documente como configurar localmente.

---

## 📚 Notas de desenvolvimento

- Os módulos estão intencionalmente organizados em pastas pequenas para facilitar testes e reaproveitamento.
- Se quiser trocar a API (por exemplo, outra fonte de GIFs), basta adaptar `src/gifs/api/giphy.api.ts` e manter as interfaces compatíveis.

---

## ✉️ Contato

Se quiser discutir melhorias, abrir issues ou pedir features, abra uma issue neste repositório.

---

© Projeto pessoal — sinta-se à vontade para usar como base em outros projetos.
