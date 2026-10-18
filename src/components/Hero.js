/** Renderiza Hero; montagem realizada pelo App. */
export function Hero() {
  return `
<header class="hero pad reveal">
<div class="circuit" aria-hidden="true">
</div>
<div class="avatar-ring gx-avatar">
<img id="profile" class="avatar" alt="Avatar circular da Gxcodev" width="120" height="120" fetchpriority="high">
</div>
<div class="hero-kicker">Estúdio digital independente</div>
<h1 style="margin-top:10px">Gx<span>codev</span>
<span class="mono" style="font-size:26px">.</span>
</h1>
<p class="signature">
<b>G</b> Garotinho · <b>X</b> Inovação<br>
<b>Code</b> Códigos · <b>Dev</b> Desenvolvedor</p>
<p class="bio">Gxcodev | Transformando ideias em códigos, UI/UX Designer e Edições.</p>
<p class="place">
<i class="fa-solid fa-location-dot" aria-hidden="true">
</i> Maceió, AL ↗ Todo o Brasil</p>
<div class="pills">
<span class="pill">
<i class="fa-solid fa-pen-nib" aria-hidden="true">
</i>UI/UX Design</span>
<span class="pill">
<i class="fa-solid fa-bolt" aria-hidden="true">
</i>Protótipos</span>
<span class="pill">
<i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true">
</i>Edições</span>
</div>
<nav class="socials" aria-label="Redes sociais e contato">
<a class="social glass press" href="https://instagram.com/gxcodev.space" target="_blank" rel="noopener noreferrer" aria-label="Instagram Gxcodev">
<i class="fa-brands fa-instagram" aria-hidden="true">
</i>
</a>
<button class="social glass press" data-wa="Olá Gxcodev! Quero conversar sobre uma solução digital para meu negócio." aria-label="WhatsApp Gxcodev">
<i class="fa-brands fa-whatsapp" aria-hidden="true">
</i>
</button>
<a id="map" class="social glass press" href="https://www.google.com/maps/search/?api=1&query=R.%20%C3%81lvares%20Cabral%2C%2071%20-%20Prado%2C%20Macei%C3%B3%20-%20AL%2C%2057010-040" target="_blank" rel="noopener noreferrer" aria-label="Ver localização no Google Maps">
<i class="fa-solid fa-location-dot" aria-hidden="true">
</i>
</a>
<button id="contact" class="social glass press" aria-label="Salvar contato Gxcodev">
<i class="fa-regular fa-address-card" aria-hidden="true">
</i>
</button>
</nav>
</header>
  `;
}
