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
