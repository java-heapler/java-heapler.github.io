/* src/utils/errorTracking.js */

import { logException } from './analytics';

export const trackError = (error, componentName, context = {}) => {
  console.error(`Error in ${componentName}:`, error);
  
  // Log to analytics
  logException(`${componentName}: ${error.message}`, false);
  
  // You could also send to a service like Sentry here
  
  return {
    error: true,
    message: error.message
  };
};

export const withErrorBoundary = (fn, componentName) => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      return trackError(error, componentName);
    }
  };
}; 