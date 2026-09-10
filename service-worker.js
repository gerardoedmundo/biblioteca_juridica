const CACHE_NAME = "biblioteca-juridica-v1";

const archivos = [
  "./",
  "./index.html"
];

self.addEventListener("install", evento => {
  evento.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(archivos))
  );
});


self.addEventListener("fetch", evento => {
  evento.respondWith(
    fetch(evento.request)
      .catch(() => caches.match(evento.request))
  );
});
