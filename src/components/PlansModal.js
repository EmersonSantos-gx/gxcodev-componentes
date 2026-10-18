/** Renderiza PlansModal; montagem realizada pelo App. */
export function PlansModal() {
  return `
<dialog id="plans-modal" class="modal" aria-labelledby="plans-title">
<button class="close press" data-close aria-label="Fechar planos">✕</button>
<span class="label">Escopo claro. Próximo passo simples.</span>
<h2 id="plans-title">Um plano para cada fase.</h2>
<p>Valores definidos após o briefing. Escopo, prazo e condições são combinados na proposta.</p>
<article class="plan glass">
<span class="plan-tag">01 / LANÇAR</span>
<h3>Desenvolvimento sob medida</h3>
<ul>
<li>Briefing e definição do escopo</li>
<li>Design de interface e implementação</li>
<li>Entrega e publicação conforme proposta</li>
</ul>
<button class="action press full" data-wa="Olá Gxcodev! Quero conhecer o plano de Desenvolvimento sob medida e solicitar uma proposta.">Solicitar proposta</button>
</article>
<article class="plan glass">
<span class="plan-tag">02 / EVOLUIR</span>
<h3>Manutenção & Suporte</h3>
<ul>
<li>Ajustes e melhorias contínuas</li>
<li>Atualizações e acompanhamento técnico</li>
<li>Frequência e prazo de resposta contratados</li>
</ul>
<button class="action secondary press full" data-wa="Olá Gxcodev! Quero conhecer os planos recorrentes de manutenção e suporte.">Conhecer manutenção</button>
</article>
<article class="plan glass">
<span class="plan-tag">03 / PERSONALIZAR</span>
<h3>Produtos Digitais & Templates</h3>
<ul>
<li>Modelos como ponto de partida</li>
<li>Personalização visual e de conteúdo</li>
<li>Licença e recursos definidos na proposta</li>
</ul>
<button class="action secondary press full" data-wa="Olá Gxcodev! Tenho interesse em produtos digitais e templates personalizados.">Consultar produtos</button>
</article>
</dialog>
  `;
}
