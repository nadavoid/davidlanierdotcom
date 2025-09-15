// src/utils/formatDate.ts

/**
 * Formats a post date string into a consistent, human-friendly format.
 * Example output: "Monday, June 1, 2020"
 */
export function formatPostDate(dateString: string, locale = 'en-US'): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString; // fallback for invalid dates
  return date.toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
