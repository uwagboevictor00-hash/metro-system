self.addEventListener("install", (event) => {
  console.log("METRO SW installed");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});