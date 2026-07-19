/* ============================================================
   CISSP Domain 1 — Layout 1 hover details
   (Alignment of Security Function to Business Strategy)
   Two globals consumed by cissp-domain-1.js:
     - AC_FIGS    : named inline-SVG infographics (red/black theme)
     - AC_DETAILS : box label (or data-ac-key) ->
                    { t: title, d: description, x: example,
                      f: optional figure name }
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
Object.assign(window.AC_FIGS, {
  govhierarchy: `
    <svg viewBox="0 0 320 120" class="fig" role="img" aria-label="Governance hierarchy">
      <text x="160" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Governance flows down</text>
      <rect x="60" y="22" width="200" height="22" rx="4" fill="#3a0a0e" stroke="#d31324"/><text x="160" y="37" text-anchor="middle" fill="#fff" font-size="9" font-weight="700">Corporate Governance (board)</text>
      <rect x="60" y="50" width="200" height="22" rx="4" fill="#2a0a12" stroke="#a0303f"/><text x="160" y="65" text-anchor="middle" fill="#f0f0f0" font-size="9">Security Governance</text>
      <rect x="60" y="78" width="200" height="22" rx="4" fill="#161616" stroke="#a0303f"/><text x="160" y="93" text-anchor="middle" fill="#cfcfcf" font-size="9">Policies &middot; standards &middot; controls</text>
      <line x1="160" y1="44" x2="160" y2="50" stroke="#d31324"/><line x1="160" y1="72" x2="160" y2="78" stroke="#d31324"/>
    </svg>`,

  duecare: `
    <svg viewBox="0 0 320 110" class="fig" role="img" aria-label="Due care versus due diligence">
      <text x="160" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Due Care vs. Due Diligence</text>
      <rect x="12" y="24" width="140" height="74" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="82" y="44" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">DUE CARE</text>
      <text x="82" y="62" text-anchor="middle" fill="#f0f0f0" font-size="8.5">DOING the right thing</text>
      <text x="82" y="76" text-anchor="middle" fill="#f0f0f0" font-size="8.5">(implement controls)</text>
      <text x="82" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">"prudent person"</text>
      <rect x="168" y="24" width="140" height="74" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="238" y="44" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">DUE DILIGENCE</text>
      <text x="238" y="62" text-anchor="middle" fill="#f0f0f0" font-size="8.5">KNOWING what to do</text>
      <text x="238" y="76" text-anchor="middle" fill="#f0f0f0" font-size="8.5">(research &amp; verify)</text>
      <text x="238" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">ongoing investigation</text>
    </svg>`,

  policydocs: `
    <svg viewBox="0 0 320 140" class="fig" role="img" aria-label="Policy document hierarchy">
      <text x="160" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Policy Document Hierarchy</text>
      <rect x="70" y="22" width="180" height="20" rx="4" fill="#3a0a0e" stroke="#d31324"/><text x="160" y="36" text-anchor="middle" fill="#fff" font-size="8.5" font-weight="700">POLICY (mandatory, high-level)</text>
      <rect x="60" y="46" width="200" height="18" rx="4" fill="#2a0a12" stroke="#a0303f"/><text x="160" y="59" text-anchor="middle" fill="#f0f0f0" font-size="8">Standards (mandatory, specific)</text>
      <rect x="60" y="68" width="200" height="18" rx="4" fill="#2a0a12" stroke="#a0303f"/><text x="160" y="81" text-anchor="middle" fill="#f0f0f0" font-size="8">Baselines (mandatory minimum)</text>
      <rect x="60" y="90" width="200" height="18" rx="4" fill="#2a0a12" stroke="#a0303f"/><text x="160" y="103" text-anchor="middle" fill="#f0f0f0" font-size="8">Procedures (mandatory steps)</text>
      <rect x="60" y="112" width="200" height="18" rx="4" fill="#161616" stroke="#555"/><text x="160" y="125" text-anchor="middle" fill="#bbb" font-size="8">Guidelines (RECOMMENDED, optional)</text>
    </svg>`
});

window.AC_DETAILS = window.AC_DETAILS || {};
Object.assign(window.AC_DETAILS, {
  "Alignment of Security Function to Business Strategy": {
    t: "Alignment of Security to Business Strategy (Domain 1.3)",
    d: "Security exists to serve the business, not the other way round. This map shows how security governance nests inside corporate governance and connects every governance topic — roles, ethics, law, policy, risk, procurement and training — back to enabling the organisation's strategy and goals.",
    x: "A CISO frames a new control programme in terms of enabling a market expansion and protecting revenue, so the board funds it as a business enabler.",
    f: "govhierarchy"
  },

  /* ===== Governance banners ===== */
  "Corporate Governance": {
    t: "Corporate Governance",
    d: "The overall system of rules, practices and accountability by which the whole organisation is directed and controlled by its board and executives. Security governance is a SUBSET of it — security must align upward to corporate goals and oversight.",
    x: "The board's risk-appetite statement and oversight committees set the frame within which the security programme must operate.",
    f: "govhierarchy"
  },
  "Security Governance": {
    t: "Security Governance",
    d: "The set of responsibilities and practices exercised by senior management to provide strategic direction, ensure objectives are achieved, manage risk appropriately, and verify the security programme delivers value. It translates corporate governance into security direction.",
    x: "Steering committees, a published security strategy, and metrics reported to the board are all security governance in action.",
    f: "govhierarchy"
  },

  /* ===== Focus of Security ===== */
  "Focus of Security": {
    t: "Focus of Security",
    d: "Security's purpose is to ENABLE the business and INCREASE its value — not merely to say no. Reframing security as a business enabler is a recurring CISSP theme and the right 'mindset' answer on the exam.",
    x: "Strong security lets the company win a regulated contract it otherwise couldn't bid for — security creating value."
  },
  "Enable Business": {
    t: "Enable Business",
    d: "Security should make business activities POSSIBLE and safer — supporting new products, markets and partnerships rather than blocking them. A security function that only obstructs is failing its purpose.",
    x: "Implementing strong authentication enables a secure customer portal that opens a new online revenue stream."
  },
  "Increase Value": {
    t: "Increase Value",
    d: "Effective security adds value — protecting reputation, reducing losses, enabling trust, and supporting compliance that unlocks business. Security investment should be justified in business-value terms.",
    x: "A trusted security posture (SOC 2, ISO 27001) becomes a competitive differentiator that wins enterprise customers."
  },

  /* ===== Roles & Responsibilities ===== */
  "Clearly Defined Roles & Responsibilities": {
    t: "Clearly Defined Roles & Responsibilities",
    d: "Effective governance requires everyone to know who is accountable and who is responsible. This pillar covers accountability vs responsibility and the legal duties of due care and due diligence that leadership must demonstrate.",
    x: "An RACI matrix makes clear that the data owner is accountable for classification while IT is responsible for implementing controls.",
    f: "duecare"
  },
  "Accountability": {
    t: "Accountability",
    d: "Being ultimately ANSWERABLE for an outcome — it cannot be delegated. The accountable party (usually senior management or the asset owner) bears the consequences even if others do the work.",
    x: "Senior management remains accountable for a breach even though the security team was responsible for the controls."
  },
  "Responsibility": {
    t: "Responsibility",
    d: "Being assigned to DO the work or operate the control. Responsibility can be delegated to teams or individuals; accountability cannot. Many people can be responsible; one role is accountable.",
    x: "The system administrator is responsible for applying patches; the system owner is accountable that they get applied."
  },
  "Due Care": {
    t: "Due Care",
    d: "DOING what a reasonable, prudent person would do to protect the organisation — actually implementing the controls and acting responsibly. Failing due care can mean negligence and legal liability.",
    x: "Encrypting customer data and training staff are acts of due care — the prudent steps a reasonable organisation takes.",
    f: "duecare"
  },
  "Due Diligence": {
    t: "Due Diligence",
    d: "KNOWING what should be done — the ongoing research, investigation and verification that informs due care. Due diligence is understanding the risks and requirements; due care is acting on them.",
    x: "Investigating a vendor's security posture and reviewing regulations before signing is due diligence; the resulting controls are due care.",
    f: "duecare"
  },

  /* ===== Import/Export ===== */
  "Import/export controls": {
    t: "Import / Export Controls",
    d: "Laws restricting the cross-border movement of sensitive technology — especially STRONG ENCRYPTION and dual-use/military goods. A global organisation must comply with the controls of every country it operates in.",
    x: "Shipping a product with strong cryptography to certain countries may require an export licence under these controls."
  },
  "ITAR & EAR": {
    t: "ITAR & EAR",
    d: "Two U.S. export-control regimes. ITAR (International Traffic in Arms Regulations) governs defence/military items on the U.S. Munitions List; EAR (Export Administration Regulations) governs commercial and 'dual-use' items, including most commercial encryption.",
    x: "Exporting defence-related software falls under ITAR; exporting commercial encryption software typically falls under EAR."
  },
  "Wassenaar Arrangement": {
    t: "Wassenaar Arrangement",
    d: "A multinational (40+ country) export-control agreement coordinating controls on conventional arms and DUAL-USE goods and technologies — including cryptography. It harmonises member nations' export controls.",
    x: "Member countries align their rules on exporting cryptographic products under the Wassenaar Arrangement."
  },

  /* ===== Transborder / Privacy ===== */
  "Transborder data flow": {
    t: "Transborder Data Flow",
    d: "The movement of data across national borders, which triggers different jurisdictions' privacy and sovereignty laws. Transfers of personal data out of a region (e.g. the EU) must use approved legal mechanisms.",
    x: "Moving EU citizens' data to a U.S. cloud region requires GDPR-approved transfer safeguards (e.g. Standard Contractual Clauses)."
  },
  "Privacy": {
    t: "Privacy",
    d: "The right of individuals to control their personal information and how it is collected, used and shared. Privacy obligations (GDPR, HIPAA, CCPA, etc.) are a core compliance driver for the security programme.",
    x: "GDPR gives data subjects rights (access, erasure) the organisation must be able to honour, shaping its data handling."
  },

  /* ===== Ethics ===== */
  "Ethics": {
    t: "Ethics",
    d: "The principles of right conduct that guide professional behaviour beyond what the law strictly requires. CISSP holders are bound by the (ISC)² Code of Professional Ethics, and organisations adopt codes of conduct.",
    x: "Choosing to disclose a vulnerability responsibly, even when not legally required, is an ethical decision."
  },
  "(ISC)² Code of Professional Ethics": {
    t: "(ISC)² Code of Professional Ethics",
    d: "The mandatory code every CISSP must follow, with four canons applied IN ORDER of priority: (1) Protect society, the common good, necessary public trust and confidence, and the infrastructure; (2) Act honourably, honestly, justly, responsibly and legally; (3) Provide diligent and competent service to principals; (4) Advance and protect the profession.",
    x: "When canons conflict, protecting society and the public good (canon 1) outranks serving your employer (canon 3)."
  },

  /* ===== Policy hierarchy ===== */
  "Corporate Laws": {
    t: "Corporate Laws",
    d: "The external legal and regulatory requirements (statutes, regulations, contractual obligations) the organisation must obey. These laws are a primary INPUT that the overarching security policy must satisfy.",
    x: "SOX, HIPAA and GDPR obligations drive specific requirements that flow into the company's security policies."
  },
  "Overarching Security Policy": {
    t: "Overarching (Organisational) Security Policy",
    d: "The top-level, high-level policy issued by senior management that states the organisation's overall security intent and direction. It is mandatory and broad — the parent document from which all functional policies and standards derive.",
    x: "A one-page board-approved information security policy committing the organisation to protect information assets, signed by the CEO.",
    f: "policydocs"
  },
  "Functional Security Policies": {
    t: "Functional (Issue/System-Specific) Security Policies",
    d: "More detailed policies addressing specific issues or systems (acceptable use, access control, email, BYOD). They sit under the overarching policy and are implemented through standards, procedures, baselines and guidelines.",
    x: "An Acceptable Use Policy and a Remote Access Policy are functional policies under the overarching security policy.",
    f: "policydocs"
  },
  "Standards": {
    t: "Standards",
    d: "MANDATORY, specific rules that define HOW a policy is met — uniform use of technologies, configurations or methods across the organisation. They make policy enforceable and consistent.",
    x: "A standard mandating AES-256 for all data-at-rest encryption and TLS 1.2+ for all web traffic.",
    f: "policydocs"
  },
  "Procedures": {
    t: "Procedures",
    d: "MANDATORY, detailed STEP-BY-STEP instructions for performing a task to meet a policy/standard. The most granular, operational document in the hierarchy.",
    x: "A documented step-by-step procedure for securely provisioning a new server to the hardening standard.",
    f: "policydocs"
  },
  "Baselines": {
    t: "Baselines",
    d: "MANDATORY minimum levels of security that a system or control must meet — a consistent reference point. Anything below the baseline is non-compliant.",
    x: "A security baseline requiring every workstation to have disk encryption, EDR, and the current patch level.",
    f: "policydocs"
  },
  "Guidelines": {
    t: "Guidelines",
    d: "RECOMMENDED, discretionary advice and best practices — the ONLY document type in the hierarchy that is NOT mandatory. They help where flexibility or judgement is needed.",
    x: "A guideline suggesting good password-manager practices, offered as advice rather than an enforced rule.",
    f: "policydocs"
  },

  /* ===== Risk / Procurement / Training ===== */
  "Risk Management": {
    t: "Risk Management",
    d: "The central discipline of Domain 1: identifying, assessing, and treating risk to keep it within the organisation's risk appetite. Every governance decision ultimately ties back to managing risk to acceptable levels.",
    x: "After assessing a risk, management chooses to mitigate it with a control, accept it, transfer it (insurance), or avoid the activity."
  },
  "Procurement": {
    t: "Procurement",
    d: "Acquiring products and services securely — building security requirements into purchasing, vetting suppliers, and governing the relationship through contracts and SLAs. The front end of supply-chain risk management.",
    x: "A cloud-service purchase includes security requirements, a right-to-audit clause, and an SLA before the contract is signed."
  },
  "Contracts & SLAs": {
    t: "Contracts & SLAs",
    d: "The legal instruments that bind suppliers to required security and service levels. Contracts define obligations (security clauses, right-to-audit, breach notification); SLAs define measurable performance targets with penalties.",
    x: "An SLA guarantees 99.9% uptime and 4-hour incident response, with service credits if the vendor misses them."
  },
  "Awareness, Training & Education": {
    t: "Awareness, Training & Education (Domain 1.12)",
    d: "The three escalating levels of building the human firewall: AWARENESS changes behaviour and attention (the 'what'), TRAINING builds specific job skills (the 'how'), and EDUCATION develops deeper understanding (the 'why'). The most cost-effective control against social engineering.",
    x: "Phishing-awareness posters (awareness), hands-on secure-coding training (training), and a degree/certification (education)."
  }
});
/* ============================================================
   CISSP Domain 1 — Layout 2 hover details (Privacy & Intellectual Property)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-1-data.js. Consumed by cissp-domain-1.js.
   OECD's "Accountability" uses data-ac-key="oecd-accountability"
   to stay distinct from the roles "Accountability" in Layout 1.
   Privacy-policy Standards/Procedures/Baselines/Guidelines reuse
   the Layout 1 keys (same concepts).
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  iptypes: `
    <svg viewBox="0 0 330 150" class="fig" role="img" aria-label="Intellectual property types">
      <g font-size="8.5">
        <rect x="6" y="6" width="318" height="20" fill="#3a0a0e" stroke="#d31324"/>
        <text x="12" y="20" fill="#fff" font-weight="700">IP TYPE &mdash; PROTECTS &mdash; TERM</text>
        <rect x="6" y="26" width="318" height="28" fill="#161616" stroke="#3a2030"/>
        <text x="12" y="38" fill="#ff9ab0" font-weight="700">Trade Secret</text><text x="12" y="49" fill="#ddd" font-size="8">confidential business info &middot; forever IF kept secret</text>
        <rect x="6" y="54" width="318" height="28" fill="#161616" stroke="#3a2030"/>
        <text x="12" y="66" fill="#ff9ab0" font-weight="700">Patent</text><text x="12" y="77" fill="#ddd" font-size="8">inventions &middot; ~20 yrs &middot; novel/useful/non-obvious, public</text>
        <rect x="6" y="82" width="318" height="28" fill="#161616" stroke="#3a2030"/>
        <text x="12" y="94" fill="#ff9ab0" font-weight="700">Copyright</text><text x="12" y="105" fill="#ddd" font-size="8">original works (expression) &middot; life + 70 yrs &middot; automatic</text>
        <rect x="6" y="110" width="318" height="28" fill="#161616" stroke="#3a2030"/>
        <text x="12" y="122" fill="#ff9ab0" font-weight="700">Trademark</text><text x="12" y="133" fill="#ddd" font-size="8">brand marks/logos &middot; renewable indefinitely</text>
      </g>
    </svg>`,

  oecd: `
    <svg viewBox="0 0 330 150" class="fig" role="img" aria-label="OECD privacy principles">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">8 OECD Privacy Principles</text>
      <g font-size="8" fill="#e0e0e0">
        <text x="14" y="32">1 &middot; Collection Limitation</text><text x="170" y="32">2 &middot; Data Quality</text>
        <text x="14" y="50">3 &middot; Purpose Specification</text><text x="170" y="50">4 &middot; Use Limitation</text>
        <text x="14" y="68">5 &middot; Security Safeguards</text><text x="170" y="68">6 &middot; Openness</text>
        <text x="14" y="86">7 &middot; Individual Participation</text><text x="170" y="86">8 &middot; Accountability</text>
      </g>
      <rect x="10" y="98" width="310" height="40" rx="5" fill="#161616" stroke="#a0303f"/>
      <text x="165" y="114" text-anchor="middle" fill="#ff9ab0" font-size="8.5" font-weight="700">the foundation of modern privacy law</text>
      <text x="165" y="129" text-anchor="middle" fill="#a6a6a6" font-size="8">GDPR, etc. build on these fair-information practices</text>
    </svg>`,

  pii: `
    <svg viewBox="0 0 330 120" class="fig" role="img" aria-label="Categories of personal data">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Categories of Personal Data</text>
      <g font-size="8.5" fill="#e0e0e0">
        <rect x="8" y="22" width="314" height="22" rx="3" fill="#161616" stroke="#a0303f"/><text x="14" y="36"><tspan fill="#ff9ab0" font-weight="700">PII</tspan> &mdash; identifies a person (name, SSN, email)</text>
        <rect x="8" y="46" width="314" height="22" rx="3" fill="#161616" stroke="#a0303f"/><text x="14" y="60"><tspan fill="#ff9ab0" font-weight="700">SPI</tspan> &mdash; sensitive (race, health, biometrics, religion)</text>
        <rect x="8" y="70" width="314" height="22" rx="3" fill="#161616" stroke="#a0303f"/><text x="14" y="84"><tspan fill="#ff9ab0" font-weight="700">PHI</tspan> &mdash; protected health info (HIPAA)</text>
        <rect x="8" y="94" width="314" height="22" rx="3" fill="#161616" stroke="#555"/><text x="14" y="108"><tspan fill="#cbd" font-weight="700">PI</tspan> &mdash; any personal information (broadest)</text>
      </g>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  /* ============== PRIVACY ============== */
  "Privacy": {
    t: "Privacy (Domain 1.4)",
    d: "The right of an individual to control their personal information and be free from unwarranted observation. Privacy is a major compliance driver: you must know what personal data you hold, manage its lifecycle, and meet legal regimes like GDPR and the OECD principles. Crucially, you cannot achieve privacy without security.",
    x: "An organisation maps where it holds personal data, limits collection, secures it, and honours data-subject rights to comply with GDPR."
  },
  "privacy-definition": {
    t: "What Privacy Means",
    d: "Privacy is the state or condition of being free from being observed or disturbed by other people &mdash; applied to data, the individual's right to control how their personal information is collected, used and shared. (Distinct from security, which is the means to protect it.)",
    x: "A customer expecting that the data they gave for billing isn't sold to advertisers is exercising an expectation of privacy."
  },
  "Privacy policy": {
    t: "Privacy Policy",
    d: "The organisation's documented commitment on how it collects, uses, stores, shares and protects personal data, and the rights it honours. Like any policy it is implemented through standards, procedures, baselines and guidelines.",
    x: "A published privacy notice telling users what data is collected, why, how long it's kept, and how to request deletion."
  },
  "Personal Data": {
    t: "Personal Data",
    d: "Any information relating to an identified or identifiable person. It spans categories of sensitivity (PII, SPI, PHI, PI) and the kinds of identifiers (direct, indirect, online) that can single someone out. Knowing what you hold is the first step to protecting it.",
    x: "A record combining a name, health condition and IP address is personal data spanning PII, PHI and an online identifier.",
    f: "pii"
  },
  "PII": {
    t: "PII — Personally Identifiable Information",
    d: "Information that can identify a specific individual, on its own or combined with other data &mdash; name, SSN, passport number, email, phone. The core category privacy laws protect.",
    x: "A spreadsheet of customer names, addresses and social-security numbers is PII.",
    f: "pii"
  },
  "SPI": {
    t: "SPI — Sensitive Personal Information",
    d: "A more sensitive subset of personal data whose exposure causes greater harm &mdash; race/ethnicity, political or religious beliefs, sexual orientation, biometric and health data. Laws (e.g. GDPR 'special categories') give it extra protection.",
    x: "An employee's medical records and biometric fingerprints are sensitive personal information requiring stronger controls.",
    f: "pii"
  },
  "PHI": {
    t: "PHI — Protected Health Information",
    d: "Health information linked to an individual, specifically protected under HIPAA in the U.S. Covers medical records, treatment, and payment-for-care data held by covered entities.",
    x: "A hospital's records of a patient's diagnoses and prescriptions are PHI under HIPAA.",
    f: "pii"
  },
  "PI": {
    t: "PI — Personal Information",
    d: "The broadest umbrella term for any information relating to a person, used by regimes like the CCPA. PII is a subset of PI; PI can include data that is personal but not necessarily uniquely identifying on its own.",
    x: "Browsing history and purchase preferences tied to an account are personal information.",
    f: "pii"
  },
  "Direct Identifiers": {
    t: "Direct Identifiers",
    d: "Data that identifies a person on its OWN, with no extra information needed &mdash; full name, SSN, passport number, email address. The highest-risk identifiers.",
    x: "A passport number or a full legal name is a direct identifier."
  },
  "Indirect Identifiers": {
    t: "Indirect Identifiers",
    d: "Data that doesn't identify a person alone but CAN when combined with other indirect identifiers (quasi-identifiers). The classic example: date of birth + ZIP code + gender can uniquely identify most people.",
    x: "Birth date, postal code and gender together can re-identify an individual even from 'anonymised' data."
  },
  "Online Identifiers": {
    t: "Online Identifiers",
    d: "Digital traces that can identify or single out a device/person &mdash; IP addresses, cookie IDs, device IDs, advertising IDs, MAC addresses. GDPR explicitly treats these as personal data.",
    x: "A persistent advertising cookie ID that tracks a user across sites is an online identifier and personal data under GDPR."
  },

  /* ===== Data Lifecycle ===== */
  "Data Lifecycle": {
    t: "Data Lifecycle",
    d: "Personal data must be governed across its whole life &mdash; creation/update, storage, use, sharing, archival and destruction &mdash; with privacy controls applied at every stage (minimise at creation, secure in storage, limit use, control sharing, retain per policy, sanitise at destruction).",
    x: "A privacy programme defines retention and secure-deletion rules so personal data isn't kept longer than needed."
  },
  "Creation / Update": {
    t: "Creation / Update",
    d: "The point where personal data enters the system or is changed. Apply data minimization (collect only what's needed) and capture consent/purpose here &mdash; the cheapest place to reduce privacy risk.",
    x: "A signup form collects only the fields genuinely required, with a clear consent checkbox."
  },
  "Store": {
    t: "Store",
    d: "Holding personal data at rest &mdash; protect it with encryption, access control and correct classification, and store it only where lawful (data residency).",
    x: "Customer PII is stored encrypted with access restricted to the billing team on a need-to-know basis."
  },
  "Use": {
    t: "Use",
    d: "Processing personal data while in use &mdash; restricted to the stated purpose (purpose/use limitation) and to authorised personnel under least privilege.",
    x: "Marketing may not repurpose data collected for shipping without a new lawful basis."
  },
  "Share": {
    t: "Share",
    d: "Disclosing or transferring personal data to third parties or across borders &mdash; governed by contracts, lawful transfer mechanisms, and the individual's consent. Transborder sharing triggers extra rules.",
    x: "Sharing data with a processor requires a data-processing agreement; transferring it abroad needs GDPR safeguards."
  },
  "Archive": {
    t: "Archive",
    d: "Moving data to long-term retention. It must still be protected and retained only as long as legally/operationally necessary &mdash; over-retention is a privacy liability.",
    x: "Records are archived encrypted for the legally required period, then scheduled for deletion."
  },
  "Destroy": {
    t: "Destroy",
    d: "Securely disposing of personal data at end of retention so it can't be recovered (defeating remanence). A privacy obligation as much as a security one &mdash; and required to honour erasure requests.",
    x: "At end of retention, records are crypto-erased; a GDPR erasure ('right to be forgotten') request is fulfilled the same way."
  },

  /* ===== OECD Guidelines ===== */
  "OECD Guidelines": {
    t: "OECD Privacy Guidelines",
    d: "Eight internationally-recognised privacy principles (fair information practices) that underpin modern privacy law including GDPR: collection limitation, data quality, purpose specification, use limitation, security safeguards, openness, individual participation, and accountability.",
    x: "GDPR's core requirements map almost one-to-one onto these eight OECD principles.",
    f: "oecd"
  },
  "Collection Limitation": {
    t: "Collection Limitation",
    d: "Collect personal data lawfully and fairly, with the individual's knowledge/consent, and only what is needed. The OECD principle behind data minimization.",
    x: "Only gathering the data fields necessary for the service, with consent.",
    f: "oecd"
  },
  "Data Quality": {
    t: "Data Quality",
    d: "Personal data should be relevant, accurate, complete and kept up to date for its purpose. Bad data harms the individual and the organisation.",
    x: "Letting users correct their profile keeps the data accurate and current.",
    f: "oecd"
  },
  "Purpose Specification": {
    t: "Purpose Specification",
    d: "State the purpose for collecting personal data at or before the time of collection. The individual must know why their data is being gathered.",
    x: "A form states the data is collected to fulfil orders &mdash; nothing else.",
    f: "oecd"
  },
  "Use Limitation": {
    t: "Use Limitation",
    d: "Use or disclose personal data ONLY for the specified purpose, except with consent or legal authority. You can't quietly repurpose data.",
    x: "Data collected for billing can't be used for marketing without separate consent.",
    f: "oecd"
  },
  "Security Safeguards": {
    t: "Security Safeguards",
    d: "Protect personal data with reasonable security against loss, unauthorised access, use, modification or disclosure. This is the OECD principle that directly links privacy to security.",
    x: "Encryption, access control and monitoring protect the personal data being held.",
    f: "oecd"
  },
  "Openness": {
    t: "Openness",
    d: "Be transparent about your data practices, policies and developments regarding personal data &mdash; people should be able to learn what you hold and how you use it.",
    x: "A clear, published privacy notice describing data practices satisfies openness.",
    f: "oecd"
  },
  "Individual Participation": {
    t: "Individual Participation",
    d: "Individuals have the right to access their data, confirm whether you hold it, and have it corrected, completed or erased. The basis of modern data-subject rights.",
    x: "A user requests a copy of their data and asks for an error to be corrected.",
    f: "oecd"
  },
  "oecd-accountability": {
    t: "Accountability (OECD)",
    d: "The data controller is accountable for complying with measures that give effect to all the other principles. Someone must own privacy compliance &mdash; it can't be nobody's job.",
    x: "A Data Protection Officer is accountable for the organisation's adherence to the privacy principles.",
    f: "oecd"
  },

  /* ===== GDPR ===== */
  "GDPR": {
    t: "GDPR — General Data Protection Regulation",
    d: "The EU's comprehensive privacy regulation protecting EU residents' personal data, with global reach (it applies to anyone processing EU residents' data). Grants strong data-subject rights, demands lawful basis and minimization, requires breach notification, and carries heavy fines (up to 4% of global annual turnover).",
    x: "A U.S. company serving EU customers must comply with GDPR or risk fines up to 4% of worldwide revenue."
  },
  "Supervisory Authority": {
    t: "Supervisory Authority (SA)",
    d: "The independent national regulator that enforces GDPR in each EU member state &mdash; investigating complaints, conducting audits, and issuing fines. Organisations report qualifying breaches to their lead SA.",
    x: "Ireland's Data Protection Commission is the supervisory authority for many big-tech firms headquartered there."
  },
  "Breaches reported within 72 hours": {
    t: "72-Hour Breach Notification",
    d: "Under GDPR, a personal-data breach that poses a risk to individuals must be reported to the supervisory authority without undue delay and within 72 HOURS of becoming aware of it; high-risk breaches also require notifying the affected individuals.",
    x: "On discovering a breach of customer data, the DPO notifies the supervisory authority within 72 hours."
  },
  "Cannot Achieve Privacy without Security": {
    t: "No Privacy Without Security",
    d: "A foundational exam principle: privacy DEPENDS on security. You cannot guarantee an individual's control over their data (privacy) if you cannot protect that data from unauthorised access (security). Security is necessary but not sufficient for privacy.",
    x: "Even a perfect privacy policy is worthless if weak security lets attackers steal the data it promised to protect."
  },

  /* ============== INTELLECTUAL PROPERTY ============== */
  "Intellectual Property": {
    t: "Intellectual Property (Domain 1.4)",
    d: "Intangible creations of the mind that the law protects as assets. The four types the exam tests &mdash; trade secret, patent, copyright, trademark &mdash; differ in what they protect, how long, and whether registration/disclosure is required.",
    x: "A tech company protects its source algorithm as a trade secret, its hardware as patents, its manuals by copyright, and its logo by trademark.",
    f: "iptypes"
  },
  "Trade Secret": {
    t: "Trade Secret",
    d: "Confidential business information that gives competitive advantage and is protected as long as it is kept SECRET &mdash; no registration, no expiry, but no protection once disclosed. Requires reasonable efforts to keep it secret (NDAs, access control).",
    x: "The Coca-Cola formula and Google's search algorithm are trade secrets &mdash; protected indefinitely while kept confidential.",
    f: "iptypes"
  },
  "Patent": {
    t: "Patent",
    d: "Protects INVENTIONS (processes, machines, methods) for a limited term (~20 years), granting the holder exclusive rights in exchange for PUBLICLY DISCLOSING the invention. Must be novel, useful and non-obvious.",
    x: "A pharmaceutical company patents a new drug, getting ~20 years of exclusivity before generics can be made.",
    f: "iptypes"
  },
  "Copyright": {
    t: "Copyright",
    d: "Protects original works of authorship &mdash; the EXPRESSION of an idea, not the idea itself (software, books, music, art). Arises automatically on creation; lasts the author's life + 70 years (in many jurisdictions).",
    x: "Source code, a novel, and a song are protected by copyright the moment they're created &mdash; no registration needed.",
    f: "iptypes"
  },
  "Trademark": {
    t: "Trademark",
    d: "Protects words, symbols, logos and slogans that identify and distinguish the source of goods/services (brand identity). Can be renewed INDEFINITELY as long as it's in use. Prevents brand confusion.",
    x: "The Nike swoosh and the name 'Coca-Cola' are trademarks protecting brand identity.",
    f: "iptypes"
  }
});
/* ============================================================
   CISSP Domain 1 — Layout 3 hover details (Risk Management)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-1-data.js. Consumed by cissp-domain-1.js.
   Quantitative/Qualitative appear under BOTH Asset Valuation and
   Risk Analysis, so they use data-ac-key (val-* and ra-*). The map
   title uses data-ac-key="rm-title" so it doesn't reuse Layout 1's
   "Risk Management" box detail.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  ale: `
    <svg viewBox="0 0 330 120" class="fig" role="img" aria-label="ALE formula">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Quantitative Risk Formula</text>
      <rect x="20" y="26" width="290" height="20" rx="4" fill="#161616" stroke="#a0303f"/><text x="165" y="40" text-anchor="middle" fill="#f0f0f0" font-size="9">SLE = Asset Value &times; EF (Exposure Factor)</text>
      <rect x="20" y="50" width="290" height="20" rx="4" fill="#161616" stroke="#a0303f"/><text x="165" y="64" text-anchor="middle" fill="#f0f0f0" font-size="9">ARO = Annualised Rate of Occurrence</text>
      <rect x="20" y="74" width="290" height="22" rx="4" fill="#3a0a0e" stroke="#d31324"/><text x="165" y="89" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">ALE = SLE &times; ARO</text>
      <text x="165" y="112" text-anchor="middle" fill="#a6a6a6" font-size="8">Spend on a control should be &le; the ALE it removes</text>
    </svg>`,

  treatment: `
    <svg viewBox="0 0 330 110" class="fig" role="img" aria-label="Risk treatment options">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">4 Risk Treatments</text>
      <g font-size="8.5" fill="#e0e0e0">
        <rect x="10" y="22" width="150" height="34" rx="5" fill="#161616" stroke="#a0303f"/><text x="85" y="38" text-anchor="middle" fill="#ff9ab0" font-weight="700">AVOID</text><text x="85" y="50" text-anchor="middle" font-size="7.5">stop the risky activity</text>
        <rect x="170" y="22" width="150" height="34" rx="5" fill="#161616" stroke="#a0303f"/><text x="245" y="38" text-anchor="middle" fill="#ff9ab0" font-weight="700">TRANSFER</text><text x="245" y="50" text-anchor="middle" font-size="7.5">insurance / outsource (share)</text>
        <rect x="10" y="60" width="150" height="34" rx="5" fill="#2a0a12" stroke="#d31324"/><text x="85" y="76" text-anchor="middle" fill="#ff9ab0" font-weight="700">MITIGATE</text><text x="85" y="88" text-anchor="middle" font-size="7.5">reduce with controls</text>
        <rect x="170" y="60" width="150" height="34" rx="5" fill="#161616" stroke="#a0303f"/><text x="245" y="76" text-anchor="middle" fill="#ff9ab0" font-weight="700">ACCEPT</text><text x="245" y="88" text-anchor="middle" font-size="7.5">retain (within appetite)</text>
      </g>
    </svg>`,


  rmf: `
    <svg viewBox="0 0 330 130" class="fig" role="img" aria-label="NIST RMF seven steps">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">NIST RMF (SP 800-37) &mdash; 7 steps</text>
      <g font-size="8.5" fill="#e0e0e0">
        <text x="20" y="34">1 &middot; Prepare</text><text x="180" y="34">2 &middot; Categorize</text>
        <text x="20" y="52">3 &middot; Select</text><text x="180" y="52">4 &middot; Implement</text>
        <text x="20" y="70">5 &middot; Assess</text><text x="180" y="70">6 &middot; Authorize</text>
        <text x="20" y="88">7 &middot; Monitor</text>
      </g>
      <rect x="14" y="98" width="302" height="26" rx="5" fill="#161616" stroke="#a0303f"/>
      <text x="165" y="114" text-anchor="middle" fill="#a6a6a6" font-size="7.5">Authorize = management formally accepts residual risk (ATO)</text>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  "rm-title": {
    t: "Risk Management (Domain 1.9)",
    d: "The core discipline of Domain 1: value your assets, analyse the risks to them (threat + vulnerability, with likelihood and impact), then treat each risk (avoid, transfer, mitigate, or accept) to bring it within the organisation's risk appetite — all guided by a recognised risk framework.",
    x: "After valuing a database and finding a high-likelihood, high-impact risk, management mitigates it with controls and accepts the small residual risk that remains.",
    f: "treatment"
  },

  /* ===== 1. Asset Valuation ===== */
  "asset-valuation": {
    t: "1. Asset Valuation",
    d: "The first step: determine what each asset is WORTH, because you can't make rational decisions about protecting it until you know its value. Value can be expressed quantitatively (a dollar figure) or qualitatively (a relative ranking).",
    x: "Valuing a customer database at $2M (including reputation and recovery costs) sets the ceiling for how much to spend protecting it."
  },
  "val-quantitative": {
    t: "Quantitative Valuation",
    d: "Assigning an objective MONETARY value to an asset — replacement cost, lost revenue, recovery cost, liability. Enables hard cost-benefit math but can be hard to calculate for intangibles like reputation.",
    x: "Estimating an asset's value at $500,000 based on replacement and downtime costs."
  },
  "val-qualitative": {
    t: "Qualitative Valuation",
    d: "Ranking an asset's value on a relative SCALE (e.g. low/medium/high or critical) rather than in exact dollars. Faster and good for intangibles, but subjective and not directly comparable in cost terms.",
    x: "Rating the brand reputation asset as 'critical' without assigning it a precise dollar figure."
  },

  /* ===== 2. Risk Analysis ===== */
  "risk-analysis": {
    t: "2. Risk Analysis",
    d: "Identifying and evaluating risk. Risk arises where a THREAT can exploit a VULNERABILITY; you assess each risk's LIKELIHOOD and IMPACT, using a quantitative (ALE) or qualitative (relative) method. Risk = likelihood &times; impact.",
    x: "A threat (attacker) exploiting a vulnerability (unpatched server) with high likelihood and high impact is a top-priority risk."
  },
  "Threats": {
    t: "Threats",
    d: "Any potential event or actor that could cause harm to an asset by exploiting a vulnerability — hackers, malware, insiders, natural disasters. A threat with no matching vulnerability poses little risk, and vice versa.",
    x: "A ransomware gang is a threat; it becomes a risk when it can exploit your unpatched, un-backed-up systems."
  },
  "Threat Modeling": {
    t: "Threat Modeling (Domain 1.10)",
    d: "A structured process to identify, enumerate and prioritise potential threats to a system early in design, so controls can be built in. Common methodologies: STRIDE, PASTA, and DREAD.",
    x: "During design, the team threat-models a new API and discovers a spoofing and an elevation-of-privilege risk to mitigate before launch."
  },
  "STRIDE": {
    t: "STRIDE",
    d: "Microsoft's threat-classification model naming six threat categories: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, and Elevation of privilege. Each maps to a security property it violates.",
    x: "Classifying a found threat as 'Elevation of privilege' (a user gaining admin rights) under STRIDE."
  },
  "PASTA": {
    t: "PASTA",
    d: "Process for Attack Simulation and Threat Analysis — a 7-stage, RISK-CENTRIC methodology that aligns threat modeling with business objectives and simulates attacker behaviour to prioritise realistic threats.",
    x: "Using PASTA to model attacks against a payment system in the context of business impact, not just technical flaws."
  },
  "DREAD": {
    t: "DREAD",
    d: "A threat-RATING model scoring each threat on Damage, Reproducibility, Exploitability, Affected users, and Discoverability to produce a comparable risk ranking. (Older/Microsoft; criticised for subjectivity.)",
    x: "Scoring a vulnerability high on Damage and Exploitability via DREAD to prioritise fixing it first."
  },
  "Vulnerabilities": {
    t: "Vulnerabilities",
    d: "Weaknesses or gaps in an asset or control that a threat can exploit — unpatched software, weak passwords, missing controls, poor processes. Found via vulnerability assessment and penetration testing.",
    x: "An unpatched web server is a vulnerability a threat actor can exploit; patching removes it."
  },
  "vapt": {
    t: "Vulnerability Assessment & Penetration Testing",
    d: "The two techniques for finding vulnerabilities. A vulnerability ASSESSMENT identifies and ranks weaknesses (broad, no exploitation). A PENETRATION TEST actively exploits them to prove real impact (deep, authorised). VA finds; pen test proves.",
    x: "A monthly VA scan lists missing patches; an annual pen test chains weaknesses to show an attacker could reach the database."
  },
  "Likelihood": {
    t: "Likelihood (Probability)",
    d: "How probable it is that a given threat will successfully exploit a vulnerability. One of the two factors in risk (the other is impact). Drives prioritisation — high-likelihood risks usually get attention first.",
    x: "An internet-facing unpatched service has a high likelihood of being exploited."
  },
  "Impact": {
    t: "Impact (Consequence)",
    d: "The magnitude of harm if the risk is realised — financial loss, downtime, reputational damage, legal penalty. The second factor in risk. A low-likelihood but catastrophic-impact risk may still demand action.",
    x: "A breach of the customer database would have severe impact (regulatory fines + reputation loss) even if unlikely."
  },
  "ra-quantitative": {
    t: "Quantitative Risk Analysis",
    d: "Expressing risk in objective MONETARY terms using the ALE calculation, so controls can be justified with cost-benefit math. Precise but data-hungry and time-consuming.",
    x: "Calculating an ALE of $50,000/year for a risk, then justifying a $30,000 control that reduces it.",
    f: "ale"
  },
  "ale": {
    t: "ALE = SLE × ARO",
    d: "The quantitative risk formula. SLE (Single Loss Expectancy) = Asset Value × EF (Exposure Factor, the % of asset lost per event). ARO (Annualised Rate of Occurrence) = how many times per year it's expected. ALE (Annualised Loss Expectancy) = SLE × ARO. A control is worth buying if it costs less than the ALE it removes.",
    x: "Asset $100k, EF 50% → SLE $50k; ARO 0.2 (once every 5 yrs) → ALE = $10k/year. A control under $10k/yr is justified.",
    f: "ale"
  },
  "ra-qualitative": {
    t: "Qualitative Risk Analysis",
    d: "Ranking risk on relative SCALES (low/medium/high) using judgement, scenarios and risk matrices rather than precise dollars. Faster, captures intangibles, but subjective. Often combined with quantitative for a hybrid view.",
    x: "Plotting risks on a 5×5 likelihood-vs-impact heat map to flag the 'red' high risks."
  },

  /* ===== 3. Treatment ===== */
  "treatment": {
    t: "3. Risk Treatment (Response)",
    d: "Deciding what to DO about each analysed risk. Four options: AVOID (stop the activity), TRANSFER (share it, e.g. insurance), MITIGATE (reduce it with controls), or ACCEPT (retain it within risk appetite). Whatever remains after treatment is residual risk.",
    x: "For a risky new feature, the business avoids one risk, insures another (transfer), adds controls for a third (mitigate), and accepts a small residual.",
    f: "treatment"
  },
  "Avoid": {
    t: "Avoid (Risk Avoidance)",
    d: "Eliminating the risk entirely by NOT engaging in the activity that causes it. The most complete option, but it also forgoes the benefit/opportunity — so it's used when risk far outweighs reward.",
    x: "Deciding not to launch a feature that would collect sensitive data the company isn't equipped to protect.",
    f: "treatment"
  },
  "Transfer": {
    t: "Transfer (Risk Sharing)",
    d: "Shifting the financial impact of the risk to a third party — most commonly INSURANCE, or outsourcing to a provider. The risk still exists, but someone else absorbs the loss. Also called risk sharing.",
    x: "Buying cyber-insurance so an insurer covers breach costs, or outsourcing payment processing to shift PCI liability.",
    f: "treatment"
  },
  "Mitigate": {
    t: "Mitigate (Risk Reduction)",
    d: "Reducing the risk to an acceptable level by applying CONTROLS that lower its likelihood and/or impact. The most common treatment. Controls are classified by nature (administrative/technical/physical) and by function (directive, deterrent, preventative, detective, corrective, recovery, compensating).",
    x: "Adding MFA, patching, and backups to reduce the likelihood and impact of an account-compromise risk.",
    f: "controls"
  },
  "Administrative": {
    t: "Administrative Controls",
    d: "Controls implemented through POLICY and PEOPLE — policies, procedures, standards, security awareness training, background checks, and personnel processes. Also called managerial controls. They direct human behaviour.",
    x: "An acceptable-use policy and annual security training are administrative controls.",
    f: "controls"
  },
  "Technical / Logical": {
    t: "Technical / Logical Controls",
    d: "Controls implemented through TECHNOLOGY — firewalls, encryption, access-control lists, IDS/IPS, antivirus, authentication systems. They enforce the rules automatically.",
    x: "Disk encryption, a firewall ruleset, and MFA are technical (logical) controls.",
    f: "controls"
  },
  "Physical": {
    t: "Physical Controls",
    d: "Controls that protect the physical environment and assets — locks, fences, guards, mantraps, CCTV, badge readers, lighting. They control physical access and protect people and hardware.",
    x: "Door locks, security guards and surveillance cameras are physical controls.",
    f: "controls"
  },
  "Safeguards": {
    t: "Safeguards",
    d: "PROACTIVE (preventive) controls put in place to reduce risk BEFORE an incident — they lower the likelihood of a threat succeeding. Contrast with countermeasures, which are reactive.",
    x: "Installing MFA and patching ahead of any attack are safeguards."
  },
  "Countermeasures": {
    t: "Countermeasures",
    d: "REACTIVE controls deployed in RESPONSE to a specific, identified threat or after an incident — addressing a particular attack. Safeguards are proactive/general; countermeasures are reactive/targeted.",
    x: "Adding a specific WAF rule after detecting an active injection attack is a countermeasure."
  },
  "Directive": {
    t: "Directive Control",
    d: "A control that DIRECTS or mandates behaviour — telling people what they must do. Usually administrative (policies, signs, procedures).",
    x: "A policy requiring all laptops to be encrypted, or a 'Authorised Personnel Only' sign.",
    f: "controls"
  },
  "Deterrent": {
    t: "Deterrent Control",
    d: "A control that DISCOURAGES a threat actor from attempting an attack by increasing perceived effort or consequence. It doesn't physically stop the act — it dissuades.",
    x: "A 'CCTV in operation' warning sign or visible security guards that make an attacker think twice.",
    f: "controls"
  },
  "Preventative": {
    t: "Preventative Control",
    d: "A control that STOPS an incident from happening in the first place — blocking the threat before it acts. The most desirable category.",
    x: "A firewall blocking malicious traffic, or a locked door preventing entry.",
    f: "controls"
  },
  "Detective": {
    t: "Detective Control",
    d: "A control that IDENTIFIES and alerts on an incident that is happening or has happened. It doesn't prevent — it discovers, enabling response.",
    x: "An IDS alert, CCTV recording, or log review that detects an intrusion.",
    f: "controls"
  },
  "Corrective": {
    t: "Corrective Control",
    d: "A control that RESPONDS to and fixes an incident, returning the system toward normal — remedying the damage after detection.",
    x: "Antivirus quarantining malware, or restoring a corrupted file from backup.",
    f: "controls"
  },
  "Recovery": {
    t: "Recovery Control",
    d: "A control that RESTORES operations and capabilities after a more serious incident or disaster — going beyond corrective to bring the whole system/business back.",
    x: "Failing over to a disaster-recovery site and restoring full operations after an outage.",
    f: "controls"
  },
  "Compensating": {
    t: "Compensating Control",
    d: "An ALTERNATIVE control used when the primary/required control isn't feasible — it provides comparable protection by another means. Common when meeting a standard (e.g. PCI-DSS) where the ideal control can't be implemented.",
    x: "Where a legacy system can't support MFA, adding strict network isolation and monitoring as a compensating control.",
    f: "controls"
  },
  "Functional": {
    t: "Functional (Control Assessment)",
    d: "Assessing whether a control actually DOES what it's supposed to do — does it perform its intended security function? Paired with assurance.",
    x: "Testing that the firewall actually blocks the traffic its rules say it should (functionality)."
  },
  "Assurance": {
    t: "Assurance (Control Assessment)",
    d: "The degree of CONFIDENCE or evidence that a control is correctly implemented and operating effectively over time. Functional = does it work; assurance = how confident are we that it keeps working.",
    x: "Documentation, testing and audit evidence that gives confidence the firewall is correctly configured and maintained."
  },
  "Accept": {
    t: "Accept (Risk Acceptance)",
    d: "Consciously deciding to RETAIN a risk without further treatment because it falls within the organisation's risk appetite, or because mitigation would cost more than the potential loss. Must be a documented, management-approved decision.",
    x: "Management formally accepts the small residual risk of a low-impact system rather than spending more to reduce it.",
    f: "treatment"
  },

  /* ===== Risk Frameworks ===== */
  "Risk Frameworks": {
    t: "Risk Frameworks",
    d: "Recognised, structured methodologies for managing risk consistently. The exam names several: NIST RMF (SP 800-37), ISO 31000, COSO, and ISACA's Risk IT. Using a framework makes risk management repeatable and defensible.",
    x: "A U.S. federal agency follows the NIST RMF; a multinational adopts ISO 31000 for enterprise risk."
  },
  "RMF": {
    t: "RMF — Risk Management Framework (NIST SP 800-37)",
    d: "NIST's 7-step framework for managing security and privacy risk across a system's life: Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor. Widely used by U.S. federal systems; the Authorize step is where management formally accepts residual risk (grants an ATO).",
    x: "A system goes through RMF: categorised per FIPS 199, controls selected from SP 800-53, assessed, then authorised to operate.",
    f: "rmf"
  },
  "rmf-steps": {
    t: "RMF — The 7 Steps",
    d: "Prepare (set context/resources) → Categorize (impact level, FIPS 199) → Select (controls, SP 800-53) → Implement (deploy them) → Assess (test effectiveness) → Authorize (management accepts residual risk, ATO) → Monitor (continuous). Memorise the order — it's testable.",
    x: "After Assess shows controls work, the authorising official grants an Authorization to Operate (Authorize), then Monitor runs continuously.",
    f: "rmf"
  },
  "ISO 31000": {
    t: "ISO 31000",
    d: "An international standard providing principles and generic GUIDELINES for risk management applicable to ANY organisation and any type of risk (not just IT). It's advisory (not certifiable) and frames an enterprise-wide risk process.",
    x: "A company adopts ISO 31000 to standardise how every department identifies, assesses and treats risk."
  },
  "COSO": {
    t: "COSO",
    d: "The Committee of Sponsoring Organizations framework, focused on enterprise risk management and INTERNAL CONTROL — strongly associated with financial reporting and corporate governance (e.g. supporting SOX compliance).",
    x: "Auditors use the COSO framework to evaluate the internal controls over a company's financial reporting."
  },
  "ISACA Risk IT": {
    t: "ISACA Risk IT",
    d: "ISACA's framework (part of the COBIT family) specifically for IT-related business risk — connecting IT risk to enterprise risk management and complementing COBIT's governance focus.",
    x: "An IT governance team uses Risk IT to tie technology risks back to business impact within their COBIT programme."
  }
});

