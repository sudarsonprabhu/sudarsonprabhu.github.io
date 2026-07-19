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
/* ============================================================
   CISSP Domain 7 — Layout 2 hover details (Incident Response)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-7-data.js. Consumed by cissp-domain-7.js.
   Several boxes use data-ac-key to stay distinct from Layout 1
   (e.g. detection-sources, recovery-phase, recovery-step) and to
   keep keys clean where the visible box has a sub-line.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  irlife: `
    <svg viewBox="0 0 330 150" class="fig" role="img" aria-label="Incident response lifecycle">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">IR Lifecycle</text>
      <g font-size="8.5" fill="#f0f0f0" font-weight="600">
        <rect x="92" y="22" width="146" height="16" rx="4" fill="#3a0a0e" stroke="#d31324"/><text x="165" y="34" text-anchor="middle">1 &nbsp;Preparation</text>
        <rect x="92" y="40" width="146" height="16" rx="4" fill="#2a0a12" stroke="#a0303f"/><text x="165" y="52" text-anchor="middle">2 &nbsp;Detection</text>
        <rect x="92" y="58" width="146" height="16" rx="4" fill="#2a0a12" stroke="#a0303f"/><text x="165" y="70" text-anchor="middle">3 &nbsp;Response</text>
        <rect x="92" y="76" width="146" height="16" rx="4" fill="#2a0a12" stroke="#a0303f"/><text x="165" y="88" text-anchor="middle">4 &nbsp;Mitigation</text>
        <rect x="92" y="94" width="146" height="16" rx="4" fill="#2a0a12" stroke="#a0303f"/><text x="165" y="106" text-anchor="middle">5 &nbsp;Reporting</text>
        <rect x="92" y="112" width="146" height="16" rx="4" fill="#2a0a12" stroke="#a0303f"/><text x="165" y="124" text-anchor="middle">6 &nbsp;Recovery</text>
        <rect x="92" y="130" width="146" height="16" rx="4" fill="#3a0a0e" stroke="#d31324"/><text x="165" y="142" text-anchor="middle">7 Remediation &middot; 8 Lessons</text>
      </g>
    </svg>`,

  eventinc: `
    <svg viewBox="0 0 330 110" class="fig" role="img" aria-label="Event versus incident">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Event vs. Incident</text>
      <rect x="14" y="26" width="142" height="70" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="85" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">EVENT</text>
      <text x="85" y="64" text-anchor="middle" fill="#f0f0f0" font-size="8.5">Any observable</text>
      <text x="85" y="77" text-anchor="middle" fill="#f0f0f0" font-size="8.5">occurrence</text>
      <text x="85" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">neutral</text>
      <rect x="174" y="26" width="142" height="70" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="245" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">INCIDENT</text>
      <text x="245" y="64" text-anchor="middle" fill="#f0f0f0" font-size="8.5">Event that harms</text>
      <text x="245" y="77" text-anchor="middle" fill="#f0f0f0" font-size="8.5">or threatens CIA</text>
      <text x="245" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">adverse</text>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  "Incident Response": {
    t: "Incident Response (Domain 7.6)",
    d: "The structured lifecycle for handling an adverse event: prepare in advance, then triage (detect and respond), take action and investigate (mitigate, report), and recover (return to normal, remediate, and learn). The goal is to limit damage and restore operations while preserving evidence.",
    x: "A ransomware alert fires: the IR team is deployed, contains the spread, reports to stakeholders, restores from backup, hardens the gap, and runs a lessons-learned review.",
    f: "irlife"
  },

  "Prep.": {
    t: "Preparation",
    d: "Everything done BEFORE an incident so the team can respond effectively: an incident response plan and policy, a trained CSIRT, defined roles and communications, tooling (SIEM, forensics kits), and playbooks. Preparation is the only phase that happens in advance — and it determines how well every other phase goes.",
    x: "The organisation maintains an IR plan, an on-call CSIRT rota, jump-bags, and pre-approved out-of-band communication channels before any incident occurs."
  },

  /* ----- Triage ----- */
  "Triage": {
    t: "Triage",
    d: "The early phase of sizing up what is happening — detecting that something occurred and mounting the initial response. Triage decides whether an event is actually an incident, how severe it is, and what response it warrants.",
    x: "An analyst reviews a SIEM alert, confirms it's a real intrusion (not a false positive), rates it high severity, and escalates to deploy the IR team."
  },
  "Detection": {
    t: "Detection",
    d: "Identifying that a security event or incident has occurred, from monitoring sources and alerts. The faster and more accurate the detection, the smaller the eventual impact. This phase distinguishes a routine event from a genuine incident.",
    x: "A SIEM correlation rule flags impossible-travel logins and raises an alert that a SOC analyst triages within minutes."
  },
  "detection-sources": {
    t: "Detection Sources",
    d: "The feeds and sensors that surface events for detection — SIEM, IDS/IPS, DLP, antivirus, firewalls, even physical sensors like fire detectors. Centralising and correlating many sources is what turns raw signals into actionable detection.",
    x: "Logs from IDS/IPS, DLP and endpoint AV all feed the SIEM, which correlates them into a single high-fidelity alert."
  },
  "Event": {
    t: "Event",
    d: "ANY observable or measurable occurrence on a system or network — a login, a file change, a packet. Events are neutral; most are routine and harmless. The exam contrasts this with an incident.",
    x: "A user successfully logging in, a service starting, or a firewall allowing a connection are all events.",
    f: "eventinc"
  },
  "Incident": {
    t: "Incident",
    d: "An event (or series of events) that actually or potentially HARMS the organisation — a breach of confidentiality, integrity or availability, or a violation of policy. Every incident is an event, but only adverse events are incidents.",
    x: "A successful malware infection that exfiltrates data is an incident; a blocked phishing email is merely an event.",
    f: "eventinc"
  },
  "response": {
    t: "Response — IR Team Deployed",
    d: "Once an incident is confirmed, the formal response begins: the incident response team (CSIRT) is activated and deployed to take control, preserve evidence, and begin containment. Speed and coordination here limit the blast radius.",
    x: "The CSIRT is paged, assembles on the bridge call, assigns roles, and begins isolating affected hosts while preserving forensic images."
  },

  /* ----- Action / Investigation ----- */
  "Action / Investigation": {
    t: "Action / Investigation",
    d: "The hands-on phase of stopping the damage and understanding what happened: mitigating (containing) the incident and reporting to the relevant stakeholders. Investigation runs alongside, preserving evidence and establishing scope and root cause.",
    x: "While containing the malware to one VLAN, the team investigates how it got in and reports status to management and legal."
  },
  "mitigation": {
    t: "Mitigation — Containment",
    d: "Containing the incident to stop it spreading and limit damage, then eradicating the threat. Containment can be short-term (isolate a host now) or long-term (rebuild clean systems). Mitigation buys time and prevents the incident from getting worse.",
    x: "Isolating infected machines from the network and disabling the compromised account to stop lateral movement and further data loss."
  },
  "reporting": {
    t: "Reporting — Relevant Stakeholders",
    d: "Communicating the incident to the people and bodies who need to know — management, legal, affected business units, and where required regulators, law enforcement, customers and the public. Reporting must meet legal/regulatory breach-notification timelines.",
    x: "Under GDPR the organisation reports a personal-data breach to the supervisory authority within 72 hours and notifies affected data subjects."
  },

  /* ----- Recovery ----- */
  "recovery-phase": {
    t: "Recovery (phase)",
    d: "The closing phase of the lifecycle: restoring normal operations, then preventing recurrence and learning from the incident. It turns a contained incident into a stronger organisation.",
    x: "After containment, the team restores services from clean backups, patches the exploited flaw, and holds a post-incident review."
  },
  "recovery-step": {
    t: "Recovery — Return to Normal",
    d: "Restoring affected systems and data to full, trusted operation and confirming they are clean before returning them to production. Recovery is complete only when business operations are verified back to normal.",
    x: "Rebuilding servers from known-good images, restoring data from backups taken before the compromise, and monitoring closely before declaring 'all clear'."
  },
  "remediation": {
    t: "Remediation — Prevention",
    d: "Fixing the underlying weakness so the same incident cannot happen again — patching the vulnerability, closing the misconfiguration, tightening controls. Remediation addresses root cause, not just symptoms.",
    x: "After a phishing-driven breach, remediation adds MFA, email filtering, and user training to prevent a repeat."
  },
  "lessons-learned": {
    t: "Lessons Learned — Improve Process",
    d: "A structured post-incident review (post-mortem) that captures what happened, what worked, what didn't, and how to improve. The output feeds back into Preparation, closing the loop. Usually held soon after closure while details are fresh.",
    x: "A blameless post-incident meeting produces action items: update the playbook, add a detection rule, and fix the slow escalation that delayed response."
  }
});
/* ============================================================
   CISSP Domain 7 — Layout 3 hover details (Malware)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-7-data.js. Consumed by cissp-domain-7.js.
   The Anti-Malware "Detection" box uses data-ac-key
   "antimalware-detection" to stay distinct from Layout 2's
   incident-response "Detection".
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  virusworm: `
    <svg viewBox="0 0 330 110" class="fig" role="img" aria-label="Virus versus worm">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Virus vs. Worm</text>
      <rect x="14" y="26" width="142" height="70" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="85" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">VIRUS</text>
      <text x="85" y="64" text-anchor="middle" fill="#f0f0f0" font-size="8.5">Needs a host +</text>
      <text x="85" y="77" text-anchor="middle" fill="#f0f0f0" font-size="8.5">user action</text>
      <text x="85" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">attaches to files</text>
      <rect x="174" y="26" width="142" height="70" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="245" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">WORM</text>
      <text x="245" y="64" text-anchor="middle" fill="#f0f0f0" font-size="8.5">Self-replicating,</text>
      <text x="245" y="77" text-anchor="middle" fill="#f0f0f0" font-size="8.5">spreads alone</text>
      <text x="245" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">no host needed</text>
    </svg>`,

  sigheur: `
    <svg viewBox="0 0 330 110" class="fig" role="img" aria-label="Signature versus heuristic detection">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Signature vs. Heuristic</text>
      <rect x="14" y="26" width="142" height="70" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="85" y="44" text-anchor="middle" fill="#d31324" font-size="9.5" font-weight="700">SIGNATURE</text>
      <text x="85" y="62" text-anchor="middle" fill="#f0f0f0" font-size="8.5">Matches KNOWN</text>
      <text x="85" y="75" text-anchor="middle" fill="#f0f0f0" font-size="8.5">malware patterns</text>
      <text x="85" y="89" text-anchor="middle" fill="#a6a6a6" font-size="8">misses 0-day</text>
      <rect x="174" y="26" width="142" height="70" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="245" y="44" text-anchor="middle" fill="#d31324" font-size="9.5" font-weight="700">HEURISTIC</text>
      <text x="245" y="62" text-anchor="middle" fill="#f0f0f0" font-size="8.5">Behaviour / anomaly</text>
      <text x="245" y="75" text-anchor="middle" fill="#f0f0f0" font-size="8.5">catches UNKNOWN</text>
      <text x="245" y="89" text-anchor="middle" fill="#a6a6a6" font-size="8">more false positives</text>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  "Malware": {
    t: "Malware (Domain 7.7)",
    d: "Malicious software in all its forms, and the defences against it. The exam expects you to distinguish the malware types (especially virus vs worm vs trojan), understand the zero-day threat, and know the anti-malware stack: policy, prevention, detection methods, and continuous updates.",
    x: "An organisation faces ransomware (a malware type) by combining user training, application allow-listing, heuristic scanners, and up-to-date signatures."
  },

  /* ----- branches ----- */
  "Types of Malware": {
    t: "Types of Malware",
    d: "The catalogue of malicious code categories. They differ by how they spread (self-replicating or not, host-dependent or independent), what they target (boot sector, documents, files), and what they do (encrypt, spy, hide, trigger on a condition).",
    x: "Knowing a worm self-propagates while a trojan relies on the user running it changes how you defend against each."
  },
  "Zero Day": {
    t: "Zero Day",
    d: "A vulnerability (or the exploit/malware using it) that is unknown to the vendor and has NO patch available — defenders have had 'zero days' to fix it. Signature-based tools can't catch it, which is why behaviour-based detection and defence-in-depth matter.",
    x: "Attackers exploit an unknown flaw in a browser before the vendor is even aware; only heuristic/behavioural defences have a chance of catching it."
  },
  "Anti-Malware": {
    t: "Anti-Malware",
    d: "The layered defence against malware: governing policy, preventive controls, detection methods, and the continuous updates that keep it all effective. No single control is enough — defence in depth is the theme.",
    x: "Policy mandates anti-malware on all endpoints; prevention blocks unknown apps; detection scanners find threats; and signatures auto-update daily."
  },

  /* ----- malware types ----- */
  "Virus": {
    t: "Virus",
    d: "Malicious code that attaches itself to a host file or program and replicates when that host is executed — it generally needs USER ACTION and a host to spread. The classic self-replicating malware.",
    x: "A user opens an infected email attachment; the virus runs, attaches to other files, and spreads each time those files are opened.",
    f: "virusworm"
  },
  "Worm": {
    t: "Worm",
    d: "Self-replicating malware that spreads independently across networks WITHOUT needing a host file or user action — it exploits vulnerabilities to propagate on its own. Worms can spread explosively.",
    x: "WannaCry spread worm-style across networks by exploiting the SMB EternalBlue flaw, infecting machines with no user interaction.",
    f: "virusworm"
  },
  "Companion": {
    t: "Companion Virus",
    d: "A virus that doesn't modify the target file but creates a separate 'companion' executable with a name the system runs FIRST (exploiting execution order, e.g. a malicious PROGRAM.COM that runs before the legitimate PROGRAM.EXE).",
    x: "On a legacy system, running 'setup' launches the attacker's setup.com instead of the real setup.exe because .com takes precedence."
  },
  "Macro": {
    t: "Macro Virus",
    d: "A virus written in a macro language (e.g. VBA) that lives inside documents and runs when the document is opened with macros enabled. Platform-independent because it rides the application, not the OS.",
    x: "A Word document with a malicious macro infects the Office template so every new document the user creates is infected too."
  },
  "Multipartite": {
    t: "Multipartite Virus",
    d: "A virus that infects through MULTIPLE vectors at once — typically both the boot sector AND executable files — making it harder to fully remove because cleaning one vector leaves the other to re-infect.",
    x: "A multipartite virus reinfects files after you clean the disk because it also hid in the boot sector, and vice versa."
  },
  "Polymorphic": {
    t: "Polymorphic Virus",
    d: "Malware that changes its own code/appearance (mutates, re-encrypts) with each infection so its signature is different every time — specifically designed to evade signature-based detection. (Metamorphic goes further and rewrites its whole body.)",
    x: "Each copy of the virus encrypts itself with a new key, so no two infected files share a signature for the scanner to match."
  },
  "Trojan": {
    t: "Trojan (Trojan Horse)",
    d: "Malware disguised as legitimate, desirable software that the user installs willingly — it does NOT self-replicate. Its power is deception: it carries a hidden malicious payload (backdoor, RAT, downloader).",
    x: "A free 'game' or cracked app that secretly installs a remote-access backdoor when the user runs it."
  },
  "Botnets": {
    t: "Botnets",
    d: "A network of compromised machines ('bots' or 'zombies') under the remote control of an attacker via command-and-control (C2). Used en masse for DDoS, spam, credential stuffing, and crypto-mining.",
    x: "Thousands of infected home routers are commanded by a C2 server to flood a target site with traffic in a DDoS attack."
  },
  "Boot Sector": {
    t: "Boot Sector Virus",
    d: "Infects the master boot record (MBR) or boot sector of storage, so it loads into memory BEFORE the operating system — gaining control early and making it hard to detect or remove from within the OS.",
    x: "A virus in the MBR executes at startup before the OS and any antivirus loads, giving it first control of the machine."
  },
  "Hoaxes / Pranks": {
    t: "Hoaxes / Pranks",
    d: "Not true malware but social-engineering: fake virus warnings or chain messages that trick users into harmful actions (deleting real files, forwarding spam) or simply waste time and resources through fear.",
    x: "A viral email warns users to delete a 'dangerous' system file that is actually a legitimate, needed Windows component."
  },
  "Logic Bombs": {
    t: "Logic Bombs",
    d: "Malicious code lying dormant inside a system until a specific CONDITION is met — a date, an event, or a trigger (e.g. an employee's account being removed) — at which point it detonates its payload.",
    x: "A disgruntled developer plants code that deletes the database if their user ID ever disappears from payroll."
  },
  "Stealth": {
    t: "Stealth Virus",
    d: "Malware that actively HIDES its presence from detection — intercepting system calls and antivirus queries to report clean results, masking file size changes, and concealing its modifications.",
    x: "When antivirus reads an infected file, the stealth virus intercepts the request and returns the original clean version."
  },
  "Ransomware": {
    t: "Ransomware",
    d: "Malware that encrypts (or threatens to leak) the victim's data and demands payment for the decryption key. Modern 'double-extortion' also exfiltrates data and threatens publication. Tested heavily as a current threat.",
    x: "Files are encrypted and a ransom note demands cryptocurrency within 72 hours; good offline backups are the key defence.",
    f: "virusworm"
  },
  "Rootkit": {
    t: "Rootkit",
    d: "Malware that gains and maintains privileged (root/admin) access while HIDING its own presence and that of other malware — often operating at the kernel level, below the OS and antivirus, making it extremely hard to detect and remove.",
    x: "A kernel-mode rootkit hides its processes and files from the OS, so the system looks clean while the attacker retains full control."
  },
  "Spyware / Adware": {
    t: "Spyware / Adware",
    d: "Spyware secretly gathers information about the user (keystrokes, browsing, credentials) and sends it to a third party. Adware displays unwanted advertisements and often tracks behaviour to target them. Both violate privacy; spyware is the more dangerous.",
    x: "A keylogger spyware captures banking credentials; bundled adware injects pop-ups and tracks every site the user visits."
  },
  "Data Diddler / Salami Attack": {
    t: "Data Diddler / Salami Attack",
    d: "A data diddler makes small, unauthorised changes to data over time so the alteration goes unnoticed. A salami attack steals tiny amounts repeatedly (the classic 'rounding-down' fraud) that add up — each slice too small to notice.",
    x: "A program rounds every transaction down a fraction of a cent and diverts the difference to the attacker's account — pennies that accumulate to a fortune."
  },

  /* ----- Anti-Malware ----- */
  "Policy": {
    t: "Policy",
    d: "The governance layer of anti-malware: acceptable-use policy, mandated endpoint protection, rules on software installation, email/attachment handling, and removable media. Policy sets the requirements the technical controls enforce.",
    x: "An AUP forbids installing unapproved software and mandates that all endpoints run managed anti-malware with auto-updates."
  },
  "Prevention": {
    t: "Prevention",
    d: "Proactive controls that stop malware before it executes — educating users, restricting what can run (allow-listing), and limiting how far anything can spread (segmentation). Prevention is cheaper than cleanup.",
    x: "Application allow-listing blocks an unknown ransomware binary from running even though no signature exists for it yet."
  },
  "Training & Awareness": {
    t: "Training & Awareness",
    d: "Teaching users to recognise phishing, suspicious attachments, and social engineering — the human firewall. Since most malware needs a user to click something, awareness is one of the most cost-effective preventive controls.",
    x: "Regular phishing simulations train staff to report rather than open suspicious emails, cutting infection rates."
  },
  "Allow List": {
    t: "Allow List (Application Allow-listing)",
    d: "Permitting only explicitly approved applications to run and denying everything else by default (the opposite of block-listing). It stops unknown and zero-day malware because anything not on the list simply can't execute.",
    x: "A server only runs the handful of whitelisted business apps; a dropped malware executable is blocked because it isn't on the list."
  },
  "Network Segmentation": {
    t: "Network Segmentation",
    d: "Dividing the network into isolated zones so that if malware infects one segment it cannot freely spread to others. Limits the blast radius and contains worms and ransomware.",
    x: "Workstations, servers and OT systems sit on separate VLANs, so a worm on the office LAN can't reach the production database."
  },
  "antimalware-detection": {
    t: "Detection",
    d: "Finding malware that prevention didn't stop, using several complementary methods — signature scanning, heuristic/behavioural analysis, activity monitoring, and change/integrity detection. Combining methods catches both known and unknown threats.",
    x: "Signature scanners catch known viruses while heuristic engines flag a never-seen-before program behaving like ransomware.",
    f: "sigheur"
  },
  "Signature Based Scanners": {
    t: "Signature-Based Scanners",
    d: "Detect malware by matching files against a database of known malware signatures (hashes/patterns). Fast and accurate for KNOWN threats with few false positives — but blind to new, unknown, or polymorphic malware and zero-days.",
    x: "The scanner flags a file because its hash matches a known trojan in the signature database updated this morning.",
    f: "sigheur"
  },
  "Heuristic Scanners": {
    t: "Heuristic Scanners",
    d: "Detect malware by analysing behaviour, structure and anomalies rather than exact signatures — so they can catch NEW and unknown malware (including zero-days and polymorphic variants). The trade-off is more false positives.",
    x: "A heuristic engine flags an unknown program because it tries to encrypt many files rapidly — ransomware-like behaviour.",
    f: "sigheur"
  },
  "Activity Monitors": {
    t: "Activity Monitors",
    d: "Watch system activity in real time for suspicious actions — attempts to modify system files, hook the kernel, mass-delete, or open unexpected network connections — and alert or block them as they happen.",
    x: "A monitor blocks a process the moment it tries to write to the boot sector, a behaviour normal apps never perform."
  },
  "Change Detection": {
    t: "Change Detection (Integrity Checking)",
    d: "Detects malware by spotting unauthorised CHANGES to files or systems — typically by computing and comparing cryptographic hashes of known-good files (file integrity monitoring). If a protected file's hash changes unexpectedly, it flags possible infection.",
    x: "A file-integrity tool alerts that a core system DLL's hash changed overnight with no approved update — a sign of tampering."
  },
  "Continuous Updates": {
    t: "Continuous Updates",
    d: "Keeping signatures, heuristic engines, and the anti-malware software itself constantly up to date. Out-of-date definitions are the most common reason anti-malware misses current threats, so automatic, frequent updates are essential.",
    x: "Endpoints pull new malware signatures several times a day so they recognise threats discovered just hours earlier."
  }
});
/* ============================================================
   CISSP Domain 7 — Layout 4 hover details (Patching & Change Management)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-7-data.js. Consumed by cissp-domain-7.js.
   Multi-line / special-text boxes use data-ac-key to keep keys clean.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  boards: `
    <svg viewBox="0 0 330 130" class="fig" role="img" aria-label="CCB, CAB and ECAB approval boards">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Approval Boards</text>
      <rect x="14" y="24" width="302" height="30" rx="5" fill="#161616" stroke="#d31324"/>
      <text x="22" y="37" fill="#ff9ab0" font-size="9" font-weight="700">CCB &mdash; Change Control Board</text>
      <text x="22" y="49" fill="#cfcfcf" font-size="8">authorises &amp; oversees changes</text>
      <rect x="14" y="58" width="302" height="30" rx="5" fill="#161616" stroke="#a0303f"/>
      <text x="22" y="71" fill="#ff9ab0" font-size="9" font-weight="700">CAB &mdash; Change Advisory Board</text>
      <text x="22" y="83" fill="#cfcfcf" font-size="8">advises / assesses risk &amp; impact</text>
      <rect x="14" y="92" width="302" height="30" rx="5" fill="#161616" stroke="#a0303f"/>
      <text x="22" y="105" fill="#ff9ab0" font-size="9" font-weight="700">ECAB &mdash; Emergency CAB</text>
      <text x="22" y="117" fill="#cfcfcf" font-size="8">fast-track approval for urgent changes</text>
    </svg>`,

  cmflow: `
    <svg viewBox="0 0 330 130" class="fig" role="img" aria-label="Change management process flow">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Change Management Flow</text>
      <g font-size="8" fill="#f0f0f0" font-weight="600" text-anchor="middle">
        <rect x="40" y="22" width="250" height="14" rx="3" fill="#2a0a12" stroke="#a0303f"/><text x="165" y="32">1 Request &rarr; 2 Assess Impact</text>
        <rect x="40" y="40" width="250" height="14" rx="3" fill="#2a0a12" stroke="#a0303f"/><text x="165" y="50">3 Approval (CCB/CAB)</text>
        <rect x="40" y="58" width="250" height="14" rx="3" fill="#2a0a12" stroke="#a0303f"/><text x="165" y="68">4 Build &amp; Test &rarr; 5 Notify</text>
        <rect x="40" y="76" width="250" height="14" rx="3" fill="#2a0a12" stroke="#a0303f"/><text x="165" y="86">6 Implement &rarr; 7 Validate</text>
        <rect x="40" y="94" width="250" height="14" rx="3" fill="#3a0a0e" stroke="#d31324"/><text x="165" y="104">8 Version &amp; Baseline (document)</text>
      </g>
      <text x="165" y="122" text-anchor="middle" fill="#a6a6a6" font-size="7.5">never change production without going through this</text>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  /* ============== PATCHING ============== */
  "Patching": {
    t: "Patching (Domain 7.8)",
    d: "The disciplined process of finding, testing and deploying fixes for vulnerabilities. Two halves: first DETERMINE whether a patch is available (via threat intel, vendor notices and proactive checking), then IMPLEMENT it through change management so it doesn't break production.",
    x: "A critical CVE is announced; the team confirms the vendor patch, tests it, and rolls it out through a change ticket rather than pushing it straight to production."
  },
  "Determine if Patch is available": {
    t: "Determine if a Patch is Available",
    d: "The discovery half of patching: staying aware of new vulnerabilities and the fixes for them through threat intelligence, vendor notifications, and proactively scanning your own estate for missing patches.",
    x: "Subscribing to vendor security bulletins and running weekly authenticated scans to learn which systems are missing which patches."
  },
  "Threat Intelligence": {
    t: "Threat Intelligence",
    d: "External feeds and analysis about emerging vulnerabilities, exploits and active threats — telling you what to prioritise before attackers strike. A key input that drives which patches are urgent.",
    x: "A threat feed reports a vulnerability is being actively exploited in the wild, pushing its patch to the top of the queue."
  },
  "Vendor Notification": {
    t: "Vendor Notification",
    d: "Security advisories and patch releases issued directly by software/hardware vendors (e.g. Microsoft Patch Tuesday). The authoritative source that a fix exists and what it addresses.",
    x: "Microsoft's monthly security bulletin lists the CVEs fixed and the patches to apply."
  },
  "Pro-actively checking": {
    t: "Proactively Checking",
    d: "Actively scanning your own environment to discover missing patches and vulnerable systems rather than waiting to be told. Done with agents on hosts, agentless network scans, or passive monitoring of traffic.",
    x: "A vulnerability scanner sweeps all servers nightly and reports which are missing the latest patches."
  },
  "Agent": {
    t: "Agent-Based Checking",
    d: "A lightweight software agent installed on each host continuously reports its patch level and configuration from the inside. Accurate and works off-network, but requires deploying and maintaining agents everywhere.",
    x: "An endpoint agent on every laptop reports installed patches back to the management console even when the laptop is remote."
  },
  "Agentless": {
    t: "Agentless Checking",
    d: "Scanning systems remotely over the network without installing software on them — typically with credentials for accuracy. Easier to deploy at scale, but needs network reach and may miss offline hosts.",
    x: "A central scanner logs into each server over the network to read its patch level, with nothing installed on the targets."
  },
  "Passive": {
    t: "Passive Checking",
    d: "Inferring patch/vulnerability state by observing network traffic and banners without actively probing or installing anything. Non-intrusive and continuous, but less precise than authenticated checks.",
    x: "Monitoring traffic reveals a server advertising an old software version, suggesting it is unpatched, without ever scanning it directly."
  },
  "Implement through Change Management": {
    t: "Implement through Change Management",
    d: "Patches are changes to production, so they must go through the change-management process — assessed, approved, tested and scheduled — not applied ad hoc. This controls timing and how the patch is deployed.",
    x: "Even an urgent patch is pushed via an (emergency) change ticket so it's tested, approved and documented before deployment."
  },
  "Timing": {
    t: "Timing",
    d: "When a patch is deployed — balancing urgency (critical/exploited flaws may warrant emergency change windows) against stability (most patches wait for a scheduled maintenance window to avoid disruption).",
    x: "A routine patch waits for Sunday's maintenance window, while an actively-exploited zero-day is fast-tracked through an emergency change."
  },
  "Deploy": {
    t: "Deploy",
    d: "Rolling the patch out to systems, either automatically via patch-management tooling or manually. Automation gives speed and consistency at scale; manual gives control for sensitive or fragile systems.",
    x: "Workstations get patches pushed automatically by the management server, while critical database servers are patched manually under supervision."
  },
  "Automated": {
    t: "Automated Deployment",
    d: "Using patch-management tools to push and install patches across many systems automatically — fast, consistent and scalable, reducing the window of exposure. Best for large fleets of standardised endpoints.",
    x: "WSUS/Intune automatically deploys approved patches to thousands of endpoints overnight."
  },
  "Manual": {
    t: "Manual Deployment",
    d: "An administrator installs the patch by hand on each system — slower but gives full control and verification, appropriate for sensitive, high-risk or non-standard systems where an automated push could cause an outage.",
    x: "An engineer manually patches a production database during a controlled window, verifying the service after each step."
  },

  /* ============== CHANGE MANAGEMENT ============== */
  "Change Management": {
    t: "Change Management (Domain 7.9)",
    d: "The formal process governing every modification to the production environment so changes are assessed, approved, tested, communicated, implemented and documented — never ad hoc. It protects stability and security, and provides an audit trail.",
    x: "A firewall rule change goes through request → impact assessment → CAB approval → test → notify → implement → validate → baseline, with a ticket recording each step.",
    f: "cmflow"
  },
  "Change Request": {
    t: "Change Request (RFC)",
    d: "The formal starting point: a documented request for change (RFC) describing what is to be changed, why, and the expected benefit. Nothing proceeds without a logged request — it creates accountability and an audit trail.",
    x: "An admin files an RFC to upgrade the web server, stating the reason, scope and rollback plan."
  },
  "Assess Impact": {
    t: "Assess Impact",
    d: "Evaluating the change's risk, scope, dependencies and potential effect on other systems and security before deciding whether and how to proceed. Includes classifying it as a standard or emergency change.",
    x: "Analysis shows the proposed change touches the authentication service, raising its risk rating and required approval level."
  },
  "emergency-vs-standard": {
    t: "Emergency Change vs. Standard Process",
    d: "Changes are classified by urgency. A STANDARD change follows the full, scheduled process. An EMERGENCY change (e.g. patching an actively-exploited flaw or fixing an outage) uses an expedited path (ECAB) — but is still documented and reviewed after the fact.",
    x: "A live exploit forces an emergency change approved by the ECAB within the hour, with full documentation completed retroactively."
  },
  "Approval": {
    t: "Approval",
    d: "Formal authorisation of the change by the appropriate body before any work touches production. Approval is based on the assessed impact and severity, and is granted by a change board (CCB / CAB / ECAB).",
    x: "The Change Advisory Board reviews the risk assessment and approves the change for the next maintenance window."
  },
  "approval-basis": {
    t: "Based on Impact, Severity, etc.",
    d: "The criteria the approvers weigh — the change's impact, severity, risk, cost, urgency and dependencies — to decide whether to approve, reject, or send it back. Higher-impact changes need higher-level approval.",
    x: "A low-impact, low-risk standard change is auto-approved, while a high-impact change must go to the full CAB."
  },
  "ccb-cab-ecab": {
    t: "CCB / CAB / ECAB",
    d: "The approval bodies. CCB (Change Control Board) authorises and oversees changes; CAB (Change Advisory Board) advises and assesses risk/impact; ECAB (Emergency CAB) is a smaller group that fast-tracks urgent emergency changes.",
    x: "Routine changes go to the CAB; a midnight emergency fix is approved by the ECAB's on-call members.",
    f: "boards"
  },
  "Build & Test": {
    t: "Build & Test",
    d: "Developing the change and thoroughly testing it in a non-production environment before deployment — confirming it works and does not introduce new problems or security weaknesses. A rollback plan is prepared here too.",
    x: "The patched server is built and tested in staging, and a rollback snapshot is taken before go-live."
  },
  "Notification": {
    t: "Notification",
    d: "Informing all affected stakeholders and users about the upcoming change — what will happen, when, expected downtime, and who to contact. Communication prevents surprise outages and support confusion.",
    x: "Users are emailed that the portal will be unavailable Sunday 02:00–04:00 for a scheduled upgrade."
  },
  "Implement": {
    t: "Implement",
    d: "Deploying the approved, tested change into production according to the plan and schedule, with the rollback plan ready in case it fails. Implementation should follow the documented procedure exactly.",
    x: "During the approved window, the team applies the change following the runbook, ready to roll back if validation fails."
  },
  "Validation": {
    t: "Validation",
    d: "Confirming after implementation that the change works as intended AND that nothing else broke — through functional testing of the new behaviour and regression testing of existing behaviour.",
    x: "After deployment, the team verifies the new feature works and reruns the regression suite to confirm existing functions still pass."
  },
  "Test New Functionality": {
    t: "Test New Functionality",
    d: "Validation step that confirms the change actually delivers the new or fixed behaviour it was meant to — positive testing of the change's purpose.",
    x: "Confirming the new single-sign-on login the change introduced actually authenticates users correctly."
  },
  "Regression Testing": {
    t: "Regression Testing",
    d: "Re-running existing tests after the change to confirm it did NOT break previously-working functionality or reopen a closed security hole. Catches unintended side-effects of the change.",
    x: "After adding SSO, regression tests confirm the existing API authentication and password reset still work."
  },
  "Version & Baseline": {
    t: "Version & Baseline",
    d: "The closing step: update version control and the configuration baseline/CMDB to reflect the new approved state, so the documented baseline always matches reality. This ties change management back to configuration management.",
    x: "After go-live, the CMDB and golden image are updated so the new patched version becomes the official baseline."
  }
});
/* ============================================================
   CISSP Domain 7 — Layout 5 hover details (Recovery Strategies)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-7-data.js. Consumed by cissp-domain-7.js.
   Cold/Warm/Hot appear under BOTH Spare Parts and Types of Sites,
   so those use data-ac-key (spare-* and site-*). Backup "Validation"
   uses data-ac-key="backup-validation" to stay distinct from the
   change-management Validation in Layout 4.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  backuptypes: `
    <svg viewBox="0 0 330 140" class="fig" role="img" aria-label="Full, incremental and differential backups">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Backup Types &amp; Archive Bit</text>
      <g font-size="8" fill="#e0e0e0">
        <rect x="8" y="22" width="314" height="26" rx="4" fill="#161616" stroke="#d31324"/>
        <text x="14" y="33" fill="#ff9ab0" font-weight="700" font-size="9">FULL</text><text x="14" y="44">everything &middot; clears archive bit &middot; slow backup, fast restore</text>
        <rect x="8" y="52" width="314" height="34" rx="4" fill="#161616" stroke="#a0303f"/>
        <text x="14" y="63" fill="#ff9ab0" font-weight="700" font-size="9">INCREMENTAL</text><text x="14" y="74">changed since last backup &middot; CLEARS archive bit</text><text x="14" y="84">fast backup &middot; slow restore (full + every incremental)</text>
        <rect x="8" y="90" width="314" height="34" rx="4" fill="#161616" stroke="#a0303f"/>
        <text x="14" y="101" fill="#ff9ab0" font-weight="700" font-size="9">DIFFERENTIAL</text><text x="14" y="112">changed since last FULL &middot; does NOT clear archive bit</text><text x="14" y="122">slow backup grows &middot; fast restore (full + last differential)</text>
      </g>
      <text x="165" y="135" text-anchor="middle" fill="#a6a6a6" font-size="7">Archive bit = "this file changed since last backup"</text>
    </svg>`,

  raid: `
    <svg viewBox="0 0 330 130" class="fig" role="img" aria-label="RAID levels">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Common RAID Levels</text>
      <g font-size="8.5" fill="#e0e0e0">
        <rect x="8" y="22" width="314" height="24" rx="4" fill="#161616" stroke="#a0303f"/><text x="14" y="37"><tspan fill="#ff9ab0" font-weight="700">RAID 0</tspan> &mdash; striping &middot; speed, NO redundancy (0 disk failures)</text>
        <rect x="8" y="50" width="314" height="24" rx="4" fill="#161616" stroke="#a0303f"/><text x="14" y="65"><tspan fill="#ff9ab0" font-weight="700">RAID 1</tspan> &mdash; mirroring &middot; full duplicate copy</text>
        <rect x="8" y="78" width="314" height="24" rx="4" fill="#161616" stroke="#a0303f"/><text x="14" y="93"><tspan fill="#ff9ab0" font-weight="700">RAID 5</tspan> &mdash; striping + parity &middot; survives 1 disk loss</text>
        <rect x="8" y="106" width="314" height="22" rx="4" fill="#161616" stroke="#d31324"/><text x="14" y="120"><tspan fill="#ff9ab0" font-weight="700">RAID 6</tspan> &mdash; double parity &middot; survives 2 disk losses</text>
      </g>
    </svg>`,

  sites: `
    <svg viewBox="0 0 330 120" class="fig" role="img" aria-label="Recovery site types by readiness">
      <text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Recovery Sites: cost vs. speed</text>
      <g font-size="8" fill="#e0e0e0">
        <rect x="8" y="22" width="314" height="18" rx="3" fill="#101018" stroke="#555"/><text x="14" y="34"><tspan fill="#9ad0ff" font-weight="700">COLD</tspan> &mdash; space/power only &middot; days&ndash;weeks &middot; cheapest</text>
        <rect x="8" y="42" width="314" height="18" rx="3" fill="#161616" stroke="#a0303f"/><text x="14" y="54"><tspan fill="#ffd27c" font-weight="700">WARM</tspan> &mdash; some equipment &middot; hours&ndash;days</text>
        <rect x="8" y="62" width="314" height="18" rx="3" fill="#2a0a12" stroke="#d31324"/><text x="14" y="74"><tspan fill="#ff9ab0" font-weight="700">HOT</tspan> &mdash; fully equipped &middot; minutes&ndash;hours &middot; costly</text>
        <rect x="8" y="82" width="314" height="18" rx="3" fill="#161616" stroke="#a0303f"/><text x="14" y="94"><tspan fill="#cbb3ff" font-weight="700">MOBILE</tspan> &mdash; portable/trailer &middot; flexible</text>
        <rect x="8" y="102" width="314" height="16" rx="3" fill="#3a0a0e" stroke="#d31324"/><text x="14" y="114"><tspan fill="#fff" font-weight="700">MIRROR</tspan> &mdash; real-time duplicate &middot; instant &middot; most costly</text>
      </g>
    </svg>`,

  failmodes: `
    <svg viewBox="0 0 330 100" class="fig" role="img" aria-label="Fail-safe versus fail-secure">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Fail-Safe vs. Fail-Secure</text>
      <rect x="14" y="26" width="142" height="62" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="85" y="44" text-anchor="middle" fill="#d31324" font-size="9.5" font-weight="700">FAIL-SAFE</text>
      <text x="85" y="60" text-anchor="middle" fill="#f0f0f0" font-size="8">Protects PEOPLE</text>
      <text x="85" y="72" text-anchor="middle" fill="#f0f0f0" font-size="8">doors UNLOCK (egress)</text>
      <text x="85" y="83" text-anchor="middle" fill="#a6a6a6" font-size="7.5">life safety first</text>
      <rect x="174" y="26" width="142" height="62" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="245" y="44" text-anchor="middle" fill="#d31324" font-size="9.5" font-weight="700">FAIL-SECURE</text>
      <text x="245" y="60" text-anchor="middle" fill="#f0f0f0" font-size="8">Protects ASSETS/DATA</text>
      <text x="245" y="72" text-anchor="middle" fill="#f0f0f0" font-size="8">doors LOCK</text>
      <text x="245" y="83" text-anchor="middle" fill="#a6a6a6" font-size="7.5">confidentiality first</text>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  "Recovery Strategies": {
    t: "Recovery Strategies (Domain 7.10)",
    d: "How the organisation keeps running and recovers when components or sites fail — choosing failure modes, backups, spare parts, RAID, high-availability designs, and recovery sites. The aim is resilience: no single point of failure, and a planned path back to normal.",
    x: "A bank survives a data-centre fire because it had real-time mirrored backups, a hot recovery site, and RAID-protected storage."
  },

  /* ===== Failure Modes ===== */
  "Failure Modes": {
    t: "Failure Modes",
    d: "How a system behaves WHEN it fails. The choice is a security decision: fail-soft degrades gracefully, fail-secure locks down to protect data, and fail-safe defaults to protecting human life. The right mode depends on what you must protect most.",
    x: "A firewall set to fail-closed drops all traffic if it crashes (protecting the network), whereas an exit door fails open so people can escape.",
    f: "failmodes"
  },
  "Fail-Soft": {
    t: "Fail-Soft (Fail-Resilient)",
    d: "On failure the system continues operating in a DEGRADED but functional state rather than stopping completely — it sheds non-critical functions to keep the essential ones running.",
    x: "A server with a failing CPU core disables that core and keeps running slower, instead of crashing entirely."
  },
  "Fail-Secure": {
    t: "Fail-Secure (Fail-Closed)",
    d: "On failure the system defaults to the most SECURE state — denying access and locking down to protect confidentiality and assets. Prioritises protecting data/property over availability.",
    x: "If the access-control system loses power, electronic door locks stay LOCKED, keeping intruders out (protecting assets).",
    f: "failmodes"
  },
  "Fail-Safe": {
    t: "Fail-Safe",
    d: "On failure the system defaults to the state that protects PEOPLE and life safety — typically failing 'open' for human egress. When human life is at stake, safety beats security.",
    x: "On a fire alarm or power loss, exit doors UNLOCK (fail-safe) so people can evacuate, even though that reduces physical security.",
    f: "failmodes"
  },

  /* ===== Backup Storage ===== */
  "Backup Storage": {
    t: "Backup Storage",
    d: "The strategy for copying data so it can be restored after loss — the backup types, how backups are validated, where they're stored, and the recovery objectives (RPO) that drive how often you back up.",
    x: "Nightly incrementals plus weekly fulls, checksum-validated and shipped offsite, give a 24-hour RPO."
  },
  "Archive Bit": {
    t: "Archive Bit",
    d: "A file-system flag that is SET whenever a file is created or modified, signalling 'this file has changed since the last backup'. Full and incremental backups CLEAR it; differential backups leave it set. It's how backup software knows what to copy.",
    x: "After a full backup clears all archive bits, any file a user edits gets its archive bit set again, marking it for the next incremental.",
    f: "backuptypes"
  },
  "Types of Backups": {
    t: "Types of Backups",
    d: "The methods of copying data — mirror, full, incremental, and differential — trading off backup speed, storage used, and restore complexity. The exam loves the archive-bit and restore-sequence differences.",
    x: "Choosing differential over incremental trades larger daily backups for a faster, simpler restore (full + one differential).",
    f: "backuptypes"
  },
  "Mirror": {
    t: "Mirror Backup",
    d: "An exact, uncompressed copy of the source data, kept in sync — no versioning and no archive-bit use. Fastest restore (it's a direct copy) but offers no history, so a deletion or corruption is mirrored too.",
    x: "A mirror backup keeps a live duplicate folder identical to the source, so a restore is just a file copy."
  },
  "Full": {
    t: "Full Backup",
    d: "Backs up ALL selected data every time and CLEARS the archive bit. Simplest, fastest restore (one set), but the slowest to run and the most storage-hungry. The foundation every incremental/differential builds on.",
    x: "A weekend full backup captures everything; weekday backups then capture only what changed.",
    f: "backuptypes"
  },
  "Incremental": {
    t: "Incremental Backup",
    d: "Backs up only files changed since the LAST backup (full or incremental) and CLEARS the archive bit. Fastest to back up and smallest, but slowest to restore — you need the last full PLUS every incremental since, in order.",
    x: "Restoring requires Sunday's full plus Monday, Tuesday, Wednesday incrementals applied in sequence.",
    f: "backuptypes"
  },
  "Differential": {
    t: "Differential Backup",
    d: "Backs up all files changed since the last FULL backup and does NOT clear the archive bit, so each day's differential grows. Slower/larger backups than incremental, but fast simple restore — just the full plus the LATEST differential.",
    x: "Restoring needs only Sunday's full plus Wednesday's differential — two sets, not four.",
    f: "backuptypes"
  },
  "backup-validation": {
    t: "Validation",
    d: "Verifying that backups are actually good and restorable — not silently corrupt. Done with checksums/CRC and, crucially, periodic test restores. An untested backup is not a backup.",
    x: "Monthly test restores confirm the backups can be recovered, catching a corrupt tape before a real disaster does."
  },
  "Checksums / CRC": {
    t: "Checksums / CRC",
    d: "Mathematical integrity checks (e.g. cyclic redundancy check or cryptographic hashes) computed over backup data so that any corruption can be detected by comparing the stored value to a recomputed one.",
    x: "A backup's CRC is recalculated on restore; a mismatch flags that the data was corrupted in storage."
  },
  "Data Storage": {
    t: "Data Storage (Backup Media & Location)",
    d: "Where and how backup copies are kept — including keeping a copy OFFSITE (so a local disaster doesn't destroy the backups too) and rotating media on a schedule. Underpins the classic 3-2-1 rule: 3 copies, 2 media types, 1 offsite.",
    x: "Tapes are rotated through an offsite vault so a fire at the primary site can't destroy both data and backups."
  },
  "Offsite": {
    t: "Offsite Storage",
    d: "Keeping at least one backup copy at a geographically separate location, far enough that the same disaster (fire, flood, power loss) cannot destroy both the production data and the backups. A core requirement of any backup strategy.",
    x: "Encrypted backups are replicated to a cloud region hundreds of miles away each night."
  },
  "Tape Rotation": {
    t: "Tape Rotation",
    d: "A scheme for reusing backup media on a schedule to balance retention against cost — the classic being Grandfather-Father-Son (GFS): daily (son), weekly (father), and monthly (grandfather) sets retained for different periods.",
    x: "GFS rotation keeps daily tapes for a week, weekly tapes for a month, and monthly tapes for a year."
  },
  "RPO": {
    t: "RPO — Recovery Point Objective",
    d: "The maximum acceptable amount of DATA LOSS measured in time — how far back in time you'd lose data if you had to recover now. RPO drives backup FREQUENCY: a 1-hour RPO needs backups/replication at least hourly. (Contrast RTO = how long recovery may take.)",
    x: "A 15-minute RPO means transaction-log shipping every 15 minutes, so at most 15 minutes of data is ever lost."
  },

  /* ===== Spare Parts ===== */
  "Spare Parts": {
    t: "Spare Parts",
    d: "Keeping replacement components ready so failed hardware can be swapped quickly. Readiness is tiered cold/warm/hot, trading cost against how fast the spare can take over.",
    x: "A spare hot-swap drive in the array rebuilds automatically the moment one fails, with no downtime."
  },
  "spare-cold": {
    t: "Cold Spare",
    d: "A replacement part kept UNPOWERED on the shelf. Cheapest, but the slowest to bring online — someone must physically install and configure it before service resumes.",
    x: "A spare power supply sits in the store room; if one fails, a technician installs it during the next maintenance window."
  },
  "spare-warm": {
    t: "Warm Spare",
    d: "A replacement part already installed and POWERED but not actively in service — it can be switched in quickly with minimal configuration, faster than a cold spare but cheaper than a fully redundant hot spare.",
    x: "A standby NIC is installed and powered, ready to be enabled if the primary fails."
  },
  "spare-hot": {
    t: "Hot Spare",
    d: "A replacement already ONLINE and able to take over AUTOMATICALLY the instant the primary fails, with no manual intervention or downtime. The fastest and most expensive tier.",
    x: "A hot-spare disk in a RAID array is automatically rebuilt into the set the moment a member drive fails."
  },

  /* ===== RAID ===== */
  "RAID": {
    t: "RAID — Redundant Array of Independent Disks",
    d: "Combining multiple physical disks into one logical unit for PERFORMANCE and/or FAULT TOLERANCE. Different 'levels' trade speed against redundancy. Note: RAID is high availability, NOT a backup — it doesn't protect against deletion or corruption.",
    x: "RAID 5 lets a server keep running after one disk dies, while the array rebuilds onto a spare.",
    f: "raid"
  },
  "raid0": {
    t: "RAID 0 — Striping",
    d: "Splits ('stripes') data across multiple disks for maximum PERFORMANCE and capacity — but provides NO redundancy. If any single disk fails, ALL data is lost. Speed only, no fault tolerance.",
    x: "A video-editing scratch disk uses RAID 0 for speed, accepting that one disk failure loses everything.",
    f: "raid"
  },
  "raid1": {
    t: "RAID 1 — Mirroring",
    d: "Writes an identical copy of all data to two (or more) disks. Full redundancy — survives a disk failure — but usable capacity is halved. Simple and reliable.",
    x: "A server's OS drive is mirrored so it keeps running if one of the two disks fails.",
    f: "raid"
  },
  "raid5": {
    t: "RAID 5 — Striping with Parity",
    d: "Stripes data plus distributed PARITY across three or more disks. Survives the loss of ANY ONE disk (parity rebuilds it) with far better capacity efficiency than mirroring. The popular all-rounder.",
    x: "A 4-disk RAID 5 array keeps serving data after one drive fails and rebuilds it from parity onto a spare.",
    f: "raid"
  },
  "raid6": {
    t: "RAID 6 — Double Parity",
    d: "Like RAID 5 but with TWO independent parity blocks, so it survives the simultaneous loss of TWO disks. Costs an extra disk of capacity but protects against a second failure during a long rebuild.",
    x: "A large RAID 6 array survives a second disk failing while the first is still rebuilding.",
    f: "raid"
  },

  /* ===== High Availability ===== */
  "High Availability System": {
    t: "High Availability (HA) System",
    d: "Design that keeps services running with minimal downtime by eliminating single points of failure — chiefly through clustering and redundancy. Measured in 'nines' of uptime (e.g. 99.999%).",
    x: "An active-active cluster behind a load balancer keeps the application up even when one node is patched or fails."
  },
  "Clustering": {
    t: "Clustering",
    d: "Multiple servers (nodes) working together as a single logical system so that if one node fails, another takes over the workload (failover). Provides both high availability and, in active-active mode, load distribution.",
    x: "A two-node database cluster fails over to the standby node within seconds if the primary crashes."
  },
  "Redundancy": {
    t: "Redundancy",
    d: "Duplicating critical components (power supplies, NICs, links, disks, sites) so there is no single point of failure — if one fails, its duplicate carries on. The foundational principle behind all high-availability design.",
    x: "Dual power supplies on different circuits keep a server up when one feed loses power."
  },

  /* ===== Recovery Sites ===== */
  "Recovery Sites": {
    t: "Recovery Sites",
    d: "Alternate facilities to resume operations after a disaster makes the primary site unusable. They range from cold (bare space) to hot (ready to run) to mirror (instant), trading cost against recovery speed, and should be geographically remote.",
    x: "A hot site lets the business resume within hours of losing its primary data centre.",
    f: "sites"
  },
  "Types of Sites": {
    t: "Types of Sites",
    d: "The spectrum of recovery facilities by readiness and cost: cold, warm, hot, mobile, and mirror/redundant. The faster the recovery, the higher the ongoing cost.",
    x: "Cost rises from cold (cheapest, slowest) to mirror (most expensive, instant) — you buy the recovery speed you can justify.",
    f: "sites"
  },
  "site-cold": {
    t: "Cold Site",
    d: "A facility with space, power and cooling but NO IT equipment or data pre-installed. Cheapest option, but recovery takes DAYS TO WEEKS because you must bring in and configure everything. Suits long RTOs.",
    x: "An empty conditioned room the company can fill with servers and restore backups into after a disaster.",
    f: "sites"
  },
  "site-warm": {
    t: "Warm Site",
    d: "A middle-ground facility with some equipment and connectivity in place but not fully current data — recovery in HOURS TO DAYS once data is restored. Balances cost and speed.",
    x: "A site with servers and network ready; the team restores the latest backups and is running within a day.",
    f: "sites"
  },
  "site-hot": {
    t: "Hot Site",
    d: "A fully equipped, fully operational duplicate with near-current data, ready to take over in MINUTES TO HOURS. Expensive to maintain, but supports short RTOs.",
    x: "A standby data centre with live-replicated data the business cuts over to within an hour of an outage.",
    f: "sites"
  },
  "Mobile": {
    t: "Mobile Site",
    d: "A portable, self-contained recovery facility (e.g. a trailer or container fitted with IT) that can be transported to wherever it's needed. Flexible for situations where a fixed alternate site isn't practical.",
    x: "A telecom rolls a mobile data-centre trailer to a disaster-struck region to restore service.",
    f: "sites"
  },
  "site-mirror": {
    t: "Mirror / Redundant Site",
    d: "A fully redundant, real-time DUPLICATE of the primary site running in parallel — essentially zero recovery time because it already holds live, synchronised data. The fastest and most expensive option.",
    x: "An active-active mirror site processes the same transactions live, so losing the primary causes no interruption.",
    f: "sites"
  },
  "Geographically remote": {
    t: "Geographically Remote",
    d: "A recovery site must be far enough from the primary that the SAME disaster (earthquake, flood, regional power loss, hurricane) cannot affect both. Too close and your backup site goes down with the primary.",
    x: "A bank places its recovery site in another seismic zone and power grid, hundreds of miles from headquarters."
  }
});
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

  /* ---- recovery sites: cost/speed ladder position ---- */
  var SITES = [
    ["Mirror", "full real-time copy &middot; near-zero RTO &middot; highest cost"],
    ["Hot", "equipped + current data &middot; hours &middot; very costly"],
    ["Warm", "equipped, restore data on arrival &middot; days"],
    ["Cold", "space &amp; power only &middot; weeks &middot; cheapest"],
    ["Mobile", "trailer / portable variant of the above"]
  ];
  var SNOTE = "faster recovery costs more &mdash; match the site to your RTO";
  set("site-mirror", "c7si0"); G["c7si0"] = rows("Recovery Site Ladder", SITES, 0, SNOTE);
  set("site-hot", "c7si1"); G["c7si1"] = rows("Recovery Site Ladder", SITES, 1, SNOTE);
  set("site-warm", "c7si2"); G["c7si2"] = rows("Recovery Site Ladder", SITES, 2, SNOTE);
  set("site-cold", "c7si3"); G["c7si3"] = rows("Recovery Site Ladder", SITES, 3, SNOTE);
  set("Mobile", "c7si4"); G["c7si4"] = rows("Recovery Site Ladder", SITES, 4, SNOTE);

  /* ---- RAID levels: dedicated disk diagrams ---- */
  function raidFig(label, title, disks, note1, note2) {
    var n = disks.length, gap = 8, w = (310 - gap * (n - 1)) / n;
    var s = '<svg viewBox="0 0 330 118" class="fig" role="img" aria-label="' + label + '">';
    s += '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">' + title + '</text>';
    disks.forEach(function (d, i) {
      var x = 10 + i * (w + gap), cx = x + w / 2;
      s += '<rect x="' + x + '" y="24" width="' + w + '" height="52" rx="6" fill="#161616" stroke="#a0303f"/>';
      s += '<text x="' + cx + '" y="38" text-anchor="middle" fill="#ff9ab0" font-size="7.4" font-weight="700">DISK ' + (i + 1) + '</text>';
      d.forEach(function (blk, j) {
        var hot = blk.indexOf('P') === 0;
        s += '<rect x="' + (x + 6) + '" y="' + (44 + j * 14) + '" width="' + (w - 12) + '" height="12" rx="2" fill="' + (hot ? '#3a0a0e' : '#101010') + '" stroke="' + (hot ? '#d31324' : '#333') + '"/>';
        s += '<text x="' + cx + '" y="' + (53 + j * 14) + '" text-anchor="middle" fill="' + (hot ? '#fff' : '#e0e0e0') + '" font-size="6.8">' + blk + '</text>';
      });
    });
    s += '<text x="165" y="94" text-anchor="middle" fill="#f0f0f0" font-size="7.6">' + note1 + '</text>';
    s += '<text x="165" y="110" text-anchor="middle" fill="#a6a6a6" font-size="7">' + note2 + '</text>';
    return s + '</svg>';
  }
  G["c7r0"] = raidFig("RAID 0 striping", "RAID 0 &mdash; Striping", [["A1", "A3"], ["A2", "A4"]], "blocks alternate across disks &mdash; pure SPEED", "NO redundancy: lose one disk, lose everything");
  set("raid0", "c7r0");
  G["c7r1"] = raidFig("RAID 1 mirroring", "RAID 1 &mdash; Mirroring", [["A1", "A2"], ["A1", "A2"]], "every block written to BOTH disks", "survives one disk failure &middot; 50% capacity cost");
  set("raid1", "c7r1");
  G["c7r5"] = raidFig("RAID 5 striping with parity", "RAID 5 &mdash; Striping + Parity", [["A1", "B1"], ["A2", "P(B)"], ["P(A)", "B2"]], "parity is DISTRIBUTED across all disks", "survives ONE disk failure &middot; needs 3+ disks");
  set("raid5", "c7r5");
  G["c7r6"] = raidFig("RAID 6 dual parity", "RAID 6 &mdash; Dual Parity", [["A1", "P2(B)"], ["A2", "P1(B)"], ["P1(A)", "B1"], ["P2(A)", "B2"]], "TWO independent parity blocks per stripe", "survives TWO disk failures &middot; needs 4+ disks");
  set("raid6", "c7r6");

  /* ---- backup types ---- */
  var BK = [
    ["FULL", "copies EVERYTHING", "archive bit RESET", "restore: just this one"],
    ["INCREMENTAL", "since last ANY backup", "archive bit RESET", "restore: full + every inc"],
    ["DIFFERENTIAL", "since last FULL", "bit NOT reset &mdash; grows daily", "restore: full + newest diff"]
  ];
  set("Full", "c7bk0"); G["c7bk0"] = cols("Backup Types", BK, 0);
  set("Incremental", "c7bk1"); G["c7bk1"] = cols("Backup Types", BK, 1);
  set("Differential", "c7bk2"); G["c7bk2"] = cols("Backup Types", BK, 2);
  G["c7ab"] = card("Archive Bit", ["a file flag set whenever the file changes", "FULL and INCREMENTAL backups reset it", "DIFFERENTIAL leaves it set &mdash; that's the difference"], "the bit tells the backup software what still needs copying");
  set("Archive Bit", "c7ab");

  /* ---- failure modes ---- */
  var FM = [
    ["FAIL-SAFE (fail-open)", "protect PEOPLE first", "doors UNLOCK on power loss", "life safety always wins"],
    ["FAIL-SECURE (fail-closed)", "protect ASSETS", "doors STAY LOCKED", "for vaults, not exits"]
  ];
  set("Fail-Safe", "c7fm0"); G["c7fm0"] = cols("Failure Modes", FM, 0, "exam tip: people &gt; property, every time");
  set("Fail-Secure", "c7fm1"); G["c7fm1"] = cols("Failure Modes", FM, 1, "exam tip: people &gt; property, every time");

  /* ---- DR test ladder ---- */
  var DRT = [
    ["Read-through", "individuals review the docs &middot; zero risk"],
    ["Walkthrough", "team tabletop discussion of the plan"],
    ["Simulation", "scenario drill &mdash; no production systems touched"],
    ["Parallel", "recovery site runs ALONGSIDE production"],
    ["Full interruption", "production actually fails over &mdash; riskiest, truest"]
  ];
  var DNOTE = "risk and realism both increase as you go down";
  set("read-through", "c7dr0"); G["c7dr0"] = rows("DR Test Ladder", DRT, 0, DNOTE);
  set("Walkthrough", "c7dr1"); G["c7dr1"] = rows("DR Test Ladder", DRT, 1, DNOTE);
  set("Simulation", "c7dr2"); G["c7dr2"] = rows("DR Test Ladder", DRT, 2, DNOTE);
  set("Parallel", "c7dr3"); G["c7dr3"] = rows("DR Test Ladder", DRT, 3, DNOTE);
  set("full-interruption", "c7dr4"); G["c7dr4"] = rows("DR Test Ladder", DRT, 4, DNOTE);

  /* ---- recovery time objectives: highlighted segment on one timeline ---- */
  function tline(label, hot) {
    var segs = [["RPO", "data loss looking BACK"], ["RTO", "systems restored"], ["WRT", "verify &amp; catch up"], ["MTD", "total outage tolerated"]];
    var s = '<svg viewBox="0 0 330 118" class="fig" role="img" aria-label="' + label + '">';
    s += '<text x="165" y="13" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Recovery Timeline</text>';
    s += '<line x1="14" y1="52" x2="316" y2="52" stroke="#a0303f" stroke-width="2"/>';
    s += '<line x1="88" y1="40" x2="88" y2="64" stroke="#d31324" stroke-width="2"/>';
    s += '<text x="88" y="34" text-anchor="middle" fill="#ff9ab0" font-size="7" font-weight="700">INCIDENT</text>';
    var xs = [[16, 86], [92, 160], [166, 234], [92, 314]];
    segs.forEach(function (sg, i) {
      var hl = i === hot, y = i === 3 ? 74 : 52;
      if (i !== 3) {
        s += '<rect x="' + xs[i][0] + '" y="46" width="' + (xs[i][1] - xs[i][0]) + '" height="12" rx="3" fill="' + (hl ? '#3a0a0e' : '#161616') + '" stroke="' + (hl ? '#d31324' : '#555') + '"/>';
        s += '<text x="' + ((xs[i][0] + xs[i][1]) / 2) + '" y="55" text-anchor="middle" fill="' + (hl ? '#fff' : '#ff9ab0') + '" font-size="7" font-weight="700">' + sg[0] + '</text>';
      } else {
        s += '<rect x="92" y="68" width="222" height="12" rx="3" fill="' + (hl ? '#3a0a0e' : '#161616') + '" stroke="' + (hl ? '#d31324' : '#555') + '"/>';
        s += '<text x="203" y="77" text-anchor="middle" fill="' + (hl ? '#fff' : '#ff9ab0') + '" font-size="7" font-weight="700">MTD = RTO + WRT</text>';
      }
    });
    s += '<text x="165" y="98" text-anchor="middle" fill="#f0f0f0" font-size="7.6"><tspan fill="#ff9ab0" font-weight="700">' + segs[hot][0] + '</tspan> &mdash; ' + segs[hot][1] + '</text>';
    s += '<text x="165" y="112" text-anchor="middle" fill="#a6a6a6" font-size="7">RPO drives backup frequency &middot; RTO + WRT must fit inside MTD</text>';
    return s + '</svg>';
  }
  set("rpo-bcm", "c7tl0"); G["c7tl0"] = tline("RPO on the recovery timeline", 0);
  set("RTO", "c7tl1"); G["c7tl1"] = tline("RTO on the recovery timeline", 1);
  set("WRT", "c7tl2"); G["c7tl2"] = tline("WRT on the recovery timeline", 2);
  set("MTD", "c7tl3"); G["c7tl3"] = tline("MTD on the recovery timeline", 3);

  /* ---- event vs incident ---- */
  var EI = [
    ["EVENT", "ANY observable occurrence", "neutral &mdash; a log entry", "millions per day"],
    ["INCIDENT", "an event with ADVERSE impact", "triggers the response plan", "hopefully few"]
  ];
  set("Event", "c7ei0"); G["c7ei0"] = cols("Event vs. Incident", EI, 0);
  set("Incident", "c7ei1"); G["c7ei1"] = cols("Event vs. Incident", EI, 1);

  /* ---- malware family ---- */
  var MW = [
    ["VIRUS", "needs a HOST file", "spreads via user action", "attach &amp; infect"],
    ["WORM", "self-replicates", "spreads over the network alone", "no user needed"],
    ["RANSOMWARE", "encrypts &amp; extorts", "backup = best defence", "never rely on paying"]
  ];
  set("Virus", "c7mw0"); G["c7mw0"] = cols("Malware Family", MW, 0);
  set("Worm", "c7mw1"); G["c7mw1"] = cols("Malware Family", MW, 1);
  set("Ransomware", "c7mw2"); G["c7mw2"] = cols("Malware Family", MW, 2);

  /* ---- detection approaches ---- */
  var DET = [
    ["SIGNATURE-BASED", "matches KNOWN patterns", "fast, few false positives", "misses zero-days"],
    ["HEURISTIC / BEHAVIOR", "flags suspicious ACTIONS", "catches new malware", "more false positives"]
  ];
  set("Signature Based Scanners", "c7det0"); G["c7det0"] = cols("Malware Detection Approaches", DET, 0, "modern tools layer both");
  set("Heuristic Scanners", "c7det1"); G["c7det1"] = cols("Malware Detection Approaches", DET, 1, "modern tools layer both");

  /* ---- digital forensics process ---- */
  G["c7for"] = card("Digital Forensics Process", ["identify &rarr; preserve &rarr; collect &rarr;", "examine &rarr; analyse &rarr; present", "chain of custody documented at every step"], "work on a hash-verified COPY, never the original");
  set("Digital Forensics", "c7for");
})();
