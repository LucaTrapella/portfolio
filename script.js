

const SHOW_PROFILE_PHOTO = true;

// ─────────────────────────────────────────
//  DATI PROGETTI
//  Ogni oggetto rappresenta un progetto. Campi:
//    id        — identificatore univoco (usato dai click handler)
//    title     — nome visualizzato
//    tag       — categoria (Research / Project / Tool)
//    date      — mese ISO "YYYY-MM" (per ordinamento cronico e display)
//    color     — colore sfondo card + vista dettaglio (palette grigio/bianco)
//    short     — descrizione breve sulla card
//    full      — paragrafo esteso nella vista dettaglio
//    fullTitle — titolo del paragrafo full description (opzionale, es. "Overview")
//    role      — ruolo/funzione (opzionale, mostrato in grassetto sulla card e nel dettaglio)
//    tech      — framework e librerie usati
//    langs     — linguaggi di programmazione
//    file      — percorso file scaricabile (opzionale, es. 'files/report.pdf')
//    link      — URL esterno del progetto (opzionale, es. 'https://github.com/...')
//    status    — stato del progetto: 'complete' | 'in progress' | 'ongoing' | 'archived' | null
//    images    — array di URL immagini (vuoto finché non si aggiungono)
// ─────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    title: 'ECG Arrhythmia Classifier via SVM',
    tag: 'Research',
    date: '2024-11',
    color: '#e8e6e2',
    context: 'MAE (Polimi) · Computer Music Representation and Models',
    mainTag: 'Machine Learning',
    short: 'SVM pipeline classifying ECG signals into 5 arrhythmia classes on the MIT-BIH dataset.',
    full: 'This project applies machine learning to biomedical signal classification, with the goal of gaining practical experience in the analysis and processing of large signal-based datasets similar to audio data, and exploring how machine learning techniques can be adapted across different domains. Working on the MIT-BIH arrhythmia dataset, we built a full pipeline from raw waveform normalization to feature extraction and SVM training. The most interesting challenge was handling severe class imbalance: an initial model hit 89% accuracy but failed entirely on minority classes. Addressing this through dataset balancing and audio-style augmentation — time-stretching and amplitude scaling borrowed from music ML — produced a fairer model with more equitable recall across all five classes. Work done in collaboration with Francesco Crociani.',
    fullTitle: 'ECG Arrhythmia Classification via SVM — CMRM2024',
    role: 'ML Engineer · Data Augmentation',
    tech: ['scikit-learn', 'librosa', 'Meyda'],
    langs: ['Python'],
    file: 'reports/REPORT_1_CMRM2024.pdf',
    link: null,
    status: 'complete',
    images: ['images/ecg_1.png', 'images/ecg_2.png']
  },
  {
    id: 2,
    title: 'Multivariate Time Series Classifier',
    tag: 'Challenge',
    date: '2025-11',
    color: '#e8e6e2',
    context: 'Polimi · Artificial Neural Networks and Deep Learning',
    mainTag: 'Deep Learning',
    short: 'Multivariate time series classification using hybrid CNN. 9th place out of 193 teams.',
    full: 'This project explored machine learning for multivariate temporal signals, focusing on the trade-off between sequence modeling and handcrafted statistical representations. Starting from joint trajectory data, the pipeline evolved from recurrent architectures to a hybrid 1D CNN model, while feature engineering progressively replaced raw trajectories with statistical descriptors that proved more robust and discriminative. A major challenge was handling class imbalance and non-informative dimensions without overfitting. Finishing 9th out of 193 teams reflected both the architectural decisions and a disciplined cross-validation strategy.',
    fullTitle: 'ANNDL Challenge',
    role: 'Data Exploration · Model Design and Training',
    tech: ['PyTorch', 'scikit-learn'],
    langs: ['Python'],
    file: 'reports/AN2DL25_Challenge1_Report.pdf',
    link: 'https://www.kaggle.com/competitions/an2dl2526c1/overview',
    status: 'complete',
    images: ['images/anndl_c1_1.png']
  },
  {
    id: 3,
    title: 'Histopathological Image Classifier',
    tag: 'Challenge',
    date: '2025-12',
    color: '#e8e6e2',
    context: 'Polimi · Artificial Neural Networks and Deep Learning',
    mainTag: 'Deep Learning',
    short: 'Breast cancer subtype classification from whole-slide images using patch-based transfer learning and histopathology-pretrained Transformers.',
    full: 'The second Kaggle challenge of the Artificial Neural Networks and Deep Learning course at Politecnico di Milano pushed into medical imaging territory: classifying four breast cancer molecular subtypes from noisy, variable-resolution whole-slide images. The dataset was adversarial by design — corrupted samples, class imbalance, and multi-region slides. Rather than fighting outliers with a heavy classifier, we reformulated detection as a lightweight color-based filter, which outperformed a dedicated ResNet-18 approach. The strongest model was CTrans, a Transformer pretrained specifically on histopathological data, which generalized better than standard architectures despite the domain complexity. Work done in collaboration with Francesco Crociani.',
    fullTitle: 'ANNDL Challenge',
    role: 'Data Exploration · Patch Extraction · Model Design and Training',
    tech: ['PyTorch'],
    langs: ['Python'],
    file: 'reports/AN2DL25_Challenge2_Report.pdf',
    link: 'https://www.kaggle.com/competitions/an2dl2526c2v2/overview',
    status: 'complete',
    images: ['images/anndl_c2_1.png', 'images/anndl_c2_2.png', 'images/anndl_c2_3.png', 'images/anndl_c2_4.png']
  },
  {
    id: 4,
    title: 'Hand2Hand',
    tag: 'Project',
    date: '2025-05',
    color: '#e8e6e2',
    context: 'MAE (Polimi) · Computer Music Representation and Models',
    mainTag: 'Computer Music System',
    short: 'A sensor-driven music system connected to a MIDI keyboard, where left-hand gestures control synth parameters and right-hand gestures shape effects, dynamically switching synths and effects based on finger count.',
    full: 'Hand2Hand (H2H) is a real-time performance instrument designed around the idea of replacing physical controls with free-hand spatial gestures. The system maps one hand to synth selection and synthesis parameters, while the other continuously controls the effects chain and type of effect, allowing performers to shape sound without touching the interface. A gesture-lock mechanism freezes parameters to prevent accidental changes during improvisation. The architecture combines Python for sensor acquisition, Processing for visualization, SuperCollider for synthesis, and its own JUCE plugin for effects, the communication is through OSC.',
    fullTitle: 'Hand2Hand - Computer Music System',
    role: 'Concept · Leap Motion Dev · Processing GUI',
    tech: [ 'JUCE', 'Python-OSC', 'Leap Motion Controller'],
    langs: ['Python', 'SuperCollider', 'Processing (Java)', 'C++'],
    file: null,
    link: 'https://github.com/Gio-lly/Hand2Hand-computer-music-system',
    status: 'complete',
    images: ['images/h2h_1.png', 'images/h2h_2.png', 'images/h2h_3.png']
  },
  {
    id: 5,
    title: 'Or-Beat',
    tag: 'Project',
    date: '2025-02',
    color: '#e8e6e2',
    context: 'MAE (Polimi) · Computer Music Languages and Systems',
    mainTag: 'Web Audio Application',
    short: 'Browser-based circular drum machine with automatic onset detection and polyrhythmic sequencing from uploaded audio.',
    full: 'Or-Beat explores how raw recordings can become rhythmic material directly inside the browser without manual editing. The system performs real-time onset detection on uploaded or recorded audio, extracts transient events automatically, and maps them into a circular sequencer with independent phase, density, and step controls for each layer. The project combines audio analysis with an interface designed specifically for polyrhythmic experimentation, sitting somewhere between a sampler and a generative sequencer. The full session can be exported as audio, and the entire pipeline runs client-side in the browser.',
    fullTitle: 'Or-Beat — Circular Drum Machine',
    role: 'Concept · Onset Detection · Frontend',
    tech: ['Tone.js', 'P5'],
    langs: ['JavaScript', 'HTML', 'CSS'],
    file: null,
    link: 'https://github.com/Gio-lly/OR-BEAT',
    status: 'complete',
    images: ['images/orbeat_1.gif', 'images/orbeat_2.png', 'images/orbeat_3.png']
  },
  {
    id: 6,
    title: 'NMF Timbre Transfer',
    tag: 'Research',
    date: '2025-01',
    color: '#e8e6e2',
    context: 'MAE (Polimi) · Computer Music Representation and Models',
    mainTag: 'Audio Machine Learning',
    short: 'Classical timbre transfer using NMF and spectral template recombination instead of neural networks.',
    full: 'This project investigated whether timbre transfer — commonly approached with deep learning — could instead be achieved entirely through classical signal processing techniques. Using Non-negative Matrix Factorization (NMF), spectral templates were extracted from environmental recordings such as bees, wind, and chainsaws, then imposed onto musical targets while preserving their temporal structure. The intentionally contrasting source materials made the perceptual effects easier to evaluate and exposed the strengths and limitations of purely spectral approaches. Different reconstruction methods were tested, with Griffin-Lim consistently outperforming direct ISTFT synthesis in perceptual quality.',
    fullTitle: 'NMF-Based Timbre Transfer',
    role: 'Signal Processing',
    tech: ['librosa', 'NMF', 'Griffin-Lim'],
    langs: ['Python'],
    file: 'reports/REPORT_2_CMRM2024.pdf',
    link: null,
    status: 'complete',
    images: []
  },
  
  {
    id: 7,
    title: 'Cathartic',
    tag: 'Project',
    date: '2026-06',
    color: '#e8e6e2',
    context: 'MAE (Polimi) · Creative Computer and Programming',
    mainTag: 'Generative AI',
    short: 'Interactive installation where emotional analysis of typed text drives real-time generative audio and audio-reactive particle simulations.',
    full: 'Cathartic is an ongoing audio-visual installation combining emotion recognition, generative audio, and real-time visual simulation into a continuous interactive experience. Users type personal text that is analyzed through transformer-based emotion classification models, with the resulting emotional vectors controlling an adaptive soundscape generation system. Simultaneously, the text dissolves into particle structures governed by Chladni-inspired physics and audio-reactive behaviors inside a Processing environment. The project merges research in generative audio, affective computing, and procedural visuals into a single state-driven system centered on transformation, dissolution, and catharsis. ',
    fullTitle: 'Cathartic — AI Emotion Driven Audio Visual Installation',
    role: 'Concept · Brief · AI Models Research and Implementation · Visuals Design',
    tech: ['PyTorch', 'GoEmotion', 'OSC', 'Magenta RT', 'Chladni Figures'],
    langs: ['Processing (Java)', 'Python'],
    file: null,
    link: null,
    status: 'in progress',
    images: ['images/cathartic.gif']
  },
  {
    id: 8,
    title: 'WDF Modeling of Loudspeaker',
    tag: 'Research',
    date: '2025-06',
    color: '#e8e6e2',
    context: 'MAE (Polimi) · Sound Synthesis and Spatial Processing',
    mainTag: 'Wave Digital Filters',
    short: 'Wave Digital Filter model of a piezoelectric MEMS loudspeaker preserving analog impedance relationships in the digital domain.',
    full: 'This project explored physical modeling through Wave Digital Filters (WDF), translating the topology of a piezoelectric MEMS loudspeaker circuit into a stable digital system. The analog circuit was decomposed into series and parallel adaptor structures with symbolically derived port impedances, allowing the digital model to preserve the original electrical relationships while avoiding delay-free loops. The resulting implementation was validated against a state-space reference model, showing strong agreement in both time and frequency domains with low reconstruction error across the loudspeaker’s operating range.',
    fullTitle: 'WDF Model of Piezoelectric MEMS Loudspeaker — SSSP',
    role: 'Circuit Analysis · WDF Design and Implementation',
    tech: ['Wave Digital Filters'],
    langs: ['MATLAB'],
    file: 'reports/SSSP_REPORT.pdf',
    link: null,
    status: 'complete',
    images: ['images/sssp_1.png', 'images/sssp_2.png', 'images/sssp_3.png']
},
{
  id: 9,
  title: 'Pixel-Level Anomaly Detection',
  tag: 'Challenge',
  date: '2026-05',
  color: '#e8e6e2',
  context: 'Polimi · Advanced Deep Learning',
  mainTag: 'Deep Learning',
  short: 'Pixel-level anomaly detection and segmentation for industrial and food inspection',
  full: 'This project investigates anomaly detection in images, focusing on pixel-level segmentation across industrial and food objects observed from multiple viewpoints.',
  fullTitle: 'ADL Challenge',
  role: 'Data Exploration · AI Model Research and Development',
  tech: ['PyTorch', 'Anomalib'],
  langs: ['Python'],
  file: null,
  link: 'https://www.kaggle.com/competitions/adl-2025-2026-anomaly-detection/overview',
  status: 'in progress',
  images: ['images/adl_1.png', 'images/adl_2.png','images/adl_3.png','images/adl_4.png']
}
];


