/* ==========================================================
   extras3.js - "Our little world" section (with pictures)
   Put in the SAME folder as birthday.html and add this line
   after extras2.js and before playlist.js:
   <script src="extras3.js"></script>
   Put your pictures in:  images/world/
   (any missing picture simply shows its emoji instead)
   ========================================================== */
(function () {

/* ===============  EDIT YOUR CONTENT HERE  =============== */
var Z = {
  label: "Our little world",
  title: "The life we planned in our heads",
  intro: "Hamari ek wo duniya jisme mujhe khoo jaane ka mnn karta hai... ek aisi life jo sukoon bhari hai tumhare saath",

  // the big family portrait at the top
  hero: { img: "images/world/family.png", emoji: "👨‍👩‍👧", caption: "Our little family, just the way we dreamed it" },

  characters: [
    { img: "images/world/papa.jpg",  icon: "🧑", name: "aadi",   role: "Papa",                      note: "loves anvi and little anvi" },
    { img: "images/world/mama.jpg",  icon: "👩", name: "anvi",    role: "Mama",                      note: "jo sabka khayal rakhti hai" },
    { img: "images/world/anvi.png",  icon: "👧", name: "Little Anvi", role: "hamari laadlii", note: "ghar ki don" },
    { img: "images/world/joint.jpg", icon: "👨‍👩‍👧‍👦", name: "family", role: "our souls", note: "the hearts" }
  ],

  momentsTitle: "Moments we imagined",
  moments: [
    { img: "images/world/m1.png", emoji: "🌅", cap: "the morning Anvi woke everyone up" },
    { img: "images/world/m2.png", emoji: "🍲", cap: "hamari subah" },
    { img: "images/world/m3.png", emoji: "🎈", cap: "Anvi's birthday in our world" },
    { img: "images/world/m4.png", emoji: "🌙", cap: "a quiet night on the terrace" }
  ],

  houseTitle: "Walk through our home",
  rooms: [
    { img: "images/world/kitchen.png", icon: "🍳", name: "Kitchen",     text: "ab ye dekhoo ,aaj madam cook bani hai ,dekhte hai aaj kya banati hai ye madam" },
    { img: "images/world/living.png",  icon: "🛋️", name: "Living room", text: "haan ab ye yahan baithi hai apna saara taam-jhaam leke" },
    { img: "images/world/kidroom.png", icon: "🧸", name: "Anvi's room", text: "din bhar kabhi idhar kabhi udhar ,bss samaan failana hai in madam ko" },
    { img: "images/world/terrace.png", icon: "🌇", name: "Terrace",     text: "anvi ko upar se bulao ,dekho wahan dhoop main kya kar rahi hai ab ye ladki" }
  ],

  dayTitle: "A day in our world",
  day: [
    { img: "images/world/morning.png",   icon: "🌅", time: "Morning",   text: "tumhare saath ek aisi subha..." },
    { img: "images/world/afternoon.png", icon: "☀️", time: "Afternoon", text: "our busy time ." },
    { img: "images/world/evening.png",   icon: "🌇", time: "Evening",   text: "ek aisi shopping..." },
    { img: "images/world/night.jpg",     icon: "🌙", time: "Night",     text: "good night mere dono bubu.." }
  ],

  anviTitle: "sunoo,hamari anvii kya keh rahi hai",
  anviImg: "images/world/anvi.png",
  drawing: { img: "images/world/anvi-drawing.png", caption: "Anvi's drawing of our family" },
  anviSays: [
     "mamma dadda kahan haii",
     "mumma ,mai bor ho rahi hu ,chalo khelo mere saath",
     "mumma mujhe aalu ka paratha kahan hai ",
     "nhi ab nhi khana ,ab pasta khana hai",
     "yaaaayyyy,aaj hum sab ghummi ghummi karenge ",
     "bhoooooooo....,mummaa darrrrr gyi",
  ],

  closing: "having a intention to convert this imaginary world to our real life in upcoming years...."
};
/* ======================================================== */

var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

/* ---------------- CSS ---------------- */
var css = `
.zw{position:relative;margin:70px auto 20px;max-width:1040px;border-radius:34px;padding:70px 6vw 60px;overflow:hidden;
  font-family:'Playfair Display',Georgia,serif;color:#3b2430;background:linear-gradient(160deg,#efe6fb 0%,#fde7ee 55%,#ffe9d6 100%);box-shadow:0 24px 60px rgba(120,70,120,.18)}
html.night .zw{background:linear-gradient(160deg,#2a1f4d 0%,#3a2150 55%,#4a2a4a 100%);color:#f3e9ff}
.zw h2{font-weight:500;font-size:1.6rem;margin:14px 0 14px}
.zw h3.zh{font-weight:600;font-size:1.05rem;margin:56px 0 20px}
.zw .zl{font-size:.68rem;letter-spacing:.25em;text-transform:uppercase;font-weight:600;color:#a63d63}
html.night .zw .zl{color:#f0a6c5}
.zw .zi{font-size:.92rem;line-height:1.8;max-width:520px;opacity:.85}
.zs{position:absolute;color:#fff;pointer-events:none;animation:ztw 3s ease-in-out infinite}
@keyframes ztw{0%,100%{opacity:.15;transform:scale(.6)}50%{opacity:1;transform:scale(1.2)}}
.zr{opacity:0;transform:translateY(30px);transition:opacity .9s ease,transform .9s ease;position:relative}
.zr.zin{opacity:1;transform:none}

/* image box with emoji fallback */
.zimg{position:relative;background:center/cover no-repeat rgba(255,255,255,.65);display:grid;place-items:center;font-size:2.4rem;overflow:hidden}
.zimg.has span{display:none}
.zimg.has{cursor:zoom-in}

/* hero portrait */
.zhero{margin:38px auto 0;max-width:760px;text-align:center}
.zhero .zimg{height:clamp(220px,46vw,400px);border-radius:26px;border:8px solid #fff;box-shadow:0 22px 55px rgba(120,60,100,.3);font-size:5rem;transition:transform .6s}
.zhero:hover .zimg{transform:scale(1.015) rotate(-.4deg)}
.zhero p{margin-top:16px;font-size:1.25rem;font-family:'Brush Script MT','Segoe Script',cursive;color:#a63d63}
html.night .zhero p{color:#f0a6c5}

/* characters */
.zchars{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:18px;margin-top:44px}
.zc{background:rgba(255,255,255,.78);border-radius:22px;padding:26px 18px;text-align:center;box-shadow:0 10px 26px rgba(80,40,80,.12);transition:transform .35s,box-shadow .35s;color:#3b2430}
.zc:hover{transform:translateY(-8px);box-shadow:0 20px 40px rgba(80,40,80,.2)}
.zc .zimg{width:104px;height:104px;margin:0 auto 14px;border-radius:50%;border:4px solid #fff;box-shadow:0 8px 20px rgba(80,40,80,.2);transition:transform .5s}
.zc:hover .zimg{transform:scale(1.1) rotate(-4deg)}
.zc b{display:block;font-size:1rem}
.zc small{display:block;color:#a63d63;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;margin:6px 0 8px}
.zc p{font-size:.78rem;line-height:1.6;color:#6a5560}

/* moments strip */
.zstrip{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding:6px 4px 18px;scrollbar-width:thin}
.zm{flex:0 0 250px;height:330px;border-radius:22px;scroll-snap-align:start;box-shadow:0 14px 32px rgba(80,40,80,.22);font-size:3rem;transition:transform .4s}
.zm:hover{transform:translateY(-8px) rotate(-1deg)}
.zm::after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 55%,rgba(40,10,40,.78));pointer-events:none}
.zm p{position:absolute;left:16px;right:16px;bottom:16px;z-index:2;color:#fff;font-size:.85rem;line-height:1.55;text-align:left;text-shadow:0 2px 8px rgba(0,0,0,.5)}
.zmh{font-size:.72rem;opacity:.7;margin-top:2px}

/* rooms */
.ztabs{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:18px}
.ztab{font-family:inherit;border:0;cursor:pointer;padding:11px 18px;border-radius:30px;background:rgba(255,255,255,.75);color:#5c4852;font-size:.82rem;transition:transform .25s,background .25s}
.ztab:hover{transform:translateY(-3px)}
.ztab.on{background:#a63d63;color:#fff;box-shadow:0 8px 20px rgba(166,61,99,.35)}
.zroom{display:flex;align-items:stretch;gap:0;background:rgba(255,255,255,.8);border-radius:22px;overflow:hidden;min-height:210px;color:#3b2430;box-shadow:0 12px 30px rgba(80,40,80,.14)}
.zroom .zimg{flex:0 0 46%;font-size:4rem;transition:opacity .3s}
.zroom .zt{flex:1;padding:28px;display:flex;align-items:center;transition:opacity .3s}
.zroom p{font-size:.92rem;line-height:1.8}

/* day */
.zday{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px}
.zd{background:rgba(255,255,255,.8);border-radius:20px;overflow:hidden;transition:transform .35s;color:#3b2430;box-shadow:0 10px 26px rgba(80,40,80,.12)}
.zd:hover{transform:translateY(-6px) rotate(-1deg)}
.zd .zimg{height:130px;font-size:2.6rem}
.zd div.zb{padding:16px 18px 20px}
.zd b{font-size:.78rem;letter-spacing:.15em;text-transform:uppercase;color:#a63d63}
.zd p{font-size:.82rem;line-height:1.65;margin-top:8px;color:#6a5560}

/* anvi + drawing */
.zanvi{display:flex;align-items:center;gap:22px;flex-wrap:wrap}
.zav{flex:0 0 120px;height:120px;border-radius:50%;border:5px solid #fff;box-shadow:0 10px 26px rgba(80,40,80,.25);font-size:3.4rem;position:relative}
.zavw{position:relative;flex:0 0 120px;height:120px}
.zavw::after{content:"";position:absolute;inset:-10px;border-radius:50%;border:2px solid rgba(166,61,99,.45);animation:zring 2.2s ease-out infinite}
@keyframes zring{to{transform:scale(1.3);opacity:0}}
.zbub{position:relative;flex:1;min-width:220px;background:#fff;border-radius:20px 20px 20px 4px;padding:22px 24px;font-size:1rem;line-height:1.7;color:#3b2430;box-shadow:0 10px 26px rgba(80,40,80,.14);min-height:80px}
.zbub.pop{animation:zpop .5s}
@keyframes zpop{0%{transform:scale(.85);opacity:.3}60%{transform:scale(1.04)}100%{transform:none;opacity:1}}
.zdraw{position:relative;flex:0 0 150px;margin:26px 10px 0 auto;transform:rotate(4deg);transition:transform .5s;transform-origin:50% 0;color:#3b2430}
.zdraw:hover{transform:rotate(0) scale(1.06)}
.zdraw::before,.zdraw::after{content:"";position:absolute;top:-26px;width:1px;height:26px;background:#a68a7a}
.zdraw::before{left:28%;transform:rotate(-12deg)}.zdraw::after{right:28%;transform:rotate(12deg)}
.zdraw .zimg{height:150px;border:6px solid #fff;box-shadow:0 10px 24px rgba(0,0,0,.25);font-size:2.4rem}
.zdraw p{text-align:center;font-size:.9rem;margin-top:8px;font-family:'Brush Script MT','Segoe Script',cursive;color:#a63d63}
.zbtn{font-family:inherit;border:0;cursor:pointer;background:#a63d63;color:#fff;padding:12px 26px;border-radius:30px;font-size:.84rem;margin-top:22px;box-shadow:0 10px 26px rgba(166,61,99,.35);transition:transform .25s}
.zbtn:hover{transform:translateY(-4px)}
.zend{text-align:center;margin-top:56px;font-size:1.05rem;line-height:1.8;font-style:italic;max-width:520px;margin-left:auto;margin-right:auto}
.zend::before{content:"♥";display:block;color:#a63d63;font-style:normal;margin-bottom:10px;animation:zbeat 1.6s infinite}
@keyframes zbeat{50%{transform:scale(1.25)}}

/* picture viewer */
#zlb{position:fixed;inset:0;z-index:300;background:rgba(30,12,30,.92);display:none;align-items:center;justify-content:center;flex-direction:column;cursor:zoom-out}
#zlb.on{display:flex;animation:zpop .4s}
#zlb img{max-width:90vw;max-height:78vh;border-radius:14px;box-shadow:0 20px 60px #000}
#zlb p{color:#fff;margin-top:16px;font-size:1rem;font-family:'Brush Script MT','Segoe Script',cursive;font-size:1.3rem}

@media(max-width:700px){
  .zw{border-radius:24px;padding:50px 18px 44px;margin:50px 10px 20px}
  .zroom{flex-direction:column}.zroom .zimg{flex:0 0 190px}
  .zm{flex-basis:210px;height:290px}.zdraw{margin:30px auto 0}
}
`;
var stl = document.createElement('style'); stl.textContent = css; document.head.appendChild(stl);

/* ---------------- helpers ---------------- */
function ib(src, emoji, cls, cap) {   // image box (emoji shows until the picture loads)
  return '<div class="zimg ' + (cls || '') + '" data-src="' + (src || '') + '" data-cap="' + (cap || '') + '"><span>' + (emoji || '') + '</span></div>';
}
function setImg(el, src) {
  el.classList.remove('has'); el.style.backgroundImage = ''; el.dataset.src = src || '';
  if (!src) return;
  var im = new Image();
  im.onload = function () { el.style.backgroundImage = 'url("' + src + '")'; el.classList.add('has'); };
  im.src = src;
}

/* ---------------- HTML ---------------- */
var html =
  '<section class="zw" id="zworld">' +
  '<div class="zl zr">' + Z.label + '</div><h2 class="zr">' + Z.title + '</h2><p class="zi zr">' + Z.intro + '</p>' +
  '<div class="zhero zr">' + ib(Z.hero.img, Z.hero.emoji, '', Z.hero.caption) + '<p>' + Z.hero.caption + '</p></div>' +
  '<div class="zchars">' + Z.characters.map(function (c, i) {
    return '<div class="zc zr" style="transition-delay:' + i * .1 + 's">' + ib(c.img, c.icon, '', c.name + ' - ' + c.role) + '<b>' + c.name + '</b><small>' + c.role + '</small><p>' + c.note + '</p></div>';
  }).join('') + '</div>' +
  '<h3 class="zh zr">' + Z.momentsTitle + '</h3>' +
  '<div class="zstrip zr">' + Z.moments.map(function (m) {
    return '<div class="zm zimg" data-src="' + m.img + '" data-cap="' + m.cap + '"><span>' + m.emoji + '</span><p>' + m.cap + '</p></div>';
  }).join('') + '</div>' +
  '<h3 class="zh zr">' + Z.houseTitle + '</h3>' +
  '<div class="ztabs zr">' + Z.rooms.map(function (r, i) { return '<button class="ztab' + (i ? '' : ' on') + '" data-i="' + i + '">' + r.icon + ' ' + r.name + '</button>'; }).join('') + '</div>' +
  '<div class="zroom zr"><div class="zimg" id="zrimg"><span id="zrem"></span></div><div class="zt"><p id="ztxt"></p></div></div>' +
  '<h3 class="zh zr">' + Z.dayTitle + '</h3>' +
  '<div class="zday">' + Z.day.map(function (d, i) {
    return '<div class="zd zr" style="transition-delay:' + i * .1 + 's">' + ib(d.img, d.icon, '', d.time) + '<div class="zb"><b>' + d.time + '</b><p>' + d.text + '</p></div></div>';
  }).join('') + '</div>' +
  '<h3 class="zh zr">' + Z.anviTitle + '</h3>' +
  '<div class="zanvi zr"><div class="zavw">' + ib(Z.anviImg, '👧', 'zav', 'Little Anvi') + '</div><div class="zbub" id="zbub"></div>' +
  '<div class="zdraw">' + ib(Z.drawing.img, '🖍️', '', Z.drawing.caption) + '<p>' + Z.drawing.caption + '</p></div></div>' +
  '<div class="zr"><button class="zbtn" id="zsay">Hear from Anvi</button></div>' +
  '<p class="zend zr">' + Z.closing + '</p>' +
  '</section>';

var d = document.createElement('div'); d.innerHTML = html;
var sec = d.firstChild;
var w = document.querySelector('.xwishes'), anchor = w ? w.closest('section') : document.getElementById('foot');
if (anchor) anchor.parentNode.insertBefore(sec, anchor); else document.body.appendChild(sec);

/* load every picture (emoji stays if a file is missing) */
$$('.zimg[data-src]', sec).forEach(function (el) { if (el.id !== 'zrimg') setImg(el, el.dataset.src); });

/* sparkles */
for (var s = 0; s < 24; s++) {
  var st = document.createElement('span'); st.className = 'zs'; st.textContent = s % 3 ? '✦' : '♥';
  st.style.left = Math.random() * 100 + '%'; st.style.top = Math.random() * 100 + '%';
  st.style.fontSize = 8 + Math.random() * 12 + 'px'; st.style.animationDelay = Math.random() * 3 + 's';
  sec.insertBefore(st, sec.firstChild);
}

/* reveal on scroll */
var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('zin'); io.unobserve(e.target); } });
}, { threshold: .1 });
$$('.zr', sec).forEach(function (el) { io.observe(el); });

