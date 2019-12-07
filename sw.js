
  const assetsToCache=["./","about.html","archive.html","index.html","js/__post.a85ba19a.dll.js","js/about.c329df4a.js","js/archive.f6a7a9ec.js","js/index.485367bd.js","js/post.cb81a6af.js","js/resume.9db9ac50.js","js/vendors.094c268b.dll.js","post/1-hello-world.html","post/10-react-code-virtual-dom.html","post/11-react-render-arrow-bind.html","post/12-build-mobx-from-scratch-1.html","post/13-linear-gradient-note.html","post/14-tech-or-money.html","post/15-intro-cubi.html","post/16-about-float.html","post/17-ezpack-dashboard.html","post/18-baseline-of-inline-block.html","post/19-three-kinds-of-prototype.html","post/2-vscode-css-modules.html","post/20-js-extend.html","post/21-learn-from-redux-middleware.html","post/22-difference-among-textcontent-innertext-innerhtml.html","post/23-calendar-develop-note.html","post/24-an-express-mock-middleware.html","post/25-react-long-list.html","post/26-how-to-find-js-this.html","post/27-hide-origin-when-drag.html","post/28-css-center-image.html","post/29-js-var-loop.html","post/3-nodejs-modules-note.html","post/30-background-attachment-fixed-intro.html","post/31-http-cache-note.html","post/32-http-redirect-code-difference.html","post/33-browser-same-origin-policy.html","post/34-why-js-01-02-not-equal-03.html","post/35-you-must-be-logged-in-to-publish-packages.html","post/36-install-multiple-chrome-macos.html","post/37-when-to-use-setstate-callback.html","post/38-vscode-debug-nodejs.html","post/39-typescript-thridparty-lib.html","post/4-webpack-dll.html","post/40-think-about-allowSyntheticDefaultImports.html","post/41-out-of-range-cause-infinite-loop.html","post/42-best-and-worst-time-complexity-of-quick-sort.html","post/43-time-completity-of-merge-sort-analyse.html","post/44-pdd-deno-summary.html","post/45-ieee754-rounding-rules.html","post/46-build-transform-stream-base-on-duplex.html","post/5-git-migrate-tips.html","post/6-react-code-transaction.html","post/7-nextjs-static.html","post/8-react-code-setstate.html","post/9-dynamic-add-webpack-entry.html","resume.html"];
  const CACHE_NAME = '98c3447c8d';

  self.addEventListener('install', event => {
    event.waitUntil(
        caches
        .open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(assetsToCache)
        })
    )
  })

  self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              if (cacheName.indexOf(CACHE_NAME) === 0) {
                return null
              }

              return caches.delete(cacheName)
            })
          )
        })
    )
  })

  self.addEventListener('fetch', event => {
      const request = event.request;
      if (request.method !== 'GET') {
          return;
      }

      const requestUrl = new URL(request.url);
      if (requestUrl.origin !== location.origin) {
          return;
      }

      const resource = caches.match(request).then(response => {
          if (response) {
              return response;
          }

          return fetch(request)
            .then(responseNetwork => {
                if (!responseNetwork || !responseNetwork.ok) {
                    return responseNetwork;
                }

                const responseCache = responseNetwork.clone();

                caches.open(CACHE_NAME).then(cache => {
                    return cache.put(request.responseCache)
                });

                return responseNetwork;
            })
      });

      event.respondWith(resource);
  })
  