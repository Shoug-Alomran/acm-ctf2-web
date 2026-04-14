<nav id="nav">
  <a class="nav-logo" onclick="showPage('home'); return false;"><img class="site-logo" src="image/index/acm.png" alt="ACM logo"><span>ACM</span>CTF <sup style="font-size:0.6rem;color:var(--text-muted)">2.0</sup></a>
  <div class="nav-links" id="navLinks">
    <a class="active" onclick="showPage('home'); return false;" data-en="HOME" data-ar="الرئيسية">HOME</a>
    <a onclick="showPage('schedule'); return false;" data-en="SCHEDULE" data-ar="الجدول">SCHEDULE</a>
    <a onclick="showPage('workshops'); return false;" data-en="WORKSHOPS" data-ar="ورش العمل">WORKSHOPS</a>
    <a onclick="showPage('resources'); return false;" data-en="RESOURCES" data-ar="المصادر">RESOURCES</a>
    <a onclick="showPage('challenges'); return false;" data-en="CHALLENGES" data-ar="التحديات">CHALLENGES</a>
    <a onclick="showPage('rules'); return false;" data-en="RULES" data-ar="القوانين">RULES</a>
    <a onclick="showPage('faq'); return false;" data-en="FAQ" data-ar="الأسئلة الشائعة">FAQ</a>
    <a onclick="showPage('about')" data-en="ABOUT" data-ar="عن الفعالية">ABOUT</a>
  </div>
  <div class="nav-controls">
    <button class="lang-btn" onclick="toggleLang()" id="langBtn">AR</button>
    <button class="theme-btn" onclick="toggleTheme()" id="themeBtn">☀</button>
  </div>
</nav>

<div class="page active" id="page-home">
  <div class="announcement">
    <span class="ann-badge" data-en="LATEST" data-ar="آخر الأخبار">LATEST</span>
    <span class="ann-text" data-en="Registration is now open! Only Prince Sultan University students can participate." data-ar="التسجيل مفتوح الآن! المشاركة متاحة فقط لطلاب جامعة الأمير سلطان.">Registration is now open! Only Prince Sultan University students can participate.</span>
  </div>
  <div class="hero">
    <h1 class="hero-title">
      <span class="glitch" data-text="ACM CTF ">ACM CTF </span><span class="accent glitch" data-text="2.0">2.0</span>
    </h1>
    <p class="hero-tagline" data-en="HACK THE CHALLENGE. CAPTURE THE FLAG." data-ar="اختر التحدي. التقط العلم.">HACK THE CHALLENGE. CAPTURE THE FLAG.</p>
    <div class="countdown">
      <div class="countdown-unit"><span id="cd-days">11</span><span class="countdown-label" data-en="DAYS" data-ar="أيام">DAYS</span></div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit"><span id="cd-hours">10</span><span class="countdown-label" data-en="HOURS" data-ar="ساعات">HOURS</span></div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit"><span id="cd-mins">49</span><span class="countdown-label" data-en="MINS" data-ar="دقائق">MINS</span></div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit"><span id="cd-secs">41</span><span class="countdown-label" data-en="SECS" data-ar="ثواني">SECS</span></div>
    </div>
    <div class="event-meta">
      <span><span class="meta-icon icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2.5" x2="16" y2="6"></line><line x1="8" y1="2.5" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></span> <span data-en="April 25, 2026" data-ar="25 أبريل 2026">April 25, 2026</span></span>
      <span><span class="meta-icon icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M12 7v5l3 2"></path></svg></span> <span data-en="10:00 AM – 1:00 PM" data-ar="10:00 صباحاً – 1:00 مساءً">10:00 AM – 1:00 PM</span></span>
      <span><span class="meta-icon icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg></span> <span data-en="Auditorium B105, 2nd Floor" data-ar="المدرج B105، الدور الثاني">Auditorium B105, 2nd Floor</span></span>
    </div>
    <a class="register-btn" href="https://forms.gle/fH7Jjg73kT6W6YRK7" target="_blank" rel="noopener noreferrer" data-en="REGISTER NOW →" data-ar="سجل الآن ←">REGISTER NOW →</a>
  </div>
  <div class="section">
    <h2 class="section-title" data-en="CHALLENGE CATEGORIES" data-ar="فئات التحديات">CHALLENGE CATEGORIES</h2>
    <div class="cat-grid">
      <div class="cat-card"><div class="cat-path">/CAT_CRYPTO</div><div class="cat-name" data-en="Cryptography" data-ar="التشفير">Cryptography</div><div class="cat-desc" data-en="Crack ciphers and decode hidden messages." data-ar="فك الشفرات واستخراج الرسائل الخفية.">Crack ciphers and decode hidden messages.</div></div>
      <div class="cat-card"><div class="cat-path">/CAT_WEB</div><div class="cat-name" data-en="Web Security" data-ar="أمن الويب">Web Security</div><div class="cat-desc" data-en="Exploit vulnerabilities in web applications." data-ar="استغلال الثغرات في تطبيقات الويب.">Exploit vulnerabilities in web applications.</div></div>
      <div class="cat-card"><div class="cat-path">/CAT_FORENSICS</div><div class="cat-name" data-en="Digital Forensics" data-ar="التحقيق الجنائي">Digital Forensics</div><div class="cat-desc" data-en="Analyze files and memory dumps to find traces." data-ar="تحليل الملفات والذاكرة للعثور على الآثار.">Analyze files and memory dumps to find traces.</div></div>
      <div class="cat-card"><div class="cat-path">/CAT_OSINT</div><div class="cat-name" data-en="OSINT" data-ar="الاستخبارات المفتوحة">OSINT</div><div class="cat-desc" data-en="Gather intel from publicly available sources." data-ar="جمع المعلومات من المصادر المفتوحة.">Gather intel from publicly available sources.</div></div>
    </div>
  </div>
  <footer class="site-footer">
    <div class="footer-logo">ACMCTF <span>2.0</span></div>
    <div class="footer-meta" data-en="ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia" data-ar="ACM CTF 2.0 · كلية علوم الحاسب · جامعة الأمير سلطان · الرياض، المملكة العربية السعودية">ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia</div>
    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="#" onclick="showPage('home'); return false;" data-en="Home" data-ar="الرئيسية">Home</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('schedule'); return false;" data-en="Schedule" data-ar="الجدول">Schedule</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('workshops'); return false;" data-en="Workshop" data-ar="ورشة">Workshop</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('resources'); return false;" data-en="Resources" data-ar="المصادر">Resources</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('challenges'); return false;" data-en="Challenges" data-ar="التحديات">Challenges</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('rules'); return false;" data-en="Rules" data-ar="القوانين">Rules</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('faq'); return false;" data-en="FAQ" data-ar="الأسئلة الشائعة">FAQ</a>
    </nav>
    <div class="footer-contact">Event inquiries: <a href="mailto:acm@psu.edu.sa">acm@psu.edu.sa</a></div>
    <div class="footer-credit">Made by <a href="https://blueprint.shoug-tech.com/" target="_blank" rel="noopener noreferrer">Blueprint</a></div>
  </footer>
