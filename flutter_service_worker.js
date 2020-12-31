'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "17ac4516f0ec6da12383bda5a849499d",
"index.html": "f634691a7e0404556a527f925139e79f",
"/": "f634691a7e0404556a527f925139e79f",
"native.js": "36a4c07a4b0a8271cf18facd58664106",
"main.dart.js": "c4462be0e04f7dfb4cae4572584cd306",
"favicon.png": "21008bfe959c18f3dd9bb9da291e8385",
"error.png": "c41d34f620c93c8055b2a6df7db2ff08",
"icons/apple-splash-1136-640.jpg": "4204fbc4b7b54c49e453c85bf425ef35",
"icons/apple-splash-1242-2208.jpg": "e2202ab2fbdabaa7a8c0ae46ad734533",
"icons/apple-splash-750-1334.jpg": "b1f498f73df962eaf4dd308c0569bdbc",
"icons/apple-splash-2532-1170.jpg": "8b4fbe67f44d39e96f97b02c40eb9092",
"icons/apple-splash-2208-1242.jpg": "13f60ac818a4dde5c1348bd417460e5d",
"icons/apple-icon-180.png": "39e90f9b19bc58decd61aea27e1b92ba",
"icons/apple-splash-2160-1620.jpg": "8dcaf5da2fa4096bcaf73c23d763ae3d",
"icons/apple-splash-1668-2224.jpg": "2596929f9b3574677a407179ff06d5b2",
"icons/apple-splash-1284-2778.jpg": "3cedc5cab2911489fbd568fa51087786",
"icons/apple-splash-2688-1242.jpg": "62fc5405d3a5a279ee211e21cf3e1701",
"icons/apple-splash-2778-1284.jpg": "b77d828c543eb7938c868fc73b08518a",
"icons/apple-splash-1536-2048.jpg": "e6bcb6becd7c1a25993aec32629839f1",
"icons/apple-splash-2388-1668.jpg": "a5a6f7e6d37423e89efb1197f2c4af00",
"icons/manifest-icon-512.png": "3b7ab5a9cdfd461d4090d10ce156a81c",
"icons/apple-splash-2048-2732.jpg": "b056186a36022d5626f94e8a61dc36f4",
"icons/apple-splash-1334-750.jpg": "dcd998cf6b7b58acf0749fb9a13b9521",
"icons/apple-splash-1792-828.jpg": "0dc6b423f46389b7836629d0c0a4a1cd",
"icons/apple-splash-1125-2436.jpg": "21c91066405b57bdb15da357a2063473",
"icons/apple-splash-2732-2048.jpg": "e25f8d1bf671823a3ec99dfcc60a4723",
"icons/apple-splash-1242-2688.jpg": "fdbbf84f25c0217480115fbee7765470",
"icons/apple-splash-2436-1125.jpg": "959b06c797cfc4df844326eae38e59be",
"icons/apple-splash-1170-2532.jpg": "759537734c3999d45a0169e37dd08832",
"icons/apple-splash-828-1792.jpg": "6acdeff825f629e0fdf96bacf836e80d",
"icons/apple-splash-1620-2160.jpg": "a1ac1647fcbb575d9112f897c348f497",
"icons/apple-splash-1668-2388.jpg": "6d557c2fae65cfa3007c9d7e008499d4",
"icons/apple-splash-2048-1536.jpg": "f93c186167ce9aa5ee7f64caac8ce722",
"icons/manifest-icon-192.png": "61aae988dd1354f699e20edc217c657e",
"icons/apple-splash-2224-1668.jpg": "e6a0be059b5475ea7fc7347c2d1c563a",
"icons/apple-splash-640-1136.jpg": "a04628859367f5f6ca7cdca72f909732",
"manifest.json": "eae33a14c14467e648c899874c227712",
"assets/AssetManifest.json": "3be524ab1567a547bd2ac4b5a8df8055",
"assets/NOTICES": "c0cc7ac2456c5a87943ea8dfe98cce70",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/riv/hobbies.riv": "ad054461155cf2b78b24db0bf219a1b9",
"assets/assets/riv/mail.riv": "e4760a8e3f94acf144bb69b23fc22f91",
"assets/assets/images/flask.png": "b592b1154d25c072c104d331939dd67c",
"assets/assets/images/zh_white.png": "605913887664747e7aeabd3f3385a3cd",
"assets/assets/images/tensorflow.png": "98d39edfd4443f9c28b6525782ce3ccf",
"assets/assets/images/python.png": "c36dccadd99982a2966ea22fe5a1a21c",
"assets/assets/images/opencv.png": "8fd9ef8e488a57fd1adc014c5fcace3a",
"assets/assets/images/cpp.png": "614e81bd92afc62be8127beac5e1b9af",
"assets/assets/images/outlook.png": "2528f0a7b2280e74ba7e14f9b240150e",
"assets/assets/images/github.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/assets/images/java.png": "4b583951d477e5a38adf39bcfd5e79f3",
"assets/assets/images/rust.png": "3e991d04eaf43675632b86ed212a143e",
"assets/assets/images/gmail.png": "8ac3b5d4477a35d7c4e9f75fc077358d",
"assets/assets/images/skill.jpg": "515ea5998aae5c8c8061fb33c57b92e0",
"assets/assets/images/javascript.png": "db7933e6a7f7acaf99a33f39b286974b",
"assets/assets/images/background.jpg": "2d9d263d6680b4d6cea32ca018166415",
"assets/assets/images/medium.png": "91450b4eb04851c6bf6f4620042e8da1",
"assets/assets/images/zh_black.png": "469a0ca0bebcfb2cf21a09500a56be5d",
"assets/assets/images/other.jpg": "18e0638b61bd34eb505889b5a6758394",
"assets/assets/images/go.png": "cbda8fc457c9145bc0ad939b8b71f887",
"assets/assets/images/logo.png": "21008bfe959c18f3dd9bb9da291e8385",
"assets/assets/images/qt.png": "9c28be555dc1c4179cf41f2c8cda8883",
"assets/assets/images/cmake.png": "97da363b5ff6ad421b1583a79f9c44e8",
"assets/assets/images/swift.png": "b14548c817b13566997f259a67b0e117",
"assets/assets/images/pwa.png": "5352dd1057b7d65337659ddc8566bfb3",
"assets/assets/images/k8s.png": "3b07f741a75ec5bbc09f70fa1b4ba937",
"assets/assets/images/mail.ico": "ac16fa7fc862073b02acd1187fc6def4",
"assets/assets/images/myDevelopment.jpg": "60ceeebd761fab6b316262e2e0488322",
"assets/assets/images/typescript.png": "cf2eeeb829610bc029776cdab2b1f3de",
"assets/assets/images/dart.png": "cd928b54cee4f8cb81591332e0dafb64",
"assets/assets/images/jinan.png": "a161ce623129757a2b20f921f791cf23",
"assets/assets/images/kotlin.png": "e8c4671b1cca100eed3c9cfed1f28b05",
"assets/assets/images/electron.png": "3ba2a5b8cbc4059d5c04bdc43e8e2d8a",
"assets/assets/images/nodejs.png": "5813f3082a7fe8624b3b5a6ab6c6b6af",
"assets/assets/fonts/Noto_Sans_SC/NotoSansSC-Regular.otf": "370c2c5d738acca06fafa8fa8b1e2033",
"assets/assets/fonts/Noto_Sans_SC/NotoSansSC-Thin.otf": "2e365ca1185a4fdd1bcf29f8e9a58fa2",
"assets/assets/fonts/Noto_Sans_SC/NotoSansSC-Light.otf": "a56b3cd8a1a76fb323c74935ad5a3012",
"assets/assets/fonts/Noto_Sans_SC/NotoSansSC-Medium.otf": "44655c54ecff52bae7e4d79c80b3d563",
"assets/assets/fonts/Noto_Sans_SC/NotoSansSC-Bold.otf": "d8a8395b3f1e53fc64393906ff995e48",
"assets/assets/fonts/Noto_Sans_SC/NotoSansSC-Black.otf": "015fd15b32d2fc14879949b7df5849a8",
"assets/assets/fonts/Noto_Sans_SC/OFL.txt": "bec6f772ed2e38634da53c388c30437d",
"preload.css": "dad13b9420099890fdfc9edb9cf5f4d1"
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
