/* ============================================================
   CISSP Domain 3 — Layout 1 hover details
   (Models · Secure Design Principles · Security Frameworks)
   Globals consumed by cissp-domain-3.js:
     - AC_FIGS    : named inline-SVG infographics (red/black theme)
     - AC_DETAILS : box label (or data-ac-key) -> { t, d, x, f }
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
Object.assign(window.AC_FIGS, {
  modelmap: `
    <svg viewBox="0 0 330 120" class="fig" role="img" aria-label="Security model focus">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Which model protects what?</text>
      <g font-size="8.5" fill="#e0e0e0">
        <rect x="10" y="22" width="310" height="20" rx="3" fill="#161616" stroke="#a0303f"/><text x="16" y="36"><tspan fill="#ff9ab0" font-weight="700">Bell-LaPadula</tspan> &mdash; Confidentiality (military)</text>
        <rect x="10" y="46" width="310" height="20" rx="3" fill="#161616" stroke="#a0303f"/><text x="16" y="60"><tspan fill="#ff9ab0" font-weight="700">Biba &middot; Clark-Wilson</tspan> &mdash; Integrity (commercial)</text>
        <rect x="10" y="70" width="310" height="20" rx="3" fill="#161616" stroke="#a0303f"/><text x="16" y="84"><tspan fill="#ff9ab0" font-weight="700">Brewer-Nash</tspan> &mdash; conflict of interest (Chinese Wall)</text>
        <rect x="10" y="94" width="310" height="20" rx="3" fill="#161616" stroke="#a0303f"/><text x="16" y="108"><tspan fill="#ff9ab0" font-weight="700">Lipner</tspan> &mdash; both C + I together</text>
      </g>
    </svg>`
});

window.AC_DETAILS = window.AC_DETAILS || {};
Object.assign(window.AC_DETAILS, {
  /* ============== MODELS ============== */
  "models-title": {
    t: "Security Models & Architecture (Domain 3.2)",
    d: "How security is formally structured and proven. Enterprise security architecture frameworks (Zachman, SABSA, TOGAF) organise the big picture, while formal security MODELS (lattice-based like Bell-LaPadula and Biba, and rule-based like Clark-Wilson) give mathematically-defined rules for enforcing confidentiality and integrity.",
    x: "A defence system uses Bell-LaPadula to mathematically guarantee no one can leak Top Secret data to a lower clearance.",
    f: "modelmap"
  },
  "Enterprise Security Architecture": {
    t: "Enterprise Security Architecture",
    d: "Frameworks that align security with the overall enterprise architecture and business goals, giving a structured, top-down blueprint. The big three: Zachman, SABSA and TOGAF.",
    x: "A CISO uses SABSA to derive the security architecture directly from business risk and requirements."
  },
  "Zachman": {
    t: "Zachman Framework",
    d: "An enterprise-architecture framework structured as a 2-D matrix: six communication questions (What, How, Where, Who, When, Why) across six stakeholder perspectives. Descriptive and taxonomy-focused, not security-specific.",
    x: "Architects use Zachman's grid to ensure every viewpoint of the enterprise is documented and consistent."
  },
  "Sabsa": {
    t: "SABSA",
    d: "Sherwood Applied Business Security Architecture — a RISK- and BUSINESS-driven framework specifically for security architecture, also using a matrix of layers and questions. Security requirements trace back to business needs.",
    x: "SABSA drives the security design from business attributes and risk, ensuring controls map to business value."
  },
  "TOGAF": {
    t: "TOGAF",
    d: "The Open Group Architecture Framework — a general enterprise-architecture framework built around the Architecture Development Method (ADM). Broad EA focus; security is woven in rather than the core purpose.",
    x: "An organisation follows TOGAF's ADM cycle to plan and govern its overall enterprise (and security) architecture."
  },
  "Security Models": {
    t: "Security Models",
    d: "Formal, often mathematical, descriptions of how to enforce a security policy. They map the policy's goals (confidentiality, integrity) onto precise rules a system can implement. Grouped into lattice-based and rule-based.",
    x: "A model translates 'no leaking secrets' into the precise rule 'no write down' that the OS can enforce.",
    f: "modelmap"
  },
  "Lattice Based": {
    t: "Lattice-Based Models",
    d: "Models built on a LATTICE of ordered security levels, where each subject and object has a position and access is governed by upper/lower bounds. The basis of Mandatory Access Control (MAC). Bell-LaPadula and Biba are the classic examples.",
    x: "Security levels (Unclassified &lt; Secret &lt; Top Secret) form a lattice that dictates who can read/write what."
  },
  "Rule Based": {
    t: "Rule-Based Models",
    d: "Models that enforce integrity and security through explicit RULES and well-formed transactions rather than a level lattice — e.g. Clark-Wilson's access triples, Brewer-Nash's dynamic conflict-of-interest rules, and the access-matrix models.",
    x: "Clark-Wilson lets users change data only through certified programs, following defined rules."
  },
  "bell-lapadula": {
    t: "Bell-LaPadula (BLP)",
    d: "The classic CONFIDENTIALITY model (military). Lattice/MAC-based, it prevents information flowing DOWN to lower clearances. Its rules: Simple Security Property = NO READ UP; Star (*) Property = NO WRITE DOWN; Strong Star = read/write at same level only. It says nothing about integrity.",
    x: "A Secret-cleared user can't read Top Secret (no read up) and can't write into an Unclassified file (no write down), preventing leaks.",
    f: "blpbiba"
  },
  "Confidentiality": {
    t: "Confidentiality (BLP focus)",
    d: "Bell-LaPadula's goal: keep information from disclosing to those without clearance. Every BLP rule exists to stop high-classification data reaching a lower level.",
    x: "BLP guarantees Top Secret data can never end up readable by a Confidential-cleared user.",
    f: "blpbiba"
  },
  "Simple Security Property": {
    t: "Simple Security Property (BLP)",
    d: "&ldquo;NO READ UP&rdquo; (NRU). A subject may not READ an object at a HIGHER classification than its clearance. Protects confidentiality by stopping access to data above your level.",
    x: "A Secret-cleared analyst cannot open a Top Secret document.",
    f: "blpbiba"
  },
  "Star Property": {
    t: "Star (*) Property (BLP)",
    d: "&ldquo;NO WRITE DOWN&rdquo; (NWD). A subject may not WRITE to an object at a LOWER classification. Prevents a high-cleared user from leaking secrets into a lower-level file. The key confidentiality safeguard.",
    x: "A Top Secret user can't paste classified text into an Unclassified document.",
    f: "blpbiba"
  },
  "Strong Star Property": {
    t: "Strong Star Property (BLP)",
    d: "A stricter variant: a subject may read and write ONLY at its OWN level (no read up, no write down, and no write up either). Eliminates any cross-level read/write.",
    x: "A Secret user can only read and write Secret-level objects &mdash; nothing above or below."
  },
  "Biba": {
    t: "Biba",
    d: "The classic INTEGRITY model &mdash; the inverse of Bell-LaPadula. Lattice-based, it prevents data flowing UP to higher integrity (stopping contamination by lower-integrity data). Rules: Simple Integrity = NO READ DOWN; Star (*) Integrity = NO WRITE UP. It addresses integrity only, not confidentiality.",
    x: "A high-integrity process can't read a low-integrity (untrusted) file (no read down) and a low-integrity user can't write into a high-integrity file (no write up).",
    f: "blpbiba"
  },
  "Integrity": {
    t: "Integrity (Biba focus)",
    d: "Biba's goal: prevent unauthorised or untrustworthy data from corrupting higher-integrity data. Where BLP protects secrecy, Biba protects trustworthiness.",
    x: "Biba stops an untrusted input from being written into a critical system file.",
    f: "blpbiba"
  },
  "Simple Integrity Property": {
    t: "Simple Integrity Property (Biba)",
    d: "&ldquo;NO READ DOWN&rdquo; (NRD). A subject may not READ an object of LOWER integrity &mdash; so trusted processes aren't contaminated by untrusted data.",
    x: "A high-integrity application refuses to read data from a low-integrity, untrusted source.",
    f: "blpbiba"
  },
  "Star Integrity Property": {
    t: "Star (*) Integrity Property (Biba)",
    d: "&ldquo;NO WRITE UP&rdquo; (NWU). A subject may not WRITE to an object of HIGHER integrity &mdash; so low-integrity subjects can't corrupt high-integrity data. The key integrity safeguard.",
    x: "A low-integrity user cannot modify a high-integrity master record.",
    f: "blpbiba"
  },
  "lipner": {
    t: "Lipner Implementation",
    d: "Lipner's model COMBINES Bell-LaPadula and Biba to protect BOTH confidentiality AND integrity at once &mdash; a practical implementation showing how the two lattice models can work together in a commercial setting.",
    x: "A system uses Lipner's approach to keep data both secret (BLP) and uncorrupted (Biba) simultaneously.",
    f: "modelmap"
  },
  "Clark-Wilson": {
    t: "Clark-Wilson",
    d: "A rule-based INTEGRITY model for commercial systems. Users never touch data directly &mdash; they act through certified well-formed transactions (programs), enforced via the access TRIPLE (subject &rarr; program &rarr; object). Enforces separation of duties and auditing.",
    x: "A clerk can only change account balances through an approved banking application, never by editing the database directly."
  },
  "cw-goals": {
    t: "3 Goals of Integrity (Clark-Wilson)",
    d: "Clark-Wilson aims to: (1) prevent UNAUTHORISED users from making any changes; (2) prevent AUTHORISED users from making IMPROPER changes; and (3) maintain internal and external CONSISTENCY of the data.",
    x: "The banking app blocks outsiders entirely, stops tellers from posting invalid entries, and keeps the ledger internally and externally consistent."
  },
  "cw-rules": {
    t: "3 Clark-Wilson Rules / Constructs",
    d: "Clark-Wilson uses the access TRIPLE (subject-program-object), Constrained vs Unconstrained Data Items (CDIs/UDIs), and Integrity/Transformation Procedures (IVPs verify integrity; TPs are the well-formed transactions). Certification and enforcement rules bind them together.",
    x: "Only a certified Transformation Procedure (TP) may modify a Constrained Data Item (CDI), with an Integrity Verification Procedure (IVP) checking the result."
  },
  "brewer-nash": {
    t: "Brewer-Nash (Chinese Wall)",
    d: "A model that prevents CONFLICTS OF INTEREST by dynamically changing access based on what a user has ALREADY accessed. Once you access one company's data in a competitive set, you're walled off from its competitors' data.",
    x: "A consultant who views Client A's files is automatically blocked from Client B's files in the same industry."
  },
  "prevent-coi": {
    t: "Prevent Conflicts of Interest",
    d: "The purpose of Brewer-Nash: stop a user from accessing data sets that would create a conflict of interest. Access is granted dynamically &mdash; your history determines what you're allowed to see next.",
    x: "An auditor with access to one bank's books can't also open a rival bank's books they're auditing."
  },
  "graham-denning": {
    t: "Graham-Denning Model",
    d: "Defines a set of EIGHT primitive protection rights (commands) for securely creating/deleting subjects and objects and granting/transferring/deleting access rights. It formalises HOW subjects and objects are created and how rights are managed.",
    x: "It specifies the exact primitive operations for creating an object and granting another subject read access to it."
  },
  "hru": {
    t: "Harrison-Ruzzo-Ullman (HRU)",
    d: "Extends Graham-Denning, modelling access rights in an access MATRIX and the commands that change them. Famous for proving that the general 'safety' question (will a right ever leak?) is UNDECIDABLE.",
    x: "HRU formally analyses whether a sequence of rights-granting commands could ever let an unauthorised subject gain a right."
  },

  /* ============== SECURE DESIGN PRINCIPLES ============== */
  "Secure Design Principles": {
    t: "Secure Design Principles (Domain 3.1)",
    d: "The foundational principles for engineering security INTO a system from the start rather than bolting it on. Applying these consistently is what makes an architecture defensible.",
    x: "A new app is built with least privilege, secure defaults, defense in depth and privacy by design from day one."
  },
  "Threat Modeling": {
    t: "Threat Modeling",
    d: "Systematically identifying and prioritising potential threats during design so controls can be built in early (STRIDE, PASTA, DREAD). Cheaper to fix threats on paper than in production.",
    x: "The team threat-models a new API and designs out a spoofing risk before writing code."
  },
  "Least Privilege": {
    t: "Least Privilege",
    d: "Grant every user, process and system the MINIMUM access and rights needed to do its job &mdash; nothing more. Limits the blast radius of any compromise or mistake.",
    x: "A reporting service gets read-only access to one database table, not admin over the whole server."
  },
  "Defense in Depth": {
    t: "Defense in Depth (Layering)",
    d: "Deploy MULTIPLE, overlapping layers of controls so that if one fails, others still protect the asset. No single control is a single point of failure.",
    x: "A firewall, network segmentation, endpoint AV, MFA and encryption all protect the same data &mdash; an attacker must beat them all."
  },
  "Secure Defaults": {
    t: "Secure Defaults",
    d: "Systems should ship and start in their MOST SECURE configuration out of the box &mdash; default-deny, features off until needed, no default passwords. Security shouldn't depend on the user hardening it.",
    x: "A new device requires setting a password on first boot and has all unused ports/services disabled by default."
  },
  "Fail Securely": {
    t: "Fail Securely",
    d: "When a system fails, it should default to a SECURE state rather than an open one &mdash; denying access on error (fail-closed) rather than granting it. (Balanced against life-safety, where fail-safe/open applies.)",
    x: "If the authorization service crashes, the application denies access rather than letting everyone in."
  },
  "Separation of Duties (SoD)": {
    t: "Separation of Duties (SoD)",
    d: "Split a critical task across MULTIPLE people/roles so no single individual can complete it alone &mdash; preventing fraud and error. Beating it requires collusion.",
    x: "One person requests a payment and a different person approves it; neither can pay themselves."
  },
  "Keep it Simple": {
    t: "Keep it Simple (Economy of Mechanism)",
    d: "The simpler the design, the smaller the attack surface and the easier it is to verify. Complexity is the enemy of security &mdash; avoid unnecessary features and convoluted logic.",
    x: "Choosing a small, well-understood library over a sprawling framework reduces the ways things can go wrong."
  },
  "Zero Trust": {
    t: "Zero Trust",
    d: "&ldquo;Never trust, always verify.&rdquo; Assume no implicit trust based on network location &mdash; authenticate and authorise every request, continuously, regardless of whether it's 'inside' the perimeter. Micro-segmentation and strong identity are core.",
    x: "Even a request from inside the corporate LAN must present valid identity and device posture before reaching an app."
  },
  "Trust But Verify": {
    t: "Trust But Verify",
    d: "Grant a level of trust but continuously MONITOR and VALIDATE that it isn't abused &mdash; logging, auditing and checking behaviour. An older model increasingly superseded by zero trust, but still a useful principle.",
    x: "An admin is trusted with access, but every privileged action is logged and reviewed."
  },
  "Privacy by Design": {
    t: "Privacy by Design",
    d: "Embed privacy protections into systems and processes from the very start and by default &mdash; data minimization, purpose limitation and strong protection built in, not added later. A core GDPR principle.",
    x: "A new feature collects only the data it needs and anonymises it by default, decided at design time."
  },
  "Shared Responsibility": {
    t: "Shared Responsibility",
    d: "In cloud computing, security duties are SPLIT between the provider and the customer. The provider secures the cloud (hardware, hypervisor); the customer secures what they put IN the cloud (data, configuration, access). The split varies by service model (IaaS/PaaS/SaaS).",
    x: "AWS secures the data-centre and hypervisor; the customer must still configure their S3 bucket as private and manage IAM."
  },

  /* ============== SECURITY FRAMEWORKS ============== */
  "Security Frameworks": {
    t: "Security Frameworks & Standards",
    d: "Established frameworks, standards and regulations that structure a security or governance programme. Choose them by industry, geography and obligation &mdash; the exam expects you to recognise what each one is for.",
    x: "A healthcare SaaS in the US must meet HIPAA, may seek ISO 27001 certification, and uses NIST 800-53 controls."
  },
  "ISO 27001": {
    t: "ISO/IEC 27001",
    d: "The international standard for an Information Security Management System (ISMS). It specifies the REQUIREMENTS and is the one you get CERTIFIED against. Risk-based and management-system focused.",
    x: "A company achieves ISO 27001 certification to prove its ISMS meets the standard."
  },
  "ISO 27002": {
    t: "ISO/IEC 27002",
    d: "The companion code of practice that provides detailed GUIDANCE and a catalogue of security controls supporting 27001. It's advisory (you don't get certified against 27002).",
    x: "Teams consult ISO 27002 for best-practice detail on how to implement each control area."
  },
  "NIST 800-53": {
    t: "NIST SP 800-53",
    d: "NIST's comprehensive CATALOGUE of security and privacy controls, used by U.S. federal systems (and widely beyond) within the Risk Management Framework. Controls are selected per system impact level.",
    x: "A federal system selects its control baseline from SP 800-53 based on its FIPS 199 categorisation."
  },
  "COBIT": {
    t: "COBIT",
    d: "Control Objectives for Information and Related Technologies (ISACA) &mdash; a framework for the GOVERNANCE and management of enterprise IT, aligning IT with business goals. Governance-focused, not a control catalogue.",
    x: "An IT governance team uses COBIT to align technology objectives and controls with business strategy."
  },
  "ITIL": {
    t: "ITIL",
    d: "The Information Technology Infrastructure Library &mdash; best practices for IT SERVICE MANAGEMENT (incident, problem, change, service delivery). Operations-focused; supports but isn't primarily a security framework.",
    x: "A service desk follows ITIL processes for change and incident management."
  },
  "HIPAA": {
    t: "HIPAA",
    d: "U.S. law protecting health information (PHI). Its Security and Privacy Rules mandate administrative, physical and technical safeguards for covered entities and business associates.",
    x: "A hospital implements HIPAA safeguards (access controls, encryption, audit logs) to protect patient records."
  },
  "SOX": {
    t: "SOX (Sarbanes-Oxley)",
    d: "U.S. law enacted after corporate-accounting scandals, mandating controls over financial reporting and their integrity. Drives IT general controls and audit (often assessed via the COSO framework).",
    x: "A public company tests IT controls over its financial systems to satisfy SOX compliance."
  },
  "FedRAMP": {
    t: "FedRAMP",
    d: "The U.S. Federal Risk and Authorization Management Program &mdash; a standardised approach to security assessment, authorisation and continuous monitoring for CLOUD products used by federal agencies.",
    x: "A cloud vendor achieves FedRAMP authorisation so federal agencies can use its service."
  },
  "FISMA": {
    t: "FISMA",
    d: "The U.S. Federal Information Security Management/Modernization Act &mdash; requires federal agencies to implement information-security programs (using the NIST RMF and SP 800-53) and report on them.",
    x: "A federal agency runs its security program and reporting to comply with FISMA."
  },
  "Cyber Kill Chain": {
    t: "Cyber Kill Chain",
    d: "Lockheed Martin's model of the STAGES of an intrusion: Reconnaissance &rarr; Weaponization &rarr; Delivery &rarr; Exploitation &rarr; Installation &rarr; Command &amp; Control &rarr; Actions on Objectives. Defenders aim to break the chain at any stage.",
    x: "Blocking a phishing email (Delivery) breaks the kill chain before exploitation can occur."
  }
});
/* ============================================================
   CISSP Domain 3 — Layout 2 hover details (Evaluation Criteria)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-3-data.js. Consumed by cissp-domain-3.js.
   TCSEC ratings and EALs use data-ac-key (tcsec-*, eal*) so the
   long box labels stay clean; ITSEC E0-E6 match by text.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  certaccred: `
    <svg viewBox="0 0 330 110" class="fig" role="img" aria-label="Certification versus accreditation">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Certification vs. Accreditation</text>
      <rect x="12" y="24" width="144" height="74" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="84" y="44" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">CERTIFICATION</text>
      <text x="84" y="62" text-anchor="middle" fill="#f0f0f0" font-size="8.5">TECHNICAL evaluation</text>
      <text x="84" y="76" text-anchor="middle" fill="#f0f0f0" font-size="8.5">against requirements</text>
      <text x="84" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">the engineers test it</text>
      <rect x="174" y="24" width="144" height="74" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="246" y="44" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">ACCREDITATION</text>
      <text x="246" y="62" text-anchor="middle" fill="#f0f0f0" font-size="8.5">MANAGEMENT formally</text>
      <text x="246" y="76" text-anchor="middle" fill="#f0f0f0" font-size="8.5">accepts the risk (ATO)</text>
      <text x="246" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">the boss signs off</text>
    </svg>`,

  criteria: `
    <svg viewBox="0 0 330 120" class="fig" role="img" aria-label="TCSEC versus ITSEC versus Common Criteria">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="10.5" font-weight="700">Evaluation Criteria, in order of history</text>
      <g font-size="8" fill="#e0e0e0">
        <rect x="10" y="22" width="310" height="28" rx="4" fill="#161616" stroke="#a0303f"/><text x="16" y="34"><tspan fill="#ff9ab0" font-weight="700">TCSEC (Orange Book)</tspan> &mdash; US DoD</text><text x="16" y="45" font-size="7.5">Confidentiality only &middot; single standalone system &middot; D&ndash;A</text>
        <rect x="10" y="54" width="310" height="28" rx="4" fill="#161616" stroke="#a0303f"/><text x="16" y="66"><tspan fill="#ff9ab0" font-weight="700">ITSEC</tspan> &mdash; European</text><text x="16" y="77" font-size="7.5">Confidentiality + Integrity &middot; networked &middot; splits F &amp; assurance E0&ndash;E6</text>
        <rect x="10" y="86" width="310" height="28" rx="4" fill="#3a0a0e" stroke="#d31324"/><text x="16" y="98"><tspan fill="#fff" font-weight="700">Common Criteria (ISO 15408)</tspan> &mdash; international, current</text><text x="16" y="109" font-size="7.5">PP + TOE + ST &rarr; assigns EAL1&ndash;EAL7</text>
      </g>
    </svg>`,

  eal: `
    <svg viewBox="0 0 330 130" class="fig" role="img" aria-label="Common Criteria EAL levels">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Common Criteria EALs</text>
      <g font-size="8" fill="#e0e0e0">
        <text x="14" y="30">EAL1 &mdash; Functionally tested</text>
        <text x="14" y="44">EAL2 &mdash; Structurally tested</text>
        <text x="14" y="58">EAL3 &mdash; Methodically tested &amp; checked</text>
        <text x="14" y="72">EAL4 &mdash; Methodically designed, tested, reviewed</text>
        <text x="14" y="86">EAL5 &mdash; Semiformally designed &amp; tested</text>
        <text x="14" y="100">EAL6 &mdash; Semiformally verified, designed &amp; tested</text>
        <text x="14" y="114">EAL7 &mdash; Formally verified, designed &amp; tested</text>
      </g>
      <text x="165" y="127" text-anchor="middle" fill="#a6a6a6" font-size="7.5">EAL4 = most common commercial target</text>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  "Evaluation Criteria": {
    t: "Evaluation Criteria (Domain 3.3)",
    d: "Standardised yardsticks for evaluating how much you can trust a product's security. A product is CERTIFIED (technically evaluated against criteria) and then ACCREDITED (management accepts the risk). The historical criteria are TCSEC, ITSEC, and today's Common Criteria.",
    x: "A firewall is evaluated under Common Criteria to EAL4, then a customer's management accredits it for use.",
    f: "criteria"
  },
  "Certification": {
    t: "Certification",
    d: "The TECHNICAL evaluation of a system's security controls against a set of requirements/criteria &mdash; done by engineers/assessors. It produces the evidence; it does NOT itself authorise use. (Pairs with accreditation.)",
    x: "Security engineers test and document that a system meets its required controls &mdash; that's certification.",
    f: "certaccred"
  },
  "Accreditation": {
    t: "Accreditation",
    d: "MANAGEMENT'S formal acceptance of the certified system and its residual risk &mdash; the authorisation to operate (ATO). A management decision, not a technical one. Certification informs it; accreditation grants permission.",
    x: "After reviewing the certification results, the authorising official signs the ATO accepting the residual risk.",
    f: "certaccred"
  },

  /* ===== TCSEC ===== */
  "TCSEC (Orange Book)": {
    t: "TCSEC (Orange Book)",
    d: "The U.S. DoD Trusted Computer System Evaluation Criteria &mdash; the original (1983) standard. It evaluates CONFIDENTIALITY ONLY and applies to a SINGLE, standalone system (not networks). Ratings run D (minimal) &rarr; C (discretionary) &rarr; B (mandatory) &rarr; A (verified).",
    x: "A 1980s government OS is rated 'C2' under the Orange Book for controlled access protection.",
    f: "criteria"
  },
  "Confidentiality only": {
    t: "Confidentiality Only",
    d: "TCSEC's scope limitation: it measures only how well a system protects CONFIDENTIALITY (secrecy) &mdash; it does not evaluate integrity or availability. This is a key reason it was superseded.",
    x: "TCSEC can rate a system's secrecy controls but says nothing about whether data stays accurate."
  },
  "Single Box only": {
    t: "Single Box Only",
    d: "TCSEC evaluates a single, STANDALONE system &mdash; it predates and doesn't address networked or distributed systems. Another limitation that drove the move to ITSEC and Common Criteria.",
    x: "TCSEC can't rate the security of a networked client-server application &mdash; only an isolated host."
  },
  "Functional Levels": {
    t: "TCSEC Functional Levels (D–A)",
    d: "TCSEC's hierarchy of trust ratings, from least to most secure: D (minimal), C1/C2 (discretionary), B1/B2/B3 (mandatory access control with labels), and A1 (verified design). Higher = more assurance.",
    x: "Moving from C2 to B1 adds mandatory access control with security labels."
  },
  "tcsec-d1": {
    t: "D1 — Minimal Protection",
    d: "The lowest TCSEC rating: a system that was evaluated but FAILED to meet any higher class, or was not tested. Essentially no trusted security.",
    x: "An ordinary OS with no meaningful security controls would fall to D1."
  },
  "tcsec-c1": {
    t: "C1 — Discretionary Security Protection",
    d: "Basic discretionary access control (DAC) with WEAK protection mechanisms &mdash; users can control access to their own objects, suitable for cooperative users at the same sensitivity level.",
    x: "A simple multi-user system where owners set permissions on their own files."
  },
  "tcsec-c2": {
    t: "C2 — Controlled Access Protection",
    d: "Stronger DAC with STRICT login procedures, individual accountability (auditing), and object reuse protection. Historically the common commercial target.",
    x: "A system requiring unique logins, audit trails and memory clearing between users meets C2."
  },
  "tcsec-b1": {
    t: "B1 — Labeled Security Protection",
    d: "The first MANDATORY access control (MAC) level: data carries SECURITY LABELS and access is enforced by the system based on them (not just owner discretion).",
    x: "A system enforcing 'Secret' labels so users can't override classification rules."
  },
  "tcsec-b2": {
    t: "B2 — Structured Protection",
    d: "Adds security labels to ALL objects, a more formal design, and VERIFICATION OF NO COVERT CHANNELS &mdash; analysis to ensure data can't leak through hidden paths.",
    x: "A system formally analysed to confirm there's no covert timing/storage channel leaking secrets."
  },
  "tcsec-b3": {
    t: "B3 — Security Domains",
    d: "Highly structured with security labels, covert-channel verification, AND a requirement to stay secure during START-UP (and recovery). Tamper-resistant reference monitor, minimal complexity.",
    x: "A high-security system that remains trustworthy even through boot and recovery, with verified no covert channels."
  },
  "tcsec-a1": {
    t: "A1 — Verified Design",
    d: "The highest TCSEC rating: functionally equivalent to B3 but with FORMALLY VERIFIED design using mathematical proofs. The strongest assurance the Orange Book offers.",
    x: "A system whose security design is mathematically proven correct earns A1."
  },

  /* ===== ITSEC ===== */
  "ITSEC": {
    t: "ITSEC",
    d: "The European Information Technology Security Evaluation Criteria. Improved on TCSEC by evaluating CONFIDENTIALITY + INTEGRITY (and availability), supporting NETWORKED devices, and SEPARATING functionality from assurance &mdash; assurance is rated E0 (inadequate) to E6 (formal).",
    x: "ITSEC rates a networked product's functionality and, separately, its assurance level from E0 to E6.",
    f: "criteria"
  },
  "Confidentiality + Integrity": {
    t: "Confidentiality + Integrity",
    d: "Unlike TCSEC (confidentiality only), ITSEC evaluates both CONFIDENTIALITY and INTEGRITY (and addresses availability) &mdash; a broader, more realistic security scope.",
    x: "ITSEC can rate a system on keeping data both secret and unaltered."
  },
  "Networked devices": {
    t: "Networked Devices",
    d: "ITSEC extended evaluation to NETWORKED and distributed systems, overcoming TCSEC's single-box limitation.",
    x: "ITSEC can evaluate a product that operates across a network, not just standalone."
  },
  "Same Functional levels as TCSEC": {
    t: "Same Functional Levels as TCSEC",
    d: "ITSEC's functionality classes map onto TCSEC's familiar levels (F-C1, F-B1, etc.), so the functional ratings are comparable &mdash; but ITSEC rates ASSURANCE separately (E0-E6).",
    x: "An ITSEC functionality class corresponds to a TCSEC class, while the E-level rates how thoroughly it was assured."
  },
  "Assurance Levels": {
    t: "ITSEC Assurance Levels (E0–E6)",
    d: "ITSEC's separate scale for how thoroughly the security was evaluated, independent of functionality: E0 (inadequate) up to E6 (formal methods). Separating functionality from assurance was ITSEC's key innovation.",
    x: "Two products with the same functionality can earn different E-levels depending on rigour of evaluation."
  },
  "E0": { t: "E0 — Inadequate Assurance", d: "The lowest ITSEC assurance level &mdash; the evaluation found inadequate assurance (equivalent to a fail).", x: "A product that can't demonstrate basic assurance is rated E0." },
  "E1": { t: "E1 — Basic Assurance", d: "Lowest passing ITSEC assurance: a security target and informal architectural description, with functional testing.", x: "Basic documentation and testing earn E1." },
  "E2": { t: "E2 — Assurance with Configuration Control", d: "Adds an informal detailed design, configuration control and evidence of testing.", x: "A product with configuration management and tested design reaches E2." },
  "E3": { t: "E3 — Source-Level Assurance", d: "Evaluates the source code/hardware drawings corresponding to the security mechanisms.", x: "Source code review of security functions supports E3." },
  "E4": { t: "E4 — Semiformal Assurance", d: "Requires a semiformal model of security policy and a semiformal specification of the security-enforcing functions.", x: "A semiformally specified security model earns E4." },
  "E5": { t: "E5 — Close Correspondence", d: "Requires a close correspondence between the detailed design and the source code.", x: "Demonstrating design-to-code correspondence supports E5." },
  "E6": { t: "E6 — Formal Assurance", d: "The highest ITSEC assurance: formal model of security policy and formal specification, with formal correspondence &mdash; comparable to the most rigorous evaluation.", x: "A formally verified product reaches E6." },

  /* ===== Common Criteria ===== */
  "Common Criteria": {
    t: "Common Criteria (ISO 15408)",
    d: "The international standard that REPLACED TCSEC and ITSEC, enabling mutual recognition of evaluations across countries. Built around a Protection Profile (requirements), a Target of Evaluation (the product), and a Security Target (claims), it assigns an Evaluation Assurance Level (EAL1-EAL7).",
    x: "A product is evaluated against a Protection Profile and earns EAL4, recognised internationally.",
    f: "eal"
  },
  "ISO 15408": {
    t: "ISO/IEC 15408",
    d: "The ISO standard that formalises the Common Criteria, giving it international standing and enabling cross-border mutual recognition of security evaluations.",
    x: "Common Criteria evaluations are governed by ISO/IEC 15408."
  },
  "Protection Profile": {
    t: "Protection Profile (PP)",
    d: "A standardised, implementation-INDEPENDENT statement of the security REQUIREMENTS for a category of products &mdash; what a customer/community 'wants'. Products are evaluated against a PP.",
    x: "A government publishes a firewall Protection Profile listing the security requirements all evaluated firewalls must meet."
  },
  "Target of Evaluation": {
    t: "Target of Evaluation (TOE)",
    d: "The actual product or system being evaluated under Common Criteria &mdash; the 'thing' under the microscope.",
    x: "The specific firewall model submitted for Common Criteria evaluation is the TOE."
  },
  "Security Targets": {
    t: "Security Target (ST)",
    d: "The vendor's statement of the security CLAIMS and features of THEIR specific product (the TOE) &mdash; what it 'provides', and how it meets the requirements. The PP says what's wanted; the ST says what's offered.",
    x: "The firewall vendor's Security Target documents exactly which security functions their product implements."
  },
  "Functional & Assurance Requirements": {
    t: "Functional & Assurance Requirements",
    d: "Common Criteria separates Security Functional Requirements (SFRs &mdash; WHAT the product does) from Security Assurance Requirements (SARs &mdash; how thoroughly it's evaluated). The EAL is derived from the assurance requirements met.",
    x: "SFRs describe the firewall's filtering functions; SARs describe the depth of testing that yields its EAL."
  },
  "Assign EAL": {
    t: "Assign EAL (Evaluation Assurance Level)",
    d: "The outcome of a Common Criteria evaluation: a level from EAL1 (lowest) to EAL7 (highest) reflecting how rigorously the product was designed, tested and verified. Higher EAL = more assurance, not necessarily more features.",
    x: "Most commercial products target EAL4; only specialised high-security products reach EAL6-7.",
    f: "eal"
  },
  "eal1": { t: "EAL1 — Functionally Tested", d: "Lowest assurance: the product was functionally tested. Suitable where some confidence is needed but threats aren't serious.", x: "Basic functional testing with no special rigour.", f: "eal" },
  "eal2": { t: "EAL2 — Structurally Tested", d: "Requires design information and test results &mdash; structural testing. Low-to-moderate assurance.", x: "Vendor provides design docs and evidence of structured testing.", f: "eal" },
  "eal3": { t: "EAL3 — Methodically Tested & Checked", d: "Methodical testing and checking with some design analysis &mdash; moderate assurance without major re-engineering.", x: "A product methodically tested and checked against its design.", f: "eal" },
  "eal4": { t: "EAL4 — Methodically Designed, Tested & Reviewed", d: "The HIGHEST level typically achievable by retrofitting an existing product, and the most COMMON commercial target. Good balance of assurance and cost.", x: "Most enterprise security products are evaluated to EAL4.", f: "eal" },
  "eal5": { t: "EAL5 — Semiformally Designed & Tested", d: "Requires semiformal design and testing &mdash; the product must be designed with assurance in mind. High assurance for specialised products.", x: "A smartcard chip designed for evaluation reaches EAL5.", f: "eal" },
  "eal6": { t: "EAL6 — Semiformally Verified, Designed & Tested", d: "Semiformally VERIFIED design and testing &mdash; for high-risk environments where the cost of rigorous engineering is justified.", x: "A high-security military component targets EAL6.", f: "eal" },
  "eal7": { t: "EAL7 — Formally Verified, Designed & Tested", d: "The HIGHEST assurance: FORMAL (mathematical) verification of design and testing. Feasible only for small, security-critical products.", x: "A tiny, formally proven cryptographic module can reach EAL7.", f: "eal" }
});
/* ============================================================
   CISSP Domain 3 — Layout 3 hover details (Trusted Computing Base)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-3-data.js. Consumed by cissp-domain-3.js.
   Ring boxes use data-ac-key (ring0, ring3) to keep their colon
   labels clean.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  refmon: `
    <svg viewBox="0 0 330 110" class="fig" role="img" aria-label="Reference monitor mediates subject to object">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Reference Monitor</text>
      <defs><marker id="d3rm" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#d31324"/></marker></defs>
      <rect x="12" y="44" width="80" height="32" rx="6" fill="#161616" stroke="#a0303f"/><text x="52" y="64" text-anchor="middle" fill="#f0f0f0" font-size="9">SUBJECT</text>
      <rect x="124" y="38" width="84" height="44" rx="6" fill="#3a0a0e" stroke="#d31324"/><text x="166" y="56" text-anchor="middle" fill="#fff" font-size="8.5" font-weight="700">Reference</text><text x="166" y="68" text-anchor="middle" fill="#fff" font-size="8.5" font-weight="700">Monitor</text>
      <rect x="240" y="44" width="78" height="32" rx="6" fill="#161616" stroke="#a0303f"/><text x="279" y="64" text-anchor="middle" fill="#f0f0f0" font-size="9">OBJECT</text>
      <line x1="92" y1="60" x2="122" y2="60" stroke="#d31324" marker-end="url(#d3rm)"/>
      <line x1="208" y1="60" x2="238" y2="60" stroke="#d31324" marker-end="url(#d3rm)"/>
      <text x="166" y="96" text-anchor="middle" fill="#a6a6a6" font-size="7.5">Complete &middot; Isolated &middot; Verifiable</text>
    </svg>`,

  rings: `
    <svg viewBox="0 0 200 200" class="fig" role="img" aria-label="Protection rings">
      <text x="100" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Protection Rings</text>
      <circle cx="100" cy="110" r="78" fill="none" stroke="#555" stroke-width="1"/>
      <circle cx="100" cy="110" r="58" fill="none" stroke="#777" stroke-width="1"/>
      <circle cx="100" cy="110" r="38" fill="none" stroke="#a0303f" stroke-width="1"/>
      <circle cx="100" cy="110" r="18" fill="#3a0a0e" stroke="#d31324" stroke-width="1.5"/>
      <text x="100" y="113" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">Ring 0</text>
      <text x="100" y="78" text-anchor="middle" fill="#ff9ab0" font-size="7.5">Ring 1 (OS)</text>
      <text x="100" y="58" text-anchor="middle" fill="#cfcfcf" font-size="7.5">Ring 2 (drivers)</text>
      <text x="100" y="38" text-anchor="middle" fill="#9ad0ff" font-size="7.5">Ring 3 (user apps)</text>
      <text x="100" y="196" text-anchor="middle" fill="#a6a6a6" font-size="7.5">Ring 0 = most privileged (kernel)</text>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  "Trusted Computing Base (TCB)": {
    t: "Trusted Computing Base (Domain 3.4)",
    d: "The TOTALITY of protection mechanisms within a computer &mdash; hardware, software and firmware &mdash; that work together to enforce the security policy. The boundary around the TCB is the SECURITY PERIMETER. Anything inside is trusted; the smaller and simpler the TCB, the easier it is to secure and verify.",
    x: "Keeping the kernel, reference monitor and crypto modules small and isolated inside the TCB makes the whole system more trustworthy.",
    f: "refmon"
  },

  /* ===== Reference Monitor Concept ===== */
  "Reference Monitor Concept": {
    t: "Reference Monitor Concept",
    d: "The ABSTRACT machine that mediates ALL access between subjects and objects, enforcing the access-control policy. It must satisfy three properties: complete (always invoked / non-bypassable), isolated (tamperproof), and verifiable (small enough to be tested and proven correct).",
    x: "Every file open request passes through the reference monitor, which checks the rules before allowing access.",
    f: "refmon"
  },
  "Subject": {
    t: "Subject",
    d: "An ACTIVE entity that requests access to a resource &mdash; a user, process, or program acting on a user's behalf. Subjects act ON objects.",
    x: "A running application (the subject) requests to read a file."
  },
  "Mediation": {
    t: "Mediation",
    d: "The reference monitor's core job: intercepting and deciding EVERY access request between subjects and objects, applying the access rules and recording the decision. Complete mediation means nothing slips past.",
    x: "The monitor mediates a process's request to write a file, checking permissions before allowing or denying it."
  },
  "Rules": {
    t: "Rules",
    d: "The access-control rules the reference monitor enforces during mediation &mdash; the policy that decides which subjects may perform which actions on which objects.",
    x: "A rule stating 'only the Finance group may modify the ledger' is enforced on every access attempt."
  },
  "Logging & Monitoring": {
    t: "Logging & Monitoring",
    d: "Recording access decisions and activity so they can be audited and anomalies detected &mdash; providing the accountability part of the reference monitor's role.",
    x: "Every allow/deny decision is logged so security can review who accessed what and when."
  },
  "Object": {
    t: "Object",
    d: "A PASSIVE entity that is accessed &mdash; a file, database record, memory segment, device or resource. Objects are acted upon BY subjects.",
    x: "A document or database row (the object) is the target of a subject's read/write request."
  },
  "Security Kernel": {
    t: "Security Kernel",
    d: "The hardware, firmware and software that IMPLEMENTS the reference monitor concept &mdash; the central, trusted part of the TCB that actually enforces access control. It must be complete, isolated and verifiable.",
    x: "The OS security kernel is the concrete code that performs the access checks the reference monitor describes.",
    f: "refmon"
  },
  "Completeness": {
    t: "Completeness (Complete Mediation)",
    d: "The reference monitor / security kernel must be invoked on EVERY access &mdash; it cannot be bypassed or circumvented. If even one path skips it, security fails.",
    x: "There is no 'back door' API that lets a process reach a file without the monitor checking it first."
  },
  "Isolation": {
    t: "Isolation (Tamperproof)",
    d: "The reference monitor / security kernel must be protected from modification &mdash; tamperproof and isolated from untrusted code, so attackers can't alter the thing enforcing security.",
    x: "The security kernel runs in protected memory that user processes cannot write to."
  },
  "Verifiability": {
    t: "Verifiability",
    d: "The reference monitor / security kernel must be SMALL and SIMPLE enough to be completely analysed, tested and verified to be correct. Complexity is the enemy of assurance.",
    x: "A compact, well-defined kernel can be formally reviewed for correctness; a huge one cannot."
  },

  /* ===== Hardware Components ===== */
  "Hardware Components": {
    t: "Hardware Components",
    d: "The physical parts of the TCB &mdash; the processor that executes instructions and the storage hierarchy that holds code and data. Hardware features (rings, memory protection, TPM) provide the foundation security is built on.",
    x: "CPU privilege levels and memory-protection hardware enforce isolation that software alone couldn't guarantee."
  },
  "Processor": {
    t: "Processor (CPU)",
    d: "The central processing unit that executes instructions. Its hardware features &mdash; privilege rings, execution modes (problem/supervisor), and memory protection &mdash; are fundamental security controls.",
    x: "The CPU switches between user (problem) and kernel (supervisor) mode to protect privileged operations."
  },
  "Storage": {
    t: "Storage (Memory Hierarchy)",
    d: "Where code and data are held: primary (RAM), secondary (disk), and virtual memory. Each has different speed, volatility and security implications (e.g. data remanence on secondary storage).",
    x: "Sensitive keys held in RAM (primary) vanish at power-off, while data on disk (secondary) persists and must be sanitised."
  },
  "Primary": {
    t: "Primary Storage (RAM)",
    d: "Main memory (RAM) directly accessible by the CPU &mdash; fast and VOLATILE (lost at power-off). Holds running code and data. Its volatility is why live forensics captures RAM first.",
    x: "A running program and its data live in RAM (primary storage) while executing."
  },
  "Secondary": {
    t: "Secondary Storage",
    d: "Non-volatile storage (HDD, SSD, tape) that persists without power. Holds data long-term &mdash; and therefore must be encrypted and sanitised, because of data remanence.",
    x: "Files saved to disk (secondary storage) remain after shutdown and need secure deletion at end of life."
  },
  "Virtual Memory": {
    t: "Virtual Memory",
    d: "A technique that combines RAM with disk space (a page/swap file) to present more apparent memory than physically exists, while isolating each process's address space. The swap file can leak sensitive data to disk &mdash; a security concern.",
    x: "When RAM is full, inactive pages are swapped to disk; secrets in that swap file may persist and need protection."
  },

  /* ===== Software Components ===== */
  "Software Components": {
    t: "Software Components",
    d: "The software portions of the TCB &mdash; the system kernel, firmware, and middleware. These must be trustworthy because they enforce (or undermine) security.",
    x: "A compromised kernel or firmware can subvert every control above it, so these are critical TCB elements."
  },
  "System Kernel": {
    t: "System Kernel",
    d: "The core of the operating system, running in the most privileged mode (Ring 0). It manages processes, memory, and hardware and enforces fundamental protections &mdash; the heart of the software TCB.",
    x: "The OS kernel schedules processes and mediates their access to memory and devices."
  },
  "Firmware": {
    t: "Firmware",
    d: "Low-level software embedded in hardware (BIOS/UEFI, device firmware), often stored in ROM/flash. It runs before/below the OS, so compromised firmware (rootkits) is extremely powerful and hard to detect.",
    x: "UEFI firmware initialises hardware at boot; secure boot verifies it hasn't been tampered with."
  },
  "Middleware": {
    t: "Middleware",
    d: "Software that sits BETWEEN the operating system and applications, providing common services (messaging, authentication, database access). It's part of the trust chain and can introduce vulnerabilities.",
    x: "An application server (middleware) brokers requests between web apps and a database."
  },

  /* ===== Protection Mechanisms ===== */
  "Protection Mechanisms": {
    t: "Protection Mechanisms",
    d: "The architectural techniques that enforce isolation and least privilege in a system &mdash; process isolation, processor states, OS modes, the ring model, memory protection, data hiding (abstraction), and defense in depth.",
    x: "Together these keep one process from reading another's memory and stop user code from executing kernel operations."
  },
  "Process Isolation": {
    t: "Process Isolation",
    d: "Keeping each process in its own protected space so it cannot interfere with or read another's memory and resources. Achieved through memory segmentation and CPU time-sharing. Prevents one crashed/malicious process from harming others.",
    x: "A browser tab crashing doesn't take down the whole OS because processes are isolated."
  },
  "Memory Segmentation": {
    t: "Memory Segmentation",
    d: "Dividing memory into protected segments with their own access permissions, so a process can only touch its own segments. A hardware-enforced isolation technique.",
    x: "The CPU faults if a process tries to read a memory segment belonging to another process."
  },
  "Time Division Multiplexing": {
    t: "Time Division Multiplexing",
    d: "Sharing a single CPU among multiple processes by giving each a slice of time, so they appear to run simultaneously while staying isolated. The OS scheduler enforces the separation.",
    x: "The scheduler rapidly switches the CPU between processes, each getting isolated time slices."
  },
  "Processor States": {
    t: "Processor States",
    d: "The CPU operates in privileged or unprivileged states. The PROBLEM (user) state runs applications with limited rights; the SUPERVISOR (kernel) state runs privileged OS code with full access. Switching is tightly controlled.",
    x: "A system call switches the CPU from problem state to supervisor state to perform a privileged operation.",
    f: "states"
  },
  "Problem": {
    t: "Problem State (User)",
    d: "The unprivileged CPU state in which user applications run &mdash; restricted from executing privileged instructions or directly accessing hardware. Corresponds to Ring 3.",
    x: "A word processor runs in problem state and must ask the kernel (via a system call) to access a file.",
    f: "states"
  },
  "Supervisor": {
    t: "Supervisor State (Kernel)",
    d: "The privileged CPU state in which the OS kernel runs with FULL access to instructions, memory and hardware. Corresponds to Ring 0. Only trusted code should run here.",
    x: "The kernel executes a privileged disk I/O instruction in supervisor state on the application's behalf.",
    f: "states"
  },
  "Operating System Modes": {
    t: "Operating System Modes",
    d: "The OS-level equivalent of processor states: USER MODE (restricted, for applications) and KERNEL MODE (privileged, for the OS). The boundary between them is a primary security control.",
    x: "Code in user mode must transition to kernel mode (a controlled gateway) to perform privileged actions.",
    f: "states"
  },
  "User Mode": {
    t: "User Mode",
    d: "The restricted OS execution mode for applications (Ring 3). Code here cannot directly access hardware or other processes' memory and must request kernel services via system calls.",
    x: "Apps run in user mode and call the kernel for any privileged operation.",
    f: "states"
  },
  "Kernel Mode": {
    t: "Kernel Mode",
    d: "The privileged OS execution mode (Ring 0) where the kernel runs with unrestricted access. A bug or compromise here is catastrophic, so kernel code must be minimal and trusted.",
    x: "Device drivers running in kernel mode have full hardware access &mdash; which is why a bad driver can crash the system.",
    f: "states"
  },
  "Ring Protection Model": {
    t: "Ring Protection Model",
    d: "A hierarchical protection architecture of concentric rings, numbered 0 (most privileged) outward to 3 (least). Ring 0 = kernel, Rings 1-2 = OS services/drivers, Ring 3 = user applications. Inner rings are protected from outer ones.",
    x: "User apps in Ring 3 cannot directly execute Ring 0 kernel instructions &mdash; they must go through controlled gates.",
    f: "rings"
  },
  "ring3": {
    t: "Ring 3 — User Programs",
    d: "The OUTERMOST, least-privileged ring where user applications run. Code here has the fewest rights and must request services from inner rings through controlled interfaces.",
    x: "Your browser and editor run in Ring 3 and ask the kernel for file or network access.",
    f: "rings"
  },
  "ring0": {
    t: "Ring 0 — System Kernel",
    d: "The INNERMOST, MOST privileged ring where the OS kernel runs with complete control of the hardware. The most trusted (and most dangerous if compromised) layer.",
    x: "The kernel and core OS run in Ring 0 with full hardware access.",
    f: "rings"
  },
  "Secure Memory Management": {
    t: "Secure Memory Management",
    d: "Hardware/OS techniques that protect memory from unauthorised access and exploitation &mdash; memory protection units, ASLR (address space layout randomisation), DEP/NX (non-executable data), and clearing memory on reuse.",
    x: "DEP stops injected data in a buffer from being executed as code, blocking a class of overflow attacks."
  },
  "Data Hiding": {
    t: "Data Hiding (Abstraction)",
    d: "An architectural principle where the details and data of one layer are HIDDEN from other layers &mdash; components interact only through defined interfaces. Reduces complexity and limits what a compromised layer can reach.",
    x: "An application uses a database through an API without seeing (or being able to corrupt) its internal storage structures."
  },
  "Defence in depth": {
    t: "Defence in Depth",
    d: "Layering multiple, overlapping protection mechanisms so that the failure of any one does not expose the asset. The same principle that runs through the whole architecture &mdash; no single point of failure.",
    x: "Ring protection, memory segmentation, and process isolation together protect the kernel; an attacker must defeat all of them."
  }
});
/* ============================================================
   CISSP Domain 3 — Layout 4 hover details
   (Vulnerabilities in Systems · Web-based Vulnerabilities)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-3-data.js. Consumed by cissp-domain-3.js.
   Long / colon-bearing labels use data-ac-key (m1..m10, xss-*, etc.)
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  xss: `
    <svg viewBox="0 0 330 110" class="fig" role="img" aria-label="XSS types">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">XSS Types</text>
      <g font-size="8.5" fill="#e0e0e0">
        <rect x="10" y="22" width="310" height="24" rx="4" fill="#161616" stroke="#a0303f"/><text x="16" y="37"><tspan fill="#ff9ab0" font-weight="700">Stored / Persistent</tspan> &mdash; script saved on server (DB), hits all viewers</text>
        <rect x="10" y="50" width="310" height="24" rx="4" fill="#3a0a0e" stroke="#d31324"/><text x="16" y="65"><tspan fill="#fff" font-weight="700">Reflected</tspan> &mdash; script in the request/URL, echoed back (most common)</text>
        <rect x="10" y="78" width="310" height="24" rx="4" fill="#161616" stroke="#a0303f"/><text x="16" y="93"><tspan fill="#ff9ab0" font-weight="700">DOM-based</tspan> &mdash; runs entirely in the browser's DOM</text>
      </g>
    </svg>`,

  agginf: `
    <svg viewBox="0 0 330 100" class="fig" role="img" aria-label="Aggregation versus inference">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Aggregation vs. Inference</text>
      <rect x="12" y="24" width="144" height="64" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="84" y="42" text-anchor="middle" fill="#ff9ab0" font-size="9" font-weight="700">AGGREGATION</text>
      <text x="84" y="58" text-anchor="middle" fill="#f0f0f0" font-size="8">combine many low items</text>
      <text x="84" y="72" text-anchor="middle" fill="#a6a6a6" font-size="7.5">= sensitive whole</text>
      <rect x="174" y="24" width="144" height="64" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="246" y="42" text-anchor="middle" fill="#ff9ab0" font-size="9" font-weight="700">INFERENCE</text>
      <text x="246" y="58" text-anchor="middle" fill="#f0f0f0" font-size="8">DEDUCE a secret</text>
      <text x="246" y="72" text-anchor="middle" fill="#a6a6a6" font-size="7.5">from clues you can see</text>
    </svg>`,

  covert: `
    <svg viewBox="0 0 330 90" class="fig" role="img" aria-label="Covert channel types">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Covert Channels</text>
      <rect x="12" y="24" width="144" height="54" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="84" y="44" text-anchor="middle" fill="#ff9ab0" font-size="9" font-weight="700">STORAGE</text>
      <text x="84" y="62" text-anchor="middle" fill="#f0f0f0" font-size="8">hide data in a shared</text>
      <text x="84" y="73" text-anchor="middle" fill="#a6a6a6" font-size="7.5">storage location</text>
      <rect x="174" y="24" width="144" height="54" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="246" y="44" text-anchor="middle" fill="#ff9ab0" font-size="9" font-weight="700">TIMING</text>
      <text x="246" y="62" text-anchor="middle" fill="#f0f0f0" font-size="8">signal via timing /</text>
      <text x="246" y="73" text-anchor="middle" fill="#a6a6a6" font-size="7.5">resource modulation</text>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  /* ============== VULNERABILITIES IN SYSTEMS ============== */
  "Vulnerabilities in Systems": {
    t: "Vulnerabilities in Systems (Domain 3.5)",
    d: "Common weaknesses in system architectures and the controls that mitigate them &mdash; single points of failure, control bypass, race conditions (TOCTOU), emanations, covert channels, aggregation/inference, and mobile-device risks. Each pairs a weakness with its countermeasure.",
    x: "A design review checks for SPOFs, covert channels and inference paths, adding redundancy, covert-channel analysis and polyinstantiation as needed."
  },
  "Single Point of Failure": {
    t: "Single Point of Failure (SPOF)",
    d: "A component whose failure would bring down the entire system &mdash; no backup path exists. Mitigated by building in REDUNDANCY (duplicate components, clustering, failover).",
    x: "A single firewall with no backup is a SPOF; adding a redundant pair removes it."
  },
  "Redundancy": {
    t: "Redundancy",
    d: "Duplicating critical components so the failure of one doesn't stop the system &mdash; the direct mitigation for single points of failure. The basis of high availability.",
    x: "Dual power supplies and clustered servers ensure service continues if one element fails."
  },
  "Bypass Controls": {
    t: "Bypass Controls",
    d: "Ways attackers (or sloppy designs) CIRCUMVENT security controls &mdash; maintenance hooks, backdoors, debug interfaces, or logic that skips checks. Mitigated by removing such paths and adding mitigating/compensating controls.",
    x: "A leftover developer 'maintenance hook' that skips authentication is a bypass control an attacker can exploit."
  },
  "Mitigating Controls": {
    t: "Mitigating Controls",
    d: "Additional or compensating controls deployed to reduce the risk from a weakness that can't be fully removed &mdash; here, to counter control-bypass paths.",
    x: "If a legacy backdoor can't be removed immediately, network isolation and monitoring mitigate the risk."
  },
  "toctou": {
    t: "TOCTOU (Race Condition)",
    d: "Time-Of-Check to Time-Of-Use &mdash; a race condition where a resource's state CHANGES between when it is checked (authorised) and when it is used, letting an attacker substitute something malicious in the gap. Mitigated by reducing the window and re-validating at use.",
    x: "A program checks a file's permissions, then opens it &mdash; an attacker swaps the file in between, so the opened file isn't the one that was checked."
  },
  "reauth": {
    t: "Increase Frequency of Re-authentication",
    d: "A TOCTOU mitigation: re-check authorisation/state closer to (or at) the moment of USE rather than relying on an earlier check &mdash; shrinking the race window so the state can't change unnoticed.",
    x: "Re-verifying access rights immediately before the sensitive operation, not minutes earlier."
  },
  "Emanations": {
    t: "Emanations",
    d: "Unintended electromagnetic signals that LEAK from electronic devices (monitors, cables) and can be intercepted from a distance to reconstruct data. Countered by shielding (TEMPEST), white noise, and control zones.",
    x: "An attacker with the right equipment reconstructs what's on a screen by capturing its electromagnetic emanations."
  },
  "shielding": {
    t: "Shielding (TEMPEST)",
    d: "Physically blocking emanations using shielding &mdash; Faraday cages, shielded cabling and TEMPEST-certified equipment &mdash; so signals can't leak out to be intercepted. TEMPEST is the standard/codename for this.",
    x: "A TEMPEST-shielded room (Faraday cage) prevents any usable signal from escaping."
  },
  "White Noise": {
    t: "White Noise",
    d: "Broadcasting random electromagnetic NOISE to mask or drown out genuine emanations, so an eavesdropper can't separate the real signal. A jamming-style countermeasure to emanation attacks.",
    x: "A noise generator floods the spectrum so captured emanations are unintelligible."
  },
  "Control Zones": {
    t: "Control Zones",
    d: "Defining physical ZONES around sensitive equipment within which emanations are controlled/contained &mdash; combining distance, shielding and access control so signals don't reach an attacker's reachable area.",
    x: "Placing emanating equipment in a central zone far from the building perimeter limits interception range."
  },
  "Covert Channels": {
    t: "Covert Channels",
    d: "Unauthorised communication paths that transfer information in ways the system's policy doesn't intend &mdash; STORAGE channels (hiding data in a shared resource) and TIMING channels (signalling via timing/resource use). Found and reduced through covert-channel ANALYSIS during design.",
    x: "A low-clearance process infers secret data by observing how long a shared resource is locked (a timing channel).",
    f: "covert"
  },
  "Analysis & Design": {
    t: "Analysis & Design (Covert-Channel Analysis)",
    d: "Identifying and eliminating covert channels during the system's ANALYSIS and DESIGN phases (required at higher TCSEC levels). Designing them out early is far easier than detecting them in production.",
    x: "Formal covert-channel analysis during design flags a shared counter that could leak information and removes it.",
    f: "covert"
  },
  "Aggregation & Inference": {
    t: "Aggregation & Inference",
    d: "AGGREGATION = combining many individually-harmless pieces of data into a sensitive whole. INFERENCE = DEDUCING sensitive information from data you ARE allowed to see. Both let users learn things they shouldn't. Mitigated by polyinstantiation and access controls.",
    x: "Knowing an employee's department and that one role exists there, a user infers a classified salary &mdash; an inference attack.",
    f: "agginf"
  },
  "Polyinstantiation": {
    t: "Polyinstantiation",
    d: "Creating MULTIPLE versions of the same data at different classification levels so lower-cleared users see a different (cover) value &mdash; preventing them from inferring the real, higher-classified fact. The classic inference/aggregation defence.",
    x: "A database shows a low-clearance user a benign 'cover story' record while the true classified record exists separately.",
    f: "agginf"
  },

  /* ===== Mobile Devices ===== */
  "Mobile Devices": {
    t: "Mobile Devices",
    d: "Smartphones and tablets introduce their own risks &mdash; loss/theft, insecure apps, mixed personal/work data. Controls include device policy and training, securing remote access, endpoint security (MDM/MAM), and addressing the OWASP Mobile Top 10.",
    x: "An MDM enforces encryption, remote wipe and app policy on phones accessing corporate email."
  },
  "Policy, training & procedures": {
    t: "Policy, Training & Procedures",
    d: "Governance controls for mobile: acceptable-use and BYOD policy, user training, and defined procedures (enrolment, loss reporting, wipe). The human-and-process layer of mobile security.",
    x: "A BYOD policy plus training tells staff how to enrol devices and what to do if one is lost."
  },
  "Remote access security": {
    t: "Remote Access Security",
    d: "Securing how mobile devices CONNECT back to corporate resources &mdash; VPNs, strong authentication/MFA, conditional access and encrypted channels &mdash; since mobiles operate over untrusted networks.",
    x: "A phone must use the corporate VPN with MFA before it can reach internal apps."
  },
  "End-point security": {
    t: "End-point Security",
    d: "Protecting the device itself &mdash; Mobile Device/Application Management (MDM/MAM), encryption, screen locks, remote wipe, containerisation separating work and personal data, and anti-malware.",
    x: "MDM enforces full-disk encryption and can remotely wipe a stolen device."
  },
  "OWASP Mobile Top 10": {
    t: "OWASP Mobile Top 10",
    d: "OWASP's list of the ten most critical mobile-application security risks (M1-M10) &mdash; a checklist for mobile app security covering platform usage, data storage, communication, authentication, cryptography, authorization, code quality, tampering, reverse engineering, and extraneous functionality.",
    x: "Developers review their app against the OWASP Mobile Top 10 before release."
  },
  "m1": { t: "M1 — Improper Platform Usage", d: "Misusing a platform feature or failing to use platform security controls (permissions, Keychain/Keystore, TouchID) correctly.", x: "Storing a secret in plain shared preferences instead of the secure Keystore." },
  "m2": { t: "M2 — Insecure Data Storage", d: "Sensitive data stored insecurely on the device, accessible if it's lost, stolen, or compromised.", x: "Caching credentials or PII in an unencrypted local file or database." },
  "m3": { t: "M3 — Insecure Communication", d: "Transmitting data without proper protection (weak/absent TLS, no cert pinning), allowing interception.", x: "Sending login data over HTTP or accepting invalid TLS certificates." },
  "m4": { t: "M4 — Insecure Authentication", d: "Weak or missing authentication of the user/device, or poor session handling, letting attackers impersonate users.", x: "Allowing actions without verifying the user, or weak offline authentication." },
  "m5": { t: "M5 — Insufficient Cryptography", d: "Using weak algorithms, bad key management, or flawed crypto implementation, so encrypted data can be recovered.", x: "Using a broken cipher or a hard-coded key in the app." },
  "m6": { t: "M6 — Insecure Authorization", d: "Failures in authorization (privilege checks), letting users access functions/data they shouldn't &mdash; distinct from authentication.", x: "A user changes an ID in a request and accesses another user's data (broken authorization)." },
  "m7": { t: "M7 — Client Code Quality", d: "Code-level flaws in the mobile client (buffer overflows, format-string issues, poor input handling) that lead to compromise.", x: "An unvalidated input in the app causes a memory-safety bug." },
  "m8": { t: "M8 — Code Tampering", d: "Attackers modifying the app's code/resources (binary patching, method hooking) to alter behaviour or bypass controls.", x: "A repackaged app with patched logic that removes a licence or security check." },
  "m9": { t: "M9 — Reverse Engineering", d: "Analysing the app binary to reveal source logic, secrets, algorithms or backend details. Countered with obfuscation and not embedding secrets.", x: "Decompiling an APK to extract an embedded API key." },
  "m10": { t: "M10 — Extraneous Functionality", d: "Hidden backdoors, debug code, or test features left in the production app that attackers can exploit.", x: "A disabled-but-present admin debug menu shipped in the released app." },

  /* ============== WEB-BASED VULNERABILITIES ============== */
  "Web-based Vulnerabilities": {
    t: "Web-based Vulnerabilities (Domain 3.5)",
    d: "The common application-layer attacks the exam expects &mdash; cross-site scripting (XSS), cross-site request forgery (CSRF), SQL injection, and the input-validation failures that underlie most of them. Strong server-side input validation is the common defence.",
    x: "An app sanitises and validates all input on the server, encodes output, and uses anti-CSRF tokens and parameterised queries."
  },
  "xss": {
    t: "Cross-Site Scripting (XSS)",
    d: "Injecting malicious SCRIPT into web content that then runs in OTHER users' browsers &mdash; stealing sessions, keystrokes or redirecting. The target is the CLIENT (other users). Types: stored (persistent), reflected (most common), and DOM-based. Defence: output encoding + input validation.",
    x: "An attacker posts a comment containing &lt;script&gt; that steals the cookies of everyone who views it.",
    f: "xss"
  },
  "xss-stored": {
    t: "Stored (Persistent) XSS",
    d: "The malicious script is SAVED on the server (e.g. in a database) and served to every user who views the affected page &mdash; the most damaging XSS because it hits many victims automatically.",
    x: "A script saved in a forum post executes in the browser of every reader of that thread.",
    f: "xss"
  },
  "xss-reflected": {
    t: "Reflected XSS (Most Common)",
    d: "The script is part of the REQUEST (e.g. a URL parameter) and immediately 'reflected' back in the response, executing in the victim's browser. Usually delivered via a crafted link. The most common XSS type.",
    x: "A victim clicks a malicious search link; the search term containing a script is echoed back and runs.",
    f: "xss"
  },
  "xss-dom": {
    t: "DOM-based XSS",
    d: "The vulnerability is entirely CLIENT-SIDE: client JavaScript writes attacker-controlled data into the page DOM unsafely, so the malicious script never needs to touch the server in the response.",
    x: "Client-side JS reads the URL fragment and injects it into the page, executing an attacker's script."
  },
  "toa-client": {
    t: "Target of Attack: Client",
    d: "XSS attacks the CLIENT &mdash; the victim is another USER of the site, whose browser runs the injected script. (Contrast CSRF, which targets the server's trust in the user.)",
    x: "XSS steals the session cookie from the victim user's browser."
  },
  "csrf": {
    t: "Cross-Site Request Forgery (CSRF)",
    d: "Tricking an AUTHENTICATED user's browser into sending an unwanted request to a site they're logged into &mdash; abusing the SERVER's trust in the user's session. The target is the SERVER. Defence: anti-CSRF tokens, SameSite cookies, re-authentication for sensitive actions.",
    x: "A hidden image tag on a malicious page makes the victim's browser silently submit a 'transfer funds' request to their bank.",
    f: "xss"
  },
  "toa-server": {
    t: "Target of Attack: Server",
    d: "CSRF targets the SERVER &mdash; it abuses the trust the server places in the victim's authenticated session to perform actions as that user. (Contrast XSS, which targets the client.)",
    x: "The forged request executes on the server as if the logged-in user intended it."
  },
  "SQL Injection": {
    t: "SQL Injection (SQLi)",
    d: "Injecting malicious SQL into application input so it's executed by the database &mdash; allowing data theft, modification, authentication bypass or deletion. Defence: PARAMETERISED queries (prepared statements), input validation, and least-privilege DB accounts.",
    x: "Entering ' OR '1'='1 into a login field tricks a poorly-built query into authenticating the attacker."
  },
  "Input Validation": {
    t: "Input Validation",
    d: "The foundational defence behind XSS, SQLi and CSRF: never trust input &mdash; validate, sanitise and encode it. Must be done SERVER-SIDE (client-side checks are for usability only and are easily bypassed), preferably with ALLOW lists.",
    x: "The server rejects any input that doesn't match the expected format, regardless of what the client sent."
  },
  "client-vs-server": {
    t: "Client Side vs. Server Side",
    d: "Client-side validation improves user experience but can be TRIVIALLY bypassed (the attacker controls the client). SERVER-SIDE validation is the real security control and must never be skipped. Do both, but trust only the server.",
    x: "An attacker disables the browser's JavaScript checks and submits malicious data &mdash; only server-side validation stops it."
  },
  "allow-vs-deny": {
    t: "Allow Lists vs. Deny Lists",
    d: "An ALLOW list (whitelist) permits only known-good input and rejects everything else &mdash; the more secure default. A DENY list (blacklist) tries to block known-bad input but inevitably misses novel attacks. Prefer allow lists.",
    x: "Accepting only digits for a phone field (allow list) is safer than trying to strip every dangerous character (deny list)."
  }
});
/* ============================================================
   CISSP Domain 3 — topic-specific hover infographics
   Loaded AFTER the layout data files: adds one dedicated figure
   per concept and re-points AC_DETAILS entries at them, so no
   two unrelated topics share the same infographic.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  /* ---------- Layout 4: web-based vulnerabilities ---------- */
  csrf: `
    <svg viewBox="0 0 330 128" class="fig" role="img" aria-label="CSRF attack flow">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">CSRF &mdash; Forged Request Flow</text>
      <rect x="8" y="24" width="92" height="40" rx="6" fill="#161616" stroke="#a0303f"/>
      <text x="54" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">VICTIM</text>
      <text x="54" y="52" text-anchor="middle" fill="#e0e0e0" font-size="7">logged in to bank.com</text>
      <rect x="119" y="24" width="92" height="40" rx="6" fill="#3a0a0e" stroke="#d31324"/>
      <text x="165" y="40" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">EVIL PAGE</text>
      <text x="165" y="52" text-anchor="middle" fill="#e0e0e0" font-size="7">auto-submits a request</text>
      <rect x="230" y="24" width="92" height="40" rx="6" fill="#161616" stroke="#a0303f"/>
      <text x="276" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">BANK SERVER</text>
      <text x="276" y="52" text-anchor="middle" fill="#e0e0e0" font-size="7">executes &quot;transfer&quot;</text>
      <path d="M100 44 L119 44 M211 44 L230 44" stroke="#d31324" stroke-width="1.5"/>
      <text x="165" y="80" text-anchor="middle" fill="#f0f0f0" font-size="8">browser attaches the REAL session cookie &rarr; server trusts it</text>
      <text x="165" y="96" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">Target: SERVER &middot; the user never sees it happen</text>
      <text x="165" y="112" text-anchor="middle" fill="#a6a6a6" font-size="7.5">Defence: anti-CSRF tokens &middot; SameSite cookies &middot; re-auth for sensitive actions</text>
    </svg>`,

  sqli: `
    <svg viewBox="0 0 330 118" class="fig" role="img" aria-label="SQL injection">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">SQL Injection</text>
      <rect x="10" y="22" width="310" height="22" rx="4" fill="#161616" stroke="#a0303f"/>
      <text x="16" y="36" fill="#e0e0e0" font-size="8">Login input: <tspan fill="#ff9ab0" font-weight="700">&apos; OR &apos;1&apos;=&apos;1</tspan></text>
      <rect x="10" y="50" width="310" height="22" rx="4" fill="#3a0a0e" stroke="#d31324"/>
      <text x="16" y="64" fill="#fff" font-size="7.5">SELECT * FROM users WHERE pass=&apos;<tspan fill="#ff9ab0">&apos; OR &apos;1&apos;=&apos;1</tspan>&apos;  &rarr; always TRUE</text>
      <rect x="10" y="78" width="310" height="22" rx="4" fill="#161616" stroke="#a0303f"/>
      <text x="16" y="92" fill="#e0e0e0" font-size="8"><tspan fill="#ff9ab0" font-weight="700">Defence:</tspan> prepared statements &middot; input validation &middot; least-privilege DB account</text>
      <text x="165" y="112" text-anchor="middle" fill="#a6a6a6" font-size="7.5">attacker input is executed as QUERY LOGIC instead of data</text>
    </svg>`,

  toctou: `
    <svg viewBox="0 0 330 108" class="fig" role="img" aria-label="TOCTOU race condition timeline">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">TOCTOU &mdash; the Race Window</text>
      <line x1="20" y1="60" x2="310" y2="60" stroke="#a0303f" stroke-width="2"/>
      <circle cx="55" cy="60" r="5" fill="#161616" stroke="#ff9ab0" stroke-width="2"/>
      <text x="55" y="42" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">CHECK</text>
      <text x="55" y="80" text-anchor="middle" fill="#e0e0e0" font-size="7">file OK &#10003;</text>
      <circle cx="165" cy="60" r="5" fill="#3a0a0e" stroke="#d31324" stroke-width="2"/>
      <text x="165" y="42" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">ATTACKER SWAPS</text>
      <text x="165" y="80" text-anchor="middle" fill="#e0e0e0" font-size="7">state changes in the gap</text>
      <circle cx="275" cy="60" r="5" fill="#161616" stroke="#ff9ab0" stroke-width="2"/>
      <text x="275" y="42" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">USE</text>
      <text x="275" y="80" text-anchor="middle" fill="#e0e0e0" font-size="7">malicious file opened &#10007;</text>
      <text x="165" y="100" text-anchor="middle" fill="#a6a6a6" font-size="7.5">Defence: shrink the window &mdash; re-validate / re-authenticate at time of USE</text>
    </svg>`,

  spof: `
    <svg viewBox="0 0 330 108" class="fig" role="img" aria-label="Single point of failure versus redundancy">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">SPOF vs. Redundancy</text>
      <rect x="12" y="22" width="146" height="70" rx="8" fill="#161616" stroke="#d31324"/>
      <text x="85" y="38" text-anchor="middle" fill="#ff9ab0" font-size="8.5" font-weight="700">ONE FIREWALL</text>
      <rect x="60" y="46" width="50" height="18" rx="3" fill="#3a0a0e" stroke="#d31324"/>
      <text x="85" y="58" text-anchor="middle" fill="#fff" font-size="8">FW &#10007;</text>
      <text x="85" y="82" text-anchor="middle" fill="#e0e0e0" font-size="7.5">it fails &rarr; everything down</text>
      <rect x="172" y="22" width="146" height="70" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="245" y="38" text-anchor="middle" fill="#ff9ab0" font-size="8.5" font-weight="700">REDUNDANT PAIR</text>
      <rect x="192" y="46" width="46" height="18" rx="3" fill="#101010" stroke="#a0303f"/>
      <text x="215" y="58" text-anchor="middle" fill="#e0e0e0" font-size="8">FW-A &#10007;</text>
      <rect x="252" y="46" width="46" height="18" rx="3" fill="#3a0a0e" stroke="#d31324"/>
      <text x="275" y="58" text-anchor="middle" fill="#fff" font-size="8">FW-B &#10003;</text>
      <text x="245" y="82" text-anchor="middle" fill="#e0e0e0" font-size="7.5">failover keeps service up</text>
    </svg>`,

  eman: `
    <svg viewBox="0 0 330 118" class="fig" role="img" aria-label="Emanations and countermeasures">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Emanations &mdash; Signal Leakage</text>
      <rect x="20" y="28" width="56" height="38" rx="5" fill="#161616" stroke="#a0303f"/>
      <text x="48" y="45" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">MONITOR</text>
      <text x="48" y="58" text-anchor="middle" fill="#e0e0e0" font-size="7">emits EM signal</text>
      <path d="M84 47 q14 -12 28 0 M84 47 q14 12 28 0" stroke="#d31324" fill="none" stroke-width="1.3"/>
      <path d="M96 47 q20 -18 40 0 M96 47 q20 18 40 0" stroke="#a0303f" fill="none" stroke-width="1"/>
      <rect x="150" y="28" width="70" height="38" rx="5" fill="#3a0a0e" stroke="#d31324"/>
      <text x="185" y="45" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">ANTENNA</text>
      <text x="185" y="58" text-anchor="middle" fill="#e0e0e0" font-size="7">reconstructs screen</text>
      <g font-size="7.2" fill="#e0e0e0">
        <rect x="12" y="78" width="98" height="30" rx="5" fill="#161616" stroke="#a0303f"/>
        <text x="61" y="90" text-anchor="middle" fill="#ff9ab0" font-weight="700" font-size="7.5">SHIELDING (TEMPEST)</text>
        <text x="61" y="101" text-anchor="middle">block the signal</text>
        <rect x="116" y="78" width="98" height="30" rx="5" fill="#161616" stroke="#a0303f"/>
        <text x="165" y="90" text-anchor="middle" fill="#ff9ab0" font-weight="700" font-size="7.5">WHITE NOISE</text>
        <text x="165" y="101" text-anchor="middle">mask / drown it out</text>
        <rect x="220" y="78" width="98" height="30" rx="5" fill="#161616" stroke="#a0303f"/>
        <text x="269" y="90" text-anchor="middle" fill="#ff9ab0" font-weight="700" font-size="7.5">CONTROL ZONES</text>
        <text x="269" y="101" text-anchor="middle">distance + access control</text>
      </g>
    </svg>`,

  valid: `
    <svg viewBox="0 0 330 112" class="fig" role="img" aria-label="Input validation: allow versus deny lists, client versus server">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Input Validation Done Right</text>
      <rect x="12" y="24" width="146" height="56" rx="8" fill="#3a0a0e" stroke="#d31324"/>
      <text x="85" y="40" text-anchor="middle" fill="#fff" font-size="8.5" font-weight="700">ALLOW LIST &#10003;</text>
      <text x="85" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7.5">permit only known-good</text>
      <text x="85" y="68" text-anchor="middle" fill="#a6a6a6" font-size="7">rejects everything else &mdash; safer</text>
      <rect x="172" y="24" width="146" height="56" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="245" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8.5" font-weight="700">DENY LIST &#10007;</text>
      <text x="245" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7.5">block known-bad only</text>
      <text x="245" y="68" text-anchor="middle" fill="#a6a6a6" font-size="7">always misses novel attacks</text>
      <text x="165" y="98" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">Validate SERVER-SIDE &mdash; the attacker controls the client</text>
    </svg>`,

  /* ---------- Layout 1: architecture & models ---------- */
  esa: `
    <svg viewBox="0 0 330 112" class="fig" role="img" aria-label="Enterprise security architecture frameworks">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Enterprise Architecture Frameworks</text>
      <rect x="10" y="24" width="98" height="76" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="59" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8.5" font-weight="700">ZACHMAN</text>
      <text x="59" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7">6&times;6 matrix</text>
      <text x="59" y="67" text-anchor="middle" fill="#e0e0e0" font-size="6.8">what &middot; how &middot; where</text>
      <text x="59" y="78" text-anchor="middle" fill="#e0e0e0" font-size="6.8">who &middot; when &middot; why</text>
      <text x="59" y="92" text-anchor="middle" fill="#a6a6a6" font-size="6.5">viewpoints, not security</text>
      <rect x="116" y="24" width="98" height="76" rx="8" fill="#3a0a0e" stroke="#d31324"/>
      <text x="165" y="40" text-anchor="middle" fill="#fff" font-size="8.5" font-weight="700">SABSA</text>
      <text x="165" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7">SECURITY-driven</text>
      <text x="165" y="67" text-anchor="middle" fill="#e0e0e0" font-size="6.8">layers: contextual &rarr;</text>
      <text x="165" y="78" text-anchor="middle" fill="#e0e0e0" font-size="6.8">conceptual &rarr; component</text>
      <text x="165" y="92" text-anchor="middle" fill="#a6a6a6" font-size="6.5">risk-based, business-aligned</text>
      <rect x="222" y="24" width="98" height="76" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="271" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8.5" font-weight="700">TOGAF</text>
      <text x="271" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7">ADM cycle</text>
      <text x="271" y="67" text-anchor="middle" fill="#e0e0e0" font-size="6.8">business &middot; data</text>
      <text x="271" y="78" text-anchor="middle" fill="#e0e0e0" font-size="6.8">application &middot; technology</text>
      <text x="271" y="92" text-anchor="middle" fill="#a6a6a6" font-size="6.5">general EA method</text>
    </svg>`,

  cw: `
    <svg viewBox="0 0 330 118" class="fig" role="img" aria-label="Clark-Wilson model">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Clark-Wilson &mdash; Access Triple</text>
      <rect x="14" y="28" width="80" height="34" rx="6" fill="#161616" stroke="#a0303f"/>
      <text x="54" y="43" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">SUBJECT</text>
      <text x="54" y="55" text-anchor="middle" fill="#e0e0e0" font-size="7">authenticated user</text>
      <rect x="125" y="28" width="80" height="34" rx="6" fill="#3a0a0e" stroke="#d31324"/>
      <text x="165" y="43" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">TP</text>
      <text x="165" y="55" text-anchor="middle" fill="#e0e0e0" font-size="7">well-formed transaction</text>
      <rect x="236" y="28" width="80" height="34" rx="6" fill="#161616" stroke="#a0303f"/>
      <text x="276" y="43" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">CDI</text>
      <text x="276" y="55" text-anchor="middle" fill="#e0e0e0" font-size="7">constrained data item</text>
      <path d="M94 45 L125 45 M205 45 L236 45" stroke="#d31324" stroke-width="1.5"/>
      <text x="165" y="82" text-anchor="middle" fill="#f0f0f0" font-size="8">NO direct access &mdash; every change goes through a certified program (TP)</text>
      <text x="165" y="97" text-anchor="middle" fill="#ff9ab0" font-size="7.5" font-weight="700">+ Separation of Duties &middot; IVP verifies integrity &middot; commercial INTEGRITY model</text>
      <text x="165" y="111" text-anchor="middle" fill="#a6a6a6" font-size="7">UDI = unconstrained input that a TP must validate first</text>
    </svg>`,

  bn: `
    <svg viewBox="0 0 330 112" class="fig" role="img" aria-label="Brewer-Nash Chinese Wall model">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Brewer-Nash &mdash; the Chinese Wall</text>
      <rect x="14" y="26" width="110" height="52" rx="8" fill="#3a0a0e" stroke="#d31324"/>
      <text x="69" y="44" text-anchor="middle" fill="#fff" font-size="8.5" font-weight="700">BANK A</text>
      <text x="69" y="58" text-anchor="middle" fill="#f0f0f0" font-size="7.5">consultant WORKED here</text>
      <text x="69" y="70" text-anchor="middle" fill="#a6a6a6" font-size="7">access granted &#10003;</text>
      <rect x="152" y="22" width="26" height="62" rx="4" fill="#101010" stroke="#d31324" stroke-width="2"/>
      <text x="165" y="58" text-anchor="middle" fill="#ff9ab0" font-size="7" font-weight="700" transform="rotate(-90 165 55)">THE WALL</text>
      <rect x="206" y="26" width="110" height="52" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="261" y="44" text-anchor="middle" fill="#ff9ab0" font-size="8.5" font-weight="700">BANK B</text>
      <text x="261" y="58" text-anchor="middle" fill="#f0f0f0" font-size="7.5">same conflict-of-interest class</text>
      <text x="261" y="70" text-anchor="middle" fill="#a6a6a6" font-size="7">now BLOCKED &#10007;</text>
      <text x="165" y="102" text-anchor="middle" fill="#e0e0e0" font-size="7.5">access rights change DYNAMICALLY based on what you have already touched</text>
    </svg>`,

  matrix: `
    <svg viewBox="0 0 330 118" class="fig" role="img" aria-label="Access matrix models">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Access-Matrix Models</text>
      <g font-size="7.5">
        <rect x="14" y="24" width="150" height="72" rx="6" fill="#161616" stroke="#a0303f"/>
        <text x="89" y="38" text-anchor="middle" fill="#ff9ab0" font-weight="700" font-size="8">THE MATRIX</text>
        <g fill="#e0e0e0" font-size="7">
          <text x="52" y="52" text-anchor="middle" font-weight="700"> </text>
          <text x="89" y="52" text-anchor="middle" fill="#a6a6a6">File1</text>
          <text x="129" y="52" text-anchor="middle" fill="#a6a6a6">File2</text>
          <text x="42" y="66" fill="#a6a6a6">Alice</text>
          <text x="89" y="66" text-anchor="middle">r w</text>
          <text x="129" y="66" text-anchor="middle">r</text>
          <text x="42" y="82" fill="#a6a6a6">Bob</text>
          <text x="89" y="82" text-anchor="middle">&mdash;</text>
          <text x="129" y="82" text-anchor="middle">r w x</text>
        </g>
        <rect x="176" y="24" width="140" height="34" rx="6" fill="#3a0a0e" stroke="#d31324"/>
        <text x="246" y="38" text-anchor="middle" fill="#fff" font-weight="700" font-size="7.5">GRAHAM-DENNING</text>
        <text x="246" y="51" text-anchor="middle" fill="#f0f0f0" font-size="6.8">8 rules: create/delete subject &amp; object, grant/transfer/delete rights&hellip;</text>
        <rect x="176" y="62" width="140" height="34" rx="6" fill="#161616" stroke="#a0303f"/>
        <text x="246" y="76" text-anchor="middle" fill="#ff9ab0" font-weight="700" font-size="7.5">HRU</text>
        <text x="246" y="89" text-anchor="middle" fill="#e0e0e0" font-size="6.8">extends G-D: can rights ever LEAK? (safety problem)</text>
      </g>
      <text x="165" y="112" text-anchor="middle" fill="#a6a6a6" font-size="7">rows = subjects &middot; columns = objects &middot; cells = rights</text>
    </svg>`,

  did: `
    <svg viewBox="0 0 330 118" class="fig" role="img" aria-label="Defense in depth layers">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Defense in Depth &mdash; Layered Controls</text>
      <rect x="20" y="22" width="290" height="88" rx="10" fill="#161616" stroke="#a0303f"/>
      <text x="165" y="34" text-anchor="middle" fill="#a6a6a6" font-size="7">POLICIES &middot; PHYSICAL</text>
      <rect x="45" y="39" width="240" height="66" rx="9" fill="#1b1b1b" stroke="#a0303f"/>
      <text x="165" y="50" text-anchor="middle" fill="#a6a6a6" font-size="7">PERIMETER / NETWORK</text>
      <rect x="70" y="55" width="190" height="45" rx="8" fill="#242021" stroke="#a0303f"/>
      <text x="165" y="66" text-anchor="middle" fill="#e0e0e0" font-size="7">HOST &middot; APPLICATION</text>
      <rect x="105" y="71" width="120" height="24" rx="6" fill="#3a0a0e" stroke="#d31324"/>
      <text x="165" y="86" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">DATA</text>
    </svg>`,

  zt: `
    <svg viewBox="0 0 330 108" class="fig" role="img" aria-label="Zero trust versus perimeter trust">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Zero Trust &mdash; Never Trust, Always Verify</text>
      <rect x="12" y="24" width="146" height="60" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="85" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">OLD: PERIMETER TRUST</text>
      <text x="85" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7.2">hard shell, soft centre &mdash;</text>
      <text x="85" y="66" text-anchor="middle" fill="#f0f0f0" font-size="7.2">once inside, you are trusted</text>
      <text x="85" y="78" text-anchor="middle" fill="#a6a6a6" font-size="7">one breach &rarr; free movement &#10007;</text>
      <rect x="172" y="24" width="146" height="60" rx="8" fill="#3a0a0e" stroke="#d31324"/>
      <text x="245" y="40" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">ZERO TRUST</text>
      <text x="245" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7.2">EVERY request verified:</text>
      <text x="245" y="66" text-anchor="middle" fill="#f0f0f0" font-size="7.2">identity + device + context</text>
      <text x="245" y="78" text-anchor="middle" fill="#a6a6a6" font-size="7">micro-segmentation &middot; least privilege &#10003;</text>
      <text x="165" y="101" text-anchor="middle" fill="#a6a6a6" font-size="7.5">location on the network no longer implies trust</text>
    </svg>`,

  lpsod: `
    <svg viewBox="0 0 330 104" class="fig" role="img" aria-label="Least privilege and separation of duties">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Least Privilege &amp; Separation of Duties</text>
      <rect x="12" y="24" width="146" height="58" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="85" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">LEAST PRIVILEGE</text>
      <text x="85" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7.2">only the rights needed</text>
      <text x="85" y="66" text-anchor="middle" fill="#f0f0f0" font-size="7.2">for the job, no more</text>
      <text x="85" y="78" text-anchor="middle" fill="#a6a6a6" font-size="7">limits blast radius of compromise</text>
      <rect x="172" y="24" width="146" height="58" rx="8" fill="#3a0a0e" stroke="#d31324"/>
      <text x="245" y="40" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">SEPARATION OF DUTIES</text>
      <text x="245" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7.2">split a critical task so no ONE</text>
      <text x="245" y="66" text-anchor="middle" fill="#f0f0f0" font-size="7.2">person completes it alone</text>
      <text x="245" y="78" text-anchor="middle" fill="#a6a6a6" font-size="7">forces collusion to commit fraud</text>
    </svg>`,

  fwcmp: `
    <svg viewBox="0 0 330 150" class="fig" role="img" aria-label="Security frameworks comparison">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Frameworks at a Glance</text>
      <g font-size="7.4" fill="#e0e0e0">
        <rect x="10" y="20" width="310" height="17" rx="3" fill="#3a0a0e" stroke="#d31324"/><text x="16" y="32"><tspan fill="#fff" font-weight="700">ISO 27001</tspan> &mdash; ISMS requirements, the standard you CERTIFY against</text>
        <rect x="10" y="41" width="310" height="17" rx="3" fill="#161616" stroke="#a0303f"/><text x="16" y="53"><tspan fill="#ff9ab0" font-weight="700">ISO 27002</tspan> &mdash; detailed control GUIDANCE (how), not certifiable</text>
        <rect x="10" y="62" width="310" height="17" rx="3" fill="#161616" stroke="#a0303f"/><text x="16" y="74"><tspan fill="#ff9ab0" font-weight="700">NIST 800-53</tspan> &mdash; US federal control CATALOG (used with FISMA/FedRAMP)</text>
        <rect x="10" y="83" width="310" height="17" rx="3" fill="#161616" stroke="#a0303f"/><text x="16" y="95"><tspan fill="#ff9ab0" font-weight="700">COBIT</tspan> &mdash; IT GOVERNANCE &middot; <tspan fill="#ff9ab0" font-weight="700">ITIL</tspan> &mdash; IT service management</text>
        <rect x="10" y="104" width="310" height="17" rx="3" fill="#161616" stroke="#a0303f"/><text x="16" y="116"><tspan fill="#ff9ab0" font-weight="700">HIPAA / SOX / FISMA</tspan> &mdash; LAWS (health &middot; financial reporting &middot; US federal)</text>
        <rect x="10" y="125" width="310" height="17" rx="3" fill="#161616" stroke="#a0303f"/><text x="16" y="137"><tspan fill="#ff9ab0" font-weight="700">FedRAMP</tspan> &mdash; US government CLOUD authorization program</text>
      </g>
    </svg>`,

  killchain: `
    <svg viewBox="0 0 330 96" class="fig" role="img" aria-label="Cyber kill chain phases">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Cyber Kill Chain &mdash; 7 Phases</text>
      <g font-size="6.6" fill="#fff" font-weight="700" text-anchor="middle">
        <rect x="6"   y="26" width="42" height="22" rx="4" fill="#161616" stroke="#a0303f"/><text x="27"  y="40" fill="#ff9ab0">Recon</text>
        <rect x="52"  y="26" width="46" height="22" rx="4" fill="#161616" stroke="#a0303f"/><text x="75"  y="40" fill="#ff9ab0">Weaponize</text>
        <rect x="102" y="26" width="42" height="22" rx="4" fill="#161616" stroke="#a0303f"/><text x="123" y="40" fill="#ff9ab0">Deliver</text>
        <rect x="148" y="26" width="42" height="22" rx="4" fill="#3a0a0e" stroke="#d31324"/><text x="169" y="40">Exploit</text>
        <rect x="194" y="26" width="42" height="22" rx="4" fill="#161616" stroke="#a0303f"/><text x="215" y="40" fill="#ff9ab0">Install</text>
        <rect x="240" y="26" width="36" height="22" rx="4" fill="#161616" stroke="#a0303f"/><text x="258" y="40" fill="#ff9ab0">C2</text>
        <rect x="280" y="26" width="44" height="22" rx="4" fill="#161616" stroke="#a0303f"/><text x="302" y="40" fill="#ff9ab0">Actions</text>
      </g>
      <text x="165" y="66" text-anchor="middle" fill="#f0f0f0" font-size="7.5">break ANY link and the attack fails &mdash; map controls to each phase</text>
      <text x="165" y="82" text-anchor="middle" fill="#a6a6a6" font-size="7">Lockheed Martin model for understanding &amp; disrupting intrusions</text>
    </svg>`
});

