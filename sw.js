// Service Worker ultra liviano para habilitar instalación nativa (PWA)
const CACHE_NAME = 'lo-encontre-pwa-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// Permite que la app funcione siempre online en tiempo real con Firebase
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});