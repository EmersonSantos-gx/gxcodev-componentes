import { CONFIG } from '../data/config.js';
export function enviarParaWhatsApp(mensagemPersonalizada) {
  window.location.href='https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(mensagemPersonalizada);
} export const modelMessage=m=>'Olá Gxcodev! Vi na Galeria de Modelos o demonstrativo '+m.title+' e tenho interesse em adquirir/personalizar para o meu negócio.';
export const projectMessage=p=>'Olá Gxcodev! Gostei muito do projeto '+p.title+' no portfólio de Projetos Criados e gostaria de orçar uma solução semelhante!';
export function initWhatsApp() {
  document.addEventListener('click',e=> {
    const b=e.target.closest('[data-wa]');
    if(b)enviarParaWhatsApp(b.dataset.wa);
  });
}