/* Re-point each detail entry at its topic-specific figure */
(function () {
  var F = {
    /* layout 4 */
    "csrf": "csrf", "toa-server": "csrf",
    "SQL Injection": "sqli",
    "toctou": "toctou", "reauth": "toctou",
    "Single Point of Failure": "spof", "Redundancy": "spof",
    "Emanations": "eman", "shielding": "eman", "White Noise": "eman", "Control Zones": "eman",
    "Input Validation": "valid", "client-vs-server": "valid", "allow-vs-deny": "valid",
    "xss-dom": "xss", "toa-client": "xss",
    /* layout 1 — architecture & models */
    "Enterprise Security Architecture": "esa", "Zachman": "esa", "Sabsa": "esa", "TOGAF": "esa",
    "Clark-Wilson": "cw", "cw-goals": "cw", "cw-rules": "cw",
    "brewer-nash": "bn", "prevent-coi": "bn",
    "graham-denning": "matrix", "hru": "matrix",
    /* layout 1 — secure design principles */
    "Defense in Depth": "did",
    "Zero Trust": "zt", "Trust But Verify": "zt",
    "Least Privilege": "lpsod", "Separation of Duties (SoD)": "lpsod",
    /* layout 1 — frameworks */
    "Security Frameworks": "fwcmp",
    "ISO 27001": "fwcmp", "ISO 27002": "fwcmp", "NIST 800-53": "fwcmp",
    "COBIT": "fwcmp", "ITIL": "fwcmp", "HIPAA": "fwcmp", "SOX": "fwcmp",
    "FedRAMP": "fwcmp", "FISMA": "fwcmp",
    "Cyber Kill Chain": "killchain"
  };
  for (var k in F) { if (window.AC_DETAILS[k]) { window.AC_DETAILS[k].f = F[k]; } }
})();

