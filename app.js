/* Event4Students app — multilingual */
const EVENTS=[...EVENTS_A,...EVENTS_B];
const ROADMAPS=ROADMAPS_I18N;
const CODES=LANGS.map(l=>l[0]);
const store={get(k,d){try{const v=localStorage.getItem('e4s_'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('e4s_'+k,JSON.stringify(v))}catch(e){}}};
function pickLang(){
  const u=new URLSearchParams(location.search).get('lang');if(CODES.includes(u))return u;
  const s=store.get('lang',null);if(CODES.includes(s))return s;
  for(const n of (navigator.languages||[navigator.language||'en'])){const c=(n||'').slice(0,2).toLowerCase();if(CODES.includes(c))return c}
  return 'en';
}
let L=pickLang();
const t=(k,v={})=>{let s=(I18N[L]&&I18N[L][k]!==undefined?I18N[L][k]:I18N.en[k])??k;for(const x in v)s=s.split('{'+x+'}').join(v[x]);return s};
const tx=o=>o?(o[L]||o.en||o.ko||''):'';
const FIELDS=Object.keys(ROADMAPS);
const PRE=['none','exam','coding','team','mentor','nomination','project','language','fee','passport','age','residency'];
const AGES=[11,12,13,14,15,16,17,18,19];
const MONTHS=[1,2,3,4,5,6,7,8,9,10,11,12];
const NOW=new Date(),CUR=NOW.getMonth()+1;
const PSEUDO={GLOBAL:'🌐',EU:'🇪🇺',LATAM:'🌎'};
const flag=c=>PSEUDO[c]||String.fromCodePoint(...[...c].map(ch=>127397+ch.charCodeAt(0)));
let dn=null;const cname=c=>{if(PSEUDO[c])return t(c);try{dn=dn&&dn._l===L?dn:Object.assign(new Intl.DisplayNames([L],{type:'region'}),{_l:L});return dn.of(c)}catch(e){return c}};
const mname=m=>{try{return new Intl.DateTimeFormat(L,{month:'short'}).format(new Date(2026,m-1,1))}catch(e){return m}};
let favs=store.get('favs',[]),checks=store.get('checks',{});
const FK=['country','age','field','mode','level','prereq','month'];
const S={q:"",preMode:"need",sort:"due",tab:"home",preset:"all",rmField:"all",soon:false};FK.forEach(k=>S[k]=new Set());
const COUNTRIES=()=>{const c={};EVENTS.forEach(e=>c[e.country]=(c[e.country]||0)+1);return Object.entries(c).sort((a,b)=>b[1]-a[1]||cname(a[0]).localeCompare(cname(b[0]),L))};
const OPTS={
 country:()=>COUNTRIES().map(([c])=>[c,flag(c)+' '+cname(c)]),
 age:()=>AGES.map(a=>[String(a),String(a)]),
 field:()=>FIELDS.map(f=>[f,t('fd_'+f)]),
 mode:()=>['online','offline','hybrid'].map(m=>[m,t(m)]),
 level:()=>[1,2,3,4].map(l=>[String(l),t('lv'+l)]),
 prereq:()=>PRE.map(p=>[p,t('pr_'+p)]),
 month:()=>MONTHS.map(m=>[String(m),mname(m)])
};
const FLABEL={country:'f_country',age:'f_age',field:'f_field',mode:'f_mode',level:'f_level',prereq:'f_prereq',month:'f_month'};
const ICON={math:'<path d="M4 6h16M4 12h10M4 18h7"/><path d="M17 15l4 4M21 15l-4 4"/>',science:'<path d="M9 3h6M10 3v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4A1.5 1.5 0 0 0 20 19l-6-10V3"/><path d="M7 14h10"/>',it:'<rect x="3" y="4" width="18" height="12"/><path d="M8 20h8M12 16v4M8 9l-2 1.5L8 12M16 9l2 1.5-2 1.5"/>',writing:'<path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="M13.5 6.5l4 4"/>',debate:'<path d="M4 5h12v8H9l-4 3v-3H4z"/><path d="M16 9h4v8h-1v3l-4-3h-4v-2"/>',business:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',service:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',camp:'<path d="M3 20L12 4l9 16H3z"/><path d="M12 20v-6"/>'};
const svg=k=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICON[k]}</svg>`;

/* ---------- logic ---------- */
function match(e,f,set){
  if(!set.size)return true;
  switch(f){
    case'country':return set.has(e.country);
    case'age':return [...set].some(a=>+a>=e.ages[0]&&+a<=e.ages[1]);
    case'field':return e.fields.some(x=>set.has(x));
    case'mode':return set.has(e.mode);
    case'level':return set.has(String(e.level));
    case'month':return e.applyMonths.some(m=>set.has(String(m)));
    case'prereq':return S.preMode==='ex'?!e.prereq.some(p=>set.has(p)):[...set].every(p=>e.prereq.includes(p));
  }
}
const until=e=>e.applyMonths.length?Math.min(...e.applyMonths.map(m=>(m-CUR+12)%12)):99;
const mAt=d=>(CUR+d-1)%12+1;
const hay=e=>[e.name.ko,e.name.en,e.host.ko,e.host.en,e.desc.ko,e.desc.en,e.city.ko,e.city.en,cname(e.country),e.country,...e.fields.map(f=>t('fd_'+f))].join(' ').toLowerCase();
function filtered(){
  const q=S.q.trim().toLowerCase();
  const l=EVENTS.filter(e=>{for(const f of FK)if(!match(e,f,S[f]))return false;if(S.soon&&until(e)>3)return false;if(q&&!hay(e).includes(q))return false;return true});
  const s=S.sort;
  l.sort((a,b)=>s==='due'?until(a)-until(b)||a.level-b.level:s==='lvA'?a.level-b.level:s==='lvD'?b.level-a.level:tx(a.name).localeCompare(tx(b.name),L));
  return l;
}
function dueInfo(e){
  if(!e.applyMonths.length)return[t('d_nat'),''];
  if(e.applyMonths.length===12)return[t('d_always'),'now'];
  const d=until(e);
  if(d===0)return[t('d_now'),'now'];
  if(d<=2)return[t('d_soon',{d,m:mname(mAt(d))}),'hot'];
  return[t('d_next',{m:mname(mAt(d))}),''];
}
const agesTxt=e=>t('ages',{a:e.ages[0],b:e.ages[1]});
const linkOf=e=>e.url||`https://www.google.com/search?q=${encodeURIComponent(e.name.en.replace(/\(.*?\)/g,''))}`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function card(e,extra=''){
  const[dl,dc]=dueInfo(e),intl=e.country!=='KR'||false;
  const sub=L==='ko'?e.name.en:(L==='en'?'':e.name.ko);
  return`<article class="card ${e.country==='GLOBAL'?'intl':''}" data-id="${e.id}" tabindex="0">
   <button class="star ${favs.includes(e.id)?'on':''}" data-star="${e.id}" aria-label="★">★</button>
   <div class="top"><span class="s">${flag(e.country)} ${cname(e.country)}</span><span class="l">· ${e.fields.map(f=>t('fd_'+f)).join(' · ')}</span></div>
   <h4>${tx(e.name)}</h4>${L==='ko'?`<div class="en">${e.name.en}</div>`:''}
   <div class="desc">${tx(e.desc)}</div>
   <div class="tags"><span class="lvb lv${e.level}">${t('lv'+e.level)}</span><span class="tg">${agesTxt(e)}</span><span class="tg">${t(e.mode)}</span></div>
   ${extra}
   <div class="due ${dc}"><span class="dl">${dl}</span><span class="go">${t('details')}</span></div>
  </article>`;
}

