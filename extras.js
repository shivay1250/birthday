/* ==========================================================
   extras.js  -  adds more sections to birthday.html
   Put this file in the SAME folder as birthday.html
   and add this line just before </body> :
   <script src="extras.js"></script>
   ========================================================== */
(function () {

/* ===============  EDIT YOUR CONTENT HERE  =============== */
var EXTRAS = {
  stats: [
    { n: 20,   suffix: "",  label: "Years of smiles" },
    { n: 100000,   suffix: "",  label: "Photos treasured" },
    { n: 1000, suffix: "+", label: "Little moments" },
    { n: 5,    suffix: "",  label: "Chapters so far" }
  ],

  letterTitle: "A little note for you",
  letter: "Happy birthday meri jaan ,matarani kare aage ke aane wale har saal tumhara pichli baar se best saal ho ,bss dil se yahi khawahis hai ki aage ke aane wale har birthday per tumko tumhara sabse special surprise gift mai du ,i want you to be with me in your every moment of my life ,bss jindagi bhar khush rehna meri jann...",
  signature: "with the purest love from your AADI",

  wishesTitle: "Wishes from the people who love you",
  wishes: [
    { from: "Mom",     text: "kaa re tanuwa ,happy birthday " },
    { from: "Dad",     text: "haapy birthday beta ,bhale mai tumhare paas nhi hu lekin har pal tumhare saath hu,khush rehna" },
    { from: "Friend",  text: "happy birthday tanya " },
    { from: "didi",    text: "happy birthday motii" },
    { from: "jiju",    text: "tannuuuu.. happy birthday" },
    { from:"your aadi",text: "happy birthday my love " }
  ],

  wishTitle: "Make a wish",
  wishHint: "Close your eyes, think of a wish, then blow the candles",
  wishMessage: "May every wish you made today come true. Happy Birthday!"
};
/* ======================================================== */

var $ = function (s, r) { return (r || document).querySelector(s); };

/* ---------------- CSS ---------------- */
var css = `
.xr{opacity:0;transform:translateY(34px);transition:opacity .9s ease,transform .9s ease}
.xr.xin{opacity:1;transform:none}
.xs{max-width:1000px;margin:0 auto;padding:70px 8vw 30px;font-family:'Playfair Display',Georgia,serif;color:var(--ink,#3b2430)}
.xs .xl{font-size:.68rem;letter-spacing:.25em;text-transform:uppercase;font-weight:600;color:var(--rose,#a63d63)}
.xs h2{font-weight:500;font-size:1.5rem;margin:14px 0 28px}

/* stats */
.xstats{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.xstat{background:#fff;border-radius:20px;padding:26px 14px;text-align:center;box-shadow:0 10px 28px rgba(80,40,60,.1);transition:transform .35s,box-shadow .35s}
.xstat:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(80,40,60,.18)}
.xstat b{display:block;font-size:2rem;font-weight:600;color:var(--rose,#a63d63)}
.xstat span{font-size:.75rem;color:#7a6670;letter-spacing:.05em}

/* letter */
.xletter{position:relative;background:#fffdf8;border-radius:6px 22px 22px 22px;padding:46px 40px 40px;box-shadow:0 18px 45px rgba(80,40,60,.15);
  background-image:repeating-linear-gradient(transparent 0 33px,#f1e4dc 33px 34px)}
.xletter::before{content:"\\2665";position:absolute;top:-16px;left:30px;width:36px;height:36px;border-radius:50%;background:var(--rose,#a63d63);color:#fff;display:grid;place-items:center;font-size:.9rem;
  box-shadow:0 6px 14px rgba(166,61,99,.4);animation:xbeat 1.6s infinite}
@keyframes xbeat{50%{transform:scale(1.18)}}
.xletter h3{font-weight:600;font-size:1.1rem;margin-bottom:16px}
.xletter p{font-size:.95rem;line-height:34px;min-height:136px;white-space:pre-wrap}
.xletter p.typing::after{content:"|";margin-left:2px;animation:xblink .8s infinite}
@keyframes xblink{50%{opacity:0}}
.xletter .sig{margin-top:14px;font-style:italic;color:var(--rose,#a63d63);opacity:0;transition:opacity 1s}
.xletter .sig.on{opacity:1}

/* wishes */
.xwishes{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px}
.xwish{position:relative;background:#fff;border-radius:20px;padding:30px 24px 22px;box-shadow:0 10px 28px rgba(80,40,60,.1);transition:transform .35s,box-shadow .35s;overflow:hidden}
.xwish::before{content:"\\201C";position:absolute;top:-8px;right:16px;font-size:5rem;color:#f3d6df;line-height:1}
.xwish:hover{transform:translateY(-8px) rotate(-1deg);box-shadow:0 20px 44px rgba(80,40,60,.2)}
.xwish p{font-size:.85rem;line-height:1.75;color:#5c4852;margin-bottom:16px;position:relative}
.xwish b{font-size:.78rem;color:var(--rose,#a63d63);letter-spacing:.12em;text-transform:uppercase}
.xwish:nth-child(2n) .xwish-i{background:#f7e8d4}

/* cake */
.xcake{text-align:center;padding-bottom:30px}
.xcake p.h{font-size:.85rem;color:#7a6670;margin-bottom:10px}
.xcake svg{width:min(300px,80vw);height:auto;overflow:visible}
.flame{transform-origin:50% 100%;animation:xflick .35s ease-in-out infinite alternate}
.flame:nth-of-type(2n){animation-duration:.45s}
@keyframes xflick{from{transform:scale(1,1) rotate(-3deg)}to{transform:scale(.88,1.12) rotate(3deg)}}
.out .flame{animation:none;opacity:0;transform:scale(.2);transition:all .6s}
.smoke{opacity:0}.out .smoke{animation:xsmoke 1.8s ease-out forwards}
@keyframes xsmoke{0%{opacity:.7;transform:translateY(0)}100%{opacity:0;transform:translateY(-34px)}}
.xbtn{font-family:inherit;border:0;cursor:pointer;background:var(--rose,#a63d63);color:#fff;padding:13px 28px;border-radius:30px;font-size:.85rem;margin-top:12px;
  box-shadow:0 10px 26px rgba(166,61,99,.35);transition:transform .25s,box-shadow .25s}
.xbtn:hover{transform:translateY(-4px);box-shadow:0 16px 34px rgba(166,61,99,.5)}
.xmsg{font-size:1.15rem;margin-top:22px;opacity:0;transform:scale(.9);transition:all .8s;min-height:1.6em}
.xmsg.on{opacity:1;transform:none}

/* floating hearts */
.xheart{position:fixed;bottom:-40px;z-index:5;pointer-events:none;color:#e8a0b4;opacity:0;animation:xrise linear infinite}
@keyframes xrise{0%{transform:translateY(0) translateX(0);opacity:0}10%{opacity:.35}90%{opacity:.3}100%{transform:translateY(-110vh) translateX(40px);opacity:0}}

@media(max-width:700px){.xstats{grid-template-columns:repeat(2,1fr)}.xletter{padding:40px 22px 30px}}
`;
var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

/* ---------------- HTML ---------------- */
var statsHTML = EXTRAS.stats.map(function (s) {
  return '<div class="xstat xr"><b data-n="' + s.n + '" data-s="' + (s.suffix || '') + '">0</b><span>' + s.label + '</span></div>';
}).join('');

var wishesHTML = EXTRAS.wishes.map(function (w, i) {
  return '<div class="xwish xr" style="transition-delay:' + (i * 0.1) + 's"><p>' + w.text + '</p><b>' + w.from + '</b></div>';
}).join('');

var candles = [70, 95, 120, 145, 170].map(function (x) {
  return '<rect x="' + (x - 3) + '" y="62" width="6" height="30" rx="2" fill="#fff" stroke="#e8a0b4"/>' +
         '<path class="flame" d="M' + x + ' 42 C' + (x + 7) + ' 52 ' + (x + 5) + ' 60 ' + x + ' 60 C' + (x - 5) + ' 60 ' + (x - 7) + ' 52 ' + x + ' 42Z" fill="#ffb53d"/>' +
         '<circle class="smoke" cx="' + x + '" cy="40" r="4" fill="#bbb"/>';
}).join('');

var cake =
  '<svg viewBox="0 0 240 210" aria-label="Birthday cake">' +
  '<ellipse cx="120" cy="192" rx="110" ry="12" fill="#e9d6dc"/>' +
  '<rect x="30" y="130" width="180" height="60" rx="14" fill="#f4b6c8"/>' +
  '<rect x="55" y="92" width="130" height="44" rx="12" fill="#fbd5e0"/>' +
  '<path d="M55 108 q10 14 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t10 0 V96 H55Z" fill="#fff"/>' +
  '<path d="M30 148 q11 14 22 0 t22 0 t22 0 t22 0 t22 0 t22 0 t22 0 t22 0 V134 H30Z" fill="#fff"/>' +
  candles + '</svg>';

var wrap = document.createElement('div');
wrap.innerHTML =
  '<section class="xs"><div class="xl xr">By the numbers</div><h2 class="xr">A few little things worth counting.</h2><div class="xstats">' + statsHTML + '</div></section>' +
  '<section class="xs"><div class="xl xr">From the heart</div><h2 class="xr">' + EXTRAS.letterTitle + '</h2>' +
    '<div class="xletter xr"><h3>Dear birthday girl,</h3><p id="xtype"></p><div class="sig" id="xsig">' + EXTRAS.signature + ' &hearts;</div></div></section>' +
  '<section class="xs"><div class="xl xr">Wishes</div><h2 class="xr">' + EXTRAS.wishesTitle + '</h2><div class="xwishes">' + wishesHTML + '</div></section>' +
  '<section class="xs xcake"><div class="xl xr">' + EXTRAS.wishTitle + '</div><h2 class="xr">Time for the candles.</h2>' +
    '<p class="h xr">' + EXTRAS.wishHint + '</p><div class="xr" id="xcakebox">' + cake + '</div>' +
    '<button class="xbtn xr" id="xblow">Blow the candles</button><div class="xmsg" id="xmsg"></div></section>';

var foot = document.getElementById('foot');
while (wrap.firstChild) { foot ? foot.parentNode.insertBefore(wrap.firstChild, foot) : document.body.appendChild(wrap.firstChild); }

/* ---------------- scroll reveal ---------------- */
var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('xin'); io.unobserve(e.target); } });
}, { threshold: .15 });
document.querySelectorAll('.xr').forEach(function (el) { io.observe(el); });

