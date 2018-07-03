importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "document.html",
    "revision": "3aeb591b00ce19b7f1089f71c5e37e84"
  },
  {
    "url": "examples.html",
    "revision": "d8ee48d4b7345fe16a01b12947468df2"
  },
  {
    "url": "static/css/document.57c7da827cab98f2f3fa034d471287d6.css",
    "revision": "45fd85870a5c2e081f460a5c0764d38c"
  },
  {
    "url": "static/css/examples.951b10409f4383b58901124606ce03df.css",
    "revision": "259211430caa41ecee9ea153c58fcb23"
  },
  {
    "url": "static/js/0.b4e8492.js",
    "revision": "0204ced6185bb88d2161c0416c7a9c7f"
  },
  {
    "url": "static/js/1.d0a8021.js",
    "revision": "1622938149d77954086e1c8e582b91de"
  },
  {
    "url": "static/js/10.5f861a1.js",
    "revision": "5d244dfb6133483d9f84e1c42adbd3ff"
  },
  {
    "url": "static/js/11.3caf64b.js",
    "revision": "f2a24a75e1352bff9414c64513a2c2f2"
  },
  {
    "url": "static/js/12.013701f.js",
    "revision": "34399c058e0a37732add3ad5ce12e884"
  },
  {
    "url": "static/js/13.ec7c371.js",
    "revision": "1ec4402002f489f6228896306e0d5186"
  },
  {
    "url": "static/js/14.eef26c1.js",
    "revision": "18b6c712b1b8331726110ebc227ff4c0"
  },
  {
    "url": "static/js/15.a2f8d81.js",
    "revision": "344fed75e9c3a5dc814e8ddb71b7abbd"
  },
  {
    "url": "static/js/16.4e6bc5a.js",
    "revision": "4717ea443a3bbb47ebde76fe5a08c00d"
  },
  {
    "url": "static/js/17.9bc2f10.js",
    "revision": "42d71675e923df383971f97e67b9eae8"
  },
  {
    "url": "static/js/18.b45f042.js",
    "revision": "42b0dbed24fedc60bc47a1a9dc5dbc09"
  },
  {
    "url": "static/js/19.555406f.js",
    "revision": "b59f7549a4bf5df50391968eca2e5ca1"
  },
  {
    "url": "static/js/2.fb90f00.js",
    "revision": "94b03ebe25b2f05bbcfd9a085abbd7f2"
  },
  {
    "url": "static/js/20.0b5479e.js",
    "revision": "f74a8bbd8814bbc056f79017adc6a592"
  },
  {
    "url": "static/js/3.17f2605.js",
    "revision": "7cad35a4c9b838a514d9c463185c46a5"
  },
  {
    "url": "static/js/4.38fa997.js",
    "revision": "943f8a6ed50a940e54a72a7745527f60"
  },
  {
    "url": "static/js/5.327eb28.js",
    "revision": "2afafb21907bace9c6ea9651f480b535"
  },
  {
    "url": "static/js/6.8e1f496.js",
    "revision": "9ff431571d3587a50b96beabd4a09968"
  },
  {
    "url": "static/js/7.e4191cd.js",
    "revision": "da62f887a746479e21c20810e52d9e6e"
  },
  {
    "url": "static/js/8.f3c75d4.js",
    "revision": "0a4188fe8aed7ed12af603df61b5d6b2"
  },
  {
    "url": "static/js/9.cd9e7a0.js",
    "revision": "72f6a86926e9e5b2053b7f5015073b4a"
  },
  {
    "url": "static/js/document.786506c.js",
    "revision": "3b5140bd668a98b3e877c3d6c5ce25a0"
  },
  {
    "url": "static/js/examples.173b137.js",
    "revision": "4008566e8c17db81e80140e17284885a"
  },
  {
    "url": "static/js/manifest.0f0de71.js",
    "revision": "34b31b624aa8cb2cf9e907d7a09ae2be"
  },
  {
    "url": "static/js/vendor.0da762f.js",
    "revision": "8fcc38ab2610552097c156f96ad017c7"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