</div>

<div class="page" id="page-schedule">
  <div class="section">
    <h2 class="section-title" data-en="EVENT SCHEDULE" data-ar="جدول الفعاليات">EVENT SCHEDULE</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div>
          <div class="timeline-date">APR 19</div>
          <div class="timeline-name" data-en="Recon &amp; Web Proxies" data-ar="الاستطلاع ووكلاء الويب">Recon &amp; Web Proxies</div>
        </div>
        <div class="timeline-meta">
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M12 7v5l3 2"></path></svg></span> <span data-en="Time TBD" data-ar="الوقت يحدد لاحقًا">Time TBD</span></span>
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg></span> <span data-en="Lab" data-ar="المختبر">Lab</span></span>
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21a6 6 0 0 0-12 0"></path><circle cx="12" cy="8" r="4"></circle></svg></span> <span data-en="ACM Team" data-ar="فريق ACM">ACM Team</span></span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div>
          <div class="timeline-date">APR 20</div>
          <div class="timeline-name" data-en="Access Control" data-ar="التحكم في الوصول">Access Control</div>
        </div>
        <div class="timeline-meta">
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M12 7v5l3 2"></path></svg></span> <span data-en="Time TBD" data-ar="الوقت يحدد لاحقًا">Time TBD</span></span>
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg></span> <span data-en="Lab" data-ar="المختبر">Lab</span></span>
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21a6 6 0 0 0-12 0"></path><circle cx="12" cy="8" r="4"></circle></svg></span> <span data-en="ACM Team" data-ar="فريق ACM">ACM Team</span></span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div>
          <div class="timeline-date">APR 21</div>
          <div class="timeline-name" data-en="Injection Attacks" data-ar="هجمات الحقن">Injection Attacks</div>
        </div>
        <div class="timeline-meta">
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M12 7v5l3 2"></path></svg></span> <span data-en="Time TBD" data-ar="الوقت يحدد لاحقًا">Time TBD</span></span>
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg></span> <span data-en="Lab" data-ar="المختبر">Lab</span></span>
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21a6 6 0 0 0-12 0"></path><circle cx="12" cy="8" r="4"></circle></svg></span> <span data-en="ACM Team" data-ar="فريق ACM">ACM Team</span></span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div>
          <div class="timeline-date">APR 22</div>
          <div class="timeline-name" data-en="Broken Authentication" data-ar="المصادقة المكسورة">Broken Authentication</div>
        </div>
        <div class="timeline-meta">
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M12 7v5l3 2"></path></svg></span> <span data-en="Time TBD" data-ar="الوقت يحدد لاحقًا">Time TBD</span></span>
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg></span> <span data-en="Lab" data-ar="المختبر">Lab</span></span>
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21a6 6 0 0 0-12 0"></path><circle cx="12" cy="8" r="4"></circle></svg></span> <span data-en="ACM Team" data-ar="فريق ACM">ACM Team</span></span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div>
          <div class="timeline-date">APR 23</div>
          <div class="timeline-name" data-en="API Exploitation &amp; File Attacks" data-ar="استغلال الواجهات البرمجية وهجمات الملفات">API Exploitation &amp; File Attacks</div>
        </div>
        <div class="timeline-meta">
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M12 7v5l3 2"></path></svg></span> <span data-en="Time TBD" data-ar="الوقت يحدد لاحقًا">Time TBD</span></span>
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg></span> <span data-en="Lab" data-ar="المختبر">Lab</span></span>
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21a6 6 0 0 0-12 0"></path><circle cx="12" cy="8" r="4"></circle></svg></span> <span data-en="ACM Team" data-ar="فريق ACM">ACM Team</span></span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot active"></div>
        <div>
          <div class="timeline-date">APR 25</div>
          <div class="timeline-name" data-en="ACM CTF 2.0 Main Event" data-ar="الحدث الرئيسي – ACM CTF 2.0">ACM CTF 2.0 Main Event</div>
        </div>
        <div class="timeline-meta">
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M12 7v5l3 2"></path></svg></span> <span data-en="10:00 AM – 1:00 PM" data-ar="10:00 ص – 1:00 م">10:00 AM – 1:00 PM</span></span>
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg></span> <span data-en="Auditorium B105" data-ar="المدرج B105">Auditorium B105</span></span>
          <span><span class="icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4"></path><circle cx="9" cy="9" r="3"></circle><circle cx="15" cy="9" r="3"></circle></svg></span> <span data-en="ACM Team" data-ar="فريق ACM">ACM Team</span></span>
        </div>
      </div>
    </div>
  </div>
  <footer class="site-footer">
    <div class="footer-logo">ACMCTF <span>2.0</span></div>
    <div class="footer-meta" data-en="ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia" data-ar="ACM CTF 2.0 · كلية علوم الحاسب · جامعة الأمير سلطان · الرياض، المملكة العربية السعودية">ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia</div>
    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="#" onclick="showPage('home'); return false;" data-en="Home" data-ar="الرئيسية">Home</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('schedule'); return false;" data-en="Schedule" data-ar="الجدول">Schedule</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('workshops'); return false;" data-en="Workshop" data-ar="ورشة">Workshop</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('resources'); return false;" data-en="Resources" data-ar="المصادر">Resources</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('challenges'); return false;" data-en="Challenges" data-ar="التحديات">Challenges</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('rules'); return false;" data-en="Rules" data-ar="القوانين">Rules</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('faq'); return false;" data-en="FAQ" data-ar="الأسئلة الشائعة">FAQ</a>
    </nav>
    <div class="footer-contact" data-en="Event inquiries: acm@psu.edu.sa" data-ar="استفسارات الفعالية: acm@psu.edu.sa">Event inquiries: <a href="mailto:acm@psu.edu.sa">acm@psu.edu.sa</a></div>
    <div class="footer-credit">Made by <a href="https://blueprint.shoug-tech.com/" target="_blank" rel="noopener noreferrer">Blueprint</a></div>
  </footer>
