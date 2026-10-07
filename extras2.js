/* ==========================================================
   extras2.js - opening animation, age timer, favourite things,
   polaroid wall, voice message, gift box, balloon game, night sky
   Put in the SAME folder as birthday.html and add this line
   just before </body> (AFTER the extras.js line):
   <script src="extras2.js"></script>
   ========================================================== */
(function () {

/* ===============  EDIT YOUR CONTENT HERE  =============== */
var X = {
  // opening envelope
  opening: true,
  openLabel: "A surprise for",
  openTo: "a beautiful girl tanya",

  // age timer (her date of birth: YYYY-MM-DDTHH:MM:SS)
  dob: "2006-10-09T08:30:00",
  ageTitle: "Every second of her story",

  // favourite things (icon can be any emoji)
  favTitle: "Her favourite things",
  favs: [
    { icon: "🍰", label: "Favourite food",  value: "chole bhature" },
    { icon: "🎵", label: "Favourite song",  value: "matarani " },
    { icon: "🎬", label: "Favourite movie", value: "jai maa vaishno devi" },
    { icon: "🎨", label: "Favourite colour",value: "wine" },
    { icon: "📍", label: "Favourite place", value: "maa vaishno devi" },
    { icon: "🌸", label: "Favourite flower",value: "rose" }
  ],

  // polaroid wall (add as many as you like)
  polTitle: "Pinned-up memories",
  polaroids: [
    { src: "images/polaroid/p1.jpg", cap: "Best day ever" },
    { src: "images/polaroid/p2.jpg", cap: "Our trip" },
    { src: "images/polaroid/p3.jpg", cap: "That smile" },
    { src: "images/polaroid/p4.jpg", cap: "Festival fun" },
    { src: "images/polaroid/p5.jpg", cap: "Family time" },
    { src: "images/polaroid/p6.jpg", cap: "Just us" },
    { src: "images/polaroid/p7.jpg", cap: "Sweet moments" },
    { src: "images/polaroid/p8.jpg", cap: "Forever" }
  ],

  // voice message
  voiceTitle: "A voice message for you",
  voiceFrom: "From someone who loves you",
  voice: "audio/voice.m4a",

  // gift box
  giftTitle: "One last surprise",
  giftHint: "pyaar se open karo zara isko",
  giftHeading: "Happy Birthday!",
  giftMessage: "aisa moment recreate karogi mere saath??",
  giftImage: "images/gift.jpg",            // optional photo, e.g. "images/gift.jpg"

  // balloon game
  balloonTitle: "Pop a balloon, read my message",
  balloonWishes: [
    "happy birthday bubu", "mera gulugulu", "mera doremon",
    "meri cutiepie", "meri sona ", "meri anvi",
    "i love you", "again i love you", "ummmmaaaaahhhhh",
    "i love you sooooo muchh..."
  ]
};
/* ======================================================== */

var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
var bgm = document.getElementById('bgm');

/* ---------------- CSS ---------------- */
var css = `
:root{--ycard:#fff}
html.night{--bg:#120d24;--ink:#f3e9ff;--muted:#b9aad6;--ycard:#2a1f45}
html.night .xstat,html.night .xwish{background:#2a1f45!important;color:#f3e9ff}
html.night .xwish p,html.night .xstat span{color:#c9bde0!important}
html.night .line{background:#3d3160}
html.night .xletter h3,html.night .xletter p{color:#3b2430}
body{transition:background .8s,color .8s}
.ys{max-width:1000px;margin:0 auto;padding:70px 8vw 30px;font-family:'Playfair Display',Georgia,serif;color:var(--ink,#3b2430)}
.ys .yl{font-size:.68rem;letter-spacing:.25em;text-transform:uppercase;font-weight:600;color:var(--rose,#a63d63)}
.ys h2{font-weight:500;font-size:1.5rem;margin:14px 0 28px}
.yr{opacity:0;transform:translateY(34px);transition:opacity .9s ease,transform .9s ease}
.yr.yin{opacity:1;transform:none}
.ycenter{text-align:center}

/* opening */
#yopen{position:fixed;inset:0;z-index:1000;background:radial-gradient(circle at 50% 40%,#7a2f58,#2d1230);display:flex;flex-direction:column;align-items:center;justify-content:center;
  color:#fff;font-family:'Playfair Display',Georgia,serif;cursor:pointer;transition:opacity 1s .2s,visibility 1s .2s}
#yopen.gone{opacity:0;visibility:hidden}
.yenv{position:relative;width:min(300px,78vw);height:min(200px,52vw);background:#e8a0b4;border-radius:8px;box-shadow:0 30px 60px rgba(0,0,0,.45);animation:yfl 3s ease-in-out infinite}
#yopen.opened .yenv{animation:none}
@keyframes yfl{50%{transform:translateY(-12px)}}
.yfront{position:absolute;inset:0;background:#f4bccb;clip-path:polygon(0 100%,0 0,50% 55%,100% 0,100% 100%);z-index:3;border-radius:8px}
.yflap{position:absolute;top:0;left:0;right:0;height:58%;background:#d9739a;clip-path:polygon(0 0,100% 0,50% 100%);transform-origin:top;transition:transform .8s;z-index:4}
#yopen.opened .yflap{transform:rotateX(180deg);z-index:1}
.yseal{position:absolute;left:50%;top:44%;margin:-18px 0 0 -18px;width:36px;height:36px;border-radius:50%;background:#a63d63;color:#fff;display:grid;place-items:center;z-index:5;
  animation:ybeat 1.4s infinite;transition:opacity .3s}
@keyframes ybeat{50%{transform:scale(1.18)}}
#yopen.opened .yseal{opacity:0}
.ycard2{position:absolute;left:8%;right:8%;top:8%;bottom:8%;background:#fffdf8;border-radius:6px;z-index:2;color:#3b2430;display:flex;flex-direction:column;align-items:center;justify-content:center;
  transition:transform 1s .5s;text-align:center;padding:6px}
.ycard2 small{font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:#a63d63}
.ycard2 b{font-size:1.2rem;margin-top:6px}
#yopen.opened .ycard2{transform:translateY(-68%)}
#yopen p{margin-top:46px;font-size:.85rem;letter-spacing:.25em;text-transform:uppercase;animation:yblink 1.6s infinite}
#yopen.opened p{opacity:0;animation:none}
@keyframes yblink{50%{opacity:.35}}

/* age timer */
.yage{display:grid;grid-template-columns:repeat(6,1fr);gap:12px}
.yage div{background:linear-gradient(135deg,#a63d63,#d9739a);color:#fff;border-radius:16px;padding:20px 6px;text-align:center;box-shadow:0 10px 26px rgba(166,61,99,.3);transition:transform .3s}
.yage div:hover{transform:translateY(-6px)}
.yage b{display:block;font-size:1.7rem;font-variant-numeric:tabular-nums}
.yage span{font-size:.62rem;letter-spacing:.15em;text-transform:uppercase;opacity:.85}
.ynext{margin-top:22px;text-align:center;font-size:.95rem;color:var(--muted,#7a6670)}

/* favourites */
.yfav{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:16px}
.yfc{background:var(--ycard);border-radius:20px;padding:26px 14px;text-align:center;box-shadow:0 10px 28px rgba(80,40,60,.12);transition:transform .35s,box-shadow .35s}
.yfc:hover{transform:translateY(-8px) scale(1.03);box-shadow:0 20px 40px rgba(80,40,60,.2)}
.yfc i{font-style:normal;font-size:2.1rem;display:block;margin-bottom:10px;transition:transform .4s}
.yfc:hover i{transform:scale(1.3) rotate(-10deg)}
.yfc small{display:block;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--rose,#a63d63)}
.yfc b{display:block;font-weight:600;font-size:.95rem;margin-top:6px}

/* polaroids */
.ywall{display:flex;flex-wrap:wrap;justify-content:center;gap:34px 24px;padding:14px 0}
.ypol{position:relative;width:190px;background:#fff;padding:12px 12px 14px;box-shadow:0 10px 26px rgba(0,0,0,.22);transform:rotate(var(--r));transition:transform .4s,box-shadow .4s;cursor:pointer;color:#3b2430}
.ypol:hover,.ypol.on{transform:rotate(0) scale(1.14);z-index:5;box-shadow:0 22px 44px rgba(0,0,0,.35)}
.ypol::before{content:"";position:absolute;top:-11px;left:50%;width:70px;height:22px;margin-left:-35px;background:rgba(240,200,120,.65);transform:rotate(-3deg)}
.ypol .ph{height:170px;background:linear-gradient(135deg,#e8a0b4,#a63d63) center/cover}
.ypol p{text-align:center;margin-top:10px;font-size:1.05rem;font-family:'Brush Script MT','Segoe Script',cursive}

/* voice */
.yvoice{display:flex;align-items:center;gap:16px;background:var(--ycard);border-radius:60px;padding:14px 22px 14px 14px;box-shadow:0 12px 32px rgba(80,40,60,.15);max-width:580px;margin:auto}
.yvb{flex:0 0 52px;height:52px;border-radius:50%;border:0;background:var(--rose,#a63d63);color:#fff;cursor:pointer;font-size:1rem;transition:transform .25s}
.yvb:hover{transform:scale(1.1)}
.ywave{flex:1;display:flex;align-items:center;gap:3px;height:46px;cursor:pointer}
.ywave i{flex:1;background:#e8c4d0;border-radius:2px;height:var(--h);transition:background .2s}
.ywave i.p{background:var(--rose,#a63d63)}
.yvoice.play .ywave i{animation:ydance .8s ease-in-out infinite alternate}
@keyframes ydance{to{transform:scaleY(.5)}}
.ytime{font-size:.75rem;color:var(--muted,#7a6670);min-width:44px;text-align:right}
.yfrom{text-align:center;margin-top:16px;font-size:.85rem;color:var(--muted,#7a6670)}

/* gift */
.ybox{position:relative;width:150px;height:150px;margin:20px auto 6px;cursor:pointer;animation:ywob 2.4s infinite}
.ybox.open{animation:none}
@keyframes ywob{0%,60%,100%{transform:rotate(0)}10%{transform:rotate(-7deg)}20%{transform:rotate(7deg)}30%{transform:rotate(-5deg)}40%{transform:rotate(5deg)}}
.ybase{position:absolute;bottom:0;left:10px;right:10px;height:100px;background:#d9739a;border-radius:6px}
.ybase::before,.ylid::before{content:"";position:absolute;left:50%;width:22px;margin-left:-11px;top:0;bottom:0;background:#ffd36e}
.ylid{position:absolute;top:20px;left:0;right:0;height:44px;background:#e8849f;border-radius:6px;z-index:2;transition:transform .9s cubic-bezier(.3,1.5,.5,1),opacity .9s}
.ylid::after{content:"🎀";position:absolute;left:50%;top:-28px;margin-left:-20px;font-size:38px}
.ybox.open .ylid{transform:translateY(-120px) rotate(-20deg);opacity:0}
.ygc{max-width:440px;margin:18px auto 0;background:var(--ycard);border-radius:20px;padding:0 26px;box-shadow:0 14px 36px rgba(80,40,60,.18);opacity:0;transform:scale(.9) translateY(20px);
  max-height:0;overflow:hidden;transition:all .9s}
.ygc.on{opacity:1;transform:none;max-height:700px;padding:26px}
.ygc img{max-width:100%;border-radius:12px;margin-bottom:12px}
.ygc h3{font-weight:600;margin-bottom:8px;color:var(--rose,#a63d63)}
.ygc p{font-size:.9rem;line-height:1.7}

/* balloons */
.yballoons{position:relative;height:400px;border-radius:24px;overflow:hidden;background:linear-gradient(#fde7ee,#fff6e8);box-shadow:inset 0 0 40px rgba(166,61,99,.1)}
.yb{position:absolute;width:62px;height:78px;border-radius:50% 50% 50% 50%/58% 58% 42% 42%;cursor:pointer;animation:yfloat var(--d) ease-in-out infinite alternate;box-shadow:inset -8px -8px 14px rgba(0,0,0,.12)}
.yb::after{content:"";position:absolute;left:50%;top:100%;width:1px;height:60px;background:rgba(0,0,0,.25)}
.yb::before{content:"";position:absolute;left:14px;top:12px;width:12px;height:20px;border-radius:50%;background:rgba(255,255,255,.5);transform:rotate(25deg)}
.yb:hover{filter:brightness(1.12)}
@keyframes yfloat{from{transform:translateY(0) rotate(-4deg)}to{transform:translateY(-70px) rotate(4deg)}}
.ypop{position:absolute;width:9px;height:9px;border-radius:50%;pointer-events:none;animation:yburst .7s forwards}
@keyframes yburst{to{transform:translate(var(--x),var(--y)) scale(.3);opacity:0}}
.ybmsg{text-align:center;min-height:3.2em;margin-top:18px;font-size:1.05rem;transition:opacity .4s}
.ybcnt{text-align:center;font-size:.78rem;color:var(--muted,#7a6670)}
.ybbtn{font-family:inherit;border:0;cursor:pointer;background:var(--rose,#a63d63);color:#fff;padding:11px 24px;border-radius:30px;font-size:.82rem;margin-top:10px}

/* night */
#ynight{position:fixed;top:16px;right:16px;z-index:90;width:46px;height:46px;border-radius:50%;border:0;cursor:pointer;font-size:1.25rem;background:rgba(255,255,255,.88);
  box-shadow:0 8px 22px rgba(0,0,0,.2);transition:transform .3s}
#ynight:hover{transform:rotate(20deg) scale(1.1)}
#ystars{position:fixed;inset:0;z-index:-1;pointer-events:none;opacity:0;transition:opacity 1.2s}
html.night #ystars{opacity:1}

@media(max-width:700px){.yage{grid-template-columns:repeat(3,1fr)}.ypol{width:150px}.ypol .ph{height:130px}.yvoice{padding-right:14px}}
`;
var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

/* ---------------- helpers ---------------- */
function sec(label, title, inner, cls) {
  return '<section class="ys ' + (cls || '') + '"><div class="yl yr">' + label + '</div><h2 class="yr">' + title + '</h2>' + inner + '</section>';
}
function put(html, before) {
  var d = document.createElement('div'); d.innerHTML = html;
  while (d.firstChild) { before ? before.parentNode.insertBefore(d.firstChild, before) : document.body.appendChild(d.firstChild); }
}
function pad(n) { return n < 10 ? '0' + n : n; }
var foot = document.getElementById('foot');

/* ---------------- build sections ---------------- */
// age timer + favourites go before the chapters
var ageHTML = sec('Time flies', X.ageTitle,
  '<div class="yage yr"><div><b id="ay">0</b><span>Years</span></div><div><b id="am">0</b><span>Months</span></div><div><b id="ad">0</b><span>Days</span></div>' +
  '<div><b id="ah">0</b><span>Hours</span></div><div><b id="ai">0</b><span>Minutes</span></div><div><b id="as">0</b><span>Seconds</span></div></div>' +
  '<div class="ynext yr" id="anext"></div>');
var favHTML = sec('Little details', X.favTitle, '<div class="yfav">' + X.favs.map(function (f, i) {
  return '<div class="yfc yr" style="transition-delay:' + (i * .08) + 's"><i>' + f.icon + '</i><small>' + f.label + '</small><b>' + f.value + '</b></div>';
}).join('') + '</div>');
put(ageHTML + favHTML, document.getElementById('timeline'));

// polaroid wall before the slideshow
var polHTML = sec('Memory wall', X.polTitle, '<div class="ywall">' + X.polaroids.map(function (p, i) {
  var r = ((i * 37) % 13 - 6);
  return '<div class="ypol yr" style="--r:' + r + 'deg;transition-delay:' + (i * .07) + 's"><div class="ph" style="background-image:url(\'' + p.src + '\')"></div><p>' + p.cap + '</p></div>';
}).join('') + '</div>');
put(polHTML, document.getElementById('gallery'));

// voice, gift, balloons before the footer
var bars = ''; for (var b = 0; b < 40; b++) { bars += '<i style="--h:' + (20 + Math.round(Math.abs(Math.sin(b * 1.3)) * 70)) + '%;animation-delay:' + (b % 8) * .1 + 's"></i>'; }
var voiceHTML = sec('Listen closely', X.voiceTitle,
  '<div class="yvoice yr" id="yvoice"><button class="yvb" id="yvb" aria-label="Play voice message">▶</button><div class="ywave" id="ywave">' + bars + '</div><span class="ytime" id="ytime">0:00</span></div>' +
  '<div class="yfrom yr">' + X.voiceFrom + '</div>');
var giftHTML = sec(X.giftHint, X.giftTitle,
  '<div class="yr"><div class="ybox" id="ybox"><div class="ylid"></div><div class="ybase"></div></div>' +
  '<div class="ygc" id="ygc">' + (X.giftImage ? '<img src="' + X.giftImage + '" alt="">' : '') + '<h3>' + X.giftHeading + '</h3><p>' + X.giftMessage + '</p></div></div>', 'ycenter');
var ballHTML = sec('Just for fun', X.balloonTitle,
  '<div class="yballoons yr" id="yballoons"></div><div class="ybmsg" id="ybmsg">Tap a balloon!</div><div class="ybcnt" id="ybcnt"></div><div class="ycenter"><button class="ybbtn" id="ybagain" style="display:none">Play again</button></div>');
put(voiceHTML + giftHTML + ballHTML, foot);

/* ---------------- scroll reveal ---------------- */
var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('yin'); io.unobserve(e.target); } });
}, { threshold: .12 });
$$('.yr').forEach(function (el) { io.observe(el); });

