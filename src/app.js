import { varganiCollection, numberToMarathiWords } from './data/varganiData.js';

// ============================================
// i18n TRANSLATIONS
// ============================================
const i18n = {
  mr: {
    brand: "सार्वोदय गार्डन गणेशोत्सव २०२६", navHome: "मुख्यपृष्ठ", navCelebrations: "सोहळा", navEvents: "कार्यक्रम",
    navArchive: "मागील सोहळे", navMembers: "कार्यकारिणी", navFinance: "आर्थिक व्यवहार",
    navReceipts: "वर्गणी पावती", navContact: "संपर्क",
    societyName: "सार्वोदय गार्डन मित्र मंडळ", heroTitle: "सार्वोदय गार्डन गणेशोत्सव २०२६",
    heroTagline: "॥ गणपती बाप्पा मोरया ॥", heroSubtitle: "श्रद्धा • एकता • परंपरा • संस्कृती",
    bappaBadge: "श्री गणपती बाप्पा प्रसन्न २०२६",
    countdownTitle: "🎉 श्री गणपती स्थापना काउन्टडाऊन (१४ सप्टेंबर २०२६)", days: "दिवस", hours: "तास", minutes: "मिनिटे", seconds: "सेकंद",
    btnSchedule: "वेळापत्रक पहा", btnFinance: "आर्थिक तपशील", btnReceipts: "वर्गणी पावती",
    celebrationsBadge: "📸 आठवणींचे दालन", celebrationsTitle: "मागील वर्षांचे गणेशोत्सव क्षणचित्रे", celebrationsSubtitle: "आपल्या सार्वोदय गार्डन सोसायटीच्या मागील वर्षांच्या अविस्मरणीय आठवणींचा फोटो संग्रह",
    eventsBadge: "📅 कार्यक्रम", eventsTitle: "कार्यक्रम वेळापत्रक", eventsSubtitle: "दैनंदिन कार्यक्रम व आरती वेळापत्रक",
    archiveBadge: "📜 सुवर्ण आठवणी", archiveTitle: "वर्षांनुसार फोटो संग्रह", archiveSubtitle: "वर्ष निवडा आणि मागील सोहळ्यांची चित्रे पहा",
    membersBadge: "👥 कार्यकारिणी", membersTitle: "कार्यकारिणी मंडळ", membersSubtitle: "गणेशोत्सव यशस्वी करणाऱ्या कार्यकर्त्यांची टीम",
    financeBadge: "💰 पारदर्शकता", financeTitle: "आर्थिक पारदर्शकता", financeSubtitle: "गणपती महोत्सव २०२६ चा संपूर्ण जमा-खर्च हिशोब",
    budgetLockedTitle: "🔒 बजेट माहिती सुरक्षित", budgetLockedDesc: "जमा-खर्चाचा तपशील फक्त अधिकृत सदस्यांसाठी.", btnUnlock: "🔓 बजेट हिशोब पहा", pinPlaceholder: "पिन टाका", pinHint: "💡 अधिकृत पिन: 2026",
    totalCollection: "एकूण जमा वर्गणी", totalExpense: "एकूण खर्च", netBalance: "शिल्लक बँक रक्कम",
    receiptsBadge: "🧾 वर्गणी पावती", receiptsTitle: "देणगी पावती डाऊनलोड", receiptsSubtitle: "आपल्या वर्गणीची अधिकृत डिजिटल पावती मिळवा",
    selectWing: "विंग निवडा:", selectFlat: "फ्लॅट नंबर निवडा:", btnGenReceipt: "📄 पावती पहा", btnPrint: "🖨️ प्रिंट / PDF डाऊनलोड",
    recSociety: "Sarvoday Garden Mitra mandal", recSubtitle: "आयोजित सार्वजनिक गणेशोत्सव २०२६", recDengi: "◆ देणगी पावती ◆",
    recPavtiNo: "पावती क्र.", recDate: "दिनांक", recFrom: "श्री./श्रीमती/मेसर्स", recYanjakdun: "यांजकडून",
    recVargani: "वर्गणी / देणगी रु.", recAmountWords: "दोन हजार रुपये फक्त", recThanks: "द्वारे मिळाले, धन्यवाद !",
    recFooter: "॥ गणपती बाप्पा मोरया ॥",
    contactBadge: "📞 संपर्क", contactTitle: "संपर्क माहिती", contactSubtitle: "महोत्सव व्यवस्थापन आणि चौकशीसाठी",
    footerMotto: "श्रद्धा • एकता • परंपरा • संस्कृती",
    footerCopy: "© २०२६ सार्वोदय गार्डन मित्र मंडळ. सर्व हक्क सुरक्षित."
  },
  hi: {
    brand: "सार्वोदय गार्डन गणेशोत्सव 2026", navHome: "मुख्य पृष्ठ", navCelebrations: "समारोह", navEvents: "कार्यक्रम",
    navArchive: "पिछले उत्सव", navMembers: "समिति", navFinance: "वित्त (बजट)",
    navReceipts: "रसीद डाउनलोड", navContact: "संपर्क",
    societyName: "सार्वोदय गार्डन मित्र मंडल", heroTitle: "सार्वोदय गार्डन गणेशोत्सव 2026",
    heroTagline: "॥ गणपति बप्पा मोरया ॥", heroSubtitle: "श्रद्धा • एकता • परंपरा • समाज सेवा",
    bappaBadge: "श्री गणपति बप्पा प्रसन्न 2026",
    countdownTitle: "🎉 श्री गणपति स्थापना उल्टी गिनती (14 सितंबर 2026)", days: "दिन", hours: "घंटे", minutes: "मिनट", seconds: "सेकंड",
    btnSchedule: "कार्यक्रम देखें", btnFinance: "वित्तीय विवरण", btnReceipts: "वर्गणी रसीद",
    celebrationsBadge: "📸 पुरानी यादें", celebrationsTitle: "विगत वर्षों के उत्सव की झलकियां", celebrationsSubtitle: "हमारी सोसायटी के पिछले वर्षों के गणेशोत्सव की सुंदर तस्वीरें",
    eventsBadge: "📅 कार्यक्रम", eventsTitle: "कार्यक्रम सूची", eventsSubtitle: "दैनिक कार्यक्रम और आरती की समय सारणी",
    archiveBadge: "📜 पुरानी यादें", archiveTitle: "वर्षानुसार फोटो संग्रह", archiveSubtitle: "हमारी सोसायटी के गणेशोत्सव की अविस्मरणीय यादें",
    membersBadge: "👥 समिति", membersTitle: "कार्यकारिणी समिति", membersSubtitle: "गणेशोत्सव को सफल बनाने वाली टीम",
    financeBadge: "💰 पारदर्शिता", financeTitle: "वित्तीय पारदर्शिता", financeSubtitle: "गणपति महोत्सव 2026 का संपूर्ण आय-व्यय विवरण",
    budgetLockedTitle: "🔒 बजट विवरण", budgetLockedDesc: "आय-व्यय का विवरण केवल अधिकृत सदस्यों के लिए.", btnUnlock: "🔓 बजट विवरण देखें", pinPlaceholder: "पिन दर्ज करें", pinHint: "💡 अधिकृत पिन: 2026",
    totalCollection: "कुल जमा चंदा", totalExpense: "कुल खर्च", netBalance: "शेष बैंक राशि",
    receiptsBadge: "🧾 वर्गणी रसीद", receiptsTitle: "चंदा रसीद डाउनलोड", receiptsSubtitle: "अपनी वर्गणी रसीद देखें और डाउनलोड करें",
    selectWing: "विंग चुनें:", selectFlat: "फ्लैट नंबर चुनें:", btnGenReceipt: "📄 रसीद देखें", btnPrint: "🖨️ प्रिंट / PDF डाउनलोड",
    recSociety: "Sarvoday Garden Mitra mandal", recSubtitle: "आयोजित सार्वजनिक गणेशोत्सव 2026", recDengi: "◆ चंदा रसीद ◆",
    recPavtiNo: "रसीद संख्या", recDate: "दिनांक", recFrom: "श्री/श्रीमती/मेसर्स", recYanjakdun: "की ओर से",
    recVargani: "वर्गणी / चंदा रु.", recAmountWords: "दो हजार रुपये मात्र", recThanks: "द्वारा प्राप्त, धन्यवाद !",
    recFooter: "॥ गणपति बप्पा मोरया ॥",
    contactBadge: "📞 संपर्क", contactTitle: "संपर्क जानकारी", contactSubtitle: "महोत्सव प्रबंधन और पूछताछ के लिए",
    footerMotto: "श्रद्धा • एकता • परंपरा • समाज सेवा",
    footerCopy: "© 2026 सार्वोदय गार्डन मित्र मंडल. सर्वाधिकार सुरक्षित."
  },
  en: {
    brand: "Sarvoday Garden Ganeshotsav 2026", navHome: "Home", navCelebrations: "Celebrations", navEvents: "Events",
    navArchive: "Archive", navMembers: "Members", navFinance: "Finance",
    navReceipts: "Receipts", navContact: "Contact",
    societyName: "Sarvoday Garden Mitra Mandal", heroTitle: "Sarvoday Garden Ganeshotsav 2026",
    heroTagline: "Ganpati Bappa Morya 🙏", heroSubtitle: "Faith • Unity • Tradition • Community",
    bappaBadge: "Shree Ganpati Bappa Prasanna 2026",
    countdownTitle: "🎉 Countdown to Ganpati Sthapana (14th September 2026)", days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
    btnSchedule: "View Schedule", btnFinance: "Finance Summary", btnReceipts: "Donation Receipt",
    celebrationsBadge: "📸 Past Celebrations", celebrationsTitle: "Gallery of Photos from Previous Years", celebrationsSubtitle: "Beautiful unforgettable moments & photos from our society's past Ganeshotsavs",
    eventsBadge: "📅 Events", eventsTitle: "Event Schedule", eventsSubtitle: "Daily programs and aarti timings",
    archiveBadge: "📜 Memories", archiveTitle: "Photo Archive by Year", archiveSubtitle: "Select year to view past celebrations",
    membersBadge: "👥 Committee", membersTitle: "Managing Committee", membersSubtitle: "The team behind our successful Ganeshotsav",
    financeBadge: "💰 Transparency", financeTitle: "Financial Transparency", financeSubtitle: "Complete income and expense statement for Ganeshotsav 2026",
    budgetLockedTitle: "🔒 Financial Ledger", budgetLockedDesc: "Financial details transparency dashboard.", btnUnlock: "🔓 View Budget Details", pinPlaceholder: "Enter PIN", pinHint: "💡 Authorized PIN: 2026",
    totalCollection: "Total Collection", totalExpense: "Total Expense", netBalance: "Net Bank Balance",
    receiptsBadge: "Receipt", receiptsTitle: "Download Donation Receipt", receiptsSubtitle: "Generate and download your official Vargani receipt",
    selectWing: "Select Wing:", selectFlat: "Select Flat:", btnGenReceipt: "📄 View Receipt", btnPrint: "🖨️ Print / Download PDF",
    recSociety: "Sarvoday Garden Mitra mandal", recSubtitle: "Sarvajanik Ganeshotsav 2026", recDengi: "◆ Donation Receipt ◆",
    recPavtiNo: "Receipt No.", recDate: "Date", recFrom: "Shri/Smt/M/s", recYanjakdun: "received from",
    recVargani: "Vargani / Donation Rs.", recAmountWords: "Two Thousand Rupees Only", recThanks: "Received with thanks!",
    recFooter: "Ganpati Bappa Morya",
    contactBadge: "📞 Contact", contactTitle: "Contact Information", contactSubtitle: "For festival coordination and inquiries",
    footerMotto: "Faith • Unity • Tradition • Community",
    footerCopy: "© 2026 Sarvoday Garden Mitra Mandal. All rights reserved."
  }
};

var lang = localStorage.getItem('sg_lang') || 'mr';
var currentArchiveYear = '2022';
var financeUnlocked = localStorage.getItem('sg_finance_unlocked') === 'true';
var financeAccessRequests = JSON.parse(localStorage.getItem('sg_finance_requests') || '[]');
var trackerStartTime = Date.now();
var activeSecondsSpent = 0;
var visitedSections = new Set(['#home']);

function t(key) { return (i18n[lang] && i18n[lang][key]) || (i18n.en[key]) || key; }

