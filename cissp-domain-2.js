/* ============================================================
   CISSP Domain 2 — concept-map interactivity
   Attaches a hover / focus / tap tooltip (description + example
   + optional figure) to any Security Assessment & Testing map box
   whose label (or data-ac-key) has an entry in window.AC_DETAILS
   (cissp-domain-2-data.js).
   Reuses the shared .osi-tip tooltip styling from styles.css.
   ============================================================ */
(function () {
  var DATA = window.AC_DETAILS || {};
  var FIGS = window.AC_FIGS || {};

  function esc(value) {
    return String(value)
      .replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var tip = document.createElement("div");
  tip.className = "osi-tip";
  document.body.appendChild(tip);
  tip.addEventListener("click", function (e) { e.stopPropagation(); });
  var pinned = false;

  function fill(title, detail) {
    var html = '<div class="osi-tip-title">' + esc(title) + "</div>";
    if (detail.d) html += '<div class="osi-tip-body">' + esc(detail.d) + "</div>";
    if (detail.x) html += '<div class="osi-tip-ex"><span>Example</span>' + esc(detail.x) + "</div>";
    if (detail.f && FIGS[detail.f]) html += '<div class="osi-tip-fig">' + FIGS[detail.f] + "</div>";
    tip.innerHTML = html;
  }

  function place(anchor) {
    var r = anchor.getBoundingClientRect();
    var pad = 12;
    var tw = tip.offsetWidth || 320;
    var th = tip.offsetHeight || 180;
    var x = r.right + 10;
    if (x + tw > window.innerWidth - pad) x = r.left - tw - 10; // flip to the left
    if (x < pad) x = pad;
    var y = r.top;
    if (y + th > window.innerHeight - pad) y = window.innerHeight - th - pad;
    if (y < pad) y = pad;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
  }

  function show(anchor, title, detail) {
    fill(title, detail);
    tip.classList.add("visible");
    tip.classList.toggle("is-pinned", pinned);
    tip.scrollTop = 0;
    place(anchor);
  }
  function hide() { if (!pinned) tip.classList.remove("visible"); }
  function dismiss() { pinned = false; tip.classList.remove("visible", "is-pinned"); }

  function attach(node, title, detail) {
    node.classList.add("has-detail");
    if (detail.f && FIGS[detail.f]) node.classList.add("has-fig");
    node.tabIndex = 0;
    node.setAttribute("role", "button");
    node.setAttribute("aria-label", title + " — details");
    node.addEventListener("mouseenter", function () { if (!pinned) show(node, title, detail); });
    node.addEventListener("mouseleave", hide);
    node.addEventListener("focus", function () { show(node, title, detail); });
    node.addEventListener("blur", dismiss);
    node.addEventListener("click", function (e) {
      e.stopPropagation();
      if (pinned) { dismiss(); }
      else { pinned = true; show(node, title, detail); }
    });
    node.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pinned = !pinned;
        if (pinned) show(node, title, detail); else dismiss();
      } else if (e.key === "Escape") {
        dismiss();
      }
    });
  }

  function labelOf(box) {
    return box.textContent.replace(/\s+/g, " ").trim();
  }

  document.querySelectorAll(".ac-map .ac-box, .ac-map .ac-title").forEach(function (box) {
    var key = box.getAttribute("data-ac-key") || labelOf(box);
    var detail = DATA[key];
    if (detail) attach(box, detail.t || labelOf(box), detail);
  });

  document.addEventListener("click", dismiss);
  window.addEventListener("scroll", dismiss, { passive: true });
})();