/* ===== Topic-specific figures: BLP vs Biba split, processor states
   vs OS modes split (previously shared one combined figure each) ===== */
Object.assign(window.AC_FIGS, {
  blp: `
    <svg viewBox="0 0 330 138" class="fig" role="img" aria-label="Bell-LaPadula confidentiality rules">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Bell-LaPadula &mdash; CONFIDENTIALITY</text>
      <rect x="90" y="22" width="150" height="20" rx="4" fill="#3a0a0e" stroke="#d31324"/>
      <text x="165" y="35" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">TOP SECRET</text>
      <rect x="90" y="58" width="150" height="20" rx="4" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="165" y="71" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">SECRET &larr; subject sits here</text>
      <rect x="90" y="94" width="150" height="20" rx="4" fill="#161616" stroke="#a0303f"/>
      <text x="165" y="107" text-anchor="middle" fill="#e0e0e0" font-size="8">CONFIDENTIAL</text>
      <path d="M78 62 L78 40" stroke="#d31324" stroke-width="1.5"/>
      <text x="46" y="46" fill="#ff9ab0" font-size="7" font-weight="700">NO READ UP</text>
      <text x="46" y="56" fill="#a6a6a6" font-size="6.5">simple property</text>
      <path d="M252 74 L252 96" stroke="#d31324" stroke-width="1.5"/>
      <text x="258" y="86" fill="#ff9ab0" font-size="7" font-weight="700">NO WRITE</text>
      <text x="258" y="95" fill="#ff9ab0" font-size="7" font-weight="700">DOWN</text>
      <text x="258" y="104" fill="#a6a6a6" font-size="6.5">star property</text>
      <text x="165" y="131" text-anchor="middle" fill="#a6a6a6" font-size="7">strong star: read AND write only at your own level &middot; first mathematical model</text>
    </svg>`,

  biba: `
    <svg viewBox="0 0 330 138" class="fig" role="img" aria-label="Biba integrity rules">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Biba &mdash; INTEGRITY (inverse of BLP)</text>
      <rect x="90" y="22" width="150" height="20" rx="4" fill="#3a0a0e" stroke="#d31324"/>
      <text x="165" y="35" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">HIGH INTEGRITY (trusted)</text>
      <rect x="90" y="58" width="150" height="20" rx="4" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="165" y="71" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">MEDIUM &larr; subject sits here</text>
      <rect x="90" y="94" width="150" height="20" rx="4" fill="#161616" stroke="#a0303f"/>
      <text x="165" y="107" text-anchor="middle" fill="#e0e0e0" font-size="8">LOW INTEGRITY (dirty)</text>
      <path d="M78 74 L78 96" stroke="#d31324" stroke-width="1.5"/>
      <text x="34" y="82" fill="#ff9ab0" font-size="7" font-weight="700">NO READ DOWN</text>
      <text x="34" y="92" fill="#a6a6a6" font-size="6.5">simple integrity</text>
      <path d="M252 62 L252 40" stroke="#d31324" stroke-width="1.5"/>
      <text x="258" y="50" fill="#ff9ab0" font-size="7" font-weight="700">NO WRITE UP</text>
      <text x="258" y="60" fill="#a6a6a6" font-size="6.5">star integrity</text>
      <text x="165" y="127" text-anchor="middle" fill="#a6a6a6" font-size="7">don't trust dirty data, don't let dirty subjects corrupt clean data</text>
    </svg>`,

  procstates: `
    <svg viewBox="0 0 330 104" class="fig" role="img" aria-label="Processor states">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Processor States</text>
      <rect x="12" y="24" width="146" height="58" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="85" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8.5" font-weight="700">PROBLEM STATE</text>
      <text x="85" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7.2">runs user applications</text>
      <text x="85" y="66" text-anchor="middle" fill="#f0f0f0" font-size="7.2">LIMITED instruction subset</text>
      <text x="85" y="78" text-anchor="middle" fill="#a6a6a6" font-size="6.8">"problem" = the app's problem, not an error</text>
      <rect x="172" y="24" width="146" height="58" rx="8" fill="#3a0a0e" stroke="#d31324"/>
      <text x="245" y="40" text-anchor="middle" fill="#fff" font-size="8.5" font-weight="700">SUPERVISOR STATE</text>
      <text x="245" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7.2">privileged &mdash; OS kernel work</text>
      <text x="245" y="66" text-anchor="middle" fill="#f0f0f0" font-size="7.2">FULL instruction set</text>
      <text x="245" y="78" text-anchor="middle" fill="#a6a6a6" font-size="6.8">direct hardware access allowed</text>
      <text x="165" y="98" text-anchor="middle" fill="#a6a6a6" font-size="7">the CPU enforces which instructions each state may execute</text>
    </svg>`,

  osmodes: `
    <svg viewBox="0 0 330 104" class="fig" role="img" aria-label="Operating system modes">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Operating System Modes</text>
      <rect x="12" y="24" width="146" height="58" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="85" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8.5" font-weight="700">USER MODE (ring 3)</text>
      <text x="85" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7.2">applications run here</text>
      <text x="85" y="66" text-anchor="middle" fill="#f0f0f0" font-size="7.2">no direct hardware access</text>
      <text x="85" y="78" text-anchor="middle" fill="#a6a6a6" font-size="6.8">must ask the kernel via system calls</text>
      <rect x="172" y="24" width="146" height="58" rx="8" fill="#3a0a0e" stroke="#d31324"/>
      <text x="245" y="40" text-anchor="middle" fill="#fff" font-size="8.5" font-weight="700">KERNEL MODE (ring 0)</text>
      <text x="245" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7.2">OS core &mdash; full privilege</text>
      <text x="245" y="66" text-anchor="middle" fill="#f0f0f0" font-size="7.2">manages memory, devices, CPU</text>
      <text x="245" y="78" text-anchor="middle" fill="#a6a6a6" font-size="6.8">a crash here takes the system down</text>
      <text x="165" y="98" text-anchor="middle" fill="#a6a6a6" font-size="7">keep as little code as possible in kernel mode (minimise the TCB)</text>
    </svg>`
});

