/**
 * Main Application Bootstrap
 * Shree Ganesh Residency — Ganpati Mahotsav 2026
 * 
 * Initializes all components, data rendering, and interactions
 */

import { dataService } from './utils/dataService.js';
import { initCountdown } from './utils/countdown.js';
import { formatCurrency, calculateTotal, calculateBalance, groupByCategory } from './utils/financeCalc.js';
import { shareOnWhatsApp, shareWebsite } from './utils/sharing.js';
import { initScrollReveal, initStatCounters, formatDate, getDateParts, sanitize } from './utils/animations.js';
import { initGanpati3D } from './components/ganpati3d.js';
import { renderReceiptGenerator } from './components/receiptGenerator.js';
import { translations } from './i18n/translations.js';

// Global Language State
let currentLanguage = localStorage.getItem('sgr_ganpati_lang') || 'en';

// ============================================
// APP INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const settings = await dataService.getSettings();

    // Initialize all sections
    initNavbar();
    initLanguageSwitcher();
    initGanpati3D();
    initCountdown(settings.visarjanDate);
    await renderStats(settings);
    await renderAnnouncements();
    await renderSchedule();
    await renderArchive();
    await renderCommittee();
    await renderSociety();
    await renderFinance();
    renderReceiptGenerator(currentLanguage);
    await renderCompetitions();
    await renderGallery();
    await renderVideos();
    await renderAarti();
    await renderDocuments();
    await renderLocation(settings);
    await renderContacts();
    renderMemories();
    renderQRCode(settings);
    initFABs();
    initScrollReveal();
    initStatCounters();
  } catch (error) {
    console.error('Error initializing app:', error);
  }
});

// ============================================
// MULTI-LANGUAGE I18N ENGINE
// ============================================

function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('sgr_ganpati_lang', lang);
        applyLanguage(lang);
      }
    });
  });

  applyLanguage(currentLanguage);
}

export function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  // Active button highlight
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Dynamic text content update
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Re-render components with language context
  renderFinance();
  renderReceiptGenerator(lang);
}

// ============================================
// NAVBAR
// ============================================

function initNavbar() {
  const toggle = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');
  const links = document.querySelectorAll('.navbar__link');
  const navbar = document.getElementById('navbar');

  if (!toggle || !menu) return;

  // Create overlay for mobile menu
  const overlay = document.createElement('div');
  overlay.className = 'navbar__overlay';
  navbar.appendChild(overlay);

  function closeMenu() {
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openMenu() {
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  // Close menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = { rootMargin: '-20% 0px -80% 0px' };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // Navbar background change on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.background = 'hsla(348, 55%, 18%, 0.98)';
    } else {
      navbar.style.background = 'hsla(348, 55%, 22%, 0.95)';
    }
  }, { passive: true });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
    }
  });
}

// ============================================
// STATS
// ============================================

async function renderStats(settings) {
  const grid = document.getElementById('stats-grid');
  if (!grid) return;

  const stats = [
    { value: settings.totalFlats, label: 'Total Flats', icon: '🏠' },
    { value: settings.totalWings, label: 'Wings', icon: '🏢' },
    { value: settings.totalFloors, label: 'Floors', icon: '🏗️' },
    { value: 2026, label: 'Ganpati Mahotsav', icon: '🙏' },
  ];

  grid.innerHTML = stats.map(stat => `
    <div class="stat-card reveal">
      <span class="stat-card__value" data-target="${stat.value}">0</span>
      <span class="stat-card__label">${sanitize(stat.label)}</span>
    </div>
  `).join('');
}

// ============================================
// ANNOUNCEMENTS
// ============================================

