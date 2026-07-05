(function () {
  var domains = window.CISSP_DOMAINS || [];
  var svgNS = "http://www.w3.org/2000/svg";

  function byId(id) {
    return document.getElementById(id);
  }

  function htmlEscape(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function polarToCartesian(cx, cy, radius, angle) {
    var radians = ((angle - 90) * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(radians),
      y: cy + radius * Math.sin(radians),
    };
  }

  function describeArc(cx, cy, radius, startAngle, endAngle) {
    var start = polarToCartesian(cx, cy, radius, endAngle);
    var end = polarToCartesian(cx, cy, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      start.x.toFixed(3),
      start.y.toFixed(3),
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x.toFixed(3),
      end.y.toFixed(3),
    ].join(" ");
  }

  function topicList(topics) {
    if (!topics || !topics.length) {
      return '<p class="cissp-topic-empty">Primary outline item. Add detailed notes here as you build the guide.</p>';
    }

    return (
      '<ul class="cissp-topic-list">' +
      topics.map(function (topic) {
        return "<li>" + htmlEscape(topic) + "</li>";
      }).join("") +
      "</ul>"
    );
  }

  function subdomainMarkup(domain) {
    return domain.subdomains
      .map(function (item) {
        return (
          '<article class="cissp-subdomain">' +
          '<div class="cissp-subdomain-head">' +
          '<span class="cissp-subdomain-code">' +
          htmlEscape(item.code) +
          "</span>" +
          "<h3>" +
          htmlEscape(item.code) +
          " - " +
          htmlEscape(item.title) +
          "</h3>" +
          "</div>" +
          topicList(item.topics) +
          "</article>"
        );
      })
      .join("");
  }

  function setActiveDomain(id) {
    document.querySelectorAll("[data-cissp-domain]").forEach(function (element) {
      element.classList.toggle("is-active", Number(element.dataset.cisspDomain) === id);
    });
  }

  function openDomainCard(id) {
    var card = byId("cissp-domain-" + id);
    if (!card) return;

    var isOpen = card.classList.toggle("is-open");
    card.setAttribute("aria-expanded", isOpen ? "true" : "false");

    var button = card.querySelector(".cissp-expand");
    if (button) {
      button.textContent = isOpen ? "Hide Subdomains" : "Show More";
    }

    if (isOpen) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function renderDiagram(mount) {
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 260 260");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "CISSP domain weightage donut chart");
    svg.classList.add("cissp-ring");

    var total = domains.reduce(function (sum, domain) {
      return sum + domain.weight;
    }, 0);
    var startAngle = 0;

    domains.forEach(function (domain) {
      var span = (domain.weight / total) * 360;
      var endAngle = startAngle + span;
      var segmentStart = startAngle + 1.2;
      var segmentEnd = endAngle - 1.2;

      var path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", describeArc(130, 130, 78, segmentStart, segmentEnd));
      path.setAttribute("stroke", domain.accent);
      path.setAttribute("stroke-width", "38");
      path.setAttribute("fill", "none");
      path.setAttribute("tabindex", "0");
      path.dataset.cisspDomain = domain.id;
      path.classList.add("cissp-arc");

      var midAngle = startAngle + span / 2;
      var textPos = polarToCartesian(130, 130, 78, midAngle);
      var weight = document.createElementNS(svgNS, "text");
      weight.setAttribute("x", textPos.x.toFixed(2));
      weight.setAttribute("y", textPos.y.toFixed(2));
      weight.setAttribute("text-anchor", "middle");
      weight.setAttribute("dominant-baseline", "middle");
      weight.textContent = domain.weight + "%";
      weight.dataset.cisspDomain = domain.id;
      weight.classList.add("cissp-weight-label");

      [path, weight].forEach(function (node) {
        node.addEventListener("mouseenter", function () {
          setActiveDomain(domain.id);
        });
        node.addEventListener("focus", function () {
          setActiveDomain(domain.id);
        });
        node.addEventListener("click", function () {
          setActiveDomain(domain.id);
          openDomainCard(domain.id);
        });
        node.addEventListener("keydown", function (event) {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setActiveDomain(domain.id);
            openDomainCard(domain.id);
          }
        });
      });

      svg.append(path, weight);
      startAngle = endAngle;
    });

    var center = document.createElementNS(svgNS, "circle");
    center.setAttribute("cx", "130");
    center.setAttribute("cy", "130");
    center.setAttribute("r", "47");
    center.classList.add("cissp-ring-hole");
    svg.append(center);

    var centerText = document.createElementNS(svgNS, "text");
    centerText.setAttribute("x", "130");
    centerText.setAttribute("y", "124");
    centerText.setAttribute("text-anchor", "middle");
    centerText.classList.add("cissp-ring-core");
    centerText.textContent = "CISSP";
    svg.append(centerText);

    var centerSub = document.createElementNS(svgNS, "text");
    centerSub.setAttribute("x", "130");
    centerSub.setAttribute("y", "143");
    centerSub.setAttribute("text-anchor", "middle");
    centerSub.classList.add("cissp-ring-core-sub");
    centerSub.textContent = "8 Domains";
    svg.append(centerSub);

    mount.append(svg);
  }

  function renderLabels(container, items) {
    container.innerHTML = items
      .map(function (domain) {
        return (
          '<button class="cissp-callout" type="button" style="--domain-color: ' +
          domain.accent +
          '" data-cissp-domain="' +
          domain.id +
          '">' +
          '<span class="cissp-callout-weight">' +
          domain.weight +
          "%</span>" +
          '<span class="cissp-callout-title">' +
          htmlEscape(domain.title) +
          "</span>" +
          "</button>"
        );
      })
      .join("");

    container.querySelectorAll(".cissp-callout").forEach(function (button) {
      button.addEventListener("mouseenter", function () {
        setActiveDomain(Number(button.dataset.cisspDomain));
      });
      button.addEventListener("focus", function () {
        setActiveDomain(Number(button.dataset.cisspDomain));
      });
      button.addEventListener("click", function () {
        var id = Number(button.dataset.cisspDomain);
        setActiveDomain(id);
        openDomainCard(id);
      });
    });
  }

  function renderHub() {
    var diagram = byId("cissp-diagram");
    var left = byId("cissp-labels-left");
    var right = byId("cissp-labels-right");
    var grid = byId("cissp-domain-grid");

    if (!diagram || !grid) return;

    renderLabels(left, domains.slice(4).reverse());
    renderDiagram(diagram);
    renderLabels(right, domains.slice(0, 4));

    grid.innerHTML = domains
      .map(function (domain) {
        return (
          '<article class="panel cissp-domain-card" id="cissp-domain-' +
          domain.id +
          '" aria-expanded="false" data-cissp-domain="' +
          domain.id +
          '" style="--domain-color: ' +
          domain.accent +
          '">' +
          '<div class="cissp-domain-summary">' +
          "<div>" +
          '<p class="cissp-domain-kicker">Domain ' +
          domain.id +
          " - " +
          domain.weight +
          "%</p>" +
          "<h3>" +
          htmlEscape(domain.title) +
          "</h3>" +
          '<p class="cissp-domain-meta">' +
          domain.subdomains.length +
          " exam outline areas</p>" +
          "</div>" +
          '<div class="cissp-domain-actions">' +
          '<button class="button button-secondary cissp-expand" type="button">Show More</button>' +
          '<a class="button button-primary" href="' +
          domain.slug +
          '">Open Notes</a>' +
          "</div>" +
          "</div>" +
          '<div class="cissp-domain-detail">' +
          subdomainMarkup(domain) +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    grid.querySelectorAll(".cissp-expand").forEach(function (button) {
      button.addEventListener("click", function () {
        var card = button.closest(".cissp-domain-card");
        openDomainCard(Number(card.dataset.cisspDomain));
      });
    });

    setActiveDomain(1);
  }

  function renderDomainPage() {
    var mount = byId("cissp-domain-page");
    if (!mount) return;

    var id = Number(document.body.dataset.domainId);
    var domain = domains.find(function (item) {
      return item.id === id;
    });

    if (!domain) {
      mount.innerHTML = '<article class="panel text-card"><h2 class="card-title">Domain not found.</h2></article>';
      return;
    }

    document.title = "CISSP Domain " + domain.id + " | " + domain.title;

    var title = byId("cissp-domain-title");
    var summary = byId("cissp-domain-summary");
    var badge = byId("cissp-domain-badge");

    if (title) title.textContent = "Domain " + domain.id + ": " + domain.title;
    if (summary) {
      summary.textContent =
        "Average exam weightage: " +
        domain.weight +
        "%. This page is intentionally blank so I can build and update the notes manually.";
    }
    if (badge) badge.textContent = domain.weight + "% average weight";

    mount.style.setProperty("--domain-color", domain.accent);
    mount.innerHTML =
      '<article class="panel cissp-blank-notes" style="--domain-color: ' +
      domain.accent +
      '">' +
      '<a class="button button-secondary" href="cissp-notes.html">Back to Hub</a>' +
      "</article>";
  }

  renderHub();
  renderDomainPage();
})();
