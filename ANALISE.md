# Análise do HTML e da conversão

## Arquivo recebido

O HTML concentrava a marcação de toda a página, CSS, catálogos, imagens base64 e eventos em um arquivo. Já apresentava regras responsivas, foco visível, redução de movimento, diálogos nativos, abas com atributos ARIA e navegação por teclado. A galeria usava escape de texto antes de inserir conteúdo HTML.

As duas imagens base64 ocupavam a maior parte do código. O script único misturava configuração, apresentação, estado da galeria, formulários, diálogos, vCard e compartilhamento. Isso dificultava localizar alterações e reaproveitar cards.

## Alterações realizadas

1. Extração dos bytes originais do avatar e wallpaper para PNGs locais.
2. Separação de 15 componentes visuais em módulos JavaScript individuais.
3. Composição em `App.js` e inicialização explícita em `main.js`.
4. Separação dos eventos em nove módulos de funcionalidades, com notificação compartilhada em módulo próprio.
5. Catálogos em arquivos de dados independentes; cards reutilizáveis com escape HTML.
6. CSS em arquivo próprio, preservando a cascata e os ajustes posteriores de identidade.
7. Remoção do carregamento Tailwind via CDN: o CSS próprio já define o layout utilizado.
8. Tratamento de falha das imagens da galeria via evento, substituindo o atributo inline `onerror`.
9. Inclusão de caminhos para os WOFF2 da Comuna, servidor local sem dependências, configuração do VS Code e instruções em português.
10. Fallback sem JavaScript movido para o HTML inicial, pois componentes JavaScript não são montados quando scripts estão desativados.

## Pontos observados no conteúdo original

- Comuna não veio acompanhada dos arquivos da fonte. Não é possível garantir sua aparência em todos os dispositivos até que esses arquivos sejam adicionados.
- Depoimento, satisfação de 99% e atendimento 24/7 já estavam identificados no HTML como pendentes de validação ou ilustrativos. Esses textos e suas ressalvas foram preservados.
- O botão flutuante contém o texto estático “Online Agora”; não existe consulta de presença.
- As demonstrações são prévias conceituais. Não há sistema financeiro, checkout, integrações de atendimento ou backend implementados nelas.
- Ícones, fotos ilustrativas e fontes de fallback ainda podem depender de rede.
- O CSS mantém regras antigas sobrescritas por ajustes posteriores. Preservar a ordem reduz o risco de alterar o visual; uma futura limpeza visual deve ser feita com comparação em navegador.
- O endereço do vCard e parte dos contatos/textos visíveis permanecem nos componentes e precisam ser mantidos alinhados à configuração. O README indica os arquivos.

## Verificações executadas

- Sintaxe dos 33 módulos JavaScript e existência de todos os imports relativos.
- Composição da página e ausência de IDs duplicados.
- Renderização lógica de quatro modelos e quatro projetos.
- Filtros, contagem e preservação dos índices originais após filtrar.
- Alternância das abas e navegação por teclado em DOM simulado.
- Abertura do briefing e montagem da URL codificada do WhatsApp.
- Abertura e fechamento lógico de planos e renderização das quatro demonstrações.
- Ação de contato e feedback de download, em DOM simulado.
- Compartilhamento por clipboard e fallback de seleção manual, em DOM simulado.
- Escape de texto HTML e remoção de eventos inline de imagem.
- Respostas HTTP locais para HTML, módulos, CSS e imagens; integridade dos PNGs extraídos.
- Integridade do arquivo ZIP.

O harness usa DOM simulado: não comprova layout, contenção de foco nativa, download real no navegador nem a integração com aplicativos externos. A tentativa de disponibilizar Chromium não concluiu com um pacote de instalação válido; por isso não houve inspeção visual em navegador real. Não foi enviada mensagem ao WhatsApp.

## Roteiro de conferência no VS Code

Execute `npm start` e confira larguras de 320 px, 390 px e desktop. Verifique avatar e fundo, abas com setas/Home/End, foco e Escape dos modais, todos os filtros, briefing, download do contato e compartilhamento. Com os arquivos da Comuna disponíveis, confira novamente as quebras de linha. Teste WhatsApp em um celular e em desktop antes de publicar.

## Correção da notificação vazia

Removida a quebra de linha interna de `Toast.js`, que fazia `:empty` deixar de corresponder ao elemento. A caixa agora começa com `hidden`; `notify()` controla explicitamente sua visibilidade e a oculta ao expirar. Verificado o estado inicial, a exibição de mensagem, a expiração e o tratamento de texto vazio.