// ─────────────────────────────────────────
//  STATO GLOBALE
//  sortMode  — 'chrono' (più recente prima) o 'alpha' (A–Z)
//  query     — stringa di ricerca corrente
//  tagFilter — tag selezionato nel dropdown ('' = tutti)
// ─────────────────────────────────────────

let sortMode  = 'chrono';
let query     = '';
let tagFilter = '';


// ─────────────────────────────────────────
//  UTILITÀ
// ─────────────────────────────────────────

// Converte "YYYY-MM" → "mmm YYYY"  (es. "2025-03" → "mar 2025")
function fmtDate(d) {
  const [y, m] = d.split('-');
  const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  return months[+m - 1] + ' ' + y;
}


// ─────────────────────────────────────────
//  FILTRA + ORDINA
//  Restituisce una copia filtrata e ordinata di PROJECTS.
//  La ricerca confronta titolo, tag, descrizione, tech, lingue e ruolo.
// ─────────────────────────────────────────

function getList() {
  let list = [...PROJECTS];

  // Applica il filtro per tag se selezionato
  if (tagFilter) {
    list = list.filter(p => p.tag === tagFilter);
  }

  // Applica il filtro di ricerca se query non è vuota
  if (query) {
    const q = query.toLowerCase();
    list = list.filter(p =>
      p.title.toLowerCase().includes(q)  ||
      p.tag.toLowerCase().includes(q)    ||
      p.short.toLowerCase().includes(q)  ||
      (p.mainTag && p.mainTag.toLowerCase().includes(q)) ||
      (p.role && p.role.toLowerCase().includes(q)) ||
      p.tech.some(t  => t.toLowerCase().includes(q)) ||
      p.langs.some(l => l.toLowerCase().includes(q))
    );
  }

  // Ordina alfabeticamente o cronologicamente (più recente prima)
  if (sortMode === 'alpha') {
    list.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    list.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return list;
}


// ─────────────────────────────────────────
//  RENDER CARDS
//  Svuota la griglia e la ricostruisce dalla
//  lista filtrata/ordinata corrente.
// ─────────────────────────────────────────

function renderCards() {
  const grid = document.getElementById('cardsGrid');
  const list = getList();

  // Mostra stato vuoto se nessun progetto corrisponde alla ricerca
  if (!list.length) {
    grid.innerHTML = '<div class="no-results">no projects found.</div>';
    return;
  }

  // animation-delay sfasa l'ingresso di ogni card di 70ms
  grid.innerHTML = list.map((p, i) => `
    <div class="card"
         style="background:${p.color}; animation-delay:${i * 0.07}s"
         data-id="${p.id}">
      <div class="card-body">
        <div class="card-top">
          <div class="card-tag">${p.tag}</div>
          <div class="card-date">${fmtDate(p.date)}</div>
        </div>
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.short}</div>

        <div class="card-footer">
          ${p.mainTag ? `<span class="card-pill card-pill--main">${p.mainTag}</span>` : ''}
          ${p.status ? `<span class="card-status" data-status="${p.status}" style="margin-left:auto">${p.status}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Attacca i listener dopo il render
  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', e => openDetail(e, +card.dataset.id));
  });
}