/* ---------------- age timer ---------------- */
var dob = new Date(X.dob);
function diff(f, t) {
  var y = t.getFullYear() - f.getFullYear(), m = t.getMonth() - f.getMonth(), d = t.getDate() - f.getDate(),
      h = t.getHours() - f.getHours(), mi = t.getMinutes() - f.getMinutes(), s = t.getSeconds() - f.getSeconds();
  if (s < 0) { s += 60; mi--; } if (mi < 0) { mi += 60; h--; } if (h < 0) { h += 24; d--; }
  if (d < 0) { d += new Date(t.getFullYear(), t.getMonth(), 0).getDate(); m--; } if (m < 0) { m += 12; y--; }
  return { y: y, m: m, d: d, h: h, i: mi, s: s };
}
function ageTick() {
  if (isNaN(dob)) return;
  var n = new Date(), r = diff(dob, n);
  ['y', 'm', 'd', 'h', 'i', 's'].forEach(function (k) { $('#a' + k).textContent = pad(r[k]); });
  var today = new Date(n.getFullYear(), n.getMonth(), n.getDate()), nb = new Date(n.getFullYear(), dob.getMonth(), dob.getDate());
  if (nb.getTime() === today.getTime()) { $('#anext').textContent = '🎉 Today is her birthday! 🎉'; return; }
  if (nb < today) nb.setFullYear(n.getFullYear() + 1);
  $('#anext').textContent = '🎂 ' + Math.ceil((nb - n) / 864e5) + ' days until her next birthday';
}
ageTick(); setInterval(ageTick, 1000);