/* ---------- views ---------- */
function homeView(){
  const soon=EVENTS.filter(e=>e.applyMonths.length&&e.applyMonths.length<12&&until(e)<=2).sort((a,b)=>until(a)-until(b)||b.level-a.level);
  const feat=soon.filter(e=>e.level>=2).slice(0,5),list=soon.slice(0,6);
  const cs=COUNTRIES();
  const young=EVENTS.filter(e=>e.ages[0]<=14).length,teen=EVENTS.filter(e=>e.ages[1]>=15).length;
  const tiles=[["math","IMO · Kangaroo · AMC",""],["science","ISEF · IPhO · Jugend forscht",""],["it","IOI · USACO · picoCTF","red"],["writing","John Locke · NYT · Goi",""],["debate","WSDC · MUN · EYP",""],["business","Conrad · Technovation",""],["service","Rotary · AFS · Duke of Ed",""],["camp","YYGS · SSP · Space Camp","dark"]];
  const fb=t('fallback');
  return`<section class="hero">
   <div class="hero-l"><small>${t('h_small')}</small>
    <h1>${t('h1a')}<br><em>${t('h1b')}</em>${t('h1c')}</h1><p>${t('h_p')}</p>
    <div class="stats"><div><b>${EVENTS.length}</b>${t('st_events')}</div><div><b>${cs.length}</b>${t('st_countries')}</div><div><b>${FIELDS.length}</b>${t('st_fields')}</div></div></div>
   <div class="slider"><div class="lab"><h2><span>${t('feat')}</span> ${t('soon_t')}</h2>
     <div class="ctrl" id="sctrl">${feat.map((_,i)=>`<button class="dot ${i?'':'on'}" data-i="${i}" aria-label="${i+1}"></button>`).join('')}<button class="ic" id="sPlay" aria-label="pause">❚❚</button></div></div>
    ${feat.map((e,i)=>`<div class="slide" data-id="${e.id}" style="${i?'display:none':''}"><span class="tag">${dueInfo(e)[0]}</span><h3>${tx(e.name)}</h3><div class="en">${flag(e.country)} ${cname(e.country)} · ${tx(e.host)}</div><p>${tx(e.desc)}</p>
     <div class="meta"><span>${t('k_age')} <b>${agesTxt(e)}</b></span><span>${t('f_level')} <b>${t('lv'+e.level)}</b></span><span>${t(e.mode)}</span></div><span class="num">0${i+1}</span></div>`).join('')}
   </div>
   <div class="sched"><h2>${t('sched')} <a data-go="cal">${t('viewall')}</a></h2><div class="m">${t('sched_m',{a:mname(CUR),b:mname(mAt(2))})}</div>
    <ul>${list.map(e=>`<li data-id="${e.id}"><div class="t">${tx(e.name)}</div><div class="d"><span class="dd">${until(e)===0?'NOW':'+'+until(e)+'M'}</span>${flag(e.country)} ${e.applyMonths.filter(m=>(m-CUR+12)%12<=2).map(mname).join('·')} · ${agesTxt(e)}</div></li>`).join('')}</ul></div>
  </section>
  <section class="blk"><div class="inner">
   ${fb?`<div class="fallback">ℹ ${fb}</div>`:''}
   <div class="blk-h"><div><h2>${t('f_title')}</h2><p>${t('f_sub')}</p></div><a class="more" data-go="list">${t('all_ev')}</a></div>
   <div class="tiles">${tiles.map(([f,c,cls])=>`<div class="tile ${cls}" data-field="${f}"><span class="arrow">↗</span>${svg(f)}<h3>${t('fd_'+f)}</h3><span class="tc">${c} · ${t('n_ev',{n:EVENTS.filter(e=>e.fields.includes(f)).length})}</span></div>`).join('')}</div>
  </div></section>
  <section class="blk" style="padding-top:0"><div class="inner">
   <div class="blk-h"><div><h2>${t('c_title')}</h2><p>${t('c_sub')}</p></div></div>
   <div class="ccount">${cs.map(([c,n])=>`<button class="cc" data-country="${c}"><span class="flag">${flag(c)}</span>${cname(c)} <b>${n}</b></button>`).join('')}</div>
  </div></section>
  <section class="blk" style="padding-top:0"><div class="inner">
   <div class="blk-h"><div><h2>${t('a_title')}</h2><p>${t('a_sub')}</p></div></div>
   <div class="split">
    <div class="lvl" data-preset="young"><div class="big">11–14</div><div><h3>${t('a1')}</h3><p>${t('a1d')} · <span class="n">${t('n_ev',{n:young})}</span></p></div></div>
    <div class="lvl h" data-preset="teen"><div class="big">15–19</div><div><h3>${t('a2')}</h3><p>${t('a2d')} · <span class="n">${t('n_ev',{n:teen})}</span></p></div></div>
   </div></div></section>
  <section class="blk" style="padding-top:0"><div class="inner">
   <div class="blk-h"><div><h2>${t('b_title')}</h2><p>${t('b_sub')}</p></div><a class="more" data-preset="soon">${t('more')}</a></div>
   <div class="board">${EVENTS.filter(e=>e.applyMonths.length&&e.applyMonths.length<12&&until(e)<=3).sort((a,b)=>until(a)-until(b)).slice(0,10).map(e=>`
    <div class="row" data-id="${e.id}"><span class="cat ${e.country!=='KR'?'i':''}">${flag(e.country)} ${e.country.length===2?e.country:''}</span><span class="tt">${tx(e.name)}</span><span class="sm">${agesTxt(e)}</span><span class="sm">${dueInfo(e)[0]}</span></div>`).join('')}</div>
  </div></section>
  <section class="blk guide"><div class="inner"><div class="blk-h"><div><h2>${t('g_title')}</h2><p>${t('g_sub')}</p></div></div>
   <div class="steps">${[1,2,3,4].map(i=>`<div class="step"><h3>${t('g'+i)}</h3><p>${t('g'+i+'d')}</p></div>`).join('')}</div></div></section>`;
}
function head(sm,tk,dk,quick=true){
  return`<div class="pagehead"><div class="inner"><div class="crumb">${t('m_home')} › ${t(tk)}</div><small>${sm}</small><h1>${t(tk)}</h1><p>${t(dk)}</p>
  ${quick?`<div class="quick">${['all','young','teen','soon','free','online','global'].map(k=>`<button data-preset="${k}" class="${S.preset===k?'on':''}">${t('q_'+k)}</button>`).join('')}</div>`:''}</div></div>`;
}
function filtersHTML(){
  return`<aside class="filters" id="filters"><div class="fh">${t('fl')} <button id="reset">${t('reset')}</button></div>
  <div class="fg"><input class="fsearch" id="q" placeholder="${esc(t('kw'))}" value="${esc(S.q)}"></div>
  ${FK.map(f=>`<div class="fg"><h4>${t(FLABEL[f])}</h4>${f==='prereq'?`<div class="seg" id="preMode"><button data-m="need" class="${S.preMode==='need'?'on':''}">${t('need')}</button><button data-m="ex" class="${S.preMode==='ex'?'on':''}">${t('ex')}</button></div>`:''}
   <div class="chips" data-f="${f}">${OPTS[f]().map(([v,l])=>`<button class="chip ${f==='prereq'&&S.preMode==='ex'?'ex':''} ${S[f].has(v)?'on':''}" data-v="${v}">${l}<span class="c">${EVENTS.filter(e=>match(e,f,new Set([v]))).length}</span></button>`).join('')}</div></div>`).join('')}
  </aside>`;
}
function toolbar(n){return`<div class="toolbar"><div class="count">${t('total',{n:`<b>${n}</b>`})}</div><div style="display:flex;gap:8px"><button class="ftbtn" id="ftbtn">${t('filters')}</button>
  <select id="sort" aria-label="sort">${['due','lvA','lvD','name'].map(k=>`<option value="${k}">${t('s_'+k)}</option>`).join('')}</select></div></div>`}