</div>

<div class="page" id="page-workshops">
  <div class="section">
    <h2 class="section-title" data-en="PREPARATION WORKSHOPS" data-ar="ورش التحضير">PREPARATION WORKSHOPS</h2>
    <div class="workshop-grid">
      <div class="workshop-card">
        <div class="workshop-header">
          <span class="workshop-badge">DAY 1</span>
          <label class="workshop-check"><span data-en="Mark as Complete" data-ar="وضع علامة كمكتمل">Mark as Complete</span> <input type="checkbox"></label>
        </div>
        <div class="workshop-name" data-en="Recon &amp; Web Proxies" data-ar="الاستطلاع ووكلاء الويب">Recon &amp; Web Proxies</div>
        <div class="workshop-details">
          <div class="detail-group"><label data-en="DATE" data-ar="التاريخ">DATE</label><span>Apr 19</span></div>
          <div class="detail-group"><label data-en="TIME" data-ar="الوقت">TIME</label><span data-en="TBD" data-ar="يحدد لاحقًا">TBD</span></div>
          <div class="detail-group"><label data-en="THEME" data-ar="المحور">THEME</label><span data-en="Laying the ground" data-ar="بناء الأساس">Laying the ground</span></div>
          <div class="detail-group"><label data-en="TOPICS" data-ar="الموضوعات">TOPICS</label><span data-en="Recon, proxies, disclosure, discovery" data-ar="الاستطلاع، البروكسي، كشف المعلومات، الاكتشاف">Recon, proxies, disclosure, discovery</span></div>
          <div class="detail-group"><label data-en="LAB" data-ar="التطبيق">LAB</label><span data-en="Capture traffic and uncover hidden endpoints" data-ar="التقاط الحركة واكتشاف نقاط النهاية المخفية">Capture traffic and uncover hidden endpoints</span></div>
        </div>
        <a class="view-btn" href="tutorial-osint/" data-en="VIEW TUTORIAL ↗" data-ar="عرض الشرح ↗">VIEW TUTORIAL ↗</a>
      </div>
      <div class="workshop-card">
        <div class="workshop-header">
          <span class="workshop-badge">DAY 2</span>
          <label class="workshop-check"><span data-en="Mark as Complete" data-ar="وضع علامة كمكتمل">Mark as Complete</span> <input type="checkbox"></label>
        </div>
        <div class="workshop-name" data-en="Access Control" data-ar="التحكم في الوصول">Access Control</div>
        <div class="workshop-details">
          <div class="detail-group"><label data-en="DATE" data-ar="التاريخ">DATE</label><span>Apr 20</span></div>
          <div class="detail-group"><label data-en="TIME" data-ar="الوقت">TIME</label><span data-en="TBD" data-ar="يحدد لاحقًا">TBD</span></div>
          <div class="detail-group"><label data-en="THEME" data-ar="المحور">THEME</label><span data-en="Weak authentication and authorization" data-ar="ضعف المصادقة والتفويض">Weak authentication and authorization</span></div>
          <div class="detail-group"><label data-en="TOPICS" data-ar="الموضوعات">TOPICS</label><span data-en="Sessions, access control, privilege bypasses" data-ar="الجلسات، التحكم في الوصول، تجاوز الصلاحيات">Sessions, access control, privilege bypasses</span></div>
          <div class="detail-group"><label data-en="LAB" data-ar="التطبيق">LAB</label><span data-en="IDOR and parameter tampering challenge" data-ar="تحدي IDOR والعبث بالمعاملات">IDOR and parameter tampering challenge</span></div>
        </div>
        <a class="view-btn" href="tutorial-web/" data-en="VIEW TUTORIAL ↗" data-ar="عرض الشرح ↗">VIEW TUTORIAL ↗</a>
      </div>
      <div class="workshop-card">
        <div class="workshop-header">
          <span class="workshop-badge">DAY 3</span>
          <label class="workshop-check"><span data-en="Mark as Complete" data-ar="وضع علامة كمكتمل">Mark as Complete</span> <input type="checkbox"></label>
        </div>
        <div class="workshop-name" data-en="Injection Attacks" data-ar="هجمات الحقن">Injection Attacks</div>
        <div class="workshop-details">
          <div class="detail-group"><label data-en="DATE" data-ar="التاريخ">DATE</label><span>Apr 21</span></div>
          <div class="detail-group"><label data-en="TIME" data-ar="الوقت">TIME</label><span data-en="TBD" data-ar="يحدد لاحقًا">TBD</span></div>
          <div class="detail-group"><label data-en="THEME" data-ar="المحور">THEME</label><span data-en="Exploiting vulnerable input handling" data-ar="استغلال معالجة الإدخال الضعيفة">Exploiting vulnerable input handling</span></div>
          <div class="detail-group"><label data-en="TOPICS" data-ar="الموضوعات">TOPICS</label><span data-en="SQLi, command injection, SSTI" data-ar="حقن SQL، حقن الأوامر، SSTI">SQLi, command injection, SSTI</span></div>
          <div class="detail-group"><label data-en="LAB" data-ar="التطبيق">LAB</label><span data-en="Exploit SQLi to extract lab data" data-ar="استغلال SQLi لاستخراج بيانات المختبر">Exploit SQLi to extract lab data</span></div>
        </div>
        <a class="view-btn" href="tutorial-crypto/" data-en="VIEW TUTORIAL ↗" data-ar="عرض الشرح ↗">VIEW TUTORIAL ↗</a>
      </div>
      <div class="workshop-card">
        <div class="workshop-header">
          <span class="workshop-badge">DAY 4</span>
          <label class="workshop-check"><span data-en="Mark as Complete" data-ar="وضع علامة كمكتمل">Mark as Complete</span> <input type="checkbox"></label>
        </div>
        <div class="workshop-name" data-en="Broken Authentication" data-ar="المصادقة المكسورة">Broken Authentication</div>
        <div class="workshop-details">
          <div class="detail-group"><label data-en="DATE" data-ar="التاريخ">DATE</label><span>Apr 22</span></div>
          <div class="detail-group"><label data-en="TIME" data-ar="الوقت">TIME</label><span data-en="TBD" data-ar="يحدد لاحقًا">TBD</span></div>
          <div class="detail-group"><label data-en="THEME" data-ar="المحور">THEME</label><span data-en="Attacking the user through the browser" data-ar="مهاجمة المستخدم عبر المتصفح">Attacking the user through the browser</span></div>
          <div class="detail-group"><label data-en="TOPICS" data-ar="الموضوعات">TOPICS</label><span data-en="Brute force, reset tokens, session handling" data-ar="القوة الغاشمة، رموز إعادة التعيين، إدارة الجلسات">Brute force, reset tokens, session handling</span></div>
          <div class="detail-group"><label data-en="LAB" data-ar="التطبيق">LAB</label><span data-en="Reset-token brute force and session proof" data-ar="تخمين رمز إعادة التعيين وإثبات استغلال الجلسة">Reset-token brute force and session proof</span></div>
        </div>
        <a class="view-btn" href="tutorial-forensics/" data-en="VIEW TUTORIAL ↗" data-ar="عرض الشرح ↗">VIEW TUTORIAL ↗</a>
      </div>
      <div class="workshop-card">
        <div class="workshop-header">
          <span class="workshop-badge">DAY 5</span>
          <label class="workshop-check"><span data-en="Mark as Complete" data-ar="وضع علامة كمكتمل">Mark as Complete</span> <input type="checkbox"></label>
        </div>
        <div class="workshop-name" data-en="API Exploitation &amp; File Attacks" data-ar="استغلال الواجهات البرمجية وهجمات الملفات">API Exploitation &amp; File Attacks</div>
        <div class="workshop-details">
          <div class="detail-group"><label data-en="DATE" data-ar="التاريخ">DATE</label><span>Apr 23</span></div>
          <div class="detail-group"><label data-en="TIME" data-ar="الوقت">TIME</label><span data-en="TBD" data-ar="يحدد لاحقًا">TBD</span></div>
          <div class="detail-group"><label data-en="THEME" data-ar="المحور">THEME</label><span data-en="Going deeper with APIs and server-side flaws" data-ar="التعمق في الواجهات البرمجية والثغرات من جهة الخادم">Going deeper with APIs and server-side flaws</span></div>
          <div class="detail-group"><label data-en="TOPICS" data-ar="الموضوعات">TOPICS</label><span data-en="API exploitation, file upload, LFI/RFI" data-ar="استغلال API، رفع الملفات، LFI/RFI">API exploitation, file upload, LFI/RFI</span></div>
          <div class="detail-group"><label data-en="LAB" data-ar="التطبيق">LAB</label><span data-en="API challenge and local-file read exploit" data-ar="تحدي API واستغلال قراءة ملف محلي">API challenge and local-file read exploit</span></div>
        </div>
        <a class="view-btn" href="tutorial/" data-en="VIEW TUTORIAL ↗" data-ar="عرض الشرح ↗">VIEW TUTORIAL ↗</a>
      </div>
    </div>
  </div>
  <footer class="site-footer">
    <div class="footer-logo">ACMCTF <span>2.0</span></div>
    <div class="footer-meta" data-en="ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia" data-ar="ACM CTF 2.0 · كلية علوم الحاسب · جامعة الأمير سلطان · الرياض، المملكة العربية السعودية">ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia</div>
    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="#" onclick="showPage('home'); return false;" data-en="Home" data-ar="الرئيسية">Home</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('schedule'); return false;" data-en="Schedule" data-ar="الجدول">Schedule</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('workshops'); return false;" data-en="Workshop" data-ar="ورشة">Workshop</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('resources'); return false;" data-en="Resources" data-ar="المصادر">Resources</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('challenges'); return false;" data-en="Challenges" data-ar="التحديات">Challenges</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('rules'); return false;" data-en="Rules" data-ar="القوانين">Rules</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('faq'); return false;" data-en="FAQ" data-ar="الأسئلة الشائعة">FAQ</a>
    </nav>
    <div class="footer-contact" data-en="Event inquiries: acm@psu.edu.sa" data-ar="استفسارات الفعالية: acm@psu.edu.sa">Event inquiries: <a href="mailto:acm@psu.edu.sa">acm@psu.edu.sa</a></div>
    <div class="footer-credit">Made by <a href="https://blueprint.shoug-tech.com/" target="_blank" rel="noopener noreferrer">Blueprint</a></div>
  </footer>
