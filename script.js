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
    short: 'SVM-based classification of ECG signals into 5 arrhythmia classes using rhythmic feature extraction — ZCR, spectral flux, and STFT — on the MIT-BIH dataset. Built for the CMRM2024 course at Polimi.',
    full: 'Developed a full classification pipeline for ECG arrhythmia detection using the MIT-BIH dataset, targeting five classes: Normal, Fusion of paced and normal, Premature ventricular contraction, Atrial premature, and Fusion of ventricular and normal. Each 187-sample waveform (360 Hz) was normalized with MinMaxScaler and encoded into a 30-dimensional feature vector combining mean and standard deviation of the raw signal, Zero-Crossing Rate, and spectral flux derived from STFT magnitude. A Support Vector Machine was trained and evaluated across multiple kernel types (RBF, linear, polynomial, sigmoid) with systematic hyperparameter search over C, gamma, N, and H. The initial model achieved 89% test accuracy but showed severe class imbalance bias, failing entirely on minority classes S and F. To address this, we applied dataset balancing and custom data augmentation (time-stretching and amplitude scaling). The final best model — RBF kernel, C=10000, gamma=0.1, N=128, H=32 — reached 81.98% accuracy with substantially more equitable per-class recall, reducing overfitting at the cost of raw accuracy. Work done in collaboration with Francesco Crociani.',
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
    short: 'Deep learning challenge in a team. Multivariate time series classification of synthetic pirate pain levels using hybrid CNN + MLP architectures with statistical feature engineering.',
    full: 'Tackled the Pirate Pain Dataset as a supervised multivariate time series classification task, predicting one of three pain levels from joint trajectories and static anatomical attributes. After data analysis revealing class imbalance, weak autocorrelation, and two non-informative features (joint_30 and time), we designed a hybrid architecture with a recurrent/convolutional branch for temporal data and an MLP branch for static one-hot features. Z-score normalization within stratified K-fold splits prevented data leakage. We progressively moved from LSTM/GRU variants to a 1D CNN + Attention model, then replaced raw joint trajectories with temporal derivatives and statistical descriptors (mean, std, peak speed, pain survey counts), removing low-variance joints. The final Features + 1DConv + Attention + MLP model reached a weighted F1 of 0.9473 ± 0.0130 on validation, using majority voting across windows and folds for test predictions. Challenge position: 9th place out of 193 teams.',
    fullTitle: 'AN2DL Challenge 1',
    role: 'ML Engineer',
    tech: ['PyTorch', 'scikit-learn'],
    langs: ['Python'],
    file: 'reports/AN2DL25_Challenge1_Report.pdf',
    link: 'https://www.kaggle.com/competitions/an2dl2526c1/overview',
    status: 'complete',
    images: []
  },
  {
    id: 3,
    title: 'Histopathological Image Classifier',
    tag: 'Challenge',
    date: '2025-12',
    color: '#e8e6e2',
    short: 'Deep learning challenge in a team. Molecular subtype classification of whole-slide histopathological images using patch-based transfer learning and CTrans, a CNN–Transformer pretrained on histopathological data.',
    full: 'Addressed a four-class histopathological image classification task on the Grumpy Doctogres Dataset, distinguishing Luminal A, Luminal B, HER2-enriched, and Triple Negative breast cancer subtypes. The dataset presented class imbalance, corrupted samples (green stains, Shrek images), variable image resolution, and multi-region slides. Outlier removal was initially attempted with ResNet-18 binary classifiers, then reformulated as color-based filtering — achieving near-perfect removal at lower complexity. Images were processed via a patch-based sliding-window strategy guided by binary tissue masks (128×128 to 256×256 patches), avoiding spatial overlap. Custom data augmentation included geometric transforms and mild photometric perturbations, deliberately excluding hue jittering to preserve staining information. At inference, Test-Time Augmentation with softmax averaging improved robustness. Among EfficientNet-B2, ResNet-50, and CTrans, the domain-adapted CTrans model (≈27M parameters, pretrained on histopathological data) achieved the best validation F1 of 0.5060 and a test score of 0.4256. Challenge position: 33th place out of 193 teams.',
    fullTitle: 'AN2DL Challenge 2',
    role: 'ML Engineer',
    tech: ['PyTorch'],
    langs: ['Python'],
    file: 'reports/AN2DL25_Challenge2_Report.pdf',
    link: 'https://www.kaggle.com/competitions/an2dl2526c2v2/overview',
    status: 'complete',
    images: []
  },
  {
    id: 4, 
    title: 'Hand2Hand',
    tag: 'Project',
    date: '2025-05',
    color: '#e8e6e2',
    short: 'Gesture-driven audio performance system using Leap Motion Controller. Four synths and a live effects rack, controlled hands-free via hand tracking — built in SuperCollider, Processing, JUCE and Python.',
    full: 'H2H is a hands-free, gesture-driven audio performance system developed as a group project. The system maps real-time hand motion captured by the Leap Motion Controller to synthesizer selection and parameter control: the left hand switches between four synth engines (Vangelis, AcidBass, EvolvingPad, Pluck) by finger count, while X/Y/Z position and wrist roll sculpt sound parameters live. The right hand independently drives an effects rack (Low/High-Pass, Delay, Distortion, Flanger/Tremolo). A fist gesture freezes all current values for safe improvisation. Under the hood, synth voices respond to standard MIDI Note On/Off messages for keyboard integration. The architecture is modular: Python captures Leap Motion data and relays it via OSC, Processing renders the GUI and forwards messages to SuperCollider, and a JUCE VST3 plugin hosts the effects chain. I contributed to the overall concept, developed the Leap Motion Python integration, and built the real-time GUI in Processing.',
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
    short: 'Web-based circular drum machine with onset detection. Upload or record audio, extract samples automatically, and arrange them in a polyrhythmic grid — all in the browser.',
    full: 'Or-Beat is an interactive web application for creating custom rhythms from real audio. Users upload or record a track (up to 2 minutes), which is analyzed via a spectral flux onset detection algorithm (built with Meyda) to identify significant transient events. The extracted samples are displayed as waveform regions that can be dragged, stretched, and fine-tuned before being dropped into one of six playback slots. From there, samples are assigned to rows in a circular drum machine interface built with P5.js, where each row exposes three parameters — steps, density, and phase — enabling complex polyrhythms and polymeters. BPM is adjustable in real time, and the full session can be exported as an audio file. The app follows an MVC architecture and integrates Tone.js for audio scheduling, Wavesurfer.js for waveform rendering, and GSAP for UI animations. A live demo is publicly accessible on GitHub Pages.',
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
    short: 'Signal processing pipeline for timbre transfer using Nonnegative Matrix Factorization (NMF). Learned spectral templates from environmental sounds (bees, wind, chainsaw) and applied them to Christmas music targets, reconstructing audio via ISTFT and Griffin-Lim.',
    full: 'Developed a full timbre transfer pipeline based solely on signal processing — no neural networks. The approach decomposes the target audio\'s magnitude spectrogram (STFT) via NMF using spectral templates W initialized from a source audio file and randomly initialized activations H, optimized with Kullback-Leibler divergence over 50 iterations with W fixed. The learned H is then applied to the complex-domain source STFT to generate a new spectrogram preserving the target\'s temporal structure with the source\'s timbral color. Audio reconstruction is performed either via Inverse STFT (fast, approximate phase) or the Griffin-Lim algorithm (iterative phase estimation, perceptually superior). Three environmental sound sources — Bees Buzzing, Wind Blowing, Chainsaw Sawing — were transferred onto four Christmas music targets across all 12 source-target combinations. Systematic parameter search over N (window length) and H (hop size) identified per-pair optimal configurations, trading off time and frequency resolution. Timbral similarity between outputs was evaluated using MFCC Euclidean distance. Post-processing strategies discussed include spectral smoothing, pitch shifting, bandpass equalization, and reverb matching. Work done in collaboration with Francesco Crociani.',
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
    short: 'MATLAB implementation of LPC-10 speech coding simulating the Texas Instruments Speak & Spell. Full encoder-decoder pipeline with voiced/unvoiced detection via ZCR, pitch estimation via AMDF, and SNR-evaluated reconstruction.',
    full: 'Implemented a complete LPC-10 speech coding pipeline in MATLAB, replicating the architecture of the Texas Instruments Speak & Spell toy. The encoder downsamples audio to 8 kHz, applies pre-emphasis and Hamming windowing (256 samples, hop 128), then classifies each frame as voiced or unvoiced using Zero-Crossing Rate combined with an energy threshold. Voiced frames use LPC order P=10 (Levinson-Durbin, Yule-Walker equations) while unvoiced frames use P=4, reflecting their lower spectral complexity. Pitch estimation relies on the Average Magnitude Difference Function (AMDF) with a search range of 25–80 samples (100–320 Hz). The decoder reconstructs speech by generating excitation signals — periodic impulse trains for voiced frames, bandpass-filtered white noise for unvoiced — scaled by a computed gain, then filtered through the inverse LPC shaping filter with overlap-and-add reassembly. A low-pass filter on the prediction error (cutoff 800 Hz) consistently improved reconstruction SNR by ~6–7 dB across all test files. Compression ratios evaluated on three audio files showed significant memory reduction (e.g., from 278 kB to 84 kB for ces.wav). Work done in collaboration with Francesco Moretti.',
    fullTitle: 'LPC-10 Speech Coding — DAAP HMW1',
    role: 'DSP Engineer',
    tech: ['LPC', 'AMDF', 'Levinson-Durbin'],
    langs: ['MATLAB'],
    file: 'reports/DAAP_REPORT.pdf',
    link: null,
    status: 'complete',
    images: []
  },
  {
    id: 8, // aggiorna con l'id corretto
    title: 'Cathartic — AI Emotion Driven Audio Visual Installation',
    tag: 'Project',
    date: '2026-06',
    color: '#e8e6e2',
    short: 'Interactive art installation where typed personal text is analyzed for emotional content, generating a real-time adaptive soundscape while the text dissolves into audio-reactive particle simulations.',
    full: 'Cathartic is a real-time interactive installation bridging machine learning, generative audio, and creative coding. Users type personal text on a looping interface; the input is sent via OSC to a Python backend running SamLowe/roberta-base-go_emotions, which classifies the emotional content across multiple affect dimensions. The resulting emotion vector drives a generative soundscape, while in the Processing frontend the text is rasterized into an off-screen PGraphics buffer and its pixels seed a particle system governed by Chladni figure physics — modal potential fields, kick envelope detection, and audio-reactive forces. The experience flows through a state machine: disclaimer → text input → particle dissolution → thank-you screen. Hardware deployment targets a dedicated GPU machine for real-time inference, following evaluation of models including MusicGen, Stable Audio Open, ACE-Step 1.5, and Magenta RT.',
    fullTitle: 'Cathartic — Emotion-Conditioned Audio-Reactive Installation',
    role: 'Concept, AI Model Research, Project Lead, Visuals',
    tech: ['PyTorch', 'AI Emotion Detection', 'OSC', 'AI Generative Audio in Real Time', 'Chladni Figures'],
    langs: ['Processing (Java)', 'Python'],
    file: null,
    link: null,
    status: 'in progress',
    images: []
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
      <div class="card-date">${fmtDate(p.date)}</div>
      <div class="card-body">
        <div class="card-tag">${p.tag}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.short}</div>
        ${p.status ? `<div class="card-status" data-status="${p.status}">${p.status}</div>` : ''}
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
        ${p.fullTitle ? `<div class="detail-full-title">${p.fullTitle}</div>` : ''}
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
