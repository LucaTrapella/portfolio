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
    full: 'Developed at Politecnico di Milano for the Creative Music and Real-time Multimedia course, this project applies machine learning to biomedical signal classification. Working on the MIT-BIH arrhythmia dataset, we built a full pipeline from raw waveform normalization to feature extraction and SVM training. The most interesting challenge was handling severe class imbalance: an initial model hit 89% accuracy but failed entirely on minority classes. Addressing this through dataset balancing and audio-style augmentation — time-stretching and amplitude scaling borrowed from music ML — produced a fairer model with more equitable recall across all five classes. Work done in collaboration with Francesco Crociani.',
    fullTitle: 'ECG Arrhythmia Classification via SVM — CMRM2024',
    role: 'ML Engineer',
    tech: ['scikit-learn', 'librosa', 'Meyda'],
    langs: ['Python'],
    file: 'reports/REPORT_1_CMRM2024.pdf',
    link: null,
    status: 'complete',
    images: []
  },
  {
    id: 2,
    title: 'Multivariate Time Series Classifier',
    tag: 'Challenge',
    date: '2025-11',
    color: '#e8e6e2',
    context: 'Polimi · Artificial Neural Networks and Deep Learning',
    mainTag: 'Deep Learning',
    short: 'Multivariate time series classification using hybrid CNN + Attention architectures. 9th place out of 193 teams.',
    full: 'Part of the Artificial Neural Networks and Deep Learning course at Politecnico di Milano, this Kaggle challenge involved classifying synthetic pain levels from joint trajectory data. The task looked deceptively simple but required careful handling of class imbalance, non-informative features, and the choice between temporal and static input modalities. We evolved the architecture progressively — from LSTM variants to a 1D CNN with Attention — and shifted from raw trajectories to engineered statistical descriptors, which proved decisive. Finishing 9th out of 193 teams, the result reflects both the architectural choices and disciplined cross-validation strategy. Work done in collaboration with Francesco Crociani.',
    fullTitle: 'AN2DL Challenge 1',
    role: ['Data Exploration', 'Patch Extraction', 'Model Development'],
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
    short: 'Breast cancer subtype classification from whole-slide images using patch-based transfer learning and a histopathology-pretrained Transformer.',
    full: 'The second Kaggle challenge of the Artificial Neural Networks and Deep Learning course at Politecnico di Milano pushed into medical imaging territory: classifying four breast cancer molecular subtypes from noisy, variable-resolution whole-slide images. The dataset was adversarial by design — corrupted samples, class imbalance, and multi-region slides. Rather than fighting outliers with a heavy classifier, we reformulated detection as a lightweight color-based filter, which outperformed a dedicated ResNet-18 approach. The strongest model was CTrans, a Transformer pretrained specifically on histopathological data, which generalized better than standard architectures despite the domain complexity. Work done in collaboration with Francesco Crociani.',
    fullTitle: 'AN2DL Challenge 2',
    role: 'ML Engineer',
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
    short: 'Gesture-driven audio performance system controlled entirely by hand tracking via Leap Motion. Four synth engines and a live effects rack — no keyboard, no mouse.',
    full: 'Hand2Hand is a hands-free live performance instrument developed as a group project at Politecnico di Milano. The concept was to make the air between performer and machine into an expressive interface: one hand selects and shapes synth voices, the other sculpts the effects chain in real time. A fist gesture freezes all parameters, enabling safe improvisation without accidental changes. The architecture is deliberately modular — Python handles sensor capture, Processing renders the GUI, SuperCollider generates audio, and a JUCE plugin hosts the effects — with OSC as the communication layer throughout. I led the Leap Motion integration and built the real-time visual interface in Processing.',
    fullTitle: 'H2H — Hand2Hand Computer Music System',
    role: 'Concept · Leap Motion Dev · Processing GUI',
    tech: ['SuperCollider', 'Processing', 'JUCE', 'Python-OSC'],
    langs: ['Python', 'SuperCollider', 'Java', 'C++'],
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
    short: 'Browser-based circular drum machine with automatic onset detection. Upload any audio, extract its transients as samples, and arrange them into a polyrhythmic grid — live in the browser.',
    full: 'Or-Beat started from a simple question: what if your own recordings became the raw material for a rhythm machine, with no manual slicing required? Built as a web application, it runs onset detection directly in the browser to extract transients from uploaded or recorded audio, which users can then arrange into a circular sequencer interface with independent step, density, and phase controls per row. The result is a tool that sits between a sampler and a pattern sequencer, designed for exploring polyrhythm without technical overhead. The full session can be exported as audio. A live demo is available on GitHub Pages.',
    fullTitle: 'Or-Beat — Circular Drum Machine',
    role: 'Concept · Onset Detection Dev · Frontend Dev',
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
    short: 'Timbre transfer via NMF — no neural networks. Spectral templates from bees, wind, and chainsaw audio applied to Christmas music targets.',
    full: 'Developed at Politecnico di Milano for the Creative Music and Real-time Multimedia course, this project explored whether timbre transfer — usually a deep learning task — could be done entirely with classical signal processing. Using NMF to learn spectral templates from environmental sounds and imposing them onto music targets, the pipeline produces outputs that carry the timbral color of one source while preserving the temporal structure of another. The choice of sources — bees buzzing, wind, chainsaw — against Christmas music was deliberately absurd, which made the results both easier to evaluate perceptually and more memorable. Audio reconstruction via Griffin-Lim consistently outperformed direct ISTFT. Work done in collaboration with Francesco Crociani.',
    fullTitle: 'NMF-Based Timbre Transfer — CMRM2024',
    role: 'Signal Processing Engineer',
    tech: ['librosa', 'NMF', 'Griffin-Lim'],
    langs: ['Python'],
    file: 'reports/REPORT_2_CMRM2024.pdf',
    link: null,
    status: 'complete',
    images: []
  },
  {
    id: 7,
    title: 'LPC-10 Speech Coding',
    tag: 'Research',
    date: '2025-04',
    color: '#e8e6e2',
    context: 'MAE (Polimi) · Digital Audio Analysis and Processing',
    mainTag: 'Digital Signal Processing',
    short: 'Full LPC-10 encoder-decoder in MATLAB, replicating the Texas Instruments Speak & Spell.',
    full: 'Built for the Digital Audio and Acoustic Processing course at Politecnico di Milano, this project reconstructed the speech codec behind the iconic Texas Instruments Speak & Spell from scratch in MATLAB. The pipeline covers the full chain from downsampling and windowing through voiced/unvoiced frame classification, pitch estimation, and synthesis-by-filter decoding — the same architecture that made toy speech intelligible on 1970s hardware. The most instructive finding was a simple low-pass filter on the prediction error that consistently improved reconstruction SNR by 6–7 dB across test files, showing how targeted post-processing can outperform architectural complexity. Work done in collaboration with Francesco Moretti.',
    fullTitle: 'LPC-10 Speech Coding — DAAP',
    role: 'DSP Engineer',
    tech: ['LPC', 'AMDF', 'Levinson-Durbin'],
    langs: ['MATLAB'],
    file: 'reports/DAAP_REPORT.pdf',
    link: null,
    status: 'complete',
    images: []
  },
  {
    id: 8,
    title: 'Cathartic — AI Emotion Driven Audio Visual Installation',
    tag: 'Project',
    date: '2026-06',
    color: '#e8e6e2',
    context: 'MAE (Polimi) · Creative Computer and Programming',
    mainTag: 'Generative AI',
    short: 'Interactive installation where typed personal text is analyzed for emotional content, generating a real-time adaptive soundscape while the words dissolve into audio-reactive particle simulations.',
    full: 'Cathartic is an ongoing personal project combining machine learning, generative audio, and creative coding into a single continuous experience. The user types something personal; a transformer-based emotion classifier reads the text and maps its affect dimensions onto a generative soundscape, while in Processing the words themselves are rasterized into particles governed by Chladni figure physics — vibrating, drifting, and dissolving in response to the audio. The piece moves through a deliberate state machine: writing, dissolution, silence. It sits at the intersection of the technical threads running through my master\'s — audio ML, real-time audio-visual systems, and spatial sound — and is the project I\'m most invested in seeing finished.',
    fullTitle: 'Cathartic — Emotion-Conditioned Audio-Reactive Installation',
    role: 'Concept, AI Model Research, Project Lead, Visuals',
    tech: ['PyTorch', 'AI Emotion Detection', 'OSC', 'AI Generative Audio in Real Time', 'Chladni Figures'],
    langs: ['Processing (Java)', 'Python'],
    file: null,
    link: null,
    status: 'in progress',
    images: []
  },
  {
    id: 9,
    title: 'WDF Modeling of a MEMS Loudspeaker',
    tag: 'Research',
    date: '2025-06',
    color: '#e8e6e2',
    context: 'MAE (Polimi) · Sound Synthesis and Spatial Processing',
    mainTag: 'Wave Digital Filters',
    short: 'Wave Digital Filter model of a piezoelectric MEMS loudspeaker, translating the analog circuit topology into a reflection-free digital network. Built for the Sound and Signal Processing for Sound Synthesis course at Politecnico di Milano.',
    full: 'This project models a piezoelectric MEMS loudspeaker using Wave Digital Filters — a methodology that maps analog circuit elements directly into the digital domain while preserving port impedance relationships and avoiding delay-free loops. The circuit topology was decomposed into a tree of series and parallel adaptors, each assigned a port impedance derived symbolically from the component values. The resulting digital network was validated against a state-space reference model, achieving an MSE of 0.0119 with strong agreement in both time and frequency domains across the loudspeaker\'s operating range. Work done in collaboration with Francesco Bandera.',
    fullTitle: 'WDF Model of Piezoelectric MEMS Loudspeaker — SSSP',
    role: 'DSP Engineer',
    tech: ['Wave Digital Filters', 'Circuit Modeling', 'MATLAB'],
    langs: ['MATLAB'],
    file: 'reports/SSSP_REPORT.pdf',
    link: null,
    status: 'complete',
    images: ['images/sssp_1.png', 'images/sssp_2.png', 'images/sssp_3.png']
},
{
  id: 10,
  title: 'Pixel-Level Anomaly Detection',
  tag: 'Challenge',
  date: '2026-05',
  color: '#e8e6e2',
  context: 'Polimi · Advanced Deep Learning',
  mainTag: 'Deep Learning',
  short: 'Multi-class pixel-level anomaly detection on industrial and food objects using few-shot visual inspection.',
  full: 'Part of the Artificial Neural Networks and Deep Learning course at Politecnico di Milano, this Kaggle challenge — codenamed Spacepresso — involved detecting and segmenting anomalies at the pixel level across 8 object categories: resistors, inductors, gears, screws, nuts, coffee pods, pistachios, and capsules. Each sample was captured from 5 different viewpoints, and the training set provided only one labeled anomaly example per class alongside its ground-truth mask, making this a few-shot anomaly detection problem. Textual anomaly descriptions were also available per category, opening the door to vision-language approaches. The evaluation metric was Pixel-Level Average Precision on ~100 unlabeled test samples, with predictions submitted as q8rle-encoded 224×224 masks. The pipeline was designed to run entirely on Google Colab. [Work done in collaboration with ...]',
  fullTitle: 'ADL Challenge',
  role: ['Data Exploration', 'Anomaly Segmentation', 'Model Development'],
  tech: ['PyTorch'],
  langs: ['Python'],
  file: null,
  link: 'https://www.kaggle.com/competitions/adl-2025-2026-anomaly-detection/overview',
  status: 'in progress',
  images: null
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