</div>

<div class="page" id="page-resources">
  <div class="section">
    <h2 class="section-title" data-en="LEARNING RESOURCES" data-ar="موارد التعلم">LEARNING RESOURCES</h2>
    <div class="resource-section">
      <div class="resource-cat" data-en="Web Security" data-ar="أمن الويب">Web Security</div>
      <a class="resource-item" href="https://portswigger.net/burp/communitydownload" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-tool">TOOL</span><span class="resource-name">Burp Suite Community Edition</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://www.youtube.com/watch?v=7f2vl3sQK2M" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-yt">YT</span><span class="resource-name">OWASP Top 10 Explained</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://portswigger.net/web-security" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-platform">PLATFORM</span><span class="resource-name">PortSwigger Web Security Academy</span><span class="resource-ext">↗</span></a>
    </div>
    <div class="resource-section">
      <div class="resource-cat" data-en="Cryptography" data-ar="التشفير">Cryptography</div>
      <a class="resource-item" href="https://gchq.github.io/CyberChef/" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-tool">TOOL</span><span class="resource-name">CyberChef</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://ctf101.org/cryptography/what-is-rsa/" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-article">ARTICLE</span><span class="resource-name">Introduction to RSA Encryption</span><span class="resource-ext">↗</span></a>
    </div>
    <div class="resource-section">
      <div class="resource-cat" data-en="Forensics &amp; OSINT" data-ar="التحقيق الجنائي والـ OSINT">Forensics &amp; OSINT</div>
      <a class="resource-item" href="https://www.wireshark.org/" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-tool">TOOL</span><span class="resource-name">Wireshark</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://www.autopsy.com/download/" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-tool">TOOL</span><span class="resource-name">Autopsy Digital Forensics</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://www.maltego.com/downloads/" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-platform">PLATFORM</span><span class="resource-name">Maltego Community Edition</span><span class="resource-ext">↗</span></a>
    </div>
  </div>
  <footer class="site-footer">
    <div class="footer-logo">ACMCTF <span>2.0</span></div>
    <div class="footer-meta" data-en="ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia" data-ar="ACM CTF 2.0 · كلية علوم الحاسب · جامعة الأمير سلطان · الرياض، المملكة العربية السعودية">ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia</div>
    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="#" onclick="showPage('home'); return false;" data-en="Home" data-ar="الرئيسية">Home</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('schedule'); return false;" data-en="Schedule" data-ar="الجدول">Schedule</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('workshops'); return false;" data-en="Workshop" data-ar="ورشة">Workshop</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('resources'); return false;" data-en="Resources" data-ar="المصادر">Resources</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('challenges'); return false;" data-en="Challenges" data-ar="التحديات">Challenges</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('rules'); return false;" data-en="Rules" data-ar="القوانين">Rules</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('faq'); return false;" data-en="FAQ" data-ar="الأسئلة الشائعة">FAQ</a>
    </nav>
    <div class="footer-contact" data-en="Event inquiries: acm@psu.edu.sa" data-ar="استفسارات الفعالية: acm@psu.edu.sa">Event inquiries: <a href="mailto:acm@psu.edu.sa">acm@psu.edu.sa</a></div>
    <div class="footer-credit">Made by <a href="https://blueprint.shoug-tech.com/" target="_blank" rel="noopener noreferrer">Blueprint</a></div>
  </footer>
