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
/* ============================================================
   CISSP Domain 5 — Layout 2 (Single Sign-on / Federated Access)
   Extends the AC_FIGS and AC_DETAILS globals defined in
   cissp-domain-5-data.js. Loaded after it, before cissp-domain-5.js.
   ============================================================ */
window.AC_FIGS = window.AC_FIGS || {};
window.AC_DETAILS = window.AC_DETAILS || {};

Object.assign(window.AC_FIGS, {
  ssofim: `
    <svg viewBox="0 0 340 150" class="fig" role="img" aria-label="SSO versus federation">
      <text x="170" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">SSO vs. Federation</text>
      <text x="86" y="33" text-anchor="middle" fill="#d31324" font-size="8.5" font-weight="700">SSO - one organization</text>
      <rect x="20" y="40" width="132" height="96" rx="8" fill="none" stroke="#525e9e" stroke-dasharray="4 3"/>
      <rect x="40" y="52" width="92" height="22" rx="4" fill="#161616" stroke="#d31324"/>
      <text x="86" y="67" text-anchor="middle" fill="#f5f5f5" font-size="8">One login</text>
      <rect x="30" y="100" width="36" height="20" rx="3" fill="#161616" stroke="#343434"/><text x="48" y="114" text-anchor="middle" fill="#a6a6a6" font-size="7">App A</text>
      <rect x="74" y="100" width="36" height="20" rx="3" fill="#161616" stroke="#343434"/><text x="92" y="114" text-anchor="middle" fill="#a6a6a6" font-size="7">App B</text>
      <rect x="116" y="100" width="30" height="20" rx="3" fill="#161616" stroke="#343434"/><text x="131" y="114" text-anchor="middle" fill="#a6a6a6" font-size="7">App C</text>
      <line x1="86" y1="74" x2="48" y2="100" stroke="#343434"/><line x1="86" y1="74" x2="92" y2="100" stroke="#343434"/><line x1="86" y1="74" x2="131" y2="100" stroke="#343434"/>
      <text x="256" y="33" text-anchor="middle" fill="#d31324" font-size="8.5" font-weight="700">Federation - across orgs</text>
      <rect x="184" y="58" width="62" height="40" rx="6" fill="#161616" stroke="#d31324"/><text x="215" y="76" text-anchor="middle" fill="#f5f5f5" font-size="8">Home Org</text><text x="215" y="88" text-anchor="middle" fill="#a6a6a6" font-size="7">(IdP)</text>
      <rect x="274" y="58" width="58" height="40" rx="6" fill="#161616" stroke="#343434"/><text x="303" y="76" text-anchor="middle" fill="#f5f5f5" font-size="8">Partner</text><text x="303" y="88" text-anchor="middle" fill="#a6a6a6" font-size="7">(SP)</text>
      <line x1="246" y1="78" x2="274" y2="78" stroke="#d31324" stroke-width="1.5"/>
      <text x="260" y="72" text-anchor="middle" fill="#a6a6a6" font-size="7">trust</text>
      <text x="258" y="118" text-anchor="middle" fill="#a6a6a6" font-size="7.5">Log in once at home org,</text>
      <text x="258" y="129" text-anchor="middle" fill="#a6a6a6" font-size="7.5">reach the partner's apps</text>
    </svg>`,

  kerberos: `
    <svg viewBox="0 0 340 200" class="fig" role="img" aria-label="Kerberos ticket flow">
      <text x="170" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Kerberos Ticket Flow</text>
      <rect x="126" y="30" width="98" height="120" rx="6" fill="#101010" stroke="#525e9e" stroke-dasharray="4 3"/>
      <text x="175" y="44" text-anchor="middle" fill="#a6a6a6" font-size="8" font-weight="700">KDC</text>
      <rect x="138" y="52" width="74" height="30" rx="5" fill="#161616" stroke="#343434"/>
      <text x="175" y="71" text-anchor="middle" fill="#f5f5f5" font-size="8.5">AS</text>
      <rect x="138" y="104" width="74" height="30" rx="5" fill="#161616" stroke="#343434"/>
      <text x="175" y="123" text-anchor="middle" fill="#f5f5f5" font-size="8.5">TGS</text>
      <rect x="14" y="74" width="72" height="40" rx="6" fill="#161616" stroke="#d31324"/>
      <text x="50" y="91" text-anchor="middle" fill="#f5f5f5" font-size="8.5">User /</text>
      <text x="50" y="103" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Client</text>
      <rect x="264" y="74" width="64" height="40" rx="6" fill="#161616" stroke="#d31324"/>
      <text x="296" y="98" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Service</text>
      <line x1="86" y1="80" x2="138" y2="64" stroke="#d31324" stroke-width="1.3"/>
      <text x="80" y="58" fill="#a6a6a6" font-size="6.8">1 request TGT</text>
      <line x1="138" y1="74" x2="86" y2="90" stroke="#ff7b82" stroke-width="1.3"/>
      <text x="92" y="80" fill="#a6a6a6" font-size="6.8">2 TGT</text>
      <line x1="86" y1="100" x2="138" y2="112" stroke="#d31324" stroke-width="1.3"/>
      <text x="78" y="128" fill="#a6a6a6" font-size="6.8">3 TGT + request</text>
      <line x1="138" y1="126" x2="86" y2="110" stroke="#ff7b82" stroke-width="1.3"/>
      <text x="92" y="120" fill="#a6a6a6" font-size="6.8">4 service ticket</text>
      <line x1="50" y1="114" x2="50" y2="172" stroke="#d31324" stroke-width="1.3"/>
      <line x1="50" y1="172" x2="296" y2="172" stroke="#d31324" stroke-width="1.3"/>
      <line x1="296" y1="172" x2="296" y2="114" stroke="#d31324" stroke-width="1.3"/>
      <text x="173" y="186" text-anchor="middle" fill="#a6a6a6" font-size="7.5">5 present service ticket   -&gt;   6 access granted</text>
    </svg>`,

  saml: `
    <svg viewBox="0 0 340 180" class="fig" role="img" aria-label="SAML single sign-on flow">
      <text x="170" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">SAML SSO Flow</text>
      <rect x="14" y="70" width="70" height="40" rx="6" fill="#161616" stroke="#d31324"/>
      <text x="49" y="87" text-anchor="middle" fill="#f5f5f5" font-size="8.5">User /</text>
      <text x="49" y="99" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Principal</text>
      <rect x="150" y="28" width="84" height="38" rx="6" fill="#161616" stroke="#343434"/>
      <text x="192" y="44" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Service Provider</text>
      <text x="192" y="56" text-anchor="middle" fill="#a6a6a6" font-size="7.5">(relying party)</text>
      <rect x="150" y="116" width="84" height="38" rx="6" fill="#161616" stroke="#d31324"/>
      <text x="192" y="132" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Identity Provider</text>
      <text x="192" y="144" text-anchor="middle" fill="#a6a6a6" font-size="7.5">(authenticates)</text>
      <line x1="84" y1="82" x2="150" y2="50" stroke="#d31324" stroke-width="1.3"/>
      <text x="86" y="66" fill="#a6a6a6" font-size="6.8">1 access app</text>
      <line x1="192" y1="66" x2="192" y2="116" stroke="#ff7b82" stroke-width="1.3"/>
      <text x="196" y="94" fill="#a6a6a6" font-size="6.8">2 redirect</text>
      <line x1="150" y1="135" x2="84" y2="102" stroke="#d31324" stroke-width="1.3"/>
      <text x="86" y="124" fill="#a6a6a6" font-size="6.8">3 authenticate</text>
      <rect x="250" y="40" width="84" height="32" rx="5" fill="#161616" stroke="#525e9e"/>
      <text x="292" y="55" text-anchor="middle" fill="#f5f5f5" font-size="7.5">SAML Assertion</text>
      <text x="292" y="66" text-anchor="middle" fill="#a6a6a6" font-size="7">signed XML</text>
      <line x1="234" y1="120" x2="270" y2="72" stroke="#343434" stroke-width="1.3"/>
      <text x="240" y="172" text-anchor="middle" fill="#a6a6a6" font-size="7.5">4 assertion to SP   -&gt;   5 access granted</text>
    </svg>`,

  trust: `
    <svg viewBox="0 0 340 165" class="fig" role="img" aria-label="Federation trust relationship">
      <text x="170" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Federation Trust Relationship</text>
      <rect x="128" y="26" width="84" height="36" rx="6" fill="#161616" stroke="#d31324"/>
      <text x="170" y="42" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Identity Provider</text>
      <text x="170" y="54" text-anchor="middle" fill="#a6a6a6" font-size="7.5">(authenticates user)</text>
      <rect x="26" y="112" width="86" height="36" rx="6" fill="#161616" stroke="#343434"/>
      <text x="69" y="128" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Principal / User</text>
      <text x="69" y="140" text-anchor="middle" fill="#a6a6a6" font-size="7.5">(the subject)</text>
      <rect x="228" y="112" width="94" height="36" rx="6" fill="#161616" stroke="#343434"/>
      <text x="275" y="128" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Relying Party / SP</text>
      <text x="275" y="140" text-anchor="middle" fill="#a6a6a6" font-size="7.5">(grants access)</text>
      <line x1="112" y1="120" x2="228" y2="120" stroke="#d31324" stroke-width="1.5" stroke-dasharray="5 3"/>
      <text x="170" y="113" text-anchor="middle" fill="#d31324" font-size="7.5">pre-established trust</text>
      <line x1="98" y1="112" x2="150" y2="62" stroke="#343434"/>
      <text x="100" y="92" fill="#a6a6a6" font-size="7">1 authenticate</text>
      <line x1="206" y1="62" x2="258" y2="112" stroke="#343434"/>
      <text x="228" y="88" fill="#a6a6a6" font-size="7">2 assertion</text>
    </svg>`,
});

