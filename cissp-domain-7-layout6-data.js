/* ============================================================
   CISSP Domain 7 — Layout 6 hover details (Business Continuity Management)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-7-data.js. Consumed by cissp-domain-7.js.
   Layout 6's RPO uses data-ac-key="rpo-bcm" so it stays distinct
   from Layout 5's backup RPO. Other multi-word boxes use data-ac-key
   for clean, explicit matching.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  timeobj: `
    <svg viewBox="0 0 340 130" class="fig" role="img" aria-label="RPO, RTO, WRT and MTD timeline">
      <text x="170" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Time Objectives</text>
      <line x1="14" y1="60" x2="326" y2="60" stroke="#555" stroke-width="1"/>
      <line x1="150" y1="40" x2="150" y2="80" stroke="#d31324" stroke-width="2"/>
      <text x="150" y="34" text-anchor="middle" fill="#d31324" font-size="8" font-weight="700">INCIDENT</text>
      <!-- RPO before incident -->
      <rect x="60" y="46" width="90" height="14" fill="#2a0a12" stroke="#a0303f"/><text x="105" y="56" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">RPO</text>
      <text x="105" y="74" text-anchor="middle" fill="#a6a6a6" font-size="7">data loss (back)</text>
      <!-- RTO after incident -->
      <rect x="150" y="46" width="90" height="14" fill="#161616" stroke="#a0303f"/><text x="195" y="56" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">RTO</text>
      <text x="195" y="74" text-anchor="middle" fill="#a6a6a6" font-size="7">restore system</text>
      <!-- WRT -->
      <rect x="240" y="46" width="76" height="14" fill="#161616" stroke="#a0303f"/><text x="278" y="56" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">WRT</text>
      <text x="278" y="74" text-anchor="middle" fill="#a6a6a6" font-size="7">resume ops</text>
      <!-- MTD bracket -->
      <line x1="150" y1="92" x2="316" y2="92" stroke="#d31324" stroke-width="1"/>
      <text x="233" y="104" text-anchor="middle" fill="#fff" font-size="8.5" font-weight="700">MTD = RTO + WRT</text>
      <text x="233" y="116" text-anchor="middle" fill="#a6a6a6" font-size="7">max tolerable downtime</text>
    </svg>`,

  drtests: `
    <svg viewBox="0 0 330 140" class="fig" role="img" aria-label="DR test types by intensity">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">DR Tests &mdash; low to high risk</text>
      <g font-size="8.5" fill="#e0e0e0">
        <rect x="20" y="22" width="290" height="18" rx="3" fill="#101018" stroke="#555"/><text x="28" y="35"><tspan fill="#9ad0ff" font-weight="700">1 Read-through / Checklist</tspan> &mdash; review on paper</text>
        <rect x="20" y="44" width="290" height="18" rx="3" fill="#141420" stroke="#777"/><text x="28" y="57"><tspan fill="#bcd" font-weight="700">2 Walkthrough</tspan> &mdash; tabletop, talk it through</text>
        <rect x="20" y="66" width="290" height="18" rx="3" fill="#161616" stroke="#a0303f"/><text x="28" y="79"><tspan fill="#ffd27c" font-weight="700">3 Simulation</tspan> &mdash; act out a scenario</text>
        <rect x="20" y="88" width="290" height="18" rx="3" fill="#2a0a12" stroke="#d31324"/><text x="28" y="101"><tspan fill="#ff9ab0" font-weight="700">4 Parallel</tspan> &mdash; run alt site, prod stays up</text>
        <rect x="20" y="110" width="290" height="18" rx="3" fill="#3a0a0e" stroke="#d31324"/><text x="28" y="123"><tspan fill="#fff" font-weight="700">5 Full-interruption</tspan> &mdash; shut prod down (riskiest)</text>
      </g>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  "Business Continuity Management (BCM)": {
    t: "Business Continuity Management (Domain 7.13)",
    d: "The overarching programme that keeps the organisation's critical and essential functions running through disruption, and recovers them afterwards. BCM sets the goals, runs the Business Impact Analysis, produces the plans (BCP/DRP), tests them, and defines the restoration order. DR is a subset of BC.",
    x: "A hurricane forces evacuation; BCM ensures staff safety first, then activates the BCP to keep critical services running from the recovery site."
  },
  "bcm-focus": {
    t: "Focuses on Critical & Essential Functions",
    d: "BCM does not try to protect everything equally — it concentrates resources on the CRITICAL and ESSENTIAL business functions whose loss would most threaten the organisation's survival. The Business Impact Analysis is what identifies those functions.",
    x: "An online retailer prioritises keeping payment processing and order fulfilment running, while deferring recovery of the internal wiki."
  },

  /* ===== Goals of BCM ===== */
  "Goals of BCM": {
    t: "Goals of BCM",
    d: "BCM's priorities, in strict order: (1) the SAFETY OF PEOPLE always comes first, (2) minimise damage to the organisation, and (3) ensure the survival of the business. Human life outranks every asset and every dollar.",
    x: "During a fire, BCM evacuates staff (safety) before anyone considers saving equipment (damage) or restoring services (survival)."
  },
  "safety-of-people": {
    t: "1. Safety of People",
    d: "The FIRST and overriding goal of any continuity or disaster plan — protect human life and safety above all else. No asset, system or data is ever worth a human life. This is the default 'right answer' on safety-related exam questions.",
    x: "The evacuation plan and fail-safe exit doors take priority over protecting the data centre during an emergency."
  },
  "minimize-damage": {
    t: "2. Minimize Damage",
    d: "The second goal: once people are safe, limit the damage to the organisation's assets, operations and reputation — containing the disruption so it doesn't cascade.",
    x: "After staff evacuate, automated systems shut down equipment safely and contain a flood to one floor."
  },
  "survival-of-business": {
    t: "3. Survival of Business",
    d: "The third goal: ensure the organisation survives and resumes its critical functions. This is why continuity and recovery plans exist — to bring the business back before the disruption becomes fatal.",
    x: "The BCP keeps revenue-generating services running from an alternate site so the company survives the outage."
  },

  /* ===== Business Impact Assessment / Analysis ===== */
  "Business Impact Assessment": {
    t: "Business Impact Analysis (BIA)",
    d: "The cornerstone analysis of BCM (often called the BIA). It identifies the organisation's critical processes and systems, determines the impact of their loss over time, sets the time objectives (RPO/RTO/WRT/MTD), and gets management sign-off on the numbers and recovery costs. Everything else in the plan flows from the BIA.",
    x: "The BIA finds that order processing has a 4-hour MTD and the highest revenue impact, so it gets first priority and the shortest RTO."
  },
  "identify-critical": {
    t: "Identify Critical Processes & Systems",
    d: "The first BIA step: determine WHICH business processes and the systems that support them are critical — the ones the organisation cannot function without. You can't prioritise recovery until you know what's critical.",
    x: "Interviews and analysis reveal that the payment gateway and order database are critical, while the marketing blog is not."
  },
  "Measurements of Time": {
    t: "Measurements of Time",
    d: "The BIA's recovery metrics that quantify urgency: RPO (tolerable data loss), RTO (time to restore the system), WRT (time to resume operations), and MTD (total tolerable downtime). Together they drive backup frequency and recovery investment.",
    x: "Setting a 1-hour RPO and 4-hour MTD for the order system dictates hourly replication and a hot standby.",
    f: "timeobj"
  },
  "rpo-bcm": {
    t: "RPO — Recovery Point Objective",
    d: "The maximum acceptable DATA LOSS, measured in time BEFORE the incident — how far back your last good recovery point can be. Drives how often you back up or replicate. (Looks backward; contrast RTO which looks forward.)",
    x: "A 1-hour RPO means losing at most the last hour of data, so transactions are replicated at least hourly.",
    f: "timeobj"
  },
  "RTO": {
    t: "RTO — Recovery Time Objective",
    d: "The maximum acceptable time to RESTORE a system/function after a disruption — the target for getting the technology back up. RTO must be less than the MTD. Drives the recovery solution (hot site, clustering, etc.).",
    x: "A 2-hour RTO means the failed server must be back online within 2 hours, which justifies a warm standby.",
    f: "timeobj"
  },
  "WRT": {
    t: "WRT — Work Recovery Time",
    d: "The time AFTER the system is technically restored (RTO) that is needed to verify integrity, restore data, and resume NORMAL business operations — testing, validation, and catch-up work before going fully live.",
    x: "After the server is back (RTO), staff spend 2 hours re-entering and validating data (WRT) before the service is truly operational.",
    f: "timeobj"
  },
  "MTD": {
    t: "MTD — Maximum Tolerable Downtime",
    d: "The TOTAL time a critical function can be unavailable before the damage becomes unacceptable (a.k.a. MTPD). The master figure from which RTO and WRT are derived: MTD = RTO + WRT. If recovery exceeds the MTD, the business may not survive.",
    x: "An MTD of 4 hours splits into a 2-hour RTO (restore system) plus a 2-hour WRT (resume operations).",
    f: "timeobj"
  },
  "owner-approval": {
    t: "Owner Approval of #s & Associated Costs",
    d: "The BIA's findings — the criticality rankings, time objectives, and the cost of the recovery solutions — must be reviewed and APPROVED by senior management/business owners. They own the risk and fund the recovery, so they must sign off on the numbers.",
    x: "Management approves spending on a hot site after the BIA shows the cost of downtime far exceeds the site's cost."
  },

  /* ===== Types of Plans ===== */
  "Types of Plans": {
    t: "Types of Plans",
    d: "BCM produces a family of plans. The two the exam focuses on: the Business Continuity Plan (BCP) keeps the whole business running, and the Disaster Recovery Plan (DRP) restores the IT/technical systems. DRP is a subset of BCP.",
    x: "The DRP details how to rebuild the data centre; the broader BCP covers staff, facilities, communications and processes too."
  },
  "Business Continuity Plan": {
    t: "Business Continuity Plan (BCP)",
    d: "The broad, business-wide plan to keep CRITICAL FUNCTIONS operating during and after a disruption — covering people, processes, facilities, communications and technology. It is strategic and long-term; the DRP sits inside it.",
    x: "The BCP defines how the company keeps serving customers from alternate locations while the primary site is down."
  },
  "Disaster Recovery Plan": {
    t: "Disaster Recovery Plan (DRP)",
    d: "The focused, tactical plan to RESTORE IT systems and technical operations after a disaster — the technology-recovery subset of the BCP. It is about getting the systems back; the BCP is about keeping the business going.",
    x: "The DRP gives step-by-step procedures to fail over to the recovery site and rebuild servers from backups."
  },

  /* ===== Testing Plans ===== */
  "Testing Plans": {
    t: "Testing Plans",
    d: "Plans that aren't tested fail when needed. DR/BC tests escalate from low-risk paper reviews to high-risk live cutovers: read-through → walkthrough → simulation → parallel → full-interruption. Each catches different gaps; you climb the ladder as confidence grows.",
    x: "A new DRP starts with a checklist review, then a tabletop, and only after those succeed is a parallel test attempted.",
    f: "drtests"
  },
  "read-through": {
    t: "Read-through / Checklist Test",
    d: "The simplest, lowest-risk test: distribute the plan and have each team review their portion against a checklist to confirm it's complete, current and that contact details are right. No systems are touched.",
    x: "Department heads read the DRP and confirm their team's steps and call-tree numbers are accurate.",
    f: "drtests"
  },
  "Walkthrough": {
    t: "Walkthrough (Tabletop / Structured)",
    d: "The team gathers and TALKS THROUGH the plan against a hypothetical scenario, step by step, to validate roles, decisions and dependencies. Still no production impact, but deeper than a checklist.",
    x: "In a tabletop exercise the team walks through their response to a simulated ransomware outbreak.",
    f: "drtests"
  },
  "Simulation": {
    t: "Simulation Test",
    d: "A realistic scenario is acted out and the team executes their response in a simulated environment — exercising procedures and decisions without affecting real production systems. More hands-on than a walkthrough.",
    x: "The team runs a mock disaster, actually performing recovery steps in a test environment to a defined scenario.",
    f: "drtests"
  },
  "Parallel": {
    t: "Parallel Test",
    d: "Recovery systems are brought up at the alternate site and run IN PARALLEL with production to verify they work — WITHOUT taking production offline. Validates the recovery site for real while keeping the business running safely.",
    x: "The recovery data centre processes a copy of live transactions alongside production to prove it can take over.",
    f: "drtests"
  },
  "full-interruption": {
    t: "Full-Interruption / Full-Scale Test",
    d: "The most thorough and RISKIEST test: production is actually SHUT DOWN and operations cut over entirely to the recovery site, as in a real disaster. Proves the plan completely, but a failure causes real downtime — so it needs careful planning and approval.",
    x: "Over a planned weekend, the company shuts the primary site and runs the whole business from the recovery site.",
    f: "drtests"
  },

  /* ===== Restoration order ===== */
  "Restoration order": {
    t: "Restoration Order",
    d: "The sequence in which systems are brought back after a disaster — driven by criticality and inter-system dependencies. You restore the most critical functions first, but must respect dependency order (a critical app can't come up before the database and network it relies on).",
    x: "The network and authentication services are restored before the critical application that depends on them, which comes before non-critical systems."
  },
  "most-critical-first": {
    t: "Most Critical First",
    d: "Recovery is prioritised by business criticality — the functions identified by the BIA as most essential (shortest MTD) are restored first so the organisation's survival is protected soonest.",
    x: "Payment processing (4-hour MTD) is restored before the internal HR portal (2-week MTD)."
  },
  "Dependency charts": {
    t: "Dependency Charts",
    d: "Maps of which systems depend on which others, used to sequence restoration correctly. Even the most critical application cannot function until its upstream dependencies (network, DNS, authentication, database) are up — so dependencies, not just criticality, shape the order.",
    x: "A dependency chart shows the ERP needs the database, which needs the SAN and network — dictating the exact restart sequence."
  }
});
