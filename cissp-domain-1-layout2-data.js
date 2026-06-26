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