/* ---------------- polaroid tap (mobile) ---------------- */
$$('.ypol').forEach(function (p) { p.addEventListener('click', function () {
  var was = p.classList.contains('on'); $$('.ypol.on').forEach(function (o) { o.classList.remove('on'); }); if (!was) p.classList.add('on');
}); });

/* ---------------- voice player ---------------- */
var au = new Audio(X.voice), vbox = $('#yvoice'), vbtn = $('#yvb'), wave = $('#ywave'), vbars = $$('#ywave i'), vtime = $('#ytime');
au.preload = 'metadata';
function fmt(t) { t = Math.floor(t || 0); return Math.floor(t / 60) + ':' + pad(t % 60); }
function duck(on) { if (bgm) bgm.volume = on ? .12 : .6; }
vbtn.onclick = function () { if (au.paused) { au.play().catch(function () { vtime.textContent = 'No file'; }); } else { au.pause(); } };
au.onplay = function () { vbox.classList.add('play'); vbtn.textContent = '❚❚'; duck(true); };
au.onpause = function () { vbox.classList.remove('play'); vbtn.textContent = '▶'; duck(false); };
au.onended = function () { vbars.forEach(function (x) { x.classList.remove('p'); }); };
au.onloadedmetadata = function () { vtime.textContent = fmt(au.duration); };
au.ontimeupdate = function () {
  var p = au.duration ? au.currentTime / au.duration : 0;
  vbars.forEach(function (x, i) { x.classList.toggle('p', i / vbars.length < p); });
  vtime.textContent = fmt(au.currentTime);
};
au.onerror = function () { vtime.textContent = 'Add audio'; };
wave.onclick = function (e) { if (!au.duration) return; var r = wave.getBoundingClientRect(); au.currentTime = ((e.clientX - r.left) / r.width) * au.duration; };

