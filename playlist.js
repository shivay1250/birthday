/* ==========================================================
   playlist.js - plays many songs one after another
   Put in the SAME folder as birthday.html and add this line
   as the LAST script, just before </body>:
   <script src="playlist.js"></script>
   ========================================================== */
(function () {

/* ===============  EDIT YOUR SONGS HERE  =============== */
var P = {
  shuffle: false,          // true = random order
  tracks: [
    { title: "Song one",   src: VID+"song1.mp3" },
    { title: "Song two",   src: VID+"song2.mp3" },
    { title: "Song three", src: VID+"song3.mp3" },
    { title: "Song four",  src: VID+"song4.mp3" },
    { title: "Song five",  src: VID+"song5.mp3" },
    { title: "Song six",   src: VID+"song6.mp3" }
    // add more lines like:  { title: "Name", src: "music/file.mp3" },
  ]
};
/* ===================================================== */

var bgm = document.getElementById('bgm'),
    mBtn = document.getElementById('music'),
    mTxt = document.getElementById('mtxt');
if (!bgm || !P.tracks.length) return;

/* order (optionally shuffled) */
var order = P.tracks.map(function (t, i) { return i; });
if (P.shuffle) {
  for (var i = order.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)), t = order[i]; order[i] = order[j]; order[j] = t;
  }
}
var pos = 0, fails = 0, want = false;
bgm.loop = false;

/* small now-playing bar above the music button */
var st = document.createElement('style');
st.textContent =
  '#ypl{position:fixed;left:22px;bottom:78px;z-index:90;display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.92);color:#3b2430;' +
  'border-radius:30px;padding:5px 8px;box-shadow:0 8px 22px rgba(0,0,0,.18);font-family:"Playfair Display",Georgia,serif;font-size:.74rem;max-width:calc(100vw - 110px)}' +
  '#ypl button{border:0;background:#f6e3ea;color:#a63d63;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:1rem;line-height:1;transition:transform .2s,background .2s}' +
  '#ypl button:hover{transform:scale(1.15);background:#f0c9d6}' +
  '#ypt{max-width:170px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 4px}';
document.head.appendChild(st);

var bar = document.createElement('div'); bar.id = 'ypl';
bar.innerHTML = '<button id="ypp" aria-label="Previous song">&lsaquo;</button><span id="ypt"></span><button id="ypn" aria-label="Next song">&rsaquo;</button>';
document.body.appendChild(bar);
var label = document.getElementById('ypt');

/* load a track; play it if asked */
function load(i, play) {
  pos = (i + order.length) % order.length;
  var tr = P.tracks[order[pos]];
  bgm.src = tr.src;
  label.textContent = '\u266A ' + tr.title + '  (' + (pos + 1) + '/' + order.length + ')';
  if (play) {
    bgm.play().then(function () {
      fails = 0; mBtn.classList.add('playing'); mTxt.textContent = 'Pause music';
    }).catch(function () {});
  }
}

/* keep track of whether the visitor wants music playing */
bgm.addEventListener('play', function () { want = true; });
bgm.addEventListener('pause', function () { if (!bgm.ended) want = false; });

/* song finished -> next one */
bgm.addEventListener('ended', function () { load(pos + 1, true); });

/* missing or broken file -> skip to next (stops if every file fails) */
bgm.addEventListener('error', function () {
  if (++fails < order.length) load(pos + 1, want);
});

document.getElementById('ypn').onclick = function () { load(pos + 1, want); };
document.getElementById('ypp').onclick = function () { load(pos - 1, want); };

load(0, false);

})();
