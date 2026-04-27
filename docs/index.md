<nav id="nav">
  <a class="nav-logo" onclick="showPage('home'); return false;"><img class="site-logo" src="image/index/ctf_logo.png" alt="ACM and Cyber-Tech CTF logo"><span>ACM/Cyber-Tech</span> CTF <sup style="font-size:0.6rem;color:var(--text-muted)">2.0</sup></a>
  <div class="nav-links" id="navLinks">
    <a class="active" onclick="showPage('home'); return false;" data-en="HOME" data-ar="الرئيسية">HOME</a>
    <a onclick="showPage('schedule'); return false;" data-en="AGENDA" data-ar="الأجندة">AGENDA</a>
    <a onclick="showPage('workshops'); return false;" data-en="WORKSHOPS" data-ar="ورش العمل">WORKSHOPS</a>
    <a href="presentation/presentation/" data-en="PRESENTATION" data-ar="العرض">PRESENTATION</a>
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
    <span class="ann-text" data-en="Winners ceremony will be held at the Career Expo on Monday, May 4 at 4:00 PM in Building 105." data-ar="سيقام حفل تكريم الفائزين في معرض المهن يوم الاثنين 4 مايو الساعة 4:00 مساءً في المبنى 105.">Winners ceremony will be held at the Career Expo on Monday, May 4 at 4:00 PM in Building 105.</span>
  </div>
  <div class="hero">
    <h1 class="hero-title">
      <span class="glitch" data-text="ACM/Cyber-Tech CTF ">ACM/Cyber-Tech CTF </span><span class="accent glitch" data-text="2.0">2.0</span>
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
      <span><span class="meta-icon icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2.5" x2="16" y2="6"></line><line x1="8" y1="2.5" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></span> <span data-en="Monday, May 4, 2026" data-ar="الاثنين 4 مايو 2026">Monday, May 4, 2026</span></span>
      <span><span class="meta-icon icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M12 7v5l3 2"></path></svg></span> <span data-en="4:00 PM" data-ar="4:00 مساءً">4:00 PM</span></span>
      <span><span class="meta-icon icon-inline" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg></span> <span data-en="Career Expo, Building 105" data-ar="معرض المهن، المبنى 105">Career Expo, Building 105</span></span>
    </div>
    <span class="register-btn register-btn-disabled" aria-disabled="true" data-en="REGISTRATION CLOSED" data-ar="تم إغلاق التسجيل">REGISTRATION CLOSED</span>
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
</div>

