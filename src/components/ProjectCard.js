import { escapeHTML } from '../utils/dom.js';
import { Cover } from './Cover.js';

export function ProjectCard(project, index) {
  return `
    <article class="project-card">
      ${Cover(project, index)}
      <div class="card-body">
        <span class="label" style="font-size:8px;letter-spacing:.6px">${escapeHTML(project.category)}</span>
        <h3 style="margin-top:4px">${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.desc)}</p>
        <div class="tech">${escapeHTML(project.tech)}</div>
        <button class="action press full" data-project="${index}">
          <i class="fa-regular fa-comment" aria-hidden="true"></i> Quero um projeto semelhante
        </button>
      </div>
    </article>
  `;
}
