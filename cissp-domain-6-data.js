/* ============================================================
   CISSP Domain 6 — Layout 1 hover details
   Two globals consumed by cissp-domain-6.js:
     - AC_FIGS    : named inline-SVG infographics (red/black theme)
     - AC_DETAILS : box label (or data-ac-key) ->
                    { t: title, d: description, x: example,
                      f: optional figure name }
   A box is matched by its trimmed text (or its data-ac-key).
   Boxes whose detail has an `f` show that infographic in the
   tooltip and get a small red dot.
   ============================================================ */

/* ---------- infographics ---------- */
window.AC_FIGS = window.AC_FIGS || {};
Object.assign(window.AC_FIGS, {
  vv: `
    <svg viewBox="0 0 330 120" class="fig" role="img" aria-label="Verification versus validation">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Verification vs. Validation</text>
      <rect x="14" y="28" width="142" height="74" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="85" y="48" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">VERIFICATION</text>
      <text x="85" y="66" text-anchor="middle" fill="#f5f5f5" font-size="9">Built it right?</text>
      <text x="85" y="82" text-anchor="middle" fill="#a6a6a6" font-size="8">Meets the spec</text>
      <text x="85" y="94" text-anchor="middle" fill="#a6a6a6" font-size="8">(internal check)</text>
      <rect x="174" y="28" width="142" height="74" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="245" y="48" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">VALIDATION</text>
      <text x="245" y="66" text-anchor="middle" fill="#f5f5f5" font-size="9">Built the right thing?</text>
      <text x="245" y="82" text-anchor="middle" fill="#a6a6a6" font-size="8">Meets real needs</text>
      <text x="245" y="94" text-anchor="middle" fill="#a6a6a6" font-size="8">(customer view)</text>
    </svg>`,

  soc: `
    <svg viewBox="0 0 330 140" class="fig" role="img" aria-label="SOC report family">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">SOC Report Family</text>
      <rect x="12" y="24" width="100" height="104" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="62" y="44" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">SOC 1</text>
      <text x="62" y="64" text-anchor="middle" fill="#f5f5f5" font-size="8">Financial</text>
      <text x="62" y="76" text-anchor="middle" fill="#f5f5f5" font-size="8">reporting</text>
      <text x="62" y="98" text-anchor="middle" fill="#a6a6a6" font-size="8">Restricted</text>
      <text x="62" y="110" text-anchor="middle" fill="#a6a6a6" font-size="8">audience</text>
      <rect x="116" y="24" width="100" height="104" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="166" y="44" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">SOC 2</text>
      <text x="166" y="64" text-anchor="middle" fill="#f5f5f5" font-size="8">Security &amp;</text>
      <text x="166" y="76" text-anchor="middle" fill="#f5f5f5" font-size="8">trust controls</text>
      <text x="166" y="98" text-anchor="middle" fill="#a6a6a6" font-size="8">Confidential /</text>
      <text x="166" y="110" text-anchor="middle" fill="#a6a6a6" font-size="8">NDA</text>
      <rect x="220" y="24" width="100" height="104" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="270" y="44" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">SOC 3</text>
      <text x="270" y="64" text-anchor="middle" fill="#f5f5f5" font-size="8">Same as SOC 2</text>
      <text x="270" y="76" text-anchor="middle" fill="#f5f5f5" font-size="8">— high level</text>
      <text x="270" y="98" text-anchor="middle" fill="#a6a6a6" font-size="8">Public /</text>
      <text x="270" y="110" text-anchor="middle" fill="#a6a6a6" font-size="8">marketing</text>
    </svg>`,

  type12: `
    <svg viewBox="0 0 330 110" class="fig" role="img" aria-label="Type 1 versus Type 2 attestation">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Type 1 vs. Type 2</text>
      <rect x="14" y="28" width="142" height="68" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="85" y="48" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">TYPE 1</text>
      <text x="85" y="66" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Design at a</text>
      <text x="85" y="78" text-anchor="middle" fill="#f5f5f5" font-size="8.5">point in time</text>
      <text x="85" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">"snapshot"</text>
      <rect x="174" y="28" width="142" height="68" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="245" y="48" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">TYPE 2</text>
      <text x="245" y="66" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Operating effectiveness</text>
      <text x="245" y="78" text-anchor="middle" fill="#f5f5f5" font-size="8.5">over 6–12 months</text>
      <text x="245" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">"video"</text>
    </svg>`
});