<div class="page" id="page-schedule">
  <div class="section">
    <h2 class="section-title" data-en="EVENT AGENDA" data-ar="أجندة الفعالية">EVENT AGENDA</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div>
          <div class="timeline-date" data-en="AGENDA 01" data-ar="الأجندة 01">AGENDA 01</div>
          <div class="timeline-name" data-en="Recon &amp; Web Proxies" data-ar="الاستطلاع ووسائط الويب">Recon &amp; Web Proxies</div>
        </div>
        <div class="timeline-meta">
          <span data-en="Focus: Recon workflow and proxy fundamentals" data-ar="التركيز: منهجية الاستطلاع وأساسيات البروكسي">Focus: Recon workflow and proxy fundamentals</span>
          <span data-en="Covers: Discovery, disclosure, and endpoint mapping" data-ar="يشمل: الاكتشاف والكشف عن المعلومات ورسم نقاط النهاية">Covers: Discovery, disclosure, and endpoint mapping</span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div>
          <div class="timeline-date" data-en="AGENDA 02" data-ar="الأجندة 02">AGENDA 02</div>
          <div class="timeline-name" data-en="Access Control" data-ar="التحكم في الوصول">Access Control</div>
        </div>
        <div class="timeline-meta">
          <span data-en="Focus: Authentication and authorization weaknesses" data-ar="التركيز: نقاط ضعف المصادقة والتفويض">Focus: Authentication and authorization weaknesses</span>
          <span data-en="Covers: Sessions, privilege bypasses, and access checks" data-ar="يشمل: الجلسات وتجاوز الصلاحيات وفحوصات الوصول">Covers: Sessions, privilege bypasses, and access checks</span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div>
          <div class="timeline-date" data-en="AGENDA 03" data-ar="الأجندة 03">AGENDA 03</div>
          <div class="timeline-name" data-en="Injection Attacks" data-ar="هجمات الحقن">Injection Attacks</div>
        </div>
        <div class="timeline-meta">
          <span data-en="Focus: Input handling flaws and exploitation paths" data-ar="التركيز: ثغرات معالجة المدخلات ومسارات الاستغلال">Focus: Input handling flaws and exploitation paths</span>
          <span data-en="Covers: SQL injection, command injection, and SSTI" data-ar="يشمل: حقن SQL وحقن الأوامر وSSTI">Covers: SQL injection, command injection, and SSTI</span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div>
          <div class="timeline-date" data-en="AGENDA 04" data-ar="الأجندة 04">AGENDA 04</div>
          <div class="timeline-name" data-en="Broken Authentication" data-ar="كسر الموثوقه">Broken Authentication</div>
        </div>
        <div class="timeline-meta">
          <span data-en="Focus: Session abuse and login flow weaknesses" data-ar="التركيز: إساءة استخدام الجلسات وضعف تدفقات تسجيل الدخول">Focus: Session abuse and login flow weaknesses</span>
          <span data-en="Covers: Brute force, reset flows, and token handling" data-ar="يشمل: التخمين القسري وتدفقات إعادة التعيين ومعالجة الرموز">Covers: Brute force, reset flows, and token handling</span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div>
          <div class="timeline-date" data-en="AGENDA 05" data-ar="الأجندة 05">AGENDA 05</div>
          <div class="timeline-name" data-en="API Exploitation &amp; File Attacks" data-ar="استغلال واجهات البرمجة وهجمات الملفات">API Exploitation &amp; File Attacks</div>
        </div>
        <div class="timeline-meta">
          <span data-en="Focus: API attack surface and file-based exploits" data-ar="التركيز: سطح هجوم واجهات البرمجة واستغلالات الملفات">Focus: API attack surface and file-based exploits</span>
          <span data-en="Covers: Upload abuse, LFI/RFI, and API logic flaws" data-ar="يشمل: إساءة استخدام الرفع وLFI/RFI وثغرات منطق الواجهات">Covers: Upload abuse, LFI/RFI, and API logic flaws</span>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot active"></div>
        <div>
          <div class="timeline-date" data-en="FINALE" data-ar="الختام">FINALE</div>
          <div class="timeline-name" data-en="ACM/Cyber-Tech CTF 2.0 Main Event" data-ar="الحدث الرئيسي – ACM/Cyber-Tech CTF 2.0">ACM/Cyber-Tech CTF 2.0 Main Event</div>
        </div>
        <div class="timeline-meta">
          <span data-en="Format: Live ACM/Cyber-Tech CTF 2.0 competition" data-ar="التنسيق: مسابقة ACM/Cyber-Tech CTF 2.0 مباشرة">Format: Live ACM/Cyber-Tech CTF 2.0 competition</span>
          <span data-en="Goal: Apply the workshop track in one final challenge set" data-ar="الهدف: تطبيق مسار الورش في مجموعة تحديات ختامية">Goal: Apply the workshop track in one final challenge set</span>
        </div>
      </div>
    </div>
  </div>
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
        <div class="workshop-name" data-en="Recon &amp; Web Proxies" data-ar="الاستطلاع ووسائط الويب">Recon &amp; Web Proxies</div>
        <div class="workshop-details">
          <div class="detail-group"><label data-en="AUTHOR" data-ar="إعداد">AUTHOR</label><span data-en="Ghaida Abdulaziz Aldriweesh" data-ar="غيداء عبدالعزيز الدريويش">Ghaida Abdulaziz Aldriweesh</span></div>
          <div class="detail-group"><label data-en="THEME" data-ar="المحور">THEME</label><span data-en="Laying the ground" data-ar="وضع الأساس">Laying the ground</span></div>
          <div class="detail-group"><label data-en="TOPICS" data-ar="الموضوعات">TOPICS</label><span data-en="Recon, proxies, disclosure, discovery" data-ar="أساسيات الاستطلاع، وسائط الويب، كشف المعلومات، فحص واكتشاف مواقع الويب">Recon, proxies, disclosure, discovery</span></div>
          <div class="detail-group"><label data-en="LAB" data-ar="التطبيق">LAB</label><span data-en="Capture traffic and uncover hidden endpoints" data-ar="التقاط حركة البيانات عبر وسيط (Proxy) واكتشاف نقاط نهاية مخفية">Capture traffic and uncover hidden endpoints</span></div>
        </div>
        <a class="view-btn" href="tutorial-recon-web-proxies/" data-en="VIEW TUTORIAL ↗" data-ar="عرض الشرح ↗">VIEW TUTORIAL ↗</a>
      </div>
      <div class="workshop-card">
        <div class="workshop-header">
          <span class="workshop-badge">DAY 2</span>
          <label class="workshop-check"><span data-en="Mark as Complete" data-ar="وضع علامة كمكتمل">Mark as Complete</span> <input type="checkbox"></label>
        </div>
        <div class="workshop-name" data-en="Access Control" data-ar="التحكم في الوصول">Access Control</div>
        <div class="workshop-details">
          <div class="detail-group"><label data-en="AUTHOR" data-ar="إعداد">AUTHOR</label><span data-en="Shoug Alomran" data-ar="شوق العمران">Shoug Alomran</span></div>
          <div class="detail-group"><label data-en="THEME" data-ar="المحور">THEME</label><span data-en="Weak authentication and authorization" data-ar="اختراق أنظمة المصادقة والتفويض الضعيفة">Weak authentication and authorization</span></div>
          <div class="detail-group"><label data-en="TOPICS" data-ar="الموضوعات">TOPICS</label><span data-en="Sessions, access control, privilege bypasses" data-ar="إدارة الجلسات، التحكم في الوصول، تصعيد الصلاحيات / تجاوز القيود">Sessions, access control, privilege bypasses</span></div>
          <div class="detail-group"><label data-en="LAB" data-ar="التطبيق">LAB</label><span data-en="IDOR and parameter tampering challenge" data-ar="تنفيذ هجوم IDOR (الوصول المباشر غير الآمن إلى الكائنات) أو التلاعب بالمعاملات (Parameter Tampering) ضمن مختبر CTF (التقاط العلم)">IDOR and parameter tampering challenge</span></div>
        </div>
        <a class="view-btn" href="tutorial-access-control/" data-en="VIEW TUTORIAL ↗" data-ar="عرض الشرح ↗">VIEW TUTORIAL ↗</a>
      </div>
      <div class="workshop-card">
        <div class="workshop-header">
          <span class="workshop-badge">DAY 3</span>
          <label class="workshop-check"><span data-en="Mark as Complete" data-ar="وضع علامة كمكتمل">Mark as Complete</span> <input type="checkbox"></label>
        </div>
        <div class="workshop-name" data-en="Injection Attacks" data-ar="هجمات الحقن(المهاجم يرسل بيانات خطيرة تخدع النظام)">Injection Attacks</div>
        <div class="workshop-details">
          <div class="detail-group"><label data-en="AUTHOR" data-ar="إعداد">AUTHOR</label><span data-en="Shoug Alomran" data-ar="شوق العمران">Shoug Alomran</span></div>
          <div class="detail-group"><label data-en="THEME" data-ar="المحور">THEME</label><span data-en="Exploiting vulnerable input handling" data-ar="استغلال ضعف معالجة المدخلات">Exploiting vulnerable input handling</span></div>
          <div class="detail-group"><label data-en="TOPICS" data-ar="الموضوعات">TOPICS</label><span data-en="SQLi, command injection, SSTI" data-ar="أساسيات هجمات الحقن، حقن قواعد البيانات، حقن الأوامر، حقن قوالب جانب الخادم">SQLi, command injection, SSTI</span></div>
          <div class="detail-group"><label data-en="LAB" data-ar="التطبيق">LAB</label><span data-en="Exploit SQLi to extract lab data" data-ar="استغلال ثغرة لاستخراج بيانات من قاعدة بيانات داخل المختبر">Exploit SQLi to extract lab data</span></div>
        </div>
        <a class="view-btn" href="tutorial-injection-attacks/" data-en="VIEW TUTORIAL ↗" data-ar="عرض الشرح ↗">VIEW TUTORIAL ↗</a>
      </div>
      <div class="workshop-card">
        <div class="workshop-header">
          <span class="workshop-badge">DAY 4</span>
          <label class="workshop-check"><span data-en="Mark as Complete" data-ar="وضع علامة كمكتمل">Mark as Complete</span> <input type="checkbox"></label>
        </div>
        <div class="workshop-name" data-en="Broken Authentication" data-ar="كسر الموثوقه">Broken Authentication</div>
        <div class="workshop-details">
          <div class="detail-group"><label data-en="AUTHOR" data-ar="إعداد">AUTHOR</label><span data-en="Shoug Alomran" data-ar="شوق العمران">Shoug Alomran</span></div>
          <div class="detail-group"><label data-en="THEME" data-ar="المحور">THEME</label><span data-en="Attacking the user through the browser" data-ar="مهاجمة المستخدم عبر المتصفح">Attacking the user through the browser</span></div>
          <div class="detail-group"><label data-en="TOPICS" data-ar="الموضوعات">TOPICS</label><span data-en="Brute force, reset tokens, session handling" data-ar="هجمات التخمين القسري على أنظمة المصادقة، الهجمات على إدارة الجلسات غير الآمنة">Brute force, reset tokens, session handling</span></div>
          <div class="detail-group"><label data-en="LAB" data-ar="التطبيق">LAB</label><span data-en="Reset-token brute force and session proof" data-ar="تنفيذ هجوم تخمين قسري على صفحة إعادة تعيين كلمة المرور بدون حماية، وسرقة رمز الجلسة (Session Token) أو إظهار تنبيه (Alert) لإثبات نجاح الاستغلال">Reset-token brute force and session proof</span></div>
        </div>
        <a class="view-btn" href="tutorial-broken-authentication/" data-en="VIEW TUTORIAL ↗" data-ar="عرض الشرح ↗">VIEW TUTORIAL ↗</a>
      </div>
      <div class="workshop-card">
        <div class="workshop-header">
          <span class="workshop-badge">DAY 5</span>
          <label class="workshop-check"><span data-en="Mark as Complete" data-ar="وضع علامة كمكتمل">Mark as Complete</span> <input type="checkbox"></label>
        </div>
        <div class="workshop-name" data-en="API Exploitation &amp; File Attacks" data-ar="استغلال واجهات البرمجة وهجمات الملفات">API Exploitation &amp; File Attacks</div>
        <div class="workshop-details">
          <div class="detail-group"><label data-en="AUTHOR" data-ar="إعداد">AUTHOR</label><span data-en="Sultan Alharbi" data-ar="سلطان الحربي">Sultan Alharbi</span></div>
          <div class="detail-group"><label data-en="THEME" data-ar="المحور">THEME</label><span data-en="Going deeper with APIs and server-side flaws" data-ar="التعمق في واجهات البرمجة وثغرات جانب الخادم">Going deeper with APIs and server-side flaws</span></div>
          <div class="detail-group"><label data-en="TOPICS" data-ar="الموضوعات">TOPICS</label><span data-en="API exploitation, file upload, LFI/RFI" data-ar="ثغرات رفع الملفات، استغلال واجهات البرمجة، تضمين الملفات">API exploitation, file upload, LFI/RFI</span></div>
          <div class="detail-group"><label data-en="LAB" data-ar="التطبيق">LAB</label><span data-en="API challenge and local-file read exploit" data-ar="العثور على ثغرة في API واستغلالها ضمن التحدي، وتنفيذ هجوم LFI لقراءة ملف محلي">API challenge and local-file read exploit</span></div>
        </div>
        <a class="view-btn" href="tutorial-api-exploitation-file-attacks/" data-en="VIEW TUTORIAL ↗" data-ar="عرض الشرح ↗">VIEW TUTORIAL ↗</a>
      </div>
    </div>
  </div>