// ─────────────────────────────────────────
//  DETTAGLIO — APRI
//  Avvia l'espansione della bolla e rivela il pannello
//  di dettaglio. L'origine della bolla è il centro
//  della card cliccata.
// ─────────────────────────────────────────

function openDetail(ev, id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  // Calcola il centro della card come % del viewport (origine della bolla)
  const rect = ev.currentTarget.getBoundingClientRect();
  const bx = ((rect.left + rect.width  / 2) / window.innerWidth  * 100).toFixed(2) + '%';
  const by = ((rect.top  + rect.height / 2) / window.innerHeight * 100).toFixed(2) + '%';

  // Colora la bolla come la card e avvia l'espansione
  const bubble = document.getElementById('bubble');
  bubble.style.background = p.color;
  bubble.style.setProperty('--bx', bx);
  bubble.style.setProperty('--by', by);
  bubble.classList.remove('close');

  requestAnimationFrame(() => bubble.classList.add('open'));

  // Imposta lo sfondo di dettaglio e wrap uguale alla card
  const wrap = document.getElementById('detailWrap');
  const detail = document.getElementById('detail');
  wrap.style.background = p.color;
  detail.style.background = p.color;

  // Inietta il contenuto del dettaglio
  wrap.innerHTML = `
    <div class="detail-header">
      <div class="detail-left">
        <div class="detail-tag">${p.tag} &nbsp;·&nbsp; ${fmtDate(p.date)}</div>
        <div class="detail-title">${p.title}</div>

        ${p.context ? `
          <div class="meta-label">Context</div>
          <div class="detail-context">${p.context}</div>
        ` : ''}

        ${p.role ? `
          <div class="meta-label">Role</div>
          <div class="detail-role">${p.role}</div>
        ` : ''}

        ${p.status ? `
          <div class="meta-label">Status</div>
          <div class="detail-status" data-status="${p.status}">${p.status}</div>
        ` : ''}

        <div class="meta-label">Main Libraries and Technologies Used</div>
        <div class="tag-row">
          ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="meta-label">Programming Languages Used</div>
        <div class="tag-row">
          ${p.langs.map(l => `<span class="tag">${l}</span>`).join('')}
        </div>
      </div>

      <div class="detail-right">
        ${p.fullTitle ? `<div class="detail-full-title">About</div>` : ''}
        <div class="detail-desc">${p.full}</div>

        ${(p.file || p.link) ? `
          <div class="detail-actions">
            ${p.file ? `<a class="detail-btn" href="${p.file}" download>↓ &nbsp;download report</a>` : ''}
            ${p.link ? `<a class="detail-btn" href="${p.link}" target="_blank" rel="noopener noreferrer">&#10132 &nbsp;More info</a>` : ''}
          </div>
        ` : ''}
      </div>
    </div>

    ${p.images.length ? `
    <div class="detail-imgs">
      ${p.images.map(src => `<img src="${src}" alt="">`).join('')}
    </div>
    ` : ''}
  `;

  // Rivela il contenuto presto — 200ms invece di 420ms.
  // Il testo appare mentre la bolla è ancora in espansione.
  setTimeout(() => {
    detail.classList.add('visible');
    detail.scrollTop = 0;
    document.getElementById('back').classList.add('show');
  }, 200);
}


