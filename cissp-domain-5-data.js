/* ============================================================
   CISSP Domain 5 — Layout 1 hover details
   Two globals consumed by cissp-domain-5.js:
     - AC_FIGS    : named inline-SVG infographics (red/black theme)
     - AC_DETAILS : box label -> { d: description, x: example,
                                   f: optional figure name }
   A box is matched by its trimmed text. Boxes whose detail has an
   `f` show that infographic in the tooltip and get a small red dot.
   ============================================================ */

/* ---------- infographics ---------- */
window.AC_FIGS = {
  factors: `
    <svg viewBox="0 0 330 150" class="fig" role="img" aria-label="The three authentication factors">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Three Authentication Factors</text>
      <rect x="12" y="26" width="98" height="106" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="61" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">KNOW</text>
      <text x="61" y="66" text-anchor="middle" fill="#f5f5f5" font-size="9">Something</text>
      <text x="61" y="78" text-anchor="middle" fill="#f5f5f5" font-size="9">you know</text>
      <text x="61" y="104" text-anchor="middle" fill="#a6a6a6" font-size="8">Password</text>
      <text x="61" y="116" text-anchor="middle" fill="#a6a6a6" font-size="8">PIN, answer</text>
      <rect x="116" y="26" width="98" height="106" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="165" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">HAVE</text>
      <text x="165" y="66" text-anchor="middle" fill="#f5f5f5" font-size="9">Something</text>
      <text x="165" y="78" text-anchor="middle" fill="#f5f5f5" font-size="9">you have</text>
      <text x="165" y="104" text-anchor="middle" fill="#a6a6a6" font-size="8">Token, card</text>
      <text x="165" y="116" text-anchor="middle" fill="#a6a6a6" font-size="8">phone app</text>
      <rect x="220" y="26" width="98" height="106" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="269" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">ARE</text>
      <text x="269" y="66" text-anchor="middle" fill="#f5f5f5" font-size="9">Something</text>
      <text x="269" y="78" text-anchor="middle" fill="#f5f5f5" font-size="9">you are</text>
      <text x="269" y="104" text-anchor="middle" fill="#a6a6a6" font-size="8">Fingerprint</text>
      <text x="269" y="116" text-anchor="middle" fill="#a6a6a6" font-size="8">iris, face</text>
    </svg>`,

  mfa: `
    <svg viewBox="0 0 330 150" class="fig" role="img" aria-label="Single factor versus multifactor">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Single-Factor vs. Multifactor</text>
      <text x="86" y="36" text-anchor="middle" fill="#a6a6a6" font-size="9" font-weight="700">SINGLE-FACTOR</text>
      <rect x="50" y="44" width="72" height="28" rx="6" fill="#161616" stroke="#343434"/>
      <text x="86" y="62" text-anchor="middle" fill="#f5f5f5" font-size="9">Password</text>
      <text x="86" y="94" text-anchor="middle" fill="#a6a6a6" font-size="8">one category only</text>
      <text x="86" y="106" text-anchor="middle" fill="#a6a6a6" font-size="8">(even two passwords)</text>
      <line x1="165" y1="28" x2="165" y2="132" stroke="#343434" stroke-dasharray="3 3"/>
      <text x="248" y="36" text-anchor="middle" fill="#d31324" font-size="9" font-weight="700">MULTIFACTOR</text>
      <rect x="188" y="44" width="52" height="28" rx="5" fill="#161616" stroke="#d31324"/>
      <text x="214" y="62" text-anchor="middle" fill="#f5f5f5" font-size="8">Know</text>
      <text x="247" y="63" text-anchor="middle" fill="#d31324" font-size="13" font-weight="700">+</text>
      <rect x="256" y="44" width="52" height="28" rx="5" fill="#161616" stroke="#d31324"/>
      <text x="282" y="62" text-anchor="middle" fill="#f5f5f5" font-size="8">Have</text>
      <text x="248" y="98" text-anchor="middle" fill="#a6a6a6" font-size="8">2+ DIFFERENT categories</text>
      <text x="248" y="116" text-anchor="middle" fill="#2ea043" font-size="9" font-weight="700">= much stronger</text>
    </svg>`,

  aal: `
    <svg viewBox="0 0 330 168" class="fig" role="img" aria-label="Authenticator assurance levels">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Authenticator Assurance Levels</text>
      <text x="165" y="27" text-anchor="middle" fill="#a6a6a6" font-size="8">NIST SP 800-63B</text>
      <rect x="30" y="118" width="272" height="30" rx="5" fill="#161616" stroke="#343434"/>
      <text x="44" y="137" fill="#d31324" font-size="10" font-weight="700">AAL1</text>
      <text x="92" y="137" fill="#f5f5f5" font-size="8.5">Single-factor — some assurance</text>
      <rect x="30" y="82" width="226" height="30" rx="5" fill="#161616" stroke="#7a0f17"/>
      <text x="44" y="101" fill="#d31324" font-size="10" font-weight="700">AAL2</text>
      <text x="92" y="101" fill="#f5f5f5" font-size="8.5">MFA + approved cryptography</text>
      <rect x="30" y="46" width="186" height="30" rx="5" fill="#161616" stroke="#d31324"/>
      <text x="44" y="65" fill="#d31324" font-size="10" font-weight="700">AAL3</text>
      <text x="92" y="65" fill="#f5f5f5" font-size="8.5">Hardware, impersonation-resistant</text>
      <text x="302" y="160" text-anchor="end" fill="#a6a6a6" font-size="8">higher = stronger</text>
    </svg>`,

  otp: `
    <svg viewBox="0 0 330 150" class="fig" role="img" aria-label="Synchronous versus asynchronous one-time passwords">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">One-Time Password Tokens</text>
      <text x="86" y="36" text-anchor="middle" fill="#d31324" font-size="9" font-weight="700">SYNCHRONOUS</text>
      <rect x="34" y="46" width="46" height="26" rx="5" fill="#161616" stroke="#343434"/>
      <text x="57" y="63" text-anchor="middle" fill="#f5f5f5" font-size="8">Token</text>
      <rect x="92" y="46" width="46" height="26" rx="5" fill="#161616" stroke="#343434"/>
      <text x="115" y="63" text-anchor="middle" fill="#f5f5f5" font-size="8">Server</text>
      <text x="86" y="92" text-anchor="middle" fill="#d31324" font-size="8">same time / counter</text>
      <text x="86" y="106" text-anchor="middle" fill="#a6a6a6" font-size="8">both derive the same code</text>
      <line x1="165" y1="28" x2="165" y2="132" stroke="#343434" stroke-dasharray="3 3"/>
      <text x="248" y="36" text-anchor="middle" fill="#d31324" font-size="9" font-weight="700">ASYNCHRONOUS</text>
      <rect x="196" y="46" width="46" height="26" rx="5" fill="#161616" stroke="#343434"/>
      <text x="219" y="63" text-anchor="middle" fill="#f5f5f5" font-size="8">Server</text>
      <rect x="256" y="46" width="46" height="26" rx="5" fill="#161616" stroke="#343434"/>
      <text x="279" y="63" text-anchor="middle" fill="#f5f5f5" font-size="8">Token</text>
      <text x="249" y="92" text-anchor="middle" fill="#d31324" font-size="8">challenge -&gt; response</text>
      <text x="249" y="106" text-anchor="middle" fill="#a6a6a6" font-size="8">no clock needed</text>
    </svg>`,

  cer: `
    <svg viewBox="0 0 330 200" class="fig" role="img" aria-label="Crossover error rate graph">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Crossover Error Rate (CER)</text>
      <line x1="42" y1="30" x2="42" y2="162" stroke="#343434" stroke-width="1.5"/>
      <line x1="42" y1="162" x2="312" y2="162" stroke="#343434" stroke-width="1.5"/>
      <text x="20" y="100" fill="#a6a6a6" font-size="8" transform="rotate(-90 20 100)">Error rate %</text>
      <text x="180" y="180" text-anchor="middle" fill="#a6a6a6" font-size="8">Sensitivity / threshold</text>
      <line x1="54" y1="150" x2="300" y2="46" stroke="#ff7b82" stroke-width="2"/>
      <text x="232" y="52" fill="#ff7b82" font-size="8">FRR (Type I)</text>
      <line x1="54" y1="46" x2="300" y2="150" stroke="#d31324" stroke-width="2"/>
      <text x="232" y="150" fill="#d31324" font-size="8">FAR (Type II)</text>
      <line x1="177" y1="98" x2="177" y2="162" stroke="#343434" stroke-dasharray="3 3"/>
      <circle cx="177" cy="98" r="5" fill="#f5f5f5" stroke="#d31324" stroke-width="2"/>
      <text x="186" y="94" fill="#f5f5f5" font-size="9" font-weight="700">CER</text>
      <text x="165" y="196" text-anchor="middle" fill="#a6a6a6" font-size="7.5">Lower CER = more accurate device (a.k.a. Equal Error Rate)</text>
    </svg>`,

  models: `
    <svg viewBox="0 0 330 162" class="fig" role="img" aria-label="Authorization models">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Authorization Models</text>
      <rect x="20" y="24" width="140" height="58" rx="6" fill="#161616" stroke="#d31324"/>
      <text x="32" y="43" fill="#d31324" font-size="10" font-weight="700">DAC</text>
      <text x="32" y="59" fill="#f5f5f5" font-size="8.5">Owner decides access</text>
      <text x="32" y="72" fill="#a6a6a6" font-size="7.5">discretionary, ACLs</text>
      <rect x="170" y="24" width="140" height="58" rx="6" fill="#161616" stroke="#343434"/>
      <text x="182" y="43" fill="#d31324" font-size="10" font-weight="700">MAC</text>
      <text x="182" y="59" fill="#f5f5f5" font-size="8.5">Labels &amp; clearances</text>
      <text x="182" y="72" fill="#a6a6a6" font-size="7.5">mandatory, system-enforced</text>
      <rect x="20" y="90" width="140" height="58" rx="6" fill="#161616" stroke="#343434"/>
      <text x="32" y="109" fill="#d31324" font-size="10" font-weight="700">RBAC</text>
      <text x="32" y="125" fill="#f5f5f5" font-size="8.5">Permissions via roles</text>
      <text x="32" y="138" fill="#a6a6a6" font-size="7.5">non-discretionary</text>
      <rect x="170" y="90" width="140" height="58" rx="6" fill="#161616" stroke="#343434"/>
      <text x="182" y="109" fill="#d31324" font-size="10" font-weight="700">ABAC</text>
      <text x="182" y="125" fill="#f5f5f5" font-size="8.5">Attributes &amp; context</text>
      <text x="182" y="138" fill="#a6a6a6" font-size="7.5">fine-grained, dynamic</text>
    </svg>`,
};