const fbNote=()=>t('fallback')?`<div class="fallback">ℹ ${t('fallback')}</div>`:'';
function listView(){const l=filtered();return head("EXPLORE",'p_find','p_find_d')+`<div class="inner layout">${filtersHTML()}<div>${fbNote()}${toolbar(l.length)}${l.length?`<div class="grid">${l.map(e=>card(e)).join('')}</div>`:`<div class="empty">${t('empty')}</div>`}</div></div>`}
function calView(){const l=filtered(),ord=MONTHS.map((_,i)=>(CUR-1+i)%12+1);
  return head("CALENDAR",'p_cal','p_cal_d')+`<div class="inner layout">${filtersHTML()}<div>${toolbar(l.length)}
  <div class="legend"><span><i class="ca"></i>${t('lg_a')}</span><span><i class="ce"></i>${t('lg_e')}</span><span>${t('lg_h')}</span></div>
  <div class="cal"><table><thead><tr><th style="text-align:left">${t('ev_name')}</th>${ord.map(m=>`<th class="${m===CUR?'cur':''}">${mname(m)}</th>`).join('')}</tr></thead><tbody>
  ${l.map(e=>`<tr><td class="name" data-id="${e.id}">${favs.includes(e.id)?'★ ':''}${flag(e.country)} ${tx(e.name)}</td>${ord.map(m=>{const a=e.applyMonths.includes(m),v=e.eventMonths.includes(m);return`<td class="${a&&v?'cae':a?'ca':v?'ce':''}"></td>`}).join('')}</tr>`).join('')}
  </tbody></table></div></div></div>`}