async function renderAnnouncements() {
  const grid = document.getElementById('announcements-grid');
  const toggleBtn = document.getElementById('announcements-toggle');
  if (!grid) return;

  const announcements = await dataService.getAnnouncements();
  const VISIBLE_COUNT = 5;
  let showAll = false;

  function render() {
    const visible = showAll ? announcements : announcements.slice(0, VISIBLE_COUNT);
    grid.innerHTML = visible.map(ann => `
      <article class="announcement-card ${ann.priority === 'high' ? 'announcement-card--high' : ''} reveal">
        <div class="announcement-card__header">
          <span class="badge badge--${ann.category.toLowerCase()}">${sanitize(ann.category)}</span>
          ${ann.priority === 'high' ? '<span class="badge badge--high">🔴 Important</span>' : ''}
          <span class="announcement-card__date">${formatDate(ann.date)}</span>
        </div>
        <h3 class="announcement-card__title">${sanitize(ann.title)}</h3>
        <p class="announcement-card__desc">${sanitize(ann.description)}</p>
      </article>
    `).join('');

    initScrollReveal();
  }

  render();

  if (announcements.length > VISIBLE_COUNT && toggleBtn) {
    toggleBtn.style.display = '';
    toggleBtn.addEventListener('click', () => {
      showAll = !showAll;
      toggleBtn.textContent = showAll ? 'Show Less' : 'View All Announcements';
      render();
    });
  }
}

// ============================================
// SCHEDULE
// ============================================

async function renderSchedule() {
  const filtersEl = document.getElementById('schedule-filters');
  const timelineEl = document.getElementById('schedule-timeline');
  if (!filtersEl || !timelineEl) return;

  const events = await dataService.getEvents();
  const categories = ['All', ...new Set(events.map(e => e.category))];
  let activeFilter = 'All';

  // Render filters
  filtersEl.innerHTML = categories.map(cat => `
    <button class="filter-tab ${cat === 'All' ? 'active' : ''}" data-filter="${cat}" role="tab" aria-selected="${cat === 'All'}">${cat}</button>
  `).join('');

  function renderEvents() {
    const filtered = activeFilter === 'All' ? events : events.filter(e => e.category === activeFilter);
    
    timelineEl.innerHTML = filtered.map(event => {
      const parts = getDateParts(event.date);
      return `
        <article class="schedule-card reveal">
          <div class="schedule-card__date-block">
            <span class="schedule-card__date-day">${parts.day}</span>
            <span class="schedule-card__date-month">${parts.month}</span>
          </div>
          <div class="schedule-card__content">
            <h3 class="schedule-card__name">${sanitize(event.name)}</h3>
            <div class="schedule-card__meta">
              <span>🕐 ${sanitize(event.time)}</span>
              <span>📍 ${sanitize(event.location)}</span>
              <span class="badge badge--${event.category.toLowerCase()}">${sanitize(event.category)}</span>
            </div>
            <p class="schedule-card__desc">${sanitize(event.description)}</p>
          </div>
        </article>
      `;
    }).join('');

    if (filtered.length === 0) {
      timelineEl.innerHTML = '<p class="text-center text-muted">No events in this category.</p>';
    }

    initScrollReveal();
  }

  renderEvents();

  filtersEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-tab')) {
      activeFilter = e.target.dataset.filter;
      filtersEl.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === activeFilter);
        tab.setAttribute('aria-selected', tab.dataset.filter === activeFilter);
      });
      renderEvents();
    }
  });
}

// ============================================
// ARCHIVE (PAST YEARS)
// ============================================