</div>

<div class="page" id="page-challenges">
  <div class="section">
    <h2 class="section-title" data-en="CHALLENGE CATEGORIES" data-ar="فئات التحديات">CHALLENGE CATEGORIES</h2>
    <div class="challenge-grid">
      <div class="challenge-card"><div class="challenge-diff">BEGINNER</div><div class="challenge-name" data-en="Cryptography" data-ar="التشفير">Cryptography</div><div class="challenge-pts">50–300 pts</div></div>
      <div class="challenge-card"><div class="challenge-diff">INTERMEDIATE</div><div class="challenge-name" data-en="Web Security" data-ar="أمن الويب">Web Security</div><div class="challenge-pts">100–500 pts</div></div>
      <div class="challenge-card"><div class="challenge-diff">INTERMEDIATE</div><div class="challenge-name" data-en="Digital Forensics" data-ar="التحقيق الجنائي">Digital Forensics</div><div class="challenge-pts">100–400 pts</div></div>
      <div class="challenge-card"><div class="challenge-diff">ADVANCED</div><div class="challenge-name" data-en="OSINT" data-ar="الاستخبارات المفتوحة">OSINT</div><div class="challenge-pts">200–600 pts</div></div>
    </div>
    <h2 class="section-title" data-en="PRACTICE PLATFORMS" data-ar="منصات التدريب">PRACTICE PLATFORMS</h2>
    <div class="platforms-list">
      <div class="platform-item"><div><div class="platform-name">picoCTF</div><div class="platform-sub" data-en="Great for beginners" data-ar="مثالي للمبتدئين">Great for beginners</div></div><span class="platform-arrow">→</span></div>
      <div class="platform-item"><div><div class="platform-name">TryHackMe</div><div class="platform-sub" data-en="Guided learning paths" data-ar="مسارات تعليمية موجهة">Guided learning paths</div></div><span class="platform-arrow">→</span></div>
      <div class="platform-item"><div><div class="platform-name">HackTheBox</div><div class="platform-sub" data-en="Advanced practice" data-ar="تدريب متقدم">Advanced practice</div></div><span class="platform-arrow">→</span></div>
    </div>
  </div>
  <footer class="site-footer">
    <div class="footer-logo">ACMCTF <span>2.0</span></div>
    <div class="footer-meta" data-en="ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia" data-ar="ACM CTF 2.0 · كلية علوم الحاسب · جامعة الأمير سلطان · الرياض، المملكة العربية السعودية">ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia</div>
    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="#" onclick="showPage('home'); return false;" data-en="Home" data-ar="الرئيسية">Home</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('schedule'); return false;" data-en="Schedule" data-ar="الجدول">Schedule</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('workshops'); return false;" data-en="Workshop" data-ar="ورشة">Workshop</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('resources'); return false;" data-en="Resources" data-ar="المصادر">Resources</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('challenges'); return false;" data-en="Challenges" data-ar="التحديات">Challenges</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('rules'); return false;" data-en="Rules" data-ar="القوانين">Rules</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('faq'); return false;" data-en="FAQ" data-ar="الأسئلة الشائعة">FAQ</a>
    </nav>
    <div class="footer-contact" data-en="Event inquiries: acm@psu.edu.sa" data-ar="استفسارات الفعالية: acm@psu.edu.sa">Event inquiries: <a href="mailto:acm@psu.edu.sa">acm@psu.edu.sa</a></div>
    <div class="footer-credit">Made by <a href="https://blueprint.shoug-tech.com/" target="_blank" rel="noopener noreferrer">Blueprint</a></div>
  </footer>