/* ---------------- gift box ---------------- */
var gbox = $('#ybox'), gcard = $('#ygc');
gbox.onclick = function () {
  var open = gbox.classList.toggle('open');
  gcard.classList.toggle('on', open);
  if (open && typeof confetti === 'function') confetti();
};

/* ---------------- balloon game ---------------- */
var area = $('#yballoons'), bmsg = $('#ybmsg'), bcnt = $('#ybcnt'), again = $('#ybagain'), popped = 0;
var colors = ['#e8749a', '#f4a259', '#7cc6b8', '#9b7bd4', '#f2d05c', '#6fa8dc', '#e86a5c', '#8fd19e', '#d96fc0', '#f08cb0'];
function makeBalloons() {
  area.innerHTML = ''; popped = 0; again.style.display = 'none';
  X.balloonWishes.forEach(function (w, i) {
    var el = document.createElement('div'); el.className = 'yb';
    var n = X.balloonWishes.length;
    el.style.left = (4 + i * (84 / n) + Math.random() * 4) + '%';
    el.style.bottom = (50 + Math.random() * 190) + 'px';
    el.style.background = colors[i % colors.length];
    el.style.setProperty('--d', (3 + Math.random() * 3) + 's');
    el.style.animationDelay = (-Math.random() * 3) + 's';
    el.onclick = function () { pop(el, w); };
    area.appendChild(el);
  });
  bmsg.textContent = 'Tap a balloon!'; bcnt.textContent = '0 / ' + X.balloonWishes.length + ' popped';
}
function pop(el, wish) {
  var a = area.getBoundingClientRect(), r = el.getBoundingClientRect();
  var cx = r.left - a.left + r.width / 2, cy = r.top - a.top + r.height / 2, col = el.style.background;
  for (var k = 0; k < 10; k++) {
    var p = document.createElement('span'), ang = k / 10 * Math.PI * 2;
    p.className = 'ypop'; p.style.left = cx + 'px'; p.style.top = cy + 'px'; p.style.background = col;
    p.style.setProperty('--x', Math.cos(ang) * 55 + 'px'); p.style.setProperty('--y', Math.sin(ang) * 55 + 'px');
    area.appendChild(p); setTimeout(function (q) { q.remove(); }.bind(null, p), 700);
  }
  el.remove(); popped++;
  bmsg.textContent = wish; bcnt.textContent = popped + ' / ' + X.balloonWishes.length + ' popped';
  if (popped === X.balloonWishes.length) {
    bmsg.textContent = wish + '  ✨ All wishes read! ✨'; again.style.display = 'inline-block';
    if (typeof confetti === 'function') confetti();
  }
}
again.onclick = makeBalloons; makeBalloons();

