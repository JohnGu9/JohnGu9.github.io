'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "17ac4516f0ec6da12383bda5a849499d",
"index.html": "b1c66968d5727fca8314b829f359d5a6",
"/": "b1c66968d5727fca8314b829f359d5a6",
"native.js": "36a4c07a4b0a8271cf18facd58664106",
"main.dart.js": "15b65a060cb6dbac6d97bbc0edbde3c0",
"favicon.png": "21008bfe959c18f3dd9bb9da291e8385",
"error.png": "c41d34f620c93c8055b2a6df7db2ff08",
"canvaskit.js": "310f62861c06dbb592838bee033072eb",
"icons/apple-splash-1136-640.jpg": "7e89de02c658d7d7d36db7b17626711a",
"icons/apple-splash-1242-2208.jpg": "06de4d322ddc8fdd59338692e36a82b2",
"icons/apple-splash-750-1334.jpg": "de3057acbdc1ad83920f281283a7ec03",
"icons/apple-splash-2532-1170.jpg": "d5ba9396d0e236921630a275e00a54c8",
"icons/apple-splash-2208-1242.jpg": "63a20da82300b95b6fb954730a3e2f72",
"icons/apple-icon-180.png": "2daaf537e19e4f9f3ae3579f496483b8",
"icons/apple-splash-2160-1620.jpg": "880379eaec0b1347fe65b234b9dcd5cd",
"icons/apple-splash-1668-2224.jpg": "b70efe27f33eccd71c2cab1bdadc96ec",
"icons/apple-splash-1284-2778.jpg": "ccbbd96246128b9019b8bf5cc38fbbc9",
"icons/apple-splash-2688-1242.jpg": "ea4c3788e1bcb8a2e69effea61e3a17e",
"icons/apple-splash-2778-1284.jpg": "754f82fe8d95e776e7d8c68d0e76ba5f",
"icons/apple-splash-1536-2048.jpg": "93113dd0ea3ac9205d3f600fe8243092",
"icons/apple-splash-2388-1668.jpg": "95256bf0fefc9d30113ff152dd086eda",
"icons/manifest-icon-512.png": "a6f678a376c235bdc861c6d3da3124e6",
"icons/apple-splash-2048-2732.jpg": "0d99fd2e90a96edd23404d65d26459fe",
"icons/apple-splash-1334-750.jpg": "0c35e8ae38c4264266a2d3b32e48ae1e",
"icons/apple-splash-1792-828.jpg": "fa55cc05312b08d18f6edd8cce20c18b",
"icons/apple-splash-1125-2436.jpg": "5edb27e34058cfff8d5ac2c903fad74c",
"icons/apple-splash-2732-2048.jpg": "d9dc34c98395d215878c80d365b670a7",
"icons/apple-splash-1242-2688.jpg": "537a3d1b45849e5c39000bd9c9cab19d",
"icons/apple-splash-2436-1125.jpg": "9b5746532f866f59489b28b0fe35d947",
"icons/apple-splash-1170-2532.jpg": "dfc917228e4a40a0f3ce846119b142c1",
"icons/apple-splash-828-1792.jpg": "40fc1a4fb32f89fab52c3f609ed3d712",
"icons/apple-splash-1620-2160.jpg": "411779976d0d0e65683719164d607636",
"icons/apple-splash-1668-2388.jpg": "54f23c3cccda1d822c8cdbfec44a1cf3",
"icons/apple-splash-2048-1536.jpg": "6f0722774f07f04337c21de5cd2796c9",
"icons/manifest-icon-192.png": "6238d93a9ecb132195da61c3c157099e",
"icons/apple-splash-2224-1668.jpg": "2f066fd4554b649e7eadfabbcba3c071",
"icons/apple-splash-640-1136.jpg": "8298cab89bddf11f6ce61bce20ab5d4d",
"manifest.json": "eae33a14c14467e648c899874c227712",
"canvaskit.wasm": "94da52ff225af2ee7b498ca694692a1f",
"assets/LICENSE": "99c976cfcdcdde168edfb17560817fa3",
"assets/AssetManifest.json": "2d1e6ddbd60d8593f9e2995e8f5fa4be",
"assets/NOTICES": "31c1f74e507e1f875407b338439479cb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/flask.png": "b592b1154d25c072c104d331939dd67c",
"assets/assets/images/zh_white.png": "605913887664747e7aeabd3f3385a3cd",
"assets/assets/images/tensorflow.png": "98d39edfd4443f9c28b6525782ce3ccf",
"assets/assets/images/python.png": "c36dccadd99982a2966ea22fe5a1a21c",
"assets/assets/images/opencv.png": "8fd9ef8e488a57fd1adc014c5fcace3a",
"assets/assets/images/undraw_Coding_re_iv62.svg": "cc90c32bd59ddcedcf8c14e060f724a9",
"assets/assets/images/cpp.png": "614e81bd92afc62be8127beac5e1b9af",
"assets/assets/images/undraw_lightbulb_moment_re_ulyo.svg": "9b733343ccac9f62a1a76b87830640cf",
"assets/assets/images/outlook.png": "2528f0a7b2280e74ba7e14f9b240150e",
"assets/assets/images/github.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/assets/images/java.png": "4b583951d477e5a38adf39bcfd5e79f3",
"assets/assets/images/undraw_Design_notes_re_eklr.svg": "85538c78b4dc7c564d313bedf73efd7d",
"assets/assets/images/rust.png": "3e991d04eaf43675632b86ed212a143e",
"assets/assets/images/undraw_Modern_professional_re_3b6l.svg": "69eb0a757e7b20fe065f5290a18f42d8",
"assets/assets/images/gmail.png": "8ac3b5d4477a35d7c4e9f75fc077358d",
"assets/assets/images/skill.jpg": "515ea5998aae5c8c8061fb33c57b92e0",
"assets/assets/images/javascript.png": "db7933e6a7f7acaf99a33f39b286974b",
"assets/assets/images/background.jpg": "2d9d263d6680b4d6cea32ca018166415",
"assets/assets/images/medium.png": "91450b4eb04851c6bf6f4620042e8da1",
"assets/assets/images/zh_black.png": "469a0ca0bebcfb2cf21a09500a56be5d",
"assets/assets/images/other.jpg": "18e0638b61bd34eb505889b5a6758394",
"assets/assets/images/go.png": "cbda8fc457c9145bc0ad939b8b71f887",
"assets/assets/images/undraw_fast_loading_re_8oi3.svg": "5c70020686f587af7fea6b8b19766d33",
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
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "cf23e1bb619029496260760b72aebd30",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "35a9c89aff1396595ad345e378a32aca",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "5b44818d2b9eda3e23cd5edd7b49b7d5",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "a3ce4440f2abf76f4a1b14b83920138c",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/assets/fonts/Roboto/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "99682a78fa4fe61e1177b94757336bbf",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "321de678e592d0b8f44f1a82d7ca4b62",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "5ebb24ee1112dd9562629375c387879a",
"preload.css": "fceb3c96ff23b0207216f59017f58655"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
