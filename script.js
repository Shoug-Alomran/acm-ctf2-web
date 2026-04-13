const NAV_ITEMS = [
  { page: "index", label: "Home", href: "index.html" },
  { page: "schedule", label: "Schedule", href: "schedule.html" },
  { page: "workshop", label: "Workshop", href: "workshop.html" },
  { page: "resources", label: "Resources", href: "resources.html" },
  { page: "challenges", label: "Challenges", href: "challenges.html" },
  { page: "rules", label: "Rules", href: "rules.html" },
  { page: "faq", label: "FAQ", href: "faq.html" },
  { page: "about", label: "About", href: "about.html" },
];

const EVENT_START = "2026-04-25T10:00:00+03:00";
const WORKSHOP_TUTORIAL_URL = "tutorial.html";

const RESOURCE_ITEMS = [
  {
    category: "Crypto",
    kind: "Video",
    title: "Intro to Classical Ciphers",
    description: "Start with substitution, transposition, and practical cracking strategy.",
    url: "https://www.youtube.com/watch?v=jhXCTbFnK8o",
  },
  {
    category: "Crypto",
    kind: "Tool",
    title: "CyberChef",
    description: "Browser-based operations for encoding, hashing, and basic crypto workflows.",
    url: "https://gchq.github.io/CyberChef/",
  },
  {
    category: "Crypto",
    kind: "Writeup",
    title: "RSA Basics and Common Pitfalls",
    description: "Readable walkthrough on factorization and weak exponent mistakes.",
    url: "https://ctf101.org/cryptography/what-is-rsa/",
  },
  {
    category: "Web",
    kind: "Platform",
    title: "PortSwigger Web Security Academy",
    description: "Hands-on labs for SQLi, XSS, auth flaws, and request tampering.",
    url: "https://portswigger.net/web-security",
  },
  {
    category: "Web",
    kind: "Tool",
    title: "Burp Suite Community Edition",
    description: "Inspect and modify HTTP traffic during web challenge analysis.",
    url: "https://portswigger.net/burp/communitydownload",
  },
  {
    category: "Web",
    kind: "Video",
    title: "OWASP Top 10 Explained",
    description: "Quick overview of modern web attack surfaces and secure patterns.",
    url: "https://www.youtube.com/watch?v=7f2vl3sQK2M",
  },
  {
    category: "Forensics",
    kind: "Tool",
    title: "Wireshark",
    description: "Packet analysis for traffic inspection, anomalies, and protocol forensics.",
    url: "https://www.wireshark.org/",
  },
  {
    category: "Forensics",
    kind: "Writeup",
    title: "Intro to Memory Forensics",
    description: "Practical notes on identifying suspicious artifacts in memory dumps.",
    url: "https://ctf101.org/forensics/overview/",
  },
  {
    category: "Forensics",
    kind: "Platform",
    title: "DFIR Training Platform",
    description: "Practice investigations with realistic disk and memory evidence.",
    url: "https://training.dfirdiva.com/",
  },
  {
    category: "OSINT",
    kind: "Tool",
    title: "Maltego Community",
    description: "Entity graphing and relationship mapping for reconnaissance tasks.",
    url: "https://www.maltego.com/downloads/",
  },
  {
    category: "OSINT",
    kind: "Tool",
    title: "Google Dorking Cheatsheet",
    description: "Search operator references for focused, high-signal data discovery.",
    url: "https://www.exploit-db.com/google-hacking-database",
  },
  {
    category: "OSINT",
    kind: "Video",
    title: "OSINT Fundamentals",
    description: "Efficient methods to gather, verify, and correlate open-source data.",
    url: "https://www.youtube.com/watch?v=qwA6MmbeGNo",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  renderSharedHeader();
  renderSharedFooter();
  bindNavToggle();
  setupCountdown();
  renderWorkshopTutorialLink();
  renderResources();
  bindFaqAccordions();
});

function currentPageKey() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  if (path === "") {
    return "index";
  }
  return path.replace(".html", "");
}

