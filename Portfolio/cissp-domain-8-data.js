/* ============================================================
   CISSP Domain 8 — Software Development Security hover details
   Globals consumed by cissp-domain-8.js:
     - AC_FIGS    : named inline-SVG infographics (red/black theme)
     - AC_DETAILS : box label (or data-ac-key) -> { t, d, x, f }
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_DETAILS, {
  /* ============== LAYOUT 1 — SECURE SOFTWARE DEVELOPMENT ============== */
  "ssd-title": {
    t: "Secure Software Development (Domain 8)",
    d: "Domain 8 is about making software TRUSTWORTHY. Security is designed in from the first requirement, carried through every phase of the software and system life cycles, tested for effectiveness, extended to the software you buy, and locked down with secure-coding standards. The recurring theme: security is cheapest and strongest when BAKED IN, never bolted on.",
    x: "A team that threat-models at design time and runs SAST in the pipeline ships far fewer vulnerabilities than one that 'adds security' just before release."
  },
  "bake-in": {
    t: "Bake In Security",
    d: "The governing principle of the whole domain: security must be BUILT INTO software from the earliest phase, not added at the end. Defects cost far more the later they are found, so requirements, design, coding, testing and deployment each carry security activities (threat modeling, secure design, SAST/DAST, code review).",
    x: "Fixing a design flaw on the whiteboard costs a meeting; fixing it in production costs an incident, a patch cycle and reputational damage."
  },
  "slc": {
    t: "System Life Cycle (SLC)",
    d: "The full life of a SYSTEM &mdash; broader than the SDLC. It wraps the software life cycle and adds the operational stages after go-live: OPERATION (running and maintaining the system in production) and DISPOSAL (secure decommissioning and data sanitisation at end of life). Security must be present at every SLC stage.",
    x: "A retired application server still holding live customer data is an SLC-disposal failure &mdash; 'retired' means sanitised, not just switched off.",
    f: "slcmap"
  },
  "sdlc": {
    t: "Software Development Life Cycle (SDLC)",
    d: "The structured process for building software: Plan &amp; management approval &rarr; Requirements &rarr; Architecture &amp; Design &rarr; Development &rarr; Testing &rarr; Deployment. Each phase has security activities baked in. The SDLC sits INSIDE the wider System Life Cycle, which adds Operation and Disposal.",
    x: "Security requirements are written alongside functional ones in the requirements phase; the design phase threat-models; development uses secure coding; testing runs SAST/DAST.",
    f: "sdlcmap"
  },
  "plan": {
    t: "Plan + Management Approval",
    d: "The first SDLC phase: define the project's purpose, scope, feasibility and BUDGET, and get formal management sign-off. Security's role starts here &mdash; initial risk assessment and the decision to fund security activities. Nothing proceeds without management approval.",
    x: "The business case for a new payment app includes a security budget line and an initial risk assessment before approval."
  },
  "requirements": {
    t: "Requirements",
    d: "Capture WHAT the software must do &mdash; and critically, its SECURITY requirements &mdash; alongside the functional ones. Getting security requirements right here is the cheapest place to influence the whole build. Includes data classification, compliance needs and abuse cases.",
    x: "'All PII must be encrypted at rest and in transit' is a security requirement captured before any code is written."
  },
  "arch-design": {
    t: "Architecture & Design",
    d: "Translate requirements into a technical design &mdash; and THREAT-MODEL it (STRIDE, attack surface, trust boundaries). Apply secure design principles (least privilege, defense in depth, fail secure). Design flaws caught here are far cheaper than those found after coding.",
    x: "A design review with a STRIDE threat model flags that a session token is passed in the URL &mdash; fixed on paper before development starts."
  },
  "development": {
    t: "Development",
    d: "Writing the code &mdash; using secure coding standards, peer code review and static analysis (SAST). The methodology used here (Waterfall, Agile or DevOps) shapes how security is integrated. The goal: produce code with the classic weaknesses designed out.",
    x: "Developers follow the OWASP secure-coding guidelines and every pull request is peer-reviewed and SAST-scanned before merge.",
    f: "methodmap"
  },
  "waterfall": {
    t: "Waterfall",
    d: "A SEQUENTIAL methodology &mdash; each phase completes before the next begins, flowing downward like a waterfall. Predictable and well-documented, but RIGID: you cannot easily go back to a previous phase, so mistakes found late are expensive. Good for stable, well-understood requirements.",
    x: "A regulated medical-device project uses Waterfall because requirements are fixed and full documentation is mandatory.",
    f: "waterfallfig"
  },
  "cannot-go-back": {
    t: "Cannot Go Back",
    d: "Waterfall's defining limitation: because each phase is signed off before the next starts, returning to an earlier phase is difficult and costly. A requirement missed early may not surface until testing &mdash; by which point rework is expensive. This rigidity is why Agile arose.",
    x: "A missing security requirement discovered in Waterfall testing forces a costly return through design and development."
  },
  "agile": {
    t: "Agile",
    d: "An ITERATIVE, incremental methodology &mdash; software is built in short cycles (sprints) with continuous feedback and the flexibility to change direction. Favours working software and collaboration over heavy documentation. Security must be integrated into every sprint (security stories, sprint-level testing) or it gets skipped.",
    x: "Each two-week sprint delivers a working increment; a 'security champion' ensures security stories are in every backlog.",
    f: "agilefig"
  },
  "sprints": {
    t: "Sprints",
    d: "Agile's short, time-boxed iterations (typically 1&ndash;4 weeks) that each deliver a working increment of software. Work is pulled from a prioritised backlog. Security tasks must be planned INTO each sprint, not deferred to a mythical 'security sprint' at the end.",
    x: "A two-week sprint delivers the login feature complete with its input-validation and rate-limiting security stories."
  },
  "scrum-master": {
    t: "Scrum Master",
    d: "In the Scrum flavour of Agile, the servant-leader who facilitates the process &mdash; removes blockers, runs the ceremonies (stand-up, planning, retrospective) and protects the team from scope creep. Not a project manager and not the decision-maker on WHAT to build (that's the Product Owner).",
    x: "The Scrum Master clears a tooling blocker so the team can finish its sprint security testing on time."
  },
  "devops": {
    t: "DevOps",
    d: "Unifies DEVELOPMENT and OPERATIONS (and QA) into one continuous, automated flow &mdash; CI/CD pipelines, infrastructure as code, rapid frequent releases. Speed is the point, which makes automated security essential. Adding security as a first-class member makes it DevSecOps / SecDevOps.",
    x: "Every commit triggers an automated pipeline: build &rarr; test &rarr; SAST/DAST &rarr; deploy &mdash; security gates run on every release.",
    f: "devopsfig"
  },
  "combine-dev": {
    t: "Combine Dev, QA & Ops",
    d: "The essence of DevOps: break down the silos between developers, quality assurance and operations so one team owns the software from code to production. Shared tooling and automation replace hand-offs, enabling continuous integration and continuous delivery.",
    x: "Instead of throwing code 'over the wall' to ops, the same team builds, tests and runs the service with shared pipelines and dashboards."
  },
  "secdevops": {
    t: "SecDevOps / DevSecOps",
    d: "Security integrated as a FIRST-CLASS, automated part of the DevOps pipeline &mdash; 'shift left' so security testing happens early and on every build (SAST, DAST, dependency scanning, IaC scanning). Security becomes everyone's job, automated into the flow rather than a gate at the end.",
    x: "The CI pipeline fails the build automatically if a dependency has a critical CVE or SAST finds an injection flaw."
  },
  "canary": {
    t: "Canary (Deployment)",
    d: "A release strategy that rolls new code to a SMALL subset of users/servers first (the 'canary'), monitors for errors or security issues, then gradually expands if healthy &mdash; or rolls back instantly if not. Limits the blast radius of a bad or vulnerable release.",
    x: "A new version goes to 2% of traffic; error and anomaly monitoring stays clean, so it's promoted to 100% &mdash; otherwise auto-rolled back."
  },
  "certification": {
    t: "Certification",
    d: "The comprehensive TECHNICAL evaluation of the software's security controls against its requirements &mdash; producing evidence that the controls work as intended. In the SDLC this precedes deployment. Certification evaluates; accreditation then approves.",
    x: "Assessors test the release against its security requirements and document the results for the authorising official."
  },
  "accreditation": {
    t: "Accreditation",
    d: "The formal MANAGEMENT decision (by the authorising official) to accept the residual risk and authorise the software to operate &mdash; made on the strength of the certification evidence. Certification is technical; accreditation is the risk-acceptance sign-off. Re-accredit on significant change.",
    x: "On the strength of the certification report, the authorising official grants an Authorization to Operate (ATO)."
  },
  "testing": {
    t: "Testing",
    d: "Verify the software meets its functional AND security requirements before release &mdash; SAST (static, white-box, on source), DAST (dynamic, black-box, on the running app), IAST, fuzzing, and penetration testing. Finds the weaknesses before attackers do.",
    x: "DAST fuzzing of the running API uncovers an injection flaw that SAST missed, and it's fixed before deployment.",
    f: "testfig"
  },
  "deployment": {
    t: "Deployment",
    d: "Releasing the software into production &mdash; ideally through an automated, repeatable pipeline with secure configuration, secrets management and a rollback plan. Strategies like blue/green and canary limit risk. A hardened, minimal production configuration is essential.",
    x: "A blue/green deployment swaps traffic to the new version instantly and can revert just as fast if problems appear."
  },
  "operation": {
    t: "Operation",
    d: "The System-Life-Cycle stage AFTER deployment: running and maintaining the software in production &mdash; monitoring, patching, configuration and change management, incident response. Most of a system's life is spent here, so operational security is where risk lives day to day.",
    x: "Continuous monitoring and a disciplined patch cycle keep the running application secure long after launch."
  },
  "disposal": {
    t: "Disposal",
    d: "The final SLC stage: securely DECOMMISSION the system and SANITISE its data (NIST SP 800-88 clear/purge/destroy, or crypto-shred in the cloud). A system taken offline but still holding recoverable live data is a breach waiting to happen &mdash; disposal is a security activity.",
    x: "At end of life, drives are purged and cloud data is crypto-shredded by destroying the keys &mdash; documented with a certificate of destruction."
  },
  "maturity-models": {
    t: "Maturity Models",
    d: "Frameworks that MEASURE how mature and repeatable an organisation's software-security practices are, giving a roadmap to improve. Key ones: SAMM (OWASP Software Assurance Maturity Model), BSIMM (Building Security In Maturity Model), and CMMI (Capability Maturity Model Integration, levels 1&ndash;5).",
    x: "A BSIMM assessment benchmarks the firm's secure-development practices against peers and shows where to invest next.",
    f: "maturityfig"
  },
  "apis": {
    t: "APIs",
    d: "Application Programming Interfaces let software components talk to each other &mdash; and are a major modern attack surface. Secure them with authentication/authorization (OAuth, keys), input validation, rate limiting and TLS. The two exam styles: REST and SOAP.",
    x: "A public REST API enforces OAuth 2.0, validates every parameter, and rate-limits to blunt abuse and injection.",
    f: "apifig"
  },
  "rest": {
    t: "REST",
    d: "REpresentational State Transfer &mdash; a lightweight, STATELESS architectural style over HTTP, typically exchanging JSON. Flexible and dominant for web/mobile APIs. Security relies on HTTPS/TLS, token auth (OAuth/JWT) and strict input validation; it has no built-in message security like SOAP's WS-Security.",
    x: "A mobile app calls a REST endpoint returning JSON, authenticated with a bearer token over HTTPS."
  },
  "soap": {
    t: "SOAP",
    d: "Simple Object Access Protocol &mdash; a heavier, XML-based messaging PROTOCOL with a strict envelope and built-in standards (WS-Security for message-level signing/encryption). More rigid and verbose than REST, but stronger native security and reliability &mdash; favoured in enterprise/financial integrations.",
    x: "A bank-to-bank integration uses SOAP with WS-Security so each XML message is individually signed and encrypted."
  },
  "obfuscation": {
    t: "Obfuscation",
    d: "Deliberately making code HARD TO UNDERSTAND while keeping it functional &mdash; to slow reverse engineering and protect intellectual property. It is a supplement, NOT a security control on its own (security through obscurity is never primary). Three types: lexical, data and control-flow.",
    x: "A vendor obfuscates its licensing logic so attackers can't easily patch out the checks &mdash; but still relies on real crypto underneath.",
    f: "obffig"
  },
  "obf-lexical": {
    t: "Lexical Obfuscation",
    d: "Scrambles the NAMES and layout: renaming variables/functions to meaningless strings, stripping comments and whitespace, mangling identifiers. The most common and lightest form &mdash; it hides intent without changing logic.",
    x: "'calculateDiscount()' becomes 'a1b2()' and all comments are removed in the shipped build."
  },
  "obf-data": {
    t: "Data Obfuscation",
    d: "Hides the DATA and constants: encoding strings, splitting or transforming literals, encrypting embedded values so they don't appear in plain text in the binary. Makes it harder to find keys, URLs or logic thresholds by inspection.",
    x: "A hard-coded API endpoint is stored XOR-encoded and decoded at runtime so it isn't visible in a strings dump."
  },
  "obf-control": {
    t: "Control-Flow Obfuscation",
    d: "Rewrites the program's LOGIC FLOW &mdash; inserting bogus branches, flattening loops, adding opaque predicates &mdash; so the decompiled control flow is confusing and hard to follow. The strongest and most disruptive form of obfuscation.",
    x: "A licence check is buried among dozens of fake conditional branches so an attacker can't easily locate and bypass it."
  },
  "acquire": {
    t: "Acquire Software",
    d: "Assessing the security impact of software you DON'T write &mdash; commercial off-the-shelf (COTS), open source, third-party components and managed services. You inherit their vulnerabilities, so you must assess vendors, review contracts/SLAs, track dependencies (SBOM) and watch for supply-chain risk.",
    x: "Before adopting a library, the team checks its CVE history, licence, maintenance activity and pins a known-good version.",
    f: "acquirefig"
  },
  "assess-vendors": {
    t: "Assess Vendors",
    d: "Due diligence on software suppliers: security posture, certifications (SOC 2, ISO 27001), vulnerability history, patch cadence, financial stability and support. You are trusting their code in your environment, so their weaknesses become yours (supply-chain risk).",
    x: "A vendor questionnaire plus a SOC 2 Type 2 report gives assurance before the product is allowed into production."
  },
  "contracts-slas": {
    t: "Contracts / SLAs",
    d: "The contractual controls over acquired software and services: Service Level Agreements defining availability, support and patch timelines, plus security clauses &mdash; right to audit, breach notification, data handling, and liability. If a security obligation isn't in the contract, it isn't guaranteed.",
    x: "The SLA commits the vendor to patching critical vulnerabilities within 72 hours and notifying of breaches within 24."
  },
  "weaknesses": {
    t: "Software Security Weaknesses & Vulnerabilities",
    d: "The catalogue of classic flaws Domain 8 expects you to defeat by secure coding: buffer overflows, SQL injection, XSS/CSRF, covert channels, backdoors/trapdoors, memory/object reuse, TOCTOU race conditions, input-validation failures and session-management flaws. Most are input-handling or memory-safety issues.",
    x: "A secure-coding standard plus SAST catches injection and overflow classes before they reach production.",
    f: "weakfig"
  },
  "buffer-overflow": {
    t: "Buffer Overflow",
    d: "Software accepts MORE input than its buffer can hold, and the excess overwrites adjacent memory &mdash; potentially overwriting the return address to hijack execution. Countered by good coding, bounds checking, strongly-typed / memory-safe languages, source-code scanners and runtime defences (ASLR, DEP, stack canaries).",
    x: "A C function copies user input into a fixed 64-byte buffer without checking length; a 200-byte input overwrites the stack and runs attacker code.",
    f: "bofig"
  },
  "sql-injection": {
    t: "SQL Injection",
    d: "Malicious SQL is injected through application input and executed by the database &mdash; enabling data theft, modification, authentication bypass or deletion. The classic web/database attack. Defence: PARAMETERISED queries (prepared statements), input validation, least-privilege database accounts and stored procedures.",
    x: "Entering ' OR '1'='1 into a login field turns the query always-true and logs the attacker in &mdash; prevented by parameterised queries.",
    f: "sqlifig"
  },
  "xss-csrf": {
    t: "XSS / CSRF",
    d: "Two web-app attacks. XSS (Cross-Site Scripting) injects script that runs in OTHER users' browsers (steals sessions) &mdash; defeated by output encoding + input validation. CSRF (Cross-Site Request Forgery) tricks an authenticated user's browser into an unwanted request &mdash; defeated by anti-CSRF tokens and SameSite cookies.",
    x: "XSS: a stored comment containing &lt;script&gt; steals viewers' cookies. CSRF: a hidden form auto-submits a 'transfer funds' request using the victim's live session.",
    f: "xssfig"
  },
  "covert-channels": {
    t: "Covert Channels",
    d: "Hidden communication paths that move information in ways the software's policy never intended &mdash; STORAGE channels (signal by modifying a shared stored object) and TIMING channels (signal by modulating event timing). In complex systems they can only be MINIMISED (covert-channel analysis at design time), never fully eliminated.",
    x: "A low-privilege process infers secret data by measuring how long a shared resource stays locked (a timing channel)."
  },
  "backdoors": {
    t: "Backdoors / Trapdoors",
    d: "Hidden mechanisms that BYPASS normal authentication or controls &mdash; sometimes left by developers as 'maintenance hooks', sometimes planted maliciously. Any undocumented access path is a serious risk. Remove maintenance hooks before release; use code review and integrity checks to detect planted ones.",
    x: "A developer's leftover 'god-mode' login that skips authentication is a backdoor an attacker can find and exploit."
  },
  "memory-reuse": {
    t: "Memory / Object Reuse",
    d: "Sensitive data LINGERS in memory, disk, or a reused object/buffer and leaks to the next user or process that gets that resource. Countered by clearing (zeroising) memory and buffers before release and by proper object-reuse controls so residual data can't be recovered.",
    x: "A freed buffer still holding a decrypted password is handed to another process, which reads the leftover secret."
  },
  "toctou": {
    t: "TOCTOU (Race Condition)",
    d: "Time-Of-Check to Time-Of-Use &mdash; a race condition where a resource's state CHANGES between when the software checks its permission and when it uses it, letting an attacker substitute something malicious in the gap. A code-logic flaw best found by CODE REVIEW, not scanning. Mitigate by shrinking the window and re-validating at use.",
    x: "A program checks a file is safe, then opens it &mdash; the attacker swaps it for a symlink to a sensitive file in the microseconds between.",
    f: "toctoufig"
  },
  "citizen-devs": {
    t: "Citizen Developers",
    d: "Non-professional developers (business users) building apps with LOW-CODE / NO-CODE platforms. They deliver fast but often lack security training, so their apps can carry unvalidated input, poor access control and shadow-IT risk. Govern with guardrails, review and platform-level controls.",
    x: "A finance analyst builds a low-code app that stores customer data without access control &mdash; caught by an app-governance review."
  },
  "input-validation": {
    t: "Input Validation",
    d: "The foundational defence behind most software weaknesses: NEVER trust input &mdash; validate, sanitise and encode it. Must be done SERVER-SIDE (client-side checks are for UX and are trivially bypassed), preferably with ALLOW lists (permit known-good) rather than deny lists.",
    x: "The server accepts only digits for a phone field and rejects everything else (allow-list), defeating injection and overflow attempts.",
    f: "inputfig"
  },
  "session-mgmt": {
    t: "Session Management",
    d: "How the app tracks a logged-in user between requests &mdash; and a rich attack surface. Secure it with strong random session IDs, HTTPS-only + HttpOnly + SameSite cookies, idle and absolute timeouts, regeneration of the ID on login, and proper logout/invalidation. Weak session handling enables hijacking and fixation.",
    x: "After login the app issues a fresh, random, HttpOnly session cookie and expires it after 15 minutes of inactivity."
  },
  "polyinstantiation": {
    t: "Polyinstantiation",
    d: "Creating MULTIPLE versions of the same database record at different classification levels so lower-cleared users see a plausible 'cover story' instead of a revealing gap &mdash; the classic defence against INFERENCE and aggregation attacks in multilevel databases.",
    x: "A low-clearance user sees a benign cover value for a classified record, so they can't infer the real, higher-classified fact."
  },
  "secure-programming": {
    t: "Secure Programming",
    d: "Writing code that is resistant to attack by following secure-coding standards (OWASP, CERT, SEI), performing code review, using memory-safe languages and static analysis, and managing the codebase with source control. The practical craft that turns the SDLC's security intent into safe code.",
    x: "Every function that touches user input uses parameterised queries and output encoding, enforced by lint rules and code review."
  },
  "scm": {
    t: "SCM (Source Code / Software Configuration Management)",
    d: "Version control and change tracking for the codebase (Git and friends) &mdash; every change is recorded, reviewable, attributable and revertible. Security value: integrity of the code, protected branches, signed commits, secrets scanning, and an audit trail of who changed what and when.",
    x: "Protected main branch + mandatory pull-request review + secret scanning means no unreviewed or credential-leaking code merges."
  },
  "maintain": {
    t: "Maintain Software",
    d: "Keeping software secure AFTER release &mdash; patch management, vulnerability monitoring, dependency updates, configuration/change management and incident response. Most of a product's life and most of its risk sit here, so ongoing maintenance is as important as the original build.",
    x: "A monthly patch cycle plus automated dependency-update PRs keep known CVEs out of the running application."
  },
  "soar": {
    t: "SOAR",
    d: "Security Orchestration, Automation and Response &mdash; platforms that automate and coordinate security operations (playbooks, alert triage, automated containment). In maintenance, SOAR speeds detection-to-response for software incidents by orchestrating tools and standardising the reaction.",
    x: "A SOAR playbook automatically isolates a host, opens a ticket and blocks an IOC the moment the SIEM flags exploitation of the app."
  },

  /* ============== LAYOUT 2 — DATABASES ============== */
  "db-title": {
    t: "Databases (Domain 8)",
    d: "Databases store the organisation's crown-jewel data, so their security is core to Domain 8. Know the DBMS components, the mechanisms that keep data correct under concurrent access (concurrency control, locking, the ACID properties), and the signature attack &mdash; SQL injection.",
    x: "A well-designed DBMS enforces ACID for correctness and uses parameterised queries to shut out SQL injection."
  },
  "dbms": {
    t: "Components of a DBMS",
    d: "A Database Management System is the software that stores, retrieves and secures data. Its components: HARDWARE (servers/storage), SOFTWARE (the DBMS engine and the database &rarr; tables &rarr; rows/columns), the LANGUAGE (SQL) used to query it, the USERS, and the DATA itself. Security spans all five.",
    x: "Oracle, SQL Server, PostgreSQL and MySQL are DBMS software managing hardware, a query language, users and data.",
    f: "dbmsfig"
  },
  "db-hardware": {
    t: "Hardware",
    d: "The physical servers, storage and network the database runs on. Security concerns: physical access control, full-disk / storage encryption, redundancy (RAID, clustering) for availability, and secure disposal of media at end of life.",
    x: "The database server's disks use transparent data encryption and sit in an access-controlled data-centre core."
  },
  "db-software": {
    t: "Software",
    d: "The DBMS ENGINE plus the structured data it manages: the DATABASE contains TABLES, which contain ROWS and COLUMNS. Security here means patching the engine, hardening its configuration, least-privilege accounts, and controlling schema and query access.",
    x: "The DBMS software is patched monthly and configured with least-privilege service accounts and disabled sample databases."
  },
  "database": {
    t: "Database",
    d: "An organised, structured collection of related data managed by the DBMS. It holds one or more TABLES and enforces relationships, constraints and access controls. The RELATIONAL model (tables linked by keys) is the exam default.",
    x: "The 'customers' database holds the customers, orders and payments tables linked by keys."
  },
  "tables": {
    t: "Tables",
    d: "The fundamental structure of a relational database &mdash; a grid of ROWS (records) and COLUMNS (attributes). Also called relations. Each table models one entity type and is linked to others through primary and foreign keys.",
    x: "The 'orders' table has one row per order and columns for order-id, customer-id (a foreign key), date and amount.",
    f: "tablefig"
  },
  "rows": {
    t: "Rows = Tuples / Records",
    d: "A ROW is a single record in a table &mdash; one complete instance of the entity. The formal relational term is TUPLE; practitioners say record or row. The number of rows is the table's CARDINALITY.",
    x: "One row in the 'employees' table = all the data about a single employee (a tuple / record)."
  },
  "columns": {
    t: "Columns = Attributes",
    d: "A COLUMN is a single field/property shared by every row &mdash; the formal relational term is ATTRIBUTE. The number of columns is the table's DEGREE. Each column has a defined data type and domain (allowed values).",
    x: "The 'salary' column (attribute) holds a numeric value for every employee row."
  },
  "fields": {
    t: "Fields",
    d: "A FIELD is the intersection of one row and one column &mdash; a single data value (a cell). It holds one attribute's value for one record. Field-level controls include data typing, constraints and, for sensitive data, encryption or masking.",
    x: "The field at row 'Alice' / column 'salary' holds the single value 85000."
  },
  "keys": {
    t: "Primary & Foreign Keys",
    d: "Keys enforce relationships and integrity. A PRIMARY KEY uniquely identifies each row in a table (no duplicates, no nulls). A FOREIGN KEY is a column that references another table's primary key, linking the two and enforcing REFERENTIAL integrity (you can't reference a row that doesn't exist).",
    x: "'orders.customer-id' (foreign key) references 'customers.customer-id' (primary key), so every order must belong to a real customer.",
    f: "keyfig"
  },
  "sql-language": {
    t: "Language (SQL)",
    d: "Structured Query Language &mdash; the standard language for defining and querying relational data (SELECT, INSERT, UPDATE, DELETE, plus DDL and access-control statements GRANT/REVOKE). Because queries are built from input, SQL is also the vector for injection &mdash; hence parameterisation.",
    x: "SELECT * FROM users WHERE id = ? &mdash; the '?' placeholder (parameterised query) keeps user input out of the SQL logic."
  },
  "db-users": {
    t: "Users",
    d: "The people and services that access the database. Security means authentication, LEAST-PRIVILEGE authorization (grant only the rights each role needs), separation of duties, and auditing of privileged actions. Over-privileged accounts are a top database risk.",
    x: "The reporting service connects with a read-only account &mdash; it can never modify or drop data even if compromised."
  },
  "db-data": {
    t: "Data",
    d: "The actual information stored &mdash; the asset everything else protects. Controls: classification, encryption at rest and in transit, masking/tokenisation of sensitive fields, retention and secure disposal, and defences against inference and aggregation (views, polyinstantiation).",
    x: "Card numbers are tokenised, PII columns are encrypted, and analysts see masked values through restricted views."
  },
  "integrity": {
    t: "Maintaining Integrity of Data",
    d: "Keeping data CORRECT and CONSISTENT, especially when many users read and write at once. The mechanisms: CONCURRENCY control (managing simultaneous access), LOCKS (preventing conflicting changes), and the ACID properties that guarantee reliable transactions.",
    x: "Two clerks booking the last seat at once are serialised by locking, so the seat is sold exactly once."
  },
  "concurrency": {
    t: "Concurrency",
    d: "Managing SIMULTANEOUS access so multiple users' reads and writes don't corrupt the data. Uncontrolled concurrency causes lost updates, dirty reads and inconsistent state. Solved with locking, timestamps or multiversion concurrency control (MVCC), governed by the transaction's ISOLATION level.",
    x: "Without concurrency control, two simultaneous 'add $100' updates on the same balance could lose one &mdash; locking prevents it."
  },
  "locks": {
    t: "Locks",
    d: "The primary concurrency mechanism: a transaction LOCKS a row/table so others can't make conflicting changes until it finishes. Shared (read) vs exclusive (write) locks. Trade-off: too much locking hurts performance and can cause DEADLOCK (two transactions each waiting on the other).",
    x: "An exclusive lock on the account row during a transfer stops any other transaction reading or writing it until the transfer commits."
  },
  "acid": {
    t: "ACID",
    d: "The four guarantees of a reliable database TRANSACTION: ATOMICITY (all-or-nothing), CONSISTENCY (valid state to valid state), ISOLATION (concurrent transactions don't interfere), DURABILITY (committed data survives a crash). ACID is how a DBMS maintains integrity under concurrent, fault-prone conditions.",
    x: "A bank transfer either fully completes (both debit and credit) or fully rolls back &mdash; never half-done &mdash; and survives a power loss once committed.",
    f: "acidfig"
  },
  "atomicity": {
    t: "Atomicity",
    d: "A transaction is ALL-OR-NOTHING: either every operation in it succeeds and commits, or if any part fails the whole thing ROLLS BACK, leaving no partial change. Prevents half-completed operations that would corrupt the data.",
    x: "If the 'credit the payee' step fails, the 'debit the payer' step is rolled back too &mdash; the money never vanishes."
  },
  "consistency": {
    t: "Consistency",
    d: "A transaction moves the database from one VALID state to another, always satisfying all rules, constraints and integrity requirements. A transaction that would violate a constraint (e.g. a foreign-key or check rule) is rejected.",
    x: "A transaction that would leave an order pointing to a non-existent customer is rejected &mdash; referential integrity is preserved."
  },
  "isolation": {
    t: "Isolation",
    d: "Concurrent transactions execute as if they were SERIAL &mdash; each behaves as though it has the database to itself, so one transaction's uncommitted work is invisible to others. Isolation LEVELS trade strictness for performance (read-uncommitted &rarr; serializable).",
    x: "Two simultaneous transfers on the same account don't see each other's uncommitted changes, so neither corrupts the balance."
  },
  "durability": {
    t: "Durability",
    d: "Once a transaction COMMITS, its changes are PERMANENT and survive any subsequent failure &mdash; power loss, crash, reboot. Achieved through write-ahead logging and durable storage, so committed data can always be recovered.",
    x: "The moment the transfer commits, it's written to the transaction log &mdash; a power cut a second later cannot undo it."
  },
  "db-sqli": {
    t: "SQL Injection",
    d: "The signature database attack: malicious SQL injected through application input is executed by the database, enabling data theft, authentication bypass, modification or deletion. It exploits queries built by concatenating user input. Defence: PARAMETERISED queries / prepared statements, input validation, least-privilege DB accounts and stored procedures.",
    x: "' OR '1'='1 in a login field makes the WHERE clause always true &mdash; parameterised queries treat it as literal data, not SQL, and stop it.",
    f: "sqlifig"
  }
});

