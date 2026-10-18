import { escapeHTML } from '../utils/dom.js';
import { Cover } from './Cover.js';

/** O índice é o identificador do modelo no catálogo, mesmo após filtrar. */
export function ModelCard(model, index) {
  return `
    <article class="project-card">
      ${Cover(model, index)}
      <div class="card-body">
        <h3>${escapeHTML(model.title)}</h3>
        <p>${escapeHTML(model.desc)}</p>
        <div class="tech">${escapeHTML(model.tech)}<br>100% responsivo · Conceito personalizável</div>
        <div class="card-actions">
          <button class="action secondary press" data-demo="${index}">
            <i class="fa-regular fa-eye" aria-hidden="true"></i> Ver Demo
          </button>
          <button class="action press" data-model="${index}">
            Quero este Modelo <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}
