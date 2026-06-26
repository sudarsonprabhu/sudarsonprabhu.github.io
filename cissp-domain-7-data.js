/* ============================================================
   CISSP Domain 7 — Layout 1 hover details (Investigations)
   Two globals consumed by cissp-domain-7.js:
     - AC_FIGS    : named inline-SVG infographics (red/black theme)
     - AC_DETAILS : box label (or data-ac-key) ->
                    { t: title, d: description, x: example,
                      f: optional figure name }
   A box is matched by its trimmed text (or its data-ac-key).
   ============================================================ */

window.AC_FIGS = window.AC_FIGS || {};
Object.assign(window.AC_FIGS, {
  mom: `
    <svg viewBox="0 0 330 120" class="fig" role="img" aria-label="Motive, Opportunity, Means">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">M.O.M.</text>
      <rect x="10" y="28" width="98" height="74" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="59" y="50" text-anchor="middle" fill="#d31324" font-size="11" font-weight="700">MOTIVE</text>
      <text x="59" y="70" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Why</text>
      <text x="59" y="86" text-anchor="middle" fill="#a6a6a6" font-size="8">Reason / gain</text>
      <rect x="116" y="28" width="98" height="74" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="165" y="50" text-anchor="middle" fill="#d31324" font-size="11" font-weight="700">OPPORTUNITY</text>
      <text x="165" y="70" text-anchor="middle" fill="#f5f5f5" font-size="8.5">When / where</text>
      <text x="165" y="86" text-anchor="middle" fill="#a6a6a6" font-size="8">Access / chance</text>
      <rect x="222" y="28" width="98" height="74" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="271" y="50" text-anchor="middle" fill="#d31324" font-size="11" font-weight="700">MEANS</text>
      <text x="271" y="70" text-anchor="middle" fill="#f5f5f5" font-size="8.5">How</text>
      <text x="271" y="86" text-anchor="middle" fill="#a6a6a6" font-size="8">Ability / tools</text>
    </svg>`,

  order: `
    <svg viewBox="0 0 330 120" class="fig" role="img" aria-label="Order of volatility">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Order of Volatility (collect first &rarr; last)</text>
      <rect x="14" y="26" width="302" height="22" rx="5" fill="#3a0a0e" stroke="#d31324"/><text x="22" y="41" fill="#fff" font-size="9" font-weight="700">1 &nbsp; CPU registers, cache</text>
      <rect x="14" y="50" width="302" height="22" rx="5" fill="#2a0a12" stroke="#a0303f"/><text x="22" y="65" fill="#f0f0f0" font-size="9">2 &nbsp; RAM &mdash; live / volatile evidence</text>
      <rect x="14" y="74" width="302" height="22" rx="5" fill="#1d0a16" stroke="#7a2030"/><text x="22" y="89" fill="#d8d8d8" font-size="9">3 &nbsp; Disk &mdash; secondary storage (HD/SSD)</text>
      <rect x="14" y="98" width="302" height="18" rx="5" fill="#141420" stroke="#555"/><text x="22" y="111" fill="#aaa" font-size="9">4 &nbsp; Archival / backups (least volatile)</text>
    </svg>`,

  evidence5: `
    <svg viewBox="0 0 330 130" class="fig" role="img" aria-label="Five rules of evidence">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">5 Rules of Evidence</text>
      <g font-size="9" fill="#e0e0e0">
        <rect x="40" y="24" width="250" height="18" rx="4" fill="#161616" stroke="#d31324"/><text x="50" y="37" fill="#ff9ab0" font-weight="700">Authentic &mdash; genuinely from the scene</text>
        <rect x="40" y="45" width="250" height="18" rx="4" fill="#161616" stroke="#a0303f"/><text x="50" y="58">Accurate &mdash; reliable &amp; not tampered</text>
        <rect x="40" y="66" width="250" height="18" rx="4" fill="#161616" stroke="#a0303f"/><text x="50" y="79">Complete &mdash; whole story, exculpatory too</text>
        <rect x="40" y="87" width="250" height="18" rx="4" fill="#161616" stroke="#a0303f"/><text x="50" y="100">Convincing &mdash; clear to a jury</text>
        <rect x="40" y="108" width="250" height="18" rx="4" fill="#161616" stroke="#d31324"/><text x="50" y="121" fill="#ff9ab0" font-weight="700">Admissible &mdash; legally allowed in court</text>
      </g>
    </svg>`
});

