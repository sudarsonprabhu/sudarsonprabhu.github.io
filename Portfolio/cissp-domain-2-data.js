/* ============================================================
   CISSP Domain 2 — Layout 1 hover details (Asset Classification)
   Two globals consumed by cissp-domain-2.js:
     - AC_FIGS    : named inline-SVG infographics (red/black theme)
     - AC_DETAILS : box label (or data-ac-key) ->
                    { t: title, d: description, x: example,
                      f: optional figure name }
   A box is matched by its trimmed text (or its data-ac-key).
   ============================================================ */

window.AC_FIGS = window.AC_FIGS || {};
Object.assign(window.AC_FIGS, {
  states: `
    <svg viewBox="0 0 330 120" class="fig" role="img" aria-label="Three data states">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Three Data States</text>
      <rect x="10" y="28" width="98" height="74" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="59" y="48" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">AT REST</text>
      <text x="59" y="68" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Stored</text>
      <text x="59" y="84" text-anchor="middle" fill="#a6a6a6" font-size="8">Encrypt + ACL</text>
      <rect x="116" y="28" width="98" height="74" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="165" y="48" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">IN MOTION</text>
      <text x="165" y="68" text-anchor="middle" fill="#f5f5f5" font-size="8.5">Travelling</text>
      <text x="165" y="84" text-anchor="middle" fill="#a6a6a6" font-size="8">TLS / VPN</text>
      <rect x="222" y="28" width="98" height="74" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="271" y="48" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">IN USE</text>
      <text x="271" y="68" text-anchor="middle" fill="#f5f5f5" font-size="8.5">In memory</text>
      <text x="271" y="84" text-anchor="middle" fill="#a6a6a6" font-size="8">Hardest</text>
    </svg>`,

  sanitise: `
    <svg viewBox="0 0 330 110" class="fig" role="img" aria-label="Clearing, purging, destruction ladder">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Sanitisation Strength</text>
      <rect x="10" y="30" width="96" height="58" rx="7" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="58" y="52" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">CLEARING</text>
      <text x="58" y="70" text-anchor="middle" fill="#a6a6a6" font-size="8">Overwrite</text>
      <text x="58" y="82" text-anchor="middle" fill="#a6a6a6" font-size="8">reusable</text>
      <rect x="117" y="30" width="96" height="58" rx="7" fill="#161616" stroke="#8a0f1a" stroke-width="1.5"/>
      <text x="165" y="52" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">PURGING</text>
      <text x="165" y="70" text-anchor="middle" fill="#a6a6a6" font-size="8">Degauss</text>
      <text x="165" y="82" text-anchor="middle" fill="#a6a6a6" font-size="8">lab-proof</text>
      <rect x="224" y="30" width="96" height="58" rx="7" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="272" y="52" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">DESTROY</text>
      <text x="272" y="70" text-anchor="middle" fill="#a6a6a6" font-size="8">Shred</text>
      <text x="272" y="82" text-anchor="middle" fill="#a6a6a6" font-size="8">no reuse</text>
      <text x="112" y="62" text-anchor="middle" fill="#d31324" font-size="13">&#8594;</text>
      <text x="219" y="62" text-anchor="middle" fill="#d31324" font-size="13">&#8594;</text>
    </svg>`,

  roles: `
    <svg viewBox="0 0 330 130" class="fig" role="img" aria-label="Owner versus custodian">
      <text x="165" y="14" text-anchor="middle" fill="#f5f5f5" font-size="11" font-weight="700">Owner vs. Custodian</text>
      <rect x="14" y="26" width="142" height="92" rx="8" fill="#161616" stroke="#d31324" stroke-width="1.5"/>
      <text x="85" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">DATA OWNER</text>
      <text x="85" y="66" text-anchor="middle" fill="#f5f5f5" font-size="8.5">ACCOUNTABLE</text>
      <text x="85" y="82" text-anchor="middle" fill="#a6a6a6" font-size="8">Sets classification</text>
      <text x="85" y="96" text-anchor="middle" fill="#a6a6a6" font-size="8">Senior / business</text>
      <text x="85" y="110" text-anchor="middle" fill="#a6a6a6" font-size="8">Cannot delegate</text>
      <rect x="174" y="26" width="142" height="92" rx="8" fill="#161616" stroke="#343434" stroke-width="1.5"/>
      <text x="245" y="46" text-anchor="middle" fill="#d31324" font-size="10" font-weight="700">CUSTODIAN</text>
      <text x="245" y="66" text-anchor="middle" fill="#f5f5f5" font-size="8.5">RESPONSIBLE</text>
      <text x="245" y="82" text-anchor="middle" fill="#a6a6a6" font-size="8">Implements controls</text>
      <text x="245" y="96" text-anchor="middle" fill="#a6a6a6" font-size="8">IT / operations</text>
      <text x="245" y="110" text-anchor="middle" fill="#a6a6a6" font-size="8">Backups, encryption</text>
    </svg>`
});