function roadView(){const f=S.rmField;
  const tl=p=>['a','b','c','d'].map(x=>`<div><b>${t(p+x)}</b>${t(p+x+'d')}</div>`).join('');
  return head("ROADMAP",'p_road','p_road_d',false)+`<div class="inner" style="padding-top:34px;padding-bottom:70px">
   <div class="note">${t('rm_note')}</div>
   <div class="stage"><div class="sh"><h3>${t('rm1')}</h3><p>${t('rm1d')}</p></div><div class="tl">${tl('t1')}</div></div>
   <div class="stage h"><div class="sh"><h3>${t('rm2')}</h3><p>${t('rm2d')}</p></div><div class="tl">${tl('t2')}</div></div>
   <div class="blk-h" style="margin-top:44px"><div><h2>${t('rm_common')}</h2><p>${t('rm_sub')}</p></div>
   <select id="rmField"><option value="all">${t('allFields')}</option>${FIELDS.map(x=>`<option value="${x}" ${x===f?'selected':''}>${t('fd_'+x)}</option>`).join('')}</select></div>
   ${fbNote()}
   <div class="rm-grid">${FIELDS.filter(x=>f==='all'||x===f).map(x=>`<div class="rm"><h4>${t('fd_'+x)}<span>${t('rel',{n:EVENTS.filter(e=>e.fields.includes(x)).length})}</span></h4><ol>${(ROADMAPS[x][L]||ROADMAPS[x].en).map(s=>`<li>${s}</li>`).join('')}</ol><button data-field="${x}">${t('seeField')}</button></div>`).join('')}</div></div>`}
