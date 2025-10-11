// ---- State & mock data ------------------------------------------------------
const LS_KEY_TRACKS = "playlist.tracks";
const LS_KEY_ACTIVE = "playlist.active";

// Datos base (se conservan tal cual)
// Datos base (se conservan tal cual)
const defaultTracks = [
  {
    id: crypto.randomUUID(), title: "インフェルノ", artist: "Mrs. GREEN APPLE",
    album: "Attitude", durationSec: 212, addedAt: "2025-05-26",
    hasVideo: true,
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/d6/9e/54/d69e54ca-2d82-f291-d745-9a706aa26940/19UMGIM59475.rgb.jpg/600x600bf-60.jpg",
    coverLarge: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/d6/9e/54/d69e54ca-2d82-f291-d745-9a706aa26940/19UMGIM59475.rgb.jpg/600x600bf-60.jpg"
  },
  { id: crypto.randomUUID(), title: "Abyss - from Kaiju No. 8", artist: "YUNGBLUD",
    album: "Abyss (from Kaiju No. 8)", durationSec: 123, addedAt: "2025-05-26",
    hasVideo: false, cover: "https://i.scdn.co/image/ab67616d0000b27319eb8cff3ed753683309e485",
    coverLarge: "https://i.scdn.co/image/ab67616d0000b27319eb8cff3ed753683309e485"
  },
  { id: crypto.randomUUID(), title: "Nobody - from Kaiju No. 8", artist: "OneRepublic",
    album: "Artificial Paradise (Deluxe)", durationSec: 154, addedAt: "2025-05-26",
    hasVideo: false, cover: "https://i.scdn.co/image/ab67616d0000b2732b386fcbb5a5e90bba728f95",
    coverLarge: "https://i.scdn.co/image/ab67616d0000b2732b386fcbb5a5e90bba728f95"
  },
  { id: crypto.randomUUID(), title: "SPECIALZ", artist: "King Gnu",
    album: "THE GREATEST UNKNOWN", durationSec: 234, addedAt: "2025-05-26",
    hasVideo: true, cover: "https://i.scdn.co/image/ab67616d0000b273ef96f1d50c9562c321ef207e",
    coverLarge: "https://i.scdn.co/image/ab67616d0000b273ef96f1d50c9562c321ef207e"
  },
{ id: crypto.randomUUID(), title: "Blink Gone (VIVINOS - ALNST Origin…)", artist: "BL8M, AKUGETSU",
    album: "Blink Gone (VIVINOS …)", durationSec: 189, addedAt: "2025-05-26",
    hasVideo: false, cover: "https://images.genius.com/a62cd2e25b32ec58bde8f01cb2364614.1000x1000x1.png",
    coverLarge: "https://images.genius.com/a62cd2e25b32ec58bde8f01cb2364614.1000x1000x1.png"
  },
  { id: crypto.randomUUID(), title: "Gabriela", artist: "KATSEYE",
    album: "Single Collection", durationSec: 268, addedAt: "2025-04-11",
    hasVideo: true, cover: "https://i.scdn.co/image/ab67616d0000b273f8d4d00ffe09373efb13ce29",
    coverLarge: "https://i.scdn.co/image/ab67616d0000b273f8d4d00ffe09373efb13ce29"
  },
  { id: crypto.randomUUID(), title: "Do not touch", artist: "MISAMO",
    album: "Do not touch", durationSec: 306, addedAt: "2025-03-14",
    hasVideo: false, cover: "https://cdn-images.dzcdn.net/images/cover/121f98f5c86f1493cdff576b77349c20/0x1900-000000-80-0-0.jpg",
    coverLarge: "https://cdn-images.dzcdn.net/images/cover/121f98f5c86f1493cdff576b77349c20/0x1900-000000-80-0-0.jpg"
  },
  { id: crypto.randomUUID(), title: "Face-off", artist: "Jimin",
    album: "FACE", durationSec: 219, addedAt: "2025-01-08",
    hasVideo: true, cover: "https://images.genius.com/6e8c0fe111668c8d4f61ec3a2f2518bf.1000x1000x1.png",
    coverLarge: "https://images.genius.com/6e8c0fe111668c8d4f61ec3a2f2518bf.1000x1000x1.png"
  },
  { id: crypto.randomUUID(), title: "Bling-Bang-Bang-Born", artist: "Creepy Nuts",
    album: "LEGION", durationSec: 170, addedAt: "2025-05-26",
    hasVideo: true, cover: "https://images.genius.com/5b2054abdc05bc8561c20ddc069a01f2.1000x1000x1.png",
    coverLarge: "https://images.genius.com/5b2054abdc05bc8561c20ddc069a01f2.1000x1000x1.png"
  },
  { id: crypto.randomUUID(), title: "絶対零度", artist: "natori",
    album: "絶対零度 - Single", durationSec: 198, addedAt: "2025-05-26",
    hasVideo: true, cover: "https://i.scdn.co/image/ab67616d0000b273524cec0ac2f584b666e08ff5",
    coverLarge: "https://i.scdn.co/image/ab67616d0000b273524cec0ac2f584b666e08ff5"
  },
  { id: crypto.randomUUID(), title: "LOST IN PARADISE", artist: "ALI, AKLO",
    album: "MUSIC WORLD", durationSec: 329, addedAt: "2025-05-26",
    hasVideo: true, cover: "https://i.scdn.co/image/ab67616d0000b2734d0fb5b5d49c879a5cfed01e",
    coverLarge: "https://i.scdn.co/image/ab67616d0000b2734d0fb5b5d49c879a5cfed01e"
  },
  { id: crypto.randomUUID(), title: "Waste it on me(feat. BTS)", artist: "Steve Aoki, BTS",
    album: "Neon future III", durationSec: 193, addedAt: "2025-05-26",
    hasVideo: false, cover: "https://i.scdn.co/image/ab67616d0000b2732b83b1f05af0be85caec37e7",
    coverLarge: "https://i.scdn.co/image/ab67616d0000b2732b83b1f05af0be85caec37e7"
  },
  { id: crypto.randomUUID(), title: "All-in (VIVINOS - ALNST 2nd Anniversary)", artist: "AKUGETSU",
    album: "All-in (VIVINOS - ALNST 2nd Anniversary)", durationSec: 176, addedAt: "2025-05-26",
    hasVideo: false, cover: "https://cdn-images.dzcdn.net/images/cover/65067e9f5982339329ad35c1f1978af3/0x1900-000000-80-0-0.jpg",
    coverLarge: "https://cdn-images.dzcdn.net/images/cover/65067e9f5982339329ad35c1f1978af3/0x1900-000000-80-0-0.jpg"
  },
  { id: crypto.randomUUID(), title: "Black Sorrow (Original Soundtrack from VIVINOS)", artist: "PARK BYEONG HOON",
    album: "Black Sorrow (Original Soundtrack)", durationSec: 194, addedAt: "2025-05-26",
hasVideo: false, cover: "https://cdn-images.dzcdn.net/images/cover/46ee3249b2d190e84acb95d2f6fcdddf/1900x1900-000000-80-0-0.jpg",
    coverLarge: "https://cdn-images.dzcdn.net/images/cover/46ee3249b2d190e84acb95d2f6fcdddf/1900x1900-000000-80-0-0.jpg"
  }
];


