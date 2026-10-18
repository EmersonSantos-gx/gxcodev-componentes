import { $ } from '../utils/dom.js';
let toastTimer;
export function notify(message) {
  clearTimeout(toastTimer);
  const toast = $('#toast');
  toast.textContent = String(message ?? '').trim();
  toast.hidden = !toast.textContent;
  toastTimer = setTimeout(() => {
    toast.hidden = true;
    toast.textContent = '';
  }, 4500);
}