/* ---------- box details ---------- */
window.AC_DETAILS = {
  "Access Control": {
    d: "The selective restriction of access to a resource — the policies, processes, and mechanisms that decide who or what may view, use, or modify an asset, and under what conditions. It is built from identification, authentication, authorization, and accountability working together.",
    x: "A badge reader on a server-room door combined with file permissions on the data inside both enforce access control — one physical, one logical.",
  },

  "Access Control Principles": {
    d: "The foundational doctrines that guide how access should be granted — keeping privileges minimal, scoped to need, and separated so that no single identity ever holds excessive power.",
    x: "A finance application that gives each clerk only the menus their role needs, splits 'create vendor' from 'approve payment', and hides records outside their assignment.",
  },
  "Separation of Duties": {
    d: "Splitting a sensitive task across two or more people so that no single individual can complete it alone. It is a preventive control against fraud and undetected error, because collusion would be required to abuse the process.",
    x: "One employee submits a wire-transfer request, but a different employee must review and approve it before any money actually moves.",
  },
  "Need to Know": {
    d: "A subject is granted access only to the specific information required for their current task — even when they already hold a clearance level high enough to see more. It limits exposure of data by relevance, not just by rank.",
    x: "A Secret-cleared analyst can open Secret documents, but only those tied to the project they are assigned to — not every Secret file in the agency.",
  },
  "Least Privilege": {
    d: "Subjects receive the minimum permissions necessary to perform their job and nothing more. This shrinks the blast radius if an account is misused, stolen, or compromised, and is the default posture for accounts and services.",
    x: "A help-desk technician can reset user passwords but cannot create new admin accounts or read the payroll database.",
  },

  "Administration Approaches": {
    d: "How the authority to grant, change, and revoke access is organised across an enterprise — defining who owns the decision and where it is enforced. The model chosen drives consistency, speed, and auditability.",
    x: "A bank running one central identity team for every branch, versus letting each branch manage its own users, versus a blend of the two.",
  },
  "Centralized": {
    d: "A single authority or system manages all access decisions for the whole organisation. It delivers consistent policy and clean auditing, but can become a bottleneck and a single point of failure.",
    x: "All authentication funnels through one Active Directory domain (or a central RADIUS/TACACS+ server) owned by a single IAM team.",
  },
  "Decentralized": {
    d: "Access is administered locally by the resource owners or individual departments. It is responsive to local needs and context, but tends toward inconsistent policy, duplicated effort, and orphaned accounts.",
    x: "Each regional office's manager creates and removes their own staff accounts directly on their local systems.",
  },
  "Hybrid": {
    d: "A blend of centralized and decentralized administration: core identity and policy are managed centrally, while day-to-day, resource-level permissions are delegated outward to owners. It balances control with local agility.",
    x: "Corporate IT owns the central directory and password policy, but each department lead approves access to their own SharePoint sites.",
  },

  "Access Controls Services": {
    d: "The four working services that together deliver access control: Identification (claim an identity), Authentication (prove it), Authorization (decide what is allowed), and Accountability (record what was done). Often summarised as IAAA.",
    x: "Logging into a banking app: you enter a username (identification), approve a push prompt (authentication), see only your own accounts (authorization), and every transfer is logged (accountability).",
  },
  "Identification": {
    d: "A subject claiming an identity by presenting a unique label such as a username, account ID, or employee number. Identification asserts who you are but proves nothing by itself; identifiers must be unique and not shared.",
    x: "Typing the username 'r.sudarson' at a login prompt, or a smart card presenting its certificate's subject name.",
  },
  "Authentication": {
    d: "Proving that a claimed identity is genuine by presenting one or more factors — something you know, have, or are. Strength rises with the number of independent factor TYPES combined.",
    x: "After entering your username, you confirm a fingerprint and a one-time code, proving the account is really yours.",
    f: "factors",
  },
  "Authorization": {
    d: "Deciding what an authenticated subject is permitted to do with an object — which actions, on which resources. Driven by an access-control model (DAC, MAC, RBAC, ABAC, etc.) and enforced at the moment of access.",
    x: "An authenticated intern can read the shared drive but is denied permission to delete files or open the HR folder.",
    f: "models",
  },
  "Accountability": {
    d: "Holding subjects answerable for their actions by reliably recording them — audit logs, monitoring, and trails that tie an event back to a unique identity. Accountability depends on strong identification and non-repudiation.",
    x: "An audit log shows that user 'r.sudarson' deleted a record at 14:32, so the action cannot later be denied.",
  },
  "Session Hijacking": {
    d: "An attack where an adversary takes over a valid, authenticated session — usually by stealing or guessing the session token/cookie — to impersonate the user without ever needing their credentials.",
    x: "An attacker captures a session cookie over open Wi-Fi and replays it to act as the logged-in user. Mitigations: TLS everywhere, short timeouts, and token rotation.",
  },
  "Session Management": {
    d: "Controlling the full lifecycle of an authenticated session — how it is established, maintained, timed out, and terminated. Good session management limits the exposure of idle or abandoned sessions.",
    x: "A banking site logs you out after 10 minutes of inactivity and invalidates the token on logout. Controls: idle and absolute timeouts, secure cookies, re-auth for sensitive actions.",
  },

  "Knowledge": {
    d: "The 'something you know' authentication factor — a secret the subject memorises. Cheap and ubiquitous, but vulnerable to guessing, phishing, shoulder-surfing, and reuse across sites.",
    x: "A password, a PIN, or the answer to a security question.",
  },
  "Ownership": {
    d: "The 'something you have' authentication factor — a physical or digital object the subject possesses that proves identity. Stronger than knowledge, but can be lost, stolen, or cloned.",
    x: "A hardware token, a smart card, or a phone running an authenticator app.",
  },
  "Characteristic": {
    d: "The 'something you are' authentication factor — biometrics measuring a unique physiological or behavioural trait. Hard to forge, but probabilistic (it matches within a tolerance) and irrevocable if compromised.",
    x: "A fingerprint, an iris scan, or typing rhythm used to unlock a device.",
  },
  "Single / Multifactor": {
    d: "Single-factor uses one factor TYPE; multifactor (MFA) requires two or more factors from DIFFERENT categories (know / have / are). Two passwords are still single-factor; a password plus a token is true MFA.",
    x: "An ATM withdrawal is MFA: the card (have) plus the PIN (know). A password on its own is single-factor.",
    f: "mfa",
  },
  "Authenticator Assurance Levels (AAL)": {
    d: "NIST SP 800-63B levels describing the strength of the authentication process. AAL1 = single-factor; AAL2 = MFA with approved cryptography; AAL3 = a hardware-based authenticator with verifier-impersonation resistance.",
    x: "A newsletter site may accept AAL1, online banking requires AAL2, and a classified government system demands AAL3.",
    f: "aal",
  },
  "Just-in-time Access": {
    d: "Granting privileged access only for the moment it is needed and revoking it automatically afterward, instead of holding standing privileges. It shrinks the attack surface of always-on admin rights.",
    x: "An engineer requests admin rights to a server; access is approved for one hour and auto-expires, leaving no permanent privilege behind.",
  },

  "Password": {
    d: "A memorised string of characters kept secret by the user — the weakest common authenticator. Strengthened by length, uniqueness, salted hashing at rest, and lockout/breach protections.",
    x: "A 16-character passphrase stored as a salted hash, with account lockout after repeated failed attempts.",
  },
  "Passphrase": {
    d: "A longer sequence of words used like a password. Greater length yields more entropy while staying memorable, making it stronger than a short, complex password.",
    x: "'correct-horse-battery-staple' is easier to remember and harder to crack than 'P@ss12!'.",
  },
  "Questions": {
    d: "Knowledge-based 'security questions' used mainly for account recovery. Weak as an authenticator because answers are often public, guessable, or socially engineered.",
    x: "'What is your mother's maiden name?' is discoverable on social media, so it is a poor standalone factor.",
  },
  "One-time Passwords": {
    d: "A password valid for a single login or a short window, defeating replay and credential reuse. Generated by a token or app, either in sync (time/counter) or as a response to a challenge.",
    x: "A 6-digit code from an authenticator app that changes every 30 seconds.",
    f: "otp",
  },
  "Smart / Memory Cards": {
    d: "Ownership-factor cards. A memory card only stores data (e.g., a magnetic stripe); a smart card has an embedded chip that processes and protects cryptographic secrets, making it far more secure.",
    x: "A chip-and-PIN bank card (smart card) versus an old magnetic-stripe hotel key (memory card).",
  },
  "Hard Tokens": {
    d: "A dedicated physical device that generates or stores authentication secrets. Tamper-resistant and offline, but it costs money to issue and can be lost.",
    x: "An RSA SecurID fob, or a YubiKey plugged into a USB port.",
  },
  "Soft Tokens": {
    d: "Software that generates one-time codes on a general-purpose device such as a phone. Convenient and cheap, but it inherits the device's security posture (malware, cloning).",
    x: "Google Authenticator or Microsoft Authenticator producing rolling TOTP codes.",
  },
  "Synchronous": {
    d: "A token whose code is synchronised with the server by time (TOTP) or by an event counter (HOTP) — no challenge needed; both sides independently compute the same value from a shared secret.",
    x: "A TOTP app and the server both derive the same 6-digit code from the current time and a shared seed.",
    f: "otp",
  },
  "Asynchronous": {
    d: "A challenge-response token: the server sends a unique challenge, the token computes a response using its secret, and the server verifies it. No clock synchronisation is required.",
    x: "A banking dongle shows a challenge number; you key it into the token, which returns the response code to log in.",
    f: "otp",
  },

  "Physiological": {
    d: "Biometrics based on stable physical body traits. Generally high accuracy and hard to change, but they can feel invasive and raise privacy concerns.",
    x: "Fingerprint, iris, retina, facial geometry, hand geometry, and vascular (vein) patterns.",
  },
  "Behavioural": {
    d: "Biometrics based on HOW a person does something — patterns of behaviour rather than physical anatomy. Less intrusive and able to run continuously, but more variable.",
    x: "Keystroke dynamics, voice, signature dynamics, and gait (walking pattern).",
  },
  "Templates": {
    d: "The stored mathematical representation of a biometric sample (not the raw image), created at enrolment and compared against on each authentication. Protecting templates is critical — unlike a password, they cannot be reissued.",
    x: "A fingerprint scanner stores a hashed minutiae template and matches future scans against it, rather than keeping the actual fingerprint image.",
  },
  "Type 1: False Reject": {
    d: "A False Rejection (Type I error) wrongly denies a legitimate, enrolled user. Measured by the False Rejection Rate (FRR). A high FRR hurts usability and frustrates valid users.",
    x: "Your enrolled fingerprint is rejected because your finger is wet, forcing a retry.",
    f: "cer",
  },
  "Type 2: False Accept": {
    d: "A False Acceptance (Type II error) wrongly admits an impostor. Measured by the False Acceptance Rate (FAR). Type II is the dangerous one — it is a security breach, not just an annoyance.",
    x: "A face-recognition system unlocks for someone who merely resembles the owner.",
    f: "cer",
  },
  "Crossover Error Rate": {
    d: "The point where the False Rejection Rate (Type I) and False Acceptance Rate (Type II) curves meet as sensitivity is tuned — also called the Equal Error Rate (EER). A LOWER CER means a more accurate biometric, and it is the key metric for comparing devices.",
    x: "A scanner with a 1% CER is more accurate than one with a 3% CER.",
    f: "cer",
  },
  "Fingerprint": {
    d: "Physiological biometric reading the ridge and minutiae patterns of a fingertip. Cheap, fast, and widely deployed, but spoofable with lifted prints and unusable on damaged fingers.",
    x: "Unlocking a phone or clocking in at work with a fingertip scan.",
  },
  "Hand Geometry": {
    d: "Measures the shape, size, and proportions of the hand and fingers. Low uniqueness (weak for identification) but durable and user-friendly for verification.",
    x: "A hand-geometry reader controlling entry to a data centre.",
  },
  "Vascular Pattern": {
    d: "Scans the unique pattern of veins (usually finger or palm) using near-infrared light. Hard to forge because the pattern is internal and requires live blood flow.",
    x: "Palm-vein scanners used by some banks to authenticate customers at ATMs.",
  },
  "Facial": {
    d: "Maps facial geometry — the distances and ratios between features. Contactless and convenient, but sensitive to lighting, angle, ageing, and presentation (photo/mask) attacks.",
    x: "Apple Face ID, or airport e-gates matching your face to a stored template.",
  },
  "Iris": {
    d: "Reads the richly detailed coloured ring around the pupil. Extremely accurate and stable over a lifetime, and contactless, though it needs cooperative positioning.",
    x: "A high-security facility using an iris scanner at the door.",
  },
  "Retina": {
    d: "Scans the unique blood-vessel pattern at the back of the eye. Among the most accurate biometrics, but intrusive (a near-eye scan) and it can reveal health conditions.",
    x: "A retinal scanner guarding a military or nuclear facility.",
  },
  "Voice": {
    d: "Behavioural/physiological biometric analysing vocal characteristics. Convenient over phone channels, but vulnerable to recordings, illness, and background noise.",
    x: "A bank phone line that verifies you by your spoken passphrase.",
  },
  "Signature": {
    d: "Dynamic signature biometrics measure HOW you sign — speed, pressure, and stroke order — not just the final shape, making forgery much harder than copying a static image.",
    x: "A signature pad capturing pen pressure and timing to verify a document signer.",
  },
  "Key Stroke": {
    d: "Keystroke dynamics analyse typing rhythm — the dwell and flight times between keys. It can authenticate continuously in the background while a user works.",
    x: "A system flags an account when the live typing cadence no longer matches the enrolled user's pattern.",
  },
  "Gait": {
    d: "Recognises a person by their manner of walking, captured on video. Works at a distance without cooperation, but accuracy drops with injury, footwear, or carried load.",
    x: "Surveillance analytics identifying an individual across cameras by their walking style.",
  },

  "Discretionary": {
    d: "Discretionary Access Control (DAC): the data owner decides who gets access, at their discretion, usually through ACLs. Flexible, but prone to privilege creep and hard to govern centrally.",
    x: "A file owner right-clicks a document and shares it with specific colleagues — Windows NTFS permissions are DAC.",
  },
  "Non-discretionary": {
    d: "Access decisions are set centrally by policy or role rather than left to individual owners. Easier to enforce consistently and audit; RBAC and MAC are non-discretionary models.",
    x: "Everyone in the 'Nurse' role automatically gets the same chart-access rights, set by policy — not by any individual owner.",
  },
  "Mandatory": {
    d: "Mandatory Access Control (MAC): the system enforces access using security labels (classifications) and clearances, and users cannot override it. Used where confidentiality is paramount.",
    x: "A user with 'Secret' clearance cannot open a 'Top Secret' file — the OS denies it regardless of anyone's wishes (e.g., SELinux, military systems).",
  },
  "Principle of Access Control": {
    d: "The overarching rule that authorization should be deliberate and minimal — grant only what policy and need require, deny by default, and base decisions on least privilege and need-to-know.",
    x: "A new system defaults to 'deny all', then access is added only where a documented business need exists.",
  },
  "Rule": {
    d: "Rule-Based Access Control: access is governed by global if-then rules applied to everyone, independent of identity. Often layered on top of RBAC and embodied in firewalls and ACLs.",
    x: "A firewall rule 'block all traffic to port 23 (Telnet)' applies uniformly to every user.",
  },
  "Role": {
    d: "Role-Based Access Control (RBAC): permissions attach to roles, and users gain rights by being assigned roles. It scales well and simplifies joiner / mover / leaver changes.",
    x: "Adding an employee to the 'Accountant' role instantly grants the whole accounting permission set.",
  },
  "Attribute / Content": {
    d: "Attribute-Based Access Control (ABAC): decisions evaluate attributes of the subject, object, action, and environment — even the content itself — enabling fine-grained, context-aware policies.",
    x: "Allow access only if department = Finance AND it is business hours AND the device is managed AND the record is not flagged confidential.",
  },
  "Types of RBAC": {
    d: "Variants of role-based control: core RBAC, hierarchical RBAC (senior roles inherit junior permissions), and constrained RBAC (adds separation-of-duties limits on which roles can be combined).",
    x: "Hierarchical RBAC: a 'Manager' role automatically inherits all 'Employee' permissions, plus extra approval rights.",
  },
};
