/* SEMCA — scripts del sitio (sin dependencias) */
(function () {
  "use strict";

  /* ---------- Bilingüe ES / 中文 ---------- */
  var LANG_KEY = "semca-lang";
  var langBtns = document.querySelectorAll("[data-lang]");

  function setLang(lang) {
    if (lang !== "es" && lang !== "zh") lang = "es";
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-Hans" : "es");

    document.querySelectorAll("[data-es]").forEach(function (el) {
      var txt = el.getAttribute("data-" + lang);
      if (txt === null) txt = el.getAttribute("data-es");
      if (txt !== null) el.textContent = txt;
    });

    langBtns.forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  var guardado = "es";
  try { guardado = localStorage.getItem(LANG_KEY) || "es"; } catch (e) {}
  setLang(guardado);

  langBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      setLang(b.getAttribute("data-lang"));
    });
  });

  /* ---------- Navegación móvil ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Marcar enlace activo ---------- */
  var aqui = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === aqui || (aqui === "" && href === "index.html")) {
      a.classList.add("is-current");
      a.setAttribute("aria-current", "page");
    }
  });

  /* ---------- Aparición al hacer scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Formulario de contacto (estático) ---------- */
  var form = document.querySelector("#form-contacto");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var aviso = document.querySelector(".form-aviso");
      if (aviso) {
        aviso.classList.add("is-visible");
        aviso.setAttribute("role", "status");
      }
      form.reset();
    });
  }

  /* ---------- Año del pie ---------- */
  document.querySelectorAll("[data-anio]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Tema claro / oscuro ---------- */
  var THEME_KEY = "semca-theme";
  var raiz = document.documentElement;

  function aplicarTema(t) {
    if (t !== "dark" && t !== "light") t = "light";
    raiz.setAttribute("data-theme", t);
    var b = document.querySelector(".theme-toggle");
    if (b) {
      b.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
      b.setAttribute("title", t === "dark" ? "Tema claro" : "Tema oscuro");
    }
  }

  var temaGuardado = null;
  try { temaGuardado = localStorage.getItem(THEME_KEY); } catch (e) {}
  if (temaGuardado === "dark" || temaGuardado === "light") {
    aplicarTema(temaGuardado);
  } else {
    aplicarTema(raiz.getAttribute("data-theme") || "light");
  }

  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var nuevo = raiz.getAttribute("data-theme") === "dark" ? "light" : "dark";
      aplicarTema(nuevo);
      try { localStorage.setItem(THEME_KEY, nuevo); } catch (e) {}
    });
  }

  /* ---------- PWA: registro del service worker ---------- */
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }
})();