function applyLanguage(newLang) {
  lang = newLang;
  localStorage.setItem('sg_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
  renderEvents();
  renderMembers();
  renderArchive(currentArchiveYear);
  renderGallery();
  renderFinance();
  renderReceipts();
  renderContact();
}

// ============================================
// DATA — Celebrations & Archive Photos
// ============================================
const celebrationsGallery = [
  { src: 'public/images/2026/ganpati-2026.jpg', title: 'Official Bappa Idol 2026' },
  { src: 'public/images/2022/photo-1.jpg', title: 'Grand Agaman Sohala 2022' },
  { src: 'public/images/2022/photo-2.jpg', title: 'Maha Aarti Celebrations' },
  { src: 'public/images/2022/photo-3.jpg', title: 'Cultural Performance 2022' },
  { src: 'public/images/2016/photo-1.jpg', title: 'Mandap Decoration 2016' },
  { src: 'public/images/2016/photo-2.jpg', title: 'Dhol Tasha Pathak 2016' },
  { src: 'public/images/2015/photo-1.jpg', title: 'Ganeshotsav Celebration 2015' },
  { src: 'public/images/2013/photo-1.jpg', title: 'Traditional Visarjan 2013' },
];

const events = [
  {
    date: '2026-09-14',
    dayText: '14',
    monthText: 'Sep',
    name: {
      mr: 'श्री गणपती स्थापना व प्राणप्रतिष्ठा',
      hi: 'श्री गणपति स्थापना एवं प्राणप्रतिष्ठा',
      en: 'Shree Ganpati Sthapana & Pranpratishtha'
    },
    time: {
      mr: 'सकाळी १०:०० वा.',
      hi: 'सुबह १०:०० बजे',
      en: 'Morning 10:00 AM'
    },
    cat: 'Sthapana',
    desc: {
      mr: 'बाप्पांची पारंपरिक पद्धतीने विधीवत स्थापना व षोडशोपचार पूजा (१४ सप्टेंबर २०२६)',
      hi: 'पारंपरिक विधि से बप्पा की स्थापना एवं पूजन (14 सितंबर 2026)',
      en: 'Auspicious Sthapana & Pranpratishtha Pooja of Bappa (14th Sept 2026)'
    }
  },
  {
    date: '2026-09-14',
    dayText: '14-19',
    monthText: 'Sep',
    name: {
      mr: 'दैनिक सायंकाळची महाआरती (दररोज)',
      hi: 'दैनिक सांध्य महाआरती (प्रतिदिन)',
      en: 'Daily Evening Maha Aarti (Every Day)'
    },
    time: {
      mr: 'दररोज रात्री ८:०० ते ८:३० वा.',
      hi: 'प्रतिदिन रात्रि ८:०० से ८:३० बजे',
      en: 'Every Day 8:00 PM – 8:30 PM'
    },
    cat: 'Aarti',
    datesList: ['14 Sep', '15 Sep', '16 Sep', '17 Sep', '18 Sep', '19 Sep'],
    desc: {
      mr: '१४ ते १९ सप्टेंबर दरम्यान दररोज संध्याकाळी ८:०० ते ८:३० वा. महाआरती संपन्न होईल',
      hi: '14 से 19 सितंबर तक प्रतिदिन शाम 8:00 से 8:30 बजे महाआरती संपन्न होगी',
      en: 'Performed daily every evening at 8:00 PM - 8:30 PM (14th to 19th Sept)'
    }
  },
  {
    date: '2026-09-19',
    dayText: '19',
    monthText: 'Sep',
    name: {
      mr: 'उत्तरपूजा व भव्य विसर्जन मिरवणूक',
      hi: 'उत्तरपूजा एवं भव्य विसर्जन जुलूस',
      en: 'Uttarpooja & Ganpati Visarjan Procession'
    },
    time: {
      mr: 'संध्याकाळी ५:०० वा. पासून',
      hi: 'शाम ५:०० बजे से',
      en: 'Evening 5:00 PM onwards'
    },
    cat: 'Visarjan',
    desc: {
      mr: 'ढोल-ताशांच्या गजरात व गुलालाच्या उधळणीत बाप्पांना भावपूर्ण निरोप (१९ सप्टेंबर २०२६)',
      hi: 'ढोल-ताशों के साथ बप्पा को भावपूर्ण विदाई (19 सितंबर 2026)',
      en: 'Grand farewell procession and Visarjan with Dhol Tasha (19th Sept 2026)'
    }
  }
];

const archiveYears = {
  '2022': Array.from({length:6}, (_,i) => ({src:`public/images/2022/photo-${i+1}.jpg`, title:`Ganeshotsav 2022 — Photo ${i+1}`})),
  '2016': Array.from({length:6}, (_,i) => ({src:`public/images/2016/photo-${i+1}.jpg`, title:`Ganeshotsav 2016 — Photo ${i+1}`})),
  '2015': Array.from({length:6}, (_,i) => ({src:`public/images/2015/photo-${i+1}.jpg`, title:`Ganeshotsav 2015 — Photo ${i+1}`})),
  '2013': Array.from({length:6}, (_,i) => ({src:`public/images/2013/photo-${i+1}.jpg`, title:`Ganeshotsav 2013 — Photo ${i+1}`})),
  '2012': Array.from({length:6}, (_,i) => ({src:`public/images/2012/photo-${i+1}.jpg`, title:`Ganeshotsav 2012 — Photo ${i+1}`})),
};

const members = [
  { name: 'Harshal Nerkar', phone: '', role: { mr: 'कोर कमिटी सदस्य', hi: 'कोर कमेटी सदस्य', en: 'Core Committee Member' }, flat: 'Sarvoday Garden' },
  { name: 'Malhar Tambe', phone: '', role: { mr: 'कोर कमिटी सदस्य', hi: 'कोर कमेटी सदस्य', en: 'Core Committee Member' }, flat: 'Sarvoday Garden' },
  { name: 'Yogesh Ahinave', phone: '', role: { mr: 'कोर कमिटी सदस्य', hi: 'कोर कमेटी सदस्य', en: 'Core Committee Member' }, flat: 'Sarvoday Garden' },
  { name: 'Santosh Hande', phone: '', role: { mr: 'कोर कमिटी सदस्य', hi: 'कोर कमेटी सदस्य', en: 'Core Committee Member' }, flat: 'Sarvoday Garden' },
  { name: 'Sachin Jadhav', phone: '', role: { mr: 'कोर कमिटी सदस्य', hi: 'कोर कमेटी सदस्य', en: 'Core Committee Member' }, flat: 'Sarvoday Garden' },
];

const finance = {
  income: [
    { item: 'Society Resident Vargani (112 Flats)', amount: 168000 },
    { item: 'Local Business & Sponsor Banner Donations', amount: 45000 },
    { item: 'Cultural Event Stall Collections', amount: 22000 },
    { item: 'Voluntary General Donations & Offerings', amount: 18000 },
  ],
  expenses: [
    { item: 'Shree Ganpati Murti & Sthapana Pooja', amount: 35000 },
    { item: 'Main Mandap Setup, Flowers & Lighting Decoration', amount: 65000 },
    { item: 'Sound System & Professional DJ Setup', amount: 28000 },
    { item: 'Daily Modak, Sweets & Mahaprasad Distribution', amount: 42000 },
    { item: 'Daily Pooja Samagri, Flowers & Garland', amount: 12000 },
    { item: 'Children & Ladies Competition Prizes', amount: 15000 },
    { item: 'Visarjan Dhol Tasha Pathak & Gulal', amount: 25000 },
    { item: 'Generator Backup & Miscellaneous Security', amount: 11000 },
  ]
};

// ============================================
// INITIALIZATION
// ============================================
function initApp() {
  try { initNavbar(); } catch(e) { console.error('initNavbar:', e); }
  try { initLanguageSwitcher(); } catch(e) { console.error('initLanguageSwitcher:', e); }
  try { initCountdown('2026-09-14T09:00:00+05:30'); } catch(e) { console.error('initCountdown:', e); }
  try { init3DHero(); } catch(e) { console.warn('3D Hero:', e); }
  try { applyLanguage(lang); } catch(e) { console.error('applyLanguage:', e); }
  try { initLightbox(); } catch(e) { console.error('initLightbox:', e); }
  try { initScrollReveal(); } catch(e) { console.error('initScrollReveal:', e); }
  try { initWebsiteTracker(); } catch(e) { console.error('initWebsiteTracker:', e); }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));
}

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}

// ============================================
// COUNTDOWN
// ============================================
function initCountdown(target) {
  // Target: September 14, 2026 09:00 AM IST
  const end = new Date(2026, 8, 14, 9, 0, 0).getTime();
  const update = () => {
    const now = Date.now();
    const diff = Math.max(0, end - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-mins');
    const sEl = document.getElementById('cd-secs');

    if (dEl) dEl.textContent = String(days).padStart(2, '0');
    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(mins).padStart(2, '0');
    if (sEl) sEl.textContent = String(secs).padStart(2, '0');
  };
  update();
  setInterval(update, 1000);
}

// ============================================
// 3D HERO (Three.js)
// ============================================
function init3DHero() {
  const container = document.getElementById('three-canvas-container');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.z = 8;
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const idolGroup = new THREE.Group();
  scene.add(idolGroup);

  // Materials
  const gold = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.85, roughness: 0.2, emissive: 0xd4af37, emissiveIntensity: 0.2 });
  const vermilion = new THREE.MeshStandardMaterial({ color: 0xe65100, metalness: 0.5, roughness: 0.3 });
  const haloMat = new THREE.MeshBasicMaterial({ color: 0xffa000, wireframe: true });

  // Halo
  const halo = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.05, 16, 100), haloMat);
  idolGroup.add(halo);

  // Helper: create mesh and set position
  function addMesh(geo, mat, x, y, z) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    return m;
  }

  // Crown
  idolGroup.add(addMesh(new THREE.ConeGeometry(0.7, 1.2, 8), gold, 0, 1.6, 0));
  idolGroup.add(addMesh(new THREE.CylinderGeometry(0.75, 0.8, 0.3, 16), vermilion, 0, 0.95, 0));

  // Head
  idolGroup.add(addMesh(new THREE.SphereGeometry(0.85, 32, 32), gold, 0, 0.3, 0));

  // Trunk
  const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0,0.3,0.6), new THREE.Vector3(0.1,-0.2,0.85), new THREE.Vector3(0.4,-0.6,0.8), new THREE.Vector3(0.65,-0.4,0.7)]);
  idolGroup.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 32, 0.16, 12, false), gold));

  // Ears
  const earGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.08, 16);
  const le = new THREE.Mesh(earGeo, gold); le.position.set(-0.95,0.3,0); le.rotation.z = Math.PI/4; idolGroup.add(le);
  const re = new THREE.Mesh(earGeo, gold); re.position.set(0.95,0.3,0); re.rotation.z = -Math.PI/4; idolGroup.add(re);

  // Body
  idolGroup.add(addMesh(new THREE.CylinderGeometry(1.2,1.5,1.2,16), vermilion, 0, -0.8, 0));

  // Falling petals
  const petalGeo = new THREE.SphereGeometry(0.08, 8, 4);
  petalGeo.scale(1, 0.2, 1.8);
  const petalColors = [0xffa000, 0xe65100, 0xe91e63, 0xffd700];
  const petals = [];
  for (let i = 0; i < 35; i++) {
    const mat = new THREE.MeshStandardMaterial({ color: petalColors[i % 4], roughness: 0.4, transparent: true, opacity: 0.85 });
    const m = new THREE.Mesh(petalGeo, mat);
    m.position.set((Math.random()-0.5)*7, 4.5+Math.random()*2, (Math.random()-0.5)*4);
    m.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
    scene.add(m);
    petals.push({ mesh: m, vy: 0.015+Math.random()*0.02, rx: 0.01+Math.random()*0.02, rz: 0.01+Math.random()*0.02, sw: 1+Math.random()*2 });
  }

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const dl = new THREE.DirectionalLight(0xffd700, 1.5); dl.position.set(5,5,5); scene.add(dl);
  const pl = new THREE.PointLight(0xff6d00, 2, 10); pl.position.set(-4,-2,-3); scene.add(pl);

  // Drag
  let dragging = false, prev = {x:0, y:0};
  renderer.domElement.addEventListener('pointerdown', e => { dragging = true; prev = {x:e.clientX, y:e.clientY}; });
  window.addEventListener('pointermove', e => { if (!dragging) return; idolGroup.rotation.y += (e.clientX-prev.x)*0.015; idolGroup.rotation.x += (e.clientY-prev.y)*0.015; prev = {x:e.clientX, y:e.clientY}; });
  window.addEventListener('pointerup', () => { dragging = false; });

  const clock = new THREE.Clock();
  (function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    if (!dragging) { idolGroup.rotation.y = Math.sin(t*0.5)*0.3; idolGroup.rotation.x = Math.sin(t*0.3)*0.1; }
    halo.rotation.z = t*0.4;
    petals.forEach(p => { p.mesh.position.y -= p.vy; p.mesh.position.x += Math.sin(t*p.sw)*0.005; p.mesh.rotation.x += p.rx; p.mesh.rotation.z += p.rz; if (p.mesh.position.y < -4.5) { p.mesh.position.set((Math.random()-0.5)*7, 4.5+Math.random()*2, (Math.random()-0.5)*4); }});
    renderer.render(scene, camera);
  })();
}