</div>

<div class="page" id="page-rules">
  <div class="section">
    <h2 class="section-title" data-en="COMPETITION RULES" data-ar="قوانين المسابقة">COMPETITION RULES</h2>
    <div class="rules-box">
      <div class="rule-item"><span class="rule-num">1.</span><span class="rule-text" data-en="No attacks against the competition infrastructure. Target only the designated challenge instances." data-ar="يُحظر مهاجمة البنية التحتية للمسابقة. استهدف فقط نماذج التحديات المخصصة.">No attacks against the competition infrastructure. Target only the designated challenge instances.</span></div>
      <div class="rule-item"><span class="rule-num">2.</span><span class="rule-text" data-en="Do not share flags or solutions with other participants during the competition." data-ar="لا تشارك العلامات أو الحلول مع المشاركين الآخرين خلال المسابقة.">Do not share flags or solutions with other participants during the competition.</span></div>
      <div class="rule-item"><span class="rule-num">3.</span><span class="rule-text" data-en="Brute-forcing forms or SSH is strictly prohibited unless explicitly stated in the challenge description." data-ar="يُحظر تمامًا هجمات القوة الغاشمة على النماذج أو SSH إلا إذا نص وصف التحدي على ذلك.">Brute-forcing forms or SSH is strictly prohibited unless explicitly stated in the challenge description.</span></div>
      <div class="rule-item"><span class="rule-num">4.</span><span class="rule-text" data-en="Any violation of these rules or university code of conduct will result in immediate disqualification." data-ar="أي انتهاك لهذه القواعد أو لوائح الجامعة سيؤدي إلى الاستبعاد الفوري.">Any violation of these rules or university code of conduct will result in immediate disqualification.</span></div>
      <div class="rule-item"><span class="rule-num">5.</span><span class="rule-text" data-en="Have fun, learn, and collaborate with your team members!" data-ar="استمتع، وتعلم، وتعاون مع أعضاء فريقك!">Have fun, learn, and collaborate with your team members!</span></div>
    </div>
  </div>
  <footer class="site-footer">
    <div class="footer-logo">ACMCTF <span>2.0</span></div>
    <div class="footer-meta" data-en="ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia" data-ar="ACM CTF 2.0 · كلية علوم الحاسب · جامعة الأمير سلطان · الرياض، المملكة العربية السعودية">ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia</div>
    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="#" onclick="showPage('home'); return false;" data-en="Home" data-ar="الرئيسية">Home</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('schedule'); return false;" data-en="Schedule" data-ar="الجدول">Schedule</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('workshops'); return false;" data-en="Workshop" data-ar="ورشة">Workshop</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('resources'); return false;" data-en="Resources" data-ar="المصادر">Resources</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('challenges'); return false;" data-en="Challenges" data-ar="التحديات">Challenges</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('rules'); return false;" data-en="Rules" data-ar="القوانين">Rules</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('faq'); return false;" data-en="FAQ" data-ar="الأسئلة الشائعة">FAQ</a>
    </nav>
    <div class="footer-contact" data-en="Event inquiries: acm@psu.edu.sa" data-ar="استفسارات الفعالية: acm@psu.edu.sa">Event inquiries: <a href="mailto:acm@psu.edu.sa">acm@psu.edu.sa</a></div>
    <div class="footer-credit">Made by <a href="https://blueprint.shoug-tech.com/" target="_blank" rel="noopener noreferrer">Blueprint</a></div>
  </footer>