async function renderArchive() {
  const gridEl = document.getElementById('archive-grid');
  const tabsEl = document.getElementById('archive-tabs');
  if (!gridEl) return;

  const archiveData = await dataService.getArchive();
  let currentYear = '2025';

  const renderYearPhotos = (year) => {
    const photos = archiveData[year] || [];
    gridEl.innerHTML = photos
      .map(
        (photo) => `
      <div class="gallery__item reveal">
        <div class="gallery__card" data-img="${photo.url}" data-caption="${sanitize(photo.caption)}">
          <img src="${photo.url}" alt="${sanitize(photo.title)}" loading="lazy" class="gallery__img" />
          <div class="gallery__overlay">
            <span class="gallery__badge">${photo.category}</span>
            <h4 class="gallery__item-title">${sanitize(photo.title)}</h4>
            <p class="gallery__caption">${sanitize(photo.caption)}</p>
          </div>
        </div>
      </div>
    `
      )
      .join('');
  };

  renderYearPhotos(currentYear);

  if (tabsEl) {
    tabsEl.querySelectorAll('.filter-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        tabsEl.querySelectorAll('.filter-tab').forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        currentYear = tab.getAttribute('data-year');
        renderYearPhotos(currentYear);
      });
    });
  }
}

// ============================================
// COMMITTEE
// ============================================

async function renderCommittee() {
  const grid = document.getElementById('committee-grid');
  if (!grid) return;

  const members = await dataService.getCommittee();

  grid.classList.add('reveal-stagger');
  grid.innerHTML = members.map(member => {
    const initials = member.name.split(' ').map(n => n[0]).join('').slice(0, 2);
    return `
      <div class="committee-card">
        <div class="committee-card__avatar">${initials}</div>
        <h3 class="committee-card__name">${sanitize(member.name)}</h3>
        <p class="committee-card__position">${sanitize(member.position)}</p>
        <p class="committee-card__desc">${sanitize(member.description)}</p>
      </div>
    `;
  }).join('');
}

// ============================================
// SOCIETY BUILDING VISUALIZATION
// ============================================

