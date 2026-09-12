/**
 * Vargani (Donation) Receipt Generator Component
 * Generates official, printable Ganpati Festival contribution receipts with multi-language support
 */

import { formatCurrency } from '../utils/financeCalc.js';
import { translations } from '../i18n/translations.js';

export function renderReceiptGenerator(lang = 'en') {
  const container = document.getElementById('receipts-container');
  if (!container) return;

  const dict = translations[lang] || translations.en;

  container.innerHTML = `
    <div class="receipt-card reveal">
      <div class="receipt-form">
        <h3 class="receipt-form__title">${dict.receiptFindTitle}</h3>
        <p class="receipt-form__subtitle">${dict.receiptFindDesc}</p>
        
        <div class="receipt-form__grid">
          <div class="form-group">
            <label for="receipt-wing">${dict.selectWing}</label>
            <select id="receipt-wing" class="form-control">
              <option value="A">Wing A</option>
              <option value="B">Wing B</option>
            </select>
          </div>

          <div class="form-group">
            <label for="receipt-flat">${dict.selectFlat}</label>
            <select id="receipt-flat" class="form-control">
              ${generateFlatOptions('A')}
            </select>
          </div>

          <div class="form-group form-group--btn">
            <button id="btn-generate-receipt" class="btn btn--gold btn--full">
              ${dict.btnGenerateReceipt}
            </button>
          </div>
        </div>
      </div>

      <!-- Receipt Preview Modal Container -->
      <div id="receipt-preview" class="receipt-preview" style="display: none;">
        <!-- Dynamically populated receipt document -->
      </div>
    </div>
  `;

  // Attach event handlers
  const wingSelect = document.getElementById('receipt-wing');
  const flatSelect = document.getElementById('receipt-flat');
  const generateBtn = document.getElementById('btn-generate-receipt');

  if (wingSelect && flatSelect) {
    wingSelect.addEventListener('change', (e) => {
      flatSelect.innerHTML = generateFlatOptions(e.target.value);
    });
  }

  if (generateBtn) {
    generateBtn.addEventListener('click', () => {
      const wing = wingSelect.value;
      const flat = flatSelect.value;
      showReceiptDocument(wing, flat, lang);
    });
  }
}

function generateFlatOptions(wing) {
  let options = '';
  for (let floor = 7; floor >= 1; floor--) {
    for (let flat = 1; flat <= 4; flat++) {
      const flatNum = `${floor}0${flat}`;
      const flatId = `${wing}-${flatNum}`;
      options += `<option value="${flatId}">${wing}-${flatNum}</option>`;
    }
  }
  return options;
}

function showReceiptDocument(wing, flatId, lang = 'en') {
  const previewContainer = document.getElementById('receipt-preview');
  if (!previewContainer) return;

  const dict = translations[lang] || translations.en;
  const receiptNo = `SGR-2026-F${flatId.replace('-', '')}`;
  const amount = 3500;
  const dateStr = '2026-08-25';

  previewContainer.style.display = 'block';
  previewContainer.innerHTML = `
    <div class="receipt-document" id="printable-receipt">
      <div class="receipt-header">
        <div class="receipt-header__logo">
          <img src="/images/ganpati-2026.jpg" alt="Official Bappa Idol 2026" class="receipt-header__bappa-img" />
        </div>
        <div class="receipt-header__text">
          <h2 class="receipt-header__mandal">${dict.societyName.toUpperCase()}</h2>
          <p class="receipt-header__tagline">${dict.heroTitle} • ${dict.receiptsTitle.toUpperCase()}</p>
          <p class="receipt-header__reg">Reg. No: SGR/GM/2026 • Regd. Society Festival Mandal</p>
        </div>
      </div>

      <div class="receipt-badge-status">
        <span class="badge badge--success">${dict.receiptPaidVerified}</span>
      </div>

      <div class="receipt-body">
        <div class="receipt-row">
          <div><strong>${dict.receiptNo}</strong> <span class="receipt-highlight">${receiptNo}</span></div>
          <div><strong>${dict.receiptDate}</strong> <span>${dateStr}</span></div>
        </div>

        <div class="receipt-row">
          <div><strong>${dict.receiptFromFlat}</strong> <span class="receipt-highlight">${flatId}</span></div>
          <div><strong>${dict.paymentMode}</strong> <span>UPI / Cash</span></div>
        </div>

        <div class="receipt-detail-box">
          <p>Received with thanks a sum of <strong>${formatCurrency(amount)}</strong> towards Ganpati Mahotsav 2026 Society Vargani Fund.</p>
        </div>

        <div class="receipt-row receipt-row--footer">
          <div class="receipt-stamp">
            <div class="mandal-stamp-circle">
              <span>★ SGR 2026 ★</span>
              <p>GANPATI MANDAL</p>
              <small>${dict.mandalSeal}</small>
            </div>
          </div>
          <div class="receipt-signature">
            <div class="sig-line"><em>Mandal Treasurer</em></div>
            <p><strong>${dict.treasurerSig}</strong></p>
          </div>
        </div>
      </div>

      <div class="receipt-actions no-print">
        <button class="btn btn--primary" id="btn-print-receipt">
          ${dict.btnPrintReceipt}
        </button>
      </div>
    </div>
  `;

  // Attach Print Handler
  const printBtn = document.getElementById('btn-print-receipt');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Smooth scroll to preview
  previewContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
