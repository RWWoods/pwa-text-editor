const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');
import {StaleWhileRevalidate} from 'workbox-strategies';

// const {setDefaultHandler} = require('workbox-routing');
// const {NetworkOnly} = require('workbox-strategies');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache, offlineFallback({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});



// setDefaultHandler(new NetworkOnly());

// offlineFallback();

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
registerRoute(
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  new StaleWhileRevalidate({
    
    cacheName: 'asset-cache',
    plugins: [
      
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  })
);
