// 富士見横丁レトロ 会計アプリ Service Worker
const CACHE_NAME = 'fujimi-yokocho-20260430130718'
const CACHE_FILES = ['./', './manifest.json', './assets/main_logo.png']

// インストール：キャッシュにファイルを保存
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_FILES))
      .then(() => self.skipWaiting())
  )
})

// アクティベート：旧バージョンのキャッシュを削除
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  )
})

// フェッチ：Cache-First 戦略（外部URLはキャッシュしない）
self.addEventListener('fetch', event => {
  // 同一オリジン以外（SharedJSON等の外部URL）はService Workerを素通りさせる
  // これにより全体売上ビューで常に最新データが取得される
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  )
})
