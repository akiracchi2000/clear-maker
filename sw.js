const CACHE_NAME = 'clear-maker-v1.5.16'; // バージョンを変える時はここを変更
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './README.md',
    './icon-192.png',
    './icon-512.png',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap',
    'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js',
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js',
    'https://html2canvas.hertzen.com/dist/html2canvas.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js'
];

self.addEventListener('install', (event) => {
    // 【重要】待機中のSWを強制的にスキップして即時有効にする
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

self.addEventListener('fetch', (event) => {
    // Check if the request is for navigation (HTML) or local assets
    const isNavigation = event.request.mode === 'navigate';
    const isLocalAsset = event.request.url.startsWith(self.location.origin);

    // Network First Strategy for HTML and Local Assets
    if (isNavigation || isLocalAsset) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Update cache with the new response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                })
                .catch(() => {
                    // Fallback to cache if network fails
                    return caches.match(event.request);
                })
        );
    } else {
        // Cache First Strategy for other assets (e.g., CDN libraries)
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request).then(
                        (response) => {
                            if (!response || response.status !== 200 || response.type !== 'basic') {
                                return response;
                            }
                            const responseToCache = response.clone();
                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(event.request, responseToCache);
                                });
                            return response;
                        }
                    );
                })
        );
    }
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // 【重要】新しいSWがすぐにページ（クライアント）を制御下に置くようにする
            return self.clients.claim();
        })
    );
});