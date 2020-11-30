'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "17ac4516f0ec6da12383bda5a849499d",
"index.html": "92a570a5545eac815dbf41d637e31563",
"/": "92a570a5545eac815dbf41d637e31563",
"main.dart.js": "3711c9e754a2c82fbded44400f902a95",
"favicon.png": "21008bfe959c18f3dd9bb9da291e8385",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fbc9cbc51d825aa3de3591726d7d6231",
"assets/js/native.js": "6e4ddf1090b18315ec03bc7221870764",
"assets/AssetManifest.json": "2bd3aabda12cc380bc5050083653f0fc",
"assets/NOTICES": "a61cd7054739cd1205d75f2b270a6f6f",
"assets/FontManifest.json": "c2da117c965911def2f5f69db0316423",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/flask.png": "b592b1154d25c072c104d331939dd67c",
"assets/assets/images/tensorflow.png": "98d39edfd4443f9c28b6525782ce3ccf",
"assets/assets/images/python.png": "c36dccadd99982a2966ea22fe5a1a21c",
"assets/assets/images/opencv.png": "8fd9ef8e488a57fd1adc014c5fcace3a",
"assets/assets/images/cpp.png": "614e81bd92afc62be8127beac5e1b9af",
"assets/assets/images/github.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/assets/images/java.png": "711f654d966e29da576399cc8d873a9e",
"assets/assets/images/rust.png": "3e991d04eaf43675632b86ed212a143e",
"assets/assets/images/gmail.png": "8ac3b5d4477a35d7c4e9f75fc077358d",
"assets/assets/images/skill.jpg": "515ea5998aae5c8c8061fb33c57b92e0",
"assets/assets/images/javascript.png": "db7933e6a7f7acaf99a33f39b286974b",
"assets/assets/images/background.jpg": "2d9d263d6680b4d6cea32ca018166415",
"assets/assets/images/other.jpg": "18e0638b61bd34eb505889b5a6758394",
"assets/assets/images/go.png": "cbda8fc457c9145bc0ad939b8b71f887",
"assets/assets/images/logo.png": "21008bfe959c18f3dd9bb9da291e8385",
"assets/assets/images/qt.png": "9c28be555dc1c4179cf41f2c8cda8883",
"assets/assets/images/swift.png": "b14548c817b13566997f259a67b0e117",
"assets/assets/images/pwa.png": "5352dd1057b7d65337659ddc8566bfb3",
"assets/assets/images/k8s.png": "3b07f741a75ec5bbc09f70fa1b4ba937",
"assets/assets/images/mail.ico": "ac16fa7fc862073b02acd1187fc6def4",
"assets/assets/images/typescript.png": "cf2eeeb829610bc029776cdab2b1f3de",
"assets/assets/images/dart.png": "cd928b54cee4f8cb81591332e0dafb64",
"assets/assets/images/jinan.png": "a161ce623129757a2b20f921f791cf23",
"assets/assets/images/kotlin.png": "e8c4671b1cca100eed3c9cfed1f28b05",
"assets/assets/images/electron.png": "3ba2a5b8cbc4059d5c04bdc43e8e2d8a",
"assets/assets/images/nodejs.png": "5813f3082a7fe8624b3b5a6ab6c6b6af",
"assets/assets/fonts/Noto_Sans_SC/NotoSansSC-Regular.otf": "370c2c5d738acca06fafa8fa8b1e2033"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}