// ============================================
// GALLERY (PREVIOUS YEARS CELEBRATIONS)
// ============================================
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = celebrationsGallery.map(p => `
    <div class="photo-card visible" data-lightbox="${p.src}">
      <img src="${p.src}" alt="${p.title}" loading="lazy" onerror="this.onerror=null; this.src='public/images/ganpati-2026.jpg';" />
      <div class="overlay"><span class="text-white text-sm font-semibold">${p.title}</span></div>
    </div>
  `).join('');
  initLightbox();
}

// ============================================
// EVENTS
// ============================================
function renderEvents() {
  const grid = document.getElementById('events-grid');
  const filters = document.getElementById('event-filters');
  if (!grid) return;

  const cats = ['All', ...new Set(events.map(e => e.cat))];
  let active = 'All';

  const catLabels = {
    All: { mr: 'सर्व (All)', hi: 'सभी (All)', en: 'All' },
    Sthapana: { mr: 'स्थापना', hi: 'स्थापना', en: 'Sthapana' },
    Aarti: { mr: 'आरती', hi: 'आरती', en: 'Aarti' },
    Visarjan: { mr: 'विसर्जन', hi: 'विसर्जन', en: 'Visarjan' }
  };

  if (filters) {
    filters.innerHTML = cats.map(c => {
      const label = (catLabels[c] && catLabels[c][lang]) || c;
      return `<button class="filter-tab ${c === 'All' ? 'active' : ''}" data-cat="${c}">${label}</button>`;
    }).join('');

    filters.querySelectorAll('.filter-tab').forEach(btn => btn.addEventListener('click', () => {
      filters.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      active = btn.dataset.cat;
      draw();
    }));
  }

  function draw() {
    const filtered = active === 'All' ? events : events.filter(e => e.cat === active);
    grid.innerHTML = filtered.map(e => {
      const d = new Date(e.date + 'T12:00:00');
      const dayDisplay = e.dayText || d.getDate();
      const monthDisplay = e.monthText || d.toLocaleDateString('en', { month: 'short' });
      const timeDisplay = typeof e.time === 'object' ? (e.time[lang] || e.time.en) : e.time;
      const descDisplay = e.desc ? (e.desc[lang] || e.desc.en) : '';
      const catDisplay = (catLabels[e.cat] && catLabels[e.cat][lang]) || e.cat;

      return `<div class="event-card visible flex flex-col justify-between">
        <div>
          <div class="flex items-start gap-3">
            <div class="text-center min-w-[3.75rem] bg-pinkIdol-50 rounded-xl p-2.5 border border-pinkIdol-200 shadow-sm shrink-0">
              <div class="text-lg md:text-xl font-bold text-pinkIdol-600 font-calligraphy leading-tight">${dayDisplay}</div>
              <div class="text-xs text-pinkIdol-700 font-semibold uppercase tracking-wider">${monthDisplay}</div>
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between gap-2 flex-wrap mb-1">
                <h3 class="font-bold text-gray-900 font-marathi text-base md:text-lg">${e.name[lang] || e.name.en}</h3>
                <span class="inline-block text-xs px-2.5 py-0.5 rounded-full bg-pinkIdol-100 text-pinkIdol-700 font-bold border border-pinkIdol-200/60">${catDisplay}</span>
              </div>
              <p class="text-sm font-semibold text-pinkIdol-700 flex items-center gap-1.5 mt-1 font-marathi">
                <span>🕐</span> <span>${timeDisplay}</span>
              </p>
              ${descDisplay ? `<p class="text-xs text-gray-600 mt-2 leading-relaxed font-marathi">${descDisplay}</p>` : ''}
            </div>
          </div>
        </div>
        ${e.datesList ? `
          <div class="mt-3 pt-3 border-t border-gray-100">
            <div class="text-[11px] text-gray-500 font-semibold mb-1.5 font-marathi">
              ${lang === 'mr' ? 'आरती दिवस (१४ ते १९ सप्टेंबर):' : (lang === 'hi' ? 'आरती के दिन (14 से 19 सितंबर):' : 'Aarti Dates (14th - 19th Sept):')}
            </div>
            <div class="flex flex-wrap gap-1">
              ${e.datesList.map(dt => `<span class="text-[11px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 font-semibold border border-amber-200">${dt}</span>`).join('')}
            </div>
          </div>
        ` : ''}
      </div>`;
    }).join('');
  }
  draw();
}

// ============================================
// ARCHIVE
// ============================================
function renderArchive(year) {
  currentArchiveYear = year || '2022';
  const grid = document.getElementById('archive-grid');
  const tabs = document.getElementById('archive-tabs');
  if (!grid) return;

  const photos = archiveYears[currentArchiveYear] || [];
  grid.innerHTML = photos.map(p => `
    <div class="photo-card visible" data-lightbox="${p.src}">
      <img src="${p.src}" alt="${p.title}" loading="lazy" onerror="this.onerror=null; this.src='public/images/ganpati-2026.jpg';" />
      <div class="overlay"><span class="text-white text-sm font-semibold">${p.title}</span></div>
    </div>
  `).join('');
  initLightbox();

  if (tabs) {
    tabs.querySelectorAll('.filter-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.year === currentArchiveYear);
      tab.onclick = () => renderArchive(tab.dataset.year);
    });
  }
}

// ============================================
// MEMBERS
// ============================================
function renderMembers() {
  const grid = document.getElementById('members-grid');
  if (!grid) return;
  grid.innerHTML = members.map(m => {
    const initials = m.name.split(' ').map(w => w[0]).slice(0,2).join('');
    const phoneBtn = m.phone ? `
      <div class="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-center gap-2 text-xs font-semibold">
        <a href="tel:${m.phone}" class="text-pinkIdol-600 hover:underline flex items-center gap-1">📞 Call</a>
        <span class="text-gray-300">•</span>
        <a href="https://wa.me/91${m.phone}" target="_blank" class="text-emerald-600 hover:underline flex items-center gap-1">💬 WhatsApp</a>
      </div>` : '';

    return `<div class="member-card visible shadow-md hover:shadow-xl transition-all border border-pinkIdol-100 p-4">
      <div class="avatar-circle font-calligraphy text-xl border-2 border-goldIdol-300 shadow-md mx-auto">${initials}</div>
      <h3 class="font-bold text-gray-900 text-base font-marathi mt-2 text-center">${m.name}</h3>
      <div class="text-center">
        <p class="text-pinkIdol-600 font-bold text-xs mt-1 font-marathi bg-pinkIdol-50 py-1 px-3 rounded-full inline-block border border-pinkIdol-200">${m.role[lang] || m.role.en}</p>
      </div>
      ${phoneBtn}
    </div>`;
  }).join('');
}

// ============================================
// FINANCE (PRIVATE SESSION & ADMIN APPROVAL)
// ============================================