(function () {
  var F = {
    "bell-lapadula": "blp", "Confidentiality": "blp",
    "Simple Security Property": "blp", "Star Property": "blp", "Strong Star Property": "blp",
    "Biba": "biba", "Integrity": "biba",
    "Simple Integrity Property": "biba", "Star Integrity Property": "biba",
    "Processor States": "procstates", "Problem": "procstates", "Supervisor": "procstates",
    "Operating System Modes": "osmodes", "User Mode": "osmodes", "Kernel Mode": "osmodes"
  };
  for (var k in F) { if (window.AC_DETAILS[k]) { window.AC_DETAILS[k].f = F[k]; } }
})();

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

  /* ---- Common Criteria: EAL ladder position per level ---- */
  var EALS = [
    ["EAL1", "functionally tested"],
    ["EAL2", "structurally tested"],
    ["EAL3", "methodically tested &amp; checked"],
    ["EAL4", "methodically designed, tested, reviewed &middot; commercial max"],
    ["EAL5", "semiformally designed &amp; tested"],
    ["EAL6", "semiformally VERIFIED design &amp; tested"],
    ["EAL7", "FORMALLY verified design &amp; tested"]
  ];
  for (var e = 0; e < 7; e++) {
    G["c3eal" + (e + 1)] = rows("EAL Assurance Ladder", EALS, e, "higher = more assurance the evaluation is right, not more security");
    set("eal" + (e + 1), "c3eal" + (e + 1));
  }

  /* ---- evaluation criteria generations ---- */
  var CRIT = [
    ["TCSEC (Orange Book)", "US &middot; CONFIDENTIALITY only", "ratings D &rarr; A1", "military heritage"],
    ["ITSEC", "Europe &middot; C, I and A", "F (function) + E (assurance)", "evaluates them separately"],
    ["COMMON CRITERIA", "ISO 15408 &middot; global today", "PP &middot; ST &middot; EAL1-7", "replaced both"]
  ];
  set("TCSEC (Orange Book)", "c3cr0"); G["c3cr0"] = cols("Evaluation Criteria Generations", CRIT, 0);
  set("ITSEC", "c3cr1"); G["c3cr1"] = cols("Evaluation Criteria Generations", CRIT, 1);
  set("Common Criteria", "c3cr2"); G["c3cr2"] = cols("Evaluation Criteria Generations", CRIT, 2);

  /* ---- certification vs accreditation ---- */
  var CA = [
    ["CERTIFICATION", "TECHNICAL evaluation", "controls tested against requirements", "done by assessors"],
    ["ACCREDITATION", "MANAGEMENT decision", "formal acceptance of residual risk", "signed by the authorising official"]
  ];
  set("Certification", "c3ca0"); G["c3ca0"] = cols("Certification vs. Accreditation", CA, 0, "certify first, then accredit");
  set("Accreditation", "c3ca1"); G["c3ca1"] = cols("Certification vs. Accreditation", CA, 1, "certify first, then accredit");

  /* ---- protection rings position ---- */
  var RINGS = [
    ["Ring 0", "kernel &mdash; full privilege, all instructions"],
    ["Ring 1-2", "drivers / OS services (rarely used today)"],
    ["Ring 3", "applications &mdash; least privilege, must ask the kernel"]
  ];
  set("ring0", "c3rg0"); G["c3rg0"] = rows("Protection Rings", RINGS, 0, "inner ring = more privilege &middot; crossing rings needs a gate (syscall)");
  set("ring3", "c3rg2"); G["c3rg2"] = rows("Protection Rings", RINGS, 2, "inner ring = more privilege &middot; crossing rings needs a gate (syscall)");

  /* ---- processor states / OS modes: highlighted halves ---- */
  var PS = [
    ["PROBLEM STATE", "runs user applications", "LIMITED instruction subset", "'problem' = the app's task"],
    ["SUPERVISOR STATE", "privileged kernel work", "FULL instruction set", "direct hardware access"]
  ];
  set("Problem", "c3ps0"); G["c3ps0"] = cols("Processor States", PS, 0);
  set("Supervisor", "c3ps1"); G["c3ps1"] = cols("Processor States", PS, 1);
  var OM = [
    ["USER MODE (ring 3)", "applications run here", "no direct hardware access", "asks kernel via syscalls"],
    ["KERNEL MODE (ring 0)", "OS core &mdash; full privilege", "memory, devices, CPU", "a crash here kills the system"]
  ];
  set("User Mode", "c3om0"); G["c3om0"] = cols("Operating System Modes", OM, 0);
  set("Kernel Mode", "c3om1"); G["c3om1"] = cols("Operating System Modes", OM, 1);

  /* ---- BLP / Biba individual properties ---- */
  G["c3blps"] = card("Simple Security Property (BLP)", ["NO READ UP &mdash; a subject may not read", "data classified ABOVE its clearance", "protects confidentiality on the read path"], "Secret-cleared analyst cannot open a Top Secret file");
  set("Simple Security Property", "c3blps");
  G["c3blpst"] = card("Star (*) Property (BLP)", ["NO WRITE DOWN &mdash; a subject may not write", "to a LOWER classification level", "stops secrets leaking into public documents"], "a Top Secret process cannot save into a Secret folder");
  set("Star Property", "c3blpst");
  G["c3blpss"] = card("Strong Star Property (BLP)", ["read AND write only at your OWN level", "no reaching up or down at all", "the strictest BLP variant"], "a Secret subject touches Secret objects only");
  set("Strong Star Property", "c3blpss");
  G["c3bibs"] = card("Simple Integrity Property (Biba)", ["NO READ DOWN &mdash; do not read data of", "LOWER integrity than yourself", "don't base decisions on dirty data"], "a payroll system ignores figures from an untrusted feed");
  set("Simple Integrity Property", "c3bibs");
  G["c3bibst"] = card("Star (*) Integrity Property (Biba)", ["NO WRITE UP &mdash; do not write into data of", "HIGHER integrity than yourself", "dirty sources cannot corrupt clean records"], "a web form cannot directly update the master ledger");
  set("Star Integrity Property", "c3bibst");

  /* ---- Lipner: the hybrid ---- */
  G["c3lip"] = card("Lipner Model", ["combines BLP (confidentiality)", "with Biba (integrity)", "built for COMMERCIAL needs"], "protects secrets AND stops unauthorised changes");
  set("lipner", "c3lip");

  /* ---- enterprise architecture: highlighted framework ---- */
  var ESA = [
    ["ZACHMAN", "6&times;6 matrix of viewpoints", "what &middot; how &middot; where &middot; who", "not security-specific"],
    ["SABSA", "SECURITY-driven layers", "contextual &rarr; component", "risk &amp; business aligned"],
    ["TOGAF", "ADM development cycle", "business &middot; data &middot; app &middot; tech", "general EA method"]
  ];
  set("Zachman", "c3esa0"); G["c3esa0"] = cols("Enterprise Architecture Frameworks", ESA, 0);
  set("Sabsa", "c3esa1"); G["c3esa1"] = cols("Enterprise Architecture Frameworks", ESA, 1);
  set("TOGAF", "c3esa2"); G["c3esa2"] = cols("Enterprise Architecture Frameworks", ESA, 2);

  /* ---- Clark-Wilson children ---- */
  G["c3cwg"] = card("Clark-Wilson &mdash; Integrity Goals", ["1. prevent UNAUTHORISED subjects making changes", "2. prevent authorised subjects making IMPROPER changes", "3. maintain internal &amp; external consistency"], "the three goals every integrity model is judged by");
  set("cw-goals", "c3cwg");
  G["c3cwr"] = card("Clark-Wilson &mdash; How it enforces", ["access TRIPLE: subject &rarr; TP &rarr; CDI", "certification rules: IVP verifies data integrity", "enforcement rules: SoD + authorised lists only"], "no direct access &mdash; everything through a certified program");
  set("cw-rules", "c3cwr");

  /* ---- Brewer-Nash child ---- */
  G["c3coi"] = card("Preventing Conflicts of Interest", ["competitors are grouped into COI CLASSES", "touching one dataset BLOCKS the rest of its class", "the wall follows YOUR access history, dynamically"], "an auditor working on Coke can no longer open Pepsi files");
  set("prevent-coi", "c3coi");

  /* ---- access-matrix children ---- */
  G["c3gd"] = card("Graham-Denning", ["defines 8 protection commands:", "create/delete subject &amp; object,", "grant / transfer / delete rights, read access"], "the rulebook for changing the access matrix safely");
  set("graham-denning", "c3gd");
  G["c3hru"] = card("Harrison-Ruzzo-Ullman (HRU)", ["extends Graham-Denning and asks:", "can a right ever LEAK to someone unauthorised?", "the 'safety problem' &mdash; undecidable in general"], "proves why verifying rights propagation is so hard");
  set("hru", "c3hru");

  /* ---- zero trust sibling ---- */
  G["c3tbv"] = card("Trust But Verify", ["the LEGACY stance: allow access,", "then audit the logs afterwards", "zero trust replaces it with verify-FIRST"], "quarterly log review vs. checking every request live");
  set("Trust But Verify", "c3tbv");

  /* ---- least privilege / SoD split ---- */
  G["c3lp"] = card("Least Privilege", ["grant ONLY the rights the job needs,", "for only as long as needed", "limits the blast radius of any compromise"], "the intern's account cannot touch production");
  set("Least Privilege", "c3lp");
  G["c3sod"] = card("Separation of Duties (SoD)", ["split a critical task so NO ONE person", "can complete it alone", "fraud then requires collusion"], "one person requests a payment, a different one approves it");
  set("Separation of Duties (SoD)", "c3sod");

  /* ---- emanation countermeasures ---- */
  G["c3shl"] = card("Shielding (TEMPEST)", ["physically BLOCK the signal:", "Faraday cages, shielded cables,", "TEMPEST-certified equipment"], "a shielded room lets no usable signal escape");
  set("shielding", "c3shl");
  G["c3wn"] = card("White Noise", ["broadcast random EM noise to MASK", "the genuine emanations", "eavesdropper can't separate the real signal"], "a noise generator floods the spectrum");
  set("White Noise", "c3wn");
  G["c3cz"] = card("Control Zones", ["define physical ZONES where emanations", "are contained by distance + access control", "attacker never gets close enough to capture"], "emanating kit sits in the building core, far from the fence");
  set("Control Zones", "c3cz");

  /* ---- input validation children ---- */
  var CSV = [
    ["CLIENT-SIDE", "usability only", "attacker controls the client", "trivially bypassed"],
    ["SERVER-SIDE", "the REAL control", "cannot be bypassed", "never skip it"]
  ];
  set("client-vs-server", "c3csv"); G["c3csv"] = cols("Where to Validate", CSV, 1, "do both &mdash; but only trust the server");
  var AD = [
    ["ALLOW LIST", "permit known-GOOD only", "rejects everything else", "the safer default"],
    ["DENY LIST", "block known-BAD only", "always misses novel attacks", "avoid relying on it"]
  ];
  set("allow-vs-deny", "c3ad"); G["c3ad"] = cols("Allow vs. Deny Lists", AD, 0);

  /* ---- XSS children: three different attack flows ---- */
  G["c3xst"] = '<svg viewBox="0 0 330 116" class="fig" role="img" aria-label="Stored XSS flow">'
    + '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Stored (Persistent) XSS</text>'
    + '<rect x="8" y="26" width="90" height="36" rx="6" fill="#3a0a0e" stroke="#d31324"/><text x="53" y="41" text-anchor="middle" fill="#fff" font-size="7.5" font-weight="700">ATTACKER</text><text x="53" y="53" text-anchor="middle" fill="#e0e0e0" font-size="6.8">posts script once</text>'
    + '<rect x="120" y="26" width="90" height="36" rx="6" fill="#161616" stroke="#a0303f"/><text x="165" y="41" text-anchor="middle" fill="#ff9ab0" font-size="7.5" font-weight="700">SERVER DB</text><text x="165" y="53" text-anchor="middle" fill="#e0e0e0" font-size="6.8">script is SAVED</text>'
    + '<rect x="232" y="26" width="90" height="36" rx="6" fill="#161616" stroke="#a0303f"/><text x="277" y="41" text-anchor="middle" fill="#ff9ab0" font-size="7.5" font-weight="700">EVERY VIEWER</text><text x="277" y="53" text-anchor="middle" fill="#e0e0e0" font-size="6.8">script runs for all</text>'
    + '<path d="M98 44 L120 44 M210 44 L232 44" stroke="#d31324" stroke-width="1.5"/>'
    + '<text x="165" y="82" text-anchor="middle" fill="#f0f0f0" font-size="7.6">one injection &rarr; hits every user who loads the page</text>'
    + '<text x="165" y="98" text-anchor="middle" fill="#a6a6a6" font-size="7">the most damaging XSS &middot; e.g. a script hidden in a forum post</text></svg>';
  set("xss-stored", "c3xst");
  G["c3xsr"] = '<svg viewBox="0 0 330 116" class="fig" role="img" aria-label="Reflected XSS flow">'
    + '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Reflected XSS (most common)</text>'
    + '<rect x="8" y="26" width="90" height="36" rx="6" fill="#3a0a0e" stroke="#d31324"/><text x="53" y="41" text-anchor="middle" fill="#fff" font-size="7.5" font-weight="700">CRAFTED LINK</text><text x="53" y="53" text-anchor="middle" fill="#e0e0e0" font-size="6.8">script in the URL</text>'
    + '<rect x="120" y="26" width="90" height="36" rx="6" fill="#161616" stroke="#a0303f"/><text x="165" y="41" text-anchor="middle" fill="#ff9ab0" font-size="7.5" font-weight="700">SERVER</text><text x="165" y="53" text-anchor="middle" fill="#e0e0e0" font-size="6.8">ECHOES it back</text>'
    + '<rect x="232" y="26" width="90" height="36" rx="6" fill="#161616" stroke="#a0303f"/><text x="277" y="41" text-anchor="middle" fill="#ff9ab0" font-size="7.5" font-weight="700">VICTIM</text><text x="277" y="53" text-anchor="middle" fill="#e0e0e0" font-size="6.8">script runs once</text>'
    + '<path d="M98 44 L120 44 M210 44 L232 44" stroke="#d31324" stroke-width="1.5"/>'
    + '<text x="165" y="82" text-anchor="middle" fill="#f0f0f0" font-size="7.6">nothing is stored &mdash; the request itself carries the script</text>'
    + '<text x="165" y="98" text-anchor="middle" fill="#a6a6a6" font-size="7">delivered by phishing the victim into clicking the link</text></svg>';
  set("xss-reflected", "c3xsr");
  G["c3xsd"] = '<svg viewBox="0 0 330 112" class="fig" role="img" aria-label="DOM-based XSS flow">'
    + '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">DOM-based XSS</text>'
    + '<rect x="60" y="24" width="210" height="58" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.6"/>'
    + '<text x="165" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">VICTIM&apos;S BROWSER ONLY</text>'
    + '<text x="165" y="55" text-anchor="middle" fill="#e0e0e0" font-size="7.2">client JavaScript writes attacker data</text>'
    + '<text x="165" y="67" text-anchor="middle" fill="#e0e0e0" font-size="7.2">into the page DOM unsafely</text>'
    + '<text x="165" y="96" text-anchor="middle" fill="#a6a6a6" font-size="7">the payload may never reach the server &mdash; e.g. read from the URL #fragment</text></svg>';
  set("xss-dom", "c3xsd");
  G["c3toac"] = card("Target of Attack: Client", ["XSS attacks the USER, not the site &mdash;", "the victim's browser runs the injected script", "sessions, cookies and keystrokes are stolen"], "contrast CSRF, which abuses the server's trust instead");
  set("toa-client", "c3toac");
  G["c3toas"] = card("Target of Attack: Server", ["CSRF abuses the SERVER's trust in the", "victim's authenticated session", "the forged request executes as the user"], "contrast XSS, which targets the client's browser");
  set("toa-server", "c3toas");

  /* ---- remaining singles ---- */
  G["c3reau"] = card("Increase Re-authentication Frequency", ["re-check authorisation AT the moment of use,", "not minutes earlier &mdash; shrink the race window", "the practical TOCTOU defence"], "rights verified immediately before the sensitive operation");
  set("reauth", "c3reau");
  G["c3red"] = card("Redundancy", ["duplicate critical components so one", "failure never stops the system", "the direct cure for single points of failure"], "dual power supplies, clustered servers, HA pairs");
  set("Redundancy", "c3red");
  G["c3cca"] = card("Covert-Channel Analysis &amp; Design", ["hunt covert channels during ANALYSIS", "and DESIGN &mdash; required at high TCSEC levels", "designing them out beats detecting them later"], "a design review removes a shared counter that could leak");
  set("Analysis & Design", "c3cca");
  G["c3poly"] = card("Polyinstantiation", ["keep MULTIPLE versions of the same record", "at different classification levels", "low-cleared users see a harmless cover story"], "the DB shows a decoy cargo manifest to uncleared staff");
  set("Polyinstantiation", "c3poly");
  G["c3sk"] = card("Security Kernel", ["the hardware + software that IMPLEMENTS", "the reference monitor concept", "must be COMPLETE &middot; ISOLATED &middot; VERIFIABLE"], "small enough to be tested exhaustively");
  set("Security Kernel", "c3sk");
  G["c3tcb"] = card("Trusted Computing Base (TCB)", ["the TOTALITY of protection mechanisms", "inside the security perimeter", "smaller + simpler = easier to trust"], "kernel, reference monitor and crypto modules only");
  set("Trusted Computing Base (TCB)", "c3tcb");

  /* ---- frameworks: highlighted row per framework ---- */
  var FW = [
    ["ISO 27001", "ISMS requirements &mdash; you CERTIFY against it"],
    ["ISO 27002", "detailed control GUIDANCE &mdash; not certifiable"],
    ["NIST 800-53", "US federal control CATALOG (FISMA / FedRAMP)"],
    ["COBIT", "IT GOVERNANCE framework (ISACA)"],
    ["ITIL", "IT SERVICE management practices"],
    ["HIPAA &middot; SOX &middot; FISMA", "LAWS &mdash; health, financial reporting, US federal"],
    ["FedRAMP", "US government CLOUD authorization program"]
  ];
  [["ISO 27001", 0], ["ISO 27002", 1], ["NIST 800-53", 2], ["COBIT", 3], ["ITIL", 4], ["HIPAA", 5], ["SOX", 5], ["FISMA", 5], ["FedRAMP", 6]].forEach(function (p) {
    var fk = "c3fw" + p[1];
    if (!G[fk]) { G[fk] = rows("Frameworks at a Glance", FW, p[1]); }
    set(p[0], fk);
  });
})();