</div>

<div class="page" id="page-resources">
  <div class="section">
    <h2 class="section-title" data-en="LEARNING RESOURCES" data-ar="موارد التعلم">LEARNING RESOURCES</h2>
    <div class="resource-section">
      <div class="resource-cat" data-en="Web Security" data-ar="أمن الويب">Web Security</div>
      <a class="resource-item" href="https://portswigger.net/burp/communitydownload" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-tool">TOOL</span><span class="resource-name">Burp Suite Community Edition</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://portswigger.net/web-security/access-control" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-platform">LAB</span><span class="resource-name">PortSwigger Access Control</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://portswigger.net/web-security/authentication" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-platform">LAB</span><span class="resource-name">PortSwigger Authentication</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://owasp.org/Top10/2021/A01_2021-Broken_Access_Control/index.html" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-article">OWASP</span><span class="resource-name">Broken Access Control</span><span class="resource-ext">↗</span></a>
    </div>
    <div class="resource-section">
      <div class="resource-cat" data-en="Attack Labs" data-ar="مختبرات الهجوم">Attack Labs</div>
      <a class="resource-item" href="https://portswigger.net/web-security/sql-injection/lab-login-bypass" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-platform">LAB</span><span class="resource-name">SQL Injection Login Bypass</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://portswigger.net/web-security/file-upload/lab-file-upload-remote-code-execution-via-web-shell-upload" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-platform">LAB</span><span class="resource-name">File Upload RCE Lab</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-article">GUIDE</span><span class="resource-name">OWASP Authorization Cheat Sheet</span><span class="resource-ext">↗</span></a>
    </div>
    <div class="resource-section">
      <div class="resource-cat" data-en="Tools &amp; Analysis" data-ar="الأدوات والتحليل">Tools &amp; Analysis</div>
      <a class="resource-item" href="https://gchq.github.io/CyberChef/" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-tool">TOOL</span><span class="resource-name">CyberChef</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://www.wireshark.org/" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-tool">TOOL</span><span class="resource-name">Wireshark</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://www.autopsy.com/download/" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-tool">TOOL</span><span class="resource-name">Autopsy Digital Forensics</span><span class="resource-ext">↗</span></a>
      <a class="resource-item" href="https://www.maltego.com/downloads/" target="_blank" rel="noopener noreferrer"><span class="resource-badge badge-platform">PLATFORM</span><span class="resource-name">Maltego Community Edition</span><span class="resource-ext">↗</span></a>
    </div>
  </div>
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
      <a class="platform-item" href="http://example.com" target="_blank" rel="noopener noreferrer"><div><div class="platform-name">Recon Demo Target</div><div class="platform-sub" data-en="Practice intercepting HTTP requests with a proxy" data-ar="التدرّب على اعتراض طلبات HTTP باستخدام Proxy">Practice intercepting HTTP requests with a proxy</div></div><span class="platform-arrow">→</span></a>
      <a class="platform-item" href="https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality" target="_blank" rel="noopener noreferrer"><div><div class="platform-name">Access Control Lab</div><div class="platform-sub" data-en="URL manipulation and admin-function bypass practice" data-ar="التدرّب على التلاعب بالرابط وتجاوز وظائف الإدارة">URL manipulation and admin-function bypass practice</div></div><span class="platform-arrow">→</span></a>
      <a class="platform-item" href="https://portswigger.net/web-security/sql-injection/lab-login-bypass" target="_blank" rel="noopener noreferrer"><div><div class="platform-name">SQL Injection Lab</div><div class="platform-sub" data-en="Login-bypass practice for the injection workshop" data-ar="التدرّب على تجاوز تسجيل الدخول في ورشة الحقن">Login-bypass practice for the injection workshop</div></div><span class="platform-arrow">→</span></a>
      <a class="platform-item" href="https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-different-responses" target="_blank" rel="noopener noreferrer"><div><div class="platform-name">Broken Authentication Lab</div><div class="platform-sub" data-en="Username enumeration via different login responses" data-ar="تعداد أسماء المستخدمين عبر اختلاف ردود تسجيل الدخول">Username enumeration via different login responses</div></div><span class="platform-arrow">→</span></a>
      <a class="platform-item" href="https://portswigger.net/web-security/file-upload/lab-file-upload-remote-code-execution-via-web-shell-upload" target="_blank" rel="noopener noreferrer"><div><div class="platform-name">File Upload Lab</div><div class="platform-sub" data-en="Remote code execution via insecure file upload" data-ar="تنفيذ أوامر عن بُعد عبر رفع ملفات غير آمن">Remote code execution via insecure file upload</div></div><span class="platform-arrow">→</span></a>
    </div>
  </div>
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
        <div class="faq-a" data-en="You may participate in teams of two or three members." data-ar="تقدر تشارك ضمن فريق مكون من عضوين إلى ثلاثةأعضاء.">You may participate in teams of two or three members.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span data-en="What should I bring?" data-ar="ماذا يجب أن أحضر؟">What should I bring?</span>
          <em class="faq-chevron">∨</em>
        </div>
        <div class="faq-a" data-en="Please bring your laptop, charger, and university ID. WiFi will not be provided, so you’ll need to use a personal hotspot; if you don’t have one, a club member will assist you." data-ar="جيب معك اللابتوب، الشاحن، والبطاقة الجامعية. ما راح يتوفر واي فاي، فبتحتاج تستخدم نقطة اتصال (هوتسبوت) من جوالك، وإذا ما عندك، أحد من أعضاء النادي بيساعدك فيها.">Please bring your laptop, charger, and university ID. WiFi will not be provided, so you’ll need to use a personal hotspot; if you don’t have one, a club member will assist you.</div>
      </div>
    </div>
    <div class="faq-contact">
      <p data-en="HAVE A QUESTION? EMAIL US" data-ar="هل لديك سؤال؟ راسلنا">HAVE A QUESTION? EMAIL US</p>
      <a href="mailto:cybertech@psu.edu.sa">cybertech@psu.edu.sa</a>
    </div>
  </div>