// ─────────────────────────────────────────
//  DETTAGLIO — CHIUDI
//  Prima sfuma il contenuto, poi collassa la bolla
//  verso il punto di origine.
// ─────────────────────────────────────────

function closeDetail() {
  const detail = document.getElementById('detail');
  const back   = document.getElementById('back');
  const bubble = document.getElementById('bubble');

  // Sfuma il contenuto immediatamente
  detail.classList.remove('visible');
  back.classList.remove('show');

  // Avvia il collasso della bolla dopo una pausa (lascia finire il fade)
  setTimeout(() => {
    bubble.classList.remove('open');
    bubble.classList.add('close');
    // Rimuovi 'close' dopo il completamento dell'animazione (750ms) per resettare la bolla
    setTimeout(() => bubble.classList.remove('close'), 800);
  }, 260);
}


// ─────────────────────────────────────────
//  LIGHTBOX
//  Apre l'immagine originale centrata sullo schermo.
//  Click ovunque sull'overlay per chiudere.
// ─────────────────────────────────────────

function openLightbox(src) {
  const lb    = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  lbImg.src = src;
  lb.classList.add('open');
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
}

// Click sull'overlay — chiude il lightbox
document.getElementById('lightbox').addEventListener('click', closeLightbox);

// Event delegation su #detail — intercetta click sulle immagini della galleria
// senza dover ri-attaccare listener ad ogni apertura del dettaglio
document.getElementById('detail').addEventListener('click', e => {
  if (e.target.matches('.detail-imgs img')) {
    e.stopPropagation();
    openLightbox(e.target.src);
  }
});


