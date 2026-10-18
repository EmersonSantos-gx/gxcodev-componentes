import { $ } from '../utils/dom.js';
import { CONFIG } from '../data/config.js';
import { notify } from './notify.js';
import { openModal } from './modals.js';
export function initShare() {
  function publicLink() {
    return CONFIG.urlPublica||(/^https?:$/.test(location.protocol)?location.href.split('#')[0]:'https://instagram.com/'+CONFIG.instagram);
  }
  $('#share').addEventListener('click',async()=> {
    const url=publicLink();
    if(navigator.share) {
      try {
        await navigator.share( {
          title:'Gxcodev | Design & Desenvolvimento',text:'Sua próxima ideia começa aqui. Conheça a Gxcodev.',url
        });
        return;
      }catch(e) {
        if(e.name==='AbortError')return;
      }
    }try {
      if(!navigator.clipboard)throw new Error('clipboard');
      await navigator.clipboard.writeText(url);
      notify('Link copiado!');
    }catch(e) {
      $('#share-link').value=url;
      $('#share-note').textContent=location.protocol==='file:'&&!CONFIG.urlPublica?'Este HTML ainda não tem URL pública. Compartilhe o Instagram abaixo ou configure urlPublica após hospedar.':'Copie o endereço abaixo para compartilhar este cartão.';
      openModal('#share-modal');
    }
  });
  $('#copy').addEventListener('click',async()=> {
    const field=$('#share-link');
    try {
      await navigator.clipboard.writeText(field.value);
      $('#share-modal').close();
      notify('Link copiado!');
    }catch(e) {
      field.focus();
      field.select();
      field.setSelectionRange(0,field.value.length);
      notify('Use a opção Copiar no campo selecionado.');
    }
  });
}