window.handleFinanceAccessRequest = function(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const flat = form.flat.value;
  const phone = form.phone.value;
  const email = form.email.value;
  const reason = form.reason.value || 'जमा-खर्च हिशोब पाहण्यासाठी';

  const newReq = {
    id: 'REQ-' + Date.now(),
    name,
    flat,
    phone,
    email,
    reason,
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    status: 'pending'
  };

  financeAccessRequests.unshift(newReq);
  localStorage.setItem('sg_finance_requests', JSON.stringify(financeAccessRequests));

  const adminEmail = 'harshalnerkar66@gmail.com';
  const mailSubject = `[Finance Access Request] Request from ${name} (${flat})`;
  const mailBody = `Sarvoday Garden Mitra Mandal — Ganeshotsav 2026

---------------------------------------------
FINANCIAL LEDGER ACCESS REQUEST
---------------------------------------------
Requester Name: ${name}
Flat / Wing: ${flat}
Phone Number: ${phone}
Email Address: ${email}
Reason: ${reason}
Request Date: ${newReq.date}
---------------------------------------------

Admin Action Required:
Please review and approve access or reply to the resident.`;

  const mailtoUrl = `mailto:${encodeURIComponent(adminEmail)}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  try {
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: 'c7c251bb-20e4-41d3-a0e2-df113d806a6c',
        subject: mailSubject,
        name: `${name} (${flat})`,
        email: email,
        message: mailBody
      })
    }).catch(() => {});
  } catch(e) {}

  window.location.href = mailtoUrl;

  const statusEl = document.getElementById('finance-request-status');
  if (statusEl) {
    statusEl.className = 'mt-4 p-4 bg-amber-500/20 border border-goldIdol-400/40 text-goldIdol-300 rounded-xl text-sm font-semibold flex items-center justify-between shadow-lg animate-pulse font-marathi';
    statusEl.innerHTML = `<div>
      <p class="font-bold text-base">⏳ तुमचा प्रवेश मागणी अर्ज ॲडमिनकडे पाठवला गेला आहे!</p>
      <p class="text-xs text-white/80 mt-1">
        ॲडमिनद्वारे (${adminEmail}) पडताळणी झाल्यानंतर तुम्हाला ईमेल / व्हॉट्सॲपवर मंजुरी संदेश व हिशोब प्राप्त होईल. तात्काळ प्रवेशासाठी ॲडमिनशी (9320091566) संपर्क साधा.
      </p>
    </div>
    <button type="button" onclick="this.parentElement.remove()" class="text-white font-bold text-xl ml-3 hover:text-goldIdol-300">&times;</button>`;
  }
};

window.unlockFinanceWithPin = function() {
  const pin = prompt('🔐 अधिकृत ॲडमिन / निवासी पिन टाका (Enter Passcode):');
  if (pin === '2026') {
    financeUnlocked = true;
    localStorage.setItem('sg_finance_unlocked', 'true');
    alert('✅ प्रवेश मंजूर! जमा-खर्च हिशोब अनलॉक झाला आहे.');
    renderFinance();
  } else if (pin !== null) {
    alert('❌ चुकीचा पिन! कृपया ॲडमिनकडे (Harshal Nerkar - 9320091566) अर्ज करा.');
  }
};

window.lockFinanceSession = function() {
  financeUnlocked = false;
  localStorage.setItem('sg_finance_unlocked', 'false');
  renderFinance();
};

window.openAdminFinanceApprovalModal = function() {
  const adminPin = prompt('🛡️ ॲडमिन पॅनेलसाठी ॲडमिन पिन टाका (Admin PIN):');
  if (adminPin !== '2026') {
    alert('❌ अनधिकृत ॲडमिन पिन!');
    return;
  }

  let reqs = JSON.parse(localStorage.getItem('sg_finance_requests') || '[]');
  let reqsHtml = reqs.length ? reqs.map((r, idx) => `
    <div class="bg-darkVelvet-800 border border-goldIdol-300/30 rounded-xl p-4 text-white text-xs space-y-2">
      <div class="flex justify-between items-center border-b border-white/10 pb-2">
        <span class="font-bold text-goldIdol-300 text-sm">👤 ${r.name} (${r.flat})</span>
        <span class="px-2 py-0.5 rounded text-[0.65rem] font-bold ${r.status === 'approved' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'}">
          ${r.status === 'approved' ? '✓ APPROVED' : '⏳ PENDING'}
        </span>
      </div>
      <p class="text-white/70"><strong>📞 फोन:</strong> ${r.phone} | <strong>📧 ईमेल:</strong> ${r.email}</p>
      <p class="text-white/70"><strong>📝 कारण:</strong> ${r.reason}</p>
      <p class="text-white/40 text-[0.65rem]">🕒 ${r.date}</p>
      <div class="flex flex-wrap gap-2 pt-2 border-t border-white/10">
        <button onclick="window.approveFinanceRequest('${r.id}')" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-1 px-2.5 rounded text-xs">
          ✅ मंजुरी द्या & अनलॉक करा
        </button>
        <button onclick="window.emailFinanceDetails('${r.email}', '${r.name}')" class="bg-blueIdol-500 hover:bg-blueIdol-600 text-white font-bold py-1 px-2.5 rounded text-xs">
          📧 ईमेलने हिशोब पाठवा
        </button>
        <button onclick="window.deleteFinanceRequest(${idx})" class="bg-rose-600/60 hover:bg-rose-600 text-white font-bold py-1 px-2 rounded text-xs">
          🗑️ हटवा
        </button>
      </div>
    </div>
  `).join('') : '<p class="text-center text-white/50 py-6 text-sm">कोणतेही प्रलंबित प्रवेश अर्ज नाहीत.</p>';

  const modalHtml = `
    <div id="admin-finance-modal" class="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div class="bg-darkVelvet-900 border-2 border-goldIdol-400/50 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden font-marathi">
        <div class="p-4 border-b border-goldIdol-300/30 flex justify-between items-center bg-black/40">
          <div>
            <h3 class="font-bold text-lg text-goldIdol-300 font-display flex items-center gap-2">
              <span>🛡️</span> आर्थिक प्रवेश मागणी ॲडमिन मंजुरी पॅनेल
            </h3>
            <p class="text-xs text-white/70">सार्वोदय गार्डन गणेशोत्सव २०२६ - ॲडमिन नियंत्रण</p>
          </div>
          <button onclick="document.getElementById('admin-finance-modal').remove()" class="text-white text-2xl font-bold hover:text-goldIdol-300">&times;</button>
        </div>

        <div class="p-5 overflow-y-auto space-y-4 flex-1">
          ${reqsHtml}
        </div>

        <div class="p-4 border-t border-white/10 bg-black/40 flex justify-between items-center">
          <button onclick="financeUnlocked=true; localStorage.setItem('sg_finance_unlocked','true'); renderFinance(); document.getElementById('admin-finance-modal').remove();" class="btn-gold !py-1.5 !px-3 !text-xs font-bold">
            🔓 सर्वांसाठी हिशोब अनलॉक करा
          </button>
          <button onclick="document.getElementById('admin-finance-modal').remove()" class="bg-white/10 text-white font-bold py-1.5 px-4 rounded-lg text-xs hover:bg-white/20">
            बंद करा
          </button>
        </div>
      </div>
    </div>
  `;

  const existingModal = document.getElementById('admin-finance-modal');
  if (existingModal) existingModal.remove();
  document.body.insertAdjacentHTML('beforeend', modalHtml);
};

window.approveFinanceRequest = function(reqId) {
  let reqs = JSON.parse(localStorage.getItem('sg_finance_requests') || '[]');
  const idx = reqs.findIndex(r => r.id === reqId);
  if (idx !== -1) {
    reqs[idx].status = 'approved';
    localStorage.setItem('sg_finance_requests', JSON.stringify(reqs));
  }
  financeUnlocked = true;
  localStorage.setItem('sg_finance_unlocked', 'true');
  alert('✅ मागणी मंजूर केली आहे! हिशोब अनलॉक केला गेला आहे.');
  const modal = document.getElementById('admin-finance-modal');
  if (modal) modal.remove();
  renderFinance();
};

window.emailFinanceDetails = function(userEmail, userName) {
  const totalIn = finance.income.reduce((s,i)=>s+i.amount,0);
  const totalEx = finance.expenses.reduce((s,i)=>s+i.amount,0);
  const netBal = totalIn - totalEx;
  const fmt = n => 'Rs. ' + n.toLocaleString('en-IN');

  const subject = `[Approved Financial Ledger] Sarvoday Garden Ganeshotsav 2026`;
  const body = `Dear ${userName},

Your request to view the financial statement for Sarvoday Garden Mitra Mandal Ganeshotsav 2026 has been approved by the Mandal Admin.

--------------------------------------------------
FINANCIAL TRANSPARENCY SUMMARY 2026
--------------------------------------------------
Total Vargani Collection: ${fmt(totalIn)}
Total Festival Expenses:   ${fmt(totalEx)}
Net Bank Balance:        ${fmt(netBal)}
--------------------------------------------------

INCOME DETAILS:
${finance.income.map(i => `- ${i.item}: ${fmt(i.amount)}`).join('\n')}

EXPENSE DETAILS:
${finance.expenses.map(i => `- ${i.item}: ${fmt(i.amount)}`).join('\n')}

--------------------------------------------------
Authorized Mandal Access Passcode: 2026
Portal Link: https://ganpati2026.example.com/#finance

Regards,
Sarvoday Garden Mitra Mandal Committee
Harshal Nerkar (9320091566) | Malhar Tambe (9004604944) | Yogesh Ahinave (9870701239)`;

  window.location.href = `mailto:${encodeURIComponent(userEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

window.deleteFinanceRequest = function(index) {
  let reqs = JSON.parse(localStorage.getItem('sg_finance_requests') || '[]');
  reqs.splice(index, 1);
  localStorage.setItem('sg_finance_requests', JSON.stringify(reqs));
  const modal = document.getElementById('admin-finance-modal');
  if (modal) modal.remove();
  window.openAdminFinanceApprovalModal();
};

function renderFinance() {
  const container = document.getElementById('finance-container');
  if (!container) return;

  const totalIn = finance.income.reduce((s,i)=>s+i.amount,0);
  const totalEx = finance.expenses.reduce((s,i)=>s+i.amount,0);
  const netBal = totalIn - totalEx;
  const pctUsed = Math.min(100, Math.round((totalEx / totalIn) * 100));
  const fmt = n => '₹ ' + n.toLocaleString('en-IN');

  // IF LOCKED: Show Security & Access Request Form Screen
  if (!financeUnlocked) {
    container.innerHTML = `
      <div class="max-w-3xl mx-auto bg-darkVelvet-900/80 border-2 border-goldIdol-400/40 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl reveal font-marathi text-white">
        <!-- Top Shield Banner -->
        <div class="text-center border-b border-white/10 pb-6 mb-6">
          <div class="w-16 h-16 rounded-full bg-goldIdol-300/20 border-2 border-goldIdol-300 text-goldIdol-300 flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg animate-pulse">
            🔒
          </div>
          <span class="text-xs uppercase tracking-widest text-goldIdol-300 font-bold bg-goldIdol-300/10 px-3 py-1 rounded-full border border-goldIdol-300/30">
            खाजगी व सुरक्षित हिशोब सत्र (Private Session)
          </span>
          <h3 class="text-2xl md:text-3xl font-extrabold text-white mt-3 font-display">आर्थिक जमा-खर्च हिशोब सुरक्षित आहे</h3>
          <p class="text-xs md:text-sm text-white/70 mt-2 max-w-xl mx-auto leading-relaxed">
            सार्वोदय गार्डन गणेशोत्सवाचा जमा-खर्च हिशोब सुरक्षित ठेवण्यात आला आहे. अनधिकृत व्यक्तींना हिशोब दिसू नये म्हणून प्रवेश मर्यादित आहे. हिशोब पाहण्यासाठी खालील प्रवेश मागणी अर्ज भरा.
          </p>
        </div>

        <!-- Request Access Form -->
        <div class="bg-black/40 border border-white/10 rounded-2xl p-5 md:p-6 mb-6">
          <h4 class="font-bold text-base text-goldIdol-300 mb-1 flex items-center gap-2">
            <span>📝</span> हिशोब पाहण्यासाठी प्रवेश मागणी अर्ज (Access Request Form)
          </h4>
          <p class="text-xs text-white/60 mb-4">
            तुमचा अर्ज भरल्यानंतर ॲडमिनद्वारे पडताळणी करून मंजुरी दिली जाईल आणि हिशोब दिसेल.
          </p>

          <form onsubmit="window.handleFinanceAccessRequest(event)" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-white/80 mb-1">तुमचे नाव (Full Name) *</label>
                <input type="text" name="name" placeholder="उदा. राहुल देशपांडे" required class="w-full border border-white/20 rounded-xl p-2.5 text-sm bg-black/60 text-white focus:border-goldIdol-400 focus:outline-none" />
              </div>
              <div>
                <label class="block text-xs font-bold text-white/80 mb-1">विंग / फ्लॅट नंबर (Flat No.) *</label>
                <input type="text" name="flat" placeholder="उदा. A-301" required class="w-full border border-white/20 rounded-xl p-2.5 text-sm bg-black/60 text-white focus:border-goldIdol-400 focus:outline-none" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-white/80 mb-1">मोबाईल नंबर (Phone No.) *</label>
                <input type="tel" name="phone" placeholder="98XXXXXXXX" required class="w-full border border-white/20 rounded-xl p-2.5 text-sm bg-black/60 text-white focus:border-goldIdol-400 focus:outline-none" />
              </div>
              <div>
                <label class="block text-xs font-bold text-white/80 mb-1">ईमेल आयडी (Sender Email) *</label>
                <input type="email" name="email" placeholder="yourname@gmail.com" required class="w-full border border-white/20 rounded-xl p-2.5 text-sm bg-black/60 text-white focus:border-goldIdol-400 focus:outline-none" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-white/80 mb-1">मागणीचे कारण (Reason for Access Request)</label>
              <input type="text" name="reason" value="सोसायटी सदस्य - हिशोब पडताळणी" class="w-full border border-white/20 rounded-xl p-2.5 text-sm bg-black/60 text-white focus:border-goldIdol-400 focus:outline-none" />
            </div>

            <button type="submit" class="btn-gold w-full text-sm !py-3 font-bold shadow-xl flex items-center justify-center gap-2">
              📩 ॲडमिनकडे मंजुरीसाठी अर्ज पाठवा (Submit Request to Admin)
            </button>
          </form>

          <div id="finance-request-status"></div>
        </div>

        <!-- Admin Quick Unlock Footer -->
        <div class="flex flex-wrap items-center justify-between gap-3 text-xs border-t border-white/10 pt-4 text-white/60">
          <div class="flex items-center gap-2">
            <span>🛡️ ॲडमिन किंवा अधिकृत सदस्य?</span>
            <button onclick="window.unlockFinanceWithPin()" class="text-goldIdol-300 font-bold hover:underline flex items-center gap-1">
              🔓 PIN ने त्वरित अनलॉक करा
            </button>
          </div>
          <button onclick="window.openAdminFinanceApprovalModal()" class="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg font-semibold border border-white/10 transition-colors">
            👑 ॲडमिन मंजुरी पॅनेल
          </button>
        </div>
      </div>`;
    initScrollReveal();
    return;
  }

  // IF UNLOCKED: Show Full Financial Ledger
  container.innerHTML = `
    <!-- Action Bar for Admin & Lock -->
    <div class="flex flex-wrap items-center justify-between gap-3 bg-black/40 border border-goldIdol-300/30 rounded-2xl p-4 mb-6 backdrop-blur-md reveal">
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
        <span class="text-xs font-bold text-emerald-300 font-marathi">
          ✓ सत्र मंजूर (Private Session Unlocked)
        </span>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="window.openAdminFinanceApprovalModal()" class="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-lg font-bold border border-white/20">
          🛡️ ॲडमिन अर्ज पॅनेल
        </button>
        <button onclick="window.lockFinanceSession()" class="bg-rose-600/80 hover:bg-rose-600 text-white text-xs px-3 py-1.5 rounded-lg font-bold transition-colors">
          🔒 हिशोब लॉक करा (Lock Session)
        </button>
      </div>
    </div>

    <!-- Top Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div class="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-5 text-center shadow-lg backdrop-blur-md reveal">
        <div class="text-2xl mb-1">📥</div>
        <p class="text-white/70 text-xs uppercase tracking-wider font-semibold">${t('totalCollection')}</p>
        <p class="text-3xl font-extrabold text-emerald-400 mt-1 font-calligraphy">${fmt(totalIn)}</p>
        <small class="text-emerald-400/80 text-[0.7rem]">From 112 Flats + Sponsors</small>
      </div>

      <div class="bg-rose-950/60 border border-rose-500/40 rounded-xl p-5 text-center shadow-lg backdrop-blur-md reveal">
        <div class="text-2xl mb-1">📤</div>
        <p class="text-white/70 text-xs uppercase tracking-wider font-semibold">${t('totalExpense')}</p>
        <p class="text-3xl font-extrabold text-rose-400 mt-1 font-calligraphy">${fmt(totalEx)}</p>
        <small class="text-rose-400/80 text-[0.7rem]">Mandap, Murti, Prasad & Sound</small>
      </div>

      <div class="bg-amber-950/60 border border-goldIdol-400/50 rounded-xl p-5 text-center shadow-lg backdrop-blur-md reveal">
        <div class="text-2xl mb-1">🏦</div>
        <p class="text-white/70 text-xs uppercase tracking-wider font-semibold">${t('netBalance')}</p>
        <p class="text-3xl font-extrabold text-goldIdol-300 mt-1 font-calligraphy">${fmt(netBal)}</p>
        <small class="text-goldIdol-300/80 text-[0.7rem]">Verified Mandal Bank Balance</small>
      </div>
    </div>

    <!-- Budget Utilization Progress Bar -->
    <div class="bg-white/10 border border-white/10 rounded-xl p-5 mb-8 backdrop-blur-md reveal">
      <div class="flex justify-between items-center text-sm mb-2 font-semibold">
        <span class="text-goldIdol-300 font-marathi">📊 बजेट वापर प्रमाण (Budget Utilization)</span>
        <span class="text-white/80">${pctUsed}% Utilized</span>
      </div>
      <div class="w-full bg-black/40 h-3 rounded-full overflow-hidden border border-white/10">
        <div class="bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-500 h-full rounded-full transition-all duration-1000" style="width: ${pctUsed}%"></div>
      </div>
    </div>

    <!-- Detailed Ledger Tables -->
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <!-- Income Table -->
      <div class="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md reveal shadow-xl">
        <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <h4 class="text-emerald-400 font-bold text-base flex items-center gap-2 font-marathi">
            <span>💚</span> जमा रकमा (Income Breakdown)
          </h4>
          <span class="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">Total: ${fmt(totalIn)}</span>
        </div>
        <div class="space-y-2.5">
          ${finance.income.map(i => `
            <div class="flex justify-between items-center py-2 px-3 rounded-lg bg-black/20 hover:bg-black/40 transition-colors text-sm">
              <span class="text-white/80 font-medium">${i.item}</span>
              <span class="text-emerald-400 font-bold">${fmt(i.amount)}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Expenses Table -->
      <div class="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md reveal shadow-xl">
        <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <h4 class="text-rose-400 font-bold text-base flex items-center gap-2 font-marathi">
            <span>❤️</span> खर्च रकमा (Expense Breakdown)
          </h4>
          <span class="text-xs bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full font-bold">Total: ${fmt(totalEx)}</span>
        </div>
        <div class="space-y-2.5">
          ${finance.expenses.map(i => `
            <div class="flex justify-between items-center py-2 px-3 rounded-lg bg-black/20 hover:bg-black/40 transition-colors text-sm">
              <span class="text-white/80 font-medium">${i.item}</span>
              <span class="text-rose-400 font-bold">${fmt(i.amount)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Audit Footer Note -->
    <div class="text-center text-xs text-white/50 border-t border-white/10 pt-4 font-marathi">
      ✓ सदर जमा-खर्च हिशोब सार्वोदय गार्डन मित्र मंडळाच्या कार्यकारिणी सदस्यांद्वारे प्रमाणित केला आहे.
    </div>`;

  initScrollReveal();
}

// ============================================
// RECEIPTS (Integrated with Google Sheet Vargani Collection)
// ============================================
function renderReceipts() {
  const container = document.getElementById('receipt-container');
  if (!container) return;

  // Generate options from varganiCollection
  const b1Options = varganiCollection
    .filter(item => item.building === '1')
    .map(item => {
      const statusIcon = item.status === 'Paid' ? '✓' : '⏳';
      const labelName = item.name ? ` — ${item.name}` : '';
      return `<option value="${item.flat}">${item.flat}${labelName} (${statusIcon} ${item.status})</option>`;
    }).join('');

  const b2Options = varganiCollection
    .filter(item => item.building === '2')
    .map(item => {
      const statusIcon = item.status === 'Paid' ? '✓' : '⏳';
      const labelName = item.name ? ` — ${item.name}` : '';
      return `<option value="${item.flat}">${item.flat}${labelName} (${statusIcon} ${item.status})</option>`;
    }).join('');

  container.innerHTML = `
    <div class="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-pinkIdol-100 reveal font-marathi">
      <!-- Section Info Banner -->
      <div class="bg-gradient-to-r from-pinkIdol-50 to-cream border border-pinkIdol-200 rounded-xl p-4 mb-6 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-2xl">🧾</span>
          <div>
            <h4 class="font-bold text-gray-900 text-base">गुगल शीट लाइव्ह वर्गणी पावती शोधा</h4>
            <p class="text-xs text-gray-600">Google Sheet (Flat Master & Collection) सह थेट कनेक्ट केलेले</p>
          </div>
        </div>
        <span class="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> लाइव्ह डेटा (56 फ्लॅट्स)
        </span>
      </div>

      <!-- Controls Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6">
        <div>
          <label class="text-xs font-bold text-gray-700 block mb-1">इमारत / विंग निवडा (Building / Wing)</label>
          <select id="rec-building" class="w-full border border-gray-300 rounded-xl p-2.5 text-sm bg-white font-semibold text-gray-800 focus:border-pinkIdol-500">
            <option value="1">Building 1 (Wing A)</option>
            <option value="2">Building 2 (Wing B)</option>
          </select>
        </div>

        <div>
          <label class="text-xs font-bold text-gray-700 block mb-1">फ्लॅट व रहिवासी निवडा (Flat & Resident)</label>
          <select id="rec-flat" class="w-full border border-gray-300 rounded-xl p-2.5 text-sm bg-white font-semibold text-gray-800 focus:border-pinkIdol-500">
            ${b1Options}
          </select>
        </div>

        <div>
          <button id="rec-gen" class="btn-primary w-full text-sm !py-2.5 font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2">
            📄 पावती पहा व डाऊनलोड करा
          </button>
        </div>
      </div>

      <!-- Live Preview Container -->
      <div id="rec-preview"></div>
    </div>`;

  // Attach Building Select Listener to update Flat options
  const buildingSelect = document.getElementById('rec-building');
  const flatSelect = document.getElementById('rec-flat');

  if (buildingSelect && flatSelect) {
    buildingSelect.addEventListener('change', (e) => {
      const bld = e.target.value;
      flatSelect.innerHTML = bld === '1' ? b1Options : b2Options;
    });
  }

  // Generate Receipt Button Handler
  const btnGen = document.getElementById('rec-gen');
  if (btnGen) {
    btnGen.addEventListener('click', () => {
      const flatId = flatSelect ? flatSelect.value : '1-104';
      const record = varganiCollection.find(item => item.flat === flatId);
      const preview = document.getElementById('rec-preview');

      if (!preview) return;

      // IF UNPAID OR PENDING: Show Popup and render Pending Notice
      if (!record || record.status !== 'Paid' || !record.paid || record.paid <= 0) {
        const pendingRecord = record || { flat: flatId, building: (buildingSelect ? buildingSelect.value : '1'), name: 'निवासी', due: 2000, status: 'Pending' };
        
        // Show Popup Modal indicating Vargani is not paid
        window.showVarganiPendingModal(pendingRecord);

        // Render Friendly Pending Notice in preview
        preview.innerHTML = `
          <div class="mt-6 border-2 border-amber-400 rounded-2xl p-6 bg-gradient-to-b from-white to-amber-50/40 shadow-xl reveal font-marathi">
            <div class="flex items-center gap-3 border-b border-amber-200 pb-4 mb-4">
              <span class="text-3xl">⏳</span>
              <div>
                <span class="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider border border-amber-300">
                  वर्गणी जमा करणे बाकी आहे (Vargani Not Paid)
                </span>
                <h3 class="font-bold text-lg text-gray-900 mt-1">फ्लॅट नंबर ${pendingRecord.flat} — ${pendingRecord.name || 'निवासी'}</h3>
              </div>
            </div>

            <div class="space-y-3 text-sm text-gray-700 mb-6">
              <p class="font-semibold text-red-600">⚠️ या फ्लॅटची गणेशोत्सव २०२६ ची वर्गणी अद्याप जमा झालेली नाही. त्यामुळे अधिकृत डिजिटल पावती उपलब्ध नाही.</p>
              <div class="bg-amber-100/60 border border-amber-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span class="text-xs text-gray-600 block">एकूण देय वर्गणी (Amount Due):</span>
                  <span class="text-2xl font-extrabold text-amber-900 font-calligraphy">₹ ${(pendingRecord.due || 2000).toLocaleString('en-IN')}</span>
                </div>
                <span class="text-xs text-amber-800 font-bold bg-white px-3 py-1.5 rounded-lg shadow-sm border border-amber-300">
                  स्थिती: ${pendingRecord.status}
                </span>
              </div>
              <p class="text-xs text-gray-500">
                वर्गणी जमा करण्यासाठी खालील बटणाद्वारे थेट कोषाध्यक्ष किंवा मंडळ कार्यकर्त्यांशी संपर्क साधा. वर्गणी जमा झाल्यानंतर त्वरित डिजिटल पावती उपलब्ध होईल.
              </p>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-amber-200">
              <a href="https://wa.me/919320091566?text=Hello%20Harshal%20Ji%2C%20I%20want%20to%20pay%20Vargani%20for%20Flat%20${pendingRecord.flat}" target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center gap-2 transition-colors no-underline">
                💬 कोषाध्यक्षांशी व्हॉट्सॲपवर संपर्क साधा (9320091566)
              </a>
              <a href="tel:9320091566" class="btn-primary !py-2 !px-4 !text-xs font-bold flex items-center gap-1">
                📞 कॉल करा (9320091566)
              </a>
            </div>
          </div>
        `;

        preview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
      }

      // IF PAID: Render Printable Receipt matching Sample Template
      const words = numberToMarathiWords(record.paid);
      const receiptNo = `SGR-2026-${record.flat.replace('-', '')}`;
      const dateStr = '12/09/2026';

      preview.innerHTML = `
        <div class="mt-6 border-4 border-double border-goldIdol-500 rounded-2xl p-5 md:p-8 bg-white shadow-2xl relative flex flex-col justify-between font-marathi" id="printable-receipt" style="outline: 1.5px solid #751031; outline-offset: -5px;">
          <div>
            <!-- Top Sanskrit Prayer -->
            <div class="text-center border-b border-amber-200 pb-1.5 mb-2.5">
              <p class="text-pinkIdol-700 font-bold text-xs md:text-sm font-calligraphy tracking-wider">
                ॥ ॐ गं गणपतये नमः ॥ &nbsp;•&nbsp; ॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
              </p>
            </div>

            <!-- Main Mandal Title & Badge Row -->
            <div class="flex flex-col md:flex-row items-center justify-between gap-3 border-b-2 border-goldIdol-400/50 pb-3 mb-3">
              <div class="flex items-center gap-3">
                <!-- Circular SG Emblem -->
                <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-pinkIdol-600 via-pinkIdol-500 to-goldIdol-400 text-white flex flex-col items-center justify-center font-bold shadow-md border-2 border-goldIdol-300 flex-shrink-0">
                  <span class="font-display text-xl md:text-2xl leading-none">SG</span>
                  <span class="text-[8px] uppercase tracking-widest text-goldIdol-100 font-sans">MANDAL</span>
                </div>
                <div>
                  <h2 class="text-lg md:text-2xl font-bold font-display text-darkVelvet-900 tracking-wide">
                    Sarvoday Garden Mitra Mandal
                  </h2>
                  <p class="text-xs md:text-sm font-bold text-pinkIdol-600 mt-0.5">
                    सार्वजनिक गणेशोत्सव सोहळा २०२६ (स्थापना वर्ष २०१२)
                  </p>
                  <p class="text-[11px] text-gray-500 mt-0.5">
                    सर्वोदय गार्डन को-ऑप. हाउसिंग सोसायटी लि., मुंबई-पुणे रोड, ठाणे (प.) ४००६०१
                  </p>
                </div>
              </div>

              <div class="text-right flex flex-col items-center md:items-end">
                <div class="bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-sm">
                  <span>✓ PAID & VERIFIED</span>
                </div>
                <span class="text-[10px] text-gray-500 mt-0.5">नोंदणी क्र. SGR/GM/2026</span>
              </div>
            </div>

            <!-- Official Donation Receipt Banner -->
            <div class="text-center mb-3">
              <div class="inline-block bg-gradient-to-r from-pinkIdol-600 via-darkVelvet-800 to-pinkIdol-600 text-white text-xs md:text-sm font-bold px-5 py-1 rounded-full shadow-md uppercase tracking-wider border border-goldIdol-300">
                ★ अधिकृत देणगी पावती (OFFICIAL DONATION RECEIPT) ★
              </div>
            </div>

            <!-- Metadata Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 bg-amber-50/50 p-2.5 rounded-xl border border-amber-200/80 mb-3 text-xs text-gray-700">
              <div>
                <span class="text-gray-500 block text-[11px]">पावती क्र. (Receipt No):</span>
                <strong class="text-pinkIdol-600 font-mono text-sm">${receiptNo}</strong>
              </div>
              <div>
                <span class="text-gray-500 block text-[11px]">दिनांक (Date):</span>
                <strong class="text-gray-900 text-sm">${dateStr}</strong>
              </div>
              <div>
                <span class="text-gray-500 block text-[11px]">वेळ (Time):</span>
                <strong class="text-gray-900 text-sm">१०:३० AM</strong>
              </div>
              <div>
                <span class="text-gray-500 block text-[11px]">आर्थिक वर्ष (F.Y.):</span>
                <strong class="text-gray-900 text-sm">२०२६ - २०२७</strong>
              </div>
            </div>

            <!-- Resident Details Section -->
            <div class="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm space-y-2 mb-3 text-sm text-gray-800">
              <div class="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-1.5">
                <span class="text-gray-600 min-w-[200px] text-xs md:text-sm"><strong>श्री. / श्रीमती (Received with thanks from):</strong></span>
                <span class="text-gray-900 font-bold text-base md:text-lg border-b-2 border-goldIdol-400 px-2 py-0.5 inline-block font-marathi">
                  ${record.name || 'निवासी'}
                </span>
              </div>

              <div class="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-1.5">
                <span class="text-gray-600 min-w-[200px] text-xs md:text-sm"><strong>इमारत व फ्लॅट (Building & Flat No):</strong></span>
                <span class="text-gray-900 font-bold bg-pinkIdol-50 px-2.5 py-0.5 rounded-md border border-pinkIdol-200 inline-block text-xs md:text-sm">
                  Building ${record.building} — Flat No. ${record.flat}
                </span>
              </div>

              <div class="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-1.5">
                <span class="text-gray-600 min-w-[200px] text-xs md:text-sm"><strong>भरणा प्रकार (Payment Mode):</strong></span>
                <span class="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 inline-block text-xs">
                  ${record.mode || 'Cash / UPI'} ${record.remarks ? `(${record.remarks})` : '• Online Verified'}
                </span>
              </div>

              <div class="flex flex-col md:flex-row md:items-center justify-between">
                <span class="text-gray-600 min-w-[200px] text-xs md:text-sm"><strong>कारणास्तव (On Account Of):</strong></span>
                <span class="text-gray-800 font-medium text-xs md:text-sm inline-block">
                  सार्वजनिक श्री गणेशोत्सव सोहळा २०२६ वर्गणी निधी (Festival Contribution)
                </span>
              </div>
            </div>

            <!-- Amount Highlight Box -->
            <div class="bg-gradient-to-r from-pinkIdol-600 via-darkVelvet-800 to-pinkIdol-600 text-white rounded-xl p-3.5 text-center shadow-md border-2 border-goldIdol-400 mb-3">
              <p class="text-[11px] uppercase tracking-widest text-goldIdol-300 font-bold mb-0.5">
                वर्गणी / देणगी रक्कम (AMOUNT PAID & RECEIVED)
              </p>
              <p class="text-2xl md:text-3xl font-extrabold text-white font-calligraphy tracking-wide">
                ₹ ${record.paid.toLocaleString('en-IN')} /-
              </p>
              <p class="text-xs text-amber-100 mt-0.5 font-semibold">
                (अक्षरी: ${words})
              </p>
            </div>

            <!-- Traditional Ashirwad / Blessing Note -->
            <div class="bg-amber-50/60 border border-amber-200 rounded-xl p-2.5 text-center text-xs text-gray-700 mb-3">
              <p class="font-bold text-pinkIdol-700 text-xs mb-0.5 font-calligraphy">
                ॥ गणपती बाप्पा मोरया, पुढच्या वर्षी लवकर या ॥
              </p>
              <p class="text-gray-600 leading-normal text-[11px]">
                श्री गणेशाच्या कृपाशीर्वादाने आपल्या परिवारास सुख, समाधान, उत्तम आरोग्य व भरभराट लाभो!<br/>
                गणेशोत्सव २०२६ मध्ये आपले बहुमोल सहकार्य लाभल्याबद्दल सार्वोदय गार्डन मित्र मंडळातर्फे आपले मनःपूर्वक आभार!
              </p>
            </div>
          </div>

          <!-- Bottom Section: Stamps, Signatures and Verification -->
          <div>
            <div class="pt-3 border-t-2 border-goldIdol-400/40 flex flex-wrap justify-between items-end gap-3 text-xs font-marathi">
              <!-- Seal -->
              <div class="text-center">
                <div class="w-16 h-16 rounded-full border-2 border-dashed border-pinkIdol-500 flex flex-col items-center justify-center p-1 mx-auto text-[0.6rem] font-bold text-pinkIdol-600 bg-pinkIdol-50 shadow-sm">
                  <span>★ SGR 2026 ★</span>
                  <span class="text-[0.55rem] uppercase">गणेशोत्सव</span>
                  <span>MANDAL SEAL</span>
                </div>
                <p class="text-[0.65rem] text-gray-500 mt-0.5">अधिकृत मंडळ शिक्का</p>
              </div>

              <!-- Office Address & Date -->
              <div class="text-center text-[10px] text-gray-500 hidden md:block">
                <p>कार्यालय: क्लब हाऊस, सार्वोदय गार्डन, ठाणे (प.)</p>
                <p class="mt-0.5">दिनांक: १२ सप्टेंबर २०२६</p>
              </div>

              <!-- Signatories -->
              <div class="text-center md:text-right">
                <div class="flex items-center justify-center md:justify-end gap-2.5 mb-1 text-gray-900 font-bold text-xs">
                  <span>हर्षल नेरकर</span>
                  <span>•</span>
                  <span>मल्हार तांबे</span>
                  <span>•</span>
                  <span>योगेश अहीनावे</span>
                </div>
                <p class="text-[11px] text-pinkIdol-600 font-bold">कोर कमिटी सदस्य (Core Committee Members)</p>
                <p class="text-[10px] text-gray-500 mt-0.5">सार्वोदय गार्डन मित्र मंडळ, ठाणे</p>
              </div>
            </div>

            <!-- Official E-Receipt Notice -->
            <div class="text-center text-[9px] text-gray-400 mt-2 border-t border-gray-100 pt-1">
              ही संगणकीकृत अधिकृत डिजिटल पावती असून कोणत्याही भौतिक स्वाक्षरीची आवश्यकता नाही. (System Generated Official Society Receipt)
            </div>
          </div>

          <!-- Interactive Action Buttons (Hidden on Print & in PDF export) -->
          <div class="mt-5 text-center no-print border-t-2 border-gray-200 pt-4">
            <div class="flex flex-wrap items-center justify-center gap-3">
              <button type="button" id="btn-download-pdf" onclick="window.downloadReceiptPdf('${record.flat}')" class="btn-primary text-sm !py-2.5 !px-6 font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 !bg-emerald-600 hover:!bg-emerald-700 text-white rounded-xl transition-all">
                📥 थेट PDF डाऊनलोड करा (Direct Download PDF)
              </button>

              <button type="button" onclick="window.printReceipt()" class="btn-primary text-sm !py-2.5 !px-6 font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 !bg-pinkIdol-600 hover:!bg-pinkIdol-700 text-white rounded-xl transition-all">
                🖨️ पावती प्रिंट करा (Print Full Page)
              </button>
            </div>

            <p class="text-xs text-gray-500 mt-2 font-sans">
              ★ <strong>'थेट PDF डाऊनलोड करा'</strong> वर क्लिक करताच पावती आपोआप <code class="text-pinkIdol-600 font-bold">${receiptNo}.pdf</code> नावाने थेट डाऊनलोड होईल.
            </p>
          </div>
        </div>
      `;

      preview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
}

// ============================================
// POPUP MODAL: VARGANI NOT PAID
// ============================================
window.showVarganiPendingModal = function(record) {
  const existing = document.getElementById('vargani-pending-modal');
  if (existing) existing.remove();

  const flatLabel = record ? `${record.flat} (${record.name || 'निवासी'})` : 'निवडलेला फ्लॅट';
  const amountDue = record && record.due ? `₹ ${record.due.toLocaleString('en-IN')}` : '₹ 2,000';
  const bld = record && record.building ? `Building ${record.building}` : '';

  const modalHtml = `
    <div id="vargani-pending-modal" class="fixed inset-0 z-[120] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in font-marathi" role="dialog" aria-modal="true">
      <div class="bg-white rounded-2xl max-w-md w-full shadow-2xl border-2 border-amber-400 overflow-hidden relative">
        <!-- Header -->
        <div class="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-5 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">⚠️</span>
            <div>
              <h3 class="font-bold text-lg leading-tight">वर्गणी जमा झालेली नाही</h3>
              <p class="text-xs text-amber-100 font-sans">Vargani Not Paid / Receipt Unavailable</p>
            </div>
          </div>
          <button type="button" onclick="document.getElementById('vargani-pending-modal').remove()" class="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white font-bold flex items-center justify-center transition-colors text-lg" aria-label="Close">✕</button>
        </div>

        <!-- Body -->
        <div class="p-6 space-y-4">
          <!-- Status Banner -->
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <span class="text-3xl">⏳</span>
            <div>
              <p class="text-xs font-bold text-amber-800 uppercase tracking-wider">पावती उपलब्ध नाही</p>
              <h4 class="font-bold text-gray-900 text-base mt-0.5">${bld} — फ्लॅट नंबर ${flatLabel}</h4>
              <p class="text-xs text-gray-600 mt-1">या फ्लॅटची गणेशोत्सव २०२६ ची वर्गणी अद्याप जमा झालेली नाही.</p>
            </div>
          </div>

          <!-- Important Note -->
          <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs space-y-2 text-gray-700">
            <p class="flex items-start gap-2">
              <span class="text-amber-600 font-bold">ℹ️</span>
              <span><strong>पावती कधी मिळेल?</strong> वर्गणी जमा झाल्यानंतर लगेचच सिस्टिममध्ये अधिकृत डिजिटल देणगी पावती उपलब्ध होते.</span>
            </p>
            <div class="flex items-center justify-between border-t border-gray-200 pt-2 mt-2">
              <span class="text-gray-600 font-medium">एकूण देय रक्कम (Amount Due):</span>
              <span class="text-base font-bold text-amber-900 font-calligraphy">${amountDue}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="space-y-2 pt-2">
            <a href="https://wa.me/919320091566?text=Hello%20Harshal%20Ji%2C%20I%20want%20to%20pay%20Vargani%20for%20Flat%20${record ? record.flat : ''}" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md no-underline">
              <span>💬</span> <span>वर्गणी जमा करण्यासाठी व्हॉट्सॲपवर संपर्क करा</span>
            </a>

            <div class="grid grid-cols-2 gap-2">
              <a href="tel:9320091566" class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors no-underline">
                <span>📞</span> <span>हर्षल नेरकर (कोर कमिटी सदस्य)</span>
              </a>
              <button type="button" onclick="document.getElementById('vargani-pending-modal').remove()" class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center transition-colors">
                समजले (Close)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
};

// ============================================
// DIRECT PDF DOWNLOAD ENGINE (AUTOMATIC FILENAME)
// ============================================
window.downloadReceiptPdf = function(flatId) {
  const receiptElem = document.getElementById('printable-receipt');
  if (!receiptElem) {
    window.printReceipt();
    return;
  }

  const btnDownload = document.getElementById('btn-download-pdf');
  const originalHtml = btnDownload ? btnDownload.innerHTML : '';
  if (btnDownload) {
    btnDownload.innerHTML = `⏳ PDF तयार होत आहे...`;
    btnDownload.disabled = true;
  }

  // Clone receipt and strip buttons / interactive elements
  const clone = receiptElem.cloneNode(true);
  clone.querySelectorAll('.no-print').forEach(el => el.remove());

  // Fixed proportions guaranteed to fit on exactly 1 single A4 portrait page
  // 760px wide by 1050px tall (ratio 1.38 < 1.414, never spills to 2nd page)
  clone.id = 'printable-receipt-pdf-clone';
  clone.style.width = '760px';
  clone.style.height = '1050px';
  clone.style.maxHeight = '1050px';
  clone.style.boxSizing = 'border-box';
  clone.style.padding = '20px 24px';
  clone.style.margin = '0 auto';
  clone.style.backgroundColor = '#ffffff';
  clone.style.display = 'flex';
  clone.style.flexDirection = 'column';
  clone.style.justifyContent = 'space-between';
  clone.style.overflow = 'hidden';
  clone.style.border = '3px double #d4af37';
  clone.style.outline = '1.5px solid #751031';
  clone.style.outlineOffset = '-5px';
  clone.style.borderRadius = '6px';

  // Create isolated container off-screen
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = '-9999px';
  container.style.top = '0';
  container.style.width = '760px';
  container.style.height = '1050px';
  container.style.background = '#ffffff';
  container.style.zIndex = '-1000';
  container.style.overflow = 'hidden';
  container.appendChild(clone);
  document.body.appendChild(container);

  const cleanFlat = (flatId || 'flat').replace(/[^a-zA-Z0-9]/g, '');
  const filename = `SGR-2026-${cleanFlat}.pdf`;

  const opt = {
    margin: 0,
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      scrollY: 0,
      windowWidth: 800
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    }
  };

  const cleanup = () => {
    container.remove();
    if (btnDownload) {
      btnDownload.innerHTML = `✅ ${filename} डाऊनलोड झाले!`;
      btnDownload.disabled = false;
      setTimeout(() => {
        btnDownload.innerHTML = originalHtml;
      }, 3500);
    }
  };

  if (window.html2pdf) {
    window.html2pdf()
      .set(opt)
      .from(clone)
      .toPdf()
      .get('pdf')
      .then(function(pdf) {
        // Generate real binary PDF Blob
        const blob = pdf.output('blob');
        const blobUrl = URL.createObjectURL(blob);

        // Native download trigger
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();

        setTimeout(() => {
          URL.revokeObjectURL(blobUrl);
          a.remove();
          cleanup();
        }, 1200);
      })
      .catch(err => {
        console.error('html2pdf generation error:', err);
        container.remove();
        if (btnDownload) {
          btnDownload.innerHTML = originalHtml;
          btnDownload.disabled = false;
        }
        alert('PDF डाऊनलोड करण्यात समस्या आली. कृपया "पावती प्रिंट करा" पर्याय वापरा.');
      });
  } else {
    container.remove();
    if (btnDownload) {
      btnDownload.innerHTML = originalHtml;
      btnDownload.disabled = false;
    }
    window.printReceipt();
  }
};

// ============================================
// ISOLATED FULL-PAGE RECEIPT PRINT (STRICTLY 1 PAGE)
// ============================================
window.printReceipt = function() {
  const receiptElem = document.getElementById('printable-receipt');
  if (!receiptElem) {
    window.print();
    return;
  }

  // Clone receipt and strip interactive print buttons
  const clone = receiptElem.cloneNode(true);
  clone.querySelectorAll('.no-print').forEach(el => el.remove());

  // Remove any previously created print iframe
  let iframe = document.getElementById('receipt-print-iframe');
  if (iframe) iframe.remove();

  iframe = document.createElement('iframe');
  iframe.id = 'receipt-print-iframe';
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  iframe.style.visibility = 'hidden';
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html lang="mr">
    <head>
      <meta charset="UTF-8" />
      <title>सार्वोदय गार्डन गणेशोत्सव २०२६ — अधिकृत देणगी पावती</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Noto+Sans+Devanagari:wght@400;600;700;800;900&family=Outfit:wght@400;600;700;800&family=Rozha+One&family=Yatra+One&display=swap" rel="stylesheet" />
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                pinkIdol: { 50: '#FFF0F5', 100: '#FAD0DC', 200: '#F4A6C1', 300: '#E87A90', 400: '#D84B75', 500: '#C42B5B', 600: '#9E1B44', 700: '#751031', DEFAULT: '#E87A90' },
                goldIdol: { 100: '#FFF9C4', 300: '#FFD700', 400: '#E5C158', 500: '#D4AF37', 700: '#B8860B', DEFAULT: '#FFD700' },
                blueIdol: { 500: '#0F4C81', 700: '#0B365D', 900: '#061F38', DEFAULT: '#0F4C81' },
                darkVelvet: { 700: '#380B22', 800: '#2A0618', 900: '#1A030F', DEFAULT: '#2A0618' },
                cream: { DEFAULT: '#FFF8F5', dark: '#F7EBE8' }
              },
              fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                marathi: ['Noto Sans Devanagari', 'sans-serif'],
                calligraphy: ['Yatra One', 'Rozha One', 'Kalam', 'Noto Sans Devanagari', 'serif'],
                display: ['Yatra One', 'Rozha One', 'serif']
              }
            }
          }
        }
      </script>
      <link rel="stylesheet" href="./src/styles/app.css" />
      <link rel="stylesheet" href="./src/styles/components.css" />
      <style>
        @page {
          size: A4 portrait;
          margin: 5mm;
        }
        * {
          box-sizing: border-box !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          background: #ffffff !important;
          color: #111827 !important;
          font-family: 'Noto Sans Devanagari', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden !important;
        }
        .receipt-container {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          height: 100% !important;
          overflow: hidden !important;
        }
        #printable-receipt {
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          width: 100% !important;
          max-width: 100% !important;
          height: 275mm !important;
          max-height: 275mm !important;
          box-sizing: border-box !important;
          margin: 0 !important;
          padding: 14px 18px !important;
          border: 3px double #d4af37 !important;
          outline: 1.5px solid #751031 !important;
          outline-offset: -5px !important;
          border-radius: 6px !important;
          background: #ffffff !important;
          box-shadow: none !important;
          overflow: hidden !important;
          page-break-inside: avoid !important;
          break-inside: avoid !important;
          page-break-after: avoid !important;
          break-after: avoid !important;
        }
        .text-pinkIdol-600 { color: #9E1B44 !important; }
        .text-pinkIdol-700 { color: #751031 !important; }
        .bg-pinkIdol-50 { background-color: #FFF0F5 !important; }
        .bg-pinkIdol-500 { background-color: #C42B5B !important; }
        .bg-pinkIdol-600 { background-color: #9E1B44 !important; }
        .border-pinkIdol-200 { border-color: #F4A6C1 !important; }
        .border-pinkIdol-500 { border-color: #C42B5B !important; }
        .border-goldIdol-300 { border-color: #FFD700 !important; }
        .border-goldIdol-400 { border-color: #E5C158 !important; }
        .border-goldIdol-500 { border-color: #D4AF37 !important; }
        .text-goldIdol-300 { color: #FFD700 !important; }
        .text-darkVelvet-900 { color: #1A030F !important; }
        .font-calligraphy { font-family: 'Yatra One', 'Rozha One', 'Kalam', 'Noto Sans Devanagari', serif !important; }
        .font-marathi { font-family: 'Noto Sans Devanagari', sans-serif !important; }
        .font-display { font-family: 'Yatra One', 'Rozha One', serif !important; }
      </style>
    </head>
    <body>
      <div class="receipt-container">
        ${clone.outerHTML}
      </div>
    </body>
    </html>
  `);
  doc.close();

  // Give Tailwind CSS and Google Fonts a moment to render cleanly, then print
  setTimeout(() => {
    try {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } catch(err) {
      console.warn('Iframe print error, falling back to window.print():', err);
      window.print();
    }
  }, 450);
};

// ============================================
// CONTACT & SUGGESTION / INQUIRY FORM
// ============================================
window.handleContactFormSubmit = async function(event) {
  event.preventDefault();
  const form = event.target;
  const category = form.category.value;
  const name = form.name.value;
  const flat = form.flat.value || 'N/A';
  const phone = form.phone.value;
  const userEmail = form.email.value;
  const subject = form.subject.value;
  const message = form.message.value;
  const recipientEmail = form.recipientEmail ? form.recipientEmail.value : 'harshalnerkar66@gmail.com';

  const formattedSubject = `[Ganpati Mandal ${category}] ${subject} - From ${name} (${flat})`;
  const formattedBody = `Sarvoday Garden Mitra Mandal — Ganeshotsav 2026

---------------------------------------------
Category: ${category}
From: ${name}
Flat / Wing: ${flat}
Phone: ${phone}
Sender Email: ${userEmail}
---------------------------------------------

Subject: ${subject}

Message / Suggestion:
${message}

---------------------------------------------
Sent via Sarvoday Garden Ganeshotsav Web Portal`;

  // 1. Construct mailto URL
  const mailtoUrl = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;

  // 2. Try sending via Web3Forms API endpoint (free email API for static sites)
  try {
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: 'c7c251bb-20e4-41d3-a0e2-df113d806a6c',
        subject: formattedSubject,
        name: `${name} (${flat})`,
        email: userEmail,
        message: formattedBody
      })
    }).catch(() => {});
  } catch(e) {}

  // 3. Open mail client
  window.location.href = mailtoUrl;

  // 4. Update status alert banner
  const statusEl = document.getElementById('contact-form-status');
  if (statusEl) {
    statusEl.className = 'mt-4 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-semibold flex items-center justify-between shadow-sm animate-pulse';
    statusEl.innerHTML = `<div>
      <p class="font-bold">✅ संदेश तयार झाला आहे!</p>
      <p class="text-xs text-emerald-700 mt-0.5">ईमेल ऍपद्वारे संदेश <strong>${recipientEmail}</strong> वर पाठवला जात आहे. खालील बटणाने व्हॉट्सॲपवरही पाठवू शकता.</p>
    </div>
    <button type="button" onclick="this.parentElement.remove()" class="text-emerald-800 font-bold text-lg ml-3 hover:text-black">&times;</button>`;
  }
};

window.shareContactWhatsApp = function(committeePhone) {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const category = form.category ? form.category.value : 'Suggestion';
  const name = form.name ? form.name.value : 'Resident';
  const flat = form.flat ? form.flat.value : 'N/A';
  const phone = form.phone ? form.phone.value : '';
  const subject = form.subject ? form.subject.value : 'General Query';
  const message = form.message ? form.message.value : 'Hello Mandal Committee, I would like to share a suggestion/inquiry.';

  const waText = `*Sarvoday Garden Ganeshotsav 2026*\n` +
                 `*Suggestion / Inquiry for Committee*\n` +
                 `-----------------------------------\n` +
                 `*Type:* ${category}\n` +
                 `*From:* ${name} (${flat})\n` +
                 `*Phone:* ${phone}\n` +
                 `*Subject:* ${subject}\n\n` +
                 `*Message:*\n${message}`;

  const cleanNum = committeePhone.replace(/\D/g, '');
  const targetNum = cleanNum.length === 10 ? '91' + cleanNum : cleanNum;
  window.open(`https://wa.me/${targetNum}?text=${encodeURIComponent(waText)}`, '_blank');
};

function renderContact() {
  const container = document.getElementById('contact-content');
  if (!container) return;

  container.innerHTML = `
    <!-- Left Column: Key Contacts & Society Details -->
    <div class="space-y-6 reveal font-marathi">
      <!-- Section Header -->
      <div class="bg-gradient-to-r from-pinkIdol-600 to-darkVelvet-700 text-white rounded-2xl p-6 shadow-xl border border-pinkIdol-400/30">
        <div class="flex items-center gap-3 mb-2">
          <span class="text-3xl">👥</span>
          <div>
            <h3 class="font-bold text-xl font-display text-goldIdol-300">कार्यकारिणी संपर्क माहिती</h3>
            <p class="text-xs text-white/80">सार्वोदय गार्डन गणेशोत्सव २०२६ - प्रमुख संपर्क सदस्य</p>
          </div>
        </div>
        <p class="text-xs text-cream/90 mt-2 leading-relaxed">
          काहीही सूचना, प्रश्न किंवा वर्गणी / प्रसादाविषयी माहिती हवी असल्यास खालील सदस्यांशी संपर्क साधू शकता.
        </p>
      </div>

      <!-- Contact Member Cards -->
      <div class="space-y-4">
        <!-- Harshal Nerkar -->
        <div class="bg-white rounded-2xl p-5 shadow-lg border border-pinkIdol-100 hover:shadow-xl transition-all">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-3.5">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-pinkIdol-500 to-goldIdol-500 text-white flex items-center justify-center font-bold font-calligraphy text-lg shadow-md">
                HN
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-base">Harshal Nerkar</h4>
                <p class="text-xs font-semibold text-pinkIdol-600 bg-pinkIdol-50 px-2.5 py-0.5 rounded-full inline-block mt-0.5 border border-pinkIdol-200">
                  कोर कमिटी सदस्य
                </p>
              </div>
            </div>
            <span class="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-1 rounded-md flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> उपलब्ध
            </span>
          </div>

          <div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
            <span class="text-sm font-bold text-gray-800 flex items-center gap-1.5">
              📞 <a href="tel:9320091566" class="hover:text-pinkIdol-600 hover:underline">9320091566</a>
            </span>
            <div class="flex items-center gap-2">
              <a href="tel:9320091566" class="btn-primary !py-1.5 !px-3 !text-xs flex items-center gap-1">
                📞 कॉल करा
              </a>
              <a href="https://wa.me/919320091566?text=Hello%20Harshal%20Ji%2C%20I%20have%20a%20query%2Fsuggestion%20regarding%20Sarvoday%20Garden%20Ganeshotsav%202026." target="_blank" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-3 rounded-lg text-xs flex items-center gap-1 transition-colors no-underline">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- Malhar Tambe -->
        <div class="bg-white rounded-2xl p-5 shadow-lg border border-pinkIdol-100 hover:shadow-xl transition-all">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-3.5">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blueIdol-500 to-pinkIdol-500 text-white flex items-center justify-center font-bold font-calligraphy text-lg shadow-md">
                MT
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-base">Malhar Tambe</h4>
                <p class="text-xs font-semibold text-blueIdol-700 bg-blue-50 px-2.5 py-0.5 rounded-full inline-block mt-0.5 border border-blue-200">
                  कोर कमिटी सदस्य
                </p>
              </div>
            </div>
            <span class="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-1 rounded-md flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> उपलब्ध
            </span>
          </div>

          <div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
            <span class="text-sm font-bold text-gray-800 flex items-center gap-1.5">
              📞 <a href="tel:9320091566" class="hover:text-pinkIdol-600 hover:underline">9320091566</a>
            </span>
            <div class="flex items-center gap-2">
              <a href="tel:9320091566" class="btn-primary !py-1.5 !px-3 !text-xs flex items-center gap-1">
                📞 कॉल करा
              </a>
              <a href="https://wa.me/919320091566?text=Hello%20Malhar%20Ji%2C%20I%20have%20a%20query%2Fsuggestion%20regarding%20Sarvoday%20Garden%20Ganeshotsav%202026." target="_blank" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-3 rounded-lg text-xs flex items-center gap-1 transition-colors no-underline">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- Yogesh Ahinave -->
        <div class="bg-white rounded-2xl p-5 shadow-lg border border-pinkIdol-100 hover:shadow-xl transition-all">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-3.5">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-pinkIdol-600 text-white flex items-center justify-center font-bold font-calligraphy text-lg shadow-md">
                YA
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-base">Yogesh Ahinave</h4>
                <p class="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full inline-block mt-0.5 border border-amber-200">
                  कोर कमिटी सदस्य
                </p>
              </div>
            </div>
            <span class="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-1 rounded-md flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> उपलब्ध
            </span>
          </div>

          <div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
            <span class="text-sm font-bold text-gray-800 flex items-center gap-1.5">
              📞 <a href="tel:9320091566" class="hover:text-pinkIdol-600 hover:underline">9320091566</a>
            </span>
            <div class="flex items-center gap-2">
              <a href="tel:9320091566" class="btn-primary !py-1.5 !px-3 !text-xs flex items-center gap-1">
                📞 कॉल करा
              </a>
              <a href="https://wa.me/919320091566?text=Hello%20Yogesh%20Ji%2C%20I%20have%20a%20query%2Fsuggestion%20regarding%20Sarvoday%20Garden%20Ganeshotsav%202026." target="_blank" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-3 rounded-lg text-xs flex items-center gap-1 transition-colors no-underline">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Address & Emergency Helpline -->
      <div class="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
        <h4 class="font-bold text-gray-900 text-sm flex items-center gap-2 mb-3">
          <span>📍</span> सोसायटी स्थान व आपत्कालीन मदत
        </h4>
        <p class="text-xs text-gray-600 leading-relaxed mb-3">
          सार्वोदय गार्डन सोसायटी, सिटी मॉल जवळ, मुंबई, महाराष्ट्र.
        </p>
        <div class="flex items-center justify-between text-xs pt-3 border-t border-gray-100">
          <span class="text-red-600 font-bold flex items-center gap-1">🚨 हेल्पलाइन: 112 (आणीबाणी)</span>
          <a href="https://maps.google.com/?q=Sarvoday+Garden+Mumbai" target="_blank" class="text-pinkIdol-600 font-semibold hover:underline flex items-center gap-1">
            🗺️ Google Maps वर पहा
          </a>
        </div>
      </div>
    </div>

    <!-- Right Column: Suggestion & Inquiry Form (Shared via Email & WhatsApp) -->
    <div class="bg-white rounded-2xl p-6 shadow-xl border border-pinkIdol-100 reveal font-marathi flex flex-col justify-between">
      <div>
        <!-- Form Header -->
        <div class="border-b border-gray-100 pb-4 mb-5">
          <span class="text-xs font-bold text-pinkIdol-600 uppercase tracking-wider bg-pinkIdol-50 px-3 py-1 rounded-full border border-pinkIdol-200">
            ✉️ थेट ईमेल व व्हॉट्सॲप संवाद
          </span>
          <h3 class="font-bold text-xl text-gray-900 mt-2 font-display">समितीला सूचना किंवा विचारणा फॉर्म</h3>
          <p class="text-xs text-gray-500 mt-1">
            काहीही सूचना किंवा प्रश्न असल्यास खालील फॉर्म भरा. तुमचा संदेश थेट आमच्या ईमेलवर (Email) व व्हॉट्सॲपवर पोहोचेल.
          </p>
        </div>

        <!-- Form -->
        <form id="contact-form" class="space-y-4" onsubmit="window.handleContactFormSubmit(event)">
          <!-- Category Select -->
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">प्रकार निवडा (Category) *</label>
            <select name="category" required class="w-full border border-gray-200 rounded-xl p-3 text-sm bg-gray-50 focus:bg-white focus:border-pinkIdol-500 transition-colors">
              <option value="सूचना (Suggestion)">💡 समितीसाठी सूचना (Suggestion for Mandal)</option>
              <option value="सामान्य विचारणा (General Inquiry)">❓ माहिती विचारणा (General Information Query)</option>
              <option value="प्रसाद / प्रायोजकत्व (Prasad / Sponsorship)">🍬 महाप्रसाद / प्रायोजकत्व चौकशी (Prasad / Sponsor Query)</option>
              <option value="कार्यक्रम सहभाग (Event Participation)">🎭 सांस्कृतिक कार्यक्रम सहभाग (Event Participation)</option>
            </select>
          </div>

          <!-- Name & Flat Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1">तुमचे नाव (Full Name) *</label>
              <input type="text" name="name" placeholder="उदा. अमोल पाटील" required class="w-full border border-gray-200 rounded-xl p-2.5 text-sm bg-gray-50 focus:bg-white focus:border-pinkIdol-500 transition-colors" />
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1">विंग / फ्लॅट नंबर (Flat No.)</label>
              <input type="text" name="flat" placeholder="उदा. A-301" class="w-full border border-gray-200 rounded-xl p-2.5 text-sm bg-gray-50 focus:bg-white focus:border-pinkIdol-500 transition-colors" />
            </div>
          </div>

          <!-- Phone & Email Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1">मोबाईल नंबर (Phone No.) *</label>
              <input type="tel" name="phone" placeholder="98XXXXXXXX" required class="w-full border border-gray-200 rounded-xl p-2.5 text-sm bg-gray-50 focus:bg-white focus:border-pinkIdol-500 transition-colors" />
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1">तुमचा ईमेल (Sender Email) *</label>
              <input type="email" name="email" placeholder="yourname@gmail.com" required class="w-full border border-gray-200 rounded-xl p-2.5 text-sm bg-gray-50 focus:bg-white focus:border-pinkIdol-500 transition-colors" />
            </div>
          </div>

          <!-- Recipient Email Notice & Input -->
          <div class="bg-gray-50 border border-gray-200 rounded-xl p-3">
            <label class="block text-[0.7rem] font-bold text-gray-600 uppercase tracking-wider mb-1">📧 प्राप्तकर्ता ईमेल (Committee Recipient Email):</label>
            <input type="email" name="recipientEmail" value="harshalnerkar66@gmail.com" class="w-full border border-gray-200 rounded-lg p-2 text-xs font-mono bg-white text-gray-700" title="संदेश या ईमेल आयडीवर पाठवला जाईल" />
          </div>

          <!-- Subject -->
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">विषय (Subject) *</label>
            <input type="text" name="subject" placeholder="उदा. आरती वेळापत्रकाबद्दल सूचना..." required class="w-full border border-gray-200 rounded-xl p-2.5 text-sm bg-gray-50 focus:bg-white focus:border-pinkIdol-500 transition-colors" />
          </div>

          <!-- Message Area -->
          <div>
            <label class="block text-xs font-bold text-gray-700 mb-1">तपशीलवार संदेश / सूचना (Message Details) *</label>
            <textarea name="message" rows="4" placeholder="तुमची सूचना किंवा विचारणा येथे सविस्तर लिहा..." required class="w-full border border-gray-200 rounded-xl p-3 text-sm bg-gray-50 focus:bg-white focus:border-pinkIdol-500 transition-colors leading-relaxed"></textarea>
          </div>

          <!-- Action Buttons -->
          <div class="pt-2 space-y-2">
            <button type="submit" class="btn-primary w-full text-sm !py-3 flex items-center justify-center gap-2 font-bold shadow-lg hover:shadow-xl transition-all">
              📧 ईमेल द्वारे पाठवा (Send via Email)
            </button>

            <div class="pt-2">
              <button type="button" onclick="window.shareContactWhatsApp('9320091566')" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-colors shadow-md">
                💬 मंडळाच्या व्हॉट्सॲपवर पाठवा (WhatsApp Mandal: 9320091566)
              </button>
            </div>
          </div>
        </form>

        <!-- Status Container -->
        <div id="contact-form-status"></div>
      </div>
    </div>`;

  initScrollReveal();
}

// ============================================
// WEBSITE VISITOR & TRAFFIC CHANNEL TRACKER
// ============================================

function getTrafficSource() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source') || urlParams.get('ref') || urlParams.get('source');
  
  if (utmSource) {
    const src = utmSource.toLowerCase();
    if (src.includes('whatsapp') || src === 'wa') return 'WhatsApp Group / Chat';
    if (src.includes('facebook') || src === 'fb') return 'Facebook Share';
    if (src.includes('instagram') || src === 'ig') return 'Instagram Bio / Story';
    if (src.includes('qr')) return 'Society Noticeboard QR Code';
    return `Campaign (${utmSource})`;
  }

  const ref = document.referrer ? document.referrer.toLowerCase() : '';
  if (!ref) return 'Direct Visit (Bookmark / Typed Address)';
  if (ref.includes('whatsapp') || ref.includes('wa.me')) return 'WhatsApp Chat Link';
  if (ref.includes('facebook') || ref.includes('fb.com')) return 'Facebook Referral';
  if (ref.includes('instagram')) return 'Instagram Referral';
  if (ref.includes('google')) return 'Google Search';
  if (ref.includes('bing') || ref.includes('yahoo')) return 'Search Engine';
  return `External Web Link (${new URL(document.referrer).hostname})`;
}

function getDeviceType() {
  const ua = navigator.userAgent;
  if (/mobile/i.test(ua)) return 'Mobile Device';
  if (/ipad|tablet/i.test(ua)) return 'Tablet';
  return 'Desktop / Laptop PC';
}

function sendSilentVisitorNotification() {
  // Guard against duplicate emails in the same browser session
  if (sessionStorage.getItem('sg_visitor_opened_alert_sent')) return;

  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'medium' });
  const channel = getTrafficSource();
  const device = getDeviceType();
  const screenRes = `${window.innerWidth}x${window.innerHeight}`;
  const pageUrl = window.location.href;
  const referrer = document.referrer || 'Direct / None';

  const alertSubject = `🔔 [Live Visitor Alert] Someone opened Sarvoday Garden Ganeshotsav 2026`;
  const alertBody = `Sarvoday Garden Mitra Mandal — Real-time Website Open Alert

A visitor has just opened the Sarvoday Garden Ganeshotsav 2026 website.

--------------------------------------------------
VISITOR DETAILS:
--------------------------------------------------
• Date & Time (IST): ${timestamp}
• Traffic Channel / Source: ${channel}
• Device: ${device}
• Screen Dimensions: ${screenRes}
• Landing Page URL: ${pageUrl}
• Referrer URL: ${referrer}
• Browser User Agent: ${navigator.userAgent}

--------------------------------------------------
Recipient: harshalnerkar66@gmail.com
This is a silent automated background notification sent immediately upon site opening.`;

  try {
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: 'c7c251bb-20e4-41d3-a0e2-df113d806a6c',
        subject: alertSubject,
        from_name: 'Sarvoday Garden Website Tracker',
        email: 'harshalnerkar66@gmail.com',
        message: alertBody
      })
    })
    .then(() => {
      sessionStorage.setItem('sg_visitor_opened_alert_sent', '1');
    })
    .catch(() => {
      sessionStorage.setItem('sg_visitor_opened_alert_sent', '1');
    });
  } catch (e) {
    sessionStorage.setItem('sg_visitor_opened_alert_sent', '1');
  }
}

function initWebsiteTracker() {
  // Silently trigger real-time email notification to Harshal on site open
  sendSilentVisitorNotification();
}

// ============================================
// LIGHTBOX
// ============================================
function initLightbox() {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const close = document.getElementById('lightbox-close');

  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      if (img) img.src = el.dataset.lightbox;
      if (lb) { lb.classList.remove('hidden'); lb.classList.add('flex'); }
    });
  });
  if (close) close.addEventListener('click', () => { if (lb) { lb.classList.add('hidden'); lb.classList.remove('flex'); } });
  if (lb) lb.addEventListener('click', e => { if (e.target === lb) { lb.classList.add('hidden'); lb.classList.remove('flex'); } });
}

// ============================================
// SCROLL REVEAL
// ============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); }});
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}