// ─────────────────────────────────────────
//  EVENT LISTENERS
// ─────────────────────────────────────────

// Pulsanti di ordinamento — aggiorna stato attivo e ri-renderizza
document.querySelectorAll('.sort-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    sortMode = btn.dataset.sort;
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards();
  });
});

// Input di ricerca — ri-renderizza ad ogni tasto
document.getElementById('searchInput').addEventListener('input', e => {
  query = e.target.value;
  renderCards();
});

// Dropdown filtro tag — ri-renderizza al cambio selezione
document.getElementById('tagFilter').addEventListener('change', e => {
  tagFilter = e.target.value;
  renderCards();
});

// Click sul pulsante back
document.getElementById('back').addEventListener('click', closeDetail);

// Tasto Escape chiude il dettaglio
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDetail();
});


// ─────────────────────────────────────────
//  INIT — primo render all'avvio
// ─────────────────────────────────────────

// Popola il dropdown con i tag univoci presenti nei dati
(function populateTagFilter() {
  const select = document.getElementById('tagFilter');
  const tags = [...new Set(PROJECTS.map(p => p.tag))].sort();
  tags.forEach(tag => {
    const opt = document.createElement('option');
    opt.value = tag;
    opt.textContent = tag.toLowerCase();
    select.appendChild(opt);
  });
})();

renderCards();

if (!SHOW_PROFILE_PHOTO) {
  document.querySelector('.intro-photo').style.display = 'none';
  document.querySelector('.intro').classList.add('no-photo');
}
