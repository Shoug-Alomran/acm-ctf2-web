# ACM CTF 2.0 — Official Website

> **Hack the Challenge. Capture the Flag.**  
> Prince Sultan University · CCIS · Riyadh, Saudi Arabia  
> Saturday, April 25, 2026 · 10:00 AM – 1:00 PM · Auditorium B105

Official static website for ACM CTF 2.0, hosted by the ACM Student Chapter at PSU. The site covers the full event lifecycle — registration, prep workshops, tutorials, resources, and competition day.

---

## Pages

| File | Page | Description |
|------|------|-------------|
| `index.html` | Home | Hero, countdown timer, category preview, announcements |
| `schedule.html` | Schedule | Timeline of all workshops leading to CTF day |
| `workshop.html` | Workshop | In-person session cards + tutorial links + progress tracker |
| `resources.html` | Resources | External YouTube, tools, and articles by category |
| `challenges.html` | Challenges | Locked event previews + practice platform links |
| `rules.html` | Rules | Numbered competition rules |
| `faq.html` | FAQ | Accordion Q&A + email contact prompt |
| `about.html` | About | ACM @ PSU info + organizing team cards |
| `tutorials/` | Tutorials | Standalone HTML tutorial pages per workshop topic |

---

## Structure

```
acm-ctf2-web/
├── index.html
├── schedule.html
├── workshop.html
├── resources.html
├── challenges.html
├── rules.html
├── faq.html
├── about.html
├── style.css
├── main.js
├── assets/
│   ├── logo-psu.png
│   ├── logo-ccis.png
│   └── logo-acm-ctf.png
└── tutorials/
    ├── cryptography.html
    ├── web.html
    ├── forensics.html
    └── osint.html
```

---

## Editing Content

All editable content — workshops, resources, rules, FAQs, team members, announcements — is stored in clearly labeled JS arrays at the top of each HTML file. No need to touch layout or styling code.

**Example — adding an announcement in `index.html`:**
```js
const ANNOUNCEMENTS = [
  "Registration is now open. Deadline is April 20th.",
  "Workshop 01 materials are now available.",  // ← add here
];
```

**Example — adding a resource in `resources.html`:**
```js
const RESOURCES = [
  {
    type: "YT",
    title: "Introduction to Cryptography — Computerphile",
    category: "Cryptography",
    url: "https://youtube.com/..."
  },
];
```

---

## Features

- **Live countdown** to April 25, 2026
- **Dark / Light mode** toggle with CSS variables
- **Arabic / English** language toggle using `data-i18n` attributes
- **Workshop progress tracker** using `localStorage` — persists across sessions
- **Fully static** — no backend, no build tools, no frameworks
- Google Fonts only external dependency

---

## Adding a Tutorial

1. Create a new file in `/tutorials/` — e.g. `tutorials/web.html`
2. Use the shared tutorial header (back link to `workshop.html`, same fonts and color scheme)
3. Link to it from the corresponding workshop card in `workshop.html`

---

## Deployment

This site is fully static and can be deployed anywhere:

- **GitHub Pages** — push to `main`, enable Pages in repo settings, set source to root
- **Cloudflare Pages** — connect repo, build command: none, output: `/`
- **Vercel** — import repo, framework: Other, no build command needed

Recommended: **Cloudflare Pages** for fastest global delivery and free SSL.

---

## Tech Stack

- HTML · CSS · Vanilla JS
- Google Fonts (Rajdhani, Share Tech Mono, Exo 2)
- No frameworks · No build tools · No dependencies

---

## Contact

Questions about the event → **acm@psu.edu.sa**  
Questions about the website → open an issue in this repo

---

*Organized by the ACM Student Chapter · College of Computer and Information Sciences · Prince Sultan University*
