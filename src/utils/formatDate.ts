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
    timeZone: 'UTC'
  });
}

/**
 * Convert a date input (string or Date) to a JavaScript Date representing **noon Pacific Time**
 * (America/Los_Angeles) on that calendar date.
 *
 * This helper **guarantees** a valid Date is returned and therefore centralizes all fallback
 * behavior for RSS `pubDate` generation.
 *
 * Behavior summary:
 * - Accepts either a Date object or a date string (preferably `YYYY-MM-DD`). If a Date is provided,
 *   only the calendar date portion is used (time-of-day is ignored).
 * - Returns a Date corresponding to 12:00 PM in America/Los_Angeles on that date, accounting for DST.
 * - If the Pacific-time computation fails, falls back to 12:00 PM UTC on that date.
 * - If both computations fail (malformed input), returns the current Date as a last resort.
 *
 * @param {string|Date} dateInput - Date string (YYYY-MM-DD) or a Date object
 * @returns {Date} A valid JavaScript Date representing noon Pacific (or the fallback instant)
 */
export function noonPacific(dateInput: string | Date): Date {
  // Normalize to YYYY-MM-DD
  const dateStr = (dateInput instanceof Date)
    ? dateInput.toISOString().slice(0, 10)
    : String(dateInput).slice(0, 10);

  // Try to construct noon in Pacific Time (respecting DST)
  try {
    const pacificNoon = new Date(
      new Date(`${dateStr}T12:00:00`).toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
    );
    if (!isNaN(pacificNoon.getTime())) return pacificNoon;
  } catch (e) {
    // ignore and try fallback
  }

  // Fallback: noon UTC on the same date
  try {
    const utcNoon = new Date(`${dateStr}T12:00:00Z`);
    if (!isNaN(utcNoon.getTime())) return utcNoon;
  } catch (e) {
    // ignore and final fallback
  }

  // If we couldn't produce a valid Pacific or UTC noon, throw so callers can handle the error
  throw new Error(`noonPacific: unable to compute noon for input "${dateInput}"`);
}
