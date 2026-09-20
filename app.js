// ══════════════════════════════════════════════════════
//  ⚙  ENV CONFIG  — edit before deploying to CF Pages
// ══════════════════════════════════════════════════════
const CONFIG = {
  name:     "devil.ld",
  handle:   "@devil_v2.",
  title:    "Developer · Designer",
  bio:      "Building things in the dark.",
  avatar:   "",                     // paste image URL here
  password: "admin",                // change this

  links: [
    { id:1, platform:"discord",   label:"Discord",    url:"https://discord.gg/zSJ5uHn4jq" },
    { id:2, platform:"BOTBYPASS",   label:"BOTBYPASS",    url:"https://discord.com/oauth2/authorize?client_id=1534928850168057940" },
    { id:3, platform:"BOTDEVIL",   label:"BOTDEVIL",    url:"https://discord.com/oauth2/authorize?client_id=1546133608681578597" },
    { id:4, platform:"Websites",   label:"Websites",    url:"https://devilbypass.dev/" },
  ],
};
// ══════════════════════════════════════════════════════

// ── ICONS ────────────────────────────────────────────
const IC = {
  facebook:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  line:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7.03 3 3 6.58 3 11c0 2.74 1.62 5.17 4.07 6.7L6.5 21l3.3-1.62c.7.14 1.44.22 2.2.22C16.97 19.6 21 16.02 21 11 21 6.58 16.97 3 12 3zm-3 10V8.5h1.5V13H9zm2.5 0V8.5H14l1.5 2.6V8.5H17V13h-1.5L14 10.4V13h-1.5zm-5-.5V8.5H8V13H6.5z"/></svg>`,
  instagram:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none"/></svg>`,
  discord:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 2.9a.07.07 0 0 0-.08.04c-.21.37-.44.86-.6 1.25a18.3 18.3 0 0 0-5.5 0c-.17-.4-.4-.88-.61-1.25a.08.08 0 0 0-.08-.04A19.7 19.7 0 0 0 3.68 4.4a.07.07 0 0 0-.03.03C.53 9.05-.32 13.6.1 18.06a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.03c.46-.63.88-1.3 1.23-2a.08.08 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.9.08.08 0 0 1-.01-.13c.13-.1.25-.2.37-.29a.07.07 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.07.07 0 0 1 .08.01c.12.1.24.2.37.3a.08.08 0 0 1-.01.12 12.3 12.3 0 0 1-1.87.9.08.08 0 0 0-.04.1c.36.7.77 1.37 1.23 2a.08.08 0 0 0 .08.03 19.8 19.8 0 0 0 6-3.03.08.08 0 0 0 .03-.06c.5-5.18-.84-9.67-3.55-13.66a.06.06 0 0 0-.03-.02zM8.02 15.3c-1.18 0-2.16-1.09-2.16-2.42s.96-2.42 2.16-2.42c1.21 0 2.18 1.1 2.16 2.42 0 1.33-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.16-1.09-2.16-2.42s.96-2.42 2.16-2.42c1.21 0 2.18 1.1 2.16 2.42 0 1.33-.95 2.42-2.16 2.42z"/></svg>`,
  twitter:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24H16.17l-5.21-6.82L4.99 21.75H1.68l7.73-8.84L1.25 2.25H8.08l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z"/></svg>`,
  github:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 2.5-.34c.85 0 1.7.12 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.02C22 6.48 17.52 2 12 2z"/></svg>`,
  tiktok:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.34 6.29 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.98a8.23 8.23 0 0 0 4.81 1.53V7.06a4.85 4.85 0 0 1-1.83-.37z"/></svg>`,
  youtube:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.55 12 3.55 12 3.55s-7.51 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.87.5 9.38.5 9.38.5s7.51 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg>`,
  telegram:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 1 0 0 24A12 12 0 0 0 12 0zm5.56 8.18-2.04 9.6c-.15.66-.55.82-1.11.51l-3-2.21-1.45 1.4c-.16.16-.3.3-.62.3l.22-3.09 5.63-5.08c.24-.22-.05-.34-.38-.12L6.42 14.7l-2.96-.93c-.64-.2-.65-.64.14-.95l11.54-4.45c.53-.19 1 .13.42 1.81z"/></svg>`,
  whatsapp:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.41-.07-.12-.27-.2-.57-.35zm-5.42 7.4h-.004a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37A9.86 9.86 0 0 1 2.1 11.9C2.1 6.44 6.55 2 12.05 2c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88z"/></svg>`,
  email:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  website:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  user:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  edit:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>`,
  trash:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
};

// ── STATE ────────────────────────────────────────────
const STORAGE_KEY = 'biopage_v1';

function loadState(){
  try{
    const s = localStorage.getItem(STORAGE_KEY);
    if(s) return JSON.parse(s);
  }catch(e){}
  return structuredClone(CONFIG);
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(S)); }

let S = loadState();
let panelOpen = false;
let tapCount = 0, tapTimer;

// ── RENDER ───────────────────────────────────────────
function render(){
  document.title = S.name + ' · BIO';
  document.getElementById('pname').textContent = S.name;
  document.getElementById('phandle').textContent = S.handle;
  document.getElementById('ptitle').textContent = S.title;
  document.getElementById('pbio').textContent = S.bio;
  document.getElementById('fName').textContent = S.name;

  // avatar
  const wrap = document.getElementById('avWrap');
  const old = wrap.querySelector('.av, .av-ph');
  if(old) old.remove();
  const hint = wrap.querySelector('.av-tap');

  if(S.avatar){
    const img = Object.assign(document.createElement('img'),{
      className:'av', src:S.avatar, alt:S.name
    });
    img.onerror = () => img.remove();
    wrap.insertBefore(img, hint);
  } else {
    const ph = document.createElement('div');
    ph.className = 'av-ph';
    ph.innerHTML = IC.user;
    wrap.insertBefore(ph, hint);
  }

  // links
  const links = document.getElementById('links');
  links.innerHTML = '';
  S.links.forEach(lk => {
    const a = Object.assign(document.createElement('a'),{
      className:'li', href: lk.url,
      target:'_blank', rel:'noopener noreferrer'
    });
    a.innerHTML = `${IC[lk.platform]||IC.website}<span class="li-label">${lk.label}</span><span class="li-arr">→</span>`;
    links.appendChild(a);
  });

  if(panelOpen) renderPanel();
}

// ── ADMIN PANEL ──────────────────────────────────────
function renderPanel(){
  document.getElementById('aName').value  = S.name;
  document.getElementById('aHandle').value= S.handle;
  document.getElementById('aTitle').value = S.title;
  document.getElementById('aBio').value   = S.bio;
  document.getElementById('aUrl').value   = S.avatar;
  document.getElementById('aPw').value    = '';
  renderAvatarPreview();
  renderLinkList();
}

function renderAvatarPreview(){
  const p = document.getElementById('apPrev');
  p.innerHTML = S.avatar
    ? `<img class="ap-img" src="${S.avatar}" alt="">`
    : `<div class="ap-ph">${IC.user}</div>`;
}

function renderLinkList(){
  const el = document.getElementById('alList');
  el.innerHTML = '';
  S.links.forEach(lk => {
    const d = document.createElement('div');
    d.className = 'al';
    d.innerHTML = `
      ${IC[lk.platform]||IC.website}
      <span class="al-lbl">${lk.label}</span>
      <div class="al-acts">
        <button class="ib" onclick="openEdit(${lk.id})">${resize(IC.edit,14)}</button>
        <button class="ib d" onclick="delLink(${lk.id})">${resize(IC.trash,14)}</button>
      </div>`;
    el.appendChild(d);
  });
}

function resize(svg, n){
  return svg.replace('viewBox','width="'+n+'" height="'+n+'" viewBox');
}

// ── PROFILE SAVE ─────────────────────────────────────
function saveProfile(){
  S.name   = document.getElementById('aName').value.trim()  || S.name;
  S.handle = document.getElementById('aHandle').value.trim()|| S.handle;
  S.title  = document.getElementById('aTitle').value.trim() || S.title;
  S.bio    = document.getElementById('aBio').value.trim()   || S.bio;
  S.avatar = document.getElementById('aUrl').value.trim();
  const np = document.getElementById('aPw').value.trim();
  if(np) S.password = np;
  saveState(); render(); toast('SAVED');
}

function applyAv(){
  S.avatar = document.getElementById('aUrl').value.trim();
  renderAvatarPreview();
  render();
}

// ── LINKS ─────────────────────────────────────────────
function openAddLink(){
  document.getElementById('lmTitle').textContent='ADD LINK';
  document.getElementById('lmId').value='';
  document.getElementById('lmPlatform').value='website';
  document.getElementById('lmLabel').value='';
  document.getElementById('lmUrl').value='';
  show('linkOv');
}

function openEdit(id){
  const lk = S.links.find(l=>l.id===id); if(!lk) return;
  document.getElementById('lmTitle').textContent='EDIT LINK';
  document.getElementById('lmId').value=id;
  document.getElementById('lmPlatform').value=lk.platform;
  document.getElementById('lmLabel').value=lk.label;
  document.getElementById('lmUrl').value=lk.url;
  show('linkOv');
}

function delLink(id){
  S.links=S.links.filter(l=>l.id!==id);
  saveState(); render(); toast('REMOVED');
}

document.getElementById('lmSave').onclick = () => {
  const id=document.getElementById('lmId').value;
  const pl=document.getElementById('lmPlatform').value;
  const lb=document.getElementById('lmLabel').value.trim();
  const ur=document.getElementById('lmUrl').value.trim();
  if(!lb||!ur){toast('FILL ALL FIELDS');return;}
  if(id){
    const lk=S.links.find(l=>l.id==id);
    if(lk){lk.platform=pl;lk.label=lb;lk.url=ur;}
  }else{
    S.links.push({id:Date.now(),platform:pl,label:lb,url:ur});
  }
  saveState(); render(); hide('linkOv');
  toast(id?'UPDATED':'ADDED');
};

document.getElementById('lmCancel').onclick = () => hide('linkOv');

function doReset(){
  if(!confirm('Reset all changes?')) return;
  localStorage.removeItem(STORAGE_KEY);
  S=loadState(); render(); toast('RESET');
}

// ── AUTH ──────────────────────────────────────────────
document.getElementById('lockBtn').onclick=()=>{
  if(panelOpen){closePanel();return;}
  show('authOv');
  setTimeout(()=>document.getElementById('pwIn').focus(),80);
};

document.getElementById('authOk').onclick=()=>{
  if(document.getElementById('pwIn').value===S.password){
    hide('authOv');
    document.getElementById('pwIn').value='';
    document.getElementById('pwErr').classList.remove('on');
    openPanel();
  }else{
    document.getElementById('pwErr').classList.add('on');
    document.getElementById('pwIn').value='';
    document.getElementById('pwIn').focus();
  }
};

document.getElementById('authCancel').onclick=()=>{
  hide('authOv');
  document.getElementById('pwIn').value='';
  document.getElementById('pwErr').classList.remove('on');
};

document.getElementById('pwIn').addEventListener('keydown',e=>{
  if(e.key==='Enter') document.getElementById('authOk').click();
});

// avatar tap unlock
document.getElementById('avWrap').addEventListener('click',()=>{
  tapCount++;
  clearTimeout(tapTimer);
  tapTimer=setTimeout(()=>tapCount=0, 1800);
  if(tapCount>=5){
    tapCount=0;
    if(!panelOpen){show('authOv');setTimeout(()=>document.getElementById('pwIn').focus(),80);}
  }
});

// keyboard shortcut: Ctrl+Shift+A
document.addEventListener('keydown',e=>{
  if(e.ctrlKey&&e.shiftKey&&e.key==='A'){
    e.preventDefault();
    if(panelOpen) closePanel();
    else{show('authOv');setTimeout(()=>document.getElementById('pwIn').focus(),80);}
  }
});

function openPanel(){
  panelOpen=true;
  renderPanel();
  document.getElementById('panel').classList.add('on');
  document.getElementById('panel-backdrop').classList.add('on');
}

function closePanel(){
  panelOpen=false;
  document.getElementById('panel').classList.remove('on');
  document.getElementById('panel-backdrop').classList.remove('on');
}

document.getElementById('phClose').onclick=closePanel;
document.getElementById('panel-backdrop').onclick=closePanel;

// ── OVERLAY HELPERS ───────────────────────────────────
function show(id){document.getElementById(id).classList.add('on');}
function hide(id){document.getElementById(id).classList.remove('on');}

document.querySelectorAll('.ov').forEach(o=>
  o.addEventListener('click',e=>{if(e.target===o) o.classList.remove('on');})
);

// ── TOAST ─────────────────────────────────────────────
let toastT;
function toast(msg){
  const el=document.getElementById('toast');
  el.textContent='// '+msg;
  el.classList.add('on');
  clearTimeout(toastT);
  toastT=setTimeout(()=>el.classList.remove('on'),2000);
}

// ── INIT ──────────────────────────────────────────────
render();
