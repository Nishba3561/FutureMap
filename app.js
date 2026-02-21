/* ============================================================
   FUTUREMAP — app.js
   All application logic: state, navigation, rendering
============================================================ */

/* ── APP STATE ── */
let currentCategory = '';
let currentQ        = 0;
let answers         = [];
let selectedAnswer  = null;

/* ============================================================
   INIT — runs on page load
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  buildCategories();
});

/* ============================================================
   PARTICLES — animated background dots
============================================================ */
function initParticles() {
  const container = document.getElementById('particles');
  const colors = ['#7873f5', '#ff6ec4', '#00eaff', '#ff914d', '#00ffab', '#ffcc00'];

  for (let i = 0; i < 25; i++) {
    const p        = document.createElement('div');
    p.className    = 'particle';
    const size     = Math.random() * 6 + 2;
    const color    = colors[Math.floor(Math.random() * colors.length)];
    const left     = Math.random() * 100;
    const duration = 10 + Math.random() * 20;
    const delay    = -(Math.random() * 20);

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      background: ${color};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    container.appendChild(p);
  }
}

/* ============================================================
   PAGE NAVIGATION
============================================================ */
function showPage(id) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

/* ============================================================
   PAGE 2 — BUILD CATEGORY CARDS
============================================================ */
function buildCategories() {
  const grid = document.getElementById('catGrid');

  Object.entries(DB).forEach(([name, data]) => {
    const card             = document.createElement('div');
    card.className         = 'cat-card';
    card.style.background  = data.color + '33';
    card.style.borderColor = data.color + '66';
    card.innerHTML = `
      <div class="cat-icon">${data.icon}</div>
      ${name}
    `;
    card.onclick = () => startCategory(name);
    grid.appendChild(card);
  });
}

/* ============================================================
   PAGE 3 — START CATEGORY & RENDER QUESTIONS
============================================================ */
function startCategory(name) {
  currentCategory = name;
  currentQ        = 0;
  answers         = [];
  selectedAnswer  = null;

  const data = DB[name];
  const chip = document.getElementById('catChip');
  chip.style.background = data.color + '22';
  chip.style.border     = `1px solid ${data.color}66`;
  chip.style.color      = data.color;
  chip.innerHTML        = `${data.icon} ${name}`;

  showPage('page3');
  renderQuestion();
}

function renderQuestion() {
  const data = DB[currentCategory];
  const q    = data.questions[currentQ];
  selectedAnswer = null;

  document.getElementById('qCounter').textContent =
    `QUESTION ${currentQ + 1} OF ${data.questions.length}`;

  const progress = ((currentQ + 1) / data.questions.length) * 100;
  document.getElementById('progressBar').style.width = progress + '%';

  document.getElementById('qText').textContent = q.q;

  const grid    = document.getElementById('optionsGrid');
  const letters = ['A', 'B', 'C'];
  grid.innerHTML = '';

  q.opts.forEach((optText, i) => {
    const btn     = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span>${optText}`;
    btn.onclick   = () => handleOptionSelect(btn, i, grid);
    grid.appendChild(btn);
  });

  document.getElementById('nextBtn').classList.remove('show');
}

function handleOptionSelect(selectedBtn, index, grid) {
  grid.querySelectorAll('.opt-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  selectedBtn.classList.add('selected');
  selectedAnswer = index;
  document.getElementById('nextBtn').classList.add('show');
}

function nextQuestion() {
  if (selectedAnswer === null) return;

  answers.push(selectedAnswer);
  currentQ++;

  const totalQuestions = DB[currentCategory].questions.length;

  if (currentQ >= totalQuestions) {
    showResults();
  } else {
    renderQuestion();
  }
}

/* ============================================================
   PAGE 4 — SHOW RESULTS
============================================================ */
function showResults() {
  const data = DB[currentCategory];

  document.getElementById('resultsTitle').textContent =
    `Your ${currentCategory} Paths 🎯`;
  document.getElementById('resultsSub').textContent =
    'Based on your answers — click any path to see your roadmap to success';

  const grid = document.getElementById('resultsGrid');
  grid.innerHTML = '';

  data.results.forEach((result, i) => {
    const card                = document.createElement('div');
    card.className            = 'result-card';
    card.style.background     = result.color + '22';
    card.style.borderColor    = result.color + '55';
    card.style.animationDelay = (i * 0.1) + 's';
    card.innerHTML = `
      <div class="result-icon">${result.icon}</div>
      <strong>${result.name}</strong>
      <p>${result.desc}</p>
    `;
    card.onclick = () => showRoadmap(result);
    grid.appendChild(card);
  });

  showPage('page4');
}

/* ============================================================
   PAGE 5 — SHOW ROADMAP
============================================================ */
function showRoadmap(result) {
  const roadmap = ROADMAPS[result.name] || genericRoadmap(result.name, result.color);

  const stepsHTML = roadmap.steps.map(step => `
    <div class="step">
      <div class="step-circle" style="background:${roadmap.color}22; border-color:${roadmap.color}66;">
        ${step.icon}
      </div>
      <div class="step-content">
        <div class="step-label">${step.label}</div>
        <div class="step-title">${step.title}</div>
        <div class="step-desc">${step.desc}</div>
      </div>
    </div>
  `).join('');

  document.getElementById('roadmapContent').innerHTML = `
    <div class="roadmap-title" style="color:${roadmap.color}">
      ${result.icon} ${result.name}
    </div>
    <div class="roadmap-sub">
      Your personalized roadmap to success — follow each phase
    </div>
    <div class="roadmap-steps">
      ${stepsHTML}
    </div>
  `;

  showPage('page5');
}