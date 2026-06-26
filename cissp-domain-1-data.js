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