async function renderSociety() {
  const buildingEl = document.getElementById('society-building');
  const tabs = document.querySelectorAll('.society__tab');
  if (!buildingEl) return;

  let activeWing = 'A';

  async function renderWing(wing) {
    const floors = await dataService.getFlats(wing);
    buildingEl.innerHTML = `
      <div class="society__wing reveal">
        ${floors.map(floorData => `
          <div class="society__floor">
            <div class="society__floor-label">Floor ${floorData.floor}</div>
            <div class="society__flats">
              ${floorData.flats.map(flat => `
                <button class="society__flat ${flat.occupied ? 'society__flat--occupied' : ''}"
                        aria-label="Flat ${flat.number}"
                        title="Flat ${flat.number}">
                  ${flat.number}
                </button>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
    initScrollReveal();
  }

  renderWing(activeWing);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activeWing = tab.dataset.wing;
      tabs.forEach(t => {
        t.classList.toggle('active', t.dataset.wing === activeWing);
        t.setAttribute('aria-selected', t.dataset.wing === activeWing);
      });
      renderWing(activeWing);
    });
  });
}

// ============================================
// FINANCE DASHBOARD
// ============================================

let isFinanceUnlocked = false;

async function renderFinance() {
  const summaryEl = document.getElementById('finance-summary');
  const chartsEl = document.getElementById('finance-charts');
  const tablesEl = document.getElementById('finance-tables');
  if (!summaryEl) return;

  if (!isFinanceUnlocked) {
    summaryEl.innerHTML = `
      <div class="budget-locked-card reveal">
        <span class="budget-locked-card__icon">🔒</span>
        <h3 class="budget-locked-card__title">Budget Details Access Protected</h3>
        <p>Financial ledgers, income sources, and expense details are restricted to authorized Mandal committee members and society residents.</p>
        <div class="budget-locked-card__form">
          <input type="password" id="budget-pin-input" class="budget-locked-card__input" placeholder="Enter PIN" maxlength="8" />
          <button id="btn-unlock-budget" class="btn btn--gold">🔓 Unlock Financial Ledger</button>
          <small style="color: rgba(255,255,255,0.7); margin-top: 8px;">💡 Authorized Admin / Resident PIN: <strong style="color:#ffd700;">2026</strong></small>
        </div>
      </div>
    `;
    if (chartsEl) chartsEl.innerHTML = '';
    if (tablesEl) tablesEl.innerHTML = '';

    const pinInput = document.getElementById('budget-pin-input');
    const unlockBtn = document.getElementById('btn-unlock-budget');

    const handleUnlock = () => {
      const pin = pinInput ? pinInput.value.trim() : '';
      if (pin === '2026' || pin.toLowerCase() === 'mandal2026' || pin.toLowerCase() === 'admin') {
        isFinanceUnlocked = true;
        renderFinance();
      } else {
        alert('❌ Incorrect PIN! Please enter valid Admin PIN (2026) or request approval from Mandal Treasurer.');
      }
    };

    if (unlockBtn) unlockBtn.addEventListener('click', handleUnlock);
    if (pinInput) {
      pinInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUnlock();
      });
    }
    return;
  }

  const finance = await dataService.getFinance();
  const totalIncome = calculateTotal(finance.income);
  const totalExpense = calculateTotal(finance.expenses);
  const balance = calculateBalance(finance.income, finance.expenses);

  // Summary cards
  summaryEl.innerHTML = `
    <div class="finance-summary-card finance-summary-card--income reveal">
      <span class="finance-summary-card__label">Total Collection</span>
      <span class="finance-summary-card__value">${formatCurrency(totalIncome)}</span>
    </div>
    <div class="finance-summary-card finance-summary-card--expense reveal">
      <span class="finance-summary-card__label">Total Expense</span>
      <span class="finance-summary-card__value">${formatCurrency(totalExpense)}</span>
    </div>
    <div class="finance-summary-card finance-summary-card--balance reveal">
      <span class="finance-summary-card__label">Balance</span>
      <span class="finance-summary-card__value">${formatCurrency(balance)}</span>
    </div>
  `;

  // Charts
  if (chartsEl) {
    const incomeGroups = groupByCategory(finance.income);
    const expenseGroups = groupByCategory(finance.expenses);

    chartsEl.innerHTML = `
      <div class="finance__chart-card reveal">
        <h3>Income Breakdown</h3>
        <div class="finance__chart-wrapper">
          <canvas id="income-chart"></canvas>
        </div>
      </div>
      <div class="finance__chart-card reveal">
        <h3>Expense Breakdown</h3>
        <div class="finance__chart-wrapper">
          <canvas id="expense-chart"></canvas>
        </div>
      </div>
    `;

    // Dynamically import Chart.js
    try {
      const { Chart, DoughnutController, ArcElement, Tooltip, Legend } = await import('https://cdn.jsdelivr.net/npm/chart.js/+esm');
      Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

      const chartColors = [
        'hsl(22, 85%, 52%)', 'hsl(43, 80%, 52%)', 'hsl(145, 55%, 42%)',
        'hsl(210, 70%, 50%)', 'hsl(280, 50%, 50%)', 'hsl(348, 55%, 45%)',
        'hsl(160, 50%, 45%)', 'hsl(38, 90%, 50%)',
      ];

      const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 16,
              usePointStyle: true,
              pointStyleWidth: 10,
              font: { family: 'Outfit', size: 12 },
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${formatCurrency(ctx.raw)}`,
            },
          },
        },
      };

      // Income Chart
      const incomeCtx = document.getElementById('income-chart');
      if (incomeCtx) {
        new Chart(incomeCtx, {
          type: 'doughnut',
          data: {
            labels: Object.keys(incomeGroups),
            datasets: [{
              data: Object.values(incomeGroups),
              backgroundColor: chartColors.slice(0, Object.keys(incomeGroups).length),
              borderWidth: 2,
              borderColor: '#ffffff',
            }],
          },
          options: chartOptions,
        });
      }

      // Expense Chart
      const expenseCtx = document.getElementById('expense-chart');
      if (expenseCtx) {
        new Chart(expenseCtx, {
          type: 'doughnut',
          data: {
            labels: Object.keys(expenseGroups),
            datasets: [{
              data: Object.values(expenseGroups),
              backgroundColor: chartColors.slice(0, Object.keys(expenseGroups).length),
              borderWidth: 2,
              borderColor: '#ffffff',
            }],
          },
          options: chartOptions,
        });
      }
    } catch (err) {
      console.warn('Chart.js could not be loaded:', err);
      chartsEl.innerHTML = '<p class="text-center text-muted">Charts could not be loaded.</p>';
    }
  }

  // Tables
  if (tablesEl) {
    tablesEl.innerHTML = `
      <div class="finance__table-card reveal">
        <h3>💰 Income Details</h3>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${finance.income.map(item => `
                <tr>
                  <td>${sanitize(item.category)}</td>
                  <td>${sanitize(item.description)}</td>
                  <td class="amount">${formatCurrency(item.amount)}</td>
                </tr>
              `).join('')}
              <tr style="font-weight: 700; border-top: 2px solid var(--color-border);">
                <td colspan="2">Total Income</td>
                <td class="amount">${formatCurrency(totalIncome)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="finance__table-card reveal">
        <h3>📊 Expense Details</h3>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${finance.expenses.map(item => `
                <tr>
                  <td>${sanitize(item.category)}</td>
                  <td>${sanitize(item.description)}</td>
                  <td class="amount">${formatCurrency(item.amount)}</td>
                </tr>
              `).join('')}
              <tr style="font-weight: 700; border-top: 2px solid var(--color-border);">
                <td colspan="2">Total Expenses</td>
                <td class="amount">${formatCurrency(totalExpense)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

// ============================================
// EVENTS & COMPETITIONS
// ============================================

async function renderCompetitions() {
  const filtersEl = document.getElementById('events-filters');
  const gridEl = document.getElementById('events-grid');
  if (!filtersEl || !gridEl) return;

  const competitions = await dataService.getCompetitions();
  const statuses = ['All', 'Open', 'Upcoming', 'Completed'];
  let activeStatus = 'All';

  filtersEl.innerHTML = statuses.map(status => `
    <button class="filter-tab ${status === 'All' ? 'active' : ''}" data-filter="${status}" role="tab" aria-selected="${status === 'All'}">${status}</button>
  `).join('');

  function renderCards() {
    const filtered = activeStatus === 'All' ? competitions : competitions.filter(c => c.status === activeStatus);

    gridEl.innerHTML = filtered.map(comp => `
      <article class="event-card reveal">
        <div class="event-card__header">
          <h3 class="event-card__name">${sanitize(comp.name)}</h3>
          <span class="badge badge--${comp.status.toLowerCase()}">${sanitize(comp.status)}</span>
        </div>
        <div class="event-card__meta">
          <span>📅 ${formatDate(comp.date)}</span>
          <span>🕐 ${sanitize(comp.time)}</span>
          <span>📍 ${sanitize(comp.location)}</span>
        </div>
        <p class="event-card__desc">${sanitize(comp.description)}</p>
        <span class="event-card__eligibility">👥 ${sanitize(comp.eligibility)}</span>
        ${comp.winner ? `<p class="text-gold font-bold">🏆 Winner: ${sanitize(comp.winner)}</p>` : ''}
      </article>
    `).join('');

    if (filtered.length === 0) {
      gridEl.innerHTML = '<p class="text-center text-muted">No events in this category.</p>';
    }

    initScrollReveal();
  }

  renderCards();

  filtersEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-tab')) {
      activeStatus = e.target.dataset.filter;
      filtersEl.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === activeStatus);
        tab.setAttribute('aria-selected', tab.dataset.filter === activeStatus);
      });
      renderCards();
    }
  });
}

// ============================================
// PHOTO GALLERY
// ============================================

async function renderGallery() {
  const filtersEl = document.getElementById('gallery-filters');
  const gridEl = document.getElementById('gallery-grid');
  if (!filtersEl || !gridEl) return;

  const images = await dataService.getGallery();
  const categories = ['All', ...new Set(images.map(img => img.category))];
  let activeCategory = 'All';
  let currentImageIndex = 0;
  let filteredImages = images;

  // Render filters
  filtersEl.innerHTML = categories.map(cat => `
    <button class="filter-tab ${cat === 'All' ? 'active' : ''}" data-filter="${cat}" role="tab" aria-selected="${cat === 'All'}">${cat}</button>
  `).join('');

  function renderGrid() {
    filteredImages = activeCategory === 'All' ? images : images.filter(img => img.category === activeCategory);

    gridEl.innerHTML = filteredImages.map((img, idx) => `
      <div class="gallery-item" data-index="${idx}" role="button" tabindex="0" aria-label="View ${sanitize(img.title)}">
        <img class="gallery-item__img" src="${img.url}" alt="${sanitize(img.title)}" loading="lazy" />
        <div class="gallery-item__overlay">
          <span class="gallery-item__caption">${sanitize(img.title)}</span>
        </div>
      </div>
    `).join('');

    if (filteredImages.length === 0) {
      gridEl.innerHTML = '<p class="text-center text-muted">No photos in this category yet.</p>';
    }
  }

  renderGrid();

  // Filter click handler
  filtersEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-tab')) {
      activeCategory = e.target.dataset.filter;
      filtersEl.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === activeCategory);
        tab.setAttribute('aria-selected', tab.dataset.filter === activeCategory);
      });
      renderGrid();
    }
  });

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox__close');
  const lightboxPrev = document.querySelector('.lightbox__prev');
  const lightboxNext = document.querySelector('.lightbox__next');

  function openLightbox(index) {
    if (!filteredImages[index]) return;
    currentImageIndex = index;
    lightboxImg.src = filteredImages[index].url;
    lightboxImg.alt = filteredImages[index].title;
    lightboxCaption.textContent = `${filteredImages[index].title} — ${filteredImages[index].caption}`;
    lightbox.hidden = false;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    openLightbox(currentImageIndex);
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    openLightbox(currentImageIndex);
  }

  gridEl.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) {
      openLightbox(parseInt(item.dataset.index, 10));
    }
  });

  gridEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const item = e.target.closest('.gallery-item');
      if (item) {
        e.preventDefault();
        openLightbox(parseInt(item.dataset.index, 10));
      }
    }
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
}

// ============================================
// VIDEOS
// ============================================

async function renderVideos() {
  const gridEl = document.getElementById('videos-grid');
  if (!gridEl) return;

  const videos = await dataService.getVideos();

  gridEl.innerHTML = videos.map(video => `
    <div class="video-card reveal">
      <div class="video-card__thumb" data-youtube-id="${video.youtubeId}" role="button" tabindex="0" aria-label="Play ${sanitize(video.title)}">
        <img src="${video.thumbnail}" alt="${sanitize(video.title)}" loading="lazy" />
        <div class="video-card__play">
          <div class="video-card__play-icon">▶</div>
        </div>
      </div>
      <div class="video-card__info">
        <h3 class="video-card__title">${sanitize(video.title)}</h3>
        <p class="video-card__date">${formatDate(video.date)}</p>
        <p class="video-card__desc">${sanitize(video.description)}</p>
      </div>
    </div>
  `).join('');

  // Click to load YouTube iframe (lazy)
  gridEl.addEventListener('click', (e) => {
    const thumb = e.target.closest('.video-card__thumb');
    if (thumb) {
      const ytId = thumb.dataset.youtubeId;
      const wrapper = document.createElement('div');
      wrapper.className = 'video-card__iframe-wrapper';
      wrapper.innerHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
      thumb.replaceWith(wrapper);
    }
  });
}

// ============================================
// AARTI
// ============================================

async function renderAarti() {
  const gridEl = document.getElementById('aarti-grid');
  if (!gridEl) return;

  const aartis = await dataService.getAarti();

  const typeIcons = {
    'Morning': '🌅',
    'Evening': '🪔',
    'Special': '✨',
  };

  gridEl.innerHTML = aartis.map((aarti, idx) => `
    <div class="aarti-card reveal">
      <div class="aarti-card__header" role="button" tabindex="0" aria-expanded="false" data-index="${idx}">
        <div class="aarti-card__header-left">
          <span class="aarti-card__icon">${typeIcons[aarti.type] || '🙏'}</span>
          <h3 class="aarti-card__name">${sanitize(aarti.name)}</h3>
          <span class="aarti-card__time">🕐 ${sanitize(aarti.time)}</span>
          <span class="aarti-card__type">${sanitize(aarti.description)}</span>
        </div>
        <span class="aarti-card__toggle" aria-hidden="true">▼</span>
      </div>
      <div class="aarti-card__body" id="aarti-body-${idx}">
        <div class="aarti-card__lyrics">${sanitize(aarti.lyrics)}</div>
      </div>
    </div>
  `).join('');

  // Accordion toggle
  gridEl.addEventListener('click', (e) => {
    const header = e.target.closest('.aarti-card__header');
    if (header) {
      const idx = header.dataset.index;
      const body = document.getElementById(`aarti-body-${idx}`);
      const toggle = header.querySelector('.aarti-card__toggle');
      const isOpen = body.classList.contains('open');

      body.classList.toggle('open');
      toggle.classList.toggle('open');
      header.setAttribute('aria-expanded', !isOpen);
    }
  });

  gridEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const header = e.target.closest('.aarti-card__header');
      if (header) {
        e.preventDefault();
        header.click();
      }
    }
  });
}

// ============================================
// DOCUMENTS
// ============================================

async function renderDocuments() {
  const filtersEl = document.getElementById('documents-filters');
  const gridEl = document.getElementById('documents-grid');
  if (!filtersEl || !gridEl) return;

  const documents = await dataService.getDocuments();
  const categories = ['All', ...new Set(documents.map(d => d.category))];
  let activeCategory = 'All';

  filtersEl.innerHTML = categories.map(cat => `
    <button class="filter-tab ${cat === 'All' ? 'active' : ''}" data-filter="${cat}" role="tab" aria-selected="${cat === 'All'}">${cat}</button>
  `).join('');

  function renderDocs() {
    const filtered = activeCategory === 'All' ? documents : documents.filter(d => d.category === activeCategory);

    gridEl.innerHTML = filtered.map(doc => `
      <div class="document-card reveal">
        <div class="document-card__icon">📄</div>
        <div class="document-card__info">
          <h3 class="document-card__title">${sanitize(doc.title)}</h3>
          <p class="document-card__date">${formatDate(doc.date)} • ${sanitize(doc.category)}</p>
          <p class="document-card__desc">${sanitize(doc.description)}</p>
          <div class="document-card__actions">
            <a href="${doc.url}" class="btn btn--sm btn--outline-dark" target="_blank" rel="noopener noreferrer">View</a>
            <a href="${doc.url}" class="btn btn--sm btn--primary" download target="_blank" rel="noopener noreferrer">Download</a>
          </div>
        </div>
      </div>
    `).join('');

    if (filtered.length === 0) {
      gridEl.innerHTML = '<p class="text-center text-muted">No documents in this category.</p>';
    }

    initScrollReveal();
  }

  renderDocs();

  filtersEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-tab')) {
      activeCategory = e.target.dataset.filter;
      filtersEl.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === activeCategory);
        tab.setAttribute('aria-selected', tab.dataset.filter === activeCategory);
      });
      renderDocs();
    }
  });
}

// ============================================
// LOCATION
// ============================================

async function renderLocation(settings) {
  const contentEl = document.getElementById('location-content');
  if (!contentEl) return;

  contentEl.innerHTML = `
    <div class="location__info reveal">
      <h3 class="location__name">${sanitize(settings.societyName)}</h3>
      <p class="location__address">${sanitize(settings.address)}</p>
      <div class="location__buttons">
        <a href="${settings.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
          📍 Open in Google Maps
        </a>
        <a href="${settings.mapUrl}&travelmode=driving" target="_blank" rel="noopener noreferrer" class="btn btn--outline-dark">
          🧭 Get Directions
        </a>
      </div>
    </div>
    <div class="location__map-placeholder reveal" aria-label="Map placeholder">
      🗺️
    </div>
  `;
}

// ============================================
// CONTACTS
// ============================================

async function renderContacts() {
  const gridEl = document.getElementById('contact-grid');
  if (!gridEl) return;

  const contacts = await dataService.getContacts();

  gridEl.classList.add('reveal-stagger');
  gridEl.innerHTML = contacts.map(contact => `
    <div class="contact-card">
      <div class="contact-card__icon">${contact.icon}</div>
      <h3 class="contact-card__role">${sanitize(contact.role)}</h3>
      <p class="contact-card__name">${sanitize(contact.name)}</p>
      <p class="text-muted" style="font-size: 0.8rem; margin-bottom: 12px;">${sanitize(contact.description)}</p>
      <a href="tel:${contact.phone}" class="contact-card__phone" aria-label="Call ${contact.role}">
        📞 ${sanitize(contact.phone)}
      </a>
    </div>
  `).join('');
}

// ============================================
// MEMORIES
// ============================================

function renderMemories() {
  const timelineEl = document.getElementById('memories-timeline');
  if (!timelineEl) return;

  const years = [
    { year: 2026, label: 'Current Year ✨', current: true },
    { year: 2025, label: 'Last Year', current: false },
    { year: 2024, label: 'Memories', current: false },
    { year: 2023, label: 'Memories', current: false },
  ];

  timelineEl.classList.add('reveal-stagger');
  timelineEl.innerHTML = years.map(y => `
    <div class="memory-card ${y.current ? 'memory-card--current' : ''}">
      <div class="memory-card__year">${y.year}</div>
      <div class="memory-card__label">${sanitize(y.label)}</div>
    </div>
  `).join('');
}

// ============================================
// QR CODE
// ============================================

function renderQRCode(settings) {
  const contentEl = document.getElementById('qrcode-content');
  if (!contentEl) return;

  // Generate a simple QR code using SVG (no external dependency)
  contentEl.innerHTML = `
    <div class="qrcode__box reveal">
      <div class="qrcode__canvas" style="width: 200px; height: 200px; margin: 0 auto; background: white; border: 8px solid var(--color-secondary); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 8px;">
        <span style="font-size: 48px;">📱</span>
        <span style="font-size: 12px; color: var(--color-text-muted); padding: 0 16px; text-align: center;">QR Code will be generated with the final website URL</span>
      </div>
      <p class="qrcode__text" style="margin-top: 16px;">Share this QR on notice boards, posters & invitation cards</p>
      <p class="qrcode__url">${sanitize(settings.websiteUrl)}</p>
    </div>
    <button class="btn btn--primary" id="btn-share-website" style="margin-top: 16px;">
      📤 Share Ganpati Website
    </button>
  `;

  const shareBtn = document.getElementById('btn-share-website');
  if (shareBtn) {
    shareBtn.addEventListener('click', shareWebsite);
  }
}

// ============================================
// FLOATING ACTION BUTTONS
// ============================================

function initFABs() {
  const whatsappFab = document.getElementById('fab-whatsapp');
  const shareFab = document.getElementById('fab-share');

  if (whatsappFab) {
    whatsappFab.addEventListener('click', shareOnWhatsApp);
  }

  if (shareFab) {
    shareFab.addEventListener('click', shareWebsite);
  }
}