function favView(){const l=EVENTS.filter(e=>favs.includes(e.id));
  return head("MY LIST",'p_fav','p_fav_d',false)+`<div class="inner" style="padding-top:30px;padding-bottom:70px">${l.length?`${toolbar(l.length)}<div class="grid">${l.map(e=>{const c=checks[e.id]||[],n=c.filter(Boolean).length,p=Math.round(n/e.prep.length*100);
   return card(e,`<div style="font-size:12.5px;color:var(--sub)">${t('prog',{a:n,b:e.prep.length})} · ${p}%<div class="prog" style="margin:6px 0 0"><div style="width:${p}%"></div></div></div>`)}).join('')}</div>`:`<div class="empty">${t('fav_empty')}<br><br><button class="btn p" data-go="list">${t('go_find')}</button></div>`}</div>`}

/* ---------- chrome (menu, util, footer, lang) ---------- */
function chrome(){
  document.documentElement.lang=L;
  document.querySelectorAll('[data-i]').forEach(el=>el.textContent=t(el.dataset.i));
  document.getElementById('menu').innerHTML=['home','find','cal','road','fav'].map(k=>{const tab=k==='find'?'list':k;return`<button data-t="${tab}" class="${S.tab===tab?'on':''}">${t('m_'+k)}${k==='fav'&&favs.length?` (${favs.length})`:''}</button>`}).join('');
  document.getElementById('utilNav').innerHTML=['math','science','it','writing','service','camp'].map(f=>`<a data-field="${f}">${t('fd_'+f)}</a>`).join('')+`<a data-preset="global">${t('q_global')}</a>`;
  document.getElementById('today').textContent=`${t('updated')}`;
  document.getElementById('hq').placeholder=t('search');
  document.getElementById('langName').textContent=LANGS.find(l=>l[0]===L)[1];
  document.getElementById('langList').innerHTML=LANGS.map(([c,n,e])=>`<li><button data-lang="${c}" class="${c===L?'on':''}" role="menuitem" lang="${c}">${n}<small>${e}</small></button></li>`).join('');
  document.getElementById('foot').innerHTML=`<div class="links">${['home','list','cal','road'].map(k=>`<a data-go="${k}">${t('m_'+(k==='list'?'find':k))}</a>`).join('')}</div>
   <div class="flex"><div><p style="margin:0 0 6px">${t('foot1')}</p><p style="margin:0 0 6px">${t('foot2')}</p><p style="margin:0">${t('foot3')}</p></div><div class="flogo">Event<b>4</b>Students</div></div>`;
}
let slideTimer=null;
function render(top){
  clearInterval(slideTimer);chrome();
  document.getElementById('content').innerHTML={home:homeView,list:listView,cal:calView,road:roadView,fav:favView}[S.tab]();
  const so=document.getElementById('sort');if(so){so.value=S.sort;so.onchange=()=>{S.sort=so.value;render()}}
  const q=document.getElementById('q');if(q)q.oninput=()=>{S.q=q.value;clearTimeout(q._t);q._t=setTimeout(()=>{render();const n=document.getElementById('q');n.focus();n.setSelectionRange(n.value.length,n.value.length)},250)};
  const rf=document.getElementById('rmField');if(rf)rf.onchange=()=>{S.rmField=rf.value;render()};
  if(S.tab==='home')startSlider();
  if(top)window.scrollTo({top:0});
}
function startSlider(){
  const sl=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('#sctrl .dot')],pb=document.getElementById('sPlay');if(!sl.length)return;let i=0,play=true;
  const show=n=>{i=(n+sl.length)%sl.length;sl.forEach((s,k)=>s.style.display=k===i?'':'none');dots.forEach((d,k)=>d.classList.toggle('on',k===i))};
  const run=()=>{clearInterval(slideTimer);if(play)slideTimer=setInterval(()=>show(i+1),5000)};
  dots.forEach(d=>d.onclick=e=>{e.stopPropagation();show(+d.dataset.i);run()});
  pb.onclick=e=>{e.stopPropagation();play=!play;pb.textContent=play?'❚❚':'▶';run()};run();
}
function resetF(){FK.forEach(k=>S[k].clear());S.q='';S.soon=false;S.preset='all';S.preMode='need'}
function applyPreset(p){resetF();S.preset=p;
  if(p==='young')[11,12,13,14].forEach(a=>S.age.add(String(a)));
  if(p==='teen')[15,16,17,18,19].forEach(a=>S.age.add(String(a)));
  if(p==='soon')S.soon=true;
  if(p==='free'){S.preMode='ex';S.prereq.add('fee')}
  if(p==='online')S.mode.add('online');
  if(p==='global')['GLOBAL','EU','LATAM'].forEach(c=>S.country.add(c));
}
function go(tab){S.tab=tab;document.getElementById('menu').classList.remove('open');render(true)}
function setLang(c){L=c;store.set('lang',c);const u=new URL(location.href);u.searchParams.set('lang',c);history.replaceState(null,'',u);document.getElementById('lang').classList.remove('open');const y=scrollY;render();scrollTo(0,y)}

