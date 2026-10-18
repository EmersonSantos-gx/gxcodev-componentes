import { $ } from '../utils/dom.js';
import { escapeHTML } from '../utils/dom.js';
import { MODELOS } from '../data/models.js';
import { openModal } from './modals.js';
import { enviarParaWhatsApp, modelMessage } from './whatsapp.js';
const state= {
  demo:null
};
export function openDemo(index) {
  state.demo=index;
  const m=MODELOS[index];
  $('#demo-title').textContent=m.title;
  let detail='';
  if(index===2) {
    detail='<div class="demo-grid"><div class="demo-tile"><strong>R$ 24k</strong>Receita fictícia</div><div class="demo-tile"><strong>R$ 8k</strong>Despesa fictícia</div><div class="demo-tile"><strong>+12%</strong>Variação fictícia</div></div><div style="height:85px;display:flex;align-items:end;gap:12px" aria-label="Gráfico financeiro ilustrativo">'+[28,42,36,60,48,75,68].map(h=>'<div style="flex:1;background:#a7f3d0;height:'+h+'px;border-radius:3px 3px 0 0"></div>').join('')+'</div>';
  }else if(index===3) {
    detail='<div class="demo-grid"><div class="demo-tile"><i class="fa-solid fa-headphones"></i><br>Áudio</div><div class="demo-tile"><i class="fa-solid fa-keyboard"></i><br>Periféricos</div><div class="demo-tile"><i class="fa-solid fa-desktop"></i><br>Setup</div></div>';
  }else {
    detail='<div class="demo-grid"><div class="demo-tile">Design<br>intuitivo</div><div class="demo-tile">Sua<br>identidade</div><div class="demo-tile">Mobile<br>first</div></div>';
  }
  $('#demo-content').innerHTML='<div class="demo-screen"><span class="label">'+escapeHTML(m.category)+'</span><div class="big">'+escapeHTML(m.headline)+'</div><p>'+escapeHTML(m.desc)+'</p>'+detail+'</div><p style="margin-bottom:17px">Prévia visual ilustrativa. Conteúdo, funções e integrações serão definidos na personalização. Não representa sistema, checkout ou serviço ativo.</p>';
  openModal('#demo-modal');
}

export function initDemo() {
  $('#demo-buy').addEventListener('click',()=> {
    if(state.demo!==null)enviarParaWhatsApp(modelMessage(MODELOS[state.demo]));
  });
}
