/** Renderiza Briefing; montagem realizada pelo App. */
export function Briefing() {
  return `
<section aria-label="Começar um projeto" class="reveal">
<div class="section-divider label">01 / Vamos construir?</div>
<button id="start" class="primary press" aria-expanded="false" aria-controls="simulator">
<span class="code" aria-hidden="true">{ }</span>
<span>
<strong>Do design ao sistema:<br>construa seu próximo produto.</strong>
<small>Descubra o valor da sua solução digital<br>em menos de 2 minutos.*</small>
</span>
<i class="fa-solid fa-arrow-down arrow" aria-hidden="true">
</i>
</button>
<p class="micro">*Briefing rápido em até 2 min. Orçamento após análise.</p>
<form id="simulator" class="sim glass" hidden>
<span class="label">Briefing expresso</span>
<h3 style="margin-top:5px">O que vamos tirar do papel?</h3>
<label for="solution">Tipo de solução</label>
<select id="solution" required>
<option>Protótipo UI/UX Figma</option>Sistema Web / SaaS</option>Aplicativo Mobile</option>Mini Site - Instagram</option>ChatBot WhatsApp</option>Design e Edições</option>Outro projeto</option>
</select>
<label for="brief">Conte um pouco da sua ideia (opcional)</label>
<textarea id="brief" maxlength="600" placeholder="Ex.: um mini site para apresentar meus serviços…">
</textarea>
<button class="action press full" style="margin-top:13px" type="submit">Conversar sobre meu projeto <i class="fa-brands fa-whatsapp" aria-hidden="true">
</i>
</button>
<p class="micro">Você revisa e envia a mensagem no WhatsApp.<br>Nenhum dado é armazenado neste site.</p>
</form>
<button id="plans" class="plan-trigger glass press">
<i class="fa-solid fa-layer-group" aria-hidden="true">
</i>
<span>
<strong>Planos & Produtos Digitais</strong>
<small>Desenvolvimento, manutenção e evolução.</small>
</span>
<i class="fa-solid fa-arrow-up-right-from-square arrow" aria-hidden="true">
</i>
</button>
</section>
  `;
}
