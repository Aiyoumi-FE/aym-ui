importScripts('workbox-sw.prod.v2.1.2.js');

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
    "revision": "87d2395744ab3cb5406651fc50454dd7"
  },
  {
    "url": "examples.html",
    "revision": "b44bc2f380fbb2308272c30a7f31a5a7"
  },
  {
    "url": "static/css/document.91d2747.css",
    "revision": "080117218a6b29b193038ef09ae5910d"
  },
  {
    "url": "static/css/examples.7f7798c.css",
    "revision": "f45abc9d64fef451d65fe34fa90fc204"
  },
  {
    "url": "static/js/0.3afb3e9.js",
    "revision": "e78b64eacb7461f3760205f8f73c22b3"
  },
  {
    "url": "static/js/1.bd6bf3b.js",
    "revision": "ea894307aebe9a0d74310ee99296568c"
  },
  {
    "url": "static/js/10.682ae8b.js",
    "revision": "8ed781188625a80d3af30ebbcc261f40"
  },
  {
    "url": "static/js/11.bd896a7.js",
    "revision": "533b8d556b3ae6458ac295c65908b99a"
  },
  {
    "url": "static/js/12.72d4168.js",
    "revision": "29723759f00d8fb1583ef3522bab8705"
  },
  {
    "url": "static/js/13.7f00282.js",
    "revision": "d845a3818d67b65e3d4f30a73bd0f642"
  },
  {
    "url": "static/js/14.7a2ffde.js",
    "revision": "22a956c9f08c1cdefab92686f838ff5e"
  },
  {
    "url": "static/js/15.429686c.js",
    "revision": "b974988ebf4383c3e6bde1afce9920f9"
  },
  {
    "url": "static/js/16.fe7c392.js",
    "revision": "339de9e303c1a370aa2707eab703e5a1"
  },
  {
    "url": "static/js/17.905d566.js",
    "revision": "24a00f36576cd71c456a0c01209c9a9d"
  },
  {
    "url": "static/js/18.3899818.js",
    "revision": "fc3df5ae458f26e0c992cd81af310ec2"
  },
  {
    "url": "static/js/19.bfeda4d.js",
    "revision": "9b9feadae8ed50690d1aab89d8732976"
  },
  {
    "url": "static/js/2.3aba921.js",
    "revision": "4704ca3bf9d420e11b0a03cbca370625"
  },
  {
    "url": "static/js/20.9a7ee8c.js",
    "revision": "4dcbc0776582fe311487ddd27b541294"
  },
  {
    "url": "static/js/3.3080ded.js",
    "revision": "f325b54b2e97838410ed0af5c62cbbbb"
  },
  {
    "url": "static/js/4.39ef261.js",
    "revision": "7915a900da1e6b6f3a62ab5a66e7563b"
  },
  {
    "url": "static/js/5.b9f6a70.js",
    "revision": "b4daa5b0580c85d4187a3140d655a48c"
  },
  {
    "url": "static/js/6.d3f2bcf.js",
    "revision": "c947870fb297a0a1b6e420580a27688b"
  },
  {
    "url": "static/js/7.edad1bc.js",
    "revision": "cc656e4316e3c974c051709b1e9b2ab0"
  },
  {
    "url": "static/js/8.d38c411.js",
    "revision": "7a548533f97e1872021a3471db3a0936"
  },
  {
    "url": "static/js/9.b79ad8b.js",
    "revision": "418248c8341bf615e8b354131fae78ad"
  },
  {
    "url": "static/js/document.ca372f6.js",
    "revision": "f8206d5850a23287f5d70f08d2660729"
  },
  {
    "url": "static/js/examples.1742b16.js",
    "revision": "43d580eedaa4dd6d63ed08efa6abe744"
  },
  {
    "url": "static/js/manifest.dc923cf.js",
    "revision": "b66ac51decd428006c6a0cd6f7055a89"
  },
  {
    "url": "static/js/vendor.b606e37.js",
    "revision": "d8205285f23d0e1ed487c5e52dc0bd8a"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
