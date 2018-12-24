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
    "revision": "151b21b16e332b68bcd176b7de21b60d"
  },
  {
    "url": "examples.html",
    "revision": "d2ebaffbcebefb0cfa5b46e36c370277"
  },
  {
    "url": "static/css/document.57c7da827cab98f2f3fa034d471287d6.css",
    "revision": "45fd85870a5c2e081f460a5c0764d38c"
  },
  {
    "url": "static/css/examples.4ec44d30f236aa594ea3cd469777a8f5.css",
    "revision": "8c8e52b1f2a1167e70193175bab06608"
  },
  {
    "url": "static/js/0.8aa5b64.js",
    "revision": "ef47e2db6941d53bbf9415b2d2214908"
  },
  {
    "url": "static/js/1.d0a8021.js",
    "revision": "55848bbd1d47c3d83f861c3aad9707ae"
  },
  {
    "url": "static/js/10.5f861a1.js",
    "revision": "d1b20de22a362bb58aafaf3f6b9b6cb8"
  },
  {
    "url": "static/js/11.3caf64b.js",
    "revision": "2a62670479012d03f46519678556e8ad"
  },
  {
    "url": "static/js/12.013701f.js",
    "revision": "1efe1c508549d663c3507ad6aec97aa1"
  },
  {
    "url": "static/js/13.ec7c371.js",
    "revision": "0911e2ae1456011c062884c4bd8a9f90"
  },
  {
    "url": "static/js/14.eef26c1.js",
    "revision": "77d0aa4a3de8fbdcb5b988db6d70d9b3"
  },
  {
    "url": "static/js/15.a2f8d81.js",
    "revision": "3dca9ef4ed9c7c657d9a24ed6c6f4807"
  },
  {
    "url": "static/js/16.aed2ea2.js",
    "revision": "e3d4eec9d8a1c58a01d99a684e0a6e9a"
  },
  {
    "url": "static/js/17.9bc2f10.js",
    "revision": "c204a19c4e706119a1ac496c90b2ece8"
  },
  {
    "url": "static/js/18.b45f042.js",
    "revision": "2721ee3c3d384c7e6b88e92b61a7bc57"
  },
  {
    "url": "static/js/19.555406f.js",
    "revision": "7bf332b1c626546e34117e2e645dd913"
  },
  {
    "url": "static/js/2.fb90f00.js",
    "revision": "cf3390856e417314deb35b2f6c447ab2"
  },
  {
    "url": "static/js/20.4d60e45.js",
    "revision": "8f6ae6860d5572255229a7691e91bdd5"
  },
  {
    "url": "static/js/3.17f2605.js",
    "revision": "8bc48f8367328c395b94ffb5e42b0140"
  },
  {
    "url": "static/js/4.38fa997.js",
    "revision": "9f086e1f0eb5d69e415ae012cb189740"
  },
  {
    "url": "static/js/5.327eb28.js",
    "revision": "afe1ce8c10e2eed0e8ff7c2a75eeafca"
  },
  {
    "url": "static/js/6.8e1f496.js",
    "revision": "991c131aca29ca41409d3576ab321582"
  },
  {
    "url": "static/js/7.e4191cd.js",
    "revision": "e35235dd3a13b7c34805baa69287f7ef"
  },
  {
    "url": "static/js/8.d86926a.js",
    "revision": "18cf987edb48ee7f6d97e8bd16710543"
  },
  {
    "url": "static/js/9.cd9e7a0.js",
    "revision": "56784f81bdbc4bd0db42b8cfd9ef6b26"
  },
  {
    "url": "static/js/document.786506c.js",
    "revision": "0762cef238bb033bf7dcbae98d8e7b1d"
  },
  {
    "url": "static/js/examples.99d270e.js",
    "revision": "20f47c593c4192f6b155be272443efc5"
  },
  {
    "url": "static/js/manifest.7515c47.js",
    "revision": "52f50bdcbf2ba867b1d4377c274e685a"
  },
  {
    "url": "static/js/vendor.13d250c.js",
    "revision": "264b0bd8d255d127fcd817303525b41b"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
