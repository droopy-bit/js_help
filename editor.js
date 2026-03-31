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

/* ── Розумний пошук ── */

// Синоніми і ключові слова для кожної карточки
const KEYWORDS = {
  // Масиви
  'push': ['arrays'], 'pop': ['arrays'], 'shift': ['arrays'], 'unshift': ['arrays'],
  'додати': ['arrays'], 'видалити': ['arrays'], 'масив': ['arrays'],
  'indexOf': ['arrays', 'strings'], 'includes': ['arrays', 'strings'],
  'split': ['arrays', 'strings'], 'join': ['arrays', 'strings'],
  'at': ['arrays'], 'length': ['arrays', 'strings'],

  // Об'єкти
  'обєкт': ['objects'], "об'єкт": ['objects'], 'object': ['objects'],
  'деструктур': ['objects'], 'клонувати': ['objects'], 'копіювати': ['objects'],
  'spread': ['objects'], 'freeze': ['objects'], 'delete': ['objects'],
  'keys': ['objects'], 'values': ['objects'], 'entries': ['objects'],
  'посилання': ['objects'], 'reference': ['objects'],

  // Функції
  'функція': ['functions'], 'function': ['functions'], 'стрілкова': ['functions'],
  'arrow': ['functions'], 'return': ['functions'], 'jsdoc': ['functions'],
  'параметр': ['functions'], 'аргумент': ['functions'], 'замовчуванням': ['functions'],

  // Цикли
  'цикл': ['loops'], 'loop': ['loops'], 'for': ['loops'],
  'перебрати': ['loops'], 'ітерація': ['loops'], 'повторити': ['loops'],

  // Умови
  'if': ['conditions'], 'else': ['conditions'], 'умова': ['conditions'],
  'switch': ['conditions'], 'перевірити': ['conditions'],

  // Рядки
  'рядок': ['strings'], 'string': ['strings'], 'текст': ['strings'],
  'toLowerCase': ['strings'], 'toUpperCase': ['strings'], 'replace': ['strings'],
  'trim': ['strings'], 'substring': ['strings'], 'slice': ['strings'],
  'startsWith': ['strings'], 'endsWith': ['strings'], 'символ': ['strings'],

  // Числа
  'число': ['numbers'], 'number': ['numbers'], 'округлити': ['numbers'],
  'random': ['numbers'], 'випадков': ['numbers'], 'Math': ['numbers'],
  'floor': ['numbers'], 'ceil': ['numbers'], 'parseInt': ['numbers'],

  // Типи
  'typeof': ['types'], 'тип': ['types'], 'boolean': ['types'],
  'null': ['types'], 'undefined': ['types'], 'NaN': ['types'],
  'конвертувати': ['types'], 'перетворити': ['types'],

  // Змінні
  'let': ['vars'], 'const': ['vars'], 'var': ['vars'],
  'змінна': ['vars'], 'назва': ['vars'], 'camelCase': ['vars'],

  // Advanced
  'this': ['advanced'], 'call': ['advanced'], 'apply': ['advanced'],
  'bind': ['advanced'], 'promise': ['advanced'], 'async': ['advanced'],
  'await': ['advanced'], 'прототип': ['advanced'], 'prototype': ['advanced'],
  'замикання': ['advanced'], 'closure': ['advanced'],
};

function smartSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const words = q.split(/\s+/);
  const scores = {}; // sectionId -> score
  const matchedCards = {}; // sectionId -> [cards]

  DATA.forEach(section => {
    section.cards.forEach((card, idx) => {
      let score = 0;
      const haystack = (card.title + ' ' + card.desc + ' ' + card.code).toLowerCase();

      words.forEach(word => {
        // Пряме входження в назву
        if (card.title.toLowerCase().includes(word)) score += 10;
        // Входження в опис
        if (card.desc && card.desc.toLowerCase().includes(word)) score += 6;
        // Входження в код
        if (card.code.toLowerCase().includes(word)) score += 4;
        // Входження в назву теми
        if (section.label.toLowerCase().includes(word)) score += 3;
        // Синоніми
        Object.keys(KEYWORDS).forEach(kw => {
          if (word.includes(kw) || kw.includes(word)) {
            if (KEYWORDS[kw].includes(section.id)) score += 5;
          }
        });
      });

      if (score > 0) {
        if (!matchedCards[section.id]) {
          matchedCards[section.id] = [];
          scores[section.id] = 0;
        }
        scores[section.id] += score;
        matchedCards[section.id].push({ card, idx, score });
      }
    });
  });

  // Сортуємо секції за релевантністю
  const result = Object.keys(scores)
    .sort((a, b) => scores[b] - scores[a])
    .map(id => ({
      section: DATA.find(s => s.id === id),
      cards: matchedCards[id].sort((a, b) => b.score - a.score).slice(0, 3)
    }));

  return result;
}

function doSearch() {
  const q = document.getElementById('smart-search').value.trim();
  const resultsEl = document.getElementById('search-results');

  if (!q) {
    resultsEl.innerHTML = '<div class="search-empty">Введи питання щоб знайти відповідь...</div>';
    return;
  }

  const results = smartSearch(q);

  if (!results.length) {
    resultsEl.innerHTML = `<div class="search-empty">Нічого не знайдено по запиту "<b>${esc(q)}</b>"<br><br>Спробуй інакше, наприклад: "як додати елемент", "що таке this", "як перебрати масив"</div>`;
    return;
  }

  let html = '';
  results.forEach(({ section, cards }) => {
    html += `<div class="search-section-label">${ICONS[section.id] || '📌'} ${section.label}</div>`;
    cards.forEach(({ card, idx }) => {
      const codeId = `sq-${section.id}-${idx}`;
      html += `
        <div class="detail-card">
          <div class="detail-card-title">${card.title}</div>
          ${card.desc ? `<div class="detail-card-desc">${card.desc}</div>` : ''}
          <div class="code-block" onclick="sendToPlayground('${codeId}')" title="Відкрити в Playground">
            <pre id="${codeId}" data-code="${esc(card.code)}">${esc(card.code)}</pre>
            <span class="code-hint">▶ Відкрити в Playground</span>
          </div>
        </div>`;
    });
  });

  resultsEl.innerHTML = html;
}