/* ---------------- night sky mode ---------------- */
var nb = document.createElement('button'); nb.id = 'ynight'; nb.setAttribute('aria-label', 'Toggle night mode'); nb.textContent = '🌙';
var cv = document.createElement('canvas'); cv.id = 'ystars';
document.body.appendChild(cv); document.body.appendChild(nb);
var cx = cv.getContext('2d'), stars = [], shoot = null, night = false;
function sizeStars() {
  cv.width = innerWidth; cv.height = innerHeight;
  stars = []; for (var i = 0; i < 140; i++) stars.push({ x: Math.random() * cv.width, y: Math.random() * cv.height, r: Math.random() * 1.4 + .3, p: Math.random() * 6, s: .01 + Math.random() * .03 });
}
function drawStars() {
  if (!night) return;
  cx.clearRect(0, 0, cv.width, cv.height); cx.fillStyle = '#fff';
  stars.forEach(function (s) { s.p += s.s; cx.globalAlpha = .35 + .65 * Math.abs(Math.sin(s.p)); cx.beginPath(); cx.arc(s.x, s.y, s.r, 0, 6.3); cx.fill(); });
  if (!shoot && Math.random() < .004) shoot = { x: Math.random() * cv.width * .7, y: Math.random() * cv.height * .4, l: 0 };
  if (shoot) {
    shoot.x += 9; shoot.y += 4; shoot.l++;
    cx.globalAlpha = Math.max(0, 1 - shoot.l / 40); cx.strokeStyle = '#fff'; cx.lineWidth = 2;
    cx.beginPath(); cx.moveTo(shoot.x, shoot.y); cx.lineTo(shoot.x - 70, shoot.y - 31); cx.stroke();
    if (shoot.l > 40) shoot = null;
  }
  requestAnimationFrame(drawStars);
}
function setNight(on) {
  night = on; document.documentElement.classList.toggle('night', on); nb.textContent = on ? '☀️' : '🌙';
  if (on) { sizeStars(); drawStars(); }
  try { localStorage.setItem('bdayNight', on ? '1' : '0'); } catch (e) {}
}
nb.onclick = function () { setNight(!night); };
addEventListener('resize', function () { if (night) sizeStars(); });
try { if (localStorage.getItem('bdayNight') === '1') setNight(true); } catch (e) {}

/* ---------------- opening envelope ---------------- */
if (X.opening) {
  var ov = document.createElement('div'); ov.id = 'yopen';
  ov.innerHTML = '<div class="yenv"><div class="yflap"></div><div class="yseal">♥</div><div class="ycard2"><small>' + X.openLabel + '</small><b>' + X.openTo + '</b></div><div class="yfront"></div></div><p>Tap to open</p>';
  document.body.appendChild(ov); document.body.style.overflow = 'hidden';
  ov.onclick = function () {
    if (ov.classList.contains('opened')) return;
    ov.classList.add('opened');
    if (typeof playMusic === 'function') playMusic();
    setTimeout(function () { if (typeof confetti === 'function') confetti(); }, 900);
    setTimeout(function () { ov.classList.add('gone'); document.body.style.overflow = ''; }, 2400);
    setTimeout(function () { ov.remove(); }, 3700);
  };
}

})();
