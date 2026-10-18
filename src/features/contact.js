import { $ } from '../utils/dom.js';
import { CONFIG } from '../data/config.js';
import { notify } from './notify.js';
export function initContact() {
  $('#contact').addEventListener('click',()=> {
    const vcard=['BEGIN:VCARD','VERSION:3.0','N:;Gxcodev;;;','FN:Gxcodev','ORG:Gxcodev','TEL;TYPE=CELL:+'+CONFIG.whatsapp,'URL:https://instagram.com/'+CONFIG.instagram,'ADR;TYPE=WORK:;;R. Álvares Cabral\\, 71 - Prado;Maceió;AL;57010-040;Brasil','NOTE:UI/UX Design\\, Desenvolvimento e Edições - CNPJ '+CONFIG.cnpj,'END:VCARD',''].join('\r\n');
    const url=URL.createObjectURL(new Blob([vcard], {
      type:'text/vcard;charset=utf-8'
    }));
    const a=document.createElement('a');
    a.href=url;
    a.download='Gxcodev.vcf';
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),10000);
    notify('Contato preparado! Abra o arquivo para salvar na agenda.');
  });
}
