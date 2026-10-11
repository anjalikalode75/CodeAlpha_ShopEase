/**
 * Formats a numeric price into localized currency string
 * @param {number} amount
 * @param {string} currency
 */
export const formatCurrency = (amount, currency = 'USD') => {
  if (typeof amount !== 'number') return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
};

/**
 * Formats an ISO date string into readable date
 * @param {string|Date} date
 */
export const formatDate = (date) => {
  if (!date) return 'N/A';
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
};