/* rooms */
var rimg = $('#zrimg'), rem = $('#zrem'), txt = $('#ztxt');
function room(i, instant) {
  $$('.ztab', sec).forEach(function (t, k) { t.classList.toggle('on', k === i); });
  function apply() { rem.textContent = Z.rooms[i].icon; setImg(rimg, Z.rooms[i].img); txt.textContent = Z.rooms[i].text; rimg.style.opacity = txt.style.opacity = 1; }
  if (instant) { apply(); return; }
  rimg.style.opacity = txt.style.opacity = 0; setTimeout(apply, 220);
}
$$('.ztab', sec).forEach(function (t) { t.onclick = function () { room(+t.dataset.i); }; });
room(0, true);

/* little Anvi speaks */
var bub = $('#zbub'), last = -1;
function say() {
  var n; do { n = Math.floor(Math.random() * Z.anviSays.length); } while (n === last && Z.anviSays.length > 1);
  last = n; bub.textContent = '“' + Z.anviSays[n] + '”';
  bub.classList.remove('pop'); void bub.offsetWidth; bub.classList.add('pop');
}
$('#zsay').onclick = say; say();

/* tap a picture to see it big */
var lb = document.createElement('div'); lb.id = 'zlb'; lb.innerHTML = '<img alt=""><p></p>';
document.body.appendChild(lb);
sec.addEventListener('click', function (e) {
  var el = e.target.closest('.zimg.has'); if (!el) return;
  $('img', lb).src = el.dataset.src; $('p', lb).textContent = el.dataset.cap || ''; lb.classList.add('on');
});
lb.onclick = function () { lb.classList.remove('on'); };
addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.classList.remove('on'); });

})();
