/* src/utils/errorTracking.js */
import { logException } from './analytics';

/**
 * Captures and logs exceptions to various services
 * @param {Error} error - The error object
 * @param {Object} options - Additional options
 * @param {Object} options.extra - Extra information about the error
 * @param {string} options.context - Context in which the error occurred
 */
export function captureException(error, options = {}) {
  // Log to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.group('Error Captured:');
    console.error(error);
    if (options.extra) {
      console.info('Additional Info:', options.extra);
    }
    console.groupEnd();
  }

  // Track in analytics
  logException(
    `${error.message || error.toString()} ${options.context ? `in ${options.context}` : ''}`, 
    false
  );

  // Here you would integrate with an error tracking service like Sentry
  // Example: Sentry.captureException(error, { extra: options.extra });
}

/**
 * Logs information about the user's environment
 * Useful for debugging issues
 */
export function logEnvironmentInfo() {
  const info = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    screenSize: `${window.innerWidth}x${window.innerHeight}`,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timestamp: new Date().toISOString()
  };
  
  console.info('Environment Info:', info);
  return info;
} 