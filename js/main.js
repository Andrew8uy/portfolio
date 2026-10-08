(function () {
  "use strict";

  var EMAIL_PARTS = ["andres", "rmka2013", "gmail", "com"];
  var EMAIL = EMAIL_PARTS[0] + EMAIL_PARTS[1] + "@" + EMAIL_PARTS[2] + "." + EMAIL_PARTS[3];

  var lang = document.documentElement.getAttribute("lang") === "en" ? "en" : "es";
  if (!localStorage.getItem("lang")) {
    lang = (navigator.language || "").toLowerCase().indexOf("en") === 0 ? "en" : "es";
  }

  function t(key) {
    var dict = window.I18N[lang] || window.I18N.es;
    return dict[key] !== undefined ? dict[key] : (window.I18N.es[key] || key);
  }

  function applyLang() {
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    var langBtn = document.getElementById("lang-toggle");
    if (langBtn) { langBtn.textContent = lang === "es" ? "EN" : "ES"; }
    localStorage.setItem("lang", lang);
  }

  function applyEmail() {
    document.querySelectorAll(".js-email").forEach(function (el) {
      el.setAttribute("href", "mailto:" + EMAIL);
      if (el.closest(".hero")) {
        el.textContent = EMAIL;
      }
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  var langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      lang = lang === "es" ? "en" : "es";
      applyLang();
      applyEmail();
    });
  }

  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }

  applyLang();
  applyEmail();
})();
