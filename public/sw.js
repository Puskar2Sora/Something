const SW_VERSION = 'lithium-v1';
const STATIC_CACHE = `${SW_VERSION}-static`;
const IMAGE_CACHE = `${SW_VERSION}-images`;
const FONT_CACHE = `${SW_VERSION}-fonts`;
const RUNTIME_CACHE = `${SW_VERSION}-runtime`;

const STATIC_ASSETS = ['/', '/index.html', '/favicon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  globalThis.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !key.startsWith(SW_VERSION))
          .map((key) => caches.delete(key))
      )
    )
  );
  globalThis.clients.claim();
});

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const networkPromise = fetch(request)
    .then((response) => {
      if (response?.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  return cached || networkPromise || fetch(request);
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response?.ok) {
    cache.put(request, response.clone());
  }
  return response;
}

async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response?.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    throw new Error('Network and cache miss');
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (url.origin !== self.location.origin && !/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    return;
  }

  if (request.destination === 'document') {
    event.respondWith(networkFirst(request, RUNTIME_CACHE));
    return;
  }

  if (request.destination === 'image') {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }

  if (request.destination === 'font' || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    event.respondWith(cacheFirst(request, FONT_CACHE));
    return;
  }

  if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
    return;
  }

  event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
});
