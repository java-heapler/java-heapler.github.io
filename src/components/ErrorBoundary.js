import React, { Component } from 'react';
import { trackError } from '../utils/errorTracking';
import { logException } from '../utils/analytics';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      errorMessage: null
    };
  }

  static getDerivedStateFromError(error) {
    return { 
      hasError: true,
      errorMessage: error.message || 'An unexpected error occurred'
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
    
    // Track the error
    trackError(error, 'ErrorBoundary', { 
      componentStack: errorInfo.componentStack,
      ...this.props.errorContext
    });
    
    // Log to analytics
    logException(`ErrorBoundary: ${error.message}`, true);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" style={{ padding: '2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h1>Something went wrong</h1>
          <p>{this.state.errorMessage}</p>
          <div style={{ marginTop: '2rem' }}>
            <button 
              onClick={() => window.location.reload()} 
              style={{ 
                marginTop: '1rem', 
                padding: '0.75rem 1.5rem', 
                fontSize: '1rem',
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Reload the page
            </button>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
            If this problem persists, please contact support.
          </p>
        </div>
      );
    }
    
    return this.props.children;
  }
}

export default ErrorBoundary; 