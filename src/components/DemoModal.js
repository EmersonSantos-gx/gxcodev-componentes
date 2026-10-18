/** Renderiza DemoModal; montagem realizada pelo App. */
export function DemoModal() {
  return `
<dialog id="demo-modal" class="modal" aria-labelledby="demo-title">
<button class="close press" data-close aria-label="Fechar demonstração">✕</button>
<span class="label">Preview conceitual / não é um produto ativo</span>
<h2 id="demo-title">
</h2>
<div id="demo-content">
</div>
<button id="demo-buy" class="action press full">Quero este Modelo <i class="fa-brands fa-whatsapp" aria-hidden="true">
</i>
</button>
</dialog>
  `;
}
