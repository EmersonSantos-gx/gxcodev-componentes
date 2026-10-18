import { $ } from '../utils/dom.js';
import { enviarParaWhatsApp } from './whatsapp.js';
export function initBriefing() {
  $('#start').addEventListener('click',()=> {
    const show=$('#simulator').hidden;
    $('#simulator').hidden=!show;
    $('#start').setAttribute('aria-expanded',String(show));
    if(show) {
      $('#simulator').scrollIntoView( {
        behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'
      });
      $('#solution').focus( {
        preventScroll:true
      });
    }
  });
  $('#simulator').addEventListener('submit',e=> {
    e.preventDefault();
    const details=$('#brief').value.trim();
    enviarParaWhatsApp('Olá Gxcodev! Quero orçar uma solução: '+$('#solution').value+'.'+(details?' Minha ideia: '+details:'')+' Podemos conversar sobre escopo, prazo e investimento?');
  });
}