/* ============================================================
   CISSP Domain 3 — Layouts 5-9 hover details (part A: L5 cloud, L6 crypto fundamentals)
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_DETAILS, {
  /* ================= LAYOUT 5 — CLOUD COMPUTING ================= */
  "cloud-characteristics": {
    t: "Cloud Characteristics (NIST SP 800-145)",
    d: "NIST defines cloud by FIVE essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity and measured service. If an offering lacks one, it isn't really cloud &mdash; a favourite exam discriminator.",
    x: "A 'private cloud' that needs a ticket and a week to provision a VM fails on-demand self-service."
  },
  "On-Demand Self Service": {
    t: "On-Demand Self-Service",
    d: "Consumers provision compute and storage THEMSELVES, automatically, without human interaction with the provider. This is what turns infrastructure into a utility.",
    x: "A developer spins up a server from a console at 2 a.m. with no ticket."
  },
  "Broad Network Access": {
    t: "Broad Network Access",
    d: "Capabilities are available over the NETWORK through standard mechanisms, from thin or thick clients, anywhere. This also widens the attack surface &mdash; the trade-off the exam wants you to see.",
    x: "The same SaaS app is reachable from a laptop, phone or API client over HTTPS."
  },
  "Resource Pooling": {
    t: "Resource Pooling (Multi-tenancy)",
    d: "The provider's resources are POOLED and dynamically assigned across multiple tenants. Multi-tenancy is the core security concern: your data sits on shared hardware with strangers, isolated only logically.",
    x: "Two competitors' VMs may run on the same physical host, separated by the hypervisor."
  },
  "Rapid Elasticity": {
    t: "Rapid Elasticity",
    d: "Capacity scales OUT and IN automatically with demand, appearing unlimited to the consumer. Security must scale with it &mdash; auto-created instances need auto-applied hardening.",
    x: "A retail site triples capacity for Black Friday and shrinks back automatically after."
  },
  "Measured Service": {
    t: "Measured Service",
    d: "Usage is METERED (pay-per-use) and transparently monitored, providing accountability for both provider and consumer. Metering data also supports capacity planning and anomaly detection.",
    x: "A sudden billing spike reveals a compromised account mining cryptocurrency."
  },
  "Service Models": {
    t: "Cloud Service Models",
    d: "IaaS, PaaS and SaaS define WHERE the provider's responsibility ends and yours begins. The lower the stack you rent (IaaS), the more security you own; with SaaS you own little more than your data, users and configuration.",
    x: "Patching the guest OS is your job in IaaS, the provider's job in SaaS."
  },
  "IaaS": {
    t: "IaaS — Infrastructure as a Service",
    d: "The provider gives you raw COMPUTE, storage and networking; you install and manage the OS and everything above it. Most control, most responsibility.",
    x: "AWS EC2 / Azure VMs: you harden and patch the operating system yourself."
  },
  "PaaS": {
    t: "PaaS — Platform as a Service",
    d: "The provider manages the OS and runtime PLATFORM; you deploy and manage your application and data. You give up OS control but shed its patching burden.",
    x: "A managed database or app-hosting platform: you bring code and data, they run the stack."
  },
  "SaaS": {
    t: "SaaS — Software as a Service",
    d: "The provider runs the complete APPLICATION; you manage your data, users and settings. Least responsibility &mdash; but also least visibility, so vet the provider via audits (SOC 2) and contracts.",
    x: "Microsoft 365: your job is access control and data governance, not servers."
  },
  "Deployment Models": {
    t: "Cloud Deployment Models",
    d: "WHO shares the infrastructure: public (everyone), private (one org), community (orgs with shared concerns), hybrid (a mix). Choice is driven by data sensitivity, compliance and cost.",
    x: "A bank keeps regulated workloads private but bursts marketing analytics to public cloud."
  },
  "Public": {
    t: "Public Cloud",
    d: "Infrastructure open to the GENERAL PUBLIC, owned and operated by a provider. Cheapest and most scalable; strongest dependence on provider assurances and logical isolation between tenants.",
    x: "AWS, Azure, GCP &mdash; shared data centres, logical tenant separation."
  },
  "Private": {
    t: "Private Cloud",
    d: "Cloud infrastructure operated for a SINGLE organization (on-prem or hosted). Most control and easiest compliance story; highest cost and least elasticity.",
    x: "A government agency runs its own OpenStack cloud in its own data centre."
  },
  "Community": {
    t: "Community Cloud",
    d: "Shared by SEVERAL organizations with common requirements (mission, compliance, jurisdiction). Costs and governance are shared among the community members.",
    x: "A group of hospitals shares a HIPAA-aligned cloud for health records."
  },
  "cloud-hybrid": {
    t: "Hybrid Cloud",
    d: "Two or more models (typically private + public) bound together with portability between them. Enables CLOUD BURSTING and data-sensitivity tiering &mdash; but the connection points become the security seams.",
    x: "Sensitive data stays private; overflow web traffic bursts to public cloud at peak."
  },
  "Virtualized Compute": {
    t: "Virtualized Compute",
    d: "The three abstraction levels for running workloads: virtual machines (full OS each), containers (shared kernel), serverless (just functions). Each step up trades control for reduced ops burden &mdash; and shifts the isolation boundary you rely on.",
    x: "VM escape, container breakout and function event-injection are the respective nightmares."
  },
  "Virtual Machine": {
    t: "Virtual Machine",
    d: "A full guest OS running on a HYPERVISOR. Strongest isolation of the three compute options; heaviest footprint. Key risks: VM escape, sprawl, and snapshots holding sensitive data.",
    x: "Ten guest VMs share one host; the hypervisor keeps them apart."
  },
  "Containers": {
    t: "Containers",
    d: "Package the app and its dependencies but SHARE the host kernel &mdash; lighter than VMs, weaker isolation. Secure via image scanning, minimal base images, and never running privileged containers.",
    x: "A vulnerable kernel exposes every container on the host at once."
  },
  "Serverless": {
    t: "Serverless (FaaS)",
    d: "You deploy FUNCTIONS; the provider manages everything else, billing per execution. Patching disappears from your plate, but injection via event data, over-broad IAM roles and dependency risk remain yours.",
    x: "AWS Lambda: no OS to harden, but the function's IAM role can still be dangerously broad."
  },
  "Hypervisor": {
    t: "Hypervisor (Type 1 vs Type 2)",
    d: "The software that creates and isolates VMs. TYPE 1 (bare-metal) runs directly on hardware &mdash; smaller attack surface, production standard. TYPE 2 (hosted) runs atop a host OS &mdash; convenient, but inherits every host-OS flaw.",
    x: "ESXi/Hyper-V (Type 1) in the data centre; VirtualBox (Type 2) on a laptop."
  },
  "Container Engine": {
    t: "Container Engine",
    d: "The runtime that builds, runs and isolates containers on a shared kernel (namespaces + cgroups). It and the orchestrator (Kubernetes) become critical security dependencies &mdash; harden and patch them like a hypervisor.",
    x: "Docker/containerd &mdash; a runtime escape flaw exposes the whole host."
  },
  "Identity Provider": {
    t: "Identity Provider (IdP)",
    d: "The system that AUTHENTICATES users and asserts their identity to applications. In cloud architectures the IdP decision &mdash; keep it local or move it to the cloud &mdash; anchors the whole access-control design.",
    x: "Entra ID (cloud) or on-prem AD (local) asserting identity to hundreds of SaaS apps."
  },
  "idp-local": {
    t: "Local Identity Provider",
    d: "Identity stays ON-PREMISES (e.g., Active Directory); cloud apps trust it via federation. You keep control of credentials, but you also keep the availability and security burden.",
    x: "If the on-prem AD or its link goes down, cloud logins stop."
  },
  "idp-cloud": {
    t: "Cloud Identity Provider",
    d: "Identity is hosted BY a cloud provider. Highly available and feature-rich (MFA, conditional access), but it becomes your single most critical cloud dependency &mdash; protect its admin accounts above all.",
    x: "Compromise of the cloud IdP's global admin equals compromise of everything."
  },
  "cloud-identity": {
    t: "Cloud Identity Models",
    d: "HOW identity reaches the cloud: pure cloud accounts, linked accounts, synchronized (password hash sync), or federated (authentication stays home). The exam tests knowing where authentication actually happens in each.",
    x: "With federation the password never leaves your network; with sync a hash does."
  },
  "ci-cloud": {
    t: "Cloud-only Identity",
    d: "Accounts created and managed ENTIRELY in the cloud with no on-prem counterpart. Simple for cloud-native orgs; a second identity silo for everyone else.",
    x: "A startup with no on-prem AD manages everything in Entra ID."
  },
  "Linked": {
    t: "Linked Identity",
    d: "Separate on-prem and cloud accounts LINKED to the same person &mdash; two credentials, manually or loosely connected. Weakest model: double the attack surface, and deprovisioning is easy to miss.",
    x: "A leaver's AD account is disabled but their linked cloud account survives."
  },
  "Synced": {
    t: "Synchronized Identity",
    d: "On-prem accounts (and typically password HASHES) are synchronized into the cloud IdP. One identity, two authentication points; the sync connector becomes sensitive infrastructure.",
    x: "Entra Connect replicates hashes so users sign in to the cloud with their AD password."
  },
  "Federated": {
    t: "Federated Identity",
    d: "The cloud app REDIRECTS authentication to your IdP via SAML/OIDC; credentials never leave home. Strongest control &mdash; but your IdP's availability and its token-signing keys become mission-critical.",
    x: "Stolen ADFS token-signing certificates let attackers forge access to every federated app (Golden SAML)."
  },
  "cloud-roles": {
    t: "Cloud Roles & the Shared Responsibility Split",
    d: "The customer is always ACCOUNTABLE for their data (data owner/controller); the provider is RESPONSIBLE for security OF the cloud as processor. You can outsource work, never accountability &mdash; the most-tested cloud fact.",
    x: "After a misconfigured bucket leak, the customer answers to regulators, not AWS."
  },
  "Accountable": {
    t: "Accountable (Cloud Customer)",
    d: "Ultimate answerability for the data CANNOT be transferred to the provider. The customer, as owner/controller, remains accountable to regulators and data subjects regardless of where processing happens.",
    x: "GDPR fines land on the controller even when the processor's data centre failed."
  },
  "Responsible": {
    t: "Responsible (Cloud Provider)",
    d: "The provider is responsible for the tasks it contracts to perform &mdash; security OF the cloud: facilities, hardware, hypervisor. The line moves with service model, which is why contracts and SLAs matter.",
    x: "AWS patches the hypervisor (their side); you configure the security groups (yours)."
  },
  "Cloud Consumer": {
    t: "Cloud Consumer",
    d: "The person or organization that USES the cloud service. Owns identity governance, data classification and correct configuration of whatever the model leaves in their hands.",
    x: "The consumer decides who gets access and how data is classified &mdash; no provider can do that for them."
  },
  "owner-controller": {
    t: "Owner / Controller",
    d: "The party that determines WHY and HOW personal data is processed (GDPR controller) &mdash; in cloud, that's the customer. Sets classification, retention and lawful basis; carries the accountability.",
    x: "Your company decides to store EU customer PII in a SaaS CRM &mdash; it is the controller."
  },
  "provider-processor": {
    t: "Cloud Provider / Processor",
    d: "Processes data ON BEHALF OF the controller under contract (DPA). Must follow instructions, support breach notification, and prove its controls via SOC 2 / ISO 27001 attestations.",
    x: "The SaaS vendor may not mine your customer data for its own purposes &mdash; it's only a processor."
  },
  "Cloud Broker": {
    t: "Cloud Broker",
    d: "An intermediary that AGGREGATES, integrates or customizes services between consumers and multiple providers. Simplifies multi-cloud but adds a third party to your trust chain and contracts.",
    x: "A broker gives one portal and one bill across AWS and Azure services."
  },
  "Cloud Auditor": {
    t: "Cloud Auditor",
    d: "An INDEPENDENT party that examines cloud controls and produces attestations consumers rely on (SOC reports, ISO certificates) &mdash; how you get assurance without touring the provider's data centre.",
    x: "You accept a SOC 2 Type 2 report in lieu of auditing the provider yourself."
  },
  "cloud-protocols": {
    t: "Cloud Identity Protocols",
    d: "The federation alphabet: SPML provisions accounts, SAML asserts authentication, OpenID (Connect) authenticates, OAuth authorizes. Knowing which does WHICH is a guaranteed exam question.",
    x: "Log in with Google = OpenID Connect; grant the app access to your calendar = OAuth."
  },
  "SPML": {
    t: "SPML — Service Provisioning Markup Language",
    d: "XML standard for automating account PROVISIONING and deprovisioning across systems. Largely superseded by SCIM in practice, but the exam still names SPML for provisioning.",
    x: "HR marks a hire; SPML/SCIM creates their accounts in every connected app."
  },
  "SAML": {
    t: "SAML — Security Assertion Markup Language",
    d: "XML standard for exchanging AUTHENTICATION and authorization assertions between an IdP and service providers &mdash; the workhorse of enterprise web SSO and federation.",
    x: "Signing in to a SaaS app bounces you to your IdP, which posts back a signed SAML assertion."
  },
  "OpenID": {
    t: "OpenID (Connect)",
    d: "AUTHENTICATION layer built on OAuth 2.0 &mdash; proves WHO the user is via an ID token (JWT). OpenID answers identity; OAuth alone never does.",
    x: "'Sign in with Google' returns an ID token asserting the user's identity."
  },
  "OAuth": {
    t: "OAuth 2.0",
    d: "Delegated AUTHORIZATION: lets an app act on your behalf with scoped access tokens, WITHOUT ever seeing your password. Not authentication &mdash; the classic exam trap.",
    x: "You grant a scheduling app read-only access to your calendar; it never learns your password."
  },
  "Migration": {
    t: "Cloud Migration",
    d: "Moving workloads in &mdash; and critically, OUT. Plan the exit (data formats, egress costs, portability) before you enter, or face vendor lock-in. Contracts and SLAs are the control here.",
    x: "An exit clause guarantees export of all data in open formats within 30 days."
  },
  "Data Centric": {
    t: "Data-Centric Security",
    d: "In the cloud, the perimeter is gone &mdash; protection must travel WITH THE DATA: classification, encryption with keys you control, rights management and DLP wherever it flows.",
    x: "A document carries its encryption and usage rights whether it sits in SharePoint or a phone."
  },
  "SLA": {
    t: "SLA — Service Level Agreement",
    d: "The contractual teeth: measurable commitments (availability, RTO/RPO, breach notification, right to audit, data return/destruction on exit) with penalties. If security isn't in the SLA, it isn't promised.",
    x: "99.95% uptime, 24-hour breach notice, and certified data destruction at contract end."
  },
  "cloud-forensics": {
    t: "Cloud Forensics",
    d: "Virtualization is a forensic GIFT: snapshots capture RAM and disk without downtime. But multi-tenancy, provider dependence and jurisdiction complicate acquisition &mdash; pre-negotiate forensic support in the contract.",
    x: "Instead of pulling a drive, you snapshot the VM and analyse a copy while production runs."
  },
  "vm-artifacts": {
    t: "Snapshot, Virtual Disk, Image",
    d: "The cloud evidence trio: SNAPSHOT (point-in-time state incl. memory), VIRTUAL DISK (the VMDK/VHD contents), IMAGE (the template it launched from). Hash them and preserve chain of custody like any evidence.",
    x: "An incident responder snapshots the compromised VM, hashes the export, and works on a copy."
  },
  "Data Destruction": {
    t: "Data Destruction in the Cloud",
    d: "You can't shred a drive you don't own, and provider media is shared and replicated. Defensible destruction therefore relies on CRYPTO-SHREDDING &mdash; destroy the keys, and every copy becomes ciphertext noise.",
    x: "At contract exit you destroy the customer-managed keys; all replicas are instantly unreadable."
  },
  "crypto-erase": {
    t: "Crypto Shredding / Crypto Erase",
    d: "Encrypt data with keys YOU control, then destroy the KEYS to render all copies permanently unrecoverable &mdash; the only sanitization that works across backups and replicas you can't touch.",
    x: "Deleting the KMS key material 'erases' terabytes across every region at once."
  },

  /* ================= LAYOUT 6 — CRYPTO SERVICES, TERMINOLOGY, SECRET WRITING ================= */
  "cs-confidentiality": {
    t: "Confidentiality (Cryptographic Service)",
    d: "Keeping data secret from the unauthorized &mdash; delivered by ENCRYPTION (symmetric for bulk, asymmetric for key exchange). The service most people equate with crypto, but only one of five.",
    x: "AES encrypts the database; only key-holders can read it."
  },
  "cs-integrity": {
    t: "Integrity (Cryptographic Service)",
    d: "Proving data hasn't CHANGED &mdash; delivered by HASHING: any alteration produces a different digest. Note the map's '= Hashing': on the exam, the integrity service means hash functions (and MACs when keyed).",
    x: "The downloaded ISO's SHA-256 matches the published digest, so it wasn't tampered with."
  },
  "Authenticity": {
    t: "Authenticity",
    d: "Proving a message really comes FROM the claimed sender &mdash; via MACs (shared key) or digital signatures (private key). Combined with integrity, it defeats forgery and spoofing.",
    x: "A digitally signed email verifies against the sender's public key &mdash; it's really from them."
  },
  "nonrepudiation": {
    t: "Non-Repudiation",
    d: "The sender CANNOT DENY sending (origin) and the receiver cannot deny receiving (delivery). Only ASYMMETRIC crypto provides it &mdash; a symmetric MAC can't, because both parties share the same key. Classic exam trap.",
    x: "A contract signed with the signer's private key binds them; 'it wasn't me' fails."
  },
  "cs-access": {
    t: "Access Control (Cryptographic Service)",
    d: "Crypto ENFORCES access: only holders of the right key can decrypt, so key possession becomes the access decision. This is how encryption protects data even after the perimeter fails.",
    x: "A stolen laptop's FDE means no key, no data &mdash; access denied by mathematics."
  },
  "eq-hashing": {
    t: "Integrity = Hashing",
    d: "The map's shorthand: the integrity SERVICE is delivered by HASH functions. One-way, fixed-length digest; change one bit of input and the digest changes unrecognizably (avalanche).",
    x: "File integrity monitoring stores hashes and alerts when a recomputed hash differs."
  },
  "Origin": {
    t: "Non-Repudiation of Origin",
    d: "Proof of WHO SENT it &mdash; the sender signed with their private key, so they cannot later deny authorship.",
    x: "The signed purchase order proves the buyer placed it."
  },
  "Delivery": {
    t: "Non-Repudiation of Delivery",
    d: "Proof the recipient RECEIVED it &mdash; a signed acknowledgement/receipt the receiver cannot later deny.",
    x: "A signed delivery receipt defeats 'we never got the invoice'."
  },
  "Plaintext": {
    t: "Plaintext",
    d: "The readable input message before encryption (also 'cleartext'). Plaintext &rarr; encrypt &rarr; ciphertext &rarr; decrypt &rarr; plaintext is the whole pipeline.",
    x: "The email body before S/MIME encryption is plaintext."
  },
  "Encrypt": {
    t: "Encrypt",
    d: "Transforming plaintext into unreadable CIPHERTEXT using an algorithm plus a KEY. Strength must live in the key, not in hiding the algorithm (Kerckhoffs).",
    x: "AES-256-GCM turns the file into ciphertext plus an authentication tag."
  },
  "cryptovariable": {
    t: "Key / Cryptovariable",
    d: "The SECRET input that individualizes the public algorithm &mdash; the exam's formal term is cryptovariable. Key LENGTH sets the brute-force work factor; key SECRECY is everything (Kerckhoffs).",
    x: "AES is public; your 256-bit key is the only secret in the system."
  },
  "Decrypt": {
    t: "Decrypt",
    d: "Reversing encryption with the correct key: ciphertext back to plaintext. Symmetric uses the SAME key; asymmetric uses the pair's OTHER key.",
    x: "The recipient's private key decrypts what their public key encrypted."
  },
  "Key clustering": {
    t: "Key Clustering",
    d: "A WEAKNESS where two DIFFERENT keys encrypt the same plaintext into the same ciphertext &mdash; effectively shrinking the keyspace an attacker must search. Good algorithms avoid it.",
    x: "If K1 and K2 both produce identical ciphertext, an attacker needs either key, not one specific one."
  },
  "Work factor": {
    t: "Work Factor",
    d: "The TIME AND RESOURCES needed to break the crypto. Nothing is unbreakable; the goal is a work factor exceeding the data's useful life. Longer keys raise it exponentially; Moore's law and quantum erode it.",
    x: "Data secret for 10 years needs crypto that costs attackers more than 10 years to break."
  },
  "iv-nonce": {
    t: "Initialization Vector / Nonce",
    d: "A RANDOM or unique starting value that makes identical plaintexts encrypt differently under the same key. IVs must be unpredictable; nonces must NEVER repeat with the same key &mdash; reuse is catastrophic.",
    x: "WEP died largely because its 24-bit IVs repeated; reused CTR nonces leak the XOR of plaintexts."
  },
  "Confusion": {
    t: "Confusion (Shannon)",
    d: "Making the relationship between KEY and ciphertext as complex as possible &mdash; implemented by SUBSTITUTION (S-boxes). Each ciphertext bit should depend on the key in an intractable way.",
    x: "AES's SubBytes step provides confusion."
  },
  "Diffusion": {
    t: "Diffusion (Shannon)",
    d: "Spreading each PLAINTEXT bit's influence across many ciphertext bits &mdash; implemented by TRANSPOSITION/permutation. Hides statistical patterns of the plaintext.",
    x: "AES's ShiftRows/MixColumns spread one byte's effect across the whole block."
  },
  "Avalanche": {
    t: "Avalanche Effect",
    d: "Flip ONE input bit and roughly HALF the output bits change. The observable result of good confusion + diffusion; hashes and ciphers both need it.",
    x: "SHA-256 of 'test' vs 'Test' shares no recognisable pattern."
  },
  "Hidden": {
    t: "Hidden Writing",
    d: "Concealing that a message EXISTS at all (vs cryptography, which hides only its meaning). Steganography and null ciphers. Weak alone &mdash; found means read &mdash; so pair it with encryption.",
    x: "A secret embedded in a photo's pixels raises no suspicion in transit."
  },
  "Steganography": {
    t: "Steganography",
    d: "Embedding data inside innocuous carriers (image least-significant bits, audio, whitespace). Defeats detection, not decryption; also used for WATERMARKING and by malware for covert exfiltration.",
    x: "DLP misses the customer list because it left the building inside a holiday photo."
  },
  "Null Cipher": {
    t: "Null Cipher",
    d: "The plaintext hides IN PLAIN SIGHT within a longer innocent message (e.g., first letter of each word). Historical/novelty grade &mdash; but a neat exam definition to recognise.",
    x: "'Nice Evening, Wonderful Sunset' &mdash; first letters spell NEWS."
  },
  "scrambled": {
    t: "Scrambled — Cryptography",
    d: "The message is visibly TRANSFORMED so it can't be understood without the key. Splits into ONE-WAY (hashing &mdash; no decryption) and TWO-WAY (encryption &mdash; symmetric or asymmetric).",
    x: "An intercepted TLS stream is obviously encrypted &mdash; scrambled, not hidden."
  },
  "One-way": {
    t: "One-Way (Hashing)",
    d: "Transformation with NO reverse: you can compute the digest but never recover the input. Serves integrity, password storage and signatures &mdash; not confidentiality.",
    x: "Websites store password hashes; even the admin can't read your password back."
  },
  "Two-way": {
    t: "Two-Way (Encryption)",
    d: "Reversible with the key: encrypt AND decrypt. Symmetric (one shared key, fast, bulk data) or asymmetric (key pair, slow, key exchange and signatures) &mdash; real systems use both together.",
    x: "TLS: an asymmetric handshake exchanges a symmetric session key that encrypts the traffic."
  },
  "Substitution": {
    t: "Substitution Ciphers",
    d: "REPLACE each unit with another (letters, bytes). Vulnerable to FREQUENCY ANALYSIS when the mapping is static. Lives on inside modern ciphers as S-boxes (confusion).",
    x: "In English ciphertext, the most frequent symbol is probably 'E'."
  },
  "caesar": {
    t: "Caesar Cipher",
    d: "Shift every letter a fixed number of places (ROT-3 classically) &mdash; a monoalphabetic substitution with a 25-key keyspace. Trivially brute-forced; the exam's canonical 'toy cipher'.",
    x: "ATTACK &rarr; DWWDFN with shift 3; try all 25 shifts to break."
  },
  "Monoalphabetic": {
    t: "Monoalphabetic Substitution",
    d: "ONE fixed substitution alphabet for the whole message. Bigger keyspace than Caesar (26! mappings) yet still falls instantly to frequency analysis, because letter statistics survive.",
    x: "A newspaper cryptogram &mdash; solvable over coffee via letter frequencies."
  },
  "Polyalphabetic": {
    t: "Polyalphabetic Substitution",
    d: "MULTIPLE alphabets rotate with a keyword (Vigen&egrave;re), flattening frequency patterns. Broken once the key length is deduced (Kasiski) &mdash; but the concept previews the one-time pad.",
    x: "Vigen&egrave;re with key 'LEMON' shifts each letter by a different amount."
  },
  "Running": {
    t: "Running Key Cipher",
    d: "The key is a long TEXT (e.g., a book passage) as long as the message. Approaches one-time-pad style &mdash; but natural-language keys have statistics, so it's still breakable.",
    x: "Page 87 of an agreed novel becomes the key stream."
  },
  "One-time Pads": {
    t: "One-Time Pad",
    d: "The ONLY provably unbreakable cipher &mdash; IF the key is truly random, as long as the message, used ONCE, and kept secret. Impractical at scale precisely because of key distribution. All four conditions = exam gold.",
    x: "Cold-war spies burned each pad page after one use; reusing pages (VENONA) broke them."
  },
  "Transposition": {
    t: "Transposition Ciphers",
    d: "Letters keep their identity but are REARRANGED &mdash; changing order, not symbols. Frequency counts look normal, which is itself a clue. Modern ciphers embed the idea as permutation (diffusion).",
    x: "Ciphertext with perfectly normal letter frequencies suggests transposition."
  },
  "Spartan Scytale": {
    t: "Spartan Scytale",
    d: "Wrap a strip around a ROD of specific diameter and write across; unwound, the letters are scrambled. The rod's diameter is the key &mdash; ancient transposition hardware.",
    x: "The messenger's belt reads as gibberish until wrapped on the matching rod."
  },
  "rail-fence": {
    t: "Rail Fence (Zigzag)",
    d: "Write the plaintext in a ZIGZAG across N rails, then read row by row. The rail count is the key. Simple transposition, simple to break &mdash; know it by name.",
    x: "'HELLO WORLD' on 2 rails: HLOWRD + EL OL."
  },
  "Hashing": {
    t: "Hashing",
    d: "One-way function producing a FIXED-LENGTH digest. Required properties: preimage resistance, second-preimage resistance, COLLISION resistance, avalanche. Serves integrity, password storage, signatures.",
    x: "Sign the 32-byte SHA-256 digest instead of the 2 GB file."
  },
  "MD5": {
    t: "MD5",
    d: "128-bit digest &mdash; BROKEN: collisions on demand since 2004. Never acceptable for security; only non-security checksumming. Exam answer: broken, do not use.",
    x: "The Flame malware forged a Microsoft signature via an MD5 collision."
  },
  "SHA-1": {
    t: "SHA-1",
    d: "160-bit digest &mdash; BROKEN for collisions (SHAttered, 2017) and deprecated everywhere. Migrate to SHA-2/SHA-3.",
    x: "Browsers reject SHA-1 TLS certificates outright."
  },
  "SHA-2": {
    t: "SHA-2 (SHA-256 / SHA-512)",
    d: "The current WORKHORSE family (224&ndash;512-bit digests). No practical breaks; SHA-256 dominates TLS, code signing and blockchain.",
    x: "Certificate signatures today are almost universally SHA-256."
  },
  "SHA-3": {
    t: "SHA-3 (Keccak)",
    d: "NIST's 2015 standard on a DIFFERENT internal design (sponge construction) &mdash; a hedge in case SHA-2's construction ever falls, immune to its length-extension quirk. Alternative, not replacement.",
    x: "If SHA-2 were broken tomorrow, SHA-3 stands on unrelated mathematics."
  },
  "Symmetric": {
    t: "Symmetric Encryption",
    d: "ONE shared secret key both encrypts and decrypts. FAST &mdash; the bulk-data champion &mdash; but key distribution is the curse: n users need n(n-1)/2 pairwise keys, and no non-repudiation.",
    x: "100 users &rarr; 4,950 keys; that arithmetic is a rite-of-passage exam question."
  },
  "Block": {
    t: "Block Ciphers",
    d: "Encrypt FIXED-SIZE blocks (AES: 128 bits) through rounds of substitution and permutation. How blocks chain together is the MODE (ECB&ndash;CTR) &mdash; and mode choice can make or break security.",
    x: "AES-128 processes sixteen bytes at a time."
  },
  "Stream": {
    t: "Stream Ciphers",
    d: "Encrypt BIT-BY-BIT by XORing a keystream &mdash; fast, low-latency, ideal for continuous traffic. Fatal rule: never reuse a keystream (key+nonce).",
    x: "Voice and video links favour stream ciphers (today usually AES in CTR/GCM acting as one)."
  },
  "DES": {
    t: "DES — Data Encryption Standard",
    d: "56-bit-key block cipher (64-bit blocks), 16 Feistel rounds &mdash; DEAD: brute-forced in under a day since 1998. Historical anchor and the reason 3DES exists.",
    x: "EFF's Deep Crack machine broke DES in 56 hours in 1998."
  },
  "3DES": {
    t: "3DES — Triple DES",
    d: "DES three times (Encrypt-Decrypt-Encrypt) for ~112-bit effective strength. A stopgap that bought DES time; slow, small blocks, retired by NIST (2023) &mdash; use AES.",
    x: "Legacy payment terminals clung to 3DES for years after AES arrived."
  },
  "aes": {
    t: "AES (Rijndael)",
    d: "THE standard: 128-bit blocks, keys of 128/192/256 bits, substitution-permutation design. Fast in hardware (AES-NI), no practical attacks &mdash; the default answer for symmetric encryption.",
    x: "AES-256-GCM protects everything from TLS to full-disk encryption."
  },
  "CAST-128": {
    t: "CAST-128",
    d: "64-bit-block Feistel cipher (40&ndash;128-bit keys), historically used inside PGP. Recognise the name as a symmetric block cipher; modern use is rare.",
    x: "Older PGP messages were often CAST-128 encrypted."
  },
  "SAFER": {
    t: "SAFER",
    d: "Secure And Fast Encryption Routine &mdash; a block-cipher family whose variants underpin BLUETOOTH pairing/authentication (SAFER+). Exam recall: SAFER &harr; Bluetooth.",
    x: "Classic Bluetooth key derivation uses SAFER+."
  },
  "Blowfish": {
    t: "Blowfish",
    d: "Schneier's free 64-bit-block cipher, keys to 448 bits. Small blocks age poorly &mdash; but its expensive key setup lives on in the BCRYPT password hash.",
    x: "bcrypt's deliberate slowness against cracking comes from Blowfish's key schedule."
  },
  "Twofish": {
    t: "Twofish",
    d: "Blowfish's successor: 128-bit blocks, up to 256-bit keys, an AES FINALIST (lost to Rijndael). Secure and unpatented; recognise it as the 'almost-AES'.",
    x: "VeraCrypt still offers Twofish, alone or cascaded with AES."
  },
  "rc56": {
    t: "RC5 / RC6",
    d: "Rivest block ciphers famous for data-dependent ROTATIONS and tunable parameters; RC6 was an AES finalist. Distinguish from RC4 (stream)!",
    x: "RC5 powered distributed.net's long-running key-cracking challenges."
  },
  "RC4": {
    t: "RC4",
    d: "The once-ubiquitous STREAM cipher &mdash; now PROHIBITED (RFC 7465): its biased keystream leaks plaintext. Killed WEP; removed from TLS. Exam answer: broken stream cipher.",
    x: "WEP's collapse was RC4 misuse; TLS banned RC4 outright in 2015."
  },
  "ecb": {
    t: "ECB — Electronic Codebook",
    d: "Each block encrypted INDEPENDENTLY: identical plaintext blocks &rarr; identical ciphertext blocks, so patterns survive. Never use for real data &mdash; the penguin picture proves why.",
    x: "The ECB-encrypted Tux image still visibly shows the penguin."
  },
  "cbc": {
    t: "CBC — Cipher Block Chaining",
    d: "Each block is XORed with the PREVIOUS ciphertext block before encryption (random IV first). Hides patterns; encryption is serial; padding-oracle bugs haunt sloppy implementations.",
    x: "TLS's Lucky13/POODLE eras were CBC padding-oracle attacks."
  },
  "cfb": {
    t: "CFB — Cipher Feedback",
    d: "Runs the block cipher as a self-synchronizing STREAM: previous ciphertext is re-encrypted to make keystream. Handles odd-sized data; errors propagate one block then heal.",
    x: "Legacy terminal links used CFB to encrypt character-by-character."
  },
  "ofb": {
    t: "OFB — Output Feedback",
    d: "Keystream generated by repeatedly encrypting the IV &mdash; independent of the data, so bit errors do NOT propagate. Keystream can be precomputed; never reuse the IV.",
    x: "Noisy radio links liked OFB: a flipped bit corrupts only itself."
  },
  "ctr": {
    t: "CTR — Counter Mode",
    d: "Encrypt nonce+COUNTER to make keystream: fully PARALLEL, random access, the modern favourite &mdash; and with authentication bolted on it becomes GCM. Nonce reuse is fatal.",
    x: "AES-GCM (CTR + auth tag) is today's default authenticated encryption."
  },
  "Asymmetric": {
    t: "Asymmetric Encryption",
    d: "A mathematically linked KEY PAIR: public encrypts/verifies, private decrypts/signs. Solves key distribution (2n keys, not n(n-1)/2) and enables signatures/non-repudiation &mdash; but ~1000&times; slower, so it transports symmetric keys rather than bulk data.",
    x: "TLS uses asymmetric crypto for the handshake, symmetric AES for the payload."
  },
  "sw-factoring": {
    t: "Factoring (Hard Problem)",
    d: "RSA's security rests on the difficulty of FACTORING the product of two huge primes. Easy to multiply, infeasible to reverse at 2048+ bits &mdash; until a large quantum computer runs Shor's algorithm.",
    x: "Publishing n = p&times;q is safe because recovering p and q is computationally hopeless."
  },
  "Discrete Log": {
    t: "Discrete Logarithm (Hard Problem)",
    d: "Given g^x mod p, finding x is infeasible &mdash; the foundation of Diffie-Hellman, El Gamal, DSA, and (on curves) ECC. The 'other' hard problem alongside factoring.",
    x: "DH publishes g^a and g^b openly; only holders of a or b can form the shared secret."
  },
  "RSA": {
    t: "RSA",
    d: "The factoring-based workhorse: encryption AND signatures with one algorithm. 2048-bit minimum today. Slow &mdash; so it wraps symmetric session keys instead of encrypting data.",
    x: "The classic TLS pattern: RSA-protected exchange of an AES session key."
  },
  "Diffie-Hellmann": {
    t: "Diffie-Hellman Key Exchange",
    d: "Two parties derive a SHARED SECRET over a public channel &mdash; the 1976 breakthrough that birthed public-key crypto. Provides agreement, NOT authentication: unauthenticated DH falls to MITM. Ephemeral DH adds forward secrecy.",
    x: "TLS uses ECDHE (ephemeral) so a later private-key theft can't decrypt recorded sessions."
  },
  "ecc": {
    t: "Elliptic Curve Cryptography (ECC)",
    d: "Discrete log on ELLIPTIC CURVES: equivalent strength with far smaller keys (ECC-256 &asymp; RSA-3072). Less compute, less power &mdash; the choice for mobile, IoT and modern TLS.",
    x: "Your phone's TLS handshakes run ECDHE + ECDSA for speed and battery life."
  },
  "El Gamal": {
    t: "El Gamal",
    d: "Discrete-log ENCRYPTION extending Diffie-Hellman; probabilistic, and the ciphertext is roughly DOUBLE the plaintext size &mdash; its exam-famous drawback. Basis of DSA's design lineage.",
    x: "GnuPG offers El Gamal encryption keys; note the message expansion."
  },
  "DSA": {
    t: "DSA — Digital Signature Algorithm",
    d: "NIST's discrete-log SIGNATURE-ONLY standard (FIPS 186). Signs and verifies; never encrypts. Modern practice prefers ECDSA/EdDSA; classic trap: 'encrypt with DSA' is impossible.",
    x: "Older code-signing and SSH keys used DSA; today it's ECDSA/Ed25519."
  }
});

/* ============================================================
   CISSP Domain 3 — Layouts 5-9 hover details (part B: L7 PKI, L8 cryptanalysis, L9 physical)
   ============================================================ */
