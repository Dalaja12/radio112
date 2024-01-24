self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('malinche-radio').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/js/lunaradio-sincors.js',
          // Agrega aquí los recursos adicionales que tu PWA necesita en caché
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  