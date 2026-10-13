/* SEMCA — Service Worker
   Estrategia:
   · Navegación  → red primero, caché como respaldo (para no servir páginas viejas).
   · Recursos    → caché primero, con actualización en segundo plano.
   · Sin conexión→ respaldo desde caché; si falta, página offline.
   Al cambiar el contenido del sitio, sube VERSION para invalidar la caché anterior. */

var VERSION = "semca-v7";

/* Solo se precarga el armazón (páginas, estilos, scripts, iconos).
   Las imágenes NO se precargan: son 3,3 MB y descargarlas todas al instalar
   sería inaceptable con conexión lenta. El manejador de «fetch» las va
   guardando a medida que se visitan. */
var SHELL = [
  "./",
  "./index.html",
  "./nosotros.html",
  "./programas.html",
  "./actualidad.html",
  "./galeria.html",
  "./preguntas.html",
  "./ayudar.html",
  "./transparencia.html",
  "./contacto.html",
  "./404.html",
  "./css/style.css",
  "./js/main.js",
  "./manifest.webmanifest",
  "./icono.svg",
  "./icono-maskable.svg"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) {
      return Promise.all(
        SHELL.map(function (url) {
          return c.add(url).catch(function () { /* un recurso ausente no debe romper la instalación */ });
        })
      );
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === VERSION ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then(function (res) {
        var copia = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copia); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || caches.match("./index.html");
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (hit) {
      var red = fetch(req).then(function (res) {
        if (res && res.status === 200 && res.type === "basic") {
          var copia = res.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copia); });
        }
        return res;
      }).catch(function () { return hit; });
      return hit || red;
    })
  );
});