/* ---------- modal ---------- */
function openModal(id){
  const e=EVENTS.find(x=>x.id===id);if(!e)return;const c=checks[e.id]||[];
  const row=(k,v)=>`<dt>${t(k)}</dt><dd>${v}</dd>`;
  document.getElementById('modal').innerHTML=`
  <div class="mhead ${e.country==='KR'?'dom':''}"><button class="close" id="mclose" aria-label="close">✕</button>
   <small>${flag(e.country)} ${cname(e.country)} · ${e.fields.map(f=>t('fd_'+f)).join(' · ')} · ${t('lv'+e.level)}</small><h2>${tx(e.name)}</h2><div class="en">${L==='ko'?e.name.en:''}</div></div>
  <div class="mbody">${fbNote()}<p style="margin:0;font-size:15px">${tx(e.desc)}</p>
   <dl class="kv">${row('k_host',tx(e.host))}${row('k_age',agesTxt(e))}${row('k_loc',`${flag(e.country)} ${cname(e.country)} · ${tx(e.city)} · ${t(e.mode)}`)}${row('k_sched',tx(e.schedule))}
   ${row('k_apply',!e.applyMonths.length?t('nat'):e.applyMonths.length===12?t('anytime'):e.applyMonths.map(mname).join(', '))}${row('k_cost',tx(e.cost))}${row('k_pre',e.prereq.map(p=>t('pr_'+p)).join(' · '))}${row('k_next',tx(e.next))}</dl>
   <div class="sec"><h3>${t('prep')} <span id="pc" style="font-size:13px;color:var(--red)"></span></h3><div class="prog"><div id="pbar"></div></div>
    <ul class="prep">${e.prep.map((p,i)=>`<li class="${c[i]?'done':''}"><input type="checkbox" id="pp${i}" data-i="${i}" ${c[i]?'checked':''}><label class="w" for="pp${i}">${tx(p.when)}</label><label class="t" for="pp${i}">${tx(p.task)}</label></li>`).join('')}</ul></div>
   <div class="warn">${t('warn')}</div>
   <div class="acts"><a class="btn p" href="${linkOf(e)}" target="_blank" rel="noopener">${e.url?t('official'):t('searchAnn')}</a><button class="btn s" id="mfav">${favs.includes(e.id)?t('favDel'):t('favAdd')}</button></div></div>`;
  const upd=()=>{const n=(checks[e.id]||[]).filter(Boolean).length;document.getElementById('pc').textContent=`${n} / ${e.prep.length}`;document.getElementById('pbar').style.width=(n/e.prep.length*100)+'%'};upd();
  document.querySelectorAll('.prep input').forEach(cb=>cb.onchange=()=>{const a=checks[e.id]||[];a[+cb.dataset.i]=cb.checked;checks[e.id]=a;store.set('checks',checks);cb.closest('li').classList.toggle('done',cb.checked);upd()});
  document.getElementById('mfav').onclick=()=>{toggleFav(e.id);openModal(e.id)};
  document.getElementById('mclose').onclick=closeModal;
  document.getElementById('mbg').classList.add('open');document.body.style.overflow='hidden';
}
function closeModal(){document.getElementById('mbg').classList.remove('open');document.body.style.overflow='';const y=scrollY;render();scrollTo(0,y)}
function toggleFav(id){favs=favs.includes(id)?favs.filter(x=>x!==id):[...favs,id];store.set('favs',favs)}

