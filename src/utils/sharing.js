/**
 * Sharing Utilities
 * WhatsApp share, Web Share API, clipboard copy
 */

const SITE_URL = window.location.href;
const SHARE_TEXT = '🙏 Shree Ganesh Residency — Ganpati Mahotsav 2026\n\nCheck out our society\'s Ganpati festival portal for schedule, events, photos, finance and more!\n\nगणपती बाप्पा मोरया! 🪔';

/**
 * Share via WhatsApp
 */
export function shareOnWhatsApp() {
  const url = `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + '\n\n' + SITE_URL)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Share using Web Share API (mobile-native sharing)
 * Falls back to clipboard copy on desktop
 */
export async function shareWebsite() {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Shree Ganesh Residency — Ganpati Mahotsav 2026',
        text: SHARE_TEXT,
        url: SITE_URL,
      });
    } catch (err) {
      // User cancelled — do nothing
      if (err.name !== 'AbortError') {
        fallbackCopy();
      }
    }
  } else {
    fallbackCopy();
  }
}

/**
 * Fallback: copy URL to clipboard
 */
function fallbackCopy() {
  navigator.clipboard.writeText(SITE_URL).then(() => {
    showToast('Link copied to clipboard! 📋');
  }).catch(() => {
    // Last resort fallback
    const textarea = document.createElement('textarea');
    textarea.value = SITE_URL;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Link copied to clipboard! 📋');
  });
}

/**
 * Simple toast notification
 */
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-secondary);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    z-index: 9999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    animation: toast-in 0.3s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
