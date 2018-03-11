self.addEventListener('install', function (event) {
    // install cashing image or all data
}); var cash = 'restaurant-cache';
var cash_url = [
    '/',
    'mws-restaurant-stage-1/index.html',
    'mws-restaurant-stage-1/restaurant.html',
    'mws-restaurant-stage-1/css/styles.css',
    'mws-restaurant-stage-1/js/dbhelper.js',
    'mws-restaurant-stage-1/js/main.js',
    'mws-restaurant-stage-1/js/restaurant_info.js',
    'mws-restaurant-stage-1/data/restaurants.json',
    'mws-restaurant-stage-1/img/1.jpg',
    'mws-restaurant-stage-1/img/2.jpg',
    'mws-restaurant-stage-1/img/3.jpg',
    'mws-restaurant-stage-1/img/4.jpg',
    'mws-restaurant-stage-1/img/5.jpg',
    'mws-restaurant-stage-1/img/6.jpg',
    'mws-restaurant-stage-1/img/7.jpg',
    'mws-restaurant-stage-1/img/8.jpg',
    'mws-restaurant-stage-1/img/9.jpg',
    'mws-restaurant-stage-1/img/10.jpg',

];

self.addEventListener('install', function (event) {

    event.waitUntil(
        caches.open(cash)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(cash_url);
            })
    );
});

self.addEventListener('activate',  event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
        return response || fetch(event.request);
})
.catch(err => console.log(err, event.request))
);
});