</div>

<div class="page" id="page-about">
  <div class="section">
    <h2 class="section-title" data-en="ABOUT THE EVENT" data-ar="عن الفعالية">ABOUT THE EVENT</h2>
    <div class="about-box">
      <p data-en="ACM CTF 2.0 is the premier cybersecurity competition hosted jointly by the ACM Student Chapter and the Cyber-Tech Club at Prince Sultan University's College of Computer and Information Sciences (CCIS)." data-ar="ACM CTF 2.0 هي المسابقة الرائدة في مجال الأمن السيبراني، وينظمها كل من فصيلة ACM الطلابية ونادي Cyber-Tech في كلية علوم الحاسب والمعلومات (CCIS) بجامعة الأمير سلطان.">ACM CTF 2.0 is the premier cybersecurity competition hosted jointly by the ACM Student Chapter and the Cyber-Tech Club at Prince Sultan University's College of Computer and Information Sciences (CCIS).</p>
      <p data-en="Designed to challenge students in practical offensive and defensive security scenarios, the event aims to foster a community of passionate cybersecurity enthusiasts in Riyadh and beyond." data-ar="صُممت لتحدي الطلاب في سيناريوهات أمنية هجومية ودفاعية عملية، وتهدف إلى بناء مجتمع من المتحمسين للأمن السيبراني في الرياض وما حولها.">Designed to challenge students in practical offensive and defensive security scenarios, the event aims to foster a community of passionate cybersecurity enthusiasts in Riyadh and beyond.</p>
      <p data-en="This event was built through a close collaboration between the ACM Club and the Cyber-Tech Club, with each team contributing a distinct part of the experience." data-ar="أُقيمت هذه الفعالية من خلال تعاون وثيق بين نادي ACM ونادي Cyber-Tech، حيث ساهم كل فريق بجانب أساسي من التجربة.">This event was built through a close collaboration between the ACM Club and the Cyber-Tech Club, with each team contributing a distinct part of the experience.</p>
      <div class="club-collab">
        <div class="club-logo-row" aria-label="ACM and Cyber-Tech collaboration">
          <div class="club-logo-card">
            <img src="image/index/acm.png" alt="ACM Club logo">
            <div class="club-logo-label" data-en="ACM Club" data-ar="نادي ACM">ACM Club</div>
          </div>
          <div class="club-collab-plus" data-en="Together" data-ar="معًا">Together</div>
          <div class="club-logo-card">
            <img src="image/index/CyberTech-Logo.png" alt="Cyber-Tech Club logo">
            <div class="club-logo-label" data-en="Cyber-Tech Club" data-ar="نادي سايبر-تك">Cyber-Tech Club</div>
          </div>
        </div>
        <div class="club-work-grid">
          <div class="club-work-card">
            <div class="club-work-title" data-en="ACM Club" data-ar="نادي ACM">ACM Club</div>
            <ul class="club-work-list">
              <li data-en="Organized the event from end to end and created the cryptography challenges." data-ar="تولى تنظيم الفعالية بالكامل، وأنشأ تحديات التشفير.">Organized the event from end to end and created the cryptography challenges.</li>
              <li data-en="Funded the prizes for the competition." data-ar="تكفل بتمويل جوائز المسابقة.">Funded the prizes for the competition.</li>
              <li data-en="Handled approvals, professor coordination, and the event website." data-ar="أنجز الموافقات الرسمية، ونسق مع الأساتذة المشاركين، وطوّر موقع الفعالية.">Handled approvals, professor coordination, and the event website.</li>
              <li data-en="Partnered with Cyber-Tech to populate the workshop tutorial templates." data-ar="تعاون مع نادي سايبر-تك في تعبئة قوالب شروحات ورش العمل.">Partnered with Cyber-Tech to populate the workshop tutorial templates.</li>
            </ul>
          </div>
          <div class="club-work-card">
            <div class="club-work-title" data-en="Cyber-Tech Club" data-ar="نادي سايبر-تك">Cyber-Tech Club</div>
            <ul class="club-work-list">
              <li data-en="Designed the challenges." data-ar="صمّم التحديات.">Designed the challenges.</li>
              <li data-en="Created the workshop tutorial template and wrote the workshop content." data-ar="أنشأ قالب شروحات ورش العمل وأعدّ محتوى الورش.">Created the workshop tutorial template and wrote the workshop content.</li>
              <li data-en="Worked with ACM to populate the workshop tutorial templates." data-ar="عمل مع نادي ACM على تعبئة قوالب شروحات ورش العمل.">Worked with ACM to populate the workshop tutorial templates.</li>
              <li data-en="Converted the workshop material into presentation slides and facilitated the workshops." data-ar="حوّل محتوى الورش إلى شرائح عرض وقدّم الورش وسهّل تنفيذها.">Converted the workshop material into presentation slides and facilitated the workshops.</li>
            </ul>
          </div>
        </div>
        <p class="club-collab-note" data-en="The presidents of both clubs also played a shared role in facilitating communication and keeping coordination smooth between the two teams." data-ar="كما لعب رئيسا الناديين دورًا مهمًا في تسهيل التواصل وضمان سلاسة التنسيق بين الفريقين.">The presidents of both clubs also played a shared role in facilitating communication and keeping coordination smooth between the two teams.</p>
      </div>
    </div>
    <h2 class="section-title" data-en="ORGANIZING TEAM" data-ar="فريق التنظيم">ORGANIZING TEAM</h2>
    <div class="team-grid">
      <div class="team-member">
        <div class="team-avatar">SA</div>
        <div class="team-name">Shoug Alomran</div>
        <div class="team-tag" data-en="ACM Club" data-ar="نادي ACM">ACM Club</div>
        <div class="team-role" data-en="Liaison and Website Developer" data-ar="مسؤول الاتصال ومطور الموقع">Liaison and Website Developer</div>
      </div>
      <div class="team-member">
        <div class="team-avatar">SA</div>
        <div class="team-name">Sultan Alharbi</div>
        <div class="team-tag" data-en="Cyber-Tech Club" data-ar="نادي Cyber-Tech">Cyber-Tech Club</div>
        <div class="team-role" data-en="Cyber Tech President" data-ar="رئيس نادي Cyber-Tech">Cyber Tech President</div>
      </div>
      <div class="team-member">
        <div class="team-avatar">YH</div>
        <div class="team-name">Yawar Hayat</div>
        <div class="team-tag" data-en="ACM Club" data-ar="نادي ACM">ACM Club</div>
        <div class="team-role" data-en="ACM President" data-ar="رئيس نادي ACM">ACM President</div>
      </div>
      <div class="team-member">
        <div class="team-avatar">TA</div>
        <div class="team-name">Turki Alhussain</div>
        <div class="team-tag" data-en="Cyber-Tech Club" data-ar="نادي Cyber-Tech">Cyber-Tech Club</div>
        <div class="team-role" data-en="Challenge Designer" data-ar="مصمم التحديات">Challenge Designer</div>
      </div>
      <div class="team-member">
        <div class="team-avatar">FA</div>
        <div class="team-name">Faisal Aldabesh</div>
        <div class="team-tag" data-en="Cyber-Tech Club" data-ar="نادي Cyber-Tech">Cyber-Tech Club</div>
        <div class="team-role" data-en="Workshop Writer" data-ar="كاتب محتوى الورش">Workshop Writer</div>
      </div>
      <div class="team-member">
        <div class="team-avatar">GA</div>
        <div class="team-name">Ghaida Aldriweesh</div>
        <div class="team-tag" data-en="Cyber-Tech Club" data-ar="نادي Cyber-Tech">Cyber-Tech Club</div>
        <div class="team-role" data-en="Workshop Writer" data-ar="كاتب محتوى الورش">Workshop Writer</div>
      </div>
    </div>
  </div>
