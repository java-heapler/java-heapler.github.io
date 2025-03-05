import React, { Component } from 'react';
import { captureException } from '../utils/errorTracking';
import { logException } from '../utils/analytics';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      errorMessage: '',
      errorInfo: ''
    };
  }

  static getDerivedStateFromError(error) {
    return { 
      hasError: true,
      errorMessage: error.toString()
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console
    console.error('ErrorBoundary caught an error', error, errorInfo);
    
    // Track the error in analytics
    logException(`${error.toString()} - ${errorInfo.componentStack}`, true);
    
    // Send to error tracking service
    captureException(error, { extra: errorInfo });
    
    // Update state with error details
    this.setState({
      errorInfo: errorInfo.componentStack
    });
  }

  render() {
    if (this.state.hasError) {
      // Use CSS variables for theming instead of hardcoded colors
      return (
        <div 
          role="alert"
          aria-live="assertive"
          className="error-boundary"
          style={{ 
            padding: '2rem', 
            textAlign: 'center',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-primary)',
            borderRadius: '8px',
            margin: '2rem auto',
            maxWidth: '800px',
            boxShadow: '0 4px 8px var(--shadow-color)'
          }}
        >
          <h1>Something went wrong</h1>
          <p>We're sorry, but an error occurred while rendering this page.</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ 
              marginTop: '1rem', 
              padding: '0.75rem 1.5rem', 
              fontSize: '1rem',
              backgroundColor: 'var(--secondary)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
          {process.env.NODE_ENV === 'development' && (
            <details style={{ marginTop: '2rem', textAlign: 'left' }}>
              <summary>Error Details</summary>
              <p style={{ color: 'var(--accent)', marginTop: '1rem' }}>{this.state.errorMessage}</p>
              <pre style={{ 
                overflowX: 'auto', 
                backgroundColor: 'var(--bg-light)', 
                padding: '1rem',
                borderRadius: '4px',
                marginTop: '1rem',
                fontSize: '0.85rem',
                lineHeight: 1.5,
                color: 'var(--text-secondary)'
              }}>
                {this.state.errorInfo}
              </pre>
            </details>
          )}
        </div>
      );
    }
    
    return this.props.children;
  }
}

export default ErrorBoundary; 