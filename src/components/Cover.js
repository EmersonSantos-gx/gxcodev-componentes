import { escapeHTML } from '../utils/dom.js';

const coverImages = [
  'photo-1551288049-bebda4e38f71',
  'photo-1460925895917-afdab827c52f',
  'photo-1551434678-e076c223a692',
  'photo-1519389950473-47ba0277781c'
];

/** Prévia ilustrativa compartilhada pelos cards de modelos e projetos. */
export function Cover(item, index) {
  const theme = ['mint', 'blue', 'violet', 'orange'].includes(item.theme) ? item.theme : 'mint';
  return `
    <div class="cover">
      <img loading="lazy"
        src="https://images.unsplash.com/${coverImages[index % coverImages.length]}?auto=format&fit=crop&w=800&q=75"
        alt="Imagem ilustrativa de tecnologia">
      <span class="badge cover-badge">${escapeHTML(item.status || item.category)}</span>
      <span class="cover-index">GX / ${String(index + 1).padStart(2, '0')}</span>
      <div class="mini-window ${theme}" aria-hidden="true">
        <div class="mini-bar"><span>● ● ●</span><span>${escapeHTML(item.title.split(' • ')[0])}</span></div>
        <div class="mini-head">${escapeHTML(item.headline)}</div>
        <div class="mini-blocks"><span></span><span></span><span></span></div>
      </div>
    </div>
  `;
}
