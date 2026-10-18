import { $ } from '../utils/dom.js';
import { MODELOS } from '../data/models.js';
import { PROJETOS } from '../data/projects.js';
import { ModelCard } from '../components/ModelCard.js';
import { ProjectCard } from '../components/ProjectCard.js';
import { enviarParaWhatsApp, modelMessage, projectMessage } from './whatsapp.js';
import { openDemo } from './demo.js';
export function initGallery() {
  const state= {
    filter:'Todos'
  };
  function renderModels() {
    const visible=MODELOS.map((m,i)=>( {
      m,i
    })).filter(( {
      m
    })=>state.filter==='Todos'||m.category===state.filter);
    $('#models').innerHTML=visible.map(( {
      m,i
    })=>ModelCard(m,i)).join('');
    $('#model-count').textContent=visible.length+(visible.length===1?' modelo demonstrativo':' modelos demonstrativos');
  }
  function renderProjects() {
    $('#projects').innerHTML=PROJETOS.map((p,i)=>ProjectCard(p,i)).join('');
  }
  $('#models').addEventListener('click',e=> {
    const demo=e.target.closest('[data-demo]'),buy=e.target.closest('[data-model]');
    if(demo)openDemo(Number(demo.dataset.demo));
    if(buy)enviarParaWhatsApp(modelMessage(MODELOS[Number(buy.dataset.model)]));
  });
  $('#projects').addEventListener('click',e=> {
    const b=e.target.closest('[data-project]');
    if(b)enviarParaWhatsApp(projectMessage(PROJETOS[Number(b.dataset.project)]));
  });
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=> {
    state.filter=b.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
    renderModels();
  }));
  renderModels();
  renderProjects();
}