/* ---------- box details ---------- */
window.AC_DETAILS = window.AC_DETAILS || {};
Object.assign(window.AC_DETAILS, {
  "Security Assessment and Testing": {
    t: "Domain 6 — Security Assessment & Testing",
    d: "The proof-of-work domain (12% of the exam). After you design and build controls in Domains 1–5, Domain 6 asks: do they actually work? You design assessment, test and audit strategies, run the tests, collect process data, analyse results, and facilitate audits — turning opinion into evidence.",
    x: "An organisation believes its firewall blocks all inbound RDP. Domain 6 is the discipline that proves it with a scan and a documented result, instead of trusting the assumption."
  },

  /* ----- Validation / Verification / Rigour ----- */
  "Validation": {
    t: "Validation",
    d: "Confirms you built the right thing — that the system actually meets the real-world needs and requirements of the customer or mission. Validation looks outward to the intended use.",
    x: "A backup system restores files correctly (verification) but takes 3 days — too slow to meet the 4-hour RTO the business needs. It passes verification but fails validation.",
    f: "vv"
  },
  "Verification": {
    t: "Verification",
    d: "Confirms you built the thing right — that the system conforms to its specification and design documents. Verification looks inward at whether the product matches what was specified.",
    x: "Checking that an encryption module uses AES-256 exactly as the design spec demanded, regardless of whether AES-256 was the right business choice.",
    f: "vv"
  },
  "Rigour": {
    t: "Rigour",
    d: "The depth, thoroughness and discipline applied to testing. High-rigour testing is exhaustive and formally documented; low-rigour testing is a quick sanity check. Rigour should scale with the risk and criticality of the asset being tested.",
    x: "A crown-jewel payment database gets a deep, fully-documented penetration test (high rigour); an internal wiki gets a quick automated scan (low rigour)."
  },

  /* ----- Testing a System (levels) ----- */
  "Testing a System": {
    t: "Testing a System — Levels",
    d: "Software is tested at progressively larger scopes: a single unit, the interfaces between units, integrated groups, then the whole system. Bugs are cheapest to fix at the smallest level, so testing climbs the ladder.",
    x: "A login feature is unit-tested (password hash function), interface-tested (API contract), integration-tested (login + session service), then system-tested end-to-end in a browser."
  },
  "Unit": {
    t: "Unit Testing",
    d: "Tests the smallest individual component of code — a single function, method or module — in isolation. Usually written and run by developers, often automated, and the first line of defence against logic errors.",
    x: "Testing a calculateTax() function with several inputs to confirm it returns the correct figure for each, before it is wired into anything else."
  },
  "Interface": {
    t: "Interface Testing",
    d: "Tests the connection points where separate components, systems or APIs exchange data — confirming the contract (formats, parameters, error handling) between them holds. Catches mismatched assumptions between teams.",
    x: "Verifying that the web front-end sends the payment API exactly the JSON fields it expects, and handles a timeout response gracefully."
  },
  "Integration": {
    t: "Integration Testing",
    d: "Tests several units working together as a group, to find defects that only appear when components interact — even if each unit passed on its own.",
    x: "The login module and the session-management module each pass unit tests, but together they fail to expire sessions — only integration testing reveals it."
  },
  "System": {
    t: "System Testing",
    d: "Tests the complete, fully integrated system against its requirements — functionality, performance, and security as a whole. The broadest level before user acceptance.",
    x: "Running a full end-to-end purchase journey (browse → cart → pay → receipt) on the assembled e-commerce platform under realistic load."
  },

  /* ----- Testing Techniques (Layout 1, by text) ----- */
  "Testing Techniques": {
    t: "Testing Techniques",
    d: "The full toolbox for examining a system, grouped by how you test: the methods/tools used (manual vs automated), whether code is running (static vs dynamic), how much code access you have (white vs black), the specific design techniques, efficiency monitoring, and operational checks.",
    x: "A mature secure-SDLC blends static code analysis, dynamic fuzzing, manual code review, and regression testing — each technique catches a class of defect the others miss."
  },
  "Methods & Tools": {
    t: "Methods & Tools",
    d: "Whether the testing is performed by a human (manual) or by software (automated). Most real programmes blend both — automation for breadth and speed, humans for judgement and business logic.",
    x: "An automated scanner flags 400 findings overnight; a human analyst then manually reviews the top 20 to weed out false positives."
  },
  "Manual": {
    t: "Manual Testing",
    d: "A human performs the test using judgement, creativity and business context. Slower and less repeatable, but catches logic flaws, chained attacks and context-specific issues that tools miss.",
    x: "A tester notices that changing a hidden order_id in the URL exposes another customer's invoice — a business-logic flaw (IDOR) a scanner would never flag."
  },
  "Automated": {
    t: "Automated Testing",
    d: "Software performs the test repeatedly, quickly and consistently across large scopes. Excellent for breadth and regression, but produces false positives/negatives and cannot reason about business context.",
    x: "A vulnerability scanner checks 5,000 hosts for missing patches every night — work no human could do manually at that scale."
  },
  "Runtime": {
    t: "Runtime — Static vs Dynamic",
    d: "Whether the code is executing during the test. Static analysis examines code/artifacts at rest; dynamic analysis observes the system while it runs. The two are complementary.",
    x: "Static analysis spots a SQL string built by concatenation; dynamic analysis confirms the injection actually fires when the app runs."
  },
  "Static": {
    t: "Static Testing (SAST)",
    d: "Examines source code, byte-code or binaries without executing them. Finds insecure coding patterns early and cheaply, but can't see runtime/environment issues. Best done with white-box access.",
    x: "A SAST tool reads the codebase and flags a hard-coded AWS key and an unsanitised input passed to a shell command — before the app is ever deployed."
  },
  "Dynamic": {
    t: "Dynamic Testing (DAST)",
    d: "Examines the system while it is running, by sending inputs and observing behaviour. Finds runtime, configuration and environment flaws a static review can't see — but only on the paths actually exercised.",
    x: "A DAST tool crawls a live web app, injects payloads into every form, and detects a reflected cross-site scripting vulnerability in the search box."
  },
  "Fuzz": {
    t: "Fuzz Testing (Fuzzing)",
    d: "A dynamic technique that bombards a target with large volumes of random, malformed or unexpected input to trigger crashes, hangs or memory-safety bugs that reveal vulnerabilities. Two flavours: mutation and generation.",
    x: "Feeding thousands of corrupted image files to a photo viewer until one malformed header causes a crash, exposing a buffer overflow."
  },
  "Mutation": {
    t: "Mutation Fuzzing (Dumb Fuzzing)",
    d: "Takes known-good sample inputs and randomly mutates (flips, deletes, duplicates) parts of them. Quick to set up because it needs no knowledge of the input format, but tends to produce many invalid inputs.",
    x: "Taking a valid PDF, randomly flipping bytes throughout it, and feeding the mutated copies to the parser to see what breaks."
  },
  "Generation": {
    t: "Generation Fuzzing (Intelligent Fuzzing)",
    d: "Builds test inputs from scratch based on a model or specification of the expected format (the protocol/grammar). More effort to create, but produces structurally valid inputs that reach deeper code paths.",
    x: "A fuzzer that understands the HTTP spec generates well-formed but abusive requests (huge headers, edge-case methods) to probe a web server."
  },
  "Access to Code": {
    t: "Access to Code — White vs Black",
    d: "How much internal knowledge (source code, architecture, credentials) the tester is given. More access = deeper, faster testing; less access = a more realistic outsider simulation.",
    x: "A white-box reviewer reads the source to find a logic flaw in minutes; a black-box tester must discover the same flaw blindly from the outside."
  },
  "White": {
    t: "White-Box Testing",
    d: "The tester has full knowledge of the internals — source code, design, credentials, architecture. Enables the deepest, most efficient coverage, ideal for code review and logic-flaw hunting, but does not simulate an uninformed attacker.",
    x: "Auditors are handed the repository and admin credentials, so they can trace every code path and configuration directly."
  },
  "Black": {
    t: "Black-Box Testing",
    d: "The tester has zero internal knowledge and probes the system entirely from the outside, exactly as an external attacker would. Most realistic external simulation, but slowest and may miss internal paths.",
    x: "A tester is given only a public URL and must discover the technology stack, endpoints and flaws with no documentation or access."
  },
  "Techniques": {
    t: "Design-Based Test Techniques",
    d: "Structured ways of choosing test cases: positive (valid input), negative (invalid input), misuse (attacker behaviour), and formal coverage methods — decision tables, state analysis, boundary values, and equivalence partitioning.",
    x: "Instead of testing endless arbitrary values, a tester uses boundary and equivalence techniques to pick the handful of inputs most likely to expose defects."
  },
  "Positive": {
    t: "Positive Testing",
    d: "Confirms the system does what it should when given valid, expected input — the 'happy path'. Verifies correct functionality.",
    x: "Entering a correct username and password and confirming the user is logged in successfully."
  },
  "Negative": {
    t: "Negative Testing",
    d: "Confirms the system gracefully rejects invalid, unexpected or malicious input without crashing, leaking data, or behaving insecurely. Security testing leans heavily on negative cases.",
    x: "Entering letters into a numeric 'amount' field and confirming the app shows a clean validation error instead of a server crash."
  },
  "Misuse": {
    t: "Misuse-Case Testing",
    d: "The inverse of a use case: you model how a hostile actor would deliberately abuse a feature, then test those attacker goals. Bridges functional testing and threat modelling.",
    x: "Where a use case says 'customer applies a discount code', the misuse case asks 'attacker brute-forces or reuses discount codes' — and you test that path."
  },
  "Decision table analysis": {
    t: "Decision Table Analysis",
    d: "A technique that maps every combination of input conditions to the expected action, ensuring complex business rules are tested for all rule combinations rather than a few.",
    x: "A loan-approval feature with 3 yes/no conditions has 8 combinations; a decision table guarantees a test case for each outcome."
  },
  "State-based analysis": {
    t: "State-Based Analysis",
    d: "Tests a system by modelling its states and the transitions between them, verifying that only valid transitions are allowed and that the system behaves correctly in each state.",
    x: "An ATM moves through Idle → Card Inserted → PIN Entered → Authorised; state testing confirms you can't reach 'Dispense Cash' without first passing 'Authorised'."
  },
  "Boundary Value Analysis": {
    t: "Boundary Value Analysis",
    d: "Tests the values at the edges of allowed input ranges — the minimum, maximum, and just inside/outside each boundary — because off-by-one and edge errors cluster there.",
    x: "For a field accepting 1–100, you test 0, 1, 100 and 101 — the boundaries — rather than random middle values like 47."
  },
  "Equivalence Partitioning": {
    t: "Equivalence Partitioning",
    d: "Divides the input space into groups (partitions) that should be processed identically, then tests just one representative value from each — drastically cutting test cases without losing coverage.",
    x: "For ages 0–17 (minor), 18–64 (adult), 65+ (senior), you test one value from each band (e.g. 10, 30, 70) instead of every age."
  },
  "Efficiency": {
    t: "Efficiency / Performance Monitoring",
    d: "Tests that observe how the system performs for users — either by watching real traffic (RUM) or by running scripted probes (synthetic). Confirms availability and responsiveness, an often-overlooked part of security (availability is in the CIA triad).",
    x: "A bank watches both real customer load times and a scripted hourly login from three regions to catch outages before customers complain."
  },
  "Real User Monitoring": {
    t: "Real User Monitoring (RUM)",
    d: "Passive monitoring that records the experience of actual live users — real page loads, transactions, and errors. Reflects true conditions but only covers paths users happen to take, and only after problems occur.",
    x: "Analytics on a website show that real users in Asia experience 4-second checkout delays during peak hours."
  },
  "Synthetic Performance Monitoring": {
    t: "Synthetic Performance Monitoring",
    d: "Active monitoring that runs pre-scripted, simulated transactions on a schedule, independent of real traffic. Provides consistent baselines and catches problems even at 3 a.m. when no real users are online. (Same idea as synthetic transactions.)",
    x: "A scripted bot logs in and completes a test purchase every 5 minutes from multiple regions, alerting if any step slows or fails."
  },
  "Operational": {
    t: "Operational Testing",
    d: "Testing performed to keep a running system healthy over its life — chiefly regression testing after every change, plus ongoing checks that production behaves as expected.",
    x: "After every code release, the team reruns the operational test suite to confirm nothing that previously worked has broken."
  },
  "Regression Testing": {
    t: "Regression Testing",
    d: "Re-running previously passed tests after a change (patch, fix, new feature) to confirm the change did not break existing functionality — or silently reintroduce a security flaw that was fixed before.",
    x: "A patch fixes a payment bug; regression testing confirms it didn't accidentally re-open a login vulnerability that was closed last month."
  },

  /* ----- Testers / Assessors ----- */
  "Testers / Assessors": {
    t: "Testers / Assessors",
    d: "Who performs the assessment shapes its cost, objectivity and depth. Options run from internal staff, to external parties under contract, to independent third-party firms — plus the governance roles that commission and consume the results.",
    x: "A SaaS vendor runs internal scans weekly, lets enterprise customers (external) audit annually, and hires a third-party firm for the SOC 2 attestation."
  },
  "Internal": {
    t: "Internal Assessment",
    d: "Performed by the organisation's own staff. Strength: deep familiarity with systems and history. Weakness: blind spots, confirmation bias, and possibly less exposure to the newest external attack techniques.",
    x: "The in-house security team runs its own quarterly vulnerability scans and self-assessment against the policy baseline."
  },
  "External": {
    t: "External Assessment",
    d: "Triggered by a contract that includes security obligations: the contracting party has the right to audit the contractor to verify those obligations. Scope is usually defined by the contract.",
    x: "A bank that outsources card processing exercises its contractual right to audit the processor's security controls each year."
  },
  "Third-Party": {
    t: "Third-Party Assessment",
    d: "An independent audit firm assesses the organisation. Brings the broadest cross-industry experience and genuine objectivity, but costs more and must learn your environment from scratch. Underpins SOC reports.",
    x: "A cloud provider hires an independent CPA firm to produce a SOC 2 Type II report its customers can trust."
  },
  "SOC 1": {
    t: "SOC 1 Report",
    d: "A System and Organization Controls report focused on controls relevant to a customer's financial reporting (ICFR). Used when the service provider could affect the client's financial statements. Restricted distribution.",
    x: "A payroll-processing vendor provides a SOC 1 so its clients' auditors can rely on its controls during the clients' financial audits.",
    f: "soc"
  },
  "SOC 2": {
    t: "SOC 2 Report",
    d: "Reports on controls relevant to the five Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality and Privacy. The key security-assurance report for cloud/SaaS providers. Detailed and confidential — shared under NDA.",
    x: "Before signing, an enterprise asks its SaaS vendor for the SOC 2 Type II report to verify the vendor's security controls operated effectively all year.",
    f: "soc"
  },
  "SOC 3": {
    t: "SOC 3 Report",
    d: "Covers the same Trust Services Criteria as SOC 2 but as a short, high-level summary with no sensitive detail — designed for public distribution and marketing.",
    x: "A cloud provider publishes its SOC 3 seal on its public website so prospects can see it meets the trust criteria, without revealing control specifics.",
    f: "soc"
  },
  "Type 1": {
    t: "Type 1 Attestation",
    d: "Assesses whether controls are suitably designed and in place at a single point in time — a snapshot. Faster and cheaper, but proves nothing about whether the controls actually worked over time.",
    x: "A SOC 2 Type 1 confirms that, on 30 June, the vendor had MFA and logging designed and implemented.",
    f: "type12"
  },
  "Type 2": {
    t: "Type 2 Attestation",
    d: "Assesses whether controls were not only designed correctly but operated effectively over a review period (typically 6–12 months). The stronger, more trusted assurance — customers almost always prefer it.",
    x: "A SOC 2 Type 2 confirms the vendor's MFA and logging controls worked consistently across the whole year, not just on one day.",
    f: "type12"
  },
  "Roles": {
    t: "Governance Roles",
    d: "The people who commission, oversee and act on assessment results. Audits exist to give these roles the assurance they need to discharge their responsibilities and govern risk.",
    x: "Auditors report findings up through the audit committee to executive management, who own the decision to accept or remediate the risk."
  },
  "Executive Management": {
    t: "Executive Management",
    d: "Senior leadership (CEO/CISO/CIO) who own overall risk and are ultimately accountable for the security programme. They set risk appetite and make accept/remediate decisions on findings.",
    x: "The CISO reviews the penetration-test report and decides to fund immediate remediation of the critical findings."
  },
  "Audit Committee": {
    t: "Audit Committee",
    d: "A board-level body that provides independent oversight of the audit function and internal controls, ensuring auditors can report freely without management interference.",
    x: "The internal audit team reports its findings directly to the board's audit committee to preserve independence from the managers being audited."
  },
  "Security Officer": {
    t: "Security Officer",
    d: "The role responsible for implementing and maintaining the security programme and controls that the assessments are testing. Often the owner of remediation actions.",
    x: "After an audit flags weak password policy, the security officer is tasked with rolling out the corrected standard."
  },
  "Compliance Manager": {
    t: "Compliance Manager",
    d: "Ensures the organisation meets its legal, regulatory and contractual obligations, and coordinates the evidence and audits that demonstrate compliance.",
    x: "The compliance manager assembles the evidence package and schedules the assessors for the annual PCI-DSS assessment."
  },
  "Internal Auditors": {
    t: "Internal Auditors",
    d: "Employees who independently evaluate the organisation's own controls and report to the audit committee. Independent of the functions they audit, but still inside the company.",
    x: "The internal audit team tests whether access-review controls are being followed across departments and reports gaps to the audit committee."
  },
  "External Auditors": {
    t: "External Auditors",
    d: "Independent auditors from outside the organisation who provide objective assurance — to regulators, customers or partners — that controls meet a defined standard.",
    x: "An external audit firm performs the annual ISO 27001 certification audit and issues the certificate."
  },

  /* ----- Metrics ----- */
  "Metrics": {
    t: "Security Metrics",
    d: "Quantitative measures that show whether the security programme is improving, where the risk is, and whether controls are effective. Good metrics are objective, repeatable and tied to business goals — split into KPIs (performance) and KRIs (risk).",
    x: "Tracking mean-time-to-patch month over month turns a vague 'we patch quickly' claim into an evidence-backed trend leadership can act on."
  },
  "Focus": {
    t: "Metric Focus",
    d: "What a metric is meant to illuminate — you choose metrics deliberately around the question you need answered (control effectiveness, exposure, programme maturity), rather than measuring whatever is easy to count.",
    x: "To answer 'are we closing vulnerabilities fast enough?', the team focuses on remediation-time metrics rather than raw vulnerability counts."
  },
  "KPIs": {
    t: "Key Performance Indicators (KPIs)",
    d: "Backward-looking metrics that measure how well the security programme has performed against its goals. They tell you whether what you did was effective.",
    x: "Percentage of systems patched within SLA, number of incidents resolved within target time, % of staff who completed awareness training."
  },
  "KRIs": {
    t: "Key Risk Indicators (KRIs)",
    d: "Forward-looking metrics that signal rising risk and exposure before an incident occurs — an early-warning system. KPIs look back at performance; KRIs look ahead at risk.",
    x: "A climbing number of unpatched critical vulnerabilities or failed login spikes is a KRI warning that a breach is becoming more likely."
  }
});
/* ============================================================
   CISSP Domain 6 — Layout 2 hover details (Identifying Vulnerabilities)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-6-data.js. Consumed by cissp-domain-6.js.
   Some boxes are matched by data-ac-key (pentest-techniques,
   perspective-internal, perspective-external) to avoid clashing
   with the same words used in Layout 1.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  vapt: `
    <svg viewBox="0 0 330 110" class="fig" role="img" aria-label="Vulnerability assessment versus penetration test">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">VA vs. Penetration Test</text>
      <rect x="14" y="28" width="142" height="68" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="85" y="48" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">VULN ASSESSMENT</text>
      <text x="85" y="66" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Find &amp; rank</text>
      <text x="85" y="78" text-anchor="middle" fill="#f5f5f5" font-size="8.5">weaknesses</text>
      <text x="85" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">does NOT exploit</text>
      <rect x="174" y="28" width="142" height="68" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="245" y="48" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">PENETRATION TEST</text>
      <text x="245" y="66" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Actively exploits</text>
      <text x="245" y="78" text-anchor="middle" fill="#f5f5f5" font-size="8.5">to prove impact</text>
      <text x="245" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">owner authorised</text>
    </svg>`,

  fpfn: `
    <svg viewBox="0 0 330 130" class="fig" role="img" aria-label="False positive versus false negative">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">False Positive vs. False Negative</text>
      <rect x="14" y="26" width="142" height="92" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="85" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">FALSE POSITIVE</text>
      <text x="85" y="66" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Alarm — but</text>
      <text x="85" y="78" text-anchor="middle" fill="#f5f5f5" font-size="8.5">nothing is wrong</text>
      <text x="85" y="100" text-anchor="middle" fill="#a6a6a6" font-size="8">Wastes effort</text>
      <rect x="174" y="26" width="142" height="92" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="245" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">FALSE NEGATIVE</text>
      <text x="245" y="66" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Silence — but a</text>
      <text x="245" y="78" text-anchor="middle" fill="#f5f5f5" font-size="8.5">real flaw exists</text>
      <text x="245" y="100" text-anchor="middle" fill="#a6a6a6" font-size="8">Dangerous — more so</text>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  "Identifying Vulnerabilities": {
    t: "Identifying Vulnerabilities",
    d: "How weaknesses are found, classified and understood — from broad vulnerability assessment and deep penetration testing, through the pen-test process and the techniques that frame it, to scan types and the standards (CVE, CVSS, SCAP) used to interpret results.",
    x: "A quarterly programme runs authenticated scans for breadth, then an annual pen test for depth, scoring every finding with CVSS to decide what to fix first."
  },

  "Vulnerability Assessment": {
    t: "Vulnerability Assessment",
    d: "A systematic examination that identifies, defines and ranks weaknesses in a system — but does NOT exploit them. The output is a prioritised list of vulnerabilities, usually scanner-driven and validated by an analyst.",
    x: "A monthly authenticated scan of all servers produces a ranked report: 12 critical, 40 high, 200 medium — for the patching team to work through.",
    f: "vapt"
  },
  "Penetration Testing": {
    t: "Penetration Testing",
    d: "A simulated attack, authorised by the system owner, that actively exploits vulnerabilities — just like a real attacker — to demonstrate genuine business impact. Goes beyond a VA by proving what an attacker could actually achieve.",
    x: "A tester chains a weak password and a misconfigured share to reach the domain controller, proving the 'medium' findings combine into a full compromise.",
    f: "vapt"
  },

  /* ----- Process ----- */
  "Process": {
    t: "Penetration-Test Process",
    d: "The repeatable lifecycle of a pen test: Reconnaissance → Enumeration → Vulnerability Analysis → Execution → Document Findings. Each phase feeds the next, ending in a report that turns exploits into business risk.",
    x: "After recon and enumeration map the attack surface, the tester analyses for exploitable flaws, executes the exploit, then documents everything for the client."
  },
  "Reconnaissance": {
    t: "Reconnaissance",
    d: "Gathering intelligence about the target. Passive recon uses public sources (OSINT, Shodan, social media, DNS) without touching the target; active recon directly probes it. The foundation the whole test is built on.",
    x: "Before touching the network, the tester finds employee emails on LinkedIn and exposed subdomains via certificate transparency logs."
  },
  "Enumeration": {
    t: "Enumeration",
    d: "Active probing to build a precise inventory of the attack surface — open ports, running services, software versions and OS fingerprints. Turns a vague target into a concrete map of what can be attacked.",
    x: "An nmap scan reveals port 445 open running an outdated SMBv1 service on a Windows Server 2012 host — a specific, targetable detail."
  },
  "Vulnerability Analysis": {
    t: "Vulnerability Analysis",
    d: "Matching the enumerated services and versions against known weaknesses to identify exploitable attack paths. Overlaps with vulnerability assessment, but here the goal is finding a way in, not just a ranked list.",
    x: "Knowing the host runs SMBv1, the tester confirms it's vulnerable to EternalBlue (MS17-010) and plans the exploit."
  },
  "Execution": {
    t: "Execution (Exploitation)",
    d: "Actively exploiting confirmed vulnerabilities to demonstrate impact — gaining a shell, escalating privileges, moving laterally, or reaching sensitive data. Credential attacks like Pass-the-Hash often appear here.",
    x: "The tester launches the EternalBlue exploit, gets SYSTEM access, dumps password hashes and pivots to the file server."
  },
  "Document Findings": {
    t: "Document Findings",
    d: "Producing a professional report that translates technical exploits into business risk language, with evidence, severity ratings and prioritised remediation guidance. The deliverable the client actually pays for.",
    x: "The final report shows, with screenshots, how a single unpatched host led to full domain compromise — and lists the fixes in priority order."
  },

  /* ----- Testing Techniques (pen-test) — data-ac-key ----- */
  "pentest-techniques": {
    t: "Pen-Test Framing Techniques",
    d: "Three independent dimensions that frame how a test is run: the perspective (where the tester sits — internal vs external), the approach (whether staff are warned — blind vs double-blind), and the knowledge level given (zero/partial/full).",
    x: "A single engagement might be external (perspective), double-blind (approach), and zero-knowledge (knowledge) — the most realistic simulation of a surprise outside attack."
  },
  "Perspective": {
    t: "Perspective",
    d: "Where the tester is positioned relative to the network boundary — outside it (external) or already inside it (internal). Determines which threats the test simulates.",
    x: "An external test mimics an internet attacker; an internal test mimics a malicious employee or an attacker who already breached the perimeter."
  },
  "perspective-internal": {
    t: "Internal Perspective",
    d: "The test is launched from inside the network perimeter, simulating a malicious insider or an attacker who has already gained a foothold. Reveals lateral-movement and east-west exposure that perimeter defences hide.",
    x: "The tester is plugged into an office LAN port and sees how far an insider could move toward the crown-jewel database."
  },
  "perspective-external": {
    t: "External Perspective",
    d: "The test is launched from outside the perimeter (the internet), simulating a typical external attacker probing internet-facing assets. Tests the perimeter and exposed services.",
    x: "The tester works from their own office over the internet, attacking only the public IP ranges and exposed web apps."
  },
  "Approach": {
    t: "Approach (Awareness)",
    d: "Whether the target's own security team knows the test is happening, which determines whether you're also testing their detection-and-response capability.",
    x: "If the SOC is told in advance, you test controls; if they aren't, you also test whether they'd actually catch a real attack."
  },
  "Blind": {
    t: "Blind Test",
    d: "The tester works only from publicly available information (limited knowledge of the target), while the target's security staff ARE notified that a test is occurring. Tests technical controls with the defenders aware.",
    x: "The pen-test firm is given only the company name and starts from scratch, but the SOC has been told to expect activity this week."
  },
  "Double-blind": {
    t: "Double-Blind Test (Stealth)",
    d: "The tester uses only public information AND the target's security staff are NOT notified. This additionally tests the team's real-world detection and incident response. Also called a zero-knowledge or surprise assessment.",
    x: "Leadership commissions a covert test; the SOC has no idea it's a drill, so their genuine detection and response is measured."
  },
  "Knowledge": {
    t: "Knowledge Level",
    d: "How much internal information the tester is given before starting — zero (black box), partial (gray box), or full (white box). Trades realism against depth and speed.",
    x: "Giving the tester nothing maximises realism; giving them architecture diagrams and credentials maximises depth and efficiency."
  },
  "Zero (black)": {
    t: "Zero Knowledge (Black Box)",
    d: "The tester is given no internal information and must discover everything from the outside — the most realistic external-attacker simulation, but the slowest and most likely to miss internal paths.",
    x: "The tester receives only a domain name and must enumerate, map and attack with no documentation or credentials."
  },
  "Partial (gray)": {
    t: "Partial Knowledge (Gray Box)",
    d: "The tester is given some internal information — perhaps user-level credentials or basic architecture — simulating an insider or a well-researched attacker. The practical balance of realism and efficiency.",
    x: "The tester gets a standard employee login and is asked to see how much privilege they can escalate from there."
  },
  "Full (white)": {
    t: "Full Knowledge (White Box)",
    d: "The tester is given complete internal information — source, architecture, admin credentials, network diagrams. Enables the deepest, fastest, most thorough testing, at the cost of realism.",
    x: "The tester is handed the full network diagram and admin access so they can audit every segment in the time available."
  },

  /* ----- Types of Scans ----- */
  "Types of Scans": {
    t: "Types of Scans",
    d: "Vulnerability scans run with or without valid login credentials. Credentialed scans see inside the host for accurate results; uncredentialed scans see only what an outsider sees, with more guesswork.",
    x: "An uncredentialed scan guesses a server is missing a patch from its banner; a credentialed scan logs in and confirms the exact patch level."
  },
  "Credentialed / Authenticated": {
    t: "Credentialed (Authenticated) Scan",
    d: "The scanner is given valid login credentials, so it can inspect the host from the inside — installed software, exact patch levels, configuration. Far more accurate, with fewer false positives, and reflects the insider/post-compromise view.",
    x: "A scanner logs into each server with a read-only service account and reads the actual installed-patch registry to confirm missing updates precisely."
  },
  "Uncredentialed / Unauthenticated": {
    t: "Uncredentialed (Unauthenticated) Scan",
    d: "The scanner has no credentials and probes only from the outside — like an external attacker. Useful for seeing exposure as an outsider, but produces more false positives because it must infer rather than verify.",
    x: "A scanner with no login inspects open ports and service banners to guess vulnerabilities, exactly as an internet attacker would."
  },

  "Banner grabbing & Fingerprinting": {
    t: "Banner Grabbing & Fingerprinting",
    d: "Techniques to identify a service or OS by the information it volunteers. Banner grabbing reads the text a service returns on connect (version strings); fingerprinting infers the OS/service from subtle behavioural traits. Both feed vulnerability analysis.",
    x: "Connecting to port 80 returns 'Apache/2.4.49' — instantly telling the tester which known Apache CVEs to try."
  },

  /* ----- Interpreting & understanding results ----- */
  "Interpreting & understanding results": {
    t: "Interpreting Results",
    d: "Raw findings are meaningless without common standards. CVE gives every flaw a unique name, and CVSS gives it a severity score 0–10 — together they let teams communicate and prioritise consistently.",
    x: "A finding labelled 'CVE-2021-44228, CVSS 10.0' tells every team worldwide exactly which flaw it is and that it needs emergency action."
  },
  "CVE": {
    t: "CVE — Common Vulnerabilities & Exposures",
    d: "The industry naming standard: every publicly known vulnerability gets one unique CVE identifier, so different vendors and tools all refer to the same flaw by the same name. It names the flaw — it does not score it.",
    x: "The Log4j flaw is universally called CVE-2021-44228, eliminating confusion between vendors who might otherwise each name it differently."
  },
  "CVSS": {
    t: "CVSS — Common Vulnerability Scoring System",
    d: "Assigns each vulnerability a severity score from 0.0 to 10.0 based on factors like attack vector, complexity, privileges required and CIA impact. Drives prioritisation: 9.0–10.0 critical, down to 0.1–3.9 low.",
    x: "Two findings: CVSS 9.8 (remote, no auth, full compromise) is patched tonight; CVSS 3.1 (local, low impact) waits for the next maintenance window."
  },
  "SCAP": {
    t: "SCAP — Security Content Automation Protocol",
    d: "A NIST suite of open standards that lets security tools automate vulnerability and configuration checking in a consistent, machine-readable way. Bundles components like OVAL (test definitions) and XCCDF (checklists) so different tools speak the same language.",
    x: "A SCAP-validated scanner reads a standard XCCDF benchmark and automatically checks every host against the agreed hardening baseline."
  },

  "False positive vs. False negative": {
    t: "False Positive vs. False Negative",
    d: "Two scanner error types. A false positive flags a problem that isn't real — wastes remediation effort. A false negative misses a real problem — creates dangerous false confidence and is generally the more harmful of the two. Both demand analyst validation.",
    x: "A scanner reports a patched server as vulnerable (false positive); worse, it silently misses an unpatched one (false negative) that an attacker later exploits.",
    f: "fpfn"
  }
});
/* ============================================================
   CISSP Domain 6 — Layout 3 hover details (Log Review & Analysis)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-6-data.js. Consumed by cissp-domain-6.js.
   The SIEM "Generation" box uses data-ac-key="log-generation"
   to stay distinct from any other "Generation" label.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  siem: `
    <svg viewBox="0 0 330 150" class="fig" role="img" aria-label="SIEM log management lifecycle">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">SIEM Log Lifecycle</text>
      <g font-size="8.5" fill="#f5f5f5">
        <rect x="10" y="26" width="92" height="26" rx="5" fill="#161616" stroke="#d31324"/><text x="56" y="43" text-anchor="middle">1 Generation</text>
        <rect x="119" y="26" width="92" height="26" rx="5" fill="#161616" stroke="#343434"/><text x="165" y="43" text-anchor="middle">2 Transmission</text>
        <rect x="228" y="26" width="92" height="26" rx="5" fill="#161616" stroke="#343434"/><text x="274" y="43" text-anchor="middle">3 Collection</text>
        <rect x="10" y="62" width="92" height="26" rx="5" fill="#161616" stroke="#343434"/><text x="56" y="79" text-anchor="middle">4 Normalize</text>
        <rect x="119" y="62" width="92" height="26" rx="5" fill="#161616" stroke="#d31324"/><text x="165" y="79" text-anchor="middle">5 Analysis</text>
        <rect x="228" y="62" width="92" height="26" rx="5" fill="#161616" stroke="#343434"/><text x="274" y="79" text-anchor="middle">6 Retention</text>
        <rect x="119" y="98" width="92" height="26" rx="5" fill="#161616" stroke="#343434"/><text x="165" y="115" text-anchor="middle">7 Disposal</text>
      </g>
      <text x="165" y="142" text-anchor="middle" fill="#a6a6a6" font-size="8">SIEM aggregates &amp; correlates every step</text>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  "Log Review & Analysis": {
    t: "Log Review & Analysis",
    d: "How raw log data becomes security insight: deciding what to watch for, running logs through the SIEM-driven management lifecycle (generate → transmit → collect → normalize → analyse → retain → dispose), and feeding continuous monitoring. Logs are the primary evidence source for detection and investigation.",
    x: "A failed-login spike on one account, correlated across firewall, VPN and AD logs in the SIEM, reveals a password-spray attack in progress."
  },

  /* ----- Monitor for ----- */
  "Monitor for": {
    t: "What to Monitor For",
    d: "Logs are reviewed to catch three broad categories of trouble: operational errors, unauthorised modification, and active breaches. Defining what 'bad' looks like up front is what makes log review actionable rather than noise.",
    x: "Alert rules watch for repeated application errors, changes to critical config files, and known indicators of compromise simultaneously."
  },
  "Errors": {
    t: "Errors",
    d: "Operational and application errors logged by systems. Beyond reliability, error patterns are security signals — a flood of errors can indicate an attack, a misconfiguration, or a failing control.",
    x: "A sudden burst of database errors turns out to be a SQL-injection attempt malforming queries against the app."
  },
  "Modification": {
    t: "Modification",
    d: "Unauthorised or unexpected changes to systems, files, configurations or accounts. Monitoring modification is core to integrity — attackers routinely alter configs, create accounts, or tamper with logs themselves.",
    x: "An alert fires when the /etc/sudoers file is modified outside a change window, revealing an attacker granting themselves root."
  },
  "Breaches": {
    t: "Breaches",
    d: "Direct indicators of a successful or attempted intrusion — known attack signatures, data exfiltration patterns, or confirmed indicators of compromise. The highest-priority thing log review exists to surface.",
    x: "Logs show a large outbound transfer to an unknown IP at 3 a.m. from a server that never initiates external connections — a likely exfiltration."
  },

  /* ----- SIEM ----- */
  "Security Information and Event Management (SIEM)": {
    t: "SIEM",
    d: "A platform that centralises logs from across the environment and provides real-time aggregation, normalization, correlation, alerting and retention. The SIEM is what makes enterprise-scale log review possible — and it owns the whole log-management lifecycle.",
    x: "Splunk or Sentinel ingests firewall, endpoint, AD and cloud logs, correlates them, and raises one high-fidelity alert from events that individually looked harmless.",
    f: "siem"
  },
  "log-generation": {
    t: "Generation",
    d: "The first stage: devices and applications create log entries about events. Key design decisions here are what to log (enough detail, not too much), how to control log file size, and ensuring accurate, synchronised timestamps so events can later be correlated.",
    x: "A web server is configured to log every authentication attempt with a synchronised timestamp, source IP and result — the raw material for later analysis."
  },
  "Limiting log file size": {
    t: "Limiting Log File Size",
    d: "Logs grow without bound and can fill storage (a denial-of-service risk) or be expensive to retain. Two common controls bound their size: circular overwrite and clipping levels. The trade-off is always storage cost vs. losing potential evidence.",
    x: "A device keeps only the last 30 days of logs in a fixed-size file, overwriting the oldest entries — saving space but risking loss of older evidence."
  },
  "Circular Overwrite": {
    t: "Circular Overwrite",
    d: "A fixed-size log buffer that, once full, overwrites the oldest entries with new ones (first-in, first-out). Guarantees logging never stops for lack of space, but means old records are silently lost — an attacker can exploit this by flooding logs to push out evidence.",
    x: "A 100 MB security log overwrites week-old entries as new ones arrive; an attacker generates noise to roll the log over and erase their earlier tracks."
  },
  "Clipping Levels": {
    t: "Clipping Levels",
    d: "A threshold that suppresses routine, below-threshold events so only meaningful ones are recorded or alerted on — reducing noise and log volume. Set too high, it can hide a slow attack that stays under the threshold.",
    x: "Only log a security event after 5 failed logins, so single typos don't flood the log — but a careful attacker pacing 4 attempts stays invisible."
  },
  "Time Stamps": {
    t: "Time Stamps",
    d: "Every log entry needs an accurate, consistent timestamp. Without synchronised time across systems, you cannot reliably correlate events or reconstruct an attack timeline — making this foundational to log analysis and forensics.",
    x: "If the firewall and the server clocks differ by 10 minutes, you can't tell which event came first during an incident reconstruction."
  },
  "Consistent": {
    t: "Consistent Time",
    d: "All systems must agree on the time so events from different sources line up correctly. Inconsistent clocks break correlation and can undermine the evidentiary value of logs in court.",
    x: "All servers, firewalls and endpoints are set to UTC so a 12:00:00 event means the same instant everywhere."
  },
  "Network Time Protocol (NTP)": {
    t: "Network Time Protocol (NTP)",
    d: "The protocol used to automatically synchronise clocks across all systems to a common, authoritative time source. NTP is the standard mechanism that makes consistent timestamps — and therefore reliable correlation — possible.",
    x: "All hosts sync to an internal NTP server (chained to an authoritative national time source), keeping every clock within milliseconds."
  },
  "Transmission": {
    t: "Transmission",
    d: "Moving log data from where it's generated to the central collector/SIEM. Logs must be transmitted securely (encrypted, integrity-protected) so they can't be intercepted, altered or dropped in transit — a tampered log is worthless as evidence.",
    x: "Endpoints ship their logs to the SIEM over TLS-encrypted syslog so an attacker on the network can't read or modify them en route."
  },
  "Collection / Aggregation": {
    t: "Collection / Aggregation",
    d: "Gathering logs from many diverse sources into one central repository. Centralisation is what enables cross-source correlation, protects logs from being wiped on a compromised host, and supports retention policy.",
    x: "Logs from 5,000 endpoints, every firewall and all cloud services are aggregated into one SIEM index for unified searching."
  },
  "Normalization": {
    t: "Normalization",
    d: "Converting logs from many different formats into one common structure with consistent field names, so events from different vendors can be compared and correlated. Without normalization, a 'source IP' in ten formats can't be cross-referenced.",
    x: "A Cisco firewall's 'src=' and a Windows event's 'Source Network Address' are both mapped to a single normalized field, source_ip."
  },
  "Analysis": {
    t: "Analysis",
    d: "Examining and correlating the collected, normalized logs to detect threats, anomalies and patterns — through rules, signatures, statistical baselining and increasingly machine learning. This is where logs turn into actionable alerts.",
    x: "The SIEM correlates a VPN login from Russia with a simultaneous office badge-in locally, flagging 'impossible travel' as a likely account compromise."
  },
  "Retention": {
    t: "Retention",
    d: "Keeping logs for a defined period to satisfy investigation needs and legal/regulatory requirements, then no longer. Retention periods are driven by compliance mandates and the need to investigate slow-burning attacks discovered months later.",
    x: "PCI-DSS requires one year of log retention (90 days immediately available), so the SIEM keeps a full year before logs are eligible for disposal."
  },
  "Disposal": {
    t: "Disposal",
    d: "Securely destroying logs once their retention period expires. Disposal must be secure (logs can contain sensitive data) and defensible — done per a documented policy so it isn't seen as evidence destruction or spoliation.",
    x: "After the one-year retention window, logs are cryptographically erased on a fixed schedule documented in the retention policy."
  },

  /* ----- Continuous Monitoring ----- */
  "Continuous Monitoring": {
    t: "Continuous Monitoring",
    d: "Ongoing, near-real-time observation of systems, controls and logs — rather than point-in-time checks — so security posture and emerging threats are tracked continuously. A core NIST RMF concept that keeps assessment from being a once-a-year event.",
    x: "Instead of an annual audit only, dashboards and automated alerts continuously watch control health, flagging a disabled antivirus the moment it happens."
  }
});

