/* ============================================================
   CISSP Domain 6 — Layout 2 hover details (Identifying Vulnerabilities)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-6-data.js. Consumed by cissp-domain-6.js.
   Some boxes are matched by data-ac-key (pentest-techniques,
   perspective-internal, perspective-external) to avoid clashing
   with the same words used in Layout 1.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  vapt: `
    <svg viewBox="0 0 330 110" class="fig" role="img" aria-label="Vulnerability assessment versus penetration test">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">VA vs. Penetration Test</text>
      <rect x="14" y="28" width="142" height="68" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="85" y="48" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">VULN ASSESSMENT</text>
      <text x="85" y="66" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Find &amp; rank</text>
      <text x="85" y="78" text-anchor="middle" fill="#f5f5f5" font-size="8.5">weaknesses</text>
      <text x="85" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">does NOT exploit</text>
      <rect x="174" y="28" width="142" height="68" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="245" y="48" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">PENETRATION TEST</text>
      <text x="245" y="66" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Actively exploits</text>
      <text x="245" y="78" text-anchor="middle" fill="#f5f5f5" font-size="8.5">to prove impact</text>
      <text x="245" y="90" text-anchor="middle" fill="#a6a6a6" font-size="8">owner authorised</text>
    </svg>`,

  fpfn: `
    <svg viewBox="0 0 330 130" class="fig" role="img" aria-label="False positive versus false negative">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">False Positive vs. False Negative</text>
      <rect x="14" y="26" width="142" height="92" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="85" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">FALSE POSITIVE</text>
      <text x="85" y="66" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Alarm — but</text>
      <text x="85" y="78" text-anchor="middle" fill="#f5f5f5" font-size="8.5">nothing is wrong</text>
      <text x="85" y="100" text-anchor="middle" fill="#a6a6a6" font-size="8">Wastes effort</text>
      <rect x="174" y="26" width="142" height="92" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="245" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">FALSE NEGATIVE</text>
      <text x="245" y="66" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Silence — but a</text>
      <text x="245" y="78" text-anchor="middle" fill="#f5f5f5" font-size="8.5">real flaw exists</text>
      <text x="245" y="100" text-anchor="middle" fill="#a6a6a6" font-size="8">Dangerous — more so</text>
    </svg>`
});

Object.assign(window.AC_DETAILS, {
  "Identifying Vulnerabilities": {
    t: "Identifying Vulnerabilities",
    d: "How weaknesses are found, classified and understood — from broad vulnerability assessment and deep penetration testing, through the pen-test process and the techniques that frame it, to scan types and the standards (CVE, CVSS, SCAP) used to interpret results.",
    x: "A quarterly programme runs authenticated scans for breadth, then an annual pen test for depth, scoring every finding with CVSS to decide what to fix first."
  },

  "Vulnerability Assessment": {
    t: "Vulnerability Assessment",
    d: "A systematic examination that identifies, defines and ranks weaknesses in a system — but does NOT exploit them. The output is a prioritised list of vulnerabilities, usually scanner-driven and validated by an analyst.",
    x: "A monthly authenticated scan of all servers produces a ranked report: 12 critical, 40 high, 200 medium — for the patching team to work through.",
    f: "vapt"
  },
  "Penetration Testing": {
    t: "Penetration Testing",
    d: "A simulated attack, authorised by the system owner, that actively exploits vulnerabilities — just like a real attacker — to demonstrate genuine business impact. Goes beyond a VA by proving what an attacker could actually achieve.",
    x: "A tester chains a weak password and a misconfigured share to reach the domain controller, proving the 'medium' findings combine into a full compromise.",
    f: "vapt"
  },

  /* ----- Process ----- */
  "Process": {
    t: "Penetration-Test Process",
    d: "The repeatable lifecycle of a pen test: Reconnaissance → Enumeration → Vulnerability Analysis → Execution → Document Findings. Each phase feeds the next, ending in a report that turns exploits into business risk.",
    x: "After recon and enumeration map the attack surface, the tester analyses for exploitable flaws, executes the exploit, then documents everything for the client."
  },
  "Reconnaissance": {
    t: "Reconnaissance",
    d: "Gathering intelligence about the target. Passive recon uses public sources (OSINT, Shodan, social media, DNS) without touching the target; active recon directly probes it. The foundation the whole test is built on.",
    x: "Before touching the network, the tester finds employee emails on LinkedIn and exposed subdomains via certificate transparency logs."
  },
  "Enumeration": {
    t: "Enumeration",
    d: "Active probing to build a precise inventory of the attack surface — open ports, running services, software versions and OS fingerprints. Turns a vague target into a concrete map of what can be attacked.",
    x: "An nmap scan reveals port 445 open running an outdated SMBv1 service on a Windows Server 2012 host — a specific, targetable detail."
  },
  "Vulnerability Analysis": {
    t: "Vulnerability Analysis",
    d: "Matching the enumerated services and versions against known weaknesses to identify exploitable attack paths. Overlaps with vulnerability assessment, but here the goal is finding a way in, not just a ranked list.",
    x: "Knowing the host runs SMBv1, the tester confirms it's vulnerable to EternalBlue (MS17-010) and plans the exploit."
  },
  "Execution": {
    t: "Execution (Exploitation)",
    d: "Actively exploiting confirmed vulnerabilities to demonstrate impact — gaining a shell, escalating privileges, moving laterally, or reaching sensitive data. Credential attacks like Pass-the-Hash often appear here.",
    x: "The tester launches the EternalBlue exploit, gets SYSTEM access, dumps password hashes and pivots to the file server."
  },
  "Document Findings": {
    t: "Document Findings",
    d: "Producing a professional report that translates technical exploits into business risk language, with evidence, severity ratings and prioritised remediation guidance. The deliverable the client actually pays for.",
    x: "The final report shows, with screenshots, how a single unpatched host led to full domain compromise — and lists the fixes in priority order."
  },

  /* ----- Testing Techniques (pen-test) — data-ac-key ----- */
  "pentest-techniques": {
    t: "Pen-Test Framing Techniques",
    d: "Three independent dimensions that frame how a test is run: the perspective (where the tester sits — internal vs external), the approach (whether staff are warned — blind vs double-blind), and the knowledge level given (zero/partial/full).",
    x: "A single engagement might be external (perspective), double-blind (approach), and zero-knowledge (knowledge) — the most realistic simulation of a surprise outside attack."
  },
  "Perspective": {
    t: "Perspective",
    d: "Where the tester is positioned relative to the network boundary — outside it (external) or already inside it (internal). Determines which threats the test simulates.",
    x: "An external test mimics an internet attacker; an internal test mimics a malicious employee or an attacker who already breached the perimeter."
  },
  "perspective-internal": {
    t: "Internal Perspective",
    d: "The test is launched from inside the network perimeter, simulating a malicious insider or an attacker who has already gained a foothold. Reveals lateral-movement and east-west exposure that perimeter defences hide.",
    x: "The tester is plugged into an office LAN port and sees how far an insider could move toward the crown-jewel database."
  },
  "perspective-external": {
    t: "External Perspective",
    d: "The test is launched from outside the perimeter (the internet), simulating a typical external attacker probing internet-facing assets. Tests the perimeter and exposed services.",
    x: "The tester works from their own office over the internet, attacking only the public IP ranges and exposed web apps."
  },
  "Approach": {
    t: "Approach (Awareness)",
    d: "Whether the target's own security team knows the test is happening, which determines whether you're also testing their detection-and-response capability.",
    x: "If the SOC is told in advance, you test controls; if they aren't, you also test whether they'd actually catch a real attack."
  },
  "Blind": {
    t: "Blind Test",
    d: "The tester works only from publicly available information (limited knowledge of the target), while the target's security staff ARE notified that a test is occurring. Tests technical controls with the defenders aware.",
    x: "The pen-test firm is given only the company name and starts from scratch, but the SOC has been told to expect activity this week."
  },
  "Double-blind": {
    t: "Double-Blind Test (Stealth)",
    d: "The tester uses only public information AND the target's security staff are NOT notified. This additionally tests the team's real-world detection and incident response. Also called a zero-knowledge or surprise assessment.",
    x: "Leadership commissions a covert test; the SOC has no idea it's a drill, so their genuine detection and response is measured."
  },
  "Knowledge": {
    t: "Knowledge Level",
    d: "How much internal information the tester is given before starting — zero (black box), partial (gray box), or full (white box). Trades realism against depth and speed.",
    x: "Giving the tester nothing maximises realism; giving them architecture diagrams and credentials maximises depth and efficiency."
  },
  "Zero (black)": {
    t: "Zero Knowledge (Black Box)",
    d: "The tester is given no internal information and must discover everything from the outside — the most realistic external-attacker simulation, but the slowest and most likely to miss internal paths.",
    x: "The tester receives only a domain name and must enumerate, map and attack with no documentation or credentials."
  },
  "Partial (gray)": {
    t: "Partial Knowledge (Gray Box)",
    d: "The tester is given some internal information — perhaps user-level credentials or basic architecture — simulating an insider or a well-researched attacker. The practical balance of realism and efficiency.",
    x: "The tester gets a standard employee login and is asked to see how much privilege they can escalate from there."
  },
  "Full (white)": {
    t: "Full Knowledge (White Box)",
    d: "The tester is given complete internal information — source, architecture, admin credentials, network diagrams. Enables the deepest, fastest, most thorough testing, at the cost of realism.",
    x: "The tester is handed the full network diagram and admin access so they can audit every segment in the time available."
  },

  /* ----- Types of Scans ----- */
  "Types of Scans": {
    t: "Types of Scans",
    d: "Vulnerability scans run with or without valid login credentials. Credentialed scans see inside the host for accurate results; uncredentialed scans see only what an outsider sees, with more guesswork.",
    x: "An uncredentialed scan guesses a server is missing a patch from its banner; a credentialed scan logs in and confirms the exact patch level."
  },
  "Credentialed / Authenticated": {
    t: "Credentialed (Authenticated) Scan",
    d: "The scanner is given valid login credentials, so it can inspect the host from the inside — installed software, exact patch levels, configuration. Far more accurate, with fewer false positives, and reflects the insider/post-compromise view.",
    x: "A scanner logs into each server with a read-only service account and reads the actual installed-patch registry to confirm missing updates precisely."
  },
  "Uncredentialed / Unauthenticated": {
    t: "Uncredentialed (Unauthenticated) Scan",
    d: "The scanner has no credentials and probes only from the outside — like an external attacker. Useful for seeing exposure as an outsider, but produces more false positives because it must infer rather than verify.",
    x: "A scanner with no login inspects open ports and service banners to guess vulnerabilities, exactly as an internet attacker would."
  },

  "Banner grabbing & Fingerprinting": {
    t: "Banner Grabbing & Fingerprinting",
    d: "Techniques to identify a service or OS by the information it volunteers. Banner grabbing reads the text a service returns on connect (version strings); fingerprinting infers the OS/service from subtle behavioural traits. Both feed vulnerability analysis.",
    x: "Connecting to port 80 returns 'Apache/2.4.49' — instantly telling the tester which known Apache CVEs to try."
  },

  /* ----- Interpreting & understanding results ----- */
  "Interpreting & understanding results": {
    t: "Interpreting Results",
    d: "Raw findings are meaningless without common standards. CVE gives every flaw a unique name, and CVSS gives it a severity score 0–10 — together they let teams communicate and prioritise consistently.",
    x: "A finding labelled 'CVE-2021-44228, CVSS 10.0' tells every team worldwide exactly which flaw it is and that it needs emergency action."
  },
  "CVE": {
    t: "CVE — Common Vulnerabilities & Exposures",
    d: "The industry naming standard: every publicly known vulnerability gets one unique CVE identifier, so different vendors and tools all refer to the same flaw by the same name. It names the flaw — it does not score it.",
    x: "The Log4j flaw is universally called CVE-2021-44228, eliminating confusion between vendors who might otherwise each name it differently."
  },
  "CVSS": {
    t: "CVSS — Common Vulnerability Scoring System",
    d: "Assigns each vulnerability a severity score from 0.0 to 10.0 based on factors like attack vector, complexity, privileges required and CIA impact. Drives prioritisation: 9.0–10.0 critical, down to 0.1–3.9 low.",
    x: "Two findings: CVSS 9.8 (remote, no auth, full compromise) is patched tonight; CVSS 3.1 (local, low impact) waits for the next maintenance window."
  },
  "SCAP": {
    t: "SCAP — Security Content Automation Protocol",
    d: "A NIST suite of open standards that lets security tools automate vulnerability and configuration checking in a consistent, machine-readable way. Bundles components like OVAL (test definitions) and XCCDF (checklists) so different tools speak the same language.",
    x: "A SCAP-validated scanner reads a standard XCCDF benchmark and automatically checks every host against the agreed hardening baseline."
  },

  "False positive vs. False negative": {
    t: "False Positive vs. False Negative",
    d: "Two scanner error types. A false positive flags a problem that isn't real — wastes remediation effort. A false negative misses a real problem — creates dangerous false confidence and is generally the more harmful of the two. Both demand analyst validation.",
    x: "A scanner reports a patched server as vulnerable (false positive); worse, it silently misses an unpatched one (false negative) that an attacker later exploits.",
    f: "fpfn"
  }
});