// ---- State (persistente con localStorage) -----------------------------------
function loadTracks(){
  try{
    const raw = localStorage.getItem(LS_KEY_TRACKS);
    if (raw) return JSON.parse(raw);  // usa lo guardado si existe
  }catch(e){ console.warn(e); }
  return [...defaultTracks];          // primera carga
}

function saveState(){
  try{
    localStorage.setItem(LS_KEY_TRACKS, JSON.stringify(tracks));
    if (activeId) localStorage.setItem(LS_KEY_ACTIVE, activeId);
    else localStorage.removeItem(LS_KEY_ACTIVE);
  }catch(e){ console.warn(e); }
}

let tracks = loadTracks();
let filtered = [...tracks];
let activeId = localStorage.getItem(LS_KEY_ACTIVE) || null;
let currentIndex = activeId ? filtered.findIndex(t => t.id === activeId) : -1;
let isPlaying = false;
let playTimer = null;

// ---- Elements ----------------------------------------------------------------
const tracksContainer = document.getElementById("tracksContainer");
const searchInput = document.getElementById("searchInput");
const trackCount = document.getElementById("trackCount");
const totalDuration = document.getElementById("totalDuration");

// Now playing
const npCover = document.getElementById("npCover");
const npTitle = document.getElementById("npTitle");
const npArtist = document.getElementById("npArtist");
const relatedContainer = document.querySelector(".related");

