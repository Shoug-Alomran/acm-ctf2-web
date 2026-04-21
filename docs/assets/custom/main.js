(() => {
  const THEME_KEY = "acm-theme";
  const LANG_KEY = "acm-lang";
  const TARGET = new Date("2026-04-25T10:00:00");
  const VALID_PAGES = new Set(["home", "schedule", "workshops", "resources", "challenges", "rules", "faq", "about"]);
  const SUBMISSION_ENDPOINT = window.ACM_SUBMISSION_ENDPOINT || "https://ctf-email-worker.shoug-alomran.workers.dev";

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

  const getTutorialTopic = () => {
    const explicitTopic = document.querySelector(".tutorial-title .locale-en");
    const fallbackTopic = document.querySelector(".tutorial-title");
    const text = explicitTopic?.textContent || fallbackTopic?.textContent || "";
    return text.replace(/\s+/g, " ").trim();
  };

  const buildSubmissionSubject = (topic) => `CTF Spring 2026 - ${topic} Challenges Submission`;

  const getSubmissionPayload = (form) => {
    const studentEmailField = form?.querySelector("[data-student-email]");
    const solutionField = form?.querySelector("[data-solution-input]");
    const fileField = form?.querySelector("[data-solution-files]");
    const topicField = form?.querySelector("[data-topic-input]");
    const subjectField = form?.querySelector("[data-subject-input]");
    const studentEmail = studentEmailField?.value || "";
    const solution = solutionField?.value || "";
    const topic = form?.getAttribute("data-topic") || getTutorialTopic();
    const files = Array.from(fileField?.files || []);
    const subject = buildSubmissionSubject(topic);
    if (topicField) {
      topicField.value = topic;
    }
    if (subjectField) {
      subjectField.value = subject;
    }
    return { studentEmail, solution, topic, subject, files };
  };

  const setSubmissionStatus = (form, englishText, arabicText, state = "info") => {
    const status = form?.querySelector("[data-solution-status]");
    if (!status) {
      return;
    }

    status.dataset.state = state;
    status.innerHTML = `
      <span class="locale-en">${englishText}</span>
      <span class="locale-ar" lang="ar">${arabicText}</span>
    `;
  };

  const syncSelectedFilesLabel = (form) => {
    const fileField = form?.querySelector("[data-solution-files]");
    const filesLabel = form?.querySelector("[data-solution-files-label]");

    if (!fileField || !filesLabel) {
      return;
    }

    const files = Array.from(fileField.files || []);

    if (!files.length) {
      filesLabel.innerHTML = `
        <span class="locale-en">No files selected</span>
        <span class="locale-ar" lang="ar">لم يتم اختيار ملفات</span>
      `;
      return;
    }

    if (files.length === 1) {
      filesLabel.textContent = files[0].name;
      return;
    }

    filesLabel.innerHTML = `
      <span class="locale-en">${files.length} files selected</span>
      <span class="locale-ar" lang="ar">تم اختيار ${files.length} ملفات</span>
    `;
  };

  const submitTutorialSolution = async (event) => {
    event.preventDefault();

    const form = event.currentTarget.closest("[data-solution-form]");
    const submitButton = form?.querySelector("[data-solution-submit]");

    if (!form || !submitButton) {
      return;
    }

    const { studentEmail, solution, topic, subject, files } = getSubmissionPayload(form);

    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    setSubmissionStatus(
      form,
      "Submitting your solution...",
      "جارٍ إرسال الحل...",
      "info"
    );

    try {
      const formData = new FormData(form);
      formData.set("studentEmail", studentEmail.trim());
      formData.set("topic", topic);
      formData.set("subject", subject);
      formData.set("solution", solution.trim());

      if (!files.length) {
        formData.delete("attachments");
      }

      const response = await fetch(SUBMISSION_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      let result = null;
      try {
        result = await response.json();
      } catch (_error) {
        result = null;
      }

      if (!response.ok) {
        throw new Error(result?.error || result?.message || `Submission failed with status ${response.status}`);
      }

      setSubmissionStatus(
        form,
        "Submission sent successfully.",
        "تم إرسال الحل بنجاح.",
        "success"
      );
      form.reset();
      syncSelectedFilesLabel(form);
    } catch (error) {
      console.error(error);
      setSubmissionStatus(
        form,
        error?.message || "The submission failed. Please try again.",
        error?.message || "فشل إرسال الحل. حاول مرة أخرى.",
        "error"
      );
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
    }
  };

  const ensureTutorialSubmissionCard = () => {
    const tutorialTitle = getTutorialTopic();
    const tutorialShell = document.querySelector(".tutorial-shell");
    const heroCard = tutorialShell?.querySelector(".tutorial-hero-card");

    if (!tutorialTitle || !tutorialShell || !heroCard || document.querySelector("[data-solution-form]")) {
      return;
    }

    const section = document.createElement("section");
    section.className = "tutorial-open-card tutorial-submit-card";
    section.innerHTML = `
      <h2>
        <span class="locale-en">Submit Solution</span>
        <span class="locale-ar" lang="ar">إرسال الحل</span>
      </h2>
      <p class="locale-en">Write your solution below and submit it directly. You can also attach screenshots or videos.</p>
      <p class="locale-ar" lang="ar">اكتب حلك أدناه وأرسله مباشرة. ويمكنك أيضًا إرفاق لقطات شاشة أو فيديوهات.</p>
      <form class="tutorial-submit-form" data-solution-form data-topic="${tutorialTitle.replace(/"/g, "&quot;")}">
        <input type="hidden" name="topic" data-topic-input value="${tutorialTitle.replace(/"/g, "&quot;")}">
        <input type="hidden" name="subject" data-subject-input value="${buildSubmissionSubject(tutorialTitle).replace(/"/g, "&quot;")}">
        <label class="tutorial-submit-label" for="tutorial-student-email">
          <span class="locale-en">Your Email</span>
          <span class="locale-ar" lang="ar">بريدك الإلكتروني</span>
        </label>
        <input
          id="tutorial-student-email"
          class="tutorial-submit-input"
          data-student-email
          name="studentEmail"
          type="email"
          placeholder="student@example.com"
          required
        >
        <label class="tutorial-submit-label" for="tutorial-solution-input">
          <span class="locale-en">Solution</span>
          <span class="locale-ar" lang="ar">الحل</span>
        </label>
        <textarea
          id="tutorial-solution-input"
          class="tutorial-submit-textarea"
          data-solution-input
          name="solution"
          placeholder="Write your solution here..."
          required
        ></textarea>
        <label class="tutorial-submit-label" for="tutorial-solution-files">
          <span class="locale-en">Photos Or Videos</span>
          <span class="locale-ar" lang="ar">الصور أو الفيديوهات</span>
        </label>
        <label class="tutorial-submit-file-wrap" for="tutorial-solution-files">
          <span class="tutorial-submit-file-button">
            <span class="locale-en">Choose Files</span>
            <span class="locale-ar" lang="ar">اختيار ملفات</span>
          </span>
          <span class="tutorial-submit-file-name" data-solution-files-label>
            <span class="locale-en">No files selected</span>
            <span class="locale-ar" lang="ar">لم يتم اختيار ملفات</span>
          </span>
          <input
            id="tutorial-solution-files"
            class="tutorial-submit-file"
            data-solution-files
            name="attachments"
            type="file"
            accept="image/*,video/*"
            multiple
          >
        </label>
        <p class="tutorial-submit-note">
          <span class="locale-en">Attach screenshots or recordings if needed.</span>
          <span class="locale-ar" lang="ar">يمكنك إرفاق لقطات شاشة أو تسجيلات عند الحاجة.</span>
        </p>
        <div class="tutorial-submit-status" data-solution-status aria-live="polite"></div>
        <div class="tutorial-submit-actions">
          <button class="tutorial-action" data-solution-submit type="submit">
            <span class="locale-en">Submit Solution</span>
            <span class="locale-ar" lang="ar">إرسال الحل</span>
          </button>
        </div>
      </form>
    `;

    const form = section.querySelector("[data-solution-form]");
    const fileField = section.querySelector("[data-solution-files]");

    form?.addEventListener("submit", submitTutorialSolution);
    fileField?.addEventListener("change", () => syncSelectedFilesLabel(form));
    const workshopInfoCard = heroCard.nextElementSibling?.classList.contains("tutorial-open-card")
      ? heroCard.nextElementSibling
      : null;
    (workshopInfoCard || heroCard).insertAdjacentElement("afterend", section);
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
    ensureTutorialSubmissionCard();

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