/* ===== Topic-specific figures: control categories vs control types
   (previously all eleven boxes shared one generic taxonomy figure) ===== */
Object.assign(window.AC_FIGS, {
  ctrlcat: `
    <svg viewBox="0 0 330 112" class="fig" role="img" aria-label="Control categories by how they are implemented">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Control Categories &mdash; HOW it is implemented</text>
      <rect x="10" y="24" width="98" height="76" rx="8" fill="#3a0a0e" stroke="#d31324"/>
      <text x="59" y="40" text-anchor="middle" fill="#fff" font-size="8" font-weight="700">ADMINISTRATIVE</text>
      <text x="59" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7">people &amp; paper</text>
      <text x="59" y="69" text-anchor="middle" fill="#e0e0e0" font-size="6.8">policies &middot; training</text>
      <text x="59" y="80" text-anchor="middle" fill="#e0e0e0" font-size="6.8">background checks</text>
      <text x="59" y="93" text-anchor="middle" fill="#a6a6a6" font-size="6.5">a.k.a. managerial</text>
      <rect x="116" y="24" width="98" height="76" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="165" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">TECHNICAL / LOGICAL</text>
      <text x="165" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7">enforced by systems</text>
      <text x="165" y="69" text-anchor="middle" fill="#e0e0e0" font-size="6.8">firewalls &middot; encryption</text>
      <text x="165" y="80" text-anchor="middle" fill="#e0e0e0" font-size="6.8">ACLs &middot; IDS/IPS</text>
      <text x="165" y="93" text-anchor="middle" fill="#a6a6a6" font-size="6.5">hardware or software</text>
      <rect x="222" y="24" width="98" height="76" rx="8" fill="#161616" stroke="#a0303f"/>
      <text x="271" y="40" text-anchor="middle" fill="#ff9ab0" font-size="8" font-weight="700">PHYSICAL</text>
      <text x="271" y="55" text-anchor="middle" fill="#f0f0f0" font-size="7">touchable barriers</text>
      <text x="271" y="69" text-anchor="middle" fill="#e0e0e0" font-size="6.8">locks &middot; fences &middot; guards</text>
      <text x="271" y="80" text-anchor="middle" fill="#e0e0e0" font-size="6.8">CCTV &middot; mantraps</text>
      <text x="271" y="93" text-anchor="middle" fill="#a6a6a6" font-size="6.5">protect people first</text>
    </svg>`,

  ctrltypes: `
    <svg viewBox="0 0 330 148" class="fig" role="img" aria-label="Control types on an incident timeline">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Control Types &mdash; WHEN they act</text>
      <text x="60" y="30" text-anchor="middle" fill="#ff9ab0" font-size="7.5" font-weight="700">BEFORE the incident</text>
      <g font-size="6.8" fill="#e0e0e0">
        <rect x="10" y="36" width="100" height="24" rx="4" fill="#161616" stroke="#a0303f"/>
        <text x="60" y="46" text-anchor="middle" fill="#ff9ab0" font-weight="700" font-size="7">DIRECTIVE</text>
        <text x="60" y="56" text-anchor="middle">tells people what to do</text>
        <rect x="10" y="64" width="100" height="24" rx="4" fill="#161616" stroke="#a0303f"/>
        <text x="60" y="74" text-anchor="middle" fill="#ff9ab0" font-weight="700" font-size="7">DETERRENT</text>
        <text x="60" y="84" text-anchor="middle">discourages the attacker</text>
        <rect x="10" y="92" width="100" height="24" rx="4" fill="#3a0a0e" stroke="#d31324"/>
        <text x="60" y="102" text-anchor="middle" fill="#fff" font-weight="700" font-size="7">PREVENTATIVE</text>
        <text x="60" y="112" text-anchor="middle">stops it happening</text>
      </g>
      <line x1="120" y1="34" x2="120" y2="120" stroke="#a0303f" stroke-dasharray="3 3"/>
      <text x="165" y="30" text-anchor="middle" fill="#ff9ab0" font-size="7.5" font-weight="700">DURING</text>
      <rect x="125" y="64" width="80" height="24" rx="4" fill="#3a0a0e" stroke="#d31324"/>
      <text x="165" y="74" text-anchor="middle" fill="#fff" font-weight="700" font-size="7">DETECTIVE</text>
      <text x="165" y="84" text-anchor="middle" fill="#e0e0e0" font-size="6.8">finds &amp; signals it</text>
      <line x1="210" y1="34" x2="210" y2="120" stroke="#a0303f" stroke-dasharray="3 3"/>
      <text x="270" y="30" text-anchor="middle" fill="#ff9ab0" font-size="7.5" font-weight="700">AFTER</text>
      <g font-size="6.8" fill="#e0e0e0">
        <rect x="220" y="36" width="100" height="24" rx="4" fill="#161616" stroke="#a0303f"/>
        <text x="270" y="46" text-anchor="middle" fill="#ff9ab0" font-weight="700" font-size="7">CORRECTIVE</text>
        <text x="270" y="56" text-anchor="middle">fixes the fault</text>
        <rect x="220" y="64" width="100" height="24" rx="4" fill="#161616" stroke="#a0303f"/>
        <text x="270" y="74" text-anchor="middle" fill="#ff9ab0" font-weight="700" font-size="7">RECOVERY</text>
        <text x="270" y="84" text-anchor="middle">restores operations</text>
      </g>
      <rect x="125" y="122" width="180" height="20" rx="4" fill="#161616" stroke="#a0303f"/>
      <text x="215" y="135" text-anchor="middle" fill="#e0e0e0" font-size="6.8"><tspan fill="#ff9ab0" font-weight="700">COMPENSATING</tspan> &mdash; substitute when the primary control is not feasible</text>
    </svg>`
});