// Modal & toast
const modalEl = document.getElementById('confirmDeleteModal');
const modal = new bootstrap.Modal(modalEl);
const modalTrackTitle = document.getElementById("modalTrackTitle");
const btnConfirmDelete = document.getElementById("btnConfirmDelete");
const toast = new bootstrap.Toast(document.getElementById("toast"), { delay: 2000 });
const toastBody = document.getElementById("toastBody");

let pendingDeleteId = null;

// ---- Init --------------------------------------------------------------------
render();
if (!localStorage.getItem(LS_KEY_TRACKS)) saveState(); // inicializa storage primera vez
if (activeId && tracks.some(t => t.id === activeId)) setActiveTrack(activeId);

searchInput.addEventListener("input", e => {
  applySearch(e.target.value.trim());
});

document.querySelectorAll(".sort").forEach(btn => {
  btn.addEventListener("click", () => {
    applySort(btn.dataset.sort);
  });
});


btnConfirmDelete.addEventListener("click", () => {
  if (!pendingDeleteId) return;
  deleteTrack(pendingDeleteId);
  pendingDeleteId = null;
  modal.hide();
});

// ---- Functions ---------------------------------------------------------------
function render(){
  filtered = [...tracks];
  applySearch(searchInput.value.trim(), false);
  trackCount.textContent = filtered.length;
  totalDuration.textContent = formatTime(filtered.reduce((a,t)=>a+t.durationSec,0));
  renderList(filtered);
}

function renderList(list){
  tracksContainer.innerHTML = "";
  list.forEach((t, i) => {
    const row = document.createElement("div");
    row.className = "track-item list-group-item bg-transparent";
    row.tabIndex = 0;
    row.dataset.id = t.id;
    row.innerHTML = `
      <div class="track-num">${i+1}</div>
      <div class="track-title text-truncate">
        <img src="${t.cover}" alt="">
        <div class="min-w-0">
          <div class="text-truncate">${t.title}</div>
          <div class="d-flex align-items-center gap-2 text-secondary small">
            ${t.hasVideo ? '<span class="badge text-bg-secondary border-0 badge-video"><i class="bi bi-play-btn-fill me-1"></i>Video musical</span>' : ''}
            <span class="text-truncate">${t.artist}</span>
          </div>
        </div>
      </div>
      <div class="track-album text-truncate">${t.album}</div>
      <div class="track-date">${formatDate(t.addedAt)}</div>
      <div class="track-actions">
        <div class="small text-secondary me-2">${formatTime(t.durationSec)}</div>
        <button class="icon-btn text-danger btn-delete" aria-label="Eliminar"><i class="bi bi-trash"></i></button>
      </div>
    `;

    // events
    row.addEventListener("click", (e) => {
      if (e.target.closest(".btn-delete")) return;
      setActiveTrack(t.id);
    });

    row.querySelector(".btn-delete").addEventListener("click", (e) => {
      e.stopPropagation();
      pendingDeleteId = t.id;
      modalTrackTitle.textContent = `"${t.title}"`;
      modal.show();
    });

    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter"){ setActiveTrack(t.id); }
      if (e.key === "Delete"){
        pendingDeleteId = t.id;
        modalTrackTitle.textContent = `"${t.title}"`;
        modal.show();
      }
      if (e.key === "ArrowDown"){ e.preventDefault(); row.nextElementSibling?.focus(); }
      if (e.key === "ArrowUp"){ e.preventDefault(); row.previousElementSibling?.focus(); }
    });

    if (t.id === activeId){ row.classList.add("active"); }
    tracksContainer.appendChild(row);
  }); // cierre correcto del forEach
}

