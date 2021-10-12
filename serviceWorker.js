const staticContagemValores = "msc-health-check-v1.0"
const assets = [
    "/",
    "/index.html",
    // "/css/style.css",
    "/js/index.js",
    "/js/app.js",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticContagemValores).then(cache => {
            cache.addAll(assets)
        })
    )
});

// Network First, then Cache Strategy
self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request)
        })
    )
})
