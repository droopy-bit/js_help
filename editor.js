/* ─────────────────────────────────────────────
   editor.js — навігація і рендеринг
   ───────────────────────────────────────────── */

const ICONS = {
  types:      '🔤',
  vars:       '📦',
  operators:  '⚙️',
  conditions: '🔀',
  loops:      '🔁',
  functions:  '🛠️',
  strings:    '📝',
  numbers:    '🔢',
  arrays:     '📋',
  objects:    '🗂️',
  advanced:   '🚀',
};

/* ── Утиліти ── */
function esc(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

/* ── Навігація між сторінками ── */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');
}

/* ── Назад до сітки тем ── */
function backToCheatsheet() {
  showPage('cheatsheet');
  document.getElementById('nav-cheatsheet').classList.add('active');
  document.getElementById('header-sub').textContent = 'Обери тему для вивчення';
}

/* ── Відкрити тему ── */
function openTopic(id) {
  const section = DATA.find(s => s.id === id);
  if (!section) return;

  document.getElementById('header-sub').textContent = section.label;

  const container = document.getElementById('detail-content');

  let html = `<div class="detail-title">${ICONS[id] || '📌'} ${section.label}</div>`;

  section.cards.forEach((card, idx) => {
    const codeId = `code-${id}-${idx}`;
    html += `
      <div class="detail-card">
        <div class="detail-card-title">${card.title}</div>
        ${card.desc ? `<div class="detail-card-desc">${card.desc}</div>` : ''}
        <div class="code-block" onclick="sendToPlayground('${codeId}')" title="Клікни щоб відкрити в Playground">
          <pre id="${codeId}" data-code="${esc(card.code)}">${esc(card.code)}</pre>
          <span class="code-hint">▶ Відкрити в Playground</span>
        </div>
      </div>`;
  });

  container.innerHTML = html;

  // Показуємо detail, але nav залишається на cheatsheet
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-detail').classList.add('active');
  document.getElementById('page-detail').scrollTop = 0;
}

/* ── Надіслати код у Playground ── */
function sendToPlayground(codeId) {
  const pre = document.getElementById(codeId);
  if (!pre) return;

  // Декодуємо html entities
  const code = pre.dataset.code
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

  // Пишемо в localStorage — playground.html прочитає при завантаженні
  localStorage.setItem('playground_code', code);

  // Перемикаємо на playground
  showPage('playground');
  document.getElementById('nav-playground').classList.add('active');

  // Якщо iframe вже завантажений — вставляємо код напряму
  const frame = document.getElementById('playground-frame');
  try {
    const ta = frame.contentDocument.getElementById('editor');
    if (ta) {
      ta.value = code;
      showToast('▶ Код відкрито в Playground!');
      return;
    }
  } catch(e) {}

  // Інакше — перезавантажуємо iframe (він сам прочитає localStorage)
  frame.src = 'playground.html';
  showToast('▶ Код відкрито в Playground!');
}

/* ── Сітка тем ── */
function renderTopics(query) {
  const grid = document.getElementById('topics-grid');
  const sections = query
    ? DATA.filter(s =>
        s.label.toLowerCase().includes(query) ||
        s.cards.some(c =>
          c.title.toLowerCase().includes(query) ||
          c.code.toLowerCase().includes(query)
        )
      )
    : DATA;

  if (!sections.length) {
    grid.innerHTML = '<div class="empty">Нічого не знайдено 🔍</div>';
    return;
  }

  grid.innerHTML = sections.map(s => `
    <div class="topic-card" onclick="openTopic('${s.id}')">
      <div class="topic-icon">${ICONS[s.id] || '📌'}</div>
      <div class="topic-name">${s.label}</div>
      <div class="topic-count">${s.cards.length} карток</div>
    </div>
  `).join('');
}

function filterTopics() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  renderTopics(q);
}

/* ── Ініціалізація ── */
renderTopics();
