'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bc9a49bbc9bfbd7f55949d7bc8fa1aeb",
"index.html": "6b89b4d0fb0631eab70105dd4cf86932",
"/": "6b89b4d0fb0631eab70105dd4cf86932",
"main.dart.js": "3fdd540cf510cef92fe5f6a87c64bc44",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a070ecbc07fb54e9e7b3cac06e2f5ae5",
"assets/AssetManifest.json": "af7e0f74fa54c27028f15e7616771369",
"assets/NOTICES": "c6c6d85bd5dc0d40efe3bd3d30f16fa1",
"assets/FontManifest.json": "81d7771d32154d0c36ba17a038c9b275",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "751547c5097a05264e804669969f321f",
"assets/fonts/xx.ttf": "53ef5ecb75c00c2f42ff6c27020eea59",
"assets/fonts/Julee.ttf": "fe5c8e5f2697c8d8399e4f62d796bb44",
"assets/fonts/Skranji_Regular.ttf": "00d34177aca5bf6aba633534716d41db",
"assets/fonts/MaterialIcons-Regular.otf": "3749aa075e484ef0b04709bf68222ad0",
"assets/assets/images/readlast.png": "e2d02a565a8de92b47c0b8ef50f8c7a9",
"assets/assets/images/Selfcare.png": "2f8b91fa5893644d7b00f9a34cd5dd97",
"assets/assets/images/garudasana.png": "86857e6a34b156b9d36e543a8c7db23e",
"assets/assets/images/cooking2.png": "3296f95df7db445839b59adad11ff4d2",
"assets/assets/images/yoga_image.png": "7917e0e293d0dc53188cc47db7c21f94",
"assets/assets/images/uttanasana.gif": "7524685179a8a7f54758e5248aab0db6",
"assets/assets/images/travel_last.png": "05cfe7b29b3459d27f399bbd534c9de5",
"assets/assets/images/counsellorregistrationii.jpeg": "9c2af02fa1a6371c9142267fc6505f13",
"assets/assets/images/cooking1.png": "4be8e094837aad0e0ab6afa3b523132d",
"assets/assets/images/friend_last.png": "5f958e0e1224762ddc6ad84a3af66959",
"assets/assets/images/work_hard.png": "d65f12cd168bc4b836b0282d1d7626e3",
"assets/assets/images/registration.jpeg": "80cb3bfd142f20d80fa2b10c8f1c73e4",
"assets/assets/images/travel.png": "97f5d3b34c31435e319901d7426fbeaa",
"assets/assets/images/talk.png": "28f817016c65bea2517896592d5ec7d5",
"assets/assets/images/animals.png": "f9fd6e1a05098356b61bf7be88a3c3a8",
"assets/assets/images/self.png": "636c9c2f2caf5ced889c9d6237e9d076",
"assets/assets/images/profileimage.webp": "a5369809569edc4e18ad64c495326f6e",
"assets/assets/images/gardd.png": "a7050aa165e83a9223996070ed486c7b",
"assets/assets/images/musicc.webp": "6ef04d56dc74f4bcfddab61bf8650a2d",
"assets/assets/images/counselling.png": "ad612912be51743fe841897031ebaa20",
"assets/assets/images/Setu_bandhasana.png": "a8619695866ced64cbeed9f4fab526df",
"assets/assets/images/gard.png": "dbd47e478562c6454e318f5bd4479dbf",
"assets/assets/images/friends.png": "5083425d054bf7cef933bd7518401d83",
"assets/assets/images/feeling_stressed.png": "2e19ae2e9e0ab4a841beb92f10b40a21",
"assets/assets/images/balasana_2.png": "4c848b32e8b0d4c5eae69d3a7e29ffd6",
"assets/assets/images/read.png": "127701d966daaf017591c303116c1700",
"assets/assets/images/balasana_1.png": "43cf552c32f798b90932c0f97f37aeb1",
"assets/assets/images/logo.png": "0c1eaccb1b7ae7f8aace3b64f14d98ae",
"assets/assets/images/nature.png": "5705e48e9437ca1efbdfe7c97983425b",
"assets/assets/images/self_care_isnt_selfish.png": "9466d6d1c0277c5dace20dc1a6dcf8ab",
"assets/assets/images/wild.png": "2cb37fcba77c5543931fdc296d7656d4",
"assets/assets/images/wildd.png": "d06df757460bbfc4331bd98b5e13d7b4",
"assets/assets/images/Anjaneyasana.png": "cabe01f7a65a31fb117171b889603739",
"assets/assets/images/shavasana.png": "33ec7eee52146f5a177a4e1a5e3f7fd6",
"assets/assets/images/Viparita_Karani.png": "1b147523c0a9ea5aa435558c0e2ec85e",
"assets/assets/images/google.png": "5f752d55eef30932342b0e97d81cbdac",
"assets/assets/images/facebook.jpeg": "3fa365a3351a20983fec12e00df763b7",
"assets/assets/images/diomend.png": "b3d025a89a471a350620500969276686",
"assets/assets/images/music.webp": "b06b6f5f986a03d7ca57812223f6307c",
"assets/assets/images/sunset.png": "f2b3a38cda425537ad0af00561589622",
"assets/assets/images/prof.webp": "0c92c72fa5bddd6ee91e628aa3a1fefb",
"assets/assets/images/pro.png": "b2c88bb23ccb3c7b8282b962b7d16836",
"assets/assets/images/yoga_final.png": "558f42db8655fa9245398cd8149364f1",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
