import { Hero } from './components/Hero.js';
import { Briefing } from './components/Briefing.js';
import { Showcase } from './components/Showcase.js';
import { Services } from './components/Services.js';
import { Trust } from './components/Trust.js';
import { Closing } from './components/Closing.js';
import { Footer } from './components/Footer.js';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.js';
import { PlansModal } from './components/PlansModal.js';
import { DemoModal } from './components/DemoModal.js';
import { ShareModal } from './components/ShareModal.js';
import { Toast } from './components/Toast.js';
export function App() {
  return `<main class="shell max-w-[460px] mx-auto">
    ${Hero()}
    <div class="pad">
      ${Briefing()} ${Showcase()} ${Services()} ${Trust()} ${Closing()} ${Footer()}
    </div>
  </main>
  ${FloatingWhatsApp()} ${PlansModal()} ${DemoModal()} ${ShareModal()} ${Toast()}`;
}
