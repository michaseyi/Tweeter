const CACHE_NAME = "v1"
const urlsToCache = ["home", "offline.html"]

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("Opened cache")
			return cache.addAll(urlsToCache)
		})
	)
})
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then(async (response) => {
			try {
				return await fetch(event.request)
			} catch {
				return await caches.match("offline.html")
			}
		})
	)
})

self.addEventListener("activate", (event) => {
	const cacheWhitelist = []
	cacheWhitelist.push(CACHE_NAME)

	event.waitUntil(
		caches.keys().then((cacheNames) =>
			Promise.all(
				cacheNames.map((cacheName) => {
					if (!cacheNames.includes(cacheName)) {
						return caches.delete(cacheName)
					}
				})
			)
		)
	)
})