</div>

<footer class="site-footer">
  <div class="footer-logo">ACM/Cyber-Tech CTF <span>2.0</span></div>
  <div class="footer-meta" data-en="ACM/Cyber-Tech CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia" data-ar="ACM/Cyber-Tech CTF 2.0 · كلية علوم الحاسب · جامعة الأمير سلطان · الرياض، المملكة العربية السعودية">ACM/Cyber-Tech CTF 2.0 · CCIS · Prince Sultan University · Riyadh, Saudi Arabia</div>
  <nav class="footer-nav" aria-label="Footer navigation">
    <a href="#" onclick="showPage('home'); return false;" data-en="Home" data-ar="الرئيسية">Home</a>
    <span class="footer-sep">•</span>
    <a href="#" onclick="showPage('schedule'); return false;" data-en="Agenda" data-ar="الأجندة">Agenda</a>
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
  <div class="footer-contact" data-en="Event inquiries: cybertech@psu.edu.sa" data-ar="استفسارات الفعالية: cybertech@psu.edu.sa">Event inquiries: <a href="mailto:cybertech@psu.edu.sa">cybertech@psu.edu.sa</a></div>
  <div class="footer-credit">Made by <a href="https://blueprint.shoug-tech.com/" target="_blank" rel="noopener noreferrer">Blueprint</a></div>
</footer>
