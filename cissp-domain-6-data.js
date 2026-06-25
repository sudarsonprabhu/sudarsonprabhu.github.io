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
