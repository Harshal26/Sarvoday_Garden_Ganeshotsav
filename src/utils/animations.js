/**
 * Animation Utilities
 * Intersection Observer for scroll reveals & counter animations
 */

/**
 * Initialize scroll reveal animations on elements with class 'reveal'
 */
export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Animate a number counter from 0 to target
 */
export function animateCounter(element, target, duration = 1500) {
  let start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (target - start) * eased);
    element.textContent = current.toLocaleString('en-IN');

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/**
 * Initialize stat counter animations (triggered on scroll)
 */
export function initStatCounters() {
  const statsGrid = document.getElementById('stats-grid');
  if (!statsGrid) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.stat-card__value');
          counters.forEach(counter => {
            const target = parseInt(counter.dataset.target, 10);
            if (!isNaN(target)) {
              animateCounter(counter, target);
            }
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(statsGrid);
}

/**
 * Format a date string to readable format
 */
export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Get day and month from date string
 */
export function getDateParts(dateStr) {
  const date = new Date(dateStr);
  return {
    day: date.getDate(),
    month: date.toLocaleDateString('en-IN', { month: 'short' }),
    weekday: date.toLocaleDateString('en-IN', { weekday: 'short' }),
  };
}

/**
 * Sanitize text to prevent XSS
 */
export function sanitize(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