/* ---------------- animated counters ---------------- */
var cio = new IntersectionObserver(function (es) {
  es.forEach(function (e) {
    if (!e.isIntersecting) return;
    var el = e.target, n = +el.dataset.n, suf = el.dataset.s, t0 = performance.now(), dur = 1600;
    (function step(t) {
      var p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(n * eased).toLocaleString() + suf;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
    cio.unobserve(el);
  });
}, { threshold: .6 });
document.querySelectorAll('.xstat b').forEach(function (b) { cio.observe(b); });

/* ---------------- typewriter letter ---------------- */
var typeEl = $('#xtype'), sigEl = $('#xsig'), typed = false;
new IntersectionObserver(function (es, obs) {
  if (!es[0].isIntersecting || typed) return;
  typed = true; typeEl.classList.add('typing');
  var i = 0, txt = EXTRAS.letter;
  (function next() {
    typeEl.textContent = txt.slice(0, ++i);
    if (i < txt.length) setTimeout(next, 28);
    else { typeEl.classList.remove('typing'); sigEl.classList.add('on'); }
  })();
  obs.disconnect();
}, { threshold: .5 }).observe($('.xletter'));

/* ---------------- candles ---------------- */
var box = $('#xcakebox'), blow = $('#xblow'), msg = $('#xmsg'), blown = false;
blow.onclick = function () {
  blown = !blown;
  box.classList.toggle('out', blown);
  blow.textContent = blown ? 'Light them again' : 'Blow the candles';
  if (blown) {
    msg.textContent = EXTRAS.wishMessage; msg.classList.add('on');
    if (typeof confetti === 'function') confetti();
  } else { msg.classList.remove('on'); }
};

/* ---------------- floating hearts ---------------- */
for (var h = 0; h < 12; h++) {
  var s = document.createElement('div');
  s.className = 'xheart'; s.textContent = h % 3 ? '\u2665' : '\u2726';
  s.style.left = (Math.random() * 100) + '%';
  s.style.fontSize = (10 + Math.random() * 16) + 'px';
  s.style.animationDuration = (12 + Math.random() * 12) + 's';
  s.style.animationDelay = (Math.random() * 14) + 's';
  document.body.appendChild(s);
}

})();
