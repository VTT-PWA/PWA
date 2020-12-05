const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
    "/",
    "/index.html",
    "/dashboard.html",
    "/css/style.css"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener('fetch',() => console.log("fetch"));

self.onnotificationclick = function(event) {
    if (event.notification.tag === "logout") {
        event.waitUntil(clients.matchAll({
            type: "window"
        }).then(function(clientList) {
            if (clientList[0]) {
                return clientList[0].navigate("/PWA/").then(client => client.focus());
            }
        }));
    }
};