(function () {
  var F = {
    "Mitigate": "ctrlcat",
    "Administrative": "ctrlcat", "Technical / Logical": "ctrlcat", "Physical": "ctrlcat",
    "Directive": "ctrltypes", "Deterrent": "ctrltypes", "Preventative": "ctrltypes",
    "Detective": "ctrltypes", "Corrective": "ctrltypes", "Recovery": "ctrltypes",
    "Compensating": "ctrltypes"
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

  /* ---- policy documents: pyramid position per document type ---- */
  var DOCS = [
    ["Overarching Policy", "management intent &middot; WHY &middot; mandatory"],
    ["Functional Policies", "per-topic rules (email, access) &middot; mandatory"],
    ["Standards", "uniform mandatory tech (e.g. AES-256)"],
    ["Procedures", "step-by-step instructions &middot; mandatory"],
    ["Baselines", "minimum secure configuration &middot; mandatory"],
    ["Guidelines", "recommendations &middot; the only OPTIONAL one"]
  ];
  ["Overarching Security Policy", "Functional Security Policies", "Standards", "Procedures", "Baselines", "Guidelines"].forEach(function (k, i) {
    G["c1doc" + i] = rows("Policy Document Hierarchy", DOCS, i, "more specific as you go down &middot; only guidelines are optional");
    set(k, "c1doc" + i);
  });

  /* ---- control types: when each acts on the incident timeline ---- */
  var CT = [
    ["Directive", "policy / signage says DO this &middot; BEFORE"],
    ["Deterrent", "discourages the attacker (warning, CCTV) &middot; BEFORE"],
    ["Preventative", "stops it happening (lock, firewall) &middot; BEFORE"],
    ["Detective", "finds &amp; alerts (IDS, audit log) &middot; DURING"],
    ["Corrective", "fixes the fault (patch, quarantine) &middot; AFTER"],
    ["Recovery", "restores operations (restore backup) &middot; AFTER"],
    ["Compensating", "substitute when the primary is not feasible"]
  ];
  ["Directive", "Deterrent", "Preventative", "Detective", "Corrective", "Recovery", "Compensating"].forEach(function (k, i) {
    G["c1ct" + i] = rows("Control Types &mdash; WHEN they act", CT, i);
    set(k, "c1ct" + i);
  });

  /* ---- control categories: how each is implemented ---- */
  var CATS = [
    ["ADMINISTRATIVE", "policies &middot; training", "background checks", "a.k.a. managerial"],
    ["TECHNICAL / LOGICAL", "firewalls &middot; encryption", "ACLs &middot; IDS/IPS", "enforced by systems"],
    ["PHYSICAL", "locks &middot; guards &middot; fences", "CCTV &middot; mantraps", "touchable barriers"]
  ];
  ["Administrative", "Technical / Logical", "Physical"].forEach(function (k, i) {
    G["c1cat" + i] = cols("Control Categories &mdash; HOW implemented", CATS, i);
    set(k, "c1cat" + i);
  });

  /* ---- governance hierarchy position ---- */
  var GOV = [
    ["Corporate Governance", "board sets direction, accountability, risk appetite"],
    ["Security Governance", "security strategy ALIGNED to business goals"],
    ["Security Program", "policies, roles and day-to-day execution"]
  ];
  set("Corporate Governance", "c1gov0"); G["c1gov0"] = rows("Where it sits in governance", GOV, 0);
  set("Security Governance", "c1gov1"); G["c1gov1"] = rows("Where it sits in governance", GOV, 1);

  /* ---- due care vs due diligence ---- */
  var DCDD = [
    ["DUE CARE", "ACT &mdash; the DOING", "implement the controls", "the prudent-person duty"],
    ["DUE DILIGENCE", "KNOW &mdash; the CHECKING", "investigate, assess, monitor", "continued verification"]
  ];
  set("Due Care", "c1dc0"); G["c1dc0"] = cols("Due Care vs. Due Diligence", DCDD, 0, "care = do it &middot; diligence = make sure it works");
  set("Due Diligence", "c1dc1"); G["c1dc1"] = cols("Due Care vs. Due Diligence", DCDD, 1, "care = do it &middot; diligence = make sure it works");
  G["c1roles"] = card("Clearly Defined Roles &amp; Responsibilities", ["everyone knows WHO owns each security duty", "board &rarr; CISO &rarr; managers &rarr; users", "prevents gaps and finger-pointing"], "a RACI chart names one accountable owner per control");
  set("Clearly Defined Roles & Responsibilities", "c1roles");

  /* ---- intellectual property: one card per protection type ---- */
  var IP = [
    ["PATENT", "protects an INVENTION", "~20 years &middot; must be novel", "public disclosure required"],
    ["COPYRIGHT", "creative EXPRESSION", "life + 70 years", "automatic on creation"],
    ["TRADEMARK", "brand identity &middot; logo, name", "renewable indefinitely", "consumer-confusion test"],
    ["TRADE SECRET", "secret with business value", "indefinite while secret", "no registration (Coca-Cola)"]
  ];
  ["Patent", "Copyright", "Trademark", "Trade Secret"].forEach(function (k, i) {
    G["c1ip" + i] = cols("Intellectual Property Types", IP, i);
    set(k, "c1ip" + i);
  });

  /* ---- risk treatment options ---- */
  var TREAT = [
    ["AVOID", "stop the risky activity", "risk eliminated"],
    ["TRANSFER", "insurance / outsource", "shared, not gone"],
    ["MITIGATE", "reduce with controls", "the most common"],
    ["ACCEPT", "within appetite", "document the decision"]
  ];
  set("Avoid", "c1tr0"); G["c1tr0"] = cols("Risk Treatment Options", TREAT, 0);
  set("Transfer", "c1tr1"); G["c1tr1"] = cols("Risk Treatment Options", TREAT, 1);
  set("Accept", "c1tr3"); G["c1tr3"] = cols("Risk Treatment Options", TREAT, 3);

  /* ---- OECD: one card per principle ---- */
  var OECD = {
    "Collection Limitation": ["Collection Limitation", ["collect only what is needed, lawfully,", "and with the subject's knowledge/consent"], "no hoovering up data 'just in case'"],
    "Data Quality": ["Data Quality", ["data must be relevant, accurate,", "complete and kept up to date"], "an outdated address is corrected on request"],
    "Purpose Specification": ["Purpose Specification", ["state WHY you collect the data", "at or before collection time"], "email gathered for receipts &mdash; stated upfront"],
    "Use Limitation": ["Use Limitation", ["use data only for the stated purpose", "unless new consent or law allows more"], "receipt email is not reused for ads without consent"],
    "Security Safeguards": ["Security Safeguards", ["protect personal data with reasonable", "controls against loss, access, disclosure"], "encryption + access control on the PII store"],
    "Openness": ["Openness", ["be transparent about practices, policies", "and who the data controller is"], "a public, readable privacy notice"],
    "Individual Participation": ["Individual Participation", ["people may access, challenge and", "correct their own personal data"], "a user requests a copy of their file (DSAR)"],
    "oecd-accountability": ["Accountability (OECD)", ["the data CONTROLLER is answerable for", "complying with all the other principles"], "the controller owns breach consequences"]
  };
  var oi = 0;
  Object.keys(OECD).forEach(function (k) {
    var v = OECD[k]; G["c1oecd" + oi] = card(v[0], v[1], v[2]); set(k, "c1oecd" + oi); oi++;
  });

  /* ---- PII family: one card per term ---- */
  G["c1pi"] = card("PI &mdash; Personal Information", ["ANY information about an identifiable person", "the broadest umbrella term"], "name, email address, IP address");
  set("PI", "c1pi");
  G["c1spi"] = card("SPI &mdash; Sensitive Personal Information", ["the high-harm subset of PI", "health, biometrics, religion, sexuality"], "a fingerprint template or medical condition");
  set("SPI", "c1spi");
  G["c1phi"] = card("PHI &mdash; Protected Health Information", ["health information tied to a person", "regulated by HIPAA in the US"], "a diagnosis in a hospital record");
  set("PHI", "c1phi");
  G["c1pd"] = card("Personal Data (GDPR)", ["the EU/GDPR legal term for PI", "deliberately broad in scope"], "even a cookie ID counts under GDPR");
  set("Personal Data", "c1pd");
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

  /* ---- accountability vs responsibility ---- */
  var AR = [
    ["ACCOUNTABLE", "ultimately ANSWERABLE", "cannot be delegated", "one senior role bears it"],
    ["RESPONSIBLE", "assigned to DO the work", "can be delegated", "many people can share it"]
  ];
  set("Accountability", "c1ar0"); G["c1ar0"] = cols("Accountable vs. Responsible", AR, 0, "the admin patches (responsible) &mdash; the owner answers for it (accountable)");
  set("Responsibility", "c1ar1"); G["c1ar1"] = cols("Accountable vs. Responsible", AR, 1, "the admin patches (responsible) &mdash; the owner answers for it (accountable)");

  /* ---- security-as-business cards ---- */
  G["c1foc"] = card("Focus of Security", ["security exists to protect the BUSINESS,", "not technology for its own sake", "priorities flow from business strategy"], "controls are chosen for business impact, not fashion");
  set("Focus of Security", "c1foc");
  G["c1enb"] = card("Enable Business", ["good security lets the business move FASTER:", "enter markets, adopt cloud, win deals safely", "a brake pedal is what lets you drive fast"], "a SOC 2 report unlocks enterprise customers");
  set("Enable Business", "c1enb");
  G["c1val"] = card("Increase Value", ["security adds measurable value:", "fewer losses, customer trust, compliance", "frame spend as investment, not cost"], "every avoided breach is a direct loss avoided");
  set("Increase Value", "c1val");

  /* ---- import / export controls ---- */
  var IE = [
    ["ITAR", "US defense articles &amp; services &middot; State Dept &middot; USML list"],
    ["EAR", "US dual-use commercial items &middot; Commerce Dept &middot; CCL list"],
    ["Wassenaar", "41-country arrangement &middot; arms + dual-use incl. crypto"]
  ];
  set("Import/export controls", "c1ie"); G["c1ie"] = rows("Import / Export Regimes", IE, -1, "cryptography counts as dual-use tech in most regimes");
  var IE2 = [
    ["ITAR", "DEFENSE articles &amp; services", "State Department", "USML &middot; severe penalties"],
    ["EAR", "DUAL-USE commercial items", "Commerce Department", "CCL &middot; broader scope"]
  ];
  set("ITAR & EAR", "c1ie2"); G["c1ie2"] = cols("ITAR vs. EAR", IE2, -1, "which US regime applies depends on what the item IS");
  G["c1was"] = card("Wassenaar Arrangement", ["a MULTILATERAL export-control arrangement", "of 40+ countries &mdash; conventional arms and", "dual-use goods, including intrusion software"], "member states align national export rules to its lists");
  set("Wassenaar Arrangement", "c1was");
  G["c1tbd"] = card("Transborder Data Flow", ["data crossing a border becomes subject", "to the DESTINATION country's laws", "GDPR restricts transfers to 'adequate' countries"], "EU &rarr; US transfers need SCCs or an adequacy decision");
  set("Transborder data flow", "c1tbd");
  G["c1claw"] = card("Corporate Laws", ["criminal, civil and administrative law set", "the duties: due care, due diligence, liability", "negligence = failing the prudent-person test"], "executives face personal liability for ignored security duties");
  set("Corporate Laws", "c1claw");

  /* ---- ethics ---- */
  G["c1eth"] = card("Ethics", ["do the right thing even when it costs:", "act legally, honourably, protect society", "duty order: public &gt; principals &gt; profession"], "report the breach honestly even if it embarrasses the firm");
  set("Ethics", "c1eth");
  var CAN = [
    ["Canon 1", "protect society, the common good, public trust"],
    ["Canon 2", "act honorably, honestly, justly, responsibly, legally"],
    ["Canon 3", "provide diligent &amp; competent service to principals"],
    ["Canon 4", "advance and protect the profession"]
  ];
  set("(ISC)² Code of Professional Ethics", "c1can"); G["c1can"] = rows("(ISC)&sup2; Ethics Canons &mdash; in order", CAN, -1, "canon ORDER settles conflicts &mdash; earlier canons win");

  /* ---- privacy cluster ---- */
  G["c1prv"] = card("Privacy", ["the individual's right to CONTROL the", "collection, use and sharing of their info", "law defines it &mdash; security enforces it"], "consent, purpose limits and access rights in practice");
  set("Privacy", "c1prv"); set("privacy-definition", "c1prv");
  G["c1pp"] = card("Privacy Policy", ["the public PROMISE: what you collect,", "why, how long you keep it, who you share with", "backed internally by standards &amp; procedures"], "the website notice users actually agree to");
  set("Privacy policy", "c1pp");
  var IDS = [
    ["DIRECT", "identifies on its OWN", "name &middot; SSN &middot; passport", "the obvious ones"],
    ["INDIRECT", "identifies when COMBINED", "ZIP + DOB + gender", "87% of the US is unique on those 3"],
    ["ONLINE", "digital trail identifiers", "cookies &middot; IP &middot; device IDs", "GDPR counts these as personal data"]
  ];
  set("Direct Identifiers", "c1id0"); G["c1id0"] = cols("Identifier Types", IDS, 0);
  set("Indirect Identifiers", "c1id1"); G["c1id1"] = cols("Identifier Types", IDS, 1);
  set("Online Identifiers", "c1id2"); G["c1id2"] = cols("Identifier Types", IDS, 2);
  G["c1pws"] = card("No Privacy without Security", ["privacy promises are meaningless if the", "data isn't protected &mdash; security is the floor", "CIA controls make privacy rules enforceable"], "encryption and access control turn 'confidential' into reality");
  set("Cannot Achieve Privacy without Security", "c1pws");

  /* ---- data lifecycle: highlighted stage ---- */
  var DLC = [
    ["Creation / Update", "classify &amp; MINIMISE at birth"],
    ["Store", "encrypt &middot; access control &middot; backups"],
    ["Use", "least privilege &middot; masking"],
    ["Share", "agreements &middot; DLP &middot; transfer rules"],
    ["Archive", "retention policy &mdash; no longer than needed"],
    ["Destroy", "defensible destruction at end of life"]
  ];
  set("Data Lifecycle", "c1dlc"); G["c1dlc"] = rows("Data Lifecycle", DLC, -1, "privacy controls apply at EVERY stage");
  ["Creation / Update", "Store", "Use", "Share", "Archive", "Destroy"].forEach(function (k, i) {
    G["c1dlc" + i] = rows("Data Lifecycle", DLC, i, "privacy controls apply at EVERY stage");
    set(k, "c1dlc" + i);
  });

  /* ---- GDPR trio ---- */
  G["c1gdpr"] = card("GDPR", ["EU regulation with EXTRATERRITORIAL reach:", "applies to anyone processing EU residents' data", "fines up to 4% of global turnover / &euro;20M"], "a US web shop selling to the EU is in scope");
  set("GDPR", "c1gdpr");
  G["c1sa"] = card("Supervisory Authority", ["each EU state's independent data-protection", "authority &mdash; investigates, orders, fines", "your lead authority = your main EU establishment"], "the Irish DPC leads for many US tech firms");
  set("Supervisory Authority", "c1sa");
  G["c1b72"] = card("72-Hour Breach Notification", ["report a personal-data breach to the", "supervisory authority within 72 HOURS", "of becoming AWARE of it"], "high-risk breaches: affected individuals must be told too");
  set("Breaches reported within 72 hours", "c1b72");

  /* ---- risk management process + analysis cluster ---- */
  var RMP = [
    ["Identify", "assets, threats and vulnerabilities"],
    ["Assess", "analyse likelihood &times; impact, prioritise"],
    ["Treat", "avoid &middot; transfer &middot; mitigate &middot; accept"],
    ["Monitor", "continuous review &mdash; risk never sits still"]
  ];
  set("Risk Management", "c1rmp"); G["c1rmp"] = rows("Risk Management Process", RMP, -1, "a cycle, not a one-off project");
  G["c1av"] = card("Asset Valuation", ["know what an asset is WORTH before", "deciding what to spend protecting it", "inputs: cost, revenue role, liability, reputation"], "never spend $10,000 protecting a $1,000 asset");
  set("asset-valuation", "c1av");
  var VQ = [
    ["QUANTITATIVE", "objective MONEY values", "AV &middot; EF &middot; SLE &middot; ALE math", "hard for intangibles"],
    ["QUALITATIVE", "judgement on SCALES", "low / medium / high, heat maps", "fast but subjective"]
  ];
  set("val-quantitative", "c1vq0"); G["c1vq0"] = cols("Valuation Approaches", VQ, 0, "most programmes blend both (hybrid)");
  set("val-qualitative", "c1vq1"); G["c1vq1"] = cols("Valuation Approaches", VQ, 1, "most programmes blend both (hybrid)");
  set("risk-analysis", "c1ra"); G["c1ra"] = cols("Risk Analysis Approaches", VQ, -1, "quantitative for money decisions, qualitative for speed");

  /* ---- qualitative heat map ---- */
  G["c1heat"] = (function () {
    var s = '<svg viewBox="0 0 330 132" class="fig" role="img" aria-label="Qualitative risk heat map">';
    s += '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Likelihood &times; Impact Heat Map</text>';
    var cells = [["#161616", "#5a1418", "#8c1420"], ["#5a1418", "#8c1420", "#b81322"], ["#8c1420", "#b81322", "#d31324"]];
    var labels = [["L", "M", "H"], ["M", "H", "H"], ["H", "H", "C"]];
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        var x = 96 + c * 52, y = 78 - r * 22;
        s += '<rect x="' + x + '" y="' + y + '" width="48" height="18" rx="3" fill="' + cells[r][c] + '" stroke="#333"/>';
        s += '<text x="' + (x + 24) + '" y="' + (y + 13) + '" text-anchor="middle" fill="#f0f0f0" font-size="8" font-weight="700">' + labels[r][c] + '</text>';
      }
    }
    s += '<text x="82" y="52" text-anchor="end" fill="#ff9ab0" font-size="7.5" font-weight="700">LIKELIHOOD &uarr;</text>';
    s += '<text x="165" y="112" text-anchor="middle" fill="#ff9ab0" font-size="7.5" font-weight="700">IMPACT &rarr;</text>';
    s += '<text x="165" y="127" text-anchor="middle" fill="#a6a6a6" font-size="7">judgement-based &middot; fast &middot; flags the red zone for treatment first</text>';
    return s + '</svg>';
  })();
  set("ra-qualitative", "c1heat");
  G["c1lik"] = card("Likelihood", ["the PROBABILITY a threat exploits a", "vulnerability in a given period", "estimated from history, intel and exposure"], "risk = likelihood &times; impact");
  set("Likelihood", "c1lik");
  G["c1imp"] = card("Impact", ["the DAMAGE if the threat succeeds:", "financial, operational, reputational, legal", "half of the risk equation"], "risk = likelihood &times; impact");
  set("Impact", "c1imp");
  G["c1thr"] = card("Threats", ["a potential CAUSE of harm &mdash; an actor or", "event that could exploit a weakness", "you don't control threats, only your exposure"], "ransomware crew &middot; flood &middot; careless insider");
  set("Threats", "c1thr");
  G["c1vul"] = card("Vulnerabilities", ["a WEAKNESS a threat can exploit:", "missing patch, weak config, untrained staff", "risk requires BOTH a threat and a vulnerability"], "unpatched server + ransomware actor = real risk");
  set("Vulnerabilities", "c1vul");
  var VP1 = [
    ["VULN ASSESSMENT", "BREADTH &mdash; find &amp; list", "no exploitation", "scan &middot; prioritise &middot; report"],
    ["PENETRATION TEST", "DEPTH &mdash; EXPLOIT to prove", "authorized real attack", "shows actual impact"]
  ];
  set("vapt", "c1vp"); G["c1vp"] = cols("Assessment vs. Pen Test", VP1, -1);
  var SC = [
    ["SAFEGUARD", "PROACTIVE &mdash; in place before", "reduces likelihood", "e.g. hardening, training"],
    ["COUNTERMEASURE", "REACTIVE &mdash; deployed after", "responds to an incident", "e.g. blocking an active IP"]
  ];
  set("Safeguards", "c1sc0"); G["c1sc0"] = cols("Safeguard vs. Countermeasure", SC, 0);
  set("Countermeasures", "c1sc1"); G["c1sc1"] = cols("Safeguard vs. Countermeasure", SC, 1);
  var FA = [
    ["FUNCTIONAL", "does the control WORK?", "performs its intended function", "tested by trying it"],
    ["ASSURANCE", "will it KEEP working?", "confidence &amp; evidence over time", "docs, audits, re-testing"]
  ];
  set("Functional", "c1fa0"); G["c1fa0"] = cols("Functional vs. Assurance", FA, 0);
  set("Assurance", "c1fa1"); G["c1fa1"] = cols("Functional vs. Assurance", FA, 1);

  /* ---- threat modeling frameworks ---- */
  var TM = [
    ["STRIDE", "CLASSIFY threats", "6 categories (Microsoft)", "maps to CIA properties"],
    ["PASTA", "SIMULATE attacks", "7 risk-centric stages", "ties to business impact"],
    ["DREAD", "RATE &amp; rank threats", "5 scoring factors", "older, subjective"]
  ];
  set("Threat Modeling", "c1tm"); G["c1tm"] = cols("Threat Modeling Frameworks", TM, -1, "model at DESIGN time &mdash; fixes are cheapest there");
  var STR = [
    ["Spoofing", "fake identity &mdash; violates AUTHENTICATION"],
    ["Tampering", "unauthorised change &mdash; violates INTEGRITY"],
    ["Repudiation", "deny having acted &mdash; violates NON-REPUDIATION"],
    ["Information disclosure", "data leak &mdash; violates CONFIDENTIALITY"],
    ["Denial of service", "outage &mdash; violates AVAILABILITY"],
    ["Elevation of privilege", "gain rights &mdash; violates AUTHORIZATION"]
  ];
  set("STRIDE", "c1str"); G["c1str"] = rows("STRIDE &mdash; six threat categories", STR, -1, "each letter maps to the property it breaks");
  G["c1pasta"] = card("PASTA", ["Process for Attack Simulation &amp; Threat Analysis", "7 stages &middot; RISK-CENTRIC &middot; attacker simulation", "aligns threats with business objectives"], "model attacks on the payment flow by business loss, not CVE count");
  set("PASTA", "c1pasta");
  var DR = [
    ["Damage", "how bad if it succeeds?"],
    ["Reproducibility", "how reliably does it work?"],
    ["Exploitability", "how easy to launch?"],
    ["Affected users", "how many hit?"],
    ["Discoverability", "how easy to find?"]
  ];
  set("DREAD", "c1dread"); G["c1dread"] = rows("DREAD &mdash; five rating factors", DR, -1, "score each 1-10 &middot; average = comparable ranking");

  /* ---- risk frameworks ---- */
  var RF = [
    ["ISO 31000", "generic enterprise risk principles &mdash; not certifiable"],
    ["COSO", "internal control / ERM &mdash; financial governance world"],
    ["ISACA Risk IT", "IT-specific risk &mdash; pairs with COBIT"]
  ];
  set("Risk Frameworks", "c1rf"); G["c1rf"] = rows("Risk Frameworks", RF, -1, "NIST RMF (800-37) is the US federal one &mdash; see its own box");
  set("ISO 31000", "c1rf0"); G["c1rf0"] = rows("Risk Frameworks", RF, 0);
  set("COSO", "c1rf1"); G["c1rf1"] = rows("Risk Frameworks", RF, 1);
  set("ISACA Risk IT", "c1rf2"); G["c1rf2"] = rows("Risk Frameworks", RF, 2);

  /* ---- supply chain & people ---- */
  G["c1proc"] = card("Procurement", ["build security INTO acquisition:", "requirements in the RFP, vendor assessment", "far cheaper than bolting it on afterwards"], "the supplier must show a SOC 2 before contract award");
  set("Procurement", "c1proc");
  G["c1sla"] = card("Contracts &amp; SLAs", ["security obligations in WRITING:", "SLA metrics, right-to-audit, breach notice,", "liability and exit clauses"], "99.9% uptime plus a 24-hour breach-notification clause");
  set("Contracts & SLAs", "c1sla");
  var ATE = [
    ["AWARENESS", "the WHAT &mdash; attention", "changes behaviour", "everyone &middot; posters, phishing sims"],
    ["TRAINING", "the HOW &mdash; job skills", "role-based ability", "e.g. secure-coding course"],
    ["EDUCATION", "the WHY &mdash; understanding", "deep, career-level", "degrees &amp; certifications"]
  ];
  set("Awareness, Training & Education", "c1ate"); G["c1ate"] = cols("Building the Human Firewall", ATE, -1, "the most cost-effective control against social engineering");
})();
