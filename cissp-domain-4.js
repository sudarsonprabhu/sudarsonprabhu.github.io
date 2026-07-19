/* ============================================================
   CISSP Domain 4 — Interactive infographics (VERTICAL)
   Renders the OSI model (#osi-container, from osiModel) and the
   Networking companion (#networking-container, from networkingModel)
   with the same vertical, fully-hoverable card layout.
   Every layer/category/item box shows a description, an example,
   optional bullet list, and an optional SVG diagram on hover.
   Data: cissp-domain-4-data.js (osiModel, networkingModel, osiDetails, OSI_FIGS).
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Inject standalone infographics referenced anywhere on the page via data-osi-fig="<name>".
  document.querySelectorAll("[data-osi-fig]").forEach((node) => {
    const name = node.getAttribute("data-osi-fig");
    if (typeof OSI_FIGS !== "undefined" && OSI_FIGS[name]) node.innerHTML = OSI_FIGS[name];
  });

  const FIGS = typeof OSI_FIGS !== "undefined" ? OSI_FIGS : {};
  const DETAILS = typeof osiDetails !== "undefined" ? osiDetails : {};

  /* ---------- helpers ---------- */
  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }
  function esc(value) {
    return String(value)
      .replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  // normalise a detail value (string | {d,x,f,bullets}) into a consistent object
  function normalize(detail) {
    if (!detail) return null;
    if (typeof detail === "string") return { d: detail };
    return detail;
  }

  /* ---------- tooltip (shared across both infographics) ---------- */
  const tip = el("div", "osi-tip");
  document.body.appendChild(tip);
  tip.addEventListener("click", (e) => e.stopPropagation()); // clicks inside a pinned tooltip shouldn't dismiss it
  let pinned = false;

  function fillTip(title, detail) {
    let html = `<div class="osi-tip-title">${esc(title)}</div>`;
    if (detail.d) html += `<div class="osi-tip-body">${esc(detail.d)}</div>`;
    if (detail.bullets && detail.bullets.length) {
      html += '<ul class="osi-tip-list">' + detail.bullets.map((b) => `<li>${esc(b)}</li>`).join("") + "</ul>";
    }
    if (detail.x) html += `<div class="osi-tip-ex"><span>Example</span>${esc(detail.x)}</div>`;
    if (detail.f && FIGS[detail.f]) html += `<div class="osi-tip-fig">${FIGS[detail.f]}</div>`;
    tip.innerHTML = html;
  }

  function placeTip(anchor) {
    const r = anchor.getBoundingClientRect();
    const pad = 12;
    const tw = tip.offsetWidth || 360;
    const th = tip.offsetHeight || 200;
    let x = r.left;
    let y = r.bottom + 10;
    if (y + th > window.innerHeight - pad) y = r.top - th - 10; // flip above
    if (y < pad) y = pad;
    if (x + tw > window.innerWidth - pad) x = window.innerWidth - tw - pad;
    if (x < pad) x = pad;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
  }

  function showTip(anchor, title, detail) {
    fillTip(title, detail);
    tip.classList.add("visible");
    tip.classList.toggle("is-pinned", pinned);
    tip.scrollTop = 0;
    placeTip(anchor);
  }
  function hideTip() {
    if (!pinned) tip.classList.remove("visible");
  }

  // wire hover / focus / click-to-pin on any element that has a detail
  function attach(node, title, rawDetail) {
    const detail = normalize(rawDetail);
    if (!detail || (!detail.d && !detail.bullets && !detail.x && !detail.f)) return;
    node.classList.add("has-detail");
    node.tabIndex = 0;
    node.setAttribute("role", "button");
    node.setAttribute("aria-label", title);
    node.addEventListener("mouseenter", () => { if (!pinned) showTip(node, title, detail); });
    node.addEventListener("mouseleave", hideTip);
    node.addEventListener("focus", () => showTip(node, title, detail));
    node.addEventListener("blur", () => { pinned = false; tip.classList.remove("visible", "is-pinned"); });
    node.addEventListener("click", (e) => {
      e.stopPropagation();
      if (pinned) { pinned = false; tip.classList.remove("visible", "is-pinned"); }
      else { pinned = true; showTip(node, title, detail); }
    });
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pinned = !pinned;
        if (pinned) showTip(node, title, detail); else tip.classList.remove("visible", "is-pinned");
      } else if (e.key === "Escape") {
        pinned = false; tip.classList.remove("visible", "is-pinned");
      }
    });
  }
  // clicking elsewhere / scrolling unpins
  function dismiss() { pinned = false; tip.classList.remove("visible", "is-pinned"); }
  document.addEventListener("click", dismiss);
  window.addEventListener("scroll", dismiss, { passive: true });

  /* ---------- reusable infographic builder ---------- */
  function buildInfographic(container, model, mastheadText, withConcepts) {
    container.appendChild(el("div", "osi-masthead", mastheadText));

    // foundational static figures (OSI model only)
    if (withConcepts && (FIGS.models || FIGS.encapsulation)) {
      const concepts = el("div", "osi-concepts");
      if (FIGS.models) {
        const c = el("figure", "osi-concept");
        c.innerHTML = FIGS.models + '<figcaption>OSI vs. TCP/IP — the 7 layers map onto 4 TCP/IP layers.</figcaption>';
        concepts.appendChild(c);
      }
      if (FIGS.encapsulation) {
        const c = el("figure", "osi-concept");
        c.innerHTML = FIGS.encapsulation + '<figcaption>Encapsulation — each layer wraps the PDU above it (Data → Segment → Packet → Frame → Bits).</figcaption>';
        concepts.appendChild(c);
      }
      container.appendChild(concepts);
    }

    const stack = el("div", "osi-stack");

    model.forEach((row) => {
      const block = el("article", "osi-layer");
      const hasNum = row.num !== undefined && row.num !== null && row.num !== "";
      if (hasNum) block.style.setProperty("--layer-index", row.num);

      // header (hoverable): numbered layer (OSI) or plain category (Networking)
      const head = el("div", hasNum ? "osi-layer-head" : "osi-layer-head osi-layer-head--plain");
      if (hasNum) head.appendChild(el("span", "osi-layer-num", row.num));
      head.appendChild(el("span", "osi-layer-name", row.name));
      const headTitle = hasNum ? `Layer ${row.num} — ${row.name}` : row.name;
      attach(head, headTitle, { d: row.desc, x: row.ex, f: row.fig });
      block.appendChild(head);

      // categories
      const cats = el("div", "osi-cats");
      row.columns.forEach((col) => {
        const cat = el("div", "osi-cat");

        const catHead = el("div", "osi-cat-head", col.name);
        if (col.info) attach(catHead, col.name, { d: col.info });
        cat.appendChild(catHead);

        const chips = el("div", "osi-chips");
        col.items.forEach((item) => {
          const chip = el("span", "osi-chip", item.label);
          const detail = DETAILS[item.key];
          if (detail) {
            attach(chip, item.label, detail);
            if (normalize(detail).f) chip.classList.add("has-fig");
          }
          chips.appendChild(chip);
        });
        cat.appendChild(chips);
        cats.appendChild(cat);
      });

      block.appendChild(cats);
      stack.appendChild(block);
    });

    container.appendChild(stack);

    const legend = el("div", "osi-legend");
    legend.innerHTML =
      '<span class="osi-legend-item"><span class="osi-legend-swatch"></span>Hover or tap any box for details &amp; examples</span>' +
      '<span class="osi-legend-item"><span class="osi-legend-swatch osi-legend-swatch--fig"></span>Boxes with a dot include a diagram</span>';
    container.appendChild(legend);
  }

  /* ---------- build the infographics that are present ---------- */
  const osi = document.getElementById("osi-container");
  if (osi && typeof osiModel !== "undefined") {
    buildInfographic(osi, osiModel, "4.1 — Secure Design Principles", true);
  }
  const d42 = document.getElementById("domain42-container");
  if (d42 && typeof domain42Model !== "undefined") {
    buildInfographic(d42, domain42Model, "4.2 — Secure Network Components", false);
  }
  const d43 = document.getElementById("domain43-container");
  if (d43 && typeof domain43Model !== "undefined") {
    buildInfographic(d43, domain43Model, "4.3 — Secure Communication Channels", false);
  }

  /* ---------- 4.2 diagram thumbnails: click to enlarge into a big frame ---------- */
  (function () {
    const figs = Array.prototype.slice.call(document.querySelectorAll(".d42-infographic"));
    if (!figs.length) return;
    let openFig = null;
    function closeFig() {
      if (openFig) {
        openFig.classList.remove("expanded");
        openFig = null;
        document.body.style.overflow = "";
      }
    }
    figs.forEach(function (fig) {
      fig.addEventListener("click", function (e) {
        e.stopPropagation();
        if (fig.classList.contains("expanded")) { closeFig(); return; }
        closeFig();
        fig.classList.add("expanded");
        openFig = fig;
        document.body.style.overflow = "hidden"; // freeze background scroll while enlarged
      });
    });
    document.addEventListener("click", closeFig); // click the backdrop to close
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeFig(); });
  })();
});
