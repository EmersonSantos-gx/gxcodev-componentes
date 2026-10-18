/** Renderiza Showcase; montagem realizada pelo App. */
export function Showcase() {
  return `
<section id="showcase" class="section" aria-labelledby="showcase-title">
<div class="section-divider label">02 / Explore as possibilidades</div>
<h2 id="showcase-title" class="section-title">Seu próximo projeto<br>pode começar aqui<span style="color:var(--mint)">.</span>
</h2>
<p class="section-description">Escolha um ponto de partida. Deixe a sua marca.</p>
<div class="tabs" role="tablist" aria-label="Vitrine Gxcodev">
<button id="tab-models" class="tab press" role="tab" aria-selected="true" aria-controls="panel-models" tabindex="0">
<i class="fa-regular fa-lightbulb" aria-hidden="true">
</i> Galeria de Modelos</button>
<button id="tab-projects" class="tab press" role="tab" aria-selected="false" aria-controls="panel-projects" tabindex="-1">
<i class="fa-solid fa-rocket" aria-hidden="true">
</i> Projetos Criados</button>
</div>
<div id="panel-models" class="panel" role="tabpanel" aria-labelledby="tab-models">
<div class="filters" role="group" aria-label="Categoria de modelo">
<button class="filter press" data-filter="Todos" aria-pressed="true">Todos</button>
<button class="filter press" data-filter="Landing Pages" aria-pressed="false">Landing Pages</button>
<button class="filter press" data-filter="Mini Sites" aria-pressed="false">Mini Sites</button>
<button class="filter press" data-filter="Dashboards/Sistemas" aria-pressed="false">Dashboards</button>
</div>
<div id="model-count" class="label" role="status" style="margin-bottom:11px;letter-spacing:.5px">4 modelos demonstrativos</div>
<div id="models" class="gallery">
</div>
</div>
<div id="panel-projects" class="panel" role="tabpanel" aria-labelledby="tab-projects" hidden>
<p class="portfolio-note">LN Pro: HTML desenvolvido neste projeto. Os demais são estudos demonstrativos de soluções, sem alegação de clientes ou resultados reais.</p>
<div id="projects" class="gallery">
</div>
</div>
</section>
  `;
}