function renderSharedHeader() {
  const mount = document.getElementById("site-header");
  if (!mount) {
    return;
  }

  const page = currentPageKey();
  const nav = NAV_ITEMS.map((item) => {
    const active = item.page === page;
    return `<a class="nav-link ${active ? "active" : ""}" href="${item.href}" ${active ? 'aria-current="page"' : ""}>${item.label}</a>`;
  }).join("");

  mount.innerHTML = `
    <header class="site-header" role="banner">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="ACM CTF home">
          ACM<span>CTF</span> <small>2.0</small>
        </a>

        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle menu">
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
        </button>

        <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
          ${nav}
        </nav>

        <div class="header-actions">
          <span class="icon-btn" aria-hidden="true">AR</span>
        </div>
      </div>
    </header>
  `;
}

function renderSharedFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) {
    return;
  }

  const quickLinks = NAV_ITEMS.map(
    (item) => `<a class="footer-link" href="${item.href}">${item.label}</a>`
  ).join("");

  mount.innerHTML = `
    <footer class="site-footer" role="contentinfo">
      <div class="container footer-grid">
        <div>
          <p class="footer-brand">ACM<span>CTF</span> <small>2.0</small></p>
          <p class="footer-text">ACM Student Chapter · College of Computer and Information Sciences · Prince Sultan University · Riyadh, Saudi Arabia</p>
          <p class="footer-text">&copy; <span id="footer-year"></span> ACM CTF 2.0</p>
        </div>
        <div class="footer-links" aria-label="Footer navigation">${quickLinks}</div>
      </div>
    </footer>
  `;

  const year = mount.querySelector("#footer-year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

function bindNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.target.classList.contains("nav-link")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function setupCountdown() {
  const mount = document.querySelector("[data-countdown]");
  if (!mount) {
    return;
  }

  const target = new Date(EVENT_START).getTime();
  const dayNode = document.querySelector("[data-days]");
  const hourNode = document.querySelector("[data-hours]");
  const minNode = document.querySelector("[data-minutes]");
  const secNode = document.querySelector("[data-seconds]");

  const update = () => {
    const now = Date.now();
    const gap = Math.max(target - now, 0);

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((gap / (1000 * 60)) % 60);
    const seconds = Math.floor((gap / 1000) % 60);

    if (dayNode) dayNode.textContent = String(days).padStart(2, "0");
    if (hourNode) hourNode.textContent = String(hours).padStart(2, "0");
    if (minNode) minNode.textContent = String(minutes).padStart(2, "0");
    if (secNode) secNode.textContent = String(seconds).padStart(2, "0");
  };

  update();
  window.setInterval(update, 1000);
}

function renderWorkshopTutorialLink() {
  const node = document.querySelector("[data-workshop-link]");
  if (!node) {
    return;
  }
  node.setAttribute("href", WORKSHOP_TUTORIAL_URL);
}

function renderResources() {
  const root = document.getElementById("resources-root");
  if (!root) {
    return;
  }

  const order = ["Crypto", "Web", "Forensics", "OSINT"];
  const byCategory = RESOURCE_ITEMS.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  root.innerHTML = order
    .filter((category) => byCategory[category])
    .map((category) => {
      const cards = byCategory[category]
        .map(
          (item) => `
            <article class="card resource-card">
              <span class="chip">${item.kind}</span>
              <h4>${item.title}</h4>
              <p>${item.description}</p>
              <a class="resource-link" href="${item.url}" target="_blank" rel="noopener noreferrer">Open Resource</a>
            </article>
          `
        )
        .join("");

      return `
        <section class="resource-group" aria-labelledby="resource-${category.toLowerCase()}">
          <h3 id="resource-${category.toLowerCase()}">${category}</h3>
          <div class="resource-grid">${cards}</div>
        </section>
      `;
    })
    .join("");
}

function bindFaqAccordions() {
  const nodes = document.querySelectorAll(".accordion");
  if (!nodes.length) {
    return;
  }

  nodes.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");
    if (!trigger || !panel) {
      return;
    }

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(isOpen));
    });
  });
}