/* ---------- events ---------- */
document.addEventListener('click',ev=>{
  const tg=ev.target,keep=()=>{const y=scrollY;render();scrollTo(0,y)};
  if(tg.closest('#langBtn')){const l=document.getElementById('lang');l.classList.toggle('open');document.getElementById('langBtn').setAttribute('aria-expanded',l.classList.contains('open'));return}
  const lb=tg.closest('[data-lang]');if(lb){setLang(lb.dataset.lang);return}
  if(!tg.closest('#lang'))document.getElementById('lang').classList.remove('open');
  const star=tg.closest('[data-star]');if(star){ev.stopPropagation();toggleFav(star.dataset.star);keep();return}
  const chip=tg.closest('.chips .chip');if(chip){const f=chip.parentElement.dataset.f,v=chip.dataset.v;S[f].has(v)?S[f].delete(v):S[f].add(v);S.preset='';keep();return}
  const pm=tg.closest('#preMode button');if(pm){S.preMode=pm.dataset.m;keep();return}
  if(tg.closest('#reset')){resetF();keep();return}
  if(tg.closest('#ftbtn')){document.getElementById('filters').classList.toggle('show');return}
  const pr=tg.closest('[data-preset]');if(pr){const was=S.tab;applyPreset(pr.dataset.preset);if(!['list','cal'].includes(S.tab))S.tab='list';was===S.tab?keep():render(true);return}
  const fd=tg.closest('[data-field]');if(fd){resetF();S.preset='';S.field.add(fd.dataset.field);go('list');return}
  const cc=tg.closest('[data-country]');if(cc){resetF();S.preset='';S.country.add(cc.dataset.country);go('list');return}
  const g=tg.closest('[data-go]');if(g){go(g.dataset.go);return}
  const mt=tg.closest('#menu button');if(mt){go(mt.dataset.t);return}
  if(tg.closest('#mtoggle')){document.getElementById('menu').classList.toggle('open');return}
  if(tg.id==='mbg'){closeModal();return}
  const c=tg.closest('[data-id]');if(c&&!tg.closest('#modal'))openModal(c.dataset.id);
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(document.getElementById('mbg').classList.contains('open'))closeModal();document.getElementById('lang').classList.remove('open')}if(e.key==='Enter'&&e.target.matches('.card'))openModal(e.target.dataset.id)});
document.getElementById('hsearch').onsubmit=e=>{e.preventDefault();resetF();S.q=document.getElementById('hq').value;go('list')};
const tt=document.getElementById('totop');window.addEventListener('scroll',()=>tt.style.display=scrollY>500?'block':'none');tt.onclick=()=>scrollTo({top:0,behavior:'smooth'});
render();
