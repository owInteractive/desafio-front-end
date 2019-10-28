/* eslint-disable no-console */
/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

workbox.core.setCacheNameDetails({prefix: "desafio-frontend-2019"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.precacheAndRoute([{
  "revision": "17ecfaee522eaf5b3ad9c9aa1b2973cc",
  "url": "/manifest.json"
}]);

let cacheName = 'desafio-frontend-2019'
let filesToCache = [
  '/',
  '/index.html',
  '/fonts/*',
  '/img/*',
  '/logo.png',
]
const placeholderHandler = workbox.strategies.cacheFirst({
  cacheName: 'placeholder-cache',
});

workbox.routing.registerRoute('https://api.myjson.com/bins/9e9fl', args => {
  return placeholderHandler.handle(args).then(response => {
    console.log("Online: Fetch was called successful");
    return response;
  }).catch(err => {
    console.log("no cache data");
  });
});

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Installer')
  e.waitUntil(
      caches.open(cacheName).then(function (cache) {
        console.log('[ServiceWorker] Caching app shell')
        return cache.addAll(filesToCache)
      })
  )
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate')
});

self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetch', e.request.url)
  e.respondWith(
      caches.match(e.request).then(function (response) {
        if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') return;
        console.log('[ServiceWorker] Get cache for ', e.request.url)
        return response || fetch(e.request)
      })
  )
});
