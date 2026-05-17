// MPNMJEC Attendance - Service Worker
const CACHE_NAME = "mpnmjec-v1";

// Cache செய்ய வேண்டிய files
const STATIC_FILES = [
  "/",
  "/index.html",
  "/style.css",
  "/manifest.json",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
];

// Install — files cache செய்கிறோம்
self.addEventListener("install", event => {
  console.log("✅ Service Worker Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_FILES).catch(err => {
        console.log("Cache error (non-critical):", err);
      });
    })
  );
  self.skipWaiting();
});

// Activate — பழைய cache நீக்குகிறோம்
self.addEventListener("activate", event => {
  console.log("✅ Service Worker Activated!");
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch — Network first, Cache fallback
self.addEventListener("fetch", event => {
  // Firebase requests — always network (cache செய்யக்கூடாது)
  if (event.request.url.includes("firebasedatabase.app") ||
      event.request.url.includes("firebase") ||
      event.request.url.includes("googleapis.com/identitytoolkit")) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Network success — cache update செய்கிறோம்
        let responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Network fail — cache இல் இருந்து serve செய்கிறோம்
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          // Offline fallback
          if (event.request.destination === "document") {
            return caches.match("/index.html");
          }
        });
      })
  );
});
