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
    "revision": "5c8aa3241e79ab80dc7b886e288362a4"
  },
  {
    "url": "examples.html",
    "revision": "688272d1b7872de788600c930dc79753"
  },
  {
    "url": "static/css/document.017564a.css",
    "revision": "45fd85870a5c2e081f460a5c0764d38c"
  },
  {
    "url": "static/css/examples.6dade68.css",
    "revision": "6046b4b8d82f3b548561a537705ab195"
  },
  {
    "url": "static/js/0.3c1f8df.js",
    "revision": "c65fe47ebf7b51cb3a1f4fe6d49f1f3d"
  },
  {
    "url": "static/js/1.4473c9e.js",
    "revision": "243abefd84996c3c5d832c51d23b0836"
  },
  {
    "url": "static/js/10.c79aa86.js",
    "revision": "c968598cd3b6c68e0aa25497f7cf3caf"
  },
  {
    "url": "static/js/11.bc17067.js",
    "revision": "21a8d876da3876c0f003d4644ef3552c"
  },
  {
    "url": "static/js/12.5a46e54.js",
    "revision": "daa850f8455e5fdd5b468af61e6405ad"
  },
  {
    "url": "static/js/13.11e3c0f.js",
    "revision": "82b575a28f35b0a80774c48150b4a4ec"
  },
  {
    "url": "static/js/14.5be6d17.js",
    "revision": "1e43f92bf5e8f65c3348a37601d456d4"
  },
  {
    "url": "static/js/15.82316c6.js",
    "revision": "b9fb68bfee2453fb788a246b36897e14"
  },
  {
    "url": "static/js/16.662237f.js",
    "revision": "72fc23e6921a22297ca96951e9d6bdae"
  },
  {
    "url": "static/js/17.2924e16.js",
    "revision": "c83f3d52342ca804e773a3070bd03dc0"
  },
  {
    "url": "static/js/18.6a6a306.js",
    "revision": "95ffe2e1694d770c5b04be7171eaedda"
  },
  {
    "url": "static/js/19.fac64ce.js",
    "revision": "3f2e2e285816aa9fb65d43033c713674"
  },
  {
    "url": "static/js/2.3ec4d9f.js",
    "revision": "cb89cc813dffa9701c5025b60c4883ef"
  },
  {
    "url": "static/js/20.512e0f4.js",
    "revision": "79802a3494e0f26408ded745b7e43d85"
  },
  {
    "url": "static/js/3.a61a9cd.js",
    "revision": "b898ef0f859bdf8bf78ed3258a854f16"
  },
  {
    "url": "static/js/4.53f6aa5.js",
    "revision": "beb9cbda379bac3ef5751ae592017bf2"
  },
  {
    "url": "static/js/5.2209f32.js",
    "revision": "f8f7c5a5783026854c0b477f0f1ed611"
  },
  {
    "url": "static/js/6.e9663d5.js",
    "revision": "5aa0b03a6ac39085065775c88ea52eaf"
  },
  {
    "url": "static/js/7.a258021.js",
    "revision": "4f814e75aeaff33519d25824cad871e7"
  },
  {
    "url": "static/js/8.ca4be9e.js",
    "revision": "eca5f3c148b79712974d6827ef0bcf0c"
  },
  {
    "url": "static/js/9.c6bd98e.js",
    "revision": "6f2222bdc2b903ea3f105d7327922cda"
  },
  {
    "url": "static/js/document.3cd9538.js",
    "revision": "e77fa0fa3438316c03f9bf45004187fe"
  },
  {
    "url": "static/js/examples.d4922cb.js",
    "revision": "5f977854a4539656ad9a19e718a9bb27"
  },
  {
    "url": "static/js/manifest.34b399c.js",
    "revision": "a662f568a431be90e7dc73f2ad40d678"
  },
  {
    "url": "static/js/vendor.ec96cfc.js",
    "revision": "b95ef33cdda3933a2f4771a629944a1d"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