Object.assign(window.AC_DETAILS, {
  /* ================= LAYOUT 7 — SIGNATURES, CERTIFICATES, PKI, KEY MANAGEMENT ================= */
  "Digital Signatures": {
    t: "Digital Signatures",
    d: "Hash the message, then encrypt the DIGEST with the sender's PRIVATE key. Anyone can verify with the public key. Delivers integrity + authenticity + NON-REPUDIATION &mdash; the only mechanism giving all three. Signing = private key; verifying = public key. Drill that direction.",
    x: "Code signing: the vendor signs the installer; your OS verifies it against the vendor's public key."
  },
  "ds-integrity": {
    t: "Integrity (via Digital Signature)",
    d: "The signature covers the message HASH &mdash; change one bit and verification fails. You get tamper-evidence automatically with every signature.",
    x: "A modified invoice no longer matches its signed digest."
  },
  "verify-owner": {
    t: "Verify the Owner of a Public Key",
    d: "THE problem certificates solve: a public key alone says nothing about WHO it belongs to. A certificate is a CA's signed assertion binding identity &harr; public key, replacing per-person trust with trust in the CA.",
    x: "Without certificates, an attacker could hand you 'the bank's' public key &mdash; theirs."
  },
  "Digital Certificates": {
    t: "Digital Certificates",
    d: "A signed data structure (X.509) binding a PUBLIC KEY to an identity, issued by a Certificate Authority after vetting. Contains subject, issuer, validity dates, key, and the CA's signature. Trust the CA &rArr; trust every certificate it signs.",
    x: "The padlock in your browser is an X.509 certificate chain validating to a trusted root."
  },
  "X.509": {
    t: "X.509",
    d: "THE standard certificate format: version, serial number, subject, issuer, validity period, public key, extensions (SANs, key usage) and the CA signature. Version 3 is current; know the field names.",
    x: "openssl x509 -text dumps every field of a web server's certificate."
  },
  "Replacement": {
    t: "Certificate Replacement",
    d: "Certificates EXPIRE by design &mdash; short lifetimes limit exposure from undetected key compromise. Renewal/replacement (ideally automated) is routine operations; expired-cert outages are self-inflicted downtime.",
    x: "Public TLS certs now cap at 398 days; ACME/Let's Encrypt automates 90-day renewals."
  },
  "Revocation": {
    t: "Certificate Revocation",
    d: "Killing a certificate BEFORE it expires &mdash; because the private key leaked, the info changed, or the subject left. Two check mechanisms: CRL (download the blacklist) and OCSP (ask about one serial). Heartbleed made this an exam favourite.",
    x: "After a server-key compromise you revoke immediately; expiry alone would leave a valid-looking stolen key."
  },
  "CRL": {
    t: "CRL — Certificate Revocation List",
    d: "A CA-signed LIST of revoked serial numbers, downloaded periodically by clients. Simple but STALE between updates and grows large &mdash; the latency window is the classic weakness.",
    x: "A cert revoked at 09:00 may still pass checks until the next CRL refresh."
  },
  "OCSP": {
    t: "OCSP — Online Certificate Status Protocol",
    d: "Ask the CA responder in REAL TIME about ONE certificate: good/revoked/unknown. Fresher than CRLs; adds latency and a privacy leak (the responder sees your browsing) &mdash; fixed by OCSP STAPLING, where the server presents a signed recent response.",
    x: "TLS stapling: the web server attaches its own fresh OCSP proof to the handshake."
  },
  "Pinning": {
    t: "Certificate Pinning",
    d: "The client hard-codes WHICH certificate or key to expect, rejecting anything else &mdash; even a 'valid' cert from a compromised CA. Defends against rogue-CA MITM; the cost is operational brittleness when keys rotate.",
    x: "A banking app pins its backend key; a corporate TLS-inspection proxy breaks it by design."
  },
  "ca-root": {
    t: "Certificate Authority (Root of Trust)",
    d: "The apex of PKI: the root CA's self-signed certificate is distributed in OS/browser trust stores, and every chain must terminate there. Roots are kept OFFLINE and used only to sign intermediates &mdash; root compromise means game over (see DigiNotar).",
    x: "The DigiNotar root breach let attackers mint valid google.com certs; browsers had to expel the CA."
  },
  "Registration Authority": {
    t: "Registration Authority (RA)",
    d: "Verifies the requester's IDENTITY before certificate issuance &mdash; the vetting desk. The RA never signs certificates; it approves requests that the CA then signs. Issuing = CA, identity-proofing = RA: exam split.",
    x: "For an EV cert, the RA checks company registration documents before the CA issues."
  },
  "intermediate-ca": {
    t: "Intermediate / Issuing CA",
    d: "Sits between the offline root and end-entity certs, doing the day-to-day ISSUING. Compartmentalizes risk: if an intermediate is compromised, revoke it without burning the root. This is why real chains have 3+ links.",
    x: "Let's Encrypt's R-series intermediates sign your cert; the ISRG root stays offline."
  },
  "cert-db": {
    t: "Certificate Database (Revocation List)",
    d: "The CA's authoritative RECORD of every certificate issued and its status &mdash; the source from which CRLs and OCSP answers are generated. Its integrity is as critical as the signing key.",
    x: "Tampering the status DB could 'un-revoke' a stolen certificate."
  },
  "cert-store": {
    t: "Certificate Store (Local)",
    d: "The LOCAL trust store on each device holding trusted roots (and your own certs/keys). Whoever controls it controls what your machine trusts &mdash; adding a rogue root enables silent TLS interception.",
    x: "Corporate proxies add their root to managed devices' stores to inspect HTTPS; malware does the same trick maliciously."
  },
  "kerckhoff": {
    t: "Kerckhoffs' Principle",
    d: "A cryptosystem must stay secure even if EVERYTHING about it except the KEY is public. Security through obscurity fails; open, peer-reviewed algorithms with secret keys win. The philosophical foundation of modern crypto.",
    x: "AES's full spec is public; only your key protects your data &mdash; and that's the point."
  },
  "Generation": {
    t: "Key Generation",
    d: "Keys must come from cryptographically secure RANDOM sources (CSPRNG/HSM) with adequate length. Weak entropy quietly poisons everything downstream &mdash; predictable keys equal no keys.",
    x: "The 2008 Debian OpenSSL bug shrank keyspace to 32,767 possibilities &mdash; every key guessable."
  },
  "Distribution": {
    t: "Key Distribution",
    d: "Getting the shared secret to the other party WITHOUT interception &mdash; symmetric crypto's oldest problem. Solutions: Diffie-Hellman agreement, out-of-band delivery, or hybrid (asymmetric wraps the symmetric key).",
    x: "TLS solves distribution live: ECDHE agrees a fresh session key per connection."
  },
  "Out-of-band": {
    t: "Out-of-Band Distribution",
    d: "Move the key over a DIFFERENT channel than the data &mdash; courier, phone, in person &mdash; so one intercepted channel isn't enough. Secure but unscalable; historically how symmetric keys travelled.",
    x: "The Wi-Fi password texted to you while the traffic flows on the WLAN itself."
  },
  "kd-hybrid": {
    t: "Hybrid Key Distribution",
    d: "The pattern that runs the internet: ASYMMETRIC crypto exchanges/wraps a SYMMETRIC session key, then fast symmetric encryption carries the data. Best of both worlds &mdash; RSA/ECDH for the handshake, AES for the bulk.",
    x: "Every TLS connection: ECDHE handshake &rarr; AES-GCM session."
  },
  "Storage": {
    t: "Key Storage",
    d: "Keys at rest need HARDWARE protection: TPM on endpoints, HSM in the data centre. Software-stored keys are one memory scrape away from theft; hardware keeps keys non-exportable and operations inside the boundary.",
    x: "A signing key inside an HSM can sign, but never leave &mdash; even for admins."
  },
  "TPM": {
    t: "TPM — Trusted Platform Module",
    d: "A tamper-resistant chip ON the device for key storage, sealed secrets, measured/secure boot and attestation. Binds crypto to that specific hardware platform &mdash; the endpoint's root of trust.",
    x: "BitLocker seals the disk key in the TPM; move the drive elsewhere and it won't unlock."
  },
  "HSM": {
    t: "HSM — Hardware Security Module",
    d: "Dedicated tamper-RESPONSIVE appliance for enterprise key management: generates keys, performs crypto inside its boundary, zeroizes on attack, FIPS 140 validated. Where CA roots and payment keys live.",
    x: "The root CA's private key exists only inside an HSM requiring dual-control smart cards."
  },
  "Rotation": {
    t: "Key Rotation",
    d: "Retire and replace keys on SCHEDULE to limit how much data any one key protects (its cryptoperiod) and how long a silent compromise pays off. Automation makes rotation cheap; forgetting it makes breaches expensive.",
    x: "Cloud KMS rotates data-encryption keys yearly; sessions rotate per connection."
  },
  "Disposition": {
    t: "Key Disposition",
    d: "END-OF-LIFE for keys: secure archival (if data must remain readable) or verified destruction. A 'deleted' key that lingers in backups keeps every ciphertext it ever protected at risk.",
    x: "Decommissioning a database: archive the key under escrow or crypto-shred it deliberately."
  },
  "Crypto-shredding": {
    t: "Crypto-Shredding",
    d: "Destroy the KEY to render all data encrypted under it permanently unreadable &mdash; sanitization by mathematics. The go-to for cloud and distributed storage where you can't touch the media.",
    x: "One KMS key deletion 'erases' every replica and backup at once."
  },
  "Key Destruction": {
    t: "Key Destruction",
    d: "Verified, unrecoverable elimination of key material: zeroization in HSMs, overwrite of software keys, documented and witnessed. The final lifecycle stage &mdash; and the proof auditors ask for.",
    x: "The HSM's zeroize function wipes keys instantly if tampering is detected."
  },
  "Recovery": {
    t: "Key Recovery",
    d: "Business insurance against lost keys/leavers: escrowed copies recoverable under CONTROLLED, multi-party procedures. Every recovery path you build is also an attack path &mdash; hence split knowledge and dual control.",
    x: "An employee departs; the recovery agent restores access to their encrypted files."
  },
  "Split Knowledge": {
    t: "Split Knowledge",
    d: "No single person KNOWS the whole secret &mdash; the key exists in parts held by different people (e.g., Shamir splitting). Defeats the rogue insider; pairs with dual control.",
    x: "Three of five key shares must combine to reconstruct the master key."
  },
  "Dual Control": {
    t: "Dual Control",
    d: "No single person can PERFORM the sensitive action alone &mdash; two people must act together. Split knowledge divides the secret; dual control divides the ACTION. Know the difference cold.",
    x: "Two smart cards, two PINs, turned within seconds of each other to activate the HSM."
  },
  "Key Escrow": {
    t: "Key Escrow",
    d: "Keys deposited with a THIRD PARTY for recovery under defined conditions (court order, corporate policy). Recovery insurance vs a juicy target and privacy debate &mdash; remember the Clipper Chip failure.",
    x: "The 1990s Clipper Chip: government-escrowed keys &mdash; rejected, and still the exam's cautionary tale."
  },

  /* ================= LAYOUT 8 — CRYPTANALYSIS ================= */
  "cryptanalytic-attacks": {
    t: "Cryptanalytic Attacks",
    d: "Attacks on the MATHEMATICS &mdash; algorithm and key. Ranked by what the attacker HAS: ciphertext only (hardest) &rarr; known plaintext &rarr; chosen plaintext &rarr; chosen ciphertext (strongest position). That ladder is the exam question.",
    x: "'Attacker can submit ciphertexts for decryption' &rarr; chosen ciphertext attack."
  },
  "Brute Force": {
    t: "Brute Force",
    d: "Try EVERY key until one works &mdash; defeats everything eventually; key LENGTH decides whether 'eventually' means microseconds or millennia. Each added bit doubles the work: that exponential is the whole defence.",
    x: "DES's 2^56 fell in 1998; AES-128's 2^128 outlives the sun."
  },
  "Ciphertext Only": {
    t: "Ciphertext-Only Attack",
    d: "The attacker holds ONLY intercepted ciphertext &mdash; the weakest position and the baseline threat every cipher must survive. Classical ciphers fell to it via frequency analysis; modern ones shouldn't.",
    x: "Cracking a monoalphabetic cipher from letter frequencies alone."
  },
  "Known Plaintext": {
    t: "Known-Plaintext Attack",
    d: "The attacker has PAIRS of plaintext and its ciphertext and hunts the key linking them. Predictable message content (headers, greetings) hands these pairs over for free.",
    x: "Bletchley's cribs: German messages reliably containing 'WETTER' (weather) broke Enigma settings."
  },
  "Chosen Plaintext": {
    t: "Chosen-Plaintext Attack",
    d: "The attacker gets plaintexts OF THEIR CHOICE encrypted and studies the outputs &mdash; feasible whenever encryption is a service (public key, an encrypting oracle). Modern ciphers must resist even this.",
    x: "Feed patterned blocks to an ECB oracle and watch identical ciphertext blocks reveal structure."
  },
  "Chosen Ciphertext": {
    t: "Chosen-Ciphertext Attack",
    d: "The attacker submits CIPHERTEXTS and learns (something about) their decryption &mdash; the strongest standard attacker. Padding oracles are the real-world incarnation; CCA-security is the modern bar.",
    x: "Bleichenbacher/ROBOT: RSA padding error messages leak the session key byte by byte."
  },
  "linear-differential": {
    t: "Linear & Differential Cryptanalysis",
    d: "The academic heavy artillery against block ciphers: LINEAR approximates the cipher with linear equations; DIFFERENTIAL traces how input differences propagate. Modern ciphers (AES) are designed with proofs against both.",
    x: "DES's S-boxes turned out pre-hardened against differential analysis &mdash; the NSA knew in 1974."
  },
  "ca-factoring": {
    t: "Factoring Attack",
    d: "Attack RSA by factoring its modulus back into p and q &mdash; success equals total key recovery. Advances in factoring (and someday Shor's quantum algorithm) directly retire RSA key sizes.",
    x: "RSA-768 was factored in 2009; that's why 2048 bits is today's floor."
  },
  "cryptographic-attacks": {
    t: "Cryptographic Attacks",
    d: "Attacks that SKIP the math and hit the implementation, the protocol, or the people: MITM, replay, side channels, password-cracking economics, coercion. Lesson the exam loves: crypto usually fails around the algorithm, not through it.",
    x: "Nobody brute-forces AES; they steal the key from a temp file or the admin."
  },
  "mitm": {
    t: "Man-in-the-Middle (MITM / On-Path)",
    d: "The attacker sits BETWEEN parties, relaying and possibly altering traffic while each side believes the link is direct. Defeats unauthenticated key exchange (raw DH); beaten by AUTHENTICATION &mdash; certificates, signed exchanges.",
    x: "A rogue Wi-Fi AP terminates your 'secure' session both ways; TLS certificates exist precisely to stop this."
  },
  "Replay": {
    t: "Replay Attack",
    d: "Capture a VALID message and send it AGAIN &mdash; no decryption needed; the crypto validates for the attacker. Beaten by freshness: timestamps, sequence numbers, nonces, challenge-response.",
    x: "Re-sending a captured payment authorisation; Kerberos timestamps exist to kill exactly this."
  },
  "Pass the Hash": {
    t: "Pass the Hash",
    d: "Steal the password HASH and authenticate WITH THE HASH itself &mdash; no cracking required, because NTLM proves knowledge of the hash, not the password. Core lateral-movement technique in Windows breaches.",
    x: "Mimikatz lifts hashes from LSASS; the attacker is 'logged in' everywhere that account reaches."
  },
  "Temporary Files": {
    t: "Temporary Files",
    d: "Plaintext and key material LEAK into temp files, swap, hibernation files, crash dumps and editor autosaves &mdash; recoverable long after the 'encrypted' work ended. Encrypt the whole disk and wipe scratch space.",
    x: "The hibernation file contains the disk-encryption key from RAM at sleep time."
  },
  "Implementation": {
    t: "Implementation Attack",
    d: "Break the CODE, not the cipher: buffer overflows in crypto libraries, bad RNGs, flawed padding checks, protocol downgrades. The dominant real-world failure mode &mdash; the math was fine, the software wasn't.",
    x: "Heartbleed read private keys out of OpenSSL memory; AES itself was never touched."
  },
  "Side Channel": {
    t: "Side-Channel Attack",
    d: "Read secrets from PHYSICAL LEAKAGE of the computation &mdash; power draw, timing, electromagnetic emissions, even sound. Non-invasive and invisible to logs. Counter with constant-time code, shielding and power filtering.",
    x: "Differential power analysis pulls a smart card's key from its electricity bill, microsecond by microsecond."
  },
  "sc-power": {
    t: "Power Analysis",
    d: "Correlate a chip's POWER CONSUMPTION with the bits it processes (SPA/DPA) to extract keys &mdash; the classic smart-card killer. Mitigate with power filtering, masking and constant-power logic.",
    x: "A pay-TV card leaks its key through measurable power spikes per key bit."
  },
  "sc-timing": {
    t: "Timing Attack",
    d: "Measure HOW LONG operations take &mdash; data-dependent branches, cache hits, early-exit comparisons &mdash; and reconstruct secrets from the differences. The fix is CONSTANT-TIME implementations.",
    x: "A string comparison that returns early lets attackers guess an API token byte by byte."
  },
  "Radiation Emissions": {
    t: "Radiation Emissions (Emanations)",
    d: "Electromagnetic leakage from screens, cables and chips reconstructed at a distance &mdash; the van Eck/TEMPEST attack. Countered by shielding, filtering and control zones (ties back to the emanations box in Layout 4).",
    x: "Reading a monitor's image from the parking lot via its EM emissions."
  },
  "Dictionary Attack": {
    t: "Dictionary Attack",
    d: "Try LIKELY passwords (wordlists, leaked corpora, mutations) instead of the whole keyspace &mdash; devastating because humans choose words. Beaten by strong passphrases, rate limiting/lockout and slow hashes (bcrypt).",
    x: "'Summer2024!' falls to a rules-based wordlist in seconds."
  },
  "Rainbow Tables": {
    t: "Rainbow Tables",
    d: "PRECOMPUTED hash-chain tables trade disk space for instant hash reversal &mdash; compute once, crack forever. Completely neutralized by SALTING, which makes every user's hash unique. Salt kills rainbow tables: the exam sentence.",
    x: "Unsalted NTLM lookups take seconds from a public table; add a salt and the table is useless."
  },
  "Birthday Attack": {
    t: "Birthday Attack",
    d: "Finding ANY two inputs that collide needs only ~2^(n/2) tries (the birthday paradox) &mdash; a 128-bit hash gives just 64 bits of collision resistance. This math is what killed MD5 and SHA-1 for signatures.",
    x: "23 people: 50% shared birthday. Same math forged the Flame malware's MD5 certificate."
  },
  "Social Engineering": {
    t: "Social Engineering (against Crypto)",
    d: "Skip the ciphertext, work the HUMAN: phish the passphrase, bribe the key-holder, coerce the admin. Usually the cheapest attack in the whole stack &mdash; countered by procedure (split knowledge, dual control) as much as training.",
    x: "Why crack AES-256 when a convincing 'IT support' call yields the vault password?"
  },
  "Purchase Key": {
    t: "Purchase-Key Attack",
    d: "Just BUY the secret: bribe an insider, purchase leaked credentials, pay a broker. Rational attackers compare the key's price to the cracking cost. Split knowledge means there's no single person to buy.",
    x: "A disgruntled admin sells the signing key for a fraction of the data's value."
  },
  "Rubber Hose": {
    t: "Rubber-Hose Cryptanalysis",
    d: "Extract keys by COERCION &mdash; threats, force, or legal compulsion. No algorithm resists it; mitigations are procedural: split knowledge (no one knows it all) and duress codes/deniable volumes.",
    x: "Border detention until the phone is unlocked &mdash; the $5 wrench beats the $5M cryptanalysis."
  },

  /* ================= LAYOUT 9 — PHYSICAL SECURITY ================= */
  "safety-people": {
    t: "Safety of People",
    d: "The unbreakable rule of Domains 3.8-3.9: HUMAN LIFE outranks every asset, always. Any question that pits people against property &mdash; door failure modes, suppression agents, evacuation &mdash; is answered by protecting people first.",
    x: "Fail-SAFE doors unlock in a fire even though assets become exposed &mdash; people first, always."
  },
  "phys-categories": {
    t: "Physical Control Functions",
    d: "Physical controls are chosen to DETER, DELAY, DETECT, ASSESS and RESPOND &mdash; in that order, as an attacker experiences them. No single control does all five; the LAYERS together do.",
    x: "Fence deters, lock delays, sensor detects, camera assesses, guard responds."
  },
  "Deter": {
    t: "Deter",
    d: "Convince the adversary not to TRY: visible fences, lighting, signage, patrols. Psychological, cheap, and first in the sequence &mdash; every attack prevented here costs nothing downstream.",
    x: "The lit, fenced, camera-signed facility gets skipped for the dark one next door."
  },
  "Delay": {
    t: "Delay",
    d: "SLOW the attacker &mdash; locks, barriers, hardened doors &mdash; buying time for detection and response to catch up. Design rule: delay time must EXCEED response time, or the layers fail.",
    x: "A rated safe that resists entry for 30 minutes only works if guards arrive in 15."
  },
  "Detect": {
    t: "Detect",
    d: "KNOW the intrusion is happening: motion sensors (PIR), glassbreak, door contacts, camera analytics. Undetected attackers have unlimited time &mdash; detection is what starts the clock for response.",
    x: "The PIR sensor trips the moment the intruder crosses the lobby at 02:00."
  },
  "Assess": {
    t: "Assess",
    d: "VERIFY what the alarm actually is before committing response &mdash; real intrusion, wildlife, or a faulty sensor? Cameras and guards do assessment; skipping it breeds alarm fatigue and wasted response.",
    x: "The operator checks the camera feed: raccoon, not burglar &mdash; no dispatch."
  },
  "Respond": {
    t: "Respond",
    d: "The action that ENDS the event: guards intervene, doors lock down, police are called. All earlier layers exist only to make response arrive in time &mdash; deter, delay and detect buy the minutes response spends.",
    x: "Assessed intrusion &rarr; guards converge while remote lockdown seals the wing."
  },
  "Layered Defense": {
    t: "Layered Defense (Physical)",
    d: "Concentric RINGS from property line to asset: perimeter &rarr; building shell &rarr; interior zones &rarr; the vault. Each layer deters, delays and detects; no single failure reaches the asset. Defense-in-depth, physically.",
    x: "Fence &rarr; badge lobby &rarr; mantrap &rarr; locked cage &rarr; encrypted disks: five failures needed."
  },
  "Perimeter": {
    t: "Perimeter",
    d: "The OUTERMOST layer: fences, gates, bollards, natural barriers. Fence heights the exam likes: ~1m deters casual crossing, ~2m+ with barbed wire deters determined intruders. Bollards stop vehicles.",
    x: "An 8-foot fence with three-strand barbed wire marks a controlled facility."
  },
  "Landscape": {
    t: "Landscape (CPTED)",
    d: "Crime Prevention Through Environmental Design: shape the ENVIRONMENT to deny concealment and create natural surveillance &mdash; low thorny shrubs, clear sightlines, no hiding spots near entries.",
    x: "Trimmed hedges under windows remove the burglar's cover; thorny bushes make it painful."
  },
  "Grading": {
    t: "Grading",
    d: "The SLOPE of the land: grade away from the building so water drains off (flood protection) and avoid terrain that gives attackers elevation or concealment near walls.",
    x: "A site graded toward the loading dock floods the server room in a storm."
  },
  "Cameras": {
    t: "Cameras (CCTV)",
    d: "DETERRENT + DETECTION + ASSESSMENT in one: visible domes discourage, monitoring detects, recordings prove. Placement, retention and live monitoring decide value &mdash; unwatched cameras only investigate, never prevent.",
    x: "The mantrap camera confirms the badge user's face matches the badge holder."
  },
  "pir": {
    t: "Passive Infrared Devices (PIR)",
    d: "Motion sensors that detect moving HEAT signatures (body warmth) &mdash; passive because they emit nothing. Cheap interior detection; tune against pets, HVAC drafts and sun-heated windows.",
    x: "After-hours PIR in the corridor trips the alarm on any warm moving body."
  },
  "Lighting": {
    t: "Lighting",
    d: "The cheapest deterrent and the enabler of cameras and guards. Exam number: critical areas want ~8 feet high, 2 foot-candles. Avoid glare that blinds your own cameras, and light the perimeter evenly &mdash; shadows are corridors.",
    x: "Continuous perimeter lighting at 2 fc lets cameras identify faces at the fence line."
  },
  "badges": {
    t: "Card Readers / Badges",
    d: "Electronic ACCESS CONTROL + audit trail at doors. Threats: cloning of legacy 125 kHz cards, tailgating behind valid users, lost badges. Pair with PIN/biometric for critical doors and revoke instantly on loss.",
    x: "A flipper-cloned prox card opens the door; smart cards with challenge-response don't clone."
  },
  "mantraps": {
    t: "Doors / Mantraps",
    d: "Two interlocked doors where the second opens only after the first CLOSES &mdash; one authenticated person per cycle. THE control against tailgating/piggybacking; often adds scales or biometrics inside.",
    x: "The data-centre vestibule traps the tailgater between doors until security arrives."
  },
  "Locks": {
    t: "Locks",
    d: "The classic DELAY control &mdash; every lock yields to time and skill; its job is slowing entry until detection/response engage. Grades matter (residential vs commercial vs high-security), as do key control policies.",
    x: "A Grade 1 deadbolt buys minutes; a wafer cabinet lock buys seconds."
  },
  "lock-mechanical": {
    t: "Mechanical Locks",
    d: "Pin tumbler, warded, combination &mdash; no power, no logs. Vulnerable to picking, bumping and unauthorized key DUPLICATION; master-key systems concentrate that risk. Use restricted keyways for critical doors.",
    x: "A bump key opens a standard pin tumbler in seconds; restricted blanks can't be copied at kiosks."
  },
  "lock-digital": {
    t: "Digital / Electronic Locks",
    d: "Keypads, smart cards, biometrics with AUDIT LOGS and instant revocation &mdash; but they inherit cyber failure modes: default codes, replay, power loss. Define fail-safe vs fail-secure per door and life-safety code.",
    x: "The keypad logs every entry; shoulder-surfing the code defeats it anyway."
  },
  "Windows": {
    t: "Windows",
    d: "The building shell's WEAKEST points. Options the exam names: tempered, laminated (holds when shattered), wired, polycarbonate/acrylic, plus security FILM &mdash; and sensors (shock, glassbreak) because glass will still break.",
    x: "Laminated glass stays in its frame after the brick bounces off."
  },
  "Shock": {
    t: "Shock Sensors",
    d: "Detect the VIBRATION of impact on glass or walls &mdash; alarm on the attempt, before penetration succeeds. Mount on the pane/frame; tune against trucks and hail.",
    x: "The sensor alarms at the first hammer blow, not after entry."
  },
  "Glassbreak": {
    t: "Glassbreak Detectors",
    d: "ACOUSTIC sensors recognizing the specific frequency signature of breaking glass, covering whole rooms of windows from one unit. Complements contacts: the contact catches the opened window, glassbreak catches the smashed one.",
    x: "One ceiling unit hears any of the lobby's twelve panes shatter."
  },
  "Walls": {
    t: "Walls",
    d: "True barriers run SLAB-TO-SLAB (floor to structural ceiling). The exam trap: partition walls stopping at a drop ceiling let intruders climb OVER into the 'secure' room through the plenum.",
    x: "The server-room wall ends above the ceiling tiles &mdash; entry is a tile-lift away."
  },
  "Skimming": {
    t: "Skimming",
    d: "Rogue HARDWARE added to legitimate readers (ATMs, badge readers, fuel pumps) capturing card data + PINs. Counter with tamper-evident inspection, anti-skimming design, and contactless/chip over magstripe.",
    x: "An overlay on the garage badge reader harvests every credential swiped that week."
  },
  "Infrastructure": {
    t: "Infrastructure (Facility Systems)",
    d: "The utilities availability depends on: NETWORK cabling, POWER and HVAC. Physical security includes keeping these running and protected &mdash; a perfect firewall can't route around a dead UPS or a cooked server room.",
    x: "The 'security incident' was a failed CRAC unit thermally shutting down the SAN."
  },
  "phys-network": {
    t: "Network Infrastructure (Physical)",
    d: "Protect cable runs, patch panels, IDF/MDF closets: locked rooms, conduit, no jacks in public areas, tamper detection. Physical access to the wire equals tap, injection or cut &mdash; encryption is the compensating control.",
    x: "An unlocked wiring closet lets anyone bridge a rogue AP into the core switch."
  },
  "phys-power": {
    t: "Power",
    d: "Clean, continuous power is an AVAILABILITY control. Strategy in layers: surge protection + line conditioning for quality, UPS for the gap, generator for the duration. Know the anomaly vocabulary (sag, brownout, spike, surge).",
    x: "Ride the first 10 minutes on UPS while the generator spins up and takes the load."
  },
  "UPS": {
    t: "UPS — Uninterruptible Power Supply",
    d: "Battery BRIDGE covering the seconds-to-minutes between outage and generator (or graceful shutdown). Online/double-conversion UPS also conditions power continuously; sized by load and runtime.",
    x: "The datacentre UPS carries 8 minutes at full load &mdash; the generator needs 45 seconds."
  },
  "Generator": {
    t: "Generator",
    d: "LONG-DURATION backup power &mdash; hours to days, limited only by FUEL. Needs transfer switching, fuel contracts and, critically, regular UNDER-LOAD testing; an untested generator is a hope, not a control.",
    x: "Weekly no-load runs plus quarterly load-bank tests keep the diesel honest."
  },
  "outages": {
    t: "Power Outages (Fault / Blackout)",
    d: "Total LOSS of power: a FAULT is momentary, a BLACKOUT is prolonged. UPS bridges faults; generators outlast blackouts. Precise vocabulary is the exam's favourite power question.",
    x: "A one-second fault reboots unprotected desktops; the UPS-backed racks don't blink."
  },
  "degradation": {
    t: "Power Degradation (Sag / Brownout / Spike / Surge)",
    d: "LOW voltage: SAG (momentary) and BROWNOUT (prolonged). HIGH voltage: SPIKE (momentary) and SURGE (prolonged). Low starves and reboots equipment; high burns it. Conditioning and surge protection are the fixes.",
    x: "The elevator motor's start sags the floor's lights; the lightning strike's spike kills unprotected PSUs."
  },
  "HVAC": {
    t: "HVAC",
    d: "Heating, ventilation, air conditioning &mdash; availability for electronics AND people. Exam points: POSITIVE pressurization (air pushes out, contaminants stay out), dedicated systems for data centres, and monitoring with alerts.",
    x: "Positive pressure keeps smoke and dust flowing out the opened door, not in."
  },
  "Temperature": {
    t: "Temperature",
    d: "Electronics want steady cool &mdash; roughly 15-32&deg;C (ASHRAE window; ~20-25&deg;C classic guidance). HEAT is the killer: monitor at rack level, alert on trends, and remember hot-aisle/cold-aisle containment.",
    x: "A failed CRAC at 2 a.m. cooks the top-of-rack switches first &mdash; sensors page before servers die."
  },
  "Humidity": {
    t: "Humidity",
    d: "The 40-60% band (exam classic: 45-55%): too LOW breeds static electricity that zaps components; too HIGH breeds condensation and corrosion. Both extremes destroy hardware &mdash; monitor and control.",
    x: "A dry winter server room delivers 20 kV static pops to every unearthed technician."
  },
  "Air Quality": {
    t: "Air Quality",
    d: "Dust clogs heatsinks and filters (thermal failure); corrosive gases eat contacts. Filtration, positive pressure and sealed rooms keep particulates out &mdash; and gaseous suppression discharge needs air handling too.",
    x: "Construction dust next door triples fan failures within a quarter."
  },
  "Fire Detection": {
    t: "Fire Detection",
    d: "Three sensing families by fire signature: FLAME (infrared/UV, sees the flicker), SMOKE (ionization/photoelectric, catches particles), HEAT (thermal, slow but false-alarm-proof). Early, accurate detection triggers suppression and evacuation.",
    x: "VESDA air sampling smells smoldering cable insulation minutes before flames."
  },
  "flame": {
    t: "Flame Detection (Infrared)",
    d: "Optical sensors seeing the IR/UV FLICKER of actual flames &mdash; near-instant on open fire, blind to smolder. Used where fires ignite fast (fuel, chemicals); needs line of sight.",
    x: "The generator room's IR detector trips milliseconds after fuel vapour ignites."
  },
  "Smoke": {
    t: "Smoke Detection",
    d: "Catches fires at the SMOKE stage, before flames: ionization (fast/flaming fires), photoelectric (smoldering fires), or DUAL combining both. Photoelectric favours the smolder-prone office; dual covers all.",
    x: "The photoelectric unit catches the overheating UPS battery hours before ignition."
  },
  "heat": {
    t: "Heat Detection (Thermal)",
    d: "Trips on fixed TEMPERATURE or rate-of-rise. Slowest to alarm but nearly immune to false alarms &mdash; the choice for dusty, steamy or smoky-by-nature spaces where smoke detectors cry wolf.",
    x: "The parking garage uses rate-of-rise heads; exhaust fumes would fool any smoke sensor."
  },
  "Ionization": {
    t: "Ionization Smoke Detector",
    d: "A tiny radioactive source ionizes air; smoke particles disturb the current &rarr; alarm. Fastest for FLAMING, fast-burning fires with small particles; weaker on smolder; prone to cooking-steam false alarms.",
    x: "The wastebasket flash fire trips ionization seconds before photoelectric notices."
  },
  "Photo-electric": {
    t: "Photoelectric Smoke Detector",
    d: "A light beam in a chamber; SMOKE scatters the light onto the sensor &rarr; alarm. Best for SMOLDERING fires with large particles &mdash; exactly how electrical/cable fires start, hence the data-centre preference.",
    x: "Smoldering wire insulation scatters the beam long before open flame."
  },
  "Dual": {
    t: "Dual Smoke Detector",
    d: "Ionization + photoelectric in ONE head: fast on flaming AND smoldering fires. The default recommendation when you can't predict the fire type.",
    x: "Mixed-use floors deploy dual detectors to cover both fire profiles."
  },
  "Fire Suppression": {
    t: "Fire Suppression",
    d: "Kill one leg of the fire triangle: WATER removes heat, GAS removes/starves oxygen or breaks the chain reaction. Water where people work, gas where electronics live &mdash; and life safety governs every choice (evacuate before CO&#8322;!).",
    x: "The office gets sprinklers; the server hall gets FM-200 with alarm-then-discharge delay."
  },
  "Water": {
    t: "Water Suppression (Sprinklers)",
    d: "The four pipe systems: WET (charged, instant, freeze-risk), DRY (air-filled until triggered &mdash; cold spaces), PRE-ACTION (two triggers &mdash; the data-centre pick against accidental discharge), DELUGE (all heads open, everything soaks).",
    x: "Pre-action requires detector + heat-fused head before any water enters the room."
  },
  "Wet": {
    t: "Wet Pipe Sprinklers",
    d: "Pipes ALWAYS charged with water; each head fuses independently at temperature. Simplest, cheapest, most reliable &mdash; but any pipe/head failure leaks immediately and freezing bursts pipes.",
    x: "Office towers standardize on wet pipe; one fused head over the fire discharges alone."
  },
  "Dry": {
    t: "Dry Pipe Sprinklers",
    d: "Pipes hold pressurized AIR; a head opening releases air, then the valve sends water. Delayed but freeze-proof &mdash; the choice for unheated warehouses, garages and loading docks.",
    x: "The unheated loading dock's dry system can't burst in January."
  },
  "Pre-action": {
    t: "Pre-Action Sprinklers",
    d: "TWO independent events required: detection charges the pipes, then a head must still fuse to discharge. Minimizes accidental-discharge risk &mdash; THE water system for data centres and museums.",
    x: "A knocked sprinkler head alone spills nothing; the pipes are still dry until a detector confirms fire."
  },
  "Deluge": {
    t: "Deluge Systems",
    d: "ALL heads OPEN; the deluge valve floods every head at once on detection. Maximum water for maximum hazard &mdash; fuel depots, chemical plants, aircraft hangars. Never where electronics or archives live.",
    x: "The hangar's deluge drowns a fuel-spill fire across the entire floor in seconds."
  },
  "Gas": {
    t: "Gaseous Suppression",
    d: "Suppress WITHOUT water damage: inert gases (INERGEN, Argonite) drop oxygen below combustion; chemical agents (FM-200) pull heat/break the reaction. Halon's ozone-killing legacy is why these replacements exist. Evacuate before discharge.",
    x: "The vault floods with FM-200; servers keep running, fire dies, no cleanup."
  },
  "INERGEN": {
    t: "INERGEN (IG-541)",
    d: "Inert blend of nitrogen, argon and CO&#8322; that lowers oxygen to ~12-14% &mdash; fire can't burn, people can still breathe briefly (the CO&#8322; fraction stimulates breathing). Zero ozone impact, no residue.",
    x: "INERGEN discharge lets staff exit calmly while the fire suffocates."
  },
  "Argonite": {
    t: "Argonite (IG-55)",
    d: "50/50 nitrogen-argon inert blend &mdash; same oxygen-displacement principle as INERGEN, no residue, environmentally clean. Recognise both names as inert-gas agents.",
    x: "The archive room's Argonite system suppresses without touching the manuscripts."
  },
  "FM-200": {
    t: "FM-200 (HFC-227ea)",
    d: "THE halon replacement: a chemical agent absorbing heat and interrupting combustion at ~7% concentration &mdash; safe for occupied spaces, no residue, discharge in ~10 seconds. The standard data-centre gas.",
    x: "FM-200 knocks the fire down before the second rack even warms."
  },
  "Aero-K": {
    t: "Aero-K",
    d: "AEROSOL of micron-scale potassium compounds interrupting the flame's chain reaction &mdash; compact, no pressurized cylinders, minimal residue. Newer condensed-aerosol technology worth recognizing by name.",
    x: "A small Aero-K unit protects the telecom cabinet where gas bottles won't fit."
  },
  "Extinguisher": {
    t: "Fire Extinguishers (Classes)",
    d: "Match the CLASS to the fuel: A common combustibles, B liquids, C ELECTRICAL, D metals, K kitchen oils. Wrong class can be lethal &mdash; water on electrical or grease spreads the disaster. PASS: Pull, Aim, Squeeze, Sweep.",
    x: "A CO&#8322; (BC) extinguisher for the electrical panel; never the water can."
  },
  "co2": {
    t: "CO₂ Suppression",
    d: "Displaces OXYGEN entirely &mdash; excellent on electrical fires, LETHAL to people at suppressing concentrations. Unoccupied spaces only, with pre-discharge alarms and delays. The life-safety exam answer every time.",
    x: "The cable vault's CO&#8322; system sounds a 30-second evacuation horn before flooding."
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

  /* ================= LAYOUT 5 — CLOUD FIGURES ================= */
  var SVC = [
    ["IaaS", "you manage the OS and up &mdash; most control, most work"],
    ["PaaS", "provider runs the platform &mdash; you bring app + data"],
    ["SaaS", "provider runs everything &mdash; you govern data, users, config"]
  ];
  set("Service Models", "c5svc"); G["c5svc"] = rows("Service Models &mdash; who manages what", SVC, -1, "responsibility shrinks downward &mdash; ACCOUNTABILITY never moves");
  ["IaaS", "PaaS", "SaaS"].forEach(function (k, i) { G["c5svc" + i] = rows("Service Models &mdash; who manages what", SVC, i, "responsibility shrinks downward &mdash; ACCOUNTABILITY never moves"); set(k, "c5svc" + i); });

  var DEP = [
    ["PUBLIC", "shared with everyone", "cheapest &middot; most elastic", "logical isolation only"],
    ["PRIVATE", "one organization", "most control &middot; costly", "easiest compliance"],
    ["COMMUNITY", "shared mission group", "costs split", "common compliance"],
    ["HYBRID", "private + public mix", "cloud bursting", "seams need securing"]
  ];
  set("Deployment Models", "c5dep"); G["c5dep"] = cols("Deployment Models &mdash; who shares it", DEP, -1);
  [["Public", 0], ["Private", 1], ["Community", 2], ["cloud-hybrid", 3]].forEach(function (p) { G["c5dep" + p[1]] = cols("Deployment Models &mdash; who shares it", DEP, p[1]); set(p[0], "c5dep" + p[1]); });

  var CHAR = [
    ["On-Demand Self Service", "provision it yourself, no human at the provider"],
    ["Broad Network Access", "reachable from anywhere, any client"],
    ["Resource Pooling", "multi-tenant shared hardware &mdash; the security seam"],
    ["Rapid Elasticity", "scales out AND back automatically"],
    ["Measured Service", "metered pay-per-use &mdash; usage is visible"]
  ];
  set("cloud-characteristics", "c5ch"); G["c5ch"] = rows("NIST's Five Cloud Characteristics", CHAR, -1, "missing any one? then it isn't cloud (SP 800-145)");
  ["On-Demand Self Service", "Broad Network Access", "Resource Pooling", "Rapid Elasticity", "Measured Service"].forEach(function (k, i) { G["c5ch" + i] = rows("NIST's Five Cloud Characteristics", CHAR, i, "missing any one? then it isn't cloud (SP 800-145)"); set(k, "c5ch" + i); });

  var CMP = [
    ["VIRTUAL MACHINE", "full guest OS", "strongest isolation", "risk: VM escape, sprawl"],
    ["CONTAINERS", "share the host kernel", "light &amp; fast", "risk: kernel = shared fate"],
    ["SERVERLESS", "just functions", "no OS to patch", "risk: IAM scope, injection"]
  ];
  set("Virtualized Compute", "c5cmp"); G["c5cmp"] = cols("Compute Abstraction Levels", CMP, -1, "less to manage &rarr; a different boundary to trust");
  [["Virtual Machine", 0], ["Containers", 1], ["Serverless", 2]].forEach(function (p) { G["c5cmp" + p[1]] = cols("Compute Abstraction Levels", CMP, p[1]); set(p[0], "c5cmp" + p[1]); });

  var HYP = [
    ["TYPE 1 &mdash; BARE METAL", "runs on the hardware", "small attack surface", "ESXi, Hyper-V &mdash; production"],
    ["TYPE 2 &mdash; HOSTED", "runs on a host OS", "inherits host's flaws", "VirtualBox &mdash; desktops/labs"]
  ];
  set("Hypervisor", "c5hyp"); G["c5hyp"] = cols("Hypervisor Types", HYP, -1, "compromise the hypervisor = compromise every guest");
  G["c5ceng"] = card("Container Engine", ["the runtime isolating containers on one kernel", "(namespaces + cgroups) &mdash; Docker, containerd", "harden and patch it like a hypervisor"], "a runtime escape flaw exposes the whole host");
  set("Container Engine", "c5ceng");

  var IDP = [
    ["LOCAL IdP", "identity stays on-prem (AD)", "you keep control &amp; burden", "outage stops cloud logins"],
    ["CLOUD IdP", "identity hosted in cloud", "HA + MFA features built in", "its admins = crown jewels"]
  ];
  set("Identity Provider", "c5idp"); G["c5idp"] = cols("Where Identity Lives", IDP, -1);
  set("idp-local", "c5idp0"); G["c5idp0"] = cols("Where Identity Lives", IDP, 0);
  set("idp-cloud", "c5idp1"); G["c5idp1"] = cols("Where Identity Lives", IDP, 1);

  var CID = [
    ["Cloud", "accounts live only in the cloud &mdash; simple, a silo"],
    ["Linked", "two separate accounts loosely joined &mdash; weakest"],
    ["Synced", "on-prem accounts + hashes replicated up"],
    ["Federated", "authentication stays home &mdash; SAML/OIDC redirect"]
  ];
  set("cloud-identity", "c5cid"); G["c5cid"] = rows("Cloud Identity Models", CID, -1, "know WHERE authentication actually happens in each");
  [["ci-cloud", 0], ["Linked", 1], ["Synced", 2], ["Federated", 3]].forEach(function (p) { G["c5cid" + p[1]] = rows("Cloud Identity Models", CID, p[1], "know WHERE authentication actually happens in each"); set(p[0], "c5cid" + p[1]); });

  var RLS = [
    ["ACCOUNTABLE", "the CUSTOMER &mdash; data owner", "answers to regulators", "can NEVER be outsourced"],
    ["RESPONSIBLE", "the PROVIDER &mdash; processor", "security OF the cloud", "line moves with model"]
  ];
  set("cloud-roles", "c5rls"); G["c5rls"] = cols("Shared Responsibility Split", RLS, -1, "you outsource work &mdash; never accountability");
  set("Accountable", "c5rls0"); G["c5rls0"] = cols("Shared Responsibility Split", RLS, 0, "you outsource work &mdash; never accountability");
  set("Responsible", "c5rls1"); G["c5rls1"] = cols("Shared Responsibility Split", RLS, 1, "you outsource work &mdash; never accountability");
  G["c5con"] = card("Cloud Consumer", ["the org USING the service &mdash; owns identity,", "classification and configuration", "of everything the model leaves in its hands"], "no provider can classify your data for you");
  set("Cloud Consumer", "c5con");
  G["c5own"] = card("Owner / Controller", ["decides WHY and HOW data is processed", "sets classification, retention, lawful basis", "GDPR: the controller carries accountability"], "choosing to store EU PII in a SaaS CRM makes you controller");
  set("owner-controller", "c5own");
  G["c5prv"] = card("Cloud Provider / Processor", ["processes data ON BEHALF OF the controller", "bound by contract (DPA) and instructions", "proves controls via SOC 2 / ISO 27001"], "the vendor may not mine your data &mdash; processor only");
  set("provider-processor", "c5prv");
  G["c5brk"] = card("Cloud Broker", ["intermediary aggregating / integrating", "services across multiple providers", "adds a third party to your trust chain"], "one portal, one bill &mdash; one more contract to vet");
  set("Cloud Broker", "c5brk");
  G["c5aud"] = card("Cloud Auditor", ["independent examiner of provider controls", "produces the attestations you rely on", "SOC reports &middot; ISO certificates"], "a SOC 2 Type 2 substitutes for touring the data centre");
  set("Cloud Auditor", "c5aud");

  var PRT = [
    ["SPML", "PROVISIONING accounts (SCIM is the modern kin)"],
    ["SAML", "AUTHENTICATION assertions &mdash; enterprise web SSO"],
    ["OpenID", "AUTHENTICATION on OAuth &mdash; proves WHO you are"],
    ["OAuth", "AUTHORIZATION &mdash; delegated, scoped access; never authN"]
  ];
  set("cloud-protocols", "c5prt"); G["c5prt"] = rows("Identity Protocol Alphabet", PRT, -1, "which one does WHICH job = guaranteed exam question");
  [["SPML", 0], ["SAML", 1], ["OpenID", 2], ["OAuth", 3]].forEach(function (p) { G["c5prt" + p[1]] = rows("Identity Protocol Alphabet", PRT, p[1], "which one does WHICH job = guaranteed exam question"); set(p[0], "c5prt" + p[1]); });

  G["c5mig"] = card("Cloud Migration", ["plan the EXIT before you enter:", "data formats, egress costs, portability", "or accept vendor lock-in as the price"], "exit clause: full export in open formats within 30 days");
  set("Migration", "c5mig");
  G["c5dc"] = card("Data-Centric Security", ["the perimeter is gone &mdash; protection travels", "WITH the data: classification, encryption,", "rights management, DLP wherever it flows"], "the document is protected in SharePoint and on a phone alike");
  set("Data Centric", "c5dc");
  G["c5sla"] = card("SLA &mdash; the Contractual Teeth", ["availability &middot; RTO/RPO &middot; breach notice", "right to audit &middot; data return on exit", "if it isn't in the SLA, it isn't promised"], "99.95% uptime + 24-hour breach notification + penalties");
  set("SLA", "c5sla");
  G["c5for"] = card("Cloud Forensics", ["snapshots capture RAM + disk with no downtime", "but multi-tenancy and jurisdiction complicate it", "pre-negotiate forensic support in the contract"], "snapshot the VM, hash the export, analyse the copy");
  set("cloud-forensics", "c5for");
  G["c5art"] = card("Snapshot &middot; Virtual Disk &middot; Image", ["SNAPSHOT: point-in-time state incl. memory", "VIRTUAL DISK: the VMDK/VHD contents", "IMAGE: the template it launched from"], "hash them and keep chain of custody like any evidence");
  set("vm-artifacts", "c5art");
  G["c5dd"] = card("Cloud Data Destruction", ["you can't shred a drive you don't own", "and provider media is shared + replicated", "so destruction = destroying the KEYS"], "crypto-shredding is the only sanitization that spans replicas");
  set("Data Destruction", "c5dd");
  G["c5ce"] = card("Crypto Shredding / Crypto Erase", ["encrypt with keys YOU control, then", "destroy the keys &mdash; every copy, backup and", "replica becomes permanent ciphertext"], "one KMS key deletion 'erases' terabytes in every region");
  set("crypto-erase", "c5ce");

  /* ================= LAYOUT 6 — CRYPTO FUNDAMENTALS FIGURES ================= */
  var CSV = [
    ["Confidentiality", "encryption keeps it secret"],
    ["Integrity", "hashing proves it unchanged"],
    ["Authenticity", "MAC / signature proves the sender"],
    ["Non-Repudiation", "asymmetric only &mdash; can't deny origin/delivery"],
    ["Access Control", "no key, no data &mdash; enforced by math"]
  ];
  [["cs-confidentiality", 0], ["cs-integrity", 1], ["Authenticity", 2], ["nonrepudiation", 3], ["cs-access", 4]].forEach(function (p) {
    G["c6sv" + p[1]] = rows("Five Cryptographic Services", CSV, p[1], "symmetric gives the first three &mdash; only ASYMMETRIC gives non-repudiation");
    set(p[0], "c6sv" + p[1]);
  });
  set("eq-hashing", "c6sv1");
  var OD = [
    ["ORIGIN", "sender can't deny SENDING", "signed with sender's private key"],
    ["DELIVERY", "receiver can't deny RECEIVING", "signed acknowledgement back"]
  ];
  set("Origin", "c6od0"); G["c6od0"] = cols("Non-Repudiation: Two Directions", OD, 0);
  set("Delivery", "c6od1"); G["c6od1"] = cols("Non-Repudiation: Two Directions", OD, 1);

  G["c6pt"] = card("Plaintext", ["the readable input before encryption", "plaintext &rarr; encrypt &rarr; ciphertext", "&rarr; decrypt &rarr; plaintext again"], "the email body before S/MIME wraps it");
  set("Plaintext", "c6pt");
  G["c6en"] = card("Encrypt", ["plaintext + algorithm + KEY = ciphertext", "the strength must live in the key,", "never in hiding the algorithm"], "AES-256-GCM: ciphertext plus authentication tag");
  set("Encrypt", "c6en");
  G["c6kv"] = card("Key / Cryptovariable", ["the ONLY secret in a modern system", "length sets brute-force work factor", "secrecy is everything (Kerckhoffs)"], "AES is public; your 256 bits are not");
  set("cryptovariable", "c6kv");
  G["c6de"] = card("Decrypt", ["ciphertext + the right key = plaintext", "symmetric: the SAME key", "asymmetric: the pair's OTHER key"], "the private key opens what the public key sealed");
  set("Decrypt", "c6de");
  G["c6kc"] = card("Key Clustering (weakness)", ["two DIFFERENT keys produce the", "same ciphertext from one plaintext", "&mdash; effectively shrinks the keyspace"], "an attacker needs either key, not one specific key");
  set("Key clustering", "c6kc");
  G["c6wf"] = card("Work Factor", ["time + resources needed to break it", "goal: work factor &gt; the data's useful life", "each key bit DOUBLES the brute-force cost"], "10-year secrets need crypto worth more than 10 years of attack");
  set("Work factor", "c6wf");
  G["c6iv"] = card("IV / Nonce", ["random or unique start value: identical", "plaintexts encrypt differently per message", "NEVER reuse a nonce with the same key"], "WEP's repeating 24-bit IVs are the cautionary tale");
  set("iv-nonce", "c6iv");
  var SHAN = [
    ["CONFUSION", "key &harr; ciphertext link is intractable", "done by SUBSTITUTION (S-boxes)"],
    ["DIFFUSION", "one plaintext bit spreads everywhere", "done by PERMUTATION (transposition)"]
  ];
  set("Confusion", "c6sh0"); G["c6sh0"] = cols("Shannon's Two Pillars", SHAN, 0, "their visible result = the avalanche effect");
  set("Diffusion", "c6sh1"); G["c6sh1"] = cols("Shannon's Two Pillars", SHAN, 1, "their visible result = the avalanche effect");
  G["c6av"] = card("Avalanche Effect", ["flip ONE input bit &rarr;", "about HALF the output bits change", "the visible proof of confusion + diffusion"], "SHA-256 of 'test' vs 'Test': no resemblance");
  set("Avalanche", "c6av");

  var HS = [
    ["HIDDEN", "conceal that a message EXISTS", "steganography &middot; null cipher", "found = read"],
    ["SCRAMBLED", "transform it &mdash; cryptography", "one-way or two-way", "found &ne; read"]
  ];
  set("Hidden", "c6hs0"); G["c6hs0"] = cols("Secret Writing: Two Roads", HS, 0);
  set("scrambled", "c6hs1"); G["c6hs1"] = cols("Secret Writing: Two Roads", HS, 1);
  G["c6st"] = card("Steganography", ["data hidden inside innocent carriers", "(image LSBs, audio, whitespace)", "defeats DETECTION, not decryption"], "the customer list leaves inside a holiday photo &mdash; DLP blind");
  set("Steganography", "c6st");
  G["c6nc"] = card("Null Cipher", ["plaintext hidden in plain sight inside", "a longer innocent message", "(e.g. first letter of every word)"], "'Nice Evening, Wonderful Sunset' &rarr; NEWS");
  set("Null Cipher", "c6nc");
  var OW = [
    ["ONE-WAY", "hashing &mdash; no reverse exists", "integrity &middot; passwords &middot; signatures"],
    ["TWO-WAY", "encryption &mdash; reversible with key", "symmetric or asymmetric"]
  ];
  set("One-way", "c6ow0"); G["c6ow0"] = cols("One-Way vs Two-Way", OW, 0);
  set("Two-way", "c6ow1"); G["c6ow1"] = cols("One-Way vs Two-Way", OW, 1);

  var HL = [
    ["MD5", "128-bit &mdash; BROKEN (collisions since 2004)"],
    ["SHA-1", "160-bit &mdash; BROKEN (SHAttered 2017)"],
    ["SHA-2", "256/512-bit &mdash; today's workhorse"],
    ["SHA-3", "Keccak sponge &mdash; the different-math hedge"]
  ];
  set("Hashing", "c6hl"); G["c6hl"] = rows("Hash Family Status Board", HL, -1, "properties: one-way &middot; fixed length &middot; collision resistant &middot; avalanche");
  [["MD5", 0], ["SHA-1", 1], ["SHA-2", 2], ["SHA-3", 3]].forEach(function (p) { G["c6hl" + p[1]] = rows("Hash Family Status Board", HL, p[1]); set(p[0], "c6hl" + p[1]); });

  var SA = [
    ["SYMMETRIC", "ONE shared key", "fast &mdash; bulk data", "n(n-1)/2 keys &middot; no non-repud."],
    ["ASYMMETRIC", "public + private PAIR", "~1000&times; slower", "2n keys &middot; signatures possible"]
  ];
  set("Symmetric", "c6sa0"); G["c6sa0"] = cols("Symmetric vs Asymmetric", SA, 0, "real systems use BOTH: asymmetric handshake, symmetric bulk");
  set("Asymmetric", "c6sa1"); G["c6sa1"] = cols("Symmetric vs Asymmetric", SA, 1, "real systems use BOTH: asymmetric handshake, symmetric bulk");
  var BS = [
    ["BLOCK", "fixed-size chunks (AES: 128-bit)", "rounds of substitute + permute", "mode choice matters (ECB!)"],
    ["STREAM", "bit-by-bit keystream XOR", "fast, low latency", "NEVER reuse the keystream"]
  ];
  set("Block", "c6bs0"); G["c6bs0"] = cols("Block vs Stream", BS, 0);
  set("Stream", "c6bs1"); G["c6bs1"] = cols("Block vs Stream", BS, 1);

  var ALG = [
    ["DES", "56-bit &mdash; dead since 1998 (Deep Crack)"],
    ["3DES", "EDE &asymp;112-bit &mdash; retired 2023, use AES"],
    ["AES (Rijndael)", "128/192/256 &mdash; THE standard answer"],
    ["CAST-128", "64-bit blocks &mdash; old PGP cipher"],
    ["SAFER", "the Bluetooth-pairing family (SAFER+)"],
    ["Blowfish", "448-bit keys &mdash; lives on inside bcrypt"],
    ["Twofish", "AES finalist &mdash; the 'almost-AES'"],
    ["RC5 / RC6", "data-dependent rotations; RC6 = finalist"],
    ["RC4", "STREAM cipher &mdash; prohibited (RFC 7465)"]
  ];
  [["DES", 0], ["3DES", 1], ["aes", 2], ["CAST-128", 3], ["SAFER", 4], ["Blowfish", 5], ["Twofish", 6], ["rc56", 7], ["RC4", 8]].forEach(function (p) {
    G["c6al" + p[1]] = rows("Symmetric Cipher Roster", ALG, p[1]);
    set(p[0], "c6al" + p[1]);
  });

  var MOD = [
    ["ECB", "independent blocks &mdash; patterns SURVIVE. Never use"],
    ["CBC", "XOR with previous block + IV &mdash; serial; padding oracles"],
    ["CFB", "self-syncing stream from prior ciphertext"],
    ["OFB", "precomputable keystream &mdash; errors don't propagate"],
    ["CTR", "nonce+counter &mdash; parallel, modern (&rarr; GCM)"]
  ];
  [["ecb", 0], ["cbc", 1], ["cfb", 2], ["ofb", 3], ["ctr", 4]].forEach(function (p) {
    G["c6md" + p[1]] = rows("Block Cipher Modes", MOD, p[1], "the ECB penguin is the reason mode choice matters");
    set(p[0], "c6md" + p[1]);
  });

  var AF = [
    ["FACTORING", "product of two primes", "RSA lives here", "Shor's algorithm looms"],
    ["DISCRETE LOG", "g^x mod p is one-way", "DH &middot; El Gamal &middot; DSA &middot; ECC", "curves shrink the keys"]
  ];
  set("sw-factoring", "c6af0"); G["c6af0"] = cols("Asymmetric Hard Problems", AF, 0);
  set("Discrete Log", "c6af1"); G["c6af1"] = cols("Asymmetric Hard Problems", AF, 1);
  G["c6rsa"] = card("RSA", ["factoring-based &mdash; encrypts AND signs", "2048-bit minimum today", "slow: wraps session keys, not bulk data"], "classic TLS: RSA carries the AES session key");
  set("RSA", "c6rsa");
  G["c6dh"] = card("Diffie-Hellman", ["derive a SHARED SECRET over a public channel", "agreement, NOT authentication &mdash; raw DH falls to MITM", "ephemeral (DHE/ECDHE) adds forward secrecy"], "TLS runs ECDHE so recorded traffic stays dead after key theft");
  set("Diffie-Hellmann", "c6dh");
  G["c6ecc"] = card("Elliptic Curve (ECC)", ["discrete log on curves &mdash; same strength,", "far smaller keys (ECC-256 &asymp; RSA-3072)", "the mobile / IoT / modern-TLS choice"], "your phone's handshakes: ECDHE + ECDSA");
  set("ecc", "c6ecc");
  G["c6eg"] = card("El Gamal", ["discrete-log ENCRYPTION from DH", "drawback the exam loves:", "ciphertext &asymp; DOUBLE the plaintext size"], "GnuPG's El Gamal keys show the message expansion");
  set("El Gamal", "c6eg");
  G["c6dsa"] = card("DSA", ["NIST's discrete-log SIGNATURE-ONLY standard", "signs and verifies &mdash; never encrypts", "trap: 'encrypt with DSA' is impossible"], "modern practice: ECDSA / Ed25519 instead");
  set("DSA", "c6dsa");

  var SUB = [
    ["Caesar", "fixed shift &mdash; 25 keys, brute-force by hand"],
    ["Monoalphabetic", "one alphabet &mdash; frequency analysis kills it"],
    ["Polyalphabetic", "rotating alphabets (Vigen&egrave;re) &mdash; flattens frequencies"],
    ["Running", "book-text key &mdash; long but statistical"],
    ["One-time Pad", "random &middot; as long &middot; used once &middot; secret = UNBREAKABLE"]
  ];
  set("Substitution", "c6su"); G["c6su"] = rows("Substitution Ladder", SUB, -1, "each step fixes the last one's weakness");
  [["caesar", 0], ["Monoalphabetic", 1], ["Polyalphabetic", 2], ["Running", 3], ["One-time Pads", 4]].forEach(function (p) { G["c6su" + p[1]] = rows("Substitution Ladder", SUB, p[1], "each step fixes the last one's weakness"); set(p[0], "c6su" + p[1]); });
  var TRA = [
    ["SPARTAN SCYTALE", "strip wrapped on a rod", "rod diameter = the key"],
    ["RAIL FENCE", "zigzag across N rails", "rail count = the key"]
  ];
  set("Transposition", "c6tr"); G["c6tr"] = cols("Transposition Ciphers", TRA, -1, "letters keep identity, lose position &mdash; frequencies look normal");
  set("Spartan Scytale", "c6tr0"); G["c6tr0"] = cols("Transposition Ciphers", TRA, 0);
  set("rail-fence", "c6tr1"); G["c6tr1"] = cols("Transposition Ciphers", TRA, 1);

  /* ================= LAYOUT 7 — PKI FIGURES ================= */
  G["dsflow"] = '<svg viewBox="0 0 330 132" class="fig" role="img" aria-label="Digital signature flow">'
    + '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Digital Signature &mdash; Sign Private, Verify Public</text>'
    + '<rect x="8" y="24" width="70" height="34" rx="6" fill="#161616" stroke="#a0303f"/><text x="43" y="39" text-anchor="middle" fill="#ff9ab0" font-size="7.4" font-weight="700">MESSAGE</text><text x="43" y="51" text-anchor="middle" fill="#e0e0e0" font-size="6.6">any size</text>'
    + '<rect x="94" y="24" width="70" height="34" rx="6" fill="#161616" stroke="#a0303f"/><text x="129" y="39" text-anchor="middle" fill="#ff9ab0" font-size="7.4" font-weight="700">HASH</text><text x="129" y="51" text-anchor="middle" fill="#e0e0e0" font-size="6.6">fixed digest</text>'
    + '<rect x="180" y="24" width="140" height="34" rx="6" fill="#3a0a0e" stroke="#d31324"/><text x="250" y="39" text-anchor="middle" fill="#fff" font-size="7.4" font-weight="700">ENCRYPT DIGEST with</text><text x="250" y="51" text-anchor="middle" fill="#ffd27c" font-size="7">sender&apos;s PRIVATE key = signature</text>'
    + '<path d="M78 41 L94 41 M164 41 L180 41" stroke="#d31324" stroke-width="1.5"/>'
    + '<rect x="8" y="72" width="312" height="30" rx="6" fill="#161616" stroke="#a0303f"/>'
    + '<text x="164" y="85" text-anchor="middle" fill="#e0e0e0" font-size="7.4">receiver: decrypt signature with sender&apos;s <tspan fill="#ff9ab0" font-weight="700">PUBLIC key</tspan>, re-hash the message, compare</text>'
    + '<text x="164" y="96" text-anchor="middle" fill="#a6a6a6" font-size="6.8">match &rArr; integrity + authenticity + NON-REPUDIATION</text>'
    + '<text x="165" y="122" text-anchor="middle" fill="#ffd27c" font-size="7.2" font-weight="700">drill it: SIGN = private &middot; VERIFY = public (encryption is the reverse)</text></svg>';
  set("Digital Signatures", "dsflow");
  G["c7dsi"] = card("Integrity via Signature", ["the signature covers the message HASH", "change one bit &rarr; verification fails", "tamper-evidence comes free with every signature"], "the altered invoice no longer matches its signed digest");
  set("ds-integrity", "c7dsi");

  G["pkichain"] = '<svg viewBox="0 0 330 138" class="fig" role="img" aria-label="PKI chain of trust">'
    + '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">PKI &mdash; Chain of Trust</text>'
    + '<rect x="100" y="22" width="130" height="26" rx="6" fill="#3a0a0e" stroke="#d31324"/><text x="165" y="34" text-anchor="middle" fill="#fff" font-size="7.6" font-weight="700">ROOT CA (offline)</text><text x="165" y="44" text-anchor="middle" fill="#e0e0e0" font-size="6.4">self-signed &middot; in every trust store</text>'
    + '<path d="M165 48 L165 58" stroke="#d31324" stroke-width="1.5"/>'
    + '<rect x="100" y="58" width="130" height="26" rx="6" fill="#161616" stroke="#a0303f"/><text x="165" y="70" text-anchor="middle" fill="#ff9ab0" font-size="7.6" font-weight="700">INTERMEDIATE CA</text><text x="165" y="80" text-anchor="middle" fill="#e0e0e0" font-size="6.4">does the daily issuing &middot; revocable</text>'
    + '<path d="M165 84 L165 94" stroke="#d31324" stroke-width="1.5"/>'
    + '<rect x="100" y="94" width="130" height="26" rx="6" fill="#161616" stroke="#a0303f"/><text x="165" y="106" text-anchor="middle" fill="#ff9ab0" font-size="7.6" font-weight="700">END-ENTITY CERT</text><text x="165" y="116" text-anchor="middle" fill="#e0e0e0" font-size="6.4">your server / user / code cert</text>'
    + '<rect x="8" y="58" width="80" height="26" rx="6" fill="#161616" stroke="#a0303f"/><text x="48" y="70" text-anchor="middle" fill="#ff9ab0" font-size="7" font-weight="700">RA</text><text x="48" y="80" text-anchor="middle" fill="#e0e0e0" font-size="6.2">vets identity, never signs</text>'
    + '<path d="M88 71 L100 71" stroke="#a0303f" stroke-width="1.2" stroke-dasharray="3 2"/>'
    + '<rect x="242" y="58" width="80" height="26" rx="6" fill="#161616" stroke="#a0303f"/><text x="282" y="70" text-anchor="middle" fill="#ff9ab0" font-size="7" font-weight="700">CERT DB</text><text x="282" y="80" text-anchor="middle" fill="#e0e0e0" font-size="6.2">status &rarr; CRL / OCSP</text>'
    + '<path d="M230 71 L242 71" stroke="#a0303f" stroke-width="1.2" stroke-dasharray="3 2"/>'
    + '<text x="165" y="132" text-anchor="middle" fill="#a6a6a6" font-size="6.8">root compromise = game over (DigiNotar) &mdash; that&apos;s why roots stay offline</text></svg>';
  set("ca-root", "pkichain");
  set("intermediate-ca", "pkichain");

  G["c7dc"] = card("Digital Certificates", ["a CA-signed binding: identity &harr; public key", "trust the CA &rArr; trust everything it signs", "X.509 v3 is the format"], "the browser padlock = a chain validating to a trusted root");
  set("Digital Certificates", "c7dc");
  G["c7vo"] = card("Verify the Owner of a Public Key", ["a public key alone proves NOTHING about", "who holds it &mdash; certificates solve exactly this", "by having a trusted CA vouch for the binding"], "without certs, 'the bank's key' could be anyone's");
  set("verify-owner", "c7vo");
  G["c7x509"] = card("X.509", ["the standard certificate format:", "subject &middot; issuer &middot; validity &middot; public key", "extensions (SANs, key usage) &middot; CA signature"], "openssl x509 -text shows every field");
  set("X.509", "c7x509");
  G["c7rep"] = card("Certificate Replacement", ["certificates EXPIRE by design &mdash;", "short lifetimes cap silent-compromise damage", "automate renewal or inherit outages"], "public TLS caps at 398 days; ACME renews every 90");
  set("Replacement", "c7rep");
  var REV = [
    ["CRL", "download the signed blacklist", "simple &middot; STALE between updates", "grows large"],
    ["OCSP", "ask about ONE serial, live", "fresh &middot; adds latency + privacy leak", "fixed by STAPLING"]
  ];
  set("Revocation", "c7rev"); G["c7rev"] = cols("Revocation Checking", REV, -1, "kill a cert BEFORE expiry &mdash; key leak, role change, mis-issue");
  set("CRL", "c7rev0"); G["c7rev0"] = cols("Revocation Checking", REV, 0);
  set("OCSP", "c7rev1"); G["c7rev1"] = cols("Revocation Checking", REV, 1, "stapling: the server hands over its own fresh signed proof");
  G["c7pin"] = card("Certificate Pinning", ["the client hard-codes WHICH cert/key to accept", "beats rogue-CA MITM &mdash; even 'valid' certs fail", "cost: brittle when keys rotate"], "the banking app pins its backend; inspection proxies break it by design");
  set("Pinning", "c7pin");
  G["c7ra"] = card("Registration Authority", ["the vetting desk: verifies IDENTITY", "before issuance &mdash; approves requests", "the CA signs; the RA never does"], "EV cert: RA checks company papers, then the CA issues");
  set("Registration Authority", "c7ra");
  G["c7db"] = card("Certificate Database", ["the CA's authoritative issued-and-status record", "&mdash; the source feeding CRLs and OCSP", "its integrity equals the signing key's"], "tamper it and a stolen cert becomes 'un-revoked'");
  set("cert-db", "c7db");
  G["c7cs"] = card("Certificate Store (Local)", ["each device's trust store of root CAs", "control it and you control what's trusted", "a rogue root = silent TLS interception"], "corp proxies add their root to inspect HTTPS; malware copies the trick");
  set("cert-store", "c7cs");
  G["c7kk"] = card("Kerckhoffs' Principle", ["the system stays secure with EVERYTHING", "public except the KEY", "obscurity is not a control"], "AES's spec is public &mdash; that's a feature, not a leak");
  set("kerckhoff", "c7kk");

  var KLC = [
    ["Generation", "CSPRNG / HSM randomness &mdash; weak entropy poisons all"],
    ["Distribution", "DH &middot; out-of-band &middot; hybrid wrap"],
    ["Storage", "TPM on devices &middot; HSM in the DC"],
    ["Rotation", "limit each key's cryptoperiod"],
    ["Disposition", "archive under escrow or destroy verifiably"],
    ["Recovery", "escrow &middot; split knowledge &middot; dual control"]
  ];
  [["Generation", 0], ["Distribution", 1], ["Storage", 2], ["Rotation", 3], ["Disposition", 4], ["Recovery", 5]].forEach(function (p) {
    G["c7kl" + p[1]] = rows("Key Lifecycle", KLC, p[1], "every stage is an attack surface &mdash; manage all six");
    set(p[0], "c7kl" + p[1]);
  });
  G["c7ob"] = card("Out-of-Band Distribution", ["move the key on a DIFFERENT channel", "than the data &mdash; courier, phone, in person", "secure but unscalable"], "the Wi-Fi password arrives by SMS, not over the WLAN");
  set("Out-of-band", "c7ob");
  G["c7hy"] = card("Hybrid Distribution", ["asymmetric wraps a symmetric session key,", "symmetric carries the bulk &mdash;", "the pattern that runs the whole internet"], "every TLS connection: ECDHE handshake &rarr; AES-GCM session");
  set("kd-hybrid", "c7hy");
  var HW = [
    ["TPM", "chip ON the device", "sealed keys &middot; measured boot", "binds crypto to the platform"],
    ["HSM", "dedicated appliance", "tamper-responsive &middot; FIPS 140", "keys never leave the boundary"]
  ];
  set("TPM", "c7hw0"); G["c7hw0"] = cols("Hardware Key Protection", HW, 0, "BitLocker seals to the TPM; CA roots live in HSMs");
  set("HSM", "c7hw1"); G["c7hw1"] = cols("Hardware Key Protection", HW, 1, "BitLocker seals to the TPM; CA roots live in HSMs");
  G["c7csh"] = card("Crypto-Shredding", ["destroy the KEY &rarr; all data under it", "is permanently unreadable everywhere", "sanitization by mathematics"], "one key deletion erases every replica and backup at once");
  set("Crypto-shredding", "c7csh");
  G["c7kdz"] = card("Key Destruction", ["verified, unrecoverable elimination:", "HSM zeroization, documented + witnessed", "the proof auditors ask to see"], "the HSM zeroizes instantly on tamper detection");
  set("Key Destruction", "c7kdz");
  var SKDC = [
    ["SPLIT KNOWLEDGE", "no one KNOWS it all", "the secret is divided", "e.g. 3-of-5 key shares"],
    ["DUAL CONTROL", "no one ACTS alone", "the action needs two people", "two cards, two PINs, together"]
  ];
  set("Split Knowledge", "c7sk0"); G["c7sk0"] = cols("Split Knowledge vs Dual Control", SKDC, 0, "divide the SECRET vs divide the ACTION &mdash; know the difference cold");
  set("Dual Control", "c7sk1"); G["c7sk1"] = cols("Split Knowledge vs Dual Control", SKDC, 1, "divide the SECRET vs divide the ACTION &mdash; know the difference cold");
  G["c7ke"] = card("Key Escrow", ["keys deposited with a third party,", "recoverable under defined conditions", "insurance &mdash; and a juicy target (Clipper Chip)"], "court-ordered recovery works; so might an attacker who owns the escrow");
  set("Key Escrow", "c7ke");

  /* ================= LAYOUT 8 — CRYPTANALYSIS FIGURES ================= */
  var CAT = [
    ["Brute Force", "try every key &mdash; key length is the defence"],
    ["Ciphertext Only", "just intercepts &mdash; weakest position"],
    ["Known Plaintext", "has plaintext&ndash;ciphertext pairs (cribs)"],
    ["Chosen Plaintext", "gets chosen inputs encrypted (oracle)"],
    ["Chosen Ciphertext", "gets decryptions too &mdash; strongest attacker"],
    ["Linear &amp; Differential", "the academic block-cipher artillery"],
    ["Factoring", "break RSA's modulus into p &times; q"]
  ];
  set("cryptanalytic-attacks", "c8ca"); G["c8ca"] = rows("Cryptanalytic Attack Ladder", CAT, -1, "ranked by what the attacker HAS &mdash; that ranking is the exam question");
  [["Brute Force", 0], ["Ciphertext Only", 1], ["Known Plaintext", 2], ["Chosen Plaintext", 3], ["Chosen Ciphertext", 4], ["linear-differential", 5], ["ca-factoring", 6]].forEach(function (p) {
    G["c8ca" + p[1]] = rows("Cryptanalytic Attack Ladder", CAT, p[1], "ranked by what the attacker HAS");
    set(p[0], "c8ca" + p[1]);
  });

  var CGA = [
    ["Man-in-the-middle", "sit between &mdash; beaten by authentication"],
    ["Replay", "resend a valid message &mdash; beaten by freshness"],
    ["Pass the Hash", "the hash IS the credential (NTLM)"],
    ["Temporary Files", "plaintext lingers in swap / temp / dumps"],
    ["Implementation", "break the code, not the cipher (Heartbleed)"],
    ["Dictionary", "try LIKELY passwords &mdash; humans pick words"],
    ["Rainbow Tables", "precomputed hashes &mdash; SALT kills them"],
    ["Birthday", "collisions in 2^(n/2) &mdash; killed MD5/SHA-1"]
  ];
  set("cryptographic-attacks", "c8cg"); G["c8cg"] = rows("Implementation &amp; People Attacks", CGA, -1, "crypto fails AROUND the algorithm, rarely through it");
  [["mitm", 0], ["Replay", 1], ["Pass the Hash", 2], ["Temporary Files", 3], ["Implementation", 4], ["Dictionary Attack", 5], ["Rainbow Tables", 6], ["Birthday Attack", 7]].forEach(function (p) {
    G["c8cg" + p[1]] = rows("Implementation &amp; People Attacks", CGA, p[1]);
    set(p[0], "c8cg" + p[1]);
  });

  var SCH = [
    ["POWER", "key bits in the power draw", "SPA / DPA &mdash; smart-card killer"],
    ["TIMING", "secrets in the microseconds", "fix: constant-time code"],
    ["RADIATION", "EM emanations at a distance", "van Eck / TEMPEST"]
  ];
  set("Side Channel", "c8sc"); G["c8sc"] = cols("Side Channels &mdash; Physical Leakage", SCH, -1, "non-invasive, invisible to logs &mdash; the math is never touched");
  set("sc-power", "c8sc0"); G["c8sc0"] = cols("Side Channels &mdash; Physical Leakage", SCH, 0);
  set("sc-timing", "c8sc1"); G["c8sc1"] = cols("Side Channels &mdash; Physical Leakage", SCH, 1);
  set("Radiation Emissions", "c8sc2"); G["c8sc2"] = cols("Side Channels &mdash; Physical Leakage", SCH, 2);

  var SE = [
    ["PURCHASE KEY", "bribe / buy the secret", "cheaper than cracking", "split knowledge = no one to buy"],
    ["RUBBER HOSE", "coercion &mdash; force or law", "no algorithm resists it", "the $5 wrench beats the math"]
  ];
  set("Social Engineering", "c8se"); G["c8se"] = cols("Attacking the Human", SE, -1, "usually the cheapest attack in the entire stack");
  set("Purchase Key", "c8se0"); G["c8se0"] = cols("Attacking the Human", SE, 0);
  set("Rubber Hose", "c8se1"); G["c8se1"] = cols("Attacking the Human", SE, 1);

  /* ================= LAYOUT 9 — PHYSICAL SECURITY FIGURES ================= */
  G["c9sp"] = card("Safety of People", ["human life outranks EVERY asset, always", "door failure modes, suppression agents,", "evacuation &mdash; all answered people-first"], "fail-SAFE doors unlock in a fire even though assets get exposed");
  set("safety-people", "c9sp");
  var PFN = [
    ["Deter", "convince them not to try &mdash; fence, lights, signs"],
    ["Delay", "slow them down &mdash; locks, barriers; delay &gt; response time"],
    ["Detect", "know it's happening &mdash; PIR, contacts, analytics"],
    ["Assess", "verify what it is &mdash; cameras, guards; kill false alarms"],
    ["Respond", "end it &mdash; guards, lockdown, police"]
  ];
  set("phys-categories", "c9fn"); G["c9fn"] = rows("Control Functions &mdash; the attacker's timeline", PFN, -1, "no control does all five &mdash; the LAYERS do");
  [["Deter", 0], ["Delay", 1], ["Detect", 2], ["Assess", 3], ["Respond", 4]].forEach(function (p) {
    G["c9fn" + p[1]] = rows("Control Functions &mdash; the attacker's timeline", PFN, p[1]);
    set(p[0], "c9fn" + p[1]);
  });
  var PLD = [
    ["Perimeter", "fence &middot; gates &middot; bollards &middot; CPTED"],
    ["Building shell", "walls &middot; windows &middot; hardened doors"],
    ["Interior zones", "badges &middot; mantraps &middot; locked areas"],
    ["The asset", "cage &middot; safe &middot; rack lock &middot; encryption"]
  ];
  set("Layered Defense", "c9ld"); G["c9ld"] = rows("Physical Layers &mdash; outside in", PLD, -1, "each ring deters, delays and detects &mdash; one failure reaches nothing");
  G["c9pm"] = card("Perimeter", ["the outermost ring: fences, gates, bollards", "~1m deters casual, ~2m+ barbed deters determined", "bollards stop the vehicle attack"], "8-foot fence + three-strand barbed wire = controlled facility");
  set("Perimeter", "c9pm");
  G["c9lsc"] = card("Landscape (CPTED)", ["design the environment against crime:", "clear sightlines, no concealment near entries,", "natural surveillance and territoriality"], "low thorny shrubs under windows &mdash; no cover, painful to try");
  set("Landscape", "c9lsc");
  G["c9gr"] = card("Grading", ["slope the land AWAY from the building", "&mdash; water drains off (flood control)", "and no terrain advantage near walls"], "a site graded toward the dock floods the server room");
  set("Grading", "c9gr");
  G["c9cam"] = card("Cameras (CCTV)", ["deter + detect + ASSESS in one control", "value depends on placement, retention,", "and someone actually watching"], "the mantrap camera matches the face to the badge");
  set("Cameras", "c9cam");
  G["c9pir"] = card("Passive Infrared (PIR)", ["motion via moving HEAT signatures", "passive &mdash; emits nothing itself", "tune against pets, drafts, hot windows"], "the corridor PIR trips on any warm body after hours");
  set("pir", "c9pir");
  G["c9lt"] = card("Lighting", ["cheapest deterrent; enables cameras &amp; guards", "exam numbers: ~8 ft high, 2 foot-candles", "even coverage &mdash; shadows are corridors"], "glare pointed outward blinds intruders, not your cameras");
  set("Lighting", "c9lt");
  G["c9bd"] = card("Card Readers / Badges", ["electronic access + audit trail per door", "threats: cloning (125 kHz), tailgating, loss", "critical doors: badge + PIN/biometric"], "a cloned prox card opens it; challenge-response smart cards don't clone");
  set("badges", "c9bd");
  G["c9mt"] = card("Doors / Mantraps", ["two interlocked doors &mdash; second opens", "only after the first closes: ONE person per cycle", "THE control against tailgating/piggybacking"], "the vestibule traps the tailgater between doors");
  set("mantraps", "c9mt");
  var LCK = [
    ["MECHANICAL", "no power, no logs", "picking &middot; bumping &middot; key copies", "restricted keyways help"],
    ["DIGITAL", "logs + instant revocation", "default codes &middot; replay &middot; power", "define fail-safe vs fail-secure"]
  ];
  set("Locks", "c9lk"); G["c9lk"] = cols("Locks &mdash; the classic delay control", LCK, -1, "every lock yields to time &mdash; its job is buying detection time");
  set("lock-mechanical", "c9lk0"); G["c9lk0"] = cols("Locks &mdash; the classic delay control", LCK, 0);
  set("lock-digital", "c9lk1"); G["c9lk1"] = cols("Locks &mdash; the classic delay control", LCK, 1);
  G["c9wn"] = card("Windows", ["the shell's weakest points &mdash; know the glass:", "tempered, LAMINATED (holds when shattered),", "wired, polycarbonate, security film"], "laminated glass stays in the frame after the brick");
  set("Windows", "c9wn");
  var WSN = [
    ["SHOCK", "feels the IMPACT vibration", "alarms on the attempt itself"],
    ["GLASSBREAK", "hears the break frequency", "one unit covers a whole room"]
  ];
  set("Shock", "c9ws0"); G["c9ws0"] = cols("Window Sensors", WSN, 0, "contact catches the opened window; these catch the smashed one");
  set("Glassbreak", "c9ws1"); G["c9ws1"] = cols("Window Sensors", WSN, 1, "contact catches the opened window; these catch the smashed one");
  G["c9wl"] = card("Walls", ["true barriers run SLAB-TO-SLAB", "partition walls ending at drop ceilings", "let intruders climb over through the plenum"], "the 'secure' room is one ceiling tile away from open");
  set("Walls", "c9wl");
  G["c9sk"] = card("Skimming", ["rogue hardware on legitimate readers", "harvesting cards + PINs (ATM, badge, fuel)", "counter: inspection, tamper-evidence, chip"], "an overlay on the garage reader captures a week of badges");
  set("Skimming", "c9sk");
  G["c9inf"] = card("Infrastructure", ["availability's physical layer:", "network runs, POWER and HVAC", "a firewall can't route around a cooked room"], "the 'incident' was a failed CRAC unit, not a hacker");
  set("Infrastructure", "c9inf");
  G["c9nw"] = card("Network (Physical)", ["locked closets, conduit, no public jacks", "access to the wire = tap, inject or cut", "encryption is the compensating control"], "an unlocked IDF lets anyone bridge a rogue AP to the core");
  set("phys-network", "c9nw");
  var PWR = [
    ["UPS", "battery bridge &mdash; seconds to minutes"],
    ["Generator", "hours to days &mdash; limited by FUEL; test under load"],
    ["Outages", "FAULT (momentary) &middot; BLACKOUT (prolonged)"],
    ["Degradation", "SAG/BROWNOUT low &middot; SPIKE/SURGE high"]
  ];
  set("phys-power", "c9pw"); G["c9pw"] = rows("Power Protection Stack", PWR, -1, "condition the quality, bridge the gap, outlast the outage");
  set("UPS", "c9pw0"); G["c9pw0"] = rows("Power Protection Stack", PWR, 0);
  set("Generator", "c9pw1"); G["c9pw1"] = rows("Power Protection Stack", PWR, 1);
  set("outages", "c9pw2"); G["c9pw2"] = rows("Power Protection Stack", PWR, 2);
  set("degradation", "c9pw3"); G["c9pw3"] = rows("Power Protection Stack", PWR, 3, "momentary vs prolonged &times; low vs high = the four exam words");
  G["c9hv"] = card("HVAC", ["availability for electronics AND people", "POSITIVE pressurization keeps contaminants out", "dedicated + monitored for data centres"], "positive pressure pushes smoke OUT the opened door");
  set("HVAC", "c9hv");
  G["c9tp"] = card("Temperature", ["steady cool &mdash; ~20-25&deg;C classic guidance", "heat kills: monitor at rack level, alert on trends", "hot-aisle / cold-aisle containment"], "the failed CRAC cooks top-of-rack switches first");
  set("Temperature", "c9tp");
  G["c9hu"] = card("Humidity", ["the 40-60% band (classic: 45-55%)", "too LOW &rarr; static discharge zaps chips", "too HIGH &rarr; condensation and corrosion"], "a dry winter room delivers 20 kV static pops");
  set("Humidity", "c9hu");
  G["c9aq"] = card("Air Quality", ["dust clogs cooling &rarr; thermal failure", "corrosive gases eat contacts", "filtration + positive pressure + sealing"], "construction next door triples fan failures in a quarter");
  set("Air Quality", "c9aq");
  var FDET = [
    ["FLAME (IR)", "sees the flicker", "instant on open fire", "blind to smolder"],
    ["SMOKE", "catches particles", "ionization / photo-electric / dual", "the early-warning family"],
    ["HEAT (thermal)", "fixed temp or rate-of-rise", "slowest, fewest false alarms", "for dusty/steamy spaces"]
  ];
  set("Fire Detection", "c9fd"); G["c9fd"] = cols("Fire Detection Families", FDET, -1, "match the sensor to the fire signature the space produces");
  set("flame", "c9fd0"); G["c9fd0"] = cols("Fire Detection Families", FDET, 0);
  set("Smoke", "c9fd1"); G["c9fd1"] = cols("Fire Detection Families", FDET, 1);
  set("heat", "c9fd2"); G["c9fd2"] = cols("Fire Detection Families", FDET, 2);
  var SMK = [
    ["IONIZATION", "fast FLAMING fires", "small particles disturb the current", "steam false alarms"],
    ["PHOTO-ELECTRIC", "SMOLDERING fires", "smoke scatters the light beam", "data-centre favourite"],
    ["DUAL", "both in one head", "covers either fire profile", "the default pick"]
  ];
  set("Ionization", "c9sm0"); G["c9sm0"] = cols("Smoke Detector Types", SMK, 0, "electrical fires smolder first &mdash; photoelectric catches them");
  set("Photo-electric", "c9sm1"); G["c9sm1"] = cols("Smoke Detector Types", SMK, 1, "electrical fires smolder first &mdash; photoelectric catches them");
  set("Dual", "c9sm2"); G["c9sm2"] = cols("Smoke Detector Types", SMK, 2);
  var FSUP = [
    ["WATER", "removes HEAT", "wet &middot; dry &middot; pre-action &middot; deluge", "where people work"],
    ["GAS", "starves OXYGEN / breaks the reaction", "inert gases &middot; FM-200 &middot; CO&#8322;", "where electronics live"]
  ];
  set("Fire Suppression", "c9fs"); G["c9fs"] = cols("Suppression &mdash; kill a triangle leg", FSUP, -1, "life safety governs the choice &mdash; evacuate before CO&#8322;");
  var WTR = [
    ["Wet", "pipes always charged &mdash; instant, freeze risk"],
    ["Dry", "air until triggered &mdash; unheated spaces"],
    ["Pre-action", "TWO triggers required &mdash; the data-centre pick"],
    ["Deluge", "all heads open &mdash; fuel depots, hangars"]
  ];
  set("Water", "c9wt"); G["c9wt"] = rows("Sprinkler Pipe Systems", WTR, -1, "accidental-discharge risk drops as you go down the list");
  [["Wet", 0], ["Dry", 1], ["Pre-action", 2], ["Deluge", 3]].forEach(function (p) {
    G["c9wt" + p[1]] = rows("Sprinkler Pipe Systems", WTR, p[1]);
    set(p[0], "c9wt" + p[1]);
  });
  var GAS = [
    ["INERGEN (IG-541)", "N&#8322;+Ar+CO&#8322; &mdash; drops O&#8322; to ~12-14%, breathable briefly"],
    ["Argonite (IG-55)", "50/50 N&#8322;/Ar &mdash; same principle, no residue"],
    ["FM-200", "THE halon replacement &mdash; safe occupied, ~10 s knock-down"],
    ["Aero-K", "potassium aerosol &mdash; compact, no pressure cylinders"]
  ];
  set("Gas", "c9gs"); G["c9gs"] = rows("Gaseous Agents", GAS, -1, "halon's ozone legacy is why all of these exist");
  [["INERGEN", 0], ["Argonite", 1], ["FM-200", 2], ["Aero-K", 3]].forEach(function (p) {
    G["c9gs" + p[1]] = rows("Gaseous Agents", GAS, p[1]);
    set(p[0], "c9gs" + p[1]);
  });
  G["c9ext"] = card("Extinguisher Classes", ["A combustibles &middot; B liquids &middot; C ELECTRICAL", "D metals &middot; K kitchen oils &mdash; match or make it worse", "PASS: Pull, Aim, Squeeze, Sweep"], "CO&#8322; (BC) for the electrical panel &mdash; never the water can");
  set("Extinguisher", "c9ext");
  G["c9co2"] = card("CO&#8322; Suppression", ["displaces oxygen entirely &mdash; great on", "electrical fires, LETHAL to people at dose", "unoccupied spaces + pre-discharge alarms only"], "the cable vault sounds a 30-second evacuation horn first");
  set("co2", "c9co2");
})();

Object.assign(window.AC_DETAILS, {
  "Block Modes": {
    t: "Block Cipher Modes",
    d: "HOW successive blocks are chained together during encryption &mdash; the mode, not the cipher, decides whether patterns survive and how errors propagate. ECB is broken by design; CBC through CTR each trade off parallelism, error handling and security differently.",
    x: "Same AES key, same plaintext: ECB leaks the picture, CBC/CTR don't."
  }
});

Object.assign(window.AC_DETAILS, {
  "scrambled-root": {
    t: "Secret Writing (Domain 3.6)",
    d: "The exam's master tree for hiding information: HIDDEN (concealing that a message exists &mdash; steganography, null ciphers) versus SCRAMBLED/cryptography (transforming it &mdash; one-way hashing and two-way symmetric/asymmetric encryption), plus the classical substitution and transposition ciphers that started it all.",
    x: "Every cipher and hash on the CISSP exam fits somewhere in this one tree."
  }
});

Object.assign(window.AC_DETAILS, {
  "Cryptographic Services": {
    t: "Cryptographic Services (Domain 3.6)",
    d: "The five things cryptography actually buys you: confidentiality, integrity, authenticity, non-repudiation and access control. Every crypto question on the exam ultimately asks which of these five a mechanism provides.",
    x: "TLS in one sentence: confidentiality (encryption) + integrity (MAC) + authenticity (certificate) all at once."
  },
  "Cryptographic Terminology": {
    t: "Cryptographic Terminology (Domain 3.6)",
    d: "The exam's core vocabulary: plaintext/ciphertext, the key (cryptovariable), key clustering, work factor, IV/nonce, and Shannon's confusion/diffusion/avalanche. Fluency here is what separates a fast exam from a slow one.",
    x: "A question describing 'flip one bit, half the output changes' is testing whether you know the word avalanche."
  }
});

Object.assign(window.AC_DETAILS, {
  "pki-root": {
    t: "PKI (Domain 3.6)",
    d: "Public Key Infrastructure &mdash; the hierarchy of CAs, RAs and databases that let strangers trust a public key without ever meeting. Every certificate on the internet traces back to an offline Root CA through this structure.",
    x: "The browser padlock only means something because a PKI hierarchy backs it."
  },
  "key-mgmt-root": {
    t: "Key Management (Domain 3.6)",
    d: "The full lifecycle that keeps cryptographic keys trustworthy: generation, distribution, storage, rotation, disposition and recovery, all resting on Kerckhoffs' Principle. Weak key management defeats even perfect algorithms.",
    x: "AES-256 is useless if the key sits in a plaintext config file forever."
  }
});
