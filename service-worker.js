importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

if (workbox) {
  console.log('Workbox is loaded');

  // Precache files. The manifest will be injected by Workbox during the build process.
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

  // Precache the offline fallback page
  workbox.precaching.precacheAndRoute([
    { url: '/offline.html', revision: '1.0' }
  ]);

  // Cache CSS, JS, and image files with a Stale-While-Revalidate strategy
  workbox.routing.registerRoute(
    ({request}) => request.destination === 'style' || request.destination === 'script' || request.destination === 'image',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'assets-cache',
    })
  );
  
  // Cache Google Fonts
  workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'google-fonts',
    })
  );

  // Fallback to offline page for navigation requests that fail
  workbox.routing.setCatchHandler(async ({ event }) => {
    // Return the precached offline page if a document is being requested
    if (event.request.destination === 'document') {
      try {
        return await workbox.precaching.matchPrecache('/offline.html');
      } catch (error) {
        return Response.error();
      }
    }
    
    // If we don't have a fallback, return an error response
    return Response.error();
  });
} else {
  console.log('Workbox could not be loaded. No offline support.');
}

// Force the waiting service worker to become the active service worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Background sync for deferred operations when coming back online
self.addEventListener('sync', (event) => {
  if (event.tag === 'deferred-operations') {
    event.waitUntil(
      handleDeferredOperations()
    );
  }
});

// Function to handle any operations that were deferred while offline
async function handleDeferredOperations() {
  // This would be implemented to handle any stored operations
  // that need to be sent when the user comes back online
  console.log('Handling deferred operations after coming back online');
  
  // Example: Read from IndexedDB and process operations
  // const storage = await getStorage();
  // const deferredOps = await storage.getAll('deferredOperations');
  // Process operations...
} 