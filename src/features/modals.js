import { $ } from '../utils/dom.js';
export function openModal(id) {
  $(id).showModal();
}

export function initModals() {
  document.querySelectorAll('dialog').forEach(d=> {
    d.querySelector('[data-close]').addEventListener('click',()=>d.close());
    d.addEventListener('click',e=> {
      if(e.target===d) {
        const r=d.getBoundingClientRect();
        if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();
      }
    });
  });
  $('#plans').addEventListener('click',()=>openModal('#plans-modal'));
}
