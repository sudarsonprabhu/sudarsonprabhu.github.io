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
    t: "Security Models &amp; Architecture (Domain 3.2)",
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
    t: "Security Frameworks &amp; Standards",
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
