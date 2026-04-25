(() => {
  const THEME_KEY = "acm-theme";
  const LANG_KEY = "acm-lang";
  const TARGET = new Date("2026-05-04T16:00:00");
  const VALID_PAGES = new Set(["home", "schedule", "workshops", "resources", "challenges", "rules", "faq", "about"]);

  let lang = "en";
  let theme = "dark";

  const syncControlLabels = () => {
    const langLabel = lang === "en" ? "AR" : "EN";
    const themeLabel = theme === "dark" ? "☀" : "☾";

    document.querySelectorAll("#langBtn, [data-lang-toggle]").forEach((el) => {
      el.textContent = langLabel;
    });

    document.querySelectorAll("#themeBtn, [data-theme-toggle]").forEach((el) => {
      el.textContent = themeLabel;
    });
  };

  const applyTheme = (nextTheme) => {
    theme = nextTheme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_KEY, theme);
    syncControlLabels();
  };

  const applyLang = (nextLang) => {
    lang = nextLang === "ar" ? "ar" : "en";
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-en]").forEach((el) => {
      const nextText = lang === "ar" ? el.getAttribute("data-ar") : el.getAttribute("data-en");
      if (nextText) {
        el.textContent = nextText;
      }
    });

    window.localStorage.setItem(LANG_KEY, lang);
    syncControlLabels();
  };

  const ensureFloatingControls = () => {
    if (document.getElementById("nav") || document.querySelector(".floating-site-controls")) {
      return;
    }

    const controls = document.createElement("div");
    controls.className = "floating-site-controls";
    controls.innerHTML = `
      <button class="floating-control-btn" type="button" data-lang-toggle aria-label="Toggle language"></button>
      <button class="floating-control-btn" type="button" data-theme-toggle aria-label="Toggle theme"></button>
    `;

    controls.querySelector("[data-lang-toggle]")?.addEventListener("click", () => window.toggleLang());
    controls.querySelector("[data-theme-toggle]")?.addEventListener("click", () => window.toggleTheme());
    document.body.appendChild(controls);
    syncControlLabels();
  };

  window.showPage = (id) => {
    const nextId = VALID_PAGES.has(id) ? id : "home";

    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));

    const target = document.getElementById(`page-${nextId}`);
    if (target) {
      target.classList.add("active");
    }

    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.classList.remove("active");
      const key = a.getAttribute("data-en") || a.textContent || "";
      if (
        key.toLowerCase().includes(nextId) ||
        (nextId === "schedule" && key.toLowerCase().includes("agenda")) ||
        (nextId === "home" && key === "HOME")
      ) {
        a.classList.add("active");
      }
    });

    const nextHash = nextId === "home" ? "" : `#${nextId}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", `${window.location.pathname}${nextHash}`);
    }

    window.scrollTo(0, 0);
  };

  window.toggleTheme = () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  };

  window.toggleLang = () => {
    applyLang(lang === "en" ? "ar" : "en");
  };

  window.toggleFaq = (el) => {
    const wrap = el.closest(".faq-item");
    if (wrap) {
      wrap.classList.toggle("open");
    }
  };

  const updateCountdown = () => {
    const now = new Date();
    const diff = TARGET - now;

    const days = document.getElementById("cd-days");
    const hours = document.getElementById("cd-hours");
    const mins = document.getElementById("cd-mins");
    const secs = document.getElementById("cd-secs");

    if (!days || !hours || !mins || !secs) {
      return;
    }

    if (diff <= 0) {
      days.textContent = "00";
      hours.textContent = "00";
      mins.textContent = "00";
      secs.textContent = "00";
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    days.textContent = String(d).padStart(2, "0");
    hours.textContent = String(h).padStart(2, "0");
    mins.textContent = String(m).padStart(2, "0");
    secs.textContent = String(s).padStart(2, "0");
  };

  document.addEventListener("DOMContentLoaded", () => {
    ensureFloatingControls();

    applyTheme(window.localStorage.getItem(THEME_KEY) || "dark");
    applyLang(window.localStorage.getItem(LANG_KEY) || "en");

    const hashPage = window.location.hash.replace(/^#/, "");
    if (VALID_PAGES.has(hashPage)) {
      window.showPage(hashPage);
    } else {
      window.showPage("home");
    }

    updateCountdown();
    window.setInterval(updateCountdown, 1000);
  });

  window.addEventListener("hashchange", () => {
    const hashPage = window.location.hash.replace(/^#/, "");
    window.showPage(VALID_PAGES.has(hashPage) ? hashPage : "home");
  });
})();