window.AC_DETAILS = window.AC_DETAILS || {};
Object.assign(window.AC_DETAILS, {
  "Investigations": {
    t: "Investigations (Domain 7.1)",
    d: "The forensic backbone of Security Operations: securing a scene, collecting and controlling evidence so it stays admissible, knowing the types and rules of evidence, applying the right investigative techniques, and matching the process to the type of investigation — then documenting and reporting it all.",
    x: "After a suspected fraud, responders isolate the laptop (secure the scene), image it forensically, log every handoff (chain of custody), and produce a court-ready report."
  },

  /* ----- top-level branches ----- */
  "Secure the Scene": {
    t: "Secure the Scene",
    d: "The first action in any investigation: protect the area and the evidence from contamination, alteration or loss. Restrict access, isolate affected systems, and document the scene before touching anything — once evidence is altered, it may become inadmissible.",
    x: "Responders cordon off the workstation, disconnect it from the network to stop remote wiping, photograph the screen, and log who is present before collection begins."
  },
  "Collect & Control Evidence": {
    t: "Collect & Control Evidence",
    d: "Gathering evidence in a forensically sound way and maintaining control over it at all times. Covers the guiding principles (Locard, MOM), every source of evidence, and the chain of custody that proves the evidence was never tampered with.",
    x: "An examiner makes a bit-for-bit forensic image, hashes it, and records each transfer so the integrity of the evidence can be proven in court."
  },
  "Types of Evidence": {
    t: "Types of Evidence",
    d: "The legal categories evidence falls into — real (physical), direct, secondary, and the best-evidence rule — each with different weight and requirements in a proceeding.",
    x: "A hard drive is real evidence; a printout of its contents is secondary evidence, acceptable only when the original is unavailable."
  },
  "Rules of Evidence": {
    t: "Rules of Evidence (the 5 rules)",
    d: "For evidence to be useful it must satisfy five qualities — Authentic, Accurate, Complete, Convincing, and Admissible. Fail any one and the evidence can be challenged or thrown out.",
    x: "A perfectly captured log is useless in court if it was obtained without authorisation — it fails the 'admissible' rule.",
    f: "evidence5"
  },
  "Investigative Techniques": {
    t: "Investigative Techniques",
    d: "The analytical disciplines used to examine evidence — media analysis (disks/files), software analysis (malware/code), and network analysis (traffic/logs). The right technique depends on where the artifacts live.",
    x: "Malware analysts reverse-engineer a suspicious binary (software analysis) while another examiner carves deleted files from the disk image (media analysis)."
  },
  "Types of Investigations": {
    t: "Types of Investigations",
    d: "Investigations differ by their legal context and burden of proof — criminal, civil, regulatory, and administrative (internal). The type dictates the standard of proof, who runs it, and how evidence must be handled.",
    x: "An internal policy breach is an administrative investigation; the same act causing customer loss could escalate to a civil or criminal one with a higher proof standard."
  },
  "Document & Report": {
    t: "Document & Report",
    d: "Throughout and after the investigation, every action, finding and handoff is documented, culminating in a clear, factual, defensible report. Good documentation is what makes the investigation repeatable and the evidence credible.",
    x: "The examiner's report records tools used, hashes, timeline, and conclusions in language a non-technical court or manager can follow."
  },

  /* ----- Collect & Control children ----- */
  "Locard's Principle": {
    t: "Locard's Exchange Principle",
    d: "The foundational forensic axiom: every contact leaves a trace. When two objects interact, each takes something and leaves something behind — so an intruder always leaves digital artifacts (logs, files, timestamps) and takes some away. It's why forensic evidence exists to be found.",
    x: "An attacker who breaches a server leaves traces — log entries, malware files, altered timestamps — that an examiner can recover to reconstruct the intrusion."
  },
  "MOM": {
    t: "MOM — Motive, Opportunity, Means",
    d: "The three things a suspect needs to have committed an act, used to focus an investigation: Motive (why — the reason or gain), Opportunity (when/where — access or chance), and Means (how — the ability or tools).",
    x: "A disgruntled admin being fired (motive), with active credentials (opportunity) and deep system knowledge (means) becomes a prime suspect for sabotage.",
    f: "mom"
  },
  "Sources": {
    t: "Sources of Evidence",
    d: "The places evidence comes from — oral/written statements, documents, digital forensics (live, disk, virtual), and e-discovery. A thorough investigation pulls from every relevant source.",
    x: "An investigation combines witness statements, email documents, a forensic disk image, and e-discovery output from a litigation hold."
  },
  "Chain of Custody": {
    t: "Chain of Custody",
    d: "The unbroken, documented record of who collected, handled, transferred and stored each piece of evidence, when, and why. It proves the evidence is the same as collected and was never tampered with — essential for admissibility.",
    x: "Each time the drive changes hands it's signed for on a custody form; any gap lets the defence argue the evidence was altered and have it excluded."
  },

  /* ----- Sources children ----- */
  "Oral / Written statements": {
    t: "Oral / Written Statements",
    d: "Testimony from witnesses, suspects or experts, given verbally or in writing. Valuable context but more easily challenged than physical or digital evidence because memory and bias affect it.",
    x: "An employee's written account of what they saw on a colleague's screen, taken and signed during the investigation."
  },
  "Documents": {
    t: "Documents",
    d: "Recorded information — contracts, emails, reports, policies, printouts. Documentary evidence is subject to the best-evidence rule (the original is preferred) and must be authenticated.",
    x: "A signed contract or an email thread produced to establish what was agreed and when."
  },
  "Digital Forensics": {
    t: "Digital Forensics",
    d: "The scientific collection and analysis of digital evidence from systems and storage, following the order of volatility — capture the most fleeting data first (memory) before the most stable (disk, backups).",
    x: "Responders capture live RAM before pulling the plug, because volatile evidence (running processes, encryption keys) vanishes at power-off.",
    f: "order"
  },
  "E Discovery": {
    t: "E-Discovery (Electronic Discovery)",
    d: "The process of identifying, preserving, collecting and producing electronically stored information (ESI) for legal proceedings. Governed by the EDRM model and triggered by litigation holds.",
    x: "In a lawsuit, the company must search and produce all relevant emails and files, preserving them under legal hold so nothing is deleted."
  },

  /* ----- Digital Forensics children ----- */
  "Live Evidence": {
    t: "Live Evidence (Volatile)",
    d: "Data that exists only while the system is running and is lost at power-off — RAM contents, running processes, network connections, and encryption keys in memory. Because it is the most volatile, it must be captured FIRST (order of volatility).",
    x: "Capturing a memory dump of a running machine to recover an encryption key or malware that never touches the disk.",
    f: "order"
  },
  "Secondary Storage": {
    t: "Secondary Storage (HD)",
    d: "Non-volatile storage — hard drives and SSDs — that persists after power-off. Acquired by making a forensic (bit-for-bit) image and hashing it, so analysis is done on the copy while the original is preserved.",
    x: "An examiner images a 1 TB drive, verifies the MD5/SHA hash matches, and analyses the copy to recover deleted files."
  },
  "VM Instance": {
    t: "VM Instance / Virtual Disk",
    d: "Evidence from virtualised and cloud systems — virtual machine instances and their virtual disk files (snapshots). Snapshots can capture both disk and memory state, but cloud forensics adds custody and jurisdiction challenges.",
    x: "Taking a snapshot of a suspect cloud VM, including its virtual disk and memory, to preserve its state for analysis."
  },

  /* ----- Types of Evidence children ----- */
  "Real Evidence": {
    t: "Real Evidence",
    d: "Tangible, physical objects brought into court — the actual thing involved. In digital terms, the physical hard drive or device itself. Also called 'object' evidence.",
    x: "The seized laptop or hard drive, presented physically as the object that held the data."
  },
  "Direct Evidence": {
    t: "Direct Evidence",
    d: "Evidence that proves a fact on its own without inference — typically firsthand witness testimony based on one of the five senses. It directly establishes a fact rather than implying it.",
    x: "A witness testifying 'I personally saw him copy the files to the USB drive' is direct evidence."
  },
  "Secondary Evidence": {
    t: "Secondary Evidence",
    d: "Copies or reproductions of original evidence, or oral testimony about a document's contents. Admissible chiefly when the original is unavailable — it is weaker than the original (which the best-evidence rule prefers).",
    x: "A printout or photocopy of a document presented because the original has been lost or destroyed."
  },
  "Best Evidence Rule": {
    t: "Best Evidence Rule",
    d: "A legal rule that, to prove the contents of a document, the ORIGINAL must be produced where possible — copies (secondary evidence) are only accepted when the original is genuinely unavailable. It guards against tampering and error in reproduction.",
    x: "A court requires the original signed contract rather than a photocopy, unless the original is proven lost."
  },

  /* ----- Rules of Evidence children ----- */
  "Authentic": {
    t: "Authentic",
    d: "The evidence is genuinely what it claims to be and is tied to the incident/scene — not fabricated or substituted. Authenticity is established through chain of custody and hashing.",
    x: "A matching hash value proves the disk image is an authentic copy of the seized drive, unaltered since acquisition."
  },
  "Accurate": {
    t: "Accurate (Reliable)",
    d: "The evidence is factually correct, reliable, and has not been altered or tampered with. Reliability comes from sound tools, validated methods, and integrity checks.",
    x: "Logs collected with a forensically validated tool and verified by hash are accurate and reliable."
  },
  "Complete": {
    t: "Complete",
    d: "The evidence tells the whole story, including anything that might EXCULPATE the suspect — not just the parts that support one side. Cherry-picked evidence is not complete and undermines credibility.",
    x: "Investigators include log entries that show the suspect was logged off during part of the attack window, even though it weakens the case."
  },
  "Convincing": {
    t: "Convincing (Believable)",
    d: "The evidence is clear and persuasive to a judge or jury — it makes sense and is understandable to non-technical decision-makers. Forensic findings must be explained convincingly, not just produced.",
    x: "A well-built timeline visual that makes the sequence of the attack obvious and believable to a jury."
  },
  "Admissible": {
    t: "Admissible",
    d: "The evidence is legally permitted to be used in the proceeding — gathered lawfully, relevant, and meeting procedural rules. Even perfect evidence is worthless if obtained improperly (e.g. without a warrant or authorisation).",
    x: "Evidence seized without proper legal authority is ruled inadmissible and excluded, regardless of how incriminating it is."
  },

  /* ----- Investigative Techniques children ----- */
  "Media Analysis": {
    t: "Media Analysis",
    d: "Examining storage media — disks, USB drives, memory cards — to recover files, deleted data, slack space, and metadata. The core of disk forensics.",
    x: "Carving deleted JPEGs and recovering file fragments from unallocated space on a seized drive."
  },
  "Software Analysis": {
    t: "Software Analysis",
    d: "Analysing code and applications — including malware reverse-engineering, reviewing logs an application produced, and authorship/behaviour analysis — to understand what a program did.",
    x: "Reverse-engineering a suspicious executable in a sandbox to determine that it exfiltrates data to a remote server."
  },
  "Network Analysis": {
    t: "Network Analysis",
    d: "Examining network traffic, captures and device logs to reconstruct communications — identifying connections, data flows, command-and-control, and exfiltration.",
    x: "Reviewing packet captures and firewall logs to trace an attacker's lateral movement and the IP they exfiltrated data to."
  },

  /* ----- Types of Investigations children ----- */
  "Criminal": {
    t: "Criminal Investigation",
    d: "Conducted when a law may have been broken; run by/with law enforcement. The burden of proof is the highest — 'beyond a reasonable doubt' — and can result in imprisonment, so evidence handling must be impeccable.",
    x: "A hacking case prosecuted by the state, where guilt must be proven beyond a reasonable doubt."
  },
  "Civil": {
    t: "Civil Investigation",
    d: "Concerns disputes between parties (e.g. breach of contract, damages) rather than crimes. The burden of proof is lower — 'preponderance of the evidence' (more likely than not). Outcomes are typically monetary.",
    x: "One company sues another for a data breach; the plaintiff must show it's more likely than not that the defendant was negligent."
  },
  "Regulatory": {
    t: "Regulatory Investigation",
    d: "Conducted by a government regulator to determine whether laws or regulations governing an industry were violated. Standards and powers vary by regulator; outcomes include fines and sanctions.",
    x: "A financial regulator investigates a bank's handling of customer data for compliance with industry rules."
  },
  "Administrative": {
    t: "Administrative Investigation",
    d: "An internal investigation into a violation of organisational policy (not necessarily a law). Lower formality and proof standard; outcomes are internal — warnings, termination — though findings can escalate to other types.",
    x: "HR and security investigate an employee for misusing systems against the acceptable-use policy, potentially leading to dismissal."
  }
});
