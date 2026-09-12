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
  { date: '2026-09-14', name: { mr: 'गणपती स्थापना व प्राणप्रतिष्ठा', hi: 'गणपति स्थापना और प्राणप्रतिष्ठा', en: 'Ganpati Sthapana & Pranpratishtha' }, time: '10:00 AM', cat: 'Sthapana' },
  { date: '2026-09-14', name: { mr: 'सायंकाळची महाआरती', hi: 'शाम की महाआरती', en: 'Evening Maha Aarti' }, time: '7:30 PM', cat: 'Aarti' },
  { date: '2026-09-15', name: { mr: 'सकाळची आरती व अथर्वशीर्ष पाठ', hi: 'सुबह की आरती', en: 'Morning Aarti & Atharvashirsha' }, time: '7:30 AM', cat: 'Aarti' },
  { date: '2026-09-15', name: { mr: 'मुलांची रांगोळी स्पर्धा', hi: 'बच्चों की रांगोली प्रतियोगिता', en: 'Rangoli Competition' }, time: '4:00 PM', cat: 'Cultural' },
  { date: '2026-09-16', name: { mr: 'चित्रकला व वकृत्व स्पर्धा', hi: 'चित्रकला प्रतियोगिता', en: 'Drawing Competition (Kids)' }, time: '4:00 PM', cat: 'Children' },
  { date: '2026-09-17', name: { mr: 'महिलांसाठी हळदी-कुंकू व मेणबत्ती खेळ', hi: 'महिला हल्दी-कुंकू', en: 'Haldi Kumkum & Games' }, time: '6:00 PM', cat: 'Cultural' },
  { date: '2026-09-18', name: { mr: 'सोसायटी सांस्कृतिक संध्याकाळ', hi: 'सांस्कृतिक कार्यक्रम', en: 'Society Cultural Night' }, time: '7:30 PM', cat: 'Cultural' },
  { date: '2026-09-19', name: { mr: 'मोदक महाप्रसाद वितरण', hi: 'मोदक महाप्रसाद', en: 'Modak Mahaprasad' }, time: '6:00 PM', cat: 'Aarti' },
  { date: '2026-09-20', name: { mr: 'सत्यनारायण महापूजा व महाआरती', hi: 'सत्यनारायण महापूजा', en: 'Satyanarayan Mahapooja' }, time: '11:00 AM', cat: 'Aarti' },
  { date: '2026-09-21', name: { mr: 'दांडिया व गरबा महोत्सव', hi: 'डांडिया एवं गरबा नाइट', en: 'Dandiya & Garba Night' }, time: '8:30 PM', cat: 'Cultural' },
  { date: '2026-09-24', name: { mr: 'उत्तरपूजा व भव्य विसर्जन मिरवणूक', hi: 'उत्तरपूजा एवं विसर्जन जुलूस', en: 'Visarjan Miravuk Procession' }, time: '5:00 PM', cat: 'Visarjan' },
];

const archiveYears = {
  '2022': Array.from({length:6}, (_,i) => ({src:`public/images/2022/photo-${i+1}.jpg`, title:`Ganeshotsav 2022 — Photo ${i+1}`})),
  '2016': Array.from({length:6}, (_,i) => ({src:`public/images/2016/photo-${i+1}.jpg`, title:`Ganeshotsav 2016 — Photo ${i+1}`})),
  '2015': Array.from({length:6}, (_,i) => ({src:`public/images/2015/photo-${i+1}.jpg`, title:`Ganeshotsav 2015 — Photo ${i+1}`})),
  '2013': Array.from({length:6}, (_,i) => ({src:`public/images/2013/photo-${i+1}.jpg`, title:`Ganeshotsav 2013 — Photo ${i+1}`})),
  '2012': Array.from({length:6}, (_,i) => ({src:`public/images/2012/photo-${i+1}.jpg`, title:`Ganeshotsav 2012 — Photo ${i+1}`})),
};

