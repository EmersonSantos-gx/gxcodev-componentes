/** Renderiza ShareModal; montagem realizada pelo App. */
export function ShareModal() {
  return `
<dialog id="share-modal" class="modal" aria-labelledby="share-title">
<button class="close press" data-close aria-label="Fechar compartilhamento">✕</button>
<h2 id="share-title">Compartilhe possibilidades.</h2>
<p id="share-note">Copie o link e envie para alguém que tem uma ideia para tirar do papel.</p>
<label for="share-link">Endereço</label>
<input id="share-link" readonly>
<button id="copy" class="action press full" style="margin-top:15px">Copiar link</button>
</dialog>
  `;
}
