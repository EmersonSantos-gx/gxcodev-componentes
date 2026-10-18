import { $ } from '../utils/dom.js';
import { CONFIG } from '../data/config.js';
export function initProfile() {
  const avatar=$('#profile');
  avatar.addEventListener('error',()=> {
    avatar.onerror=null;
    avatar.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#10271f"/><path d="M0 35h30v20h20M120 85H90V65H70M35 0v25h20M85 120V95H65" fill="none" stroke="#a7f3d0" stroke-opacity=".25"/><text x="60" y="72" fill="#a7f3d0" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold">GX</text></svg>');
    avatar.alt='Gxcodev: avatar tecnológico GX';
  });
  avatar.src=CONFIG.foto;
  $('#year').textContent=new Date().getFullYear();
}