const members = [
  { name: 'Harshal Nerkar', phone: '9320091566', role: { mr: 'अध्यक्ष / कोर कमिटी प्रमुख', hi: 'अध्यक्ष / कोर कमेटी प्रमुख', en: 'President / Core Lead' }, flat: 'Sarvoday Garden' },
  { name: 'Malhar Tambe', phone: '9004604944', role: { mr: 'कोर कमिटी सदस्य', hi: 'कोर कमेटी सदस्य', en: 'Core Member' }, flat: 'Sarvoday Garden' },
  { name: 'Yogesh Ahinave', phone: '9870701239', role: { mr: 'कोर कमिटी सदस्य', hi: 'कोर कमेटी सदस्य', en: 'Core Member' }, flat: 'Sarvoday Garden' },
  { name: 'Santosh Hande', phone: '', role: { mr: 'कोर कमिटी सदस्य', hi: 'कोर कमेटी सदस्य', en: 'Core Member' }, flat: 'Sarvoday Garden' },
  { name: 'Sachin Jadhav', phone: '', role: { mr: 'कोर कमिटी सदस्य', hi: 'कोर कमेटी सदस्य', en: 'Core Member' }, flat: 'Sarvoday Garden' },
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

  filters.innerHTML = cats.map(c => `<button class="filter-tab ${c==='All'?'active':''}" data-cat="${c}">${c}</button>`).join('');
  filters.querySelectorAll('.filter-tab').forEach(btn => btn.addEventListener('click', () => {
    filters.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    active = btn.dataset.cat;
    draw();
  }));

  function draw() {
    const filtered = active === 'All' ? events : events.filter(e => e.cat === active);
    grid.innerHTML = filtered.map(e => {
      const d = new Date(e.date);
      return `<div class="event-card visible">
        <div class="flex items-start gap-3">
          <div class="text-center min-w-[3.5rem] bg-pinkIdol-50 rounded-lg p-2 border border-pinkIdol-200">
            <div class="text-xl font-bold text-pinkIdol-600 font-calligraphy">${d.getDate()}</div>
            <div class="text-xs text-pinkIdol-700 font-semibold">${d.toLocaleDateString('en',{month:'short'})}</div>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-gray-900 font-marathi">${e.name[lang] || e.name.en}</h3>
            <p class="text-sm text-gray-500 mt-0.5">🕐 ${e.time}</p>
            <span class="inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full bg-pinkIdol-100 text-pinkIdol-700 font-bold">${e.cat}</span>
          </div>
        </div>
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

  const adminEmail = 'harshalnerkar@gmail.com';
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
      const record = varganiCollection.find(item => item.flat === flatId) || varganiCollection[3];
      const preview = document.getElementById('rec-preview');

      if (!preview) return;

      // IF PAID: Render Printable Receipt matching Sample Template
      if (record.status === 'Paid') {
        const words = numberToMarathiWords(record.paid);
        const receiptNo = `SGR-2026-${record.flat.replace('-', '')}`;
        const dateStr = '12/09/2026';

        preview.innerHTML = `
          <div class="mt-6 border-2 border-goldIdol-400/60 rounded-2xl p-6 md:p-8 bg-gradient-to-b from-white to-pinkIdol-50/20 shadow-2xl relative overflow-hidden" id="printable-receipt">
            <!-- Mandal Watermark Badge -->
            <div class="absolute top-4 right-4 bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-sm">
              ✓ PAID & VERIFIED (अधिकृत देणगी)
            </div>

            <!-- Receipt Header -->
            <div class="text-center border-b-2 border-goldIdol-400/40 pb-4 mb-6">
              <p class="text-pinkIdol-600 font-bold text-base font-calligraphy">॥ श्री गणेशाय नमः ॥</p>
              <div class="flex items-center justify-center gap-3 my-2">
                <div class="w-14 h-14 rounded-full bg-gradient-to-br from-pinkIdol-500 to-goldIdol-400 text-white flex items-center justify-center font-bold font-calligraphy text-2xl shadow-md border-2 border-goldIdol-300">
                  SG
                </div>
                <div class="text-center">
                  <h2 class="text-xl md:text-2xl font-bold font-display text-darkVelvet-900 tracking-wide">Sarvoday Garden Mitra mandal</h2>
                  <p class="text-xs text-pinkIdol-600 font-semibold mt-0.5">सार्वजनिक गणेशोत्सव २०२६ (सार्वोदय गार्डन सोसायटी)</p>
                </div>
              </div>
              <div class="inline-block bg-pinkIdol-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm mt-1 uppercase tracking-wider">
                ◆ देणगी पावती (Donation Receipt) ◆
              </div>
            </div>

            <!-- Receipt Metadata Grid -->
            <div class="space-y-4 text-sm font-marathi text-gray-800">
              <div class="flex flex-wrap justify-between items-center bg-white p-3 rounded-xl border border-gray-200">
                <span><strong>पावती क्रमांक (Receipt No):</strong> <span class="text-pinkIdol-600 font-bold font-mono text-base">${receiptNo}</span></span>
                <span><strong>दिनांक (Date):</strong> ${dateStr}</span>
              </div>

              <div class="bg-white p-4 rounded-xl border border-gray-200 space-y-2">
                <p>
                  <strong>श्री. / श्रीमती (Received from):</strong> 
                  <span class="text-gray-900 font-bold text-base border-b-2 border-goldIdol-400 px-2 py-0.5 inline-block min-w-[200px]">
                    ${record.name || 'फ्लॅटधारक'}
                  </span>
                </p>

                <p>
                  <strong>इमारत व फ्लॅट नंबर (Flat Details):</strong> 
                  <span class="text-gray-900 font-bold bg-pinkIdol-50 px-2.5 py-1 rounded-md border border-pinkIdol-200 inline-block">
                    Building ${record.building} — Flat No. ${record.flat}
                  </span>
                </p>

                <p>
                  <strong>भरलेला प्रकार (Payment Mode):</strong> 
                  <span class="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ${record.mode || 'Cash / UPI'} ${record.remarks ? `(${record.remarks})` : ''}
                  </span>
                </p>
              </div>

              <!-- Amount Box -->
              <div class="bg-gradient-to-r from-pinkIdol-600 to-darkVelvet-700 text-white rounded-xl p-4 text-center shadow-lg">
                <p class="text-xs uppercase tracking-wider text-goldIdol-300 font-bold mb-1">वर्गणी / देणगी रक्कम (Amount Paid)</p>
                <p class="text-3xl font-extrabold text-white font-calligraphy">₹ ${record.paid.toLocaleString('en-IN')}</p>
                <p class="text-xs text-cream/90 mt-1 font-semibold">(${words})</p>
              </div>
            </div>

            <!-- Stamp & Signature Row -->
            <div class="mt-8 pt-6 border-t-2 border-goldIdol-400/40 flex flex-wrap justify-between items-end gap-4 text-xs font-marathi">
              <div class="text-center">
                <div class="w-20 h-20 rounded-full border-2 border-dashed border-pinkIdol-500 flex flex-col items-center justify-center p-1 mx-auto text-[0.65rem] font-bold text-pinkIdol-600 bg-pinkIdol-50">
                  <span>★ SGR 2026 ★</span>
                  <span class="text-[0.6rem] uppercase">गणेशोत्सव</span>
                  <span>MANDAL SEAL</span>
                </div>
                <p class="text-[0.7rem] text-gray-500 mt-1">अधिकृत मंडळ शिक्का</p>
              </div>

              <div class="text-center">
                <p class="font-bold text-gray-900 text-sm mb-1">Harshal Nerkar / Malhar Tambe / Yogesh Ahinave</p>
                <p class="text-xs text-pinkIdol-600 font-semibold">अध्यक्ष व कार्यकारिणी सदस्य</p>
                <p class="text-[0.65rem] text-gray-400 mt-0.5">सार्वोदय गार्डन मित्र मंडळ</p>
              </div>
            </div>

            <!-- Print Button -->
            <div class="mt-6 text-center no-print border-t border-gray-200 pt-4">
              <button onclick="window.print()" class="btn-primary text-sm !py-2.5 !px-6 font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto">
                🖨️ प्रिंट करा / PDF डाऊनलोड (Print / Save PDF)
              </button>
            </div>
          </div>
        `;
      } else {
        // IF PENDING OR EXPECTED: Render Friendly Pending Notice
        preview.innerHTML = `
          <div class="mt-6 border-2 border-amber-400 rounded-2xl p-6 bg-gradient-to-b from-white to-amber-50/40 shadow-xl reveal font-marathi">
            <div class="flex items-center gap-3 border-b border-amber-200 pb-4 mb-4">
              <span class="text-3xl">⏳</span>
              <div>
                <span class="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider border border-amber-300">
                  वर्गणी जमा करणे बाकी आहे (Pending Payment)
                </span>
                <h3 class="font-bold text-lg text-gray-900 mt-1">फ्लॅट नंबर ${record.flat} — ${record.name || 'निवासी'}</h3>
              </div>
            </div>

            <div class="space-y-3 text-sm text-gray-700 mb-6">
              <p>सदर फ्लॅटची गणेशोत्सव २०२६ ची वर्गणी अद्याप जमा झालेली नाही.</p>
              <div class="bg-amber-100/60 border border-amber-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span class="text-xs text-gray-600 block">एकूण देय वर्गणी (Amount Due):</span>
                  <span class="text-2xl font-extrabold text-amber-900 font-calligraphy">₹ ${record.due.toLocaleString('en-IN')}</span>
                </div>
                <span class="text-xs text-amber-800 font-bold bg-white px-3 py-1.5 rounded-lg shadow-sm border border-amber-300">
                  स्थिती: ${record.status}
                </span>
              </div>
              <p class="text-xs text-gray-500">
                वर्गणी जमा करण्यासाठी खालील बटणाद्वारे थेट कोषाध्यक्षांशी संपर्क साधा किंवा मंडाप कार्यालयात वर्गणी जमा करा.
              </p>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-amber-200">
              <a href="https://wa.me/919320091566?text=Hello%20Harshal%20Ji%2C%20I%20want%20to%20pay%20Vargani%20for%20Flat%20${record.flat}" target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center gap-2 transition-colors no-underline">
                💬 कोषाध्यक्षांशी व्हॉट्सॲपवर संपर्क साधा (9320091566)
              </a>
              <a href="tel:9320091566" class="btn-primary !py-2 !px-4 !text-xs font-bold flex items-center gap-1">
                📞 कॉल करा
              </a>
            </div>
          </div>
        `;
      }

      preview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
}

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
  const recipientEmail = form.recipientEmail ? form.recipientEmail.value : 'harshalnerkar@gmail.com';

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
                  अध्यक्ष / कोर कमिटी प्रमुख
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
              📞 <a href="tel:9004604944" class="hover:text-pinkIdol-600 hover:underline">9004604944</a>
            </span>
            <div class="flex items-center gap-2">
              <a href="tel:9004604944" class="btn-primary !py-1.5 !px-3 !text-xs flex items-center gap-1">
                📞 कॉल करा
              </a>
              <a href="https://wa.me/919004604944?text=Hello%20Malhar%20Ji%2C%20I%20have%20a%20query%2Fsuggestion%20regarding%20Sarvoday%20Garden%20Ganeshotsav%202026." target="_blank" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-3 rounded-lg text-xs flex items-center gap-1 transition-colors no-underline">
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
              📞 <a href="tel:9870701239" class="hover:text-pinkIdol-600 hover:underline">9870701239</a>
            </span>
            <div class="flex items-center gap-2">
              <a href="tel:9870701239" class="btn-primary !py-1.5 !px-3 !text-xs flex items-center gap-1">
                📞 कॉल करा
              </a>
              <a href="https://wa.me/919870701239?text=Hello%20Yogesh%20Ji%2C%20I%20have%20a%20query%2Fsuggestion%20regarding%20Sarvoday%20Garden%20Ganeshotsav%202026." target="_blank" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-3 rounded-lg text-xs flex items-center gap-1 transition-colors no-underline">
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
            <input type="email" name="recipientEmail" value="harshalnerkar@gmail.com" class="w-full border border-gray-200 rounded-lg p-2 text-xs font-mono bg-white text-gray-700" title="संदेश या ईमेल आयडीवर पाठवला जाईल" />
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

            <div class="grid grid-cols-3 gap-1.5 pt-1">
              <button type="button" onclick="window.shareContactWhatsApp('9320091566')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-2 rounded-xl text-[0.7rem] text-center flex items-center justify-center gap-1 transition-colors">
                💬 हर्शल नेरकर
              </button>
              <button type="button" onclick="window.shareContactWhatsApp('9004604944')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-2 rounded-xl text-[0.7rem] text-center flex items-center justify-center gap-1 transition-colors">
                💬 मल्हार तांबे
              </button>
              <button type="button" onclick="window.shareContactWhatsApp('9870701239')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-2 rounded-xl text-[0.7rem] text-center flex items-center justify-center gap-1 transition-colors">
                💬 योगेश अहिनावे
              </button>
            </div>
          </div>
        </form>

        <!-- Status Container -->
        <div id="contact-form-status"></div>
      </div>
    </div>`;
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
