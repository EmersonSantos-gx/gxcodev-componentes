import { $ } from '../utils/dom.js';
export function initTabs() {
  const tabs=Array.from(document.querySelectorAll('[role=tab]'));
  function setTab(tab) {
    tabs.forEach(t=> {
      const active=t===tab;
      t.setAttribute('aria-selected',String(active));
      t.tabIndex=active?0:-1;
      $('#'+t.getAttribute('aria-controls')).hidden=!active;
    });
  }

  tabs.forEach((tab,index)=> {
    tab.addEventListener('click',()=>setTab(tab));
    tab.addEventListener('keydown',e=> {
      let next;
      if(e.key==='ArrowRight')next=(index+1)%tabs.length;
      else if(e.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;
      else if(e.key==='Home')next=0;
      else if(e.key==='End')next=tabs.length-1;
      else return;
      e.preventDefault();
      setTab(tabs[next]);
      tabs[next].focus();
    });
  });
}
