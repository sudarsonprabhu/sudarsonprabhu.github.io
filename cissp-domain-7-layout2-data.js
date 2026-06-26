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
