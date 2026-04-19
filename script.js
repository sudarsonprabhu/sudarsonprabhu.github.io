const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("site-nav");
const currentPage = document.body.dataset.page || "home";
const viewCountElement = document.getElementById("view-count");
const enquiryForm = document.getElementById("enquiry-form");
const formStatus = document.getElementById("form-status");
const formSubmit = document.getElementById("form-submit");
const turnstileWidgetElement = document.getElementById("turnstile-widget");
const config = window.PORTFOLIO_CONFIG || {};
const backendUrl =
  typeof config.backendUrl === "string" ? config.backendUrl.trim().replace(/\/$/, "") : "";
const turnstileSiteKey =
  typeof config.turnstileSiteKey === "string" ? config.turnstileSiteKey.trim() : "";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const visitorId = getVisitorId();
let turnstileWidgetId = null;
let turnstileToken = "";
let pageViewWidgetId = null;
let pageViewTrackInFlight = false;

function hasBackend() {
  return Boolean(backendUrl);
}

function hasTurnstile() {
  return Boolean(turnstileSiteKey);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getVisitorId() {
  const storageKey = "portfolio_visitor_id";

  try {
    const existing = window.localStorage.getItem(storageKey);

    if (existing) {
      return existing;
    }

    const generated =
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `visitor-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

    window.localStorage.setItem(storageKey, generated);
    return generated;
  } catch (error) {
    return `visitor-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }
}

function setStatus(message, tone = "") {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = message;
  formStatus.classList.remove("is-success", "is-error");

  if (tone) {
    formStatus.classList.add(tone);
  }
}

function toUrl(baseUrl, params = {}) {
  const url = new URL(baseUrl);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

async function postToBackend(payload) {
  const response = await fetch(backendUrl, {
    method: "POST",
    body: new URLSearchParams(payload),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

function animateNumber(element, target) {
  if (!element) {
    return;
  }

  if (prefersReducedMotion) {
    element.textContent = target.toLocaleString();
    return;
  }

  const duration = 950;
  const start = 0;
  const startedAt = performance.now();

  function step(now) {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(start + (target - start) * eased);

    element.textContent = value.toLocaleString();

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

async function trackPageView() {
  if (!hasBackend() || pageViewTrackInFlight || !hasTurnstile()) {
    return;
  }

  if (pageViewWidgetId === null || typeof window.turnstile === "undefined") {
    return;
  }

  try {
    pageViewTrackInFlight = true;
    window.turnstile.execute("#pageview-turnstile");
  } catch (error) {
    pageViewTrackInFlight = false;
    console.error("Page view tracking failed:", error);
  }
}

async function loadViewCount() {
  if (!viewCountElement) {
    return;
  }

  if (!hasBackend()) {
    viewCountElement.textContent = "--";
    return;
  }

  try {
    const response = await fetch(toUrl(backendUrl, { action: "stats" }));

    if (!response.ok) {
      throw new Error(`Stats request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (data && data.ok === false) {
      throw new Error(data.message || "Stats request failed");
    }

    const uniqueVisitors = Number(data.uniqueVisitors || data.totalViews || 0);

    animateNumber(viewCountElement, uniqueVisitors);
  } catch (error) {
    console.error("View count lookup failed:", error);
    viewCountElement.textContent = "--";
  }
}

function setLoadingState(isLoading) {
  if (!formSubmit) {
    return;
  }

  formSubmit.disabled = isLoading;
  formSubmit.textContent = isLoading ? "Sending..." : "Send Enquiry";
}

function normalizeLeadPayload(formData) {
  return {
    type: "lead",
    visitorId,
    fullName: formData.get("fullName")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    phone: formData.get("phone")?.toString().trim() || "",
    company: formData.get("company")?.toString().trim() || "",
    interest: formData.get("interest")?.toString().trim() || "",
    message: formData.get("message")?.toString().trim() || "",
    page: currentPage,
    sourceUrl: window.location.href,
    submittedAt: new Date().toISOString(),
    turnstileToken,
  };
}

function resetTurnstile() {
  turnstileToken = "";

  if (typeof window.turnstile !== "undefined" && turnstileWidgetId !== null) {
    window.turnstile.reset(turnstileWidgetId);
  }
}

function getPageViewTurnstileElement() {
  let element = document.getElementById("pageview-turnstile");

  if (element || !document.body) {
    return element;
  }

  element = document.createElement("div");
  element.id = "pageview-turnstile";
  element.className = "pageview-turnstile";
  document.body.append(element);
  return element;
}

async function submitPageView(token) {
  try {
    const response = await postToBackend({
      type: "pageview",
      visitorId,
      page: currentPage,
      path: window.location.pathname,
      referrer: document.referrer,
      title: document.title,
      language: navigator.language || "",
      screenWidth: window.innerWidth,
      userAgent: navigator.userAgent || "",
      sourceUrl: window.location.href,
      viewedAt: new Date().toISOString(),
      turnstileToken: token,
    });

    if (!response.ok) {
      throw new Error(response.message || "Unknown page view error");
    }
  } catch (error) {
    console.error("Page view tracking failed:", error);
  } finally {
    pageViewTrackInFlight = false;

    if (typeof window.turnstile !== "undefined" && pageViewWidgetId !== null) {
      window.turnstile.reset(pageViewWidgetId);
    }

    loadViewCount();
  }
}

function setupTurnstileWidget(attempt = 0) {
  if (!turnstileWidgetElement || !hasTurnstile()) {
    return;
  }

  if (typeof window.turnstile === "undefined") {
    if (attempt < 20) {
      window.setTimeout(() => setupTurnstileWidget(attempt + 1), 150);
    } else {
      setStatus(
        "The verification widget could not load. Please check your Turnstile configuration.",
        "is-error"
      );
    }

    return;
  }

  if (turnstileWidgetId !== null) {
    return;
  }

  turnstileWidgetId = window.turnstile.render(turnstileWidgetElement, {
    sitekey: turnstileSiteKey,
    theme: "dark",
    action: "portfolio_enquiry",
    callback(token) {
      turnstileToken = token;

      if (hasBackend()) {
        setStatus("Verification complete. You can now send your enquiry.");
      }
    },
    "expired-callback"() {
      turnstileToken = "";
      setStatus("Verification expired. Please complete the challenge again.", "is-error");
    },
    "error-callback"() {
      turnstileToken = "";
      setStatus("Verification failed to load. Please refresh and try again.", "is-error");
    },
  });
}

function setupPageViewTurnstile(attempt = 0) {
  if (!hasBackend() || !hasTurnstile()) {
    return;
  }

  const pageViewContainer = getPageViewTurnstileElement();

  if (!pageViewContainer) {
    return;
  }

  if (typeof window.turnstile === "undefined") {
    if (attempt < 20) {
      window.setTimeout(() => setupPageViewTurnstile(attempt + 1), 150);
    } else {
      loadViewCount();
    }

    return;
  }

  if (pageViewWidgetId !== null) {
    return;
  }

  pageViewWidgetId = window.turnstile.render(pageViewContainer, {
    sitekey: turnstileSiteKey,
    theme: "dark",
    action: "portfolio_pageview",
    appearance: "interaction-only",
    execution: "execute",
    callback(token) {
      submitPageView(token);
    },
    "expired-callback"() {
      pageViewTrackInFlight = false;
      loadViewCount();
    },
    "error-callback"() {
      pageViewTrackInFlight = false;
      console.error("Page view verification failed.");
      loadViewCount();
    },
  });

  trackPageView();
}

function setupEnquiryForm() {
  if (!enquiryForm) {
    return;
  }

  if (!hasBackend()) {
    setStatus("Add your backend URL in config.js before using the enquiry form.");
  } else if (!hasTurnstile()) {
    setStatus("Add your Turnstile site key in config.js before using the enquiry form.");
  } else {
    setStatus("Complete the verification challenge and submit the enquiry form.");
  }

  enquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!enquiryForm.reportValidity()) {
      setStatus("Please correct the highlighted fields before submitting.", "is-error");
      return;
    }

    if (!hasBackend()) {
      setStatus("Add your backend URL in config.js before using the enquiry form.", "is-error");
      return;
    }

    if (!enquiryForm.reportValidity()) {
      setStatus("Please correct the highlighted fields before submitting.", "is-error");
      return;
    }

    const formData = new FormData(enquiryForm);

    if ((formData.get("website") || "").toString().trim()) {
      setStatus("Submission blocked.", "is-error");
      return;
    }

    const payload = normalizeLeadPayload(formData);

    if (!isValidEmail(payload.email)) {
      setStatus("Please enter a valid email address before submitting.", "is-error");
      return;
    }

    if (!payload.fullName || !payload.email || !payload.interest || !payload.message) {
      setStatus("Please complete the required fields before submitting.", "is-error");
      return;
    }

    setLoadingState(true);
    setStatus("Sending your enquiry...");

    try {
      const response = await postToBackend(payload);

      if (!response.ok) {
        throw new Error(response.message || "Unknown submission error");
      }

      enquiryForm.reset();
      resetTurnstile();
      enquiryForm.classList.add("is-success-state");
      setStatus(
        "Thanks. Your enquiry has been recorded and an email alert has been triggered.",
        "is-success"
      );
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      resetTurnstile();
      setStatus(
        "The enquiry could not be submitted right now. Please try again after the backend is set up correctly.",
        "is-error"
      );
    } finally {
      setLoadingState(false);
    }
  });
}

function setupRevealOnScroll() {
  const elements = [...document.querySelectorAll("[data-reveal]")];

  if (!elements.length) {
    return;
  }

  elements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index * 80, 220)}ms`);
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.01,
      rootMargin: "0px 0px -6% 0px",
    }
  );

  elements.forEach((element) => observer.observe(element));
}

function resetInteractivePanel(panel) {
  panel.style.setProperty("--spotlight-x", "50%");
  panel.style.setProperty("--spotlight-y", "50%");
  panel.style.setProperty("--rotate-x", "0deg");
  panel.style.setProperty("--rotate-y", "0deg");
}

function updateInteractivePanel(panel, clientX, clientY) {
  const rect = panel.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const xRatio = x / rect.width;
  const yRatio = y / rect.height;

  panel.style.setProperty("--spotlight-x", `${(xRatio * 100).toFixed(2)}%`);
  panel.style.setProperty("--spotlight-y", `${(yRatio * 100).toFixed(2)}%`);

  if (panel.hasAttribute("data-tilt")) {
    const rotateY = (xRatio - 0.5) * 10;
    const rotateX = (0.5 - yRatio) * 8;

    panel.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
    panel.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
  }
}

function setupInteractivePanels() {
  const panels = document.querySelectorAll(".panel");

  if (!panels.length) {
    return;
  }

  panels.forEach((panel) => {
    resetInteractivePanel(panel);

    if (prefersReducedMotion) {
      return;
    }

    panel.addEventListener("pointermove", (event) => {
      updateInteractivePanel(panel, event.clientX, event.clientY);
    });

    panel.addEventListener("pointerleave", () => {
      resetInteractivePanel(panel);
    });

    panel.addEventListener("pointercancel", () => {
      resetInteractivePanel(panel);
    });
  });
}

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("is-open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

document.querySelectorAll(".site-nav a[data-page]").forEach((link) => {
  if (link.dataset.page === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

setupEnquiryForm();
setupTurnstileWidget();
setupPageViewTurnstile();
setupRevealOnScroll();
setupInteractivePanels();
loadViewCount();

function setupParticleSystem() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];

  const props = {
    particleColor: "rgba(211, 19, 36, 0.45)", // brand red accent
    lineColor: "211, 19, 36", // for rgba interpolation
    particleRadius: 1.5,
    particleCount: prefersReducedMotion ? 20 : 60,
    maxVelocity: 0.4,
    lineLength: 140,
    mouseRadius: 120,
  };

  const mouse = { x: null, y: null };

  document.addEventListener("pointermove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  document.addEventListener("pointerleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * (props.maxVelocity * 2);
      this.vy = (Math.random() - 0.5) * (props.maxVelocity * 2);
    }

    update() {
      // Bounce off edges
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      this.x += this.vx;
      this.y += this.vy;

      // Mouse interaction: particles gravitate to mouse if within radius
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < props.mouseRadius) {
          // Stronger pull when closer
          let forceFactor = (props.mouseRadius - distance) / props.mouseRadius;
          this.x += dx * forceFactor * 0.02;
          this.y += dy * forceFactor * 0.02;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, props.particleRadius, 0, Math.PI * 2);
      ctx.fillStyle = props.particleColor;
      ctx.fill();
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        let p1 = particles[i];
        let p2 = particles[j];
        let dx = p1.x - p2.x;
        let dy = p1.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < props.lineLength) {
          // Connections get more opaque the closer they are
          let opacity = 1 - Math.pow(dist / props.lineLength, 1.5);
          ctx.strokeStyle = `rgba(${props.lineColor}, ${opacity * 0.4})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      if (!prefersReducedMotion) {
        p.update();
      }
      p.draw();
    });

    drawConnections();

    // Optionally draw a line to the mouse if moving
    if (mouse.x !== null && mouse.y !== null && !prefersReducedMotion) {
      particles.forEach((p) => {
        let dx = p.x - mouse.x;
        let dy = p.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < props.lineLength) {
          let opacity = (1 - (dist / props.lineLength)) * 0.3;
          ctx.strokeStyle = `rgba(${props.lineColor}, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    }

    requestAnimationFrame(loop);
  }

  // Init
  resize();
  window.addEventListener("resize", resize);
  
  for (let i = 0; i < props.particleCount; i++) {
    particles.push(new Particle());
  }
  
  loop();
}

setupParticleSystem();
