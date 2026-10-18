import { App } from './App.js';
import { wallpaper } from './data/config.js';
import { initProfile } from './features/profile.js';
import { initWhatsApp } from './features/whatsapp.js';
import { initModals } from './features/modals.js';
import { initDemo } from './features/demo.js';
import { initGallery } from './features/gallery.js';
import { initTabs } from './features/tabs.js';
import { initBriefing } from './features/briefing.js';
import { initContact } from './features/contact.js';
import { initShare } from './features/share.js';
// Mount all components before registering listeners.
document.querySelector('#app').innerHTML = App();
document.documentElement.style.setProperty('--wallpaper', `url("${wallpaper}")`);
initProfile();
initWhatsApp();
initModals();
initDemo();
initGallery();
initTabs();
initBriefing();
initContact();
initShare();
// A failed optional cover must not leave a broken image marker.
document.querySelector('#app').addEventListener('error', (event) => {
  if (event.target.matches?.('.cover img')) event.target.hidden = true;
}, true);