Object.assign(window.AC_DETAILS, {
  "Single Sign-on / Federated Access": {
    d: "Two related approaches that let a user authenticate once and reach many systems with a single set of credentials. SSO works within one organization; federation extends that trust across organizational boundaries.",
    x: "Logging into your corporate laptop and instantly reaching email, HR, and the wiki (SSO) — then using that same identity to sign in to a partner's portal (federation).",
  },

  "Single Sign-on": {
    t: "Single Sign-on (SSO)",
    d: "Lets a user authenticate once and access multiple systems WITHIN the same organization without re-entering credentials. Improves usability and centralises authentication, but a stolen SSO credential exposes everything — a single point of failure.",
    x: "After one Active Directory login, an employee opens email, the intranet, and file shares without logging in again.",
    f: "ssofim",
  },
  "Federated Identity Management (FIM)": {
    t: "Federated Identity Management (FIM)",
    d: "Extends single sign-on ACROSS multiple organizations or domains by establishing trust between an identity provider and relying parties. Users authenticate with their home organization and reach partner services without separate accounts.",
    x: "Signing in to a third-party SaaS app with your company Google or Microsoft account.",
    f: "ssofim",
  },

  "Kerberos": {
    d: "A ticket-based SSO authentication protocol that uses SYMMETRIC encryption and a trusted Key Distribution Center (KDC). The client gets a Ticket Granting Ticket (TGT), then exchanges it for service tickets — passwords never cross the network. Time-sensitive, so clocks must be synchronised.",
    x: "Windows Active Directory domain logon uses Kerberos under the hood to grant access to file and print services.",
    f: "kerberos",
  },
  "Sesame": {
    d: "Secure European System for Applications in a Multi-vendor Environment — a Kerberos successor that adds PUBLIC-KEY (asymmetric) cryptography and uses Privileged Attribute Certificates (PACs) to fix Kerberos weaknesses such as plaintext key storage and the single point of failure.",
    x: "An identity system extending Kerberos-style SSO with public-key authentication for stronger, more scalable trust.",
  },
  "kerberos-components": {
    t: "Components — Kerberos",
    d: "The moving parts of a Kerberos exchange: the user/client, the KDC (housing the Authentication Service and Ticket Granting Service), the tickets (TGT and service tickets), and the target service.",
    x: "In AD: the workstation (client), the domain controller (KDC), the TGT issued at logon, and the file server (service).",
  },
  "kerberos-attacks": {
    t: "Attacks — Kerberos",
    d: "Kerberos's trust in tickets and its reliance on the KDC create a distinct attack surface: attacks either steal/forge tickets to impersonate a principal, or exploit the KDC's inability to detect offline password guessing. Every attack here ultimately abuses the fact that a valid-looking ticket is treated as proof of identity.",
    x: "A red team obtains domain admin not by cracking a password, but by forging a Golden Ticket from a stolen KRBTGT hash.",
  },
  "kerb-pass-the-ticket": {
    t: "Pass-the-Ticket",
    d: "An attacker steals a valid Kerberos ticket (TGT or service ticket) from a compromised machine's memory and reuses it on another system to impersonate the victim — no password needed, just the live ticket.",
    x: "Malware dumps a logged-in admin's TGT from LSASS memory and an attacker replays it from their own machine to access file shares as that admin.",
  },
  "kerb-kerberoasting": {
    t: "Kerberoasting",
    d: "An attacker with any valid domain account requests service tickets (TGS) for service accounts, then cracks the encrypted portion offline (it's encrypted with the service account's password hash) to recover that account's plaintext password — no elevated access needed to request the tickets.",
    x: "An attacker requests TGS tickets for every SPN in the domain, then runs an offline cracking tool against them to recover a weak service-account password.",
  },
  "kerb-golden-ticket": {
    t: "Golden Ticket",
    d: "The most severe Kerberos attack: forging a TGT using the KDC's own KRBTGT account hash. A forged TGT bypasses the Authentication Service entirely, granting the attacker complete, persistent control over the domain — they can mint tickets for any user, including ones that don't exist.",
    x: "After dumping the KRBTGT hash from a domain controller, an attacker forges TGTs to impersonate any user at will, indefinitely — even after that user's password is reset.",
  },
  "kerb-silver-ticket": {
    t: "Silver Ticket",
    d: "A less severe cousin of the Golden Ticket: forging a Service Ticket using a specific service account's hash (not the KRBTGT). Grants access to only that one service, but is harder to detect because it never touches the KDC/Authentication Service.",
    x: "An attacker forges a Service Ticket for a SQL server using the service account's hash, gaining access to that database without ever contacting the domain controller.",
  },
  "kerb-password-guessing": {
    t: "Password Guessing (KDC Weakness)",
    d: "Because the Authentication Service will respond to any AS-REQ, the KDC cannot itself detect or throttle a dictionary or brute-force attack against initial authentication — this is also the basis of AS-REP Roasting, where accounts with pre-authentication disabled can be offline-cracked from a single unauthenticated request.",
    x: "An attacker scripts repeated AS-REQ logon attempts against a list of usernames, and the KDC has no built-in way to notice the pattern.",
  },
  "User / Client": {
    d: "The principal requesting access — the user and their workstation that initiate the Kerberos exchange and cache the tickets they receive.",
    x: "An employee's laptop logging into the Windows domain.",
  },
  "Key Distribution Center": {
    d: "The trusted third party at the heart of Kerberos. The KDC holds all the secret keys and contains both the Authentication Service and the Ticket Granting Service. Its compromise breaks the whole realm (single point of failure).",
    x: "A Windows domain controller acting as the KDC for the domain.",
  },
  "Authentication Service": {
    d: "The KDC component that verifies the user at logon and issues the Ticket Granting Ticket (TGT). It authenticates the principal before any service tickets are possible.",
    x: "The AS validates the user's logon and returns a TGT encrypted with the user's key.",
  },
  "Ticket Granting Ticket (TGT)": {
    d: "A time-stamped credential issued by the Authentication Service that proves the user has authenticated. The client presents the TGT to the TGS to obtain service tickets, avoiding repeated password entry.",
    x: "After morning logon, your cached TGT lets you reach new servers all day without re-entering your password — until it expires.",
  },
  "Ticket Granting Service": {
    d: "The KDC component that accepts a valid TGT and issues service tickets for specific target services. It grants access tokens without re-checking the user's password.",
    x: "Presenting your TGT to the TGS to obtain a ticket for the file server.",
  },
  "Service Tickets": {
    d: "Credentials issued by the TGS for a specific service, presented by the client to that service to prove authorised access. Encrypted so only the target service can validate them.",
    x: "A ticket that lets your client mount a specific network share.",
  },
  "Service": {
    d: "The target resource the user ultimately wants. It trusts tickets issued by the KDC and grants access when a valid service ticket is presented.",
    x: "The file server, print server, or application the user is connecting to.",
  },
  "Symmetric encryption only": {
    d: "Kerberos relies solely on symmetric (shared-secret) cryptography — fast and simple, but it requires secure key distribution and a trusted KDC that stores every key.",
    x: "The same secret key encrypts and decrypts a Kerberos ticket between the KDC and the service.",
  },
  "Symmetric & Asymmetric encryption": {
    d: "Sesame improves on Kerberos by adding asymmetric (public-key) cryptography on top of symmetric encryption, easing key distribution and scaling trust without one all-knowing KDC.",
    x: "Sesame uses public-key certificates (PACs) so parties can establish trust without pre-sharing a single secret key.",
  },

  "Trust Relationship": {
    d: "The agreement that underpins federation: a relying party (service provider) agrees to trust the identity assertions made by an identity provider. Without this pre-established trust, federated SSO cannot work.",
    x: "A SaaS vendor configures your company's Azure AD as a trusted identity provider so your staff can log in with corporate credentials.",
    f: "trust",
  },
  "Principal / User": {
    d: "The end user (subject) whose identity is being federated. They authenticate once with their identity provider and are then recognised by relying parties.",
    x: "An employee logging in once to reach a partner's portal.",
  },
  "Identity Provider": {
    d: "The party that authenticates the user and issues identity assertions (the IdP). Relying parties trust the IdP rather than authenticating the user themselves.",
    x: "Okta, Azure AD, or Google acting as the IdP that vouches for the user.",
  },
  "Relying Party / Service Provider": {
    d: "The application or service that consumes identity assertions from the IdP and grants access (the SP / RP). It trusts the IdP's word instead of holding the user's credentials.",
    x: "A travel-booking SaaS that logs you in based on your company IdP's SAML assertion.",
  },
  "SAML": {
    d: "Security Assertion Markup Language — an XML-based standard for exchanging authentication and authorization ASSERTIONS between an identity provider and a service provider. The backbone of enterprise web SSO and federation.",
    x: "Clicking 'Log in with company SSO' on a SaaS app triggers a SAML assertion from your IdP to the app.",
    f: "saml",
  },
  "Tokens": {
    d: "The security tokens carried in a federation exchange that package the user's authenticated identity and attributes for the relying party to consume.",
    x: "A signed SAML token asserting 'this user is authenticated and belongs to Finance'.",
  },
  "Assertions written in XML": {
    d: "SAML assertions are statements — about authentication, attributes, and authorization decisions — encoded in XML and digitally signed so the service provider can trust them.",
    x: "An AttributeStatement in a SAML assertion conveying the user's email and group membership.",
  },
  "saml-components": {
    t: "Components — SAML",
    d: "The building blocks of SAML: Assertions (the statements), Protocols (request/response rules), Bindings (how messages ride on transports like HTTP), and Profiles (combinations for specific use cases such as Web Browser SSO).",
    x: "The Web Browser SSO Profile uses the HTTP-POST Binding to deliver an Assertion via the Authn Request/Response Protocol.",
  },
  "Profiles": {
    d: "SAML profiles define how assertions, protocols, and bindings combine to solve a specific use case. The Web Browser SSO Profile is the most common.",
    x: "The Web Browser SSO Profile standardises browser-based federated login.",
  },
  "Bindings": {
    d: "SAML bindings specify how SAML protocol messages are mapped onto standard transport and messaging protocols.",
    x: "HTTP-Redirect and HTTP-POST bindings carry SAML messages through the browser.",
  },
  "Protocol": {
    d: "SAML protocols define the request/response message formats — for example, how a service provider asks an IdP to authenticate a user and what comes back.",
    x: "The Authentication Request Protocol: the SP sends an AuthnRequest and the IdP returns a Response with an assertion.",
  },
  "Assertion": {
    d: "The core SAML payload — a signed XML statement conveying authentication, attribute, and/or authorization-decision information about a subject.",
    x: "An assertion stating 'subject X authenticated at 09:00 via MFA and is in the Managers group'.",
  },
  "WS-Federation": {
    d: "A federation protocol from the WS-* family (Microsoft-led) that enables identity federation across security domains — an alternative to SAML often seen in Microsoft ecosystems.",
    x: "Older ADFS deployments federating between partner organisations via WS-Federation.",
  },
  "OpenID": {
    d: "OpenID Connect (OIDC) — a modern identity layer built on top of OAuth 2.0 that adds authentication, returning a signed ID token (a JWT). Popular for consumer and mobile 'Log in with...' flows.",
    x: "'Sign in with Google' on a website uses OpenID Connect.",
  },
  "OAuth": {
    d: "OAuth 2.0 — an AUTHORIZATION framework (not authentication) that lets a user grant a third-party app limited, delegated access to their resources without sharing their password, using access tokens.",
    x: "Allowing a photo-printing app to access your Google Photos without giving it your Google password.",
  },

  "iam-attacks": {
    t: "IAM Attacks",
    d: "The attack surface that sits on top of SSO and federation itself — once one identity unlocks many systems, stealing or abusing that identity's session, trust relationship, or privilege level becomes far more valuable to an attacker than attacking any single application.",
    x: "An attacker who steals one SSO session cookie can move laterally across every connected app the user was entitled to, without ever seeing a password.",
  },
  "iam-session-fixation": {
    t: "Session Fixation",
    d: "The attacker sets or plants a known session ID on the victim BEFORE they log in (e.g. via a crafted link), then simply uses that same known ID once the victim authenticates — hijacking the session without ever having to steal a token. Defeated by regenerating the session ID at the moment of authentication.",
    x: "An attacker emails a link containing a pre-set session ID; when the victim logs in using that link, the attacker reuses the same ID to ride the now-authenticated session.",
  },
  "iam-replay-attack": {
    t: "Replay Attack",
    d: "Capturing valid authentication data (a ticket, token, or credential exchange) in transit and re-sending it later to gain unauthorised access. Defeated by time-stamps, nonces, and one-time values — the same defence Kerberos tickets and OTPs rely on.",
    x: "An attacker sniffs an unencrypted authentication exchange and resends the captured data to authenticate as the victim minutes later.",
  },
  "iam-credential-stuffing": {
    t: "Credential Stuffing",
    d: "Replaying username/password pairs stolen from one breached site against many other sites, exploiting the fact that users reuse passwords. Especially dangerous against an SSO front door, since one reused password can unlock everything behind it.",
    x: "An attacker takes a leaked list of email/password pairs from an unrelated breach and scripts login attempts against the corporate SSO portal.",
  },
  "iam-privilege-escalation": {
    t: "Privilege Escalation",
    d: "Gaining rights beyond what was granted. Comes in two directions the exam distinguishes precisely: vertical (climbing to a higher privilege tier) and horizontal (moving sideways to another account's resources at the same tier). Both exploit missing boundaries — just different ones.",
    x: "A support ticket system that lets a standard agent invoke an admin-only API endpoint is a privilege-escalation flaw.",
  },
  "iam-vertical-privesc": {
    t: "Vertical Privilege Escalation",
    d: "A lower-privileged user elevates themselves to a higher privilege level, exploiting a vulnerability or misconfiguration to gain rights they were never assigned.",
    x: "A standard employee exploits an unpatched flaw in an internal app to gain local administrator rights on their workstation.",
  },
  "iam-horizontal-privesc": {
    t: "Horizontal Privilege Escalation",
    d: "A user gains access to another user's resources at the SAME privilege level, without elevating their own rights. Often overlooked because no privilege boundary is technically crossed — an account boundary is. Across a network, this is also called lateral movement.",
    x: "A bank customer manipulates a URL parameter to view a different customer's account statement, without ever needing admin rights.",
  },
  "iam-transitive-trust": {
    t: "Transitive Trust (Federation Risk)",
    d: "Because every relying party in a federation trusts the identity provider's assertions, a single IdP compromise cascades to expose every application that relies on it — the 'all eggs in one basket' problem of federation at scale. Closely related: SAML session tokens that aren't revoked when an account is disabled break real-time deprovisioning, leaving a window where a terminated user's token still works.",
    x: "An attacker who compromises the corporate IdP can now forge assertions and log in to every SaaS app the company federates with — HR, finance, code repos — in one stroke.",
  },
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

  /* ---- one-time password generation styles ---- */
  var OTP = [
    ["SYNCHRONOUS", "time (TOTP) or counter (HOTP)", "token &amp; server stay in step", "code changes every ~30s"],
    ["ASYNCHRONOUS", "challenge &rarr; response", "server sends a nonce, token answers", "no clocks to drift"]
  ];
  set("Synchronous", "c5otp0"); G["c5otp0"] = cols("OTP Generation Styles", OTP, 0);
  set("Asynchronous", "c5otp1"); G["c5otp1"] = cols("OTP Generation Styles", OTP, 1);

  /* ---- biometric error types ---- */
  var BIO = [
    ["TYPE 1: FALSE REJECT", "a LEGITIMATE user is denied", "an annoyance (FRR)", "tune sensitivity down"],
    ["TYPE 2: FALSE ACCEPT", "an IMPOSTOR is let in", "the SECURITY failure (FAR)", "the worst error type"],
    ["CER / EER", "where FAR = FRR", "the accuracy benchmark", "lower CER = better system"]
  ];
  set("Type 1: False Reject", "c5bio0"); G["c5bio0"] = cols("Biometric Error Types", BIO, 0);
  set("Type 2: False Accept", "c5bio1"); G["c5bio1"] = cols("Biometric Error Types", BIO, 1);
  set("Crossover Error Rate", "c5bio2"); G["c5bio2"] = cols("Biometric Error Types", BIO, 2);

  /* ---- SSO vs federation ---- */
  var SF = [
    ["SINGLE SIGN-ON", "one login &rarr; many apps", "inside ONE organization", "convenience, bigger blast radius"],
    ["FEDERATED IDENTITY", "SSO ACROSS organizations", "IdP asserts to SP", "SAML &middot; OIDC &middot; trust required"]
  ];
  set("Single Sign-on", "c5sf0"); G["c5sf0"] = cols("SSO vs. Federation", SF, 0);
  set("Federated Identity Management (FIM)", "c5sf1"); G["c5sf1"] = cols("SSO vs. Federation", SF, 1);
})();