/* ===== Child-specific infographics =====================================
   Parents keep their overview figure; every child box below gets its own
   topic-specific diagram, generated with three small builders so the
   visual style stays identical across the site. */
(function () {
  var G = window.AC_FIGS, D = window.AC_DETAILS;
  function set(k, f) { if (D[k]) { D[k].f = f; } }

  /* vertical rows, one highlighted */
  function rows(title, items, hot, note) {
    var rh = 26, top = 24, h = top + items.length * rh + (note ? 16 : 4);
    var s = '<svg viewBox="0 0 330 ' + h + '" class="fig" role="img" aria-label="' + title.replace(/<[^>]*>/g, '') + '">';
    s += '<text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">' + title + '</text>';
    items.forEach(function (it, i) {
      var y = top + i * rh, hl = i === hot;
      s += '<rect x="10" y="' + y + '" width="310" height="' + (rh - 4) + '" rx="4" fill="' + (hl ? '#3a0a0e' : '#161616') + '" stroke="' + (hl ? '#d31324' : '#a0303f') + '"' + (hl ? ' stroke-width="1.6"' : '') + '/>';
      s += '<text x="16" y="' + (y + 15) + '" font-size="7.6" fill="#e0e0e0"><tspan fill="' + (hl ? '#fff' : '#ff9ab0') + '" font-weight="700">' + it[0] + '</tspan>' + (it[1] ? ' &mdash; ' + it[1] : '') + '</text>';
    });
    if (note) { s += '<text x="165" y="' + (h - 5) + '" text-anchor="middle" fill="#a6a6a6" font-size="7">' + note + '</text>'; }
    return s + '</svg>';
  }

  /* 2-4 columns, one highlighted */
  function cols(title, items, hot, note) {
    var n = items.length, gap = 6, w = (310 - gap * (n - 1)) / n;
    var mx = 0; items.forEach(function (c) { if (c.length - 1 > mx) { mx = c.length - 1; } });
    var ch = 26 + mx * 12 + 6, h = 24 + ch + (note ? 17 : 5);
    var s = '<svg viewBox="0 0 330 ' + h + '" class="fig" role="img" aria-label="' + title.replace(/<[^>]*>/g, '') + '">';
    s += '<text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">' + title + '</text>';
    items.forEach(function (c, i) {
      var x = 10 + i * (w + gap), cx = x + w / 2, hl = i === hot;
      s += '<rect x="' + x + '" y="24" width="' + w + '" height="' + ch + '" rx="7" fill="' + (hl ? '#3a0a0e' : '#161616') + '" stroke="' + (hl ? '#d31324' : '#a0303f') + '"' + (hl ? ' stroke-width="1.6"' : '') + '/>';
      s += '<text x="' + cx + '" y="40" text-anchor="middle" font-size="7.8" font-weight="700" fill="' + (hl ? '#fff' : '#ff9ab0') + '">' + c[0] + '</text>';
      for (var j = 1; j < c.length; j++) {
        s += '<text x="' + cx + '" y="' + (40 + j * 12) + '" text-anchor="middle" font-size="6.9" fill="' + (j === c.length - 1 ? '#a6a6a6' : '#e0e0e0') + '">' + c[j] + '</text>';
      }
    });
    if (note) { s += '<text x="165" y="' + (h - 5) + '" text-anchor="middle" fill="#a6a6a6" font-size="7">' + note + '</text>'; }
    return s + '</svg>';
  }

  /* single-concept card */
  function card(title, lines, ex) {
    var h = 34 + lines.length * 13 + (ex ? 26 : 4);
    var s = '<svg viewBox="0 0 330 ' + h + '" class="fig" role="img" aria-label="' + title.replace(/<[^>]*>/g, '') + '">';
    s += '<rect x="10" y="4" width="310" height="2" rx="1" fill="#d31324"/>';
    s += '<text x="165" y="20" text-anchor="middle" fill="#ff9ab0" font-size="10.5" font-weight="700">' + title + '</text>';
    lines.forEach(function (ln, i) {
      s += '<text x="165" y="' + (36 + i * 13) + '" text-anchor="middle" font-size="7.8" fill="#e0e0e0">' + ln + '</text>';
    });
    if (ex) {
      var y = 34 + lines.length * 13;
      s += '<rect x="10" y="' + y + '" width="310" height="20" rx="4" fill="#161616" stroke="#a0303f"/>';
      s += '<text x="165" y="' + (y + 13) + '" text-anchor="middle" font-size="7.2" fill="#ffd27c">' + ex + '</text>';
    }
    return s + '</svg>';
  }

  /* ---- SOC report family: highlighted row ---- */
  var SOC = [
    ["SOC 1", "controls over FINANCIAL reporting (ICFR)"],
    ["SOC 2", "Trust Services Criteria &middot; detailed &middot; shared under NDA"],
    ["SOC 3", "public SUMMARY seal of a SOC 2 &mdash; marketing-safe"]
  ];
  set("SOC 1", "c6soc0"); G["c6soc0"] = rows("SOC Report Family", SOC, 0, "pick by audience: auditors &middot; customers under NDA &middot; the public");
  set("SOC 2", "c6soc1"); G["c6soc1"] = rows("SOC Report Family", SOC, 1, "pick by audience: auditors &middot; customers under NDA &middot; the public");
  set("SOC 3", "c6soc2"); G["c6soc2"] = rows("SOC Report Family", SOC, 2, "pick by audience: auditors &middot; customers under NDA &middot; the public");

  /* ---- Type 1 vs Type 2 ---- */
  var T12 = [
    ["TYPE 1", "a POINT IN TIME", "design suitability only", "cheaper, weaker evidence"],
    ["TYPE 2", "a PERIOD (6-12 months)", "operating EFFECTIVENESS", "the one customers want"]
  ];
  set("Type 1", "c6t0"); G["c6t0"] = cols("SOC Type 1 vs. Type 2", T12, 0);
  set("Type 2", "c6t1"); G["c6t1"] = cols("SOC Type 1 vs. Type 2", T12, 1);

  /* ---- verification vs validation ---- */
  var VV = [
    ["VERIFICATION", "did we build it RIGHT?", "checked against the SPEC", "testing &amp; reviews"],
    ["VALIDATION", "did we build the RIGHT thing?", "checked against the NEED", "does it solve the problem?"]
  ];
  set("Verification", "c6vv0"); G["c6vv0"] = cols("Verification vs. Validation", VV, 0);
  set("Validation", "c6vv1"); G["c6vv1"] = cols("Verification vs. Validation", VV, 1);

  /* ---- vulnerability assessment vs penetration test ---- */
  var VP = [
    ["VULN ASSESSMENT", "BREADTH &mdash; find &amp; list", "no exploitation", "scan, prioritise, report"],
    ["PENETRATION TEST", "DEPTH &mdash; EXPLOIT to prove", "authorized real attack", "shows actual impact"]
  ];
  set("Vulnerability Assessment", "c6vp0"); G["c6vp0"] = cols("Assessment vs. Pen Test", VP, 0);
  set("Penetration Testing", "c6vp1"); G["c6vp1"] = cols("Assessment vs. Pen Test", VP, 1);
})();