function setActiveTrack(id){
  activeId = id;
  currentIndex = filtered.findIndex(t => t.id === id);
  document.querySelectorAll(".track-item").forEach(el =>
    el.classList.toggle("active", el.dataset.id === id)
  );

  const t = getActive();
  if (!t) return;

  // Panel derecho (Now Playing)
  npCover.src = t.coverLarge || t.cover;
  npTitle.textContent = t.title;
  npArtist.textContent = t.artist;
  relatedContainer.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const c = document.createElement("div");
    c.className = "card bg-dark border-0 rounded-3";
    c.innerHTML = `
      <img class="card-img-top" src="https://picsum.photos/seed/${encodeURIComponent(t.title + i)}/300/180" alt="">
      <div class="card-body p-2">
        <div class="small text-truncate">${t.title} (live ${i + 1})</div>
      </div>`;
    relatedContainer.appendChild(c);
  }

  // Solo guardamos el estado, sin reproducir nada
  saveState();
}


function getActive(){
  return tracks.find(x => x.id === activeId);
}

function startTimer(){
  clearInterval(playTimer);
  const t = getActive();
  if (!t) return;
  let pos = 0;
  playTimer = setInterval(() => {
    if (!isPlaying) return;
    pos++;
    if (pos > t.durationSec){
      clearInterval(playTimer);
      jump(1);
      return;
    }
    pbCurrent.textContent = formatTime(pos);
    pbSeek.value = Math.floor(pos*100/t.durationSec);
  }, 1000);
}

function togglePlay(){
  if (!activeId){
    if (filtered.length) setActiveTrack(filtered[0].id); // ← FIX AQUÍ
    return;
  }
  isPlaying = !isPlaying;
  pbToggle.innerHTML = isPlaying ? '<i class="bi bi-pause-circle-fill fs-3"></i>' : '<i class="bi bi-play-circle-fill fs-3"></i>';
}

function jump(dir){
  if (filtered.length === 0) return;
  if (currentIndex === -1) currentIndex = 0;
  currentIndex = (currentIndex + dir + filtered.length) % filtered.length;
  setActiveTrack(filtered[currentIndex].id);
}

function deleteTrack(id){
  const idx = tracks.findIndex(t => t.id === id);
  if (idx === -1) return;
  const [removed] = tracks.splice(idx,1);

  if (activeId === id){
    activeId = null;
    pbCover.src = ""; pbTitle.textContent = "—"; pbArtist.textContent="—";
    npCover.src=""; npTitle.textContent="Selecciona una canción"; npArtist.textContent="—";
    clearInterval(playTimer); isPlaying=false; pbToggle.innerHTML='<i class="bi bi-play-circle-fill fs-3"></i>';
  }

  toastBody.textContent = `Se eliminó "${removed.title}"`;
  toast.show();
  saveState();
  render();
}

function applySearch(term, rerender=true){
  if (!term){
    filtered = [...tracks];
  }else{
    const q = term.toLowerCase();
    filtered = tracks.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.artist.toLowerCase().includes(q) ||
      t.album.toLowerCase().includes(q)
    );
  }
  if (rerender) renderList(filtered);
}

function applySort(mode){
  const sorters = {
    recent: (a,b) => new Date(b.addedAt) - new Date(a.addedAt),
    az: (a,b) => a.title.localeCompare(b.title),
    album: (a,b) => a.album.localeCompare(b.album),
    duration: (a,b) => a.durationSec - b.durationSec
  };
  tracks.sort(sorters[mode] || sorters.recent);
  saveState();
  render();
}

// ---- Utils -------------------------------------------------------------------
function formatTime(sec){
  const m = Math.floor(sec/60);
  const s = sec%60;
  return `${m}:${String(s).padStart(2,'0')}`;
}

function formatDate(iso){
  try{
    const d = new Date(iso);
    const fmt = new Intl.DateTimeFormat('es-MX', { day:'2-digit', month:'short', year:'numeric' });
    return fmt.format(d);
  }catch{ return iso; }
}