</div>

<div class="page" id="page-faq">
  <div class="section">
    <h2 class="section-title" data-en="FREQUENTLY ASKED QUESTIONS" data-ar="الأسئلة الشائعة">FREQUENTLY ASKED QUESTIONS</h2>
    <div class="faq-list">
      <div class="faq-item open">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span data-en="Do I need prior hacking experience?" data-ar="هل أحتاج إلى خبرة سابقة في الاختراق؟">Do I need prior hacking experience?</span>
          <em class="faq-chevron">∨</em>
        </div>
        <div class="faq-a" data-en="No! We provide preparation workshops prior to the event to teach you the basics." data-ar="لا! نوفر ورش تحضيرية قبل الحدث لتعليمك الأساسيات.">No! We provide preparation workshops prior to the event to teach you the basics.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span data-en="Who can participate?" data-ar="من يمكنه المشاركة؟">Who can participate?</span>
          <em class="faq-chevron">∨</em>
        </div>
        <div class="faq-a" data-en="Only students from Prince Sultan University can participate." data-ar="المشاركة متاحة فقط لطلاب جامعة الأمير سلطان.">Only students from Prince Sultan University can participate.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span data-en="Is it a team or individual competition?" data-ar="هل المسابقة فردية أم جماعية؟">Is it a team or individual competition?</span>
          <em class="faq-chevron">∨</em>
        </div>
        <div class="faq-a" data-en="You can compete as an individual or in a team of up to 4 members." data-ar="يمكنك المنافسة بشكل فردي أو ضمن فريق من 4 أعضاء كحد أقصى.">You can compete as an individual or in a team of up to 4 members.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span data-en="What should I bring?" data-ar="ماذا يجب أن أحضر؟">What should I bring?</span>
          <em class="faq-chevron">∨</em>
        </div>
        <div class="faq-a" data-en="Your laptop, a charger, and your university ID. We'll provide WiFi and everything else you need." data-ar="حاسوبك المحمول وشاحنه وبطاقتك الجامعية. سنوفر الإنترنت وكل ما تحتاجه.">Your laptop, a charger, and your university ID. We'll provide WiFi and everything else you need.</div>
      </div>
    </div>
    <div class="faq-contact">
      <p data-en="HAVE A QUESTION? EMAIL US" data-ar="هل لديك سؤال؟ راسلنا">HAVE A QUESTION? EMAIL US</p>
      <a href="mailto:acm@psu.edu.sa">acm@psu.edu.sa</a>
    </div>
  </div>
  <footer class="site-footer">
    <div class="footer-logo">ACMCTF <span>2.0</span></div>
    <div class="footer-meta" data-en="ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia" data-ar="ACM CTF 2.0 · كلية علوم الحاسب · جامعة الأمير سلطان · الرياض، المملكة العربية السعودية">ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia</div>
    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="#" onclick="showPage('home'); return false;" data-en="Home" data-ar="الرئيسية">Home</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('schedule'); return false;" data-en="Schedule" data-ar="الجدول">Schedule</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('workshops'); return false;" data-en="Workshop" data-ar="ورشة">Workshop</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('resources'); return false;" data-en="Resources" data-ar="المصادر">Resources</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('challenges'); return false;" data-en="Challenges" data-ar="التحديات">Challenges</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('rules'); return false;" data-en="Rules" data-ar="القوانين">Rules</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('faq'); return false;" data-en="FAQ" data-ar="الأسئلة الشائعة">FAQ</a>
    </nav>
    <div class="footer-contact" data-en="Event inquiries: acm@psu.edu.sa" data-ar="استفسارات الفعالية: acm@psu.edu.sa">Event inquiries: <a href="mailto:acm@psu.edu.sa">acm@psu.edu.sa</a></div>
    <div class="footer-credit">Made by <a href="https://blueprint.shoug-tech.com/" target="_blank" rel="noopener noreferrer">Blueprint</a></div>
  </footer>
