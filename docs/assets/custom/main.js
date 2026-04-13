(() => {
  let lang = "en";
  let theme = "dark";
  const TARGET = new Date("2026-04-25T10:00:00");

  window.showPage = (id) => {
    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));

    const target = document.getElementById(`page-${id}`);
    if (target) {
      target.classList.add("active");
    }

    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.classList.remove("active");
      const key = a.getAttribute("data-en") || a.textContent || "";
      if (key.toLowerCase().includes(id) || (id === "home" && key === "HOME")) {
        a.classList.add("active");
      }
    });

    window.scrollTo(0, 0);
  };

  window.toggleTheme = () => {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("themeBtn");
    if (btn) {
      btn.textContent = theme === "dark" ? "☀" : "☾";
    }
  };

  window.toggleLang = () => {
    lang = lang === "en" ? "ar" : "en";
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    const langBtn = document.getElementById("langBtn");
    if (langBtn) {
      langBtn.textContent = lang === "en" ? "AR" : "EN";
    }

    document.querySelectorAll("[data-en]").forEach((el) => {
      const nextText = lang === "ar" ? el.getAttribute("data-ar") : el.getAttribute("data-en");
      if (nextText) {
        el.textContent = nextText;
      }
    });
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
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");

    updateCountdown();
    window.setInterval(updateCountdown, 1000);
  });
})();
