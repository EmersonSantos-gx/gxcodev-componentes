# Gxcodev — cartão digital em componentes JavaScript

Conversão do HTML enviado em um projeto com ES Modules, CSS separado e imagens locais. A estrutura, o conteúdo e a cascata visual do original foram preservados. Os componentes são funções JavaScript que retornam marcação; não usam React ou JSX.

## Abrir no VS Code

1. Extraia todo o ZIP.
2. No VS Code, abra a pasta `gxcodev-componentes` ou o arquivo `gxcodev.code-workspace`.
3. Use uma das opções abaixo.

### Opção A — Node.js 20 ou superior

No terminal, na pasta do projeto:

```sh
npm start
```

Acesse **http://localhost:5500**. Encerre com `Ctrl+C`.

Não precisa executar `npm install`: o servidor usa apenas módulos nativos do Node.js. `npm run dev` executa o mesmo servidor. O servidor não faz atualização automática; atualize a página após editar.

### Opção B — Live Server

Instale a extensão recomendada **Live Server** no VS Code. Clique com o botão direito em `index.html` e selecione **Open with Live Server**.

Use HTTP local: abrir `index.html` por duplo clique com protocolo `file://` pode bloquear os imports JavaScript.

## Organização

| Caminho | Responsabilidade |
| --- | --- |
| `index.html` | Metadados, CSS, ponto de montagem e fallback sem JavaScript |
| `src/main.js` | Montagem e inicialização dos comportamentos |
| `src/App.js` | Composição geral da página |
| `src/components/` | Componentes visuais individuais |
| `src/features/` | Eventos e regras de interação |
| `src/data/config.js` | WhatsApp, avatar, Instagram, CNPJ e URL de compartilhamento |
| `src/data/models.js` | Catálogo de modelos |
| `src/data/projects.js` | Catálogo de projetos |
| `src/styles/main.css` | Estilos e responsividade, mantendo a ordem da cascata original |
| `src/utils/dom.js` | Seleção de elementos e escape de texto HTML |
| `assets/images/` | Avatar e wallpaper extraídos do original, sem recompressão |
| `assets/fonts/` | Local previsto para arquivos licenciados da Comuna |
| `scripts/serve.js` | Servidor local sem dependências |
| `scripts/check.js` | Verificação de sintaxe e imports locais |
| `ANALISE.md` | Análise técnica, decisões e limites da validação |

## Componentes individuais

- `Hero`: avatar, apresentação e redes sociais.
- `Briefing`: chamada principal, formulário e botão de planos.
- `Showcase`: estrutura das abas e filtros da vitrine.
- `Cover`, `ModelCard`, `ProjectCard`: peças reutilizáveis da galeria.
- `Services`: especialidades.
- `Trust`: depoimento e indicadores, com as ressalvas originais.
- `Closing`: chamada final para contato.
- `Footer`: informações e compartilhamento.
- `FloatingWhatsApp`: botão flutuante.
- `PlansModal`, `DemoModal`, `ShareModal`: diálogos independentes.
- `Toast`: mensagens de status.

Os componentes são montados uma vez. As galerias atualizam somente seu próprio conteúdo. Inicialize as funções `init...` depois de montar a página; elas são pensadas para inicialização única, sem remontagem de SPA.

## Personalização

- Edite os contatos de comportamento em `src/data/config.js`.
- Atualize os textos, endereço e links visíveis nos componentes `Hero.js`, `Footer.js` e `FloatingWhatsApp.js`. Esses textos foram mantidos como no HTML e não são todos derivados de `CONFIG`.
- O endereço estruturado do arquivo de contato fica em `src/features/contact.js`; mantenha-o alinhado ao rodapé.
- Adicione ou altere modelos e projetos nos arquivos de `src/data/`.
- As prévias especiais Finance OS e Pixel Store usam os índices 2 e 3 do catálogo em `src/features/demo.js`. Ao reordenar o catálogo, ajuste essa associação.
- Substitua `assets/images/avatar.png` e `wallpaper.png` para trocar as imagens.
- A fonte Comuna não estava anexada. Adicione `Comuna-Medium.woff2` e `Comuna-Bold.woff2` em `assets/fonts/` com licença de uso web. Sem esses arquivos, a página tenta a instalação local e depois Space Grotesk ou sans-serif.
- Preencha `CONFIG.urlPublica` depois de hospedar. Sem isso, o compartilhamento usa o endereço HTTP atual, inclusive `localhost` durante desenvolvimento.

## Dependências externas preservadas

Font Awesome e fontes Google usam CDN. As fotos ilustrativas dos cards vêm do Unsplash. O layout próprio não exige Tailwind; o carregamento do Tailwind via CDN foi removido porque as regras necessárias já existem no CSS local. As classes utilitárias residuais do contêiner são redundantes com `.shell`.

O funcionamento principal não exige instalação de pacotes. Sem internet, ícones e fontes externas podem não carregar e as fotos dos cards são ocultadas se falharem; as miniaturas desenhadas em CSS continuam. Avatar e wallpaper são locais. Não foram incluídos arquivos de fonte não fornecidos.

## Verificação

```sh
npm run check
```

Confere sintaxe dos 33 módulos JavaScript e a existência dos imports relativos. Durante a conversão, as funções também foram exercitadas em um harness com DOM simulado. Consulte `ANALISE.md` para o escopo. A validação visual em navegador real ficou pendente no ambiente de geração.

## Publicação

É um projeto estático sem build. Publique a pasta mantendo `index.html`, `src/` e `assets/` nas mesmas posições. O servidor Node fornecido é destinado ao desenvolvimento local.

O formulário prepara uma mensagem e abre o WhatsApp; o usuário revisa e envia. Não há backend, banco de dados, autenticação ou envio automático de mensagens. As demos continuam ilustrativas.
