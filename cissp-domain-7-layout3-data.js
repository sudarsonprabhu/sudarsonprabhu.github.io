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