window.AC_DETAILS = window.AC_DETAILS || {};
Object.assign(window.AC_DETAILS, {
  "Asset Classification": {
    t: "Domain 2 — Asset Security",
    d: "The data-centric domain (10% of the exam). Its whole logic is a chain: inventory what you have, assign ownership, classify assets by their value, protect them according to that classification, then retain and destroy them defensibly — and assess & review the whole loop.",
    x: "A hospital inventories its systems, names a data owner for patient records, classifies them 'Confidential', encrypts them at rest and in transit, and crypto-shreds them at end of life."
  },

  /* ----- top-level ----- */
  "Asset Inventory": {
    t: "Asset Inventory",
    d: "A complete, current register of every asset the organisation holds — hardware, software, and data. You cannot protect, classify, or account for what you don't know you have, so the inventory is the foundation of the entire domain.",
    x: "A CMDB lists every laptop, server, SaaS app and database with its owner, location and classification, so nothing slips through unmanaged ('shadow IT')."
  },
  "Assign Ownership": {
    t: "Assign Ownership",
    d: "Every asset must have a named owner who is accountable for it. Ownership is what makes classification and protection decisions possible — without an owner, no one is responsible for deciding how sensitive an asset is or how it must be handled.",
    x: "The Head of HR is named owner of all employee records and is therefore the person who decides their classification and who may access them."
  },
  "Assess & Review": {
    t: "Assess & Review",
    d: "Classification and protection are not one-time events. Asset value, threats and regulations change, so classifications, controls and the inventory itself must be periodically reviewed and updated. This closes the loop and keeps the programme current.",
    x: "An annual review re-classifies a product design from 'Confidential' down to 'Public' after the product is launched and the design is published."
  },

  /* ----- Classify branch ----- */
  "classify": {
    t: "Classify — based on Value",
    d: "Grouping assets by their sensitivity and value to the organisation, then assigning a label. Classification is always driven by VALUE — the higher the value (and the greater the harm if it leaked), the higher the classification and the stronger the required protection.",
    x: "Source code worth millions is classified 'Highly Confidential'; the public marketing brochure is 'Public'. The label, not a guess, then dictates the controls."
  },
  "data-classification-policy": {
    t: "Data Classification Policy",
    d: "The governing document that defines the classification levels, the criteria for each, who may classify, and how each level must be handled. Everything else in classification flows from this policy, which itself sits in a hierarchy of policy → standards → procedures → guidelines.",
    x: "A policy stating: 'Data causing severe harm if disclosed = Confidential; must be encrypted, access-logged, and never emailed externally.'"
  },
  "Standards": {
    t: "Standards",
    d: "Mandatory rules that specify uniform use of technologies or controls to support policy. Standards make a policy concrete and enforceable — they are compulsory, not optional.",
    x: "A standard mandating AES-256 encryption for all 'Confidential' data at rest, on every platform, with no exceptions."
  },
  "Procedures": {
    t: "Procedures",
    d: "Detailed, step-by-step instructions for performing a specific task to meet a policy or standard. Procedures are mandatory and tell staff exactly how to do something.",
    x: "A documented procedure listing each step to securely wipe a returned laptop before it is re-issued."
  },
  "Baselines": {
    t: "Baselines",
    d: "A mandatory minimum level of security that a system or asset must meet — a consistent floor that all comparable systems must reach before they are considered acceptable.",
    x: "A server hardening baseline requiring disabled guest accounts, host firewall on, and all critical patches applied before a server may go live."
  },
  "Guidelines": {
    t: "Guidelines",
    d: "Recommended, discretionary advice and best practice. Guidelines are the ONLY item in the governance hierarchy that is non-mandatory — they help where a strict rule isn't practical.",
    x: "A guideline suggesting (not requiring) that strong passphrases use four random words for easier memorability."
  },
  "Classification": {
    t: "Classification (assigning the label)",
    d: "The act of placing an asset into a defined sensitivity level and attaching that level to it. Government uses Top Secret / Secret / Confidential / Unclassified; commercial uses Confidential / Private / Sensitive / Public. Don't confuse this with categorization (impact-based).",
    x: "After review, a merger document is classified 'Secret' because its disclosure would cause grave competitive harm."
  },
  "Security Label": {
    t: "Security Label (system-readable)",
    d: "System-readable metadata attached to data that the OS or application uses to ENFORCE access control automatically. Labels drive mandatory access control decisions without a human in the loop.",
    x: "A file tagged with a 'Secret' label; the OS automatically blocks any user without Secret clearance from opening it."
  },
  "System Readable": {
    t: "System Readable",
    d: "Information encoded so that a computer can read and act on it automatically — the defining property of a security label, which a system uses to make enforcement decisions.",
    x: "A classification attribute stored in file metadata that the access-control engine reads to permit or deny a request."
  },
  "Security Marking": {
    t: "Security Marking (human-readable)",
    d: "A human-readable indication of classification — a banner, header, footer or stamp — so that PEOPLE know how to handle the asset. Markings inform humans; labels enforce on systems.",
    x: "A red 'CONFIDENTIAL' banner printed at the top and bottom of every page of a report so staff handle it appropriately."
  },
  "Human Readable": {
    t: "Human Readable",
    d: "Information presented so that a person can read and understand it — the defining property of a security marking, which tells a human how the asset must be treated.",
    x: "The word 'CONFIDENTIAL' watermarked across a PDF so any reader instantly knows its sensitivity."
  },
  "Categorization": {
    t: "Categorization (impact-based)",
    d: "Grouping information systems by the IMPACT that would result from a loss of confidentiality, integrity or availability — the Low / Moderate / High levels from FIPS 199. Classification is about sensitivity/value; categorization is about impact. The exam tests this distinction.",
    x: "A payroll system is categorized 'High' impact because its compromise would cause severe harm to finances and privacy."
  },

  /* ----- Protect branch ----- */
  "protect": {
    t: "Protect — based on Classification",
    d: "Applying controls proportional to an asset's classification. The label set during 'Classify' now drives every protection decision — who can access it (roles), how it's secured in each data state (rest / motion / use), how it's archived and retained, and how it's eventually destroyed.",
    x: "Because a dataset is 'Confidential', it automatically inherits mandatory encryption, restricted roles, logged access and a defined destruction method."
  },
  "Roles": {
    t: "Data Roles",
    d: "The defined responsibilities for data: owner/controller (accountable, sets classification), custodian (implements protection), steward (data quality), processor (acts on the controller's behalf), and subject (the individual the data is about). Precise role boundaries are a favourite exam topic.",
    x: "The data owner says 'this must be encrypted'; the custodian (IT) actually configures and runs the encryption.",
    f: "roles"
  },
  "Data Owner / Controller": {
    t: "Data Owner / Controller",
    d: "A senior business role that is ACCOUNTABLE for the data — decides its classification, who may access it, and why it is collected and used. Accountability cannot be delegated. Under GDPR the 'controller' determines the purposes and means of processing.",
    x: "The Finance Director, as owner of financial data, signs off its 'Confidential' classification and approves who gets access.",
    f: "roles"
  },
  "Data Processor": {
    t: "Data Processor",
    d: "A party that processes personal data ON BEHALF OF the controller, strictly under the controller's instructions (a GDPR term). The processor does not decide why or how data is used — it just carries out the controller's directions.",
    x: "A cloud payroll provider processes employee data only as instructed by the employer (the controller)."
  },
  "Data Custodian": {
    t: "Data Custodian",
    d: "The hands-on protector — typically IT/operations — RESPONSIBLE for implementing and maintaining the controls the owner mandates: backups, encryption, patching, and access provisioning. Custodians execute; owners decide.",
    x: "A database administrator configures nightly encrypted backups and applies patches to protect data the owner has classified 'Confidential'.",
    f: "roles"
  },
  "Data Steward": {
    t: "Data Steward",
    d: "Responsible for the data's QUALITY, business meaning and metadata — ensuring it is accurate, consistent, and fit for its business purpose. A governance/business role distinct from the technical custodian.",
    x: "A data steward defines the canonical format for customer addresses and reconciles duplicate records so reporting is reliable."
  },
  "Data Subject": {
    t: "Data Subject",
    d: "The living individual whom a piece of personal data is about. Privacy laws (GDPR, etc.) grant data subjects rights — access, correction, erasure — over their own data.",
    x: "A customer whose name, email and purchase history a company holds is the data subject for that personal data."
  },
  "rest": {
    t: "Data at Rest",
    d: "Data that is stored — on disk, in databases, on backup tapes or USB drives. Protect it primarily with encryption, strong access control, and verified backups so it stays confidential and recoverable even if the media is stolen.",
    x: "Laptops use full-disk encryption (BitLocker), so a stolen laptop reveals nothing without the key.",
    f: "states"
  },
  "Encryption": {
    t: "Encryption (at rest)",
    d: "Transforming stored data into unreadable ciphertext so it is useless without the key. The primary control for data at rest — full-disk, database, or file-level — typically using strong symmetric algorithms like AES-256.",
    x: "A database encrypts its 'Confidential' columns so a stolen backup file cannot be read."
  },
  "Access Control": {
    t: "Access Control",
    d: "Restricting who can read, modify or delete stored data based on identity and authorisation, enforcing least privilege. Works alongside encryption — encryption protects the media, access control protects live access.",
    x: "Only members of the 'HR' group can open the salary spreadsheet; everyone else is denied by file permissions."
  },
  "Backups": {
    t: "Backups",
    d: "Secure, tested copies of data that protect its AVAILABILITY and INTEGRITY against loss, corruption or ransomware. Backups themselves are data at rest and must be encrypted and access-controlled. A backup is only real once a restore has been tested.",
    x: "Encrypted off-site backups let a company recover its records after a ransomware attack without paying."
  },
  "motion": {
    t: "Data in Motion (in transit)",
    d: "Data travelling across a network. The risk is interception, so protect it with encryption in transit. Three layers shown here: end-to-end, link, and onion routing.",
    x: "A browser uses HTTPS (TLS) so login credentials can't be read by anyone sniffing the Wi-Fi.",
    f: "states"
  },
  "End-to-End": {
    t: "End-to-End Encryption",
    d: "Data is encrypted at the sender and only decrypted at the final recipient — it stays encrypted through every intermediate hop. Even the relaying servers cannot read it. Strongest confidentiality for data in transit.",
    x: "Signal/WhatsApp messages: encrypted on your phone and only decryptable on the recipient's phone, not on the provider's servers."
  },
  "Link": {
    t: "Link Encryption",
    d: "Data is encrypted hop-by-hop: decrypted and re-encrypted at each node along the path. It protects each individual link (including the headers) but the data is briefly in cleartext inside each intermediate device.",
    x: "A leased line between two offices encrypts all traffic on the wire, decrypting at each router before re-encrypting onward."
  },
  "Onion": {
    t: "Onion Routing",
    d: "Data is wrapped in multiple nested layers of encryption and passed through a series of relays, each peeling one layer. It provides anonymity as well as confidentiality, since no single relay knows both source and destination.",
    x: "The Tor network routes traffic through three relays, each removing one encryption layer, hiding who is talking to whom."
  },
  "use": {
    t: "Data in Use",
    d: "Data loaded into memory and actively being processed. It is the HARDEST state to protect because it must be decrypted to be used. Defences include secure enclaves, memory protection, and emerging homomorphic encryption.",
    x: "A spreadsheet open and being edited sits decrypted in RAM — a memory-scraping malware could read it even though the file on disk is encrypted.",
    f: "states"
  },
  "archive": {
    t: "Archive",
    d: "Moving data that is no longer actively used into long-term storage. Archived data still carries its classification and must remain protected, retrievable, and subject to the retention schedule.",
    x: "Closed customer accounts are moved to encrypted cold storage, kept for the legally required period, then destroyed."
  },
  "Retention Period": {
    t: "Retention Period",
    d: "The defined length of time data must be kept before it can be destroyed, driven by legal, regulatory and business requirements. Keep data long enough to satisfy obligations — but no longer, because excess data is liability.",
    x: "Tax records are retained for 7 years to meet regulation, then securely destroyed on schedule."
  },

  /* ----- Defensible Destruction ----- */
  "Defensible Destruction": {
    t: "Defensible Destruction",
    d: "Destroying data in a documented, policy-driven, legally defensible way at the end of its retention period — so the organisation can prove it disposed of data properly and consistently (not selectively to hide evidence). Spans clearing, purging and physical destruction.",
    x: "A company follows its destruction policy and keeps certificates of destruction, so it can demonstrate in court that disposal was routine and proper.",
    f: "sanitise"
  },
  "Clearing": {
    t: "Clearing",
    d: "Overwriting media with non-sensitive data so the original cannot be recovered by normal (keyboard/software) means. The media stays usable and is acceptable for REUSE within the organisation. The weakest of the three sanitisation levels.",
    x: "Overwriting a hard drive with zeros before re-issuing it to another employee in the same department.",
    f: "sanitise"
  },
  "Purging": {
    t: "Purging",
    d: "A stronger sanitisation that removes data so it resists even LABORATORY recovery — using degaussing or advanced multi-pass methods. Suitable before media leaves organisational control. Stronger than clearing, short of physical destruction.",
    x: "Degaussing a magnetic hard drive before it is sent off-site for disposal so no lab could recover its data.",
    f: "sanitise"
  },
  "Destruction": {
    t: "Destruction",
    d: "The strongest sanitisation level: physically destroy the media so it can never be reused or recovered. Required for the most sensitive data or non-rewritable media. Methods include shredding, disintegration, incineration, pulverising and drilling.",
    x: "Shredding decommissioned drives that held 'Top Secret' data into millimetre-sized fragments.",
    f: "sanitise"
  },
  "Media Destruction": {
    t: "Media Destruction",
    d: "Physically destroying the storage medium itself (not just the data) so it is rendered unusable. The umbrella for shredding, disintegration, incineration, pulverisation and drilling.",
    x: "Feeding old backup tapes and drives into an industrial shredder certified for media destruction."
  },
  "Shred / Disintegrate / Incinerate / Drill": {
    t: "Shred / Disintegrate / Incinerate / Drill",
    d: "The physical destruction techniques. Shredding cuts media into tiny pieces; disintegration grinds it to particles; incineration burns it; drilling punches holes through platters. All make recovery practically impossible.",
    x: "Drilling several holes through a failed hard drive's platters before sending the carcass for recycling."
  },
  "Degauss": {
    t: "Degaussing",
    d: "Applying a powerful magnetic field to scramble the magnetic domains on magnetic media, destroying the data (a purging method). CRITICAL EXAM POINT: degaussing only works on MAGNETIC media — it does NOTHING to SSDs, flash, or optical discs.",
    x: "Degaussing a stack of old magnetic tapes erases them — but a degausser is useless against an SSD, which must be crypto-shredded or destroyed instead."
  },
  "Crypto shredding": {
    t: "Crypto Shredding (crypto-erase)",
    d: "Encrypt the data, then securely destroy the encryption keys — the ciphertext instantly becomes permanently unreadable. The go-to method for cloud storage and SSDs where physical destruction is impossible or you don't control the hardware.",
    x: "A cloud provider deletes the customer's encryption keys, rendering terabytes of their stored ciphertext irrecoverable without touching the disks."
  },
  "Overwrite / Wipe / Erasure": {
    t: "Overwrite / Wipe / Erasure",
    d: "Writing new data (zeros, ones, or random patterns) over the existing data, typically in one or more passes — the mechanism behind clearing. Effective on traditional hard drives; less reliable on SSDs due to wear-levelling, where some blocks may be untouched.",
    x: "Running a secure-erase tool that overwrites an HDD three times before the laptop is donated."
  },
  "Format": {
    t: "Format",
    d: "Re-creating the file system's index. A quick format only removes the pointers to data — the actual data REMAINS and is easily recoverable (data remanence). The WEAKEST option and not a real sanitisation method on its own.",
    x: "An employee 'formats' a USB stick before selling it; a free recovery tool restores all the supposedly-deleted files — a classic remanence failure."
  },

  /* ----- DRM / DLP ----- */
  "DRM": {
    t: "DRM — Digital Rights Management",
    d: "Controls that enforce usage rules on content EVEN AFTER it leaves your network — preventing copying, printing or forwarding, or expiring access after a date. Protects intellectual property in the recipient's hands.",
    x: "An e-book that can be read but not copied or printed, and stops opening after the rental period expires."
  },
  "DLP": {
    t: "DLP — Data Loss Prevention",
    d: "Technology that inspects data to detect and BLOCK sensitive information from leaving the organisation — at rest (discovery), in motion (network DLP on email/uploads), and in use (endpoint DLP on USB/clipboard). The classification labels tell DLP what to watch for.",
    x: "Network DLP blocks an email because it detects a credit-card number pattern being sent to an external address."
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

  /* ---- media sanitisation: severity ladder position ---- */
  var SAN = [
    ["Clearing", "overwrite &middot; media stays INSIDE the org"],
    ["Purging", "degauss / crypto-erase &middot; may LEAVE the org"],
    ["Destruction", "shred / incinerate / pulverise &middot; end of life"]
  ];
  set("Clearing", "c2san0"); G["c2san0"] = rows("Sanitisation Strength Ladder", SAN, 0, "stronger as you go down &mdash; match method to data sensitivity");
  set("Purging", "c2san1"); G["c2san1"] = rows("Sanitisation Strength Ladder", SAN, 1, "stronger as you go down &mdash; match method to data sensitivity");
  set("Destruction", "c2san2"); G["c2san2"] = rows("Sanitisation Strength Ladder", SAN, 2, "stronger as you go down &mdash; match method to data sensitivity");
  G["c2dd"] = card("Defensible Destruction", ["destruction you can PROVE happened:", "documented, witnessed, certified"], "a certificate of destruction per drive serial number");
  set("Defensible Destruction", "c2dd");

  /* ---- data states: protection per state ---- */
  var DST = [
    ["AT REST", "stored on media", "FDE &middot; file/db encryption", "stolen disk is unreadable"],
    ["IN MOTION", "crossing the network", "TLS &middot; VPN &middot; IPsec", "sniffed traffic is gibberish"],
    ["IN USE", "in RAM / CPU", "access control &middot; enclaves", "hardest state to protect"]
  ];
  set("rest", "c2st0"); G["c2st0"] = cols("Data States &mdash; protect each differently", DST, 0);
  set("motion", "c2st1"); G["c2st1"] = cols("Data States &mdash; protect each differently", DST, 1);
  set("use", "c2st2"); G["c2st2"] = cols("Data States &mdash; protect each differently", DST, 2);

  /* ---- data roles: accountable vs hands-on ---- */
  var RO = [
    ["DATA OWNER / CONTROLLER", "ACCOUNTABLE &mdash; classifies data", "approves access &middot; senior role", "accountability never delegates"],
    ["DATA CUSTODIAN", "hands-on protection daily", "backups &middot; patches &middot; permissions", "implements the owner's rules"]
  ];
  set("Data Owner / Controller", "c2ro0"); G["c2ro0"] = cols("Owner vs. Custodian", RO, 0);
  set("Data Custodian", "c2ro1"); G["c2ro1"] = cols("Owner vs. Custodian", RO, 1);
})();