</div>

<div class="page" id="page-about">
  <div class="section">
    <h2 class="section-title" data-en="ABOUT THE EVENT" data-ar="عن الفعالية">ABOUT THE EVENT</h2>
    <div class="about-box">
      <p data-en="ACM CTF 2.0 is the premier cybersecurity competition hosted by the ACM Student Chapter at Prince Sultan University's College of Computer and Information Sciences (CCIS)." data-ar="ACM CTF 2.0 هي المسابقة الرائدة في مجال الأمن السيبراني، تنظمها فصيلة ACM الطلابية في كلية علوم الحاسب والمعلومات (CCIS) بجامعة الأمير سلطان.">ACM CTF 2.0 is the premier cybersecurity competition hosted by the ACM Student Chapter at Prince Sultan University's College of Computer and Information Sciences (CCIS).</p>
      <p data-en="Designed to challenge students in practical offensive and defensive security scenarios, the event aims to foster a community of passionate cybersecurity enthusiasts in Riyadh and beyond." data-ar="صُممت لتحدي الطلاب في سيناريوهات أمنية هجومية ودفاعية عملية، وتهدف إلى بناء مجتمع من المتحمسين للأمن السيبراني في الرياض وما حولها.">Designed to challenge students in practical offensive and defensive security scenarios, the event aims to foster a community of passionate cybersecurity enthusiasts in Riyadh and beyond.</p>
    </div>
    <h2 class="section-title" data-en="ORGANIZING TEAM" data-ar="فريق التنظيم">ORGANIZING TEAM</h2>
    <div class="team-grid">
      <div class="team-member"><div class="team-avatar">SA</div><div class="team-name">Shoug Alomran</div><div class="team-role" data-en="Liaison and Website Developer" data-ar="مسؤول الاتصال ومطور مواقع الويب">Liaison and Website Developer</div></div>
      <div class="team-member"><div class="team-avatar">SA</div><div class="team-name">Sultan Alharbi</div><div class="team-role" data-en="T" data-ar="ق">T</div></div>
      <div class="team-member"><div class="team-avatar">Y</div><div class="team-name">Yawar</div><div class="team-role" data-en="T" data-ar="مطور التحديات">T</div></div>
      <div class="team-member"><div class="team-avatar">NA</div><div class="team-name">T</div><div class="team-role" data-en="T" data-ar="ا">T</div></div>
    </div>
  </div>
  <footer class="site-footer">
    <div class="footer-logo">ACMCTF <span>2.0</span></div>
    <div class="footer-meta" data-en="ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia" data-ar="ACM CTF 2.0 · كلية علوم الحاسب · جامعة الأمير سلطان · الرياض، المملكة العربية السعودية">ACM CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia</div>
    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="#" onclick="showPage('home'); return false;" data-en="Home" data-ar="الرئيسية">Home</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('schedule'); return false;" data-en="Schedule" data-ar="الجدول">Schedule</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('workshops'); return false;" data-en="Workshop" data-ar="ورشة">Workshop</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('resources'); return false;" data-en="Resources" data-ar="المصادر">Resources</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('challenges'); return false;" data-en="Challenges" data-ar="التحديات">Challenges</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('rules'); return false;" data-en="Rules" data-ar="القوانين">Rules</a>
      <span class="footer-sep">•</span>
      <a href="#" onclick="showPage('faq'); return false;" data-en="FAQ" data-ar="الأسئلة الشائعة">FAQ</a>
    </nav>
    <div class="footer-contact" data-en="Event inquiries: acm@psu.edu.sa" data-ar="استفسارات الفعالية: acm@psu.edu.sa">Event inquiries: <a href="mailto:acm@psu.edu.sa">acm@psu.edu.sa</a></div>
    <div class="footer-credit">Made by <a href="https://blueprint.shoug-tech.com/" target="_blank" rel="noopener noreferrer">Blueprint</a></div>
  </footer>
</div>
