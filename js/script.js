/* ===========================================================
   Joseph Mwichigi — Portfolio
   Shared script across every page.
   =========================================================== */

/* ------------------------------------------------------------
   DEMO CONFIG — this is the only place you need to edit to
   attach your real live websites (used on work.html).
------------------------------------------------------------ */
const PROJECTS = [
  {
    name: "Smart Community Hub",
    tab: "smart-community-hub",
    status: "live",
    liveUrl: "https://community-smart.ngangamj828.workers.dev/",
    repoUrl: "https://github.com/mwichigi/community-smart",
    description: "A full-stack community marketplace for Nyandarua County — farmers, buyers, landlords, and service providers, with GPS-mapped listings and real-time messaging.",
    stack: ["React (Vite)", "Express.js", "PostgreSQL", "Cloudflare"]
  },
  {
    name: "HaveNestKe",
    tab: "havenestke",
    status: "live",
    liveUrl: "https://havennestke.ngangamj828.workers.dev/",
    repoUrl: null, // <-- add your GitHub repo link here if you have one
    description: "A housing platform for the Nairobi environs, connecting landlords, tenants, and developers to available housing listings.",
    stack: ["Add your real stack here"] // <-- tell Joseph's assistant the real stack and this will be updated
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initClock();
  initTypewriter();
  initDraggableWindows();
  renderProjects();
  initEasterEgg();
  initContactForm();
});

function initNav(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('topNav');
  if(toggle && nav){
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
  if(nav){
    let current = window.location.pathname.split('/').pop();
    if(current === '') current = 'index.html';
    nav.querySelectorAll('a').forEach(a => {
      const href = a.getAttribute('href');
      a.classList.toggle('active', href === current);
    });
  }
}

function initClock(){
  const clockEl = document.getElementById('clock');
  if(!clockEl) return;
  function tick(){
    const d = new Date();
    let h = d.getHours(), m = d.getMinutes();
    const ap = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    clockEl.textContent = `${h}:${String(m).padStart(2,'0')} ${ap}`;
  }
  tick();
  setInterval(tick, 15000);
}

function initTypewriter(){
  const typedEl = document.getElementById('typedLine');
  if(!typedEl) return;
  const fullText = "$ whoami \u2192 full-stack developer, Kenya";
  let ti = 0;
  function typeStep(){
    if(ti <= fullText.length){
      typedEl.innerHTML = fullText.slice(0, ti) + '<span class="cursor-blink"></span>';
      ti++;
      setTimeout(typeStep, 38);
    }
  }
  typeStep();
}

function initDraggableWindows(){
  document.querySelectorAll('.window.draggable .win-titlebar').forEach(bar => {
    const win = bar.closest('.window');
    let ox = 0, oy = 0, dragging = false, startX = 0, startY = 0;
    bar.addEventListener('pointerdown', (e) => {
      dragging = true;
      startX = e.clientX; startY = e.clientY;
      win.style.zIndex = 10;
      bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener('pointermove', (e) => {
      if(!dragging) return;
      const dx = e.clientX - startX, dy = e.clientY - startY;
      win.style.transform = `translate(${ox + dx}px, ${oy + dy}px)`;
    });
    bar.addEventListener('pointerup', (e) => {
      if(!dragging) return;
      dragging = false;
      const dx = e.clientX - startX, dy = e.clientY - startY;
      ox += dx; oy += dy;
    });
  });
}

function renderProjects(){
  const grid = document.getElementById('projGrid');
  if(!grid) return;
  grid.innerHTML = PROJECTS.map(p => {
    const isLive = p.status === 'live' && p.liveUrl;
    const statusLabel = isLive ? 'LIVE' : 'IN DEVELOPMENT';
    const statusClass = isLive ? '' : 'dev';
    const liveLink = isLive
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener">view live \u2192</a>`
      : `<a class="disabled" href="#">live link coming soon</a>`;
    const repoLink = p.repoUrl
      ? `<a href="${p.repoUrl}" target="_blank" rel="noopener">source \u2192</a>`
      : '';
    const titleHTML = isLive
      ? `<a class="proj-title-link" href="${p.liveUrl}" target="_blank" rel="noopener">${p.name.toUpperCase()}</a>`
      : `${p.name.toUpperCase()}`;
    return `
      <div class="window proj-window">
        <div class="win-titlebar"><span class="tab">${p.tab}</span></div>
        <div class="win-body">
          <div class="proj-shot">
            <div class="browser-chrome">
              <div class="bar"><span></span><span></span><span></span></div>
              <div class="content"><div class="ln w70"></div><div class="ln w40"></div><div class="ln w90"></div></div>
            </div>
            <div class="proj-outline-title">${titleHTML}</div>
          </div>
          <div class="proj-info">
            <div class="proj-status ${statusClass}">${statusLabel}</div>
            <p>${p.description}</p>
            <div class="stack-tags">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
            <div class="proj-links">${liveLink}${repoLink}</div>
          </div>
        </div>
      </div>`;
  }).join('');
}

function showToast(msg){
  const toastEl = document.getElementById('toast');
  if(!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(window._toastT);
  window._toastT = setTimeout(() => toastEl.classList.remove('show'), 2800);
}

function initEasterEgg(){
  const egg = document.getElementById('eggIcon');
  if(!egg) return;
  egg.addEventListener('click', () => {
    showToast('\uD83D\uDC10 shamba.exe: when I\u2019m not coding, I\u2019m usually looking after livestock back home.');
  });
}

function initContactForm(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message received (demo only) \u2014 connect a form backend to make this live.');
    form.reset();
  });
}
