/**
 * Finance Calculation Utilities
 * Pure functions — no side effects, no hardcoded values
 */

/**
 * Format number as Indian Rupee currency
 */
export function formatCurrency(amount) {
  return '₹ ' + amount.toLocaleString('en-IN');
}

/**
 * Calculate total from an array of items with `amount` property
 */
export function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

/**
 * Group items by category and sum amounts
 */
export function groupByCategory(items) {
  const groups = {};
  items.forEach(item => {
    if (!groups[item.category]) {
      groups[item.category] = 0;
    }
    groups[item.category] += item.amount;
  });
  return groups;
}

/**
 * Calculate balance = income - expenses
 */
export function calculateBalance(income, expenses) {
  return calculateTotal(income) - calculateTotal(expenses);
}

/**
 * Get percentage of each category relative to total
 */
export function getCategoryPercentages(items) {
  const total = calculateTotal(items);
  if (total === 0) return {};
  
  const groups = groupByCategory(items);
  const percentages = {};
  for (const [category, amount] of Object.entries(groups)) {
    percentages[category] = ((amount / total) * 100).toFixed(1);
  }
  return percentages;
}
