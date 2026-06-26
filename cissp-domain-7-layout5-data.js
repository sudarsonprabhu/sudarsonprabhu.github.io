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
