/* src/serviceWorker.js */

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config);
      } else {
        registerValidSW(swUrl, config);
      }
      
      // Add refresh UI for new updates
      setupRefreshUI();
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      // Check for updates every hour in production
      if (process.env.NODE_ENV === 'production') {
        setInterval(() => {
          registration.update();
        }, 60 * 60 * 1000); // 1 hour
      }
      
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log('New content is available and will be used when all tabs are closed.');
              
              // Show update notification
              showRefreshUI();
              
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              console.log('Content is cached for offline use.');
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, { headers: { 'Service-Worker': 'script' } })
    .then((response) => {
      const contentType = response.headers.get('content-type');
      if (response.status === 404 || (contentType != null && contentType.indexOf('javascript') === -1)) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('No internet connection found. Running in offline mode.');
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

// Helper function to request background sync
export function requestBackgroundSync(tag = 'deferred-operations') {
  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.ready
      .then((registration) => {
        return registration.sync.register(tag);
      })
      .then(() => {
        console.log('Background sync registered!');
      })
      .catch((err) => {
        console.error('Background sync registration failed:', err);
      });
  } else {
    console.log('Background sync not supported');
    // Implement fallback mechanism here
  }
}

// UI for update notification
function setupRefreshUI() {
  window.addEventListener('load', () => {
    if (document.getElementById('sw-refresh-notification')) return;
    
    const refreshDiv = document.createElement('div');
    refreshDiv.id = 'sw-refresh-notification';
    refreshDiv.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 16px;
      background-color: var(--primary-color, #0070f3);
      color: white;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: none;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      z-index: 9999;
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 400px;
    `;
    
    const message = document.createElement('p');
    message.textContent = 'New version available!';
    message.style.margin = '0 16px 0 0';
    
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Refresh';
    refreshButton.style.cssText = `
      background-color: white;
      color: var(--primary-color, #0070f3);
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
    `;
    refreshButton.addEventListener('click', () => {
      window.location.reload();
    });
    
    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.style.cssText = `
      background: none;
      border: none;
      color: white;
      margin-left: 8px;
      cursor: pointer;
      font-size: 14px;
      opacity: 0.7;
    `;
    closeButton.addEventListener('click', () => {
      refreshDiv.style.display = 'none';
    });
    
    refreshDiv.appendChild(message);
    refreshDiv.appendChild(refreshButton);
    refreshDiv.appendChild(closeButton);
    document.body.appendChild(refreshDiv);
  });
}

function showRefreshUI() {
  window.addEventListener('load', () => {
    const refreshUI = document.getElementById('sw-refresh-notification');
    if (refreshUI) {
      refreshUI.style.display = 'flex';
    }
  });
} 