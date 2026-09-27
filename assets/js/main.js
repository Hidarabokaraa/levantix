/* Levantix — site behaviour: language switch (EN / AR), navigation, quote form. */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "971553477719";
  var STORAGE_KEY = "levantix-lang";

  /* ---------- Arabic copy (English lives in the HTML) ---------- */
  var AR = {
    skip: "انتقل إلى المحتوى",
    brandTag: "الشحن الدولي والتخليص الجمركي",
    navServices: "الخدمات",
    navProcess: "كيف نعمل",
    navAbout: "من نحن",
    navContact: "تواصل معنا",
    ctaQuote: "اطلب عرض سعر",
    menu: "فتح القائمة",
    heroTitle: "الشحن والتخليص الجمركي إلى سوريا",
    heroLead: "نحجز شحنتك، ونخلّصها عبر الجمارك السورية، ونوصلها إلى بابك، من دبي إلى دمشق.",
    ctaRequest: "اطلب عرض سعر",
    ctaWhatsapp: "راسلنا على واتساب",
    routeLabel: "مسار الشحن",
    routeA: "دبي",
    routeARole: "مركز الانطلاق",
    routeB: "اللاذقية وطرطوس",
    routeBRole: "الموانئ البحرية والجمارك",
    routeC: "دمشق",
    routeCRole: "التسليم إلى بابك",
    servicesTitle: "ما الذي نتولاه",
    servicesLead: "فريق واحد يرافق بضاعتك من ميناء التحميل حتى المستلم في سوريا، فتكون لك جهة تواصل واحدة للشحن والأوراق والتوصيل.",
    servicesLink: "اسألنا عن شحنتك",
    s1Title: "الشحن البحري والبري",
    s1Text: "حاويات كاملة ومشتركة (FCL وLCL) إلى اللاذقية وطرطوس، مع شحن بري عندما يكون الوقت مهمًا.",
    s2Title: "التخليص الجمركي",
    s2Text: "تصنيف البنود الجمركية، وحساب الرسوم، وإجازات الاستيراد، وتجهيز كامل الوثائق قبل وصول البضاعة.",
    s3Title: "حماية البضائع",
    s3Text: "التأمين، والتغليف المخصص للتصدير، وفحص التحميل، لتصل بضاعتك بالحالة التي غادرت بها.",
    s4Title: "التوصيل داخل سوريا",
    s4Text: "نقل من الميناء إلى الباب إلى دمشق وحلب وحمص وباقي المدن، مع إطلاعك على كل مرحلة.",
    processTitle: "كيف تنتقل شحنتك",
    p1Title: "أخبرنا بما تشحنه",
    p1Text: "أرسل نوع البضاعة ووزنها ومدينة الاستلام، ونرد عليك بالسعر والمدة المتوقعة.",
    p2Title: "نحجز ونستلم",
    p2Text: "نحجز المساحة لدى الناقل ونرتّب استلام البضاعة من المورّد أو المستودع.",
    p3Title: "نخلّص الجمارك",
    p3Text: "يقدّم مخلّصونا البيان الجمركي ويتابعون المعاينة ودفع الرسوم في الميناء السوري.",
    p4Title: "نسلّم البضاعة",
    p4Text: "تُنقل بضاعتك إلى عنوانك وتُسلَّم مع وثائق الإفراج الخاصة بها.",
    aboutTitle: "عن ليفانتكس",
    aboutP1: "ليفانتكس شركة شحن وتخليص جمركي تعمل بين الخليج وسوريا، انطلقت من فكرة واحدة: الاستيراد إلى سوريا يجب ألا يعتمد على التخمين.",
    aboutP2: "يعرف فريقنا التعرفة الجمركية السورية وإجراءات الموانئ والوثائق التي تحتاجها كل شحنة. تحصل على سعر واحد، وجهة تواصل واحدة، وجواب واضح عمّا تتطلبه بضاعتك.",
    factOffices: "المكاتب",
    factOfficesVal: "دبي ودمشق",
    factPorts: "الموانئ السورية",
    factPortsVal: "اللاذقية وطرطوس",
    factLang: "نعمل باللغتين",
    factLangVal: "العربية والإنجليزية",
    contactTitle: "اطلب عرض سعر",
    contactLead: "أخبرنا عن شحنتك. يفتح النموذج واتساب مع تعبئة بياناتك، وتبقى الرسالة جاهزة للإرسال.",
    cUae: "دبي، واتساب",
    cSyria: "دمشق",
    cOffices: "المكاتب",
    cOfficesVal: "دبي، الإمارات ودمشق، سوريا",
    cWeb: "الموقع الإلكتروني",
    fName: "الاسم",
    fCargo: "ماذا تشحن؟",
    fCargoPh: "مثال: طبليتان من قطع الغيار",
    fFrom: "مدينة الاستلام",
    fFromPh: "مثال: دبي، الإمارات",
    fTo: "مدينة التسليم في سوريا",
    fToPh: "مثال: حلب",
    fSize: "الوزن أو الحجم التقريبي",
    fSizePh: "مثال: 800 كغ أو حاوية 20 قدم",
    fNotes: "أي تفاصيل أخرى",
    optional: "(اختياري)",
    formError: "أضف اسمك ونوع البضاعة ومدينة الاستلام للمتابعة.",
    fSubmit: "أرسل عبر واتساب",
    rights: "جميع الحقوق محفوظة.",
    backTop: "العودة إلى الأعلى",
    // WhatsApp message
    waHello: "مرحبًا ليفانتكس، أرغب بعرض سعر لشحنة.",
    waGeneric: "مرحبًا ليفانتكس، لدي استفسار عن الشحن إلى سوريا.",
    waName: "الاسم",
    waCargo: "البضاعة",
    waFrom: "من",
    waTo: "إلى",
    waSize: "الوزن/الحجم",
    waNotes: "ملاحظات",
    title: "ليفانتكس | الشحن والتخليص الجمركي إلى سوريا",
    description: "ليفانتكس تحجز شحنتك وتخلّصها عبر الجمارك السورية وتوصلها إلى بابك، من دبي إلى دمشق."
  };

  var EN_EXTRA = {
    menu: "Open menu",
    waHello: "Hello Levantix, I'd like a quote for a shipment.",
    waGeneric: "Hello Levantix, I have a question about shipping to Syria.",
    waName: "Name",
    waCargo: "Cargo",
    waFrom: "From",
    waTo: "To",
    waSize: "Weight/volume",
    waNotes: "Notes"
  };

  var root = document.documentElement;
  var EN = {};
  var currentLang = "en";

  // Capture the English copy from the markup once, so switching back is lossless.
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    EN[el.getAttribute("data-i18n")] = el.innerHTML;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
    el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
      var parts = pair.split(":");
      if (!(parts[1] in EN)) EN[parts[1]] = el.getAttribute(parts[0]);
    });
  });
  EN.title = document.title;
  var metaDesc = document.querySelector('meta[name="description"]');
  EN.description = metaDesc ? metaDesc.getAttribute("content") : "";
  Object.keys(EN_EXTRA).forEach(function (k) { if (!(k in EN)) EN[k] = EN_EXTRA[k]; });

  function t(key) {
    var dict = currentLang === "ar" ? AR : EN;
    return dict[key] != null ? dict[key] : EN[key];
  }

  function setLang(lang) {
    currentLang = lang === "ar" ? "ar" : "en";
    var dict = currentLang === "ar" ? AR : EN;

    root.lang = currentLang;
    root.dir = currentLang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = dict[el.getAttribute("data-i18n")];
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        var val = dict[parts[1]];
        if (val != null) el.setAttribute(parts[0], val);
      });
    });

    document.title = dict.title;
    if (metaDesc) metaDesc.setAttribute("content", dict.description);

    var toggle = document.querySelector("[data-lang-toggle]");
    if (toggle) {
      toggle.textContent = currentLang === "ar" ? "English" : "العربية";
      toggle.lang = currentLang === "ar" ? "en" : "ar";
    }

    updateWhatsAppLinks();
    try { localStorage.setItem(STORAGE_KEY, currentLang); } catch (e) { /* storage unavailable */ }
  }

  function waUrl(text) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
  }

  function updateWhatsAppLinks() {
    document.querySelectorAll("[data-wa-link]").forEach(function (a) {
      a.href = waUrl(t("waGeneric"));
    });
  }

  // Initial language: ?lang= query, then saved choice, then English.
  var params = new URLSearchParams(location.search);
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  var initial = params.get("lang") || saved || "en";
  if (initial === "ar") setLang("ar"); else updateWhatsAppLinks();

  var langToggle = document.querySelector("[data-lang-toggle]");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      setLang(currentLang === "ar" ? "en" : "ar");
    });
  }

  /* ---------- Header: scrolled state ---------- */
  var header = document.querySelector(".site-header");
  var hero = document.getElementById("home");
  var waFloat = document.querySelector(".wa-float");
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
    if (waFloat && hero) {
      waFloat.classList.toggle("is-hidden", window.scrollY < hero.offsetHeight * 0.75);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.querySelector(".menu-toggle");
  var mobileNav = document.getElementById("mobileNav");

  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    mobileNav.hidden = !open;
  }
  menuBtn.addEventListener("click", function () {
    setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
  });
  mobileNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !mobileNav.hidden) { setMenu(false); menuBtn.focus(); }
  });
  window.matchMedia("(min-width: 901px)").addEventListener("change", function (mq) {
    if (mq.matches) setMenu(false);
  });

  /* ---------- Active nav link ---------- */
  var navLinks = document.querySelectorAll(".nav a");
  var sections = Array.prototype.map.call(navLinks, function (a) {
    return document.querySelector(a.getAttribute("href"));
  }).filter(Boolean);

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          if (a.getAttribute("href") === "#" + entry.target.id) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---------- Quote form → WhatsApp ---------- */
  var form = document.getElementById("quoteForm");
  var errorBox = document.getElementById("formError");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var required = ["name", "cargo", "from"];
    var firstInvalid = null;

    required.forEach(function (name) {
      var input = form.elements[name];
      var empty = !String(data.get(name) || "").trim();
      input.setAttribute("aria-invalid", String(empty));
      if (empty && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      errorBox.hidden = false;
      firstInvalid.focus();
      return;
    }
    errorBox.hidden = true;

    var lines = [t("waHello"), ""];
    [["name", "waName"], ["cargo", "waCargo"], ["from", "waFrom"], ["to", "waTo"], ["size", "waSize"], ["notes", "waNotes"]]
      .forEach(function (pair) {
        var v = String(data.get(pair[0]) || "").trim();
        if (v) lines.push(t(pair[1]) + ": " + v);
      });

    window.open(waUrl(lines.join("\n")), "_blank", "noopener");
  });

  form.addEventListener("input", function (e) {
    if (e.target.getAttribute("aria-invalid") === "true" && e.target.value.trim()) {
      e.target.setAttribute("aria-invalid", "false");
    }
  });

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
