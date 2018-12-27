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
    "url": "examples.html",
    "revision": "213dae5ebb668fd4c114c2b9cfe9356c"
  },
  {
    "url": "static/js/2.07402b2.js",
    "revision": "54290dc797e9dce44b215de500c213ad"
  },
  {
    "url": "static/js/chunk-vendors.36a3387.js",
    "revision": "e34fa14ea6c924b6ccfab0d5a04239cb"
  },
  {
    "url": "static/js/examples.ea90f58.js",
    "revision": "17332022f26a14e3b6a83d97380a28c0"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
