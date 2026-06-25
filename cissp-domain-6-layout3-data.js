/* ============================================================
   CISSP Domain 6 — Layout 3 hover details (Log Review & Analysis)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-6-data.js. Consumed by cissp-domain-6.js.
   The SIEM "Generation" box uses data-ac-key="log-generation"
   to stay distinct from any other "Generation" label.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  siem: `
    <svg viewBox="0 0 330 150" class="fig" role="img" aria-label="SIEM log management lifecycle">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">SIEM Log Lifecycle</text>
      <g font-size="8.5" fill="#f5f5f5">
        <rect x="10" y="26" width="92" height="26" rx="5" fill="#161616" stroke="#d31324"/><text x="56" y="43" text-anchor="middle">1 Generation</text>
        <rect x="119" y="26" width="92" height="26" rx="5" fill="#161616" stroke="#343434"/><text x="165" y="43" text-anchor="middle">2 Transmission</text>
        <rect x="228" y="26" width="92" height="26" rx="5" fill="#161616" stroke="#343434"/><text x="274" y="43" text-anchor="middle">3 Collection</text>
        <rect x="10" y="62" width="92" height="26" rx="5" fill="#161616" stroke="#343434"/><text x="56" y="79" text-anchor="middle">4 Normalize</text>
        <rect x="119" y="62" width="92" height="26" rx="5" fill="#161616" stroke="#d31324"/><text x="165" y="79" text-anchor="middle">5 Analysis</text>
        <rect x="228" y="62" width="92" height="26" rx="5" fill="#161616" stroke="#343434"/><text x="274" y="79" text-anchor="middle">6 Retention</text>
        <rect x="119" y="98" width="92" height="26" rx="5" fill="#161616" stroke="#343434"/><text x="165" y="115" text-anchor="middle">7 Disposal</text>
      </g>
      <text x="165" y="142" text-anchor="middle" fill="#a6a6a6" font-size="8">SIEM aggregates &amp; correlates every step</text>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  "Log Review & Analysis": {
    t: "Log Review & Analysis",
    d: "How raw log data becomes security insight: deciding what to watch for, running logs through the SIEM-driven management lifecycle (generate → transmit → collect → normalize → analyse → retain → dispose), and feeding continuous monitoring. Logs are the primary evidence source for detection and investigation.",
    x: "A failed-login spike on one account, correlated across firewall, VPN and AD logs in the SIEM, reveals a password-spray attack in progress."
  },

  /* ----- Monitor for ----- */
  "Monitor for": {
    t: "What to Monitor For",
    d: "Logs are reviewed to catch three broad categories of trouble: operational errors, unauthorised modification, and active breaches. Defining what 'bad' looks like up front is what makes log review actionable rather than noise.",
    x: "Alert rules watch for repeated application errors, changes to critical config files, and known indicators of compromise simultaneously."
  },
  "Errors": {
    t: "Errors",
    d: "Operational and application errors logged by systems. Beyond reliability, error patterns are security signals — a flood of errors can indicate an attack, a misconfiguration, or a failing control.",
    x: "A sudden burst of database errors turns out to be a SQL-injection attempt malforming queries against the app."
  },
  "Modification": {
    t: "Modification",
    d: "Unauthorised or unexpected changes to systems, files, configurations or accounts. Monitoring modification is core to integrity — attackers routinely alter configs, create accounts, or tamper with logs themselves.",
    x: "An alert fires when the /etc/sudoers file is modified outside a change window, revealing an attacker granting themselves root."
  },
  "Breaches": {
    t: "Breaches",
    d: "Direct indicators of a successful or attempted intrusion — known attack signatures, data exfiltration patterns, or confirmed indicators of compromise. The highest-priority thing log review exists to surface.",
    x: "Logs show a large outbound transfer to an unknown IP at 3 a.m. from a server that never initiates external connections — a likely exfiltration."
  },

  /* ----- SIEM ----- */
  "Security Information and Event Management (SIEM)": {
    t: "SIEM",
    d: "A platform that centralises logs from across the environment and provides real-time aggregation, normalization, correlation, alerting and retention. The SIEM is what makes enterprise-scale log review possible — and it owns the whole log-management lifecycle.",
    x: "Splunk or Sentinel ingests firewall, endpoint, AD and cloud logs, correlates them, and raises one high-fidelity alert from events that individually looked harmless.",
    f: "siem"
  },
  "log-generation": {
    t: "Generation",
    d: "The first stage: devices and applications create log entries about events. Key design decisions here are what to log (enough detail, not too much), how to control log file size, and ensuring accurate, synchronised timestamps so events can later be correlated.",
    x: "A web server is configured to log every authentication attempt with a synchronised timestamp, source IP and result — the raw material for later analysis."
  },
  "Limiting log file size": {
    t: "Limiting Log File Size",
    d: "Logs grow without bound and can fill storage (a denial-of-service risk) or be expensive to retain. Two common controls bound their size: circular overwrite and clipping levels. The trade-off is always storage cost vs. losing potential evidence.",
    x: "A device keeps only the last 30 days of logs in a fixed-size file, overwriting the oldest entries — saving space but risking loss of older evidence."
  },
  "Circular Overwrite": {
    t: "Circular Overwrite",
    d: "A fixed-size log buffer that, once full, overwrites the oldest entries with new ones (first-in, first-out). Guarantees logging never stops for lack of space, but means old records are silently lost — an attacker can exploit this by flooding logs to push out evidence.",
    x: "A 100 MB security log overwrites week-old entries as new ones arrive; an attacker generates noise to roll the log over and erase their earlier tracks."
  },
  "Clipping Levels": {
    t: "Clipping Levels",
    d: "A threshold that suppresses routine, below-threshold events so only meaningful ones are recorded or alerted on — reducing noise and log volume. Set too high, it can hide a slow attack that stays under the threshold.",
    x: "Only log a security event after 5 failed logins, so single typos don't flood the log — but a careful attacker pacing 4 attempts stays invisible."
  },
  "Time Stamps": {
    t: "Time Stamps",
    d: "Every log entry needs an accurate, consistent timestamp. Without synchronised time across systems, you cannot reliably correlate events or reconstruct an attack timeline — making this foundational to log analysis and forensics.",
    x: "If the firewall and the server clocks differ by 10 minutes, you can't tell which event came first during an incident reconstruction."
  },
  "Consistent": {
    t: "Consistent Time",
    d: "All systems must agree on the time so events from different sources line up correctly. Inconsistent clocks break correlation and can undermine the evidentiary value of logs in court.",
    x: "All servers, firewalls and endpoints are set to UTC so a 12:00:00 event means the same instant everywhere."
  },
  "Network Time Protocol (NTP)": {
    t: "Network Time Protocol (NTP)",
    d: "The protocol used to automatically synchronise clocks across all systems to a common, authoritative time source. NTP is the standard mechanism that makes consistent timestamps — and therefore reliable correlation — possible.",
    x: "All hosts sync to an internal NTP server (chained to an authoritative national time source), keeping every clock within milliseconds."
  },
  "Transmission": {
    t: "Transmission",
    d: "Moving log data from where it's generated to the central collector/SIEM. Logs must be transmitted securely (encrypted, integrity-protected) so they can't be intercepted, altered or dropped in transit — a tampered log is worthless as evidence.",
    x: "Endpoints ship their logs to the SIEM over TLS-encrypted syslog so an attacker on the network can't read or modify them en route."
  },
  "Collection / Aggregation": {
    t: "Collection / Aggregation",
    d: "Gathering logs from many diverse sources into one central repository. Centralisation is what enables cross-source correlation, protects logs from being wiped on a compromised host, and supports retention policy.",
    x: "Logs from 5,000 endpoints, every firewall and all cloud services are aggregated into one SIEM index for unified searching."
  },
  "Normalization": {
    t: "Normalization",
    d: "Converting logs from many different formats into one common structure with consistent field names, so events from different vendors can be compared and correlated. Without normalization, a 'source IP' in ten formats can't be cross-referenced.",
    x: "A Cisco firewall's 'src=' and a Windows event's 'Source Network Address' are both mapped to a single normalized field, source_ip."
  },
  "Analysis": {
    t: "Analysis",
    d: "Examining and correlating the collected, normalized logs to detect threats, anomalies and patterns — through rules, signatures, statistical baselining and increasingly machine learning. This is where logs turn into actionable alerts.",
    x: "The SIEM correlates a VPN login from Russia with a simultaneous office badge-in locally, flagging 'impossible travel' as a likely account compromise."
  },
  "Retention": {
    t: "Retention",
    d: "Keeping logs for a defined period to satisfy investigation needs and legal/regulatory requirements, then no longer. Retention periods are driven by compliance mandates and the need to investigate slow-burning attacks discovered months later.",
    x: "PCI-DSS requires one year of log retention (90 days immediately available), so the SIEM keeps a full year before logs are eligible for disposal."
  },
  "Disposal": {
    t: "Disposal",
    d: "Securely destroying logs once their retention period expires. Disposal must be secure (logs can contain sensitive data) and defensible — done per a documented policy so it isn't seen as evidence destruction or spoliation.",
    x: "After the one-year retention window, logs are cryptographically erased on a fixed schedule documented in the retention policy."
  },

  /* ----- Continuous Monitoring ----- */
  "Continuous Monitoring": {
    t: "Continuous Monitoring",
    d: "Ongoing, near-real-time observation of systems, controls and logs — rather than point-in-time checks — so security posture and emerging threats are tracked continuously. A core NIST RMF concept that keeps assessment from being a once-a-year event.",
    x: "Instead of an annual audit only, dashboards and automated alerts continuously watch control health, flagging a disabled antivirus the moment it happens."
  }
});