/* ===== Domain 8 infographics (builder-generated + custom SVG) ===== */
(function () {
  var G = window.AC_FIGS, D = window.AC_DETAILS;
  function set(k, f) { if (D[k]) { D[k].f = f; } }

  /* vertical rows, one optionally highlighted */
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

  /* 2-4 columns, one optionally highlighted */
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

  /* ---- SLC / SDLC ladders ---- */
  G.slcmap = rows("System Life Cycle wraps the SDLC", [
    ["SDLC", "plan &rarr; requirements &rarr; design &rarr; dev &rarr; test &rarr; deploy"],
    ["Operation", "run, monitor, patch in production"],
    ["Disposal", "secure decommission + data sanitisation"]
  ], -1, "the SLC = the SDLC PLUS operation and disposal");
  set("slc", "slcmap");

  G.sdlcmap = rows("SDLC Phases", [
    ["Plan + Approval", "scope, budget, initial risk"],
    ["Requirements", "security reqs alongside functional"],
    ["Architecture & Design", "threat model, secure design"],
    ["Development", "secure coding + SAST"],
    ["Testing", "SAST / DAST / pen test"],
    ["Deployment", "hardened, automated release"]
  ], -1, "security activities live in every phase &mdash; shift left");
  set("sdlc", "sdlcmap");

  /* ---- methodologies ---- */
  var METH = [
    ["WATERFALL", "sequential phases", "rigid, documented", "can't easily go back"],
    ["AGILE", "iterative sprints", "flexible, fast feedback", "security every sprint"],
    ["DEVOPS", "continuous CI/CD", "dev + QA + ops united", "automate security (SecDevOps)"]
  ];
  G.methodmap = cols("Development Methodologies", METH, -1, "pick by how stable the requirements are");
  set("development", "methodmap");
  G.waterfallfig = card("Waterfall", ["strictly SEQUENTIAL &mdash; each phase signed", "off before the next begins", "predictable + documented, but RIGID"], "best when requirements are fixed and won't change");
  set("waterfall", "waterfallfig");
  G.agilefig = card("Agile", ["ITERATIVE &mdash; short sprints deliver working", "increments with continuous feedback", "flexible; bake security into every sprint"], "a security champion keeps security stories in each backlog");
  set("agile", "agilefig");
  G.devopsfig = card("DevOps &rarr; SecDevOps", ["unifies Dev + QA + Ops into one", "automated CI/CD flow &mdash; fast releases", "SHIFT LEFT: automate security on every build"], "the pipeline fails the build on a critical CVE or SAST finding");
  set("devops", "devopsfig");

  /* ---- testing ---- */
  var TEST = [
    ["SAST", "STATIC / white-box", "reads the source code", "early, finds code flaws"],
    ["DAST", "DYNAMIC / black-box", "attacks the running app", "finds runtime/config flaws"]
  ];
  G.testfig = cols("Software Security Testing", TEST, -1, "use both &mdash; plus IAST, fuzzing and pen testing");
  set("testing", "testfig");

  /* ---- maturity models ---- */
  G.maturityfig = rows("Software-Security Maturity Models", [
    ["SAMM", "OWASP Software Assurance Maturity Model"],
    ["BSIMM", "measures real practices vs peers"],
    ["CMMI", "capability levels 1-5 (initial &rarr; optimising)"]
  ], -1, "they measure how mature + repeatable your practices are");
  set("maturity-models", "maturityfig");

  /* ---- APIs ---- */
  var API = [
    ["REST", "lightweight, STATELESS", "JSON over HTTP", "TLS + token auth; no native msg security"],
    ["SOAP", "heavy, XML PROTOCOL", "strict envelope", "built-in WS-Security (sign/encrypt)"]
  ];
  G.apifig = cols("REST vs SOAP", API, -1, "REST = flexible web/mobile; SOAP = enterprise + message security");
  set("apis", "apifig");

  /* ---- obfuscation ---- */
  var OBF = [
    ["LEXICAL", "rename + strip", "meaningless identifiers", "lightest, most common"],
    ["DATA", "hide constants", "encode/encrypt literals", "hides keys, URLs"],
    ["CONTROL FLOW", "scramble logic", "bogus branches, flatten", "strongest, most disruptive"]
  ];
  G.obffig = cols("Obfuscation Types", OBF, -1, "slows reverse engineering &mdash; NOT a primary control");
  set("obfuscation", "obffig");

  /* ---- acquire ---- */
  G.acquirefig = card("Acquiring Software", ["COTS &middot; open source &middot; third-party &middot; managed", "you INHERIT their vulnerabilities", "assess vendors + track dependencies (SBOM)"], "supply-chain risk: their weakness becomes your weakness");
  set("acquire", "acquirefig");

  /* ---- weaknesses overview ---- */
  G.weakfig = rows("Classic Software Weaknesses", [
    ["Buffer overflow", "input exceeds buffer &rarr; overwrite memory"],
    ["Injection (SQL)", "input executed as code"],
    ["XSS / CSRF", "browser-side web attacks"],
    ["TOCTOU", "race between check and use"],
    ["Backdoors", "hidden auth-bypass paths"]
  ], -1, "most are INPUT-HANDLING or MEMORY-SAFETY flaws &mdash; validate + bound");
  set("weaknesses", "weakfig");

  /* ---- input validation ---- */
  var IV = [
    ["ALLOW LIST", "permit known-GOOD only", "rejects everything else", "the safer default"],
    ["DENY LIST", "block known-BAD only", "always misses novel input", "avoid relying on it"]
  ];
  G.inputfig = cols("Input Validation", IV, 0, "validate SERVER-SIDE &mdash; client checks are trivially bypassed");
  set("input-validation", "inputfig");

  /* ---- DBMS + tables + keys + ACID ---- */
  G.dbmsfig = rows("DBMS Components", [
    ["Hardware", "servers, storage, network"],
    ["Software", "engine &rarr; database &rarr; tables"],
    ["Language", "SQL to query + control"],
    ["Users", "authenticated, least-privilege"],
    ["Data", "the protected asset"]
  ], -1, "security spans all five components");
  set("dbms", "dbmsfig");

  G.acidfig = rows("ACID &mdash; reliable transactions", [
    ["Atomicity", "all-or-nothing (rollback on fail)"],
    ["Consistency", "valid state &rarr; valid state"],
    ["Isolation", "concurrent txns don't interfere"],
    ["Durability", "committed data survives a crash"]
  ], -1, "how a DBMS keeps data correct under concurrency + faults");
  set("acid", "acidfig");

  /* ---- custom SVGs ---- */
  G.tablefig = '<svg viewBox="0 0 330 118" class="fig" role="img" aria-label="Relational table structure">'
    + '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Relational Table</text>'
    + '<rect x="40" y="24" width="250" height="18" fill="#3a0a0e" stroke="#d31324"/>'
    + '<text x="90" y="37" text-anchor="middle" fill="#fff" font-size="7.5" font-weight="700">id (PK)</text>'
    + '<text x="165" y="37" text-anchor="middle" fill="#fff" font-size="7.5" font-weight="700">name</text>'
    + '<text x="245" y="37" text-anchor="middle" fill="#fff" font-size="7.5" font-weight="700">dept-id (FK)</text>'
    + '<rect x="40" y="42" width="250" height="18" fill="#161616" stroke="#a0303f"/>'
    + '<rect x="40" y="60" width="250" height="18" fill="#1b1b1b" stroke="#a0303f"/>'
    + '<rect x="40" y="78" width="250" height="18" fill="#161616" stroke="#a0303f"/>'
    + '<text x="30" y="55" text-anchor="end" fill="#ff9ab0" font-size="7" transform="rotate(-90 30 68)">ROWS = tuples</text>'
    + '<text x="165" y="110" text-anchor="middle" fill="#a6a6a6" font-size="7">columns = attributes &middot; a cell = a field &middot; header row shows keys</text></svg>';
  set("tables", "tablefig");

  G.keyfig = '<svg viewBox="0 0 330 110" class="fig" role="img" aria-label="Primary and foreign keys">'
    + '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Primary &amp; Foreign Keys</text>'
    + '<rect x="14" y="26" width="130" height="60" rx="6" fill="#161616" stroke="#a0303f"/>'
    + '<text x="79" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">customers</text>'
    + '<rect x="24" y="48" width="110" height="16" rx="3" fill="#3a0a0e" stroke="#d31324"/>'
    + '<text x="79" y="59" text-anchor="middle" fill="#fff" font-size="7">customer-id (PK)</text>'
    + '<text x="79" y="78" text-anchor="middle" fill="#e0e0e0" font-size="7">unique, no nulls</text>'
    + '<rect x="186" y="26" width="130" height="60" rx="6" fill="#161616" stroke="#a0303f"/>'
    + '<text x="251" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">orders</text>'
    + '<rect x="196" y="48" width="110" height="16" rx="3" fill="#161616" stroke="#ffd27c"/>'
    + '<text x="251" y="59" text-anchor="middle" fill="#ffd27c" font-size="7">customer-id (FK)</text>'
    + '<text x="251" y="78" text-anchor="middle" fill="#e0e0e0" font-size="7">must match a real PK</text>'
    + '<path d="M134 56 L196 56" stroke="#d31324" stroke-width="1.4"/><text x="165" y="52" text-anchor="middle" fill="#a6a6a6" font-size="6.5">references</text></svg>';
  set("keys", "keyfig");

  G.sqlifig = '<svg viewBox="0 0 330 116" class="fig" role="img" aria-label="SQL injection">'
    + '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">SQL Injection</text>'
    + '<rect x="10" y="22" width="310" height="22" rx="4" fill="#161616" stroke="#a0303f"/>'
    + '<text x="16" y="36" fill="#e0e0e0" font-size="8">Login input: <tspan fill="#ff9ab0" font-weight="700">&apos; OR &apos;1&apos;=&apos;1</tspan></text>'
    + '<rect x="10" y="50" width="310" height="22" rx="4" fill="#3a0a0e" stroke="#d31324"/>'
    + '<text x="16" y="64" fill="#fff" font-size="7.2">WHERE pass=&apos;<tspan fill="#ff9ab0">&apos; OR &apos;1&apos;=&apos;1</tspan>&apos; &rarr; always TRUE &rarr; logged in</text>'
    + '<rect x="10" y="78" width="310" height="22" rx="4" fill="#161616" stroke="#a0303f"/>'
    + '<text x="16" y="92" fill="#e0e0e0" font-size="7.6"><tspan fill="#ff9ab0" font-weight="700">Fix:</tspan> parameterised queries &middot; input validation &middot; least-privilege DB</text>'
    + '<text x="165" y="112" text-anchor="middle" fill="#a6a6a6" font-size="7">input is executed as QUERY LOGIC instead of data</text></svg>';
  set("sql-injection", "sqlifig");
  set("db-sqli", "sqlifig");

  G.bofig = '<svg viewBox="0 0 330 108" class="fig" role="img" aria-label="Buffer overflow">'
    + '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Buffer Overflow</text>'
    + '<rect x="30" y="30" width="80" height="26" rx="3" fill="#161616" stroke="#a0303f"/><text x="70" y="46" text-anchor="middle" fill="#e0e0e0" font-size="7.5">64-byte buffer</text>'
    + '<rect x="110" y="30" width="120" height="26" rx="3" fill="#3a0a0e" stroke="#d31324"/><text x="170" y="42" text-anchor="middle" fill="#fff" font-size="7">overflow spills into</text><text x="170" y="52" text-anchor="middle" fill="#fff" font-size="7">adjacent memory</text>'
    + '<rect x="230" y="30" width="70" height="26" rx="3" fill="#161616" stroke="#ffd27c"/><text x="265" y="46" text-anchor="middle" fill="#ffd27c" font-size="7">return addr</text>'
    + '<text x="165" y="74" text-anchor="middle" fill="#f0f0f0" font-size="7.6">200 bytes into a 64-byte buffer overwrites the return address</text>'
    + '<text x="165" y="90" text-anchor="middle" fill="#a6a6a6" font-size="7">Fix: bounds checking &middot; safe languages &middot; ASLR / DEP / stack canaries</text></svg>';
  set("buffer-overflow", "bofig");

  G.xssfig = '<svg viewBox="0 0 330 116" class="fig" role="img" aria-label="XSS versus CSRF">'
    + '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">XSS vs CSRF</text>'
    + '<rect x="12" y="24" width="148" height="80" rx="8" fill="#161616" stroke="#a0303f"/>'
    + '<text x="86" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8.5" font-weight="700">XSS</text>'
    + '<text x="86" y="56" text-anchor="middle" fill="#e0e0e0" font-size="7">injects SCRIPT that runs</text>'
    + '<text x="86" y="67" text-anchor="middle" fill="#e0e0e0" font-size="7">in other users&apos; browsers</text>'
    + '<text x="86" y="80" text-anchor="middle" fill="#a6a6a6" font-size="6.6">target: the CLIENT</text>'
    + '<text x="86" y="96" text-anchor="middle" fill="#ffd27c" font-size="6.8">fix: output encoding</text>'
    + '<rect x="170" y="24" width="148" height="80" rx="8" fill="#3a0a0e" stroke="#d31324"/>'
    + '<text x="244" y="40" text-anchor="middle" fill="#fff" font-size="8.5" font-weight="700">CSRF</text>'
    + '<text x="244" y="56" text-anchor="middle" fill="#e0e0e0" font-size="7">forges a request using the</text>'
    + '<text x="244" y="67" text-anchor="middle" fill="#e0e0e0" font-size="7">victim&apos;s live session</text>'
    + '<text x="244" y="80" text-anchor="middle" fill="#a6a6a6" font-size="6.6">target: the SERVER</text>'
    + '<text x="244" y="96" text-anchor="middle" fill="#ffd27c" font-size="6.8">fix: anti-CSRF tokens</text></svg>';
  set("xss-csrf", "xssfig");

  G.toctoufig = '<svg viewBox="0 0 330 104" class="fig" role="img" aria-label="TOCTOU race condition">'
    + '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">TOCTOU &mdash; the Race Window</text>'
    + '<line x1="20" y1="58" x2="310" y2="58" stroke="#a0303f" stroke-width="2"/>'
    + '<circle cx="55" cy="58" r="5" fill="#161616" stroke="#ff9ab0" stroke-width="2"/><text x="55" y="42" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">CHECK</text><text x="55" y="76" text-anchor="middle" fill="#e0e0e0" font-size="7">file is safe &#10003;</text>'
    + '<circle cx="165" cy="58" r="5" fill="#3a0a0e" stroke="#d31324" stroke-width="2"/><text x="165" y="42" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">ATTACKER SWAPS</text><text x="165" y="76" text-anchor="middle" fill="#e0e0e0" font-size="7">symlink to secret</text>'
    + '<circle cx="275" cy="58" r="5" fill="#161616" stroke="#ff9ab0" stroke-width="2"/><text x="275" y="42" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">USE</text><text x="275" y="76" text-anchor="middle" fill="#e0e0e0" font-size="7">opens wrong file &#10007;</text>'
    + '<text x="165" y="98" text-anchor="middle" fill="#a6a6a6" font-size="7">found by CODE REVIEW &middot; fix: re-validate at time of use</text></svg>';
  set("toctou", "toctoufig");
})();
