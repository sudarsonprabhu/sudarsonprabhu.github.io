/* ============================================================
   CISSP Domain 4 — Communication & Network Security
   OSI Model interactive data (vertical layout)

   Exposes three globals consumed by cissp-domain-4.js:
     • OSI_FIGS   — named inline-SVG infographics (topologies, handshake, etc.)
     • osiModel   — layer -> categories -> items structure (drives the table)
     • osiDetails — item key -> { d: description, x: example, f: figure }
                    A value may also be a plain string (description only).
   Layer and category descriptions are stored inline on osiModel.
   ============================================================ */

/* ------------------------------------------------------------
   1. INFOGRAPHICS  (rendered inside tooltips via the `f` field,
      and the "models" / "encapsulation" figures shown statically)
   ------------------------------------------------------------ */
const OSI_FIGS = {
  /* ---- Topologies ---- */
  bus: `
    <svg viewBox="0 0 280 150" class="fig" role="img" aria-label="Bus topology">
      <line x1="22" y1="100" x2="258" y2="100" stroke="#7a7a7a" stroke-width="3"/>
      <g stroke="#d31324" stroke-width="2">
        <line x1="55" y1="100" x2="55" y2="62"/>
        <line x1="110" y1="100" x2="110" y2="62"/>
        <line x1="170" y1="100" x2="170" y2="62"/>
        <line x1="225" y1="100" x2="225" y2="62"/>
      </g>
      <g fill="#d31324" stroke="#ff7b82" stroke-width="2">
        <circle cx="55" cy="50" r="12"/><circle cx="110" cy="50" r="12"/>
        <circle cx="170" cy="50" r="12"/><circle cx="225" cy="50" r="12"/>
      </g>
      <circle cx="22" cy="100" r="4" fill="#7a7a7a"/><circle cx="258" cy="100" r="4" fill="#7a7a7a"/>
      <text x="140" y="135" fill="#f5f5f5" font-size="11" text-anchor="middle">Single shared backbone</text>
    </svg>`,
  star: `
    <svg viewBox="0 0 280 150" class="fig" role="img" aria-label="Star topology">
      <g stroke="#7a7a7a" stroke-width="2">
        <line x1="140" y1="78" x2="140" y2="28"/>
        <line x1="140" y1="78" x2="205" y2="62"/>
        <line x1="140" y1="78" x2="180" y2="120"/>
        <line x1="140" y1="78" x2="100" y2="120"/>
        <line x1="140" y1="78" x2="75" y2="62"/>
      </g>
      <rect x="121" y="64" width="38" height="28" rx="5" fill="#d31324" stroke="#ff9aa0" stroke-width="2"/>
      <text x="140" y="82" fill="#ffffff" font-size="9" font-weight="700" text-anchor="middle">SWITCH</text>
      <g fill="#d31324" stroke="#ff7b82" stroke-width="2">
        <circle cx="140" cy="24" r="11"/><circle cx="210" cy="60" r="11"/>
        <circle cx="183" cy="124" r="11"/><circle cx="97" cy="124" r="11"/><circle cx="70" cy="60" r="11"/>
      </g>
    </svg>`,
  ring: `
    <svg viewBox="0 0 280 150" class="fig" role="img" aria-label="Ring topology">
      <g stroke="#d31324" stroke-width="2" fill="none">
        <line x1="140" y1="26" x2="200" y2="66"/>
        <line x1="200" y1="66" x2="178" y2="126"/>
        <line x1="178" y1="126" x2="102" y2="126"/>
        <line x1="102" y1="126" x2="80" y2="66"/>
        <line x1="80" y1="66" x2="140" y2="26"/>
      </g>
      <g fill="#d31324" stroke="#ff7b82" stroke-width="2">
        <circle cx="140" cy="26" r="12"/><circle cx="200" cy="66" r="12"/>
        <circle cx="178" cy="126" r="12"/><circle cx="102" cy="126" r="12"/><circle cx="80" cy="66" r="12"/>
      </g>
    </svg>`,
  mesh: `
    <svg viewBox="0 0 280 150" class="fig" role="img" aria-label="Mesh topology">
      <g stroke="#7a7a7a" stroke-width="1.5">
        <line x1="140" y1="26" x2="200" y2="66"/><line x1="140" y1="26" x2="178" y2="126"/>
        <line x1="140" y1="26" x2="102" y2="126"/><line x1="140" y1="26" x2="80" y2="66"/>
        <line x1="200" y1="66" x2="178" y2="126"/><line x1="200" y1="66" x2="102" y2="126"/>
        <line x1="200" y1="66" x2="80" y2="66"/><line x1="178" y1="126" x2="102" y2="126"/>
        <line x1="178" y1="126" x2="80" y2="66"/><line x1="102" y1="126" x2="80" y2="66"/>
      </g>
      <g fill="#d31324" stroke="#ff7b82" stroke-width="2">
        <circle cx="140" cy="26" r="12"/><circle cx="200" cy="66" r="12"/>
        <circle cx="178" cy="126" r="12"/><circle cx="102" cy="126" r="12"/><circle cx="80" cy="66" r="12"/>
      </g>
      <text x="140" y="80" fill="#f5f5f5" font-size="10" text-anchor="middle">every node linked</text>
    </svg>`,
  tree: `
    <svg viewBox="0 0 280 150" class="fig" role="img" aria-label="Tree topology">
      <g stroke="#7a7a7a" stroke-width="2">
        <line x1="140" y1="30" x2="85" y2="80"/><line x1="140" y1="30" x2="195" y2="80"/>
        <line x1="85" y1="80" x2="50" y2="128"/><line x1="85" y1="80" x2="120" y2="128"/>
        <line x1="195" y1="80" x2="160" y2="128"/><line x1="195" y1="80" x2="230" y2="128"/>
      </g>
      <rect x="124" y="18" width="32" height="24" rx="5" fill="#d31324" stroke="#ff9aa0" stroke-width="2"/>
      <g fill="#d31324" stroke="#ff7b82" stroke-width="2">
        <circle cx="85" cy="80" r="11"/><circle cx="195" cy="80" r="11"/>
        <circle cx="50" cy="128" r="10"/><circle cx="120" cy="128" r="10"/>
        <circle cx="160" cy="128" r="10"/><circle cx="230" cy="128" r="10"/>
      </g>
      <text x="140" y="14" fill="#f5f5f5" font-size="9" text-anchor="middle">root</text>
    </svg>`,

  /* ---- TCP three-way handshake ---- */
  handshake: `
    <svg viewBox="0 0 280 160" class="fig" role="img" aria-label="TCP three-way handshake">
      <defs><marker id="ah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
        <path d="M0,0 L7,3 L0,6 Z" fill="#d31324"/></marker></defs>
      <text x="55" y="20" fill="#f5f5f5" font-size="11" font-weight="700" text-anchor="middle">Client</text>
      <text x="225" y="20" fill="#f5f5f5" font-size="11" font-weight="700" text-anchor="middle">Server</text>
      <line x1="55" y1="28" x2="55" y2="150" stroke="#7a7a7a" stroke-width="2"/>
      <line x1="225" y1="28" x2="225" y2="150" stroke="#7a7a7a" stroke-width="2"/>
      <text x="140" y="50" fill="#ff9aa0" font-size="10" text-anchor="middle">1. SYN</text>
      <line x1="58" y1="56" x2="222" y2="56" stroke="#d31324" stroke-width="2" marker-end="url(#ah)"/>
      <text x="140" y="88" fill="#ff9aa0" font-size="10" text-anchor="middle">2. SYN / ACK</text>
      <line x1="222" y1="94" x2="58" y2="94" stroke="#d31324" stroke-width="2" marker-end="url(#ah)"/>
      <text x="140" y="126" fill="#ff9aa0" font-size="10" text-anchor="middle">3. ACK</text>
      <line x1="58" y1="132" x2="222" y2="132" stroke="#d31324" stroke-width="2" marker-end="url(#ah)"/>
    </svg>`,

  /* ---- NAT / PAT ---- */
  nat: `
    <svg viewBox="0 0 280 150" class="fig" role="img" aria-label="NAT and PAT">
      <g fill="#d31324" stroke="#ff7b82" stroke-width="1.5" font-size="0">
        <rect x="8" y="22" width="62" height="20" rx="4"/>
        <rect x="8" y="64" width="62" height="20" rx="4"/>
        <rect x="8" y="106" width="62" height="20" rx="4"/>
      </g>
      <g fill="#f5f5f5" font-size="9" text-anchor="middle">
        <text x="39" y="36">10.0.0.2</text><text x="39" y="78">10.0.0.3</text><text x="39" y="120">10.0.0.4</text>
      </g>
      <g stroke="#7a7a7a" stroke-width="2">
        <line x1="70" y1="32" x2="118" y2="70"/><line x1="70" y1="74" x2="118" y2="74"/><line x1="70" y1="116" x2="118" y2="78"/>
      </g>
      <rect x="118" y="56" width="52" height="36" rx="6" fill="#d31324" stroke="#ff9aa0" stroke-width="2"/>
      <text x="144" y="73" fill="#ffffff" font-size="9" font-weight="700" text-anchor="middle">NAT /</text>
      <text x="144" y="84" fill="#ffffff" font-size="9" font-weight="700" text-anchor="middle">PAT</text>
      <line x1="170" y1="74" x2="208" y2="74" stroke="#7a7a7a" stroke-width="2"/>
      <ellipse cx="240" cy="74" rx="32" ry="22" fill="none" stroke="#ff7b82" stroke-width="2"/>
      <text x="240" y="71" fill="#f5f5f5" font-size="9" text-anchor="middle">Internet</text>
      <text x="240" y="84" fill="#ff9aa0" font-size="8" text-anchor="middle">203.0.113.5</text>
    </svg>`,

  /* ---- IPSec modes ---- */
  ipsec: `
    <svg viewBox="0 0 280 150" class="fig" role="img" aria-label="IPSec transport vs tunnel mode">
      <text x="10" y="22" fill="#f5f5f5" font-size="10" font-weight="700">Transport Mode</text>
      <g font-size="9" text-anchor="middle">
        <rect x="10" y="30" width="46" height="24" rx="3" fill="#1c1c1c" stroke="#7a7a7a"/><text x="33" y="46" fill="#f5f5f5">IP Hdr</text>
        <rect x="58" y="30" width="40" height="24" rx="3" fill="#1c1c1c" stroke="#7a7a7a"/><text x="78" y="46" fill="#f5f5f5">ESP</text>
        <rect x="100" y="30" width="120" height="24" rx="3" fill="rgba(211, 19, 36,0.3)" stroke="#d31324"/><text x="160" y="46" fill="#ffd2d5">Payload (encrypted)</text>
      </g>
      <text x="10" y="86" fill="#f5f5f5" font-size="10" font-weight="700">Tunnel Mode</text>
      <g font-size="9" text-anchor="middle">
        <rect x="10" y="94" width="50" height="24" rx="3" fill="#1c1c1c" stroke="#7a7a7a"/><text x="35" y="110" fill="#f5f5f5">New IP</text>
        <rect x="62" y="94" width="36" height="24" rx="3" fill="#1c1c1c" stroke="#7a7a7a"/><text x="80" y="110" fill="#f5f5f5">ESP</text>
        <rect x="100" y="94" width="160" height="24" rx="3" fill="rgba(211, 19, 36,0.3)" stroke="#d31324"/><text x="180" y="110" fill="#ffd2d5">Orig IP + Payload (encrypted)</text>
      </g>
    </svg>`,

  /* ---- VPN protocols + IPSec (AH/ESP) + IPSec modes — combined detailed figure ---- */
  vpn: `
    <svg viewBox="0 0 320 348" class="fig fig-tall" role="img" aria-label="VPN protocols, IPSec AH vs ESP, and IPSec modes">
      <!-- Panel A: VPN protocol security ladder -->
      <text x="160" y="16" fill="#ff8a93" font-size="11" font-weight="700" text-anchor="middle">VPN protocols</text>
      <g font-size="9.5" fill="#e6e6e6">
        <circle cx="18" cy="35" r="4" fill="#ff4d5a"/><text x="30" y="38">PPTP — obsolete; tunnel negotiation not encrypted</text>
        <circle cx="18" cy="54" r="4" fill="#ff4d5a"/><text x="30" y="57">L2TP alone — builds the tunnel only, no encryption</text>
        <circle cx="18" cy="73" r="4" fill="#3fb950"/><text x="30" y="76">L2TP/IPSec — adds confidentiality, integrity &amp; auth</text>
        <circle cx="18" cy="92" r="4" fill="#3fb950"/><text x="30" y="95">IPSec — the de facto VPN standard</text>
      </g>
      <!-- Panel B: AH vs ESP -->
      <text x="160" y="124" fill="#ff8a93" font-size="11" font-weight="700" text-anchor="middle">IPSec — AH vs ESP</text>
      <rect x="12" y="132" width="145" height="104" rx="8" fill="#141414" stroke="#343434"/>
      <rect x="12" y="132" width="145" height="22" rx="8" fill="#d31324"/>
      <text x="84" y="148" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">AH</text>
      <g font-size="10" fill="#e6e6e6">
        <text x="24" y="176"><tspan fill="#3fb950" font-weight="700">✓</tspan> Integrity</text>
        <text x="24" y="194"><tspan fill="#3fb950" font-weight="700">✓</tspan> Authentication</text>
        <text x="24" y="212"><tspan fill="#3fb950" font-weight="700">✓</tspan> Anti-replay</text>
        <text x="24" y="230"><tspan fill="#ff4d5a" font-weight="700">✗</tspan> Encryption</text>
      </g>
      <rect x="163" y="132" width="145" height="104" rx="8" fill="#141414" stroke="#343434"/>
      <rect x="163" y="132" width="145" height="22" rx="8" fill="#d31324"/>
      <text x="235" y="148" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle">ESP</text>
      <g font-size="10" fill="#e6e6e6">
        <text x="175" y="176"><tspan fill="#3fb950" font-weight="700">✓</tspan> Encryption</text>
        <text x="175" y="194"><tspan fill="#3fb950" font-weight="700">✓</tspan> Integrity</text>
        <text x="175" y="212"><tspan fill="#3fb950" font-weight="700">✓</tspan> Anti-replay</text>
        <text x="175" y="230"><tspan fill="#d8a23a" font-weight="700">◐</tspan> Limited auth</text>
      </g>
      <!-- Panel C: IPSec modes -->
      <text x="160" y="258" fill="#ff8a93" font-size="11" font-weight="700" text-anchor="middle">IPSec modes of operation</text>
      <text x="12" y="276" fill="#e6e6e6" font-size="9.5" font-weight="700">Transport mode (host-to-host)</text>
      <g font-size="9" text-anchor="middle">
        <rect x="12" y="282" width="50" height="20" rx="3" fill="#1c1c1c" stroke="#7a7a7a"/><text x="37" y="296" fill="#f5f5f5">IP Hdr</text>
        <rect x="62" y="282" width="40" height="20" rx="3" fill="#262626" stroke="#7a7a7a"/><text x="82" y="296" fill="#f5f5f5">ESP</text>
        <rect x="102" y="282" width="206" height="20" rx="3" fill="rgba(211,19,36,0.3)" stroke="#d31324"/><text x="205" y="296" fill="#ffd2d5">Payload (encrypted)</text>
      </g>
      <text x="12" y="320" fill="#e6e6e6" font-size="9.5" font-weight="700">Tunnel mode (site-to-site)</text>
      <g font-size="9" text-anchor="middle">
        <rect x="12" y="326" width="54" height="20" rx="3" fill="#1c1c1c" stroke="#7a7a7a"/><text x="39" y="340" fill="#f5f5f5">New IP</text>
        <rect x="66" y="326" width="38" height="20" rx="3" fill="#262626" stroke="#7a7a7a"/><text x="85" y="340" fill="#f5f5f5">ESP</text>
        <rect x="104" y="326" width="204" height="20" rx="3" fill="rgba(211,19,36,0.3)" stroke="#d31324"/><text x="206" y="340" fill="#ffd2d5">Orig IP + Payload (encrypted)</text>
      </g>
    </svg>`,

  /* ---- Encapsulation / PDUs (shown statically above the table) ---- */
  encapsulation: `
    <svg viewBox="0 0 340 168" class="fig" role="img" aria-label="Encapsulation down the OSI stack">
      <defs><marker id="encA" markerWidth="9" markerHeight="9" refX="4.5" refY="8" orient="auto"><path d="M0,0 L9,0 L4.5,8 Z" fill="#d31324"/></marker></defs>
      <text x="172" y="13" fill="#ff8a93" font-size="10" font-weight="700" text-anchor="middle">Each layer wraps the DATA in its own header (going down)</text>
      <line x1="16" y1="30" x2="16" y2="150" stroke="#d31324" stroke-width="2" marker-end="url(#encA)"/>
      <g font-size="8" fill="#a6a6a6" text-anchor="end">
        <text x="46" y="40">L7–5</text><text x="46" y="68">L4</text><text x="46" y="96">L3</text><text x="46" y="124">L2</text><text x="46" y="152">L1</text>
      </g>
      <g font-size="9" text-anchor="middle">
        <rect x="150" y="26" width="74" height="20" rx="3" fill="rgba(211,19,36,0.32)" stroke="#d31324"/><text x="187" y="40" fill="#ffd2d5">DATA</text>
        <rect x="124" y="54" width="26" height="20" rx="3" fill="#2a2a2a" stroke="#7a7a7a"/><text x="137" y="68" fill="#f5f5f5">TCP</text>
        <rect x="150" y="54" width="74" height="20" rx="3" fill="rgba(211,19,36,0.24)" stroke="#d31324"/><text x="187" y="68" fill="#ffd2d5">DATA</text>
        <rect x="98" y="82" width="26" height="20" rx="3" fill="#2a2a2a" stroke="#7a7a7a"/><text x="111" y="96" fill="#f5f5f5">IP</text>
        <rect x="124" y="82" width="26" height="20" rx="3" fill="#2a2a2a" stroke="#7a7a7a"/><text x="137" y="96" fill="#f5f5f5">TCP</text>
        <rect x="150" y="82" width="74" height="20" rx="3" fill="rgba(211,19,36,0.16)" stroke="#d31324"/><text x="187" y="96" fill="#ffd2d5">DATA</text>
        <rect x="72" y="110" width="26" height="20" rx="3" fill="#2a2a2a" stroke="#7a7a7a"/><text x="85" y="124" fill="#f5f5f5">MAC</text>
        <rect x="98" y="110" width="26" height="20" rx="3" fill="#2a2a2a" stroke="#7a7a7a"/><text x="111" y="124" fill="#f5f5f5">IP</text>
        <rect x="124" y="110" width="26" height="20" rx="3" fill="#2a2a2a" stroke="#7a7a7a"/><text x="137" y="124" fill="#f5f5f5">TCP</text>
        <rect x="150" y="110" width="60" height="20" rx="3" fill="rgba(211,19,36,0.12)" stroke="#d31324"/><text x="180" y="124" fill="#ffd2d5">DATA</text>
        <rect x="210" y="110" width="28" height="20" rx="3" fill="#2a2a2a" stroke="#7a7a7a"/><text x="224" y="124" fill="#f5f5f5">FCS</text>
        <text x="180" y="152" fill="#d31324" font-size="11" letter-spacing="2">0 1 0 0 1 0 1 1</text>
      </g>
      <g font-size="8.5" fill="#ff8a93" text-anchor="start" font-weight="600">
        <text x="250" y="40">Data</text><text x="250" y="68">Segment</text><text x="250" y="96">Packet</text><text x="250" y="124">Frame</text><text x="250" y="152">Bits</text>
      </g>
    </svg>`,

  /* ---- OSI vs TCP/IP mapping (shown statically above the table) ---- */
  models: `
    <svg viewBox="0 0 320 226" class="fig fig-tall" role="img" aria-label="OSI versus TCP/IP model mapping">
      <text x="66" y="14" fill="#ffd2d5" font-size="10" font-weight="700" text-anchor="middle">OSI · 7 layers</text>
      <text x="246" y="14" fill="#ffd2d5" font-size="10" font-weight="700" text-anchor="middle">TCP/IP · 4 layers</text>
      <g font-size="9" text-anchor="middle">
        <rect x="12" y="22" width="108" height="26" rx="4" fill="#1c1c1c" stroke="#7a7a7a"/><text x="66" y="39" fill="#f5f5f5">7 Application</text>
        <rect x="12" y="50" width="108" height="26" rx="4" fill="#1c1c1c" stroke="#7a7a7a"/><text x="66" y="67" fill="#f5f5f5">6 Presentation</text>
        <rect x="12" y="78" width="108" height="26" rx="4" fill="#1c1c1c" stroke="#7a7a7a"/><text x="66" y="95" fill="#f5f5f5">5 Session</text>
        <rect x="12" y="106" width="108" height="26" rx="4" fill="#262626" stroke="#7a7a7a"/><text x="66" y="123" fill="#f5f5f5">4 Transport</text>
        <rect x="12" y="134" width="108" height="26" rx="4" fill="#303030" stroke="#7a7a7a"/><text x="66" y="151" fill="#f5f5f5">3 Network</text>
        <rect x="12" y="162" width="108" height="26" rx="4" fill="#1c1c1c" stroke="#7a7a7a"/><text x="66" y="179" fill="#f5f5f5">2 Data Link</text>
        <rect x="12" y="190" width="108" height="26" rx="4" fill="#1c1c1c" stroke="#7a7a7a"/><text x="66" y="207" fill="#f5f5f5">1 Physical</text>
      </g>
      <g stroke="#7a7a7a" stroke-width="1" stroke-dasharray="3 2">
        <line x1="120" y1="63" x2="184" y2="63"/>
        <line x1="120" y1="119" x2="184" y2="119"/>
        <line x1="120" y1="147" x2="184" y2="147"/>
        <line x1="120" y1="189" x2="184" y2="189"/>
      </g>
      <g text-anchor="middle">
        <rect x="184" y="22" width="124" height="82" rx="4" fill="rgba(211,19,36,0.22)" stroke="#d31324"/><text x="246" y="58" fill="#ffd2d5" font-size="9.5" font-weight="700">Application</text><text x="246" y="73" fill="#ffb3bb" font-size="8">covers OSI 5–7</text>
        <rect x="184" y="106" width="124" height="26" rx="4" fill="rgba(211,19,36,0.22)" stroke="#d31324"/><text x="246" y="123" fill="#ffd2d5" font-size="9.5" font-weight="700">Transport <tspan fill="#ffb3bb" font-size="8" font-weight="400">(L4)</tspan></text>
        <rect x="184" y="134" width="124" height="26" rx="4" fill="rgba(211,19,36,0.22)" stroke="#d31324"/><text x="246" y="151" fill="#ffd2d5" font-size="9.5" font-weight="700">Internet <tspan fill="#ffb3bb" font-size="8" font-weight="400">(L3)</tspan></text>
        <rect x="184" y="162" width="124" height="54" rx="4" fill="rgba(211,19,36,0.22)" stroke="#d31324"/><text x="246" y="186" fill="#ffd2d5" font-size="9.5" font-weight="700">Link</text><text x="246" y="201" fill="#ffb3bb" font-size="8">covers OSI 1–2</text>
      </g>
    </svg>`
};

/* ------------------------------------------------------------
   2. OSI MODEL STRUCTURE  (ordered 7 -> 1, rendered top to bottom)
      Each layer:  { num, name, desc, ex, columns: [ { name, info, items:[{label,key}] } ] }
   ------------------------------------------------------------ */
const osiModel = [
  {
    num: 7, name: "Application",
    desc: "The interface between user applications (web browsers, email clients) and the network. It provides high-level services such as resource sharing, file transfer, email, and directory services.",
    ex: "When you open a browser and request a page, HTTP at Layer 7 formats that request.",
    columns: [
      { name: "Devices", info: "Devices that inspect traffic at the application layer.",
        items: [ { label: "Application Firewalls", key: "Application Firewalls" } ] },
      { name: "Protocols", info: "Application-layer protocols that deliver services to users and apps.",
        items: [
          { label: "HTTP/S", key: "HTTPS" }, { label: "DNS", key: "DNS" },
          { label: "SSH", key: "SSH" }, { label: "SNMP", key: "SNMP" },
          { label: "LDAP", key: "LDAP" }, { label: "DHCP", key: "DHCP" }
        ] },
      { name: "Attacks", info: "Application-layer (Layer 7) attacks target the service itself with seemingly legitimate requests.",
        items: [
          { label: "HTTP Flood", key: "HTTP Flood" }, { label: "DNS Query Flood", key: "DNS Query Flood" },
          { label: "Eavesdropping", key: "Eavesdropping" }, { label: "Impersonation", key: "Impersonation" },
          { label: "Replay Attack", key: "Replay Attack" }
        ] },
      { name: "Converged", info: "Voice and media services converged onto the IP network.",
        items: [ { label: "VoIP", key: "VoIP" } ] },
      { name: "Commands", info: "Application-layer investigation tools (DNS / registry).",
        items: [ { label: "dig", key: "dig" }, { label: "whois", key: "whois" } ] }
    ]
  },
  {
    num: 6, name: "Presentation",
    desc: "Handles data format translation, compression, and encryption/decryption so that data from the application layer is in a usable, common format (the 'translator' of the stack).",
    ex: "Converting a file to JPEG, or encrypting/decrypting a TLS session payload, happens conceptually here.",
    columns: [
      { name: "Data Formats", info: "Standard formats the layer translates between.",
        items: [
          { label: "ANSI", key: "ANSI" }, { label: "ASCII", key: "ASCII" },
          { label: "JPEG", key: "JPEG" }, { label: "MPEG", key: "MPEG" },
          { label: "MIDI", key: "MIDI" }, { label: "XML", key: "XML" }
        ] },
      { name: "Functions", info: "Core presentation-layer services applied to data before/after transit.",
        items: [
          { label: "Encryption / Decryption", key: "Encryption / Decryption" },
          { label: "Compression", key: "Compression" }
        ] }
    ]
  },
  {
    num: 5, name: "Session",
    desc: "Establishes, coordinates, and terminates the connections (sessions) between applications, including dialog control and synchronization.",
    ex: "Keeping a remote-procedure call or an authenticated login dialog organised between two apps.",
    columns: [
      { name: "Devices", info: "Devices operating at the session layer.",
        items: [ { label: "Circuit Proxy Firewall", key: "Circuit Proxy Firewall" } ] },
      { name: "Protocols", info: "Session-layer protocols that manage inter-application dialogs.",
        items: [ { label: "NetBIOS", key: "NetBIOS" }, { label: "RPC", key: "RPC" } ] },
      { name: "Converged", info: "Storage protocols that run sessions over IP.",
        items: [ { label: "iSCSI", key: "iSCSI" } ] }
    ]
  },
  {
    num: 4, name: "Transport",
    desc: "Provides reliable end-to-end delivery by segmenting data, managing flow control, and ensuring error recovery. The PDU here is the segment (TCP) or datagram (UDP).",
    ex: "TCP guarantees an email arrives intact and in order; UDP streams video fast and tolerates loss.",
    columns: [
      { name: "Ports = Services", info: "Port numbers identify the service/application a segment belongs to.",
        items: [ { label: "Common Ports", key: "Common Ports" } ] },
      { name: "Protocols", info: "Transport-layer protocols and secure protocols operating here.",
        items: [
          { label: "TCP", key: "TCP" }, { label: "UDP", key: "UDP" },
          { label: "SSL/TLS", key: "SSL/TLS" }, { label: "BGP", key: "BGP" }
        ] },
      { name: "Concepts", info: "Key transport-layer mechanisms.",
        items: [ { label: "Three-way Handshake", key: "Three-way Handshake" } ] },
      { name: "Attacks", info: "Volumetric and protocol attacks that exhaust transport resources.",
        items: [
          { label: "SYN Flood", key: "SYN Flood" }, { label: "UDP Flood", key: "UDP Flood" },
          { label: "Teardrop", key: "Teardrop" }, { label: "Land Attack", key: "Land Attack" },
          { label: "DoS", key: "DoS" }, { label: "DDoS", key: "DDoS" }
        ] }
    ]
  },
  {
    num: 3, name: "Network",
    desc: "Determines the best path (routing) for packets across different networks using logical IP addressing. The PDU here is the packet.",
    ex: "A router uses the destination IP to forward a packet hop-by-hop toward another network.",
    columns: [
      { name: "IP Address", info: "Logical Layer-3 addressing, delivery methods, and address translation.",
        items: [
          { label: "IPv4", key: "IPv4" }, { label: "IPv6", key: "IPv6" },
          { label: "Delivery Methods", key: "Delivery Methods" }, { label: "NAT / PAT", key: "NAT / PAT" },
          { label: "IPv4 Network Classes", key: "IPv4 Network Classes" }, { label: "Private IPv4 Addresses", key: "Private IPv4 Addresses" }
        ] },
      { name: "Devices", info: "Devices that route and filter at Layer 3.",
        items: [ { label: "Routers", key: "Routers" }, { label: "Packet Filtering Firewalls", key: "Packet Filtering Firewalls" } ] },
      { name: "Protocols", info: "Layer-3 control and security protocols.",
        items: [ { label: "ICMP (Ping)", key: "ICMP (Ping)" }, { label: "IPSec", key: "IPSec" }, { label: "IGMP", key: "IGMP" } ] },
      { name: "Attacks", info: "Layer-3 attacks abusing IP and ICMP.",
        items: [
          { label: "IP Spoofing", key: "IP Spoofing" }, { label: "Smurf Attack", key: "Smurf Attack" },
          { label: "Fraggle Attack", key: "Fraggle Attack" }, { label: "Ping of Death", key: "Ping of Death" },
          { label: "ICMP Flood", key: "ICMP Flood" },
          { label: "Man-in-the-Middle", key: "Man-in-the-Middle" }
        ] },
      { name: "Virtualization", info: "Software-defined networking and its control APIs.",
        items: [ { label: "SDN", key: "SDN" }, { label: "Northbound & Southbound APIs", key: "Northbound & Southbound APIs" } ] },
      { name: "Commands", info: "Layer-3 connectivity and path tools (ICMP / IP).",
        items: [ { label: "ipconfig", key: "ipconfig" }, { label: "ping", key: "ping" }, { label: "traceroute", key: "traceroute" } ] }
    ]
  },
  {
    num: 2, name: "Data Link",
    desc: "Manages node-to-node transfer within the same local network: physical (MAC) addressing, framing, and basic error detection. Often split into LLC and MAC sublayers. The PDU here is the frame.",
    ex: "A switch reads the destination MAC address in a frame to forward it out the correct port.",
    columns: [
      { name: "MAC Address", info: "Physical addressing and the protocol that maps IP to MAC.",
        items: [ { label: "MAC Address", key: "MAC Address" }, { label: "ARP", key: "ARP" } ] },
      { name: "Devices", info: "Layer-2 forwarding devices.",
        items: [ { label: "Switches", key: "Switches" }, { label: "Bridges", key: "Bridges" } ] },
      { name: "Protocols", info: "Encapsulation, authentication, and VPN protocols anchored at Layer 2.",
        items: [
          { label: "PPP", key: "PPP" }, { label: "PAP", key: "PAP" }, { label: "CHAP", key: "CHAP" },
          { label: "EAP", key: "EAP" }, { label: "PEAP", key: "PEAP" }, { label: "PPTP", key: "PPTP" }, { label: "L2TP", key: "L2TP" }
        ] },
      { name: "Attacks", info: "Layer-2 attacks abusing ARP, MAC tables, and spanning tree.",
        items: [
          { label: "ARP Spoofing / Poisoning", key: "ARP Spoofing / Poisoning" },
          { label: "ARP Flooding", key: "ARP Flooding" },
          { label: "MAC Spoofing", key: "MAC Spoofing" },
          { label: "MAC Flooding", key: "MAC Flooding" },
          { label: "Spanning Tree Attack", key: "Spanning Tree Attack" }
        ] },
      { name: "WAN", info: "Wide-area data-link / switching technologies.",
        items: [ { label: "X.25", key: "X.25" }, { label: "Frame Relay", key: "Frame Relay" }, { label: "ATM", key: "ATM" }, { label: "MPLS", key: "MPLS" } ] },
      { name: "Wireless security", info: "Wi-Fi encryption schemes, weakest to strongest.",
        items: [ { label: "WEP", key: "WEP" }, { label: "TKIP", key: "TKIP" }, { label: "WPA / WPA2", key: "WPA / WPA2" } ] },
      { name: "Virtualization", info: "Logical Layer-2 segmentation.",
        items: [ { label: "VLAN", key: "VLAN" } ] },
      { name: "Converged", info: "Storage convergence directly over Ethernet.",
        items: [ { label: "FCoE", key: "FCoE" } ] }
    ]
  },
  {
    num: 1, name: "Physical",
    desc: "Deals with physical connectivity and the transmission of raw bits as electrical signals, light pulses, or radio waves over a medium. The PDU here is the bit.",
    ex: "Voltage on a copper Cat6 cable, or a light pulse on fiber, representing a 1 or a 0.",
    columns: [
      { name: "Media", info: "The transmission media that carry the raw signal.",
        items: [ { label: "Wired: Twisted Pair, Coaxial, Fiber", key: "Wired Media" },
                 { label: "Wireless: RF, Infrared, Microwave", key: "Wireless Media" } ] },
      { name: "Topologies", info: "The physical/logical arrangement of nodes on the network. Hover each for a diagram.",
        items: [
          { label: "Bus", key: "Bus" }, { label: "Tree", key: "Tree" }, { label: "Star", key: "Star" },
          { label: "Mesh", key: "Mesh" }, { label: "Ring", key: "Ring" }
        ] },
      { name: "Collisions", info: "Media-access methods that govern how devices share the medium and avoid/detect collisions.",
        items: [ { label: "CSMA/CA", key: "CSMA/CA" }, { label: "CSMA/CD", key: "CSMA/CD" } ] },
      { name: "Devices", info: "Layer-1 devices that move or regenerate the signal without inspecting it.",
        items: [ { label: "Hubs", key: "Hubs" }, { label: "Repeaters", key: "Repeaters" }, { label: "Concentrators", key: "Concentrators" } ] },
      { name: "Protocols", info: "Port-based access control operating at the edge of the physical link.",
        items: [ { label: "802.1x", key: "802.1x" } ] },
      { name: "Wireless", info: "Radio network standards and cellular technologies.",
        items: [
          { label: "Wi-Fi (802.11)", key: "Wi-Fi" }, { label: "WiMAX (802.16)", key: "WiMAX" },
          { label: "GSM / CDMA", key: "GSM / CDMA" }, { label: "Microwave", key: "Microwave" },
          { label: "802.11 a/b/g/n/ac/ax", key: "802.11" }
        ] }
    ]
  },
  {
    name: "Attack Lifecycle",
    desc: "An attacker's methodology that spans every layer rather than living at one: reconnaissance and enumeration gather information, vulnerability analysis finds weaknesses, and exploitation leverages them.",
    ex: "Whois/DNS recon, then enumerating shares, then a vulnerability scan, then running an exploit.",
    columns: [
      { name: "Phases", info: "The ordered phases of a network attack / kill chain.",
        items: [
          { label: "Reconnaissance", key: "Reconnaissance" }, { label: "Enumeration", key: "Enumeration" },
          { label: "Vulnerability Analysis", key: "Vulnerability Analysis" }, { label: "Exploitation", key: "Exploitation" }
        ] }
    ]
  }
];

/* ------------------------------------------------------------
   3. ITEM DETAILS   key -> { d, x, f }  (or a plain string)
   ------------------------------------------------------------ */
const osiDetails = {

  /* ===== Layer 7 — Application ===== */
  "Application Firewalls": { d: "A Layer-7 firewall (next-generation firewall or Web Application Firewall) inspects the actual content of application traffic — HTTP, DNS, and so on — not just IP addresses and ports. Because it understands the application protocol, it can block attacks such as SQL injection, cross-site scripting (XSS), and application-layer (Layer 7) DDoS that slip past stateless packet filters.", x: "A WAF such as Cloudflare or ModSecurity filtering malicious HTTP requests before they reach the web application." },
  "HTTPS": { d: "HTTP is the application-layer protocol that carries web traffic, but on its own it is cleartext and exposed to eavesdropping and tampering. HTTPS wraps HTTP inside SSL/TLS to provide confidentiality, integrity, and server authentication: the server proves its identity with an X.509 certificate and the channel between client and server is encrypted.", x: "The padlock on https://bank.com means TLS is encrypting the HTTP session and the site's certificate has been validated." },
  "DNS": { d: "The Domain Name System translates human-readable names (www.example.com) into the IP addresses (192.0.2.1) computers use to reach each other. DNS was designed for speed and usability rather than security: by default queries and responses travel in plaintext over UDP, so anyone able to monitor traffic (e.g., an ISP) can read them — and even on an HTTPS site, the DNS lookup itself is exposed. Attacks: DNS spoofing / cache poisoning (injecting false records into a resolver's cache to redirect users to a malicious or phishing site); DNS hijacking (taking control of a domain's DNS settings via a compromised registrar account or home router and repointing the records); and DoS / DDoS (flooding DNS servers with queries until legitimate lookups fail). Countermeasures: DNSSEC, which digitally signs records so their origin and integrity can be verified — the primary defense against spoofing and cache poisoning — and encrypting queries with DNS over HTTPS (DoH) or DNS over TLS (DoT) to stop eavesdropping and on-path attacks.", x: "Resolving www.example.com to 192.0.2.1; a poisoned cache could instead return an attacker's IP and silently send you to a phishing clone." },
  "SSH": { d: "Secure Shell is a cryptographic application-layer (Layer 7) protocol for operating services securely over an unsecured network (TCP 22). It provides encrypted remote login, command execution, and tunneling, and is used by administrators and developers for secure remote administration of servers and network devices. It replaces insecure cleartext protocols such as Telnet.", x: "Running 'ssh user@server' to manage a Linux host or router over an encrypted channel." },
  "SNMP": { d: "Simple Network Management Protocol monitors and manages network devices (UDP 161 for polling, 162 for traps). Versions 1 and 2c send the community string (effectively a password) in cleartext and are insecure; SNMPv3 adds authentication and encryption and should be used.", x: "A monitoring server polling a router's interface counters, with an SNMP trap on port 162 alerting when a link goes down." },
  "LDAP": { d: "Lightweight Directory Access Protocol queries and modifies directory services (TCP 389; the TLS-protected version, LDAPS, uses 636). It underpins centralized identity and authentication lookups.", x: "Active Directory validating a user's login by checking credentials against the directory over LDAP." },
  "DHCP": { d: "Dynamic Host Configuration Protocol automatically assigns a client its IP address, subnet mask, default gateway, and DNS servers (UDP 67 server / 68 client). Because clients trust whatever DHCP server answers first, a rogue DHCP server can hand out a malicious gateway or DNS server and enable a man-in-the-middle attack; DHCP snooping mitigates this.", x: "A laptop joining Wi-Fi and instantly receiving 10.0.0.42 with a gateway and DNS, no manual configuration." },
  "HTTP Flood": { d: "An application-layer (Layer 7) DDoS that sends a high volume of seemingly legitimate HTTP GET or POST requests, forcing the server to spend heavy resources responding to each one until it is slow or unavailable. It is hard to filter because every request looks valid; WAFs and rate limiting are key defenses.", x: "A botnet repeatedly requesting a search or checkout page to exhaust a web server's CPU." },
  "DNS Query Flood": { d: "An application-layer DDoS that floods a DNS server with a high volume of (often bogus or random-subdomain) queries, consuming its resources so it can no longer answer legitimate lookups.", x: "Thousands of bots querying random subdomains of a target domain to overwhelm its authoritative DNS." },
  "Eavesdropping": { d: "Eavesdropping (also called sniffing or snooping) is the unauthorized, covert interception of private communications to steal sensitive data such as login credentials, financial data, or trade secrets, without the parties' knowledge. It exploits unencrypted traffic: attackers use packet sniffers like Wireshark to capture data, especially on unsecured public Wi-Fi or HTTP sites, and a more active form positions the attacker on-path (man-in-the-middle) to intercept and even alter traffic. The primary defense is strong encryption — a VPN for the channel and HTTPS for web browsing.", x: "Capturing logins over open public Wi-Fi with Wireshark on a plain HTTP site." },
  "Impersonation": { d: "Impersonation is where an attacker successfully pretends to be a legitimate user, device, or system to gain unauthorized access by tricking other network components, users, or applications into treating them as a trusted participant. Common techniques include IP, MAC, and DNS spoofing, session hijacking, and on-path (man-in-the-middle) attacks.", x: "Spoofing the default gateway's IP and MAC so victims unknowingly send their traffic through the attacker." },
  "Replay Attack": { d: "A replay (or playback) attack is where an attacker covertly intercepts a valid data transmission and retransmits it later to fraudulently repeat its effect or gain unauthorized access. The core weakness is the system's inability to distinguish the original legitimate message from the malicious retransmission. The primary defense is ensuring a captured message cannot be reused — via nonces (unique random values), timestamps, session IDs, sequence numbers, and strong encryption.", x: "Capturing an authentication token and resending it to log in as the victim without ever knowing the password." },

  /* ===== Layer 6 — Presentation ===== */
  "ANSI": { d: "A family of character-encoding and interoperability standards used so that text is represented consistently across different systems, letting the application layer read it correctly.", x: "Legacy Windows code pages (e.g., Windows-1252) rendering the same text identically on different machines." },
  "ASCII": { d: "The American Standard Code for Information Interchange is a 7-bit character encoding mapping letters, digits, and control characters to numbers 0–127 — a foundational text format the presentation layer translates to and from.", x: "Capital 'A' is ASCII value 65 on any system." },
  "JPEG": { d: "A lossy image-compression format. It exemplifies the presentation layer's role of formatting and compressing data: an image is encoded to JPEG before transit and decoded for display.", x: "A camera photo compressed to a .jpg so it transfers faster over the network." },
  "MPEG": { d: "A family of audio/video compression standards, illustrating the presentation layer's compression and format-translation function.", x: "Streaming video encoded with MPEG/H.264 to reduce bandwidth." },
  "MIDI": { d: "A standard format for representing musical and instrument-control data — another common data format handled at the presentation layer.", x: "A keyboard sending MIDI note events to a computer instead of raw audio." },
  "XML": { d: "A structured, self-describing text format for exchanging data between systems, ensuring both ends interpret the data the same way — a presentation-layer concern.", x: "A SOAP web service exchanging an XML document between two applications." },
  "Encryption / Decryption": { d: "The presentation layer is where data is conceptually encrypted before transmission and decrypted on receipt, protecting confidentiality so that intercepted traffic is unreadable.", x: "TLS encrypting an HTTP payload so an eavesdropper sees only ciphertext." },
  "Compression": { d: "Reducing data size before transmission to save bandwidth and speed delivery, then expanding it at the destination — a presentation-layer function.", x: "Gzip-compressing a web response before it travels to the browser." },

  /* ===== Layer 5 — Session ===== */
  "Circuit Proxy Firewall": { d: "A circuit-level gateway (proxy) operating around the session layer. It validates the session itself — the TCP/UDP handshake and session state — rather than inspecting application content, and hides internal hosts behind the proxy. SOCKS is a common example.", x: "A SOCKS proxy confirming a session is legitimately established before relaying its packets." },
  "NetBIOS": { d: "A session-layer API/service that lets applications on different computers communicate over a LAN, providing name, session, and datagram services. It is legacy and, if exposed, a frequent target for enumeration.", x: "Legacy Windows file and printer sharing using NetBIOS names to locate hosts." },
  "RPC": { d: "Remote Procedure Call lets a program execute a procedure on another machine as if it were a local call; the session layer manages establishing and coordinating that dialog.", x: "A client invoking a server-side function over the network and transparently receiving the result." },

  /* ===== Layer 4 — Transport ===== */
  "Common Ports": { d: "Ports map a transport segment to the service it belongs to. Well-known ports (0–1023) to know: 20/21 FTP (cleartext — use SFTP/FTPS), 22 SSH/SCP/SFTP (encrypted), 23 Telnet (cleartext, insecure — replace with SSH), 25 SMTP (mail relay; STARTTLS / 587 / 465 to encrypt), 53 DNS, 67/68 DHCP, 80 HTTP, 110 POP3 (secure 995), 143 IMAP (secure 993), 161/162 SNMP (use v3), 389 LDAP / 636 LDAPS, 443 HTTPS, 3389 RDP (expose only via VPN).", x: "A packet to port 443 is destined for HTTPS; to port 22, for SSH." },
  "TCP": { d: "Transmission Control Protocol is a connection-oriented, reliable transport protocol. It establishes a session with the three-way handshake, then guarantees ordered, error-checked delivery with flow control and retransmission of lost segments. Use TCP when reliability, order, and integrity are critical and the application cannot tolerate missing or corrupted data.", x: "Email, web pages, and file transfers use TCP so nothing arrives missing or out of order." },
  "UDP": { d: "User Datagram Protocol is a connectionless, lightweight transport protocol: no handshake, no guaranteed delivery or ordering, and minimal overhead. Use UDP when speed and low latency matter more than perfect reliability and the application can tolerate some loss.", x: "Live video, VoIP, online gaming, and DNS queries use UDP — a dropped packet matters less than latency." },
  "SSL/TLS": { d: "Secure Sockets Layer and its successor Transport Layer Security are cryptographic protocols that secure communication between applications over the internet, operating around the transport layer (Layer 4). TLS uses X.509 certificates to verify the server's identity and encrypt the channel, providing confidentiality and integrity. SSL is deprecated and insecure; use TLS 1.2 or 1.3. It secures HTTPS, secure email, and many VPNs.", x: "Connecting to an https:// site triggers a TLS handshake that validates the certificate and encrypts the session." },
  "BGP": { d: "Border Gateway Protocol is the routing protocol that exchanges reachability information between autonomous systems (independent networks) across the internet. BGP hijacking — announcing IP prefixes you do not own — can reroute or black-hole traffic, so route filtering and RPKI are important defenses.", x: "ISPs use BGP to advertise to each other which IP ranges they can deliver traffic to." },
  "Three-way Handshake": { d: "The three-way handshake is TCP's foundational process for establishing a reliable, connection-oriented session before any data is sent, ensuring both sides are ready, reachable, and synchronized. Steps: (1) the client sends SYN with its initial sequence number; (2) the server replies SYN/ACK, acknowledging and sending its own sequence number; (3) the client sends ACK and the connection is established. A SYN flood abuses this by sending many SYNs and never the final ACK, leaving half-open connections that exhaust the server.", x: "Before a page loads, browser and server exchange SYN → SYN/ACK → ACK.", f: "handshake" },
  "SYN Flood": { d: "A protocol attack (Layer 3/4) that exploits the TCP three-way handshake: the attacker sends a rapid sequence of SYN requests (often with spoofed source IPs) but never sends the final ACK. The server holds these half-open connections, quickly exhausting its capacity to accept new, legitimate connections. Defenses include SYN cookies and rate limiting.", x: "A flood of spoofed SYNs filling a server's connection backlog so real users cannot connect." },
  "UDP Flood": { d: "A volumetric attack (Layer 3/4) that sends a large number of UDP packets to random ports on the target; the target checks for a listening application, finds none, and replies with an ICMP 'destination unreachable' for each, depleting its resources and bandwidth.", x: "Bots blasting UDP at a game server's ports until legitimate players are dropped." },
  "Teardrop": { d: "A protocol attack (DoS) that exploits how older or unpatched operating systems reassemble fragmented IP packets, sending fragments with overlapping offset fields so reassembly crashes the system. Patching the OS and filtering malformed fragments are the defenses.", x: "Crafted overlapping fragments crashing a legacy host during reassembly." },
  "Land Attack": { d: "A DoS attack where the attacker sends a specially crafted packet whose forged source IP and port equal the destination IP and port of the target, causing the system to reply to itself and lock up on vulnerable stacks.", x: "A spoofed packet 'from' the victim to the victim, creating a loop on an unpatched system." },
  "DoS": { d: "A Denial-of-Service attack makes a network, service, or application unavailable to legitimate users. A DoS originates from a single source targeting one system, aiming to consume its resources (bandwidth, memory, CPU) or exploit a software vulnerability to slow it down or crash it. Effective countermeasures: IP-based ACLs to block the single malicious source, rate limiting to manage traffic spikes, and an IPS to detect and block known attack signatures.", x: "One machine flooding a server until it slows to a crawl or crashes." },
  "DDoS": { d: "A Distributed Denial-of-Service attack is a more potent, complex DoS that leverages many compromised devices to flood a target from many locations simultaneously, making malicious traffic hard to distinguish from legitimate users. The compromised machines are bots, the network of them is the botnet, and the criminal controlling them through command-and-control (C2) infrastructure is the bot herder — who may attack directly or rent the botnet to others. Effective countermeasures: cloud-based DDoS mitigation/scrubbing services (Cloudflare, Akamai, AWS Shield), proactive traffic monitoring against a normal baseline, and Web Application Firewalls for application-layer floods.", x: "Thousands of IoT bots in a botnet simultaneously hammering a website offline." },

  /* ===== Layer 3 — Network ===== */
  "IPv4": { d: "Internet Protocol version 4 uses 32-bit addresses written in dotted-decimal (e.g., 192.0.2.10), giving about 4.3 billion addresses — now exhausted, which is why NAT is needed. It has a variable header (20–60 bytes), uses a checksum for error detection, and relies on DHCP for assignment and NAT to extend its life. RFC 1918 reserves private, non-routable ranges: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.", x: "A home network using 192.168.1.x privately behind a single public IP." },
  "IPv6": { d: "Internet Protocol version 6 uses 128-bit hexadecimal addresses written as eight groups of four hex digits (e.g., 2001:0db8:85a3::8a2e:0370:7334), providing roughly 3.4 × 10^38 addresses. It has a fixed, simplified 40-byte header for faster routing, built-in Quality of Service, stateless address autoconfiguration (SLAAC), and mandatory IPSec support (optional in IPv4). It eliminates the need for NAT, restoring end-to-end connectivity, and suits emerging tech like IoT and 5G.", x: "Giving every IoT sensor a globally unique IPv6 address with no NAT." },
  "Delivery Methods": { d: "How IP packets are addressed to recipients: Unicast (one-to-one, a single specific recipient); Broadcast (one-to-all within the local segment / broadcast domain — routers do not forward it, to avoid congestion); Multicast (one-to-many recipients that explicitly joined a group, e.g., streaming video or online gaming); Anycast (one-to-the-nearest / best node of a group, used by CDNs to direct users to the closest server); and Geocast (one-to-all nodes within a specific geographic area, used in wireless ad-hoc and sensor networks).", x: "A CDN uses anycast to route you to the nearest edge server; IPTV uses multicast to one subscribed group." },
  "NAT / PAT": { d: "Network Address Translation is any technology that modifies the IP addresses in a packet header as it crosses a routing device, mapping private, non-routable addresses (e.g., 10.0.0.0/8) to publicly routable ones — one-to-one (static NAT) or many-to-one (dynamic NAT) — which protects the internal addressing scheme and hides internal topology. Port Address Translation (PAT), also called NAT Overload, extends NAT to address IPv4 scarcity by also translating and tracking the source port number, letting many private hosts share a single public IP.", x: "Twenty office PCs all reaching the internet through one public IP via PAT.", f: "nat" },
  "Routers": { d: "Routers operate at Layer 3 and forward packets between different networks based on IP addresses, maintaining routing tables and using protocols like OSPF, RIP, and BGP to choose optimal paths. They create separate broadcast domains and can enforce ACLs to filter traffic. Best practices: restrict physical and logical access, disable unused services, use SSH instead of Telnet, apply strong authentication (RADIUS/TACACS+), keep firmware current, and log access attempts.", x: "A home router moving packets between your LAN and your ISP's network." },
  "Packet Filtering Firewalls": { d: "A packet-filtering (stateless) firewall operates at Layer 3 and allows or denies each packet by examining its header — source/destination IP, port, and protocol — against an ACL, with no awareness of session state or payload. It is simple and fast but cannot inspect content or track connections.", x: "A router ACL that drops all inbound traffic except TCP 443 to the web server." },
  "ICMP (Ping)": { d: "Internet Control Message Protocol handles diagnostics and error reporting (ping, traceroute). Because it can be abused — Ping of Death (oversized packets), Smurf (broadcast amplification), and ICMP/ping floods — best practice is to rate-limit or filter ICMP at network boundaries.", x: "'ping 8.8.8.8' sends ICMP echo requests and waits for echo replies to test reachability." },
  "IPSec": { d: "Internet Protocol Security is a suite of protocols providing security at Layer 3, which makes it transparent to most applications, and it is the de facto standard for building VPNs. It has two core protocols: the Authentication Header (AH), which provides integrity, authentication, and anti-replay but no encryption; and the Encapsulating Security Payload (ESP), which provides encryption plus integrity and is the common choice for VPNs (the two can be combined for both privacy and authenticity). It runs in two modes: Tunnel mode encrypts the entire original packet inside a new IP header (site-to-site VPNs where whole networks communicate), and Transport mode encrypts only the payload, leaving the original IP header intact (host-to-host or client-to-site). Transport mode can use split tunneling (only private-network traffic uses the VPN) or full tunneling (all traffic does).", x: "A site-to-site VPN between two offices using ESP in tunnel mode over the internet.", f: "ipsec" },
  "IGMP": { d: "Internet Group Management Protocol lets hosts and routers establish and manage multicast group memberships at Layer 3, so one-to-many streams reach only the devices that joined the group. It is essential for applications like video streaming and online conferencing.", x: "A device sending an IGMP join to start receiving an IPTV multicast channel." },
  "IP Spoofing": { d: "Forging the source IP address in a packet header to impersonate another system — used to bypass IP-based authentication, launch reflected/amplified DoS attacks, or hide the attacker's identity. Countermeasures include ingress/egress filtering (BCP38 / RFC 2827) and not relying on the IP address alone for authentication.", x: "A Smurf attack spoofs the victim's IP so amplified replies flood the victim." },
  "Smurf Attack": { d: "A volumetric ICMP amplification DoS: the attacker sends ICMP echo requests to a network's broadcast address with the victim's spoofed source IP, so every host on that network replies to the victim, flooding it with amplified traffic. Countermeasures: disable directed broadcasts on routers, apply ingress filtering, and rate-limit ICMP.", x: "One spoofed ping to a /24 broadcast address generating ~250 replies aimed at the victim." },
  "Fraggle Attack": { d: "A volumetric amplification DoS that is a variation of the Smurf attack; the key difference is that Fraggle uses spoofed UDP packets (e.g., to the echo / chargen ports) sent to a broadcast address, rather than ICMP, to amplify traffic at the victim.", x: "Spoofed UDP to a broadcast address causing many hosts to flood the victim with responses." },
  "Ping of Death": { d: "An older protocol DoS where the attacker sends a malformed, oversized ICMP packet (exceeding the 65,535-byte IP limit once reassembled). When the target reassembles the fragments it overflows a buffer and crashes or freezes. Modern operating systems are patched against it, but it illustrates the importance of input validation.", x: "An oversized fragmented ping freezing a legacy host on reassembly." },
  "ICMP Flood": { d: "A volumetric DoS (ping flood) that overwhelms the target with ICMP echo requests faster than it can respond, saturating its incoming bandwidth.", x: "A botnet continuously pinging a server to consume its uplink." },

  /* ===== Layer 2 — Data Link ===== */
  "MAC Address": { d: "A Media Access Control address is a unique 48-bit (6-byte) hardware address assigned to a NIC by its manufacturer, shown as twelve hexadecimal digits (e.g., 00:1B:63:84:45:E6). It is used for device identification and data delivery at the data link layer (Layer 2) within a local network. MAC addresses are generally fixed and embedded in hardware, unlike IP addresses, which are assigned dynamically and can change.", x: "A switch maps 00:1B:63:84:45:E6 to the physical port that host is plugged into." },
  "ARP": { d: "Address Resolution Protocol discovers and maps an IP address to its MAC address on the same local network, bridging the logical Layer-3 address that applications use and the physical Layer-2 address needed for actual transmission on the local link. Because it is stateless and inherently trusting, it is highly vulnerable to spoofing and poisoning.", x: "Before sending to 192.168.1.1, a host broadcasts 'who has 192.168.1.1?' and caches the MAC in the reply." },
  "Switches": { d: "A switch operates at Layer 2 and uses MAC addresses to forward each frame only to the specific port where the destination resides. Unlike hubs, switches create a separate collision domain per port, greatly improving performance and security. Managed switches add VLANs, port security, and 802.1X.", x: "A switch sends a frame only to the recipient's port, whereas a hub floods it to everyone." },
  "Bridges": { d: "A bridge is a Layer-2 device that connects two network segments and filters traffic between them by MAC address, creating separate collision domains and reducing unnecessary traffic. Bridges are largely superseded by switches but are the conceptual basis of Layer-2 segmentation.", x: "A bridge joining two office segments while keeping local traffic local." },
  "PPP": { d: "Point-to-Point Protocol is a data link layer protocol (the successor to SLIP) that provides a standard way to encapsulate network traffic over point-to-point links. It supports the authentication methods CHAP, PAP, and EAP.", x: "A DSL or dial-up link using PPP to frame IP traffic and authenticate the subscriber." },
  "PAP": { d: "Password Authentication Protocol is a simple, older authentication protocol within the PPP framework that transmits the username and password in clear text, making it insecure and obsolete — anyone sniffing the link sees the credentials.", x: "An old link sending the password in cleartext, trivially readable with a sniffer." },
  "CHAP": { d: "Challenge-Handshake Authentication Protocol is a significant improvement over PAP for authenticating over PPP links. It uses a challenge-response mechanism with a hashed (encrypted) shared secret, so the password is never sent in plaintext, and it can periodically re-challenge to confirm the peer. MS-CHAP is Microsoft's implementation.", x: "The server sends a random challenge; the client returns a hash of the challenge plus the shared secret — no password ever crosses the wire." },
  "EAP": {
    d: "Extensible Authentication Protocol is an authentication framework rather than a single protocol. It supports many authentication methods and is the fundamental protocol used in modern wireless networks (WPA-Enterprise) and point-to-point connections. Common derivatives:",
    bullets: [
      "EAP-TLS — the gold standard for enterprise authentication (an open IETF standard); uses TLS with mutual client + server certificates.",
      "PEAP — builds an encrypted TLS tunnel using a server certificate before any credentials are exchanged (developed by Microsoft, Cisco, and RSA as an alternative to EAP-TTLS).",
      "EAP-TTLS — an extension of EAP-TLS that authenticates users without the complexity of managing client-side certificates.",
      "LEAP — a proprietary Cisco wireless method from the early Wi-Fi era; now outdated and insecure.",
      "EAP-FAST — Cisco's secure replacement for the vulnerable LEAP.",
      "EAP-SIM — uses the credentials on a GSM SIM card for authentication and session-key distribution on wireless networks.",
      "EAP-MD5 — one of the original, simplest methods; hashes passwords with MD5, is highly insecure, and should be avoided.",
      "EAP-POTP — handles one-time-password (OTP) tokens for multi-factor authentication (RFC 4793).",
      "EAP-IKEv2 — based on IPSec IKEv2 (RFC 5106); supports passwords, symmetric keys, or asymmetric key pairs for mutual authentication and session-key establishment.",
      "EAP-NOOB — bootstraps IoT devices that have no pre-configured credentials, using channels such as QR codes, NFC tags, and audio."
    ],
    x: "WPA2/WPA3-Enterprise Wi-Fi using EAP-TLS with client certificates validated by a RADIUS server."
  },
  "PPTP": { d: "Point-to-Point Tunneling Protocol is an older, now-obsolete VPN protocol that encapsulates data for transport over IP networks. Its initial tunnel negotiation is not encrypted, so usernames and hashed passwords can be intercepted; it is considered insecure and should be replaced by L2TP/IPSec or modern alternatives like WireGuard.", x: "A legacy VPN whose unencrypted handshake leaks credential hashes to anyone sniffing." },
  "L2TP": { d: "Layer 2 Tunneling Protocol defines how data packets are encapsulated and transported across a network, but it provides no encryption or strong authentication on its own — it only creates the tunnel. For a secure VPN it is paired with IPSec (L2TP/IPSec), which adds confidentiality, integrity, and authentication of the tunneled data.", x: "A remote-access VPN configured as L2TP/IPSec so the tunnel is actually encrypted." },
  "ARP Spoofing / Poisoning": { d: "The most common ARP attack. The attacker sends falsified ARP messages to a target (a host or router), linking the attacker's MAC address with the IP of a legitimate device — often the default gateway — so traffic meant for that device is sent to the attacker instead, enabling man-in-the-middle, session hijacking, and data theft. Countermeasures: Dynamic ARP Inspection (DAI, with DHCP snooping), static ARP entries for critical devices, VLAN segmentation to contain the broadcast domain, and encryption so intercepted traffic stays unreadable.", x: "The attacker claims to be 192.168.1.1 (the gateway) so all LAN traffic detours through them." },
  "ARP Flooding": { d: "ARP cache overflow: the attacker floods the network with excessive ARP requests or replies using random MAC and IP addresses, consuming resources and pushing legitimate entries out of the ARP tables, potentially leading to a denial-of-service condition.", x: "A burst of bogus ARP entries evicting the real gateway mapping from hosts' caches." },
  "MAC Spoofing": { d: "The attacker changes their device's hardware MAC address to match that of an authorized, legitimate device already on the network, allowing them to bypass access controls such as MAC filtering or port security.", x: "An attacker cloning a printer's MAC to slip past a MAC allow-list." },
  "MAC Flooding": { d: "CAM table overflow: the attacker sends a large number of Ethernet frames with unique, fake source MAC addresses to a switch, overwhelming its Content Addressable Memory (CAM) table (which maps MACs to physical ports). When the table is full the switch enters 'fail-open' mode and broadcasts all incoming traffic to every port like a hub, letting the attacker capture all traffic with a sniffer. Port security and MAC-address limiting are the defenses.", x: "Tools like macof filling a switch's CAM table so it floods every frame to all ports." },
  "Spanning Tree Attack": { d: "Spanning Tree Protocol (STP) prevents loops in networks with redundant links. In an STP attack the attacker introduces a rogue switch sending superior BPDUs (Bridge Protocol Data Units), tricking the network into electing the attacker's switch as the root bridge so traffic is redirected through it. BPDU Guard and Root Guard are countermeasures.", x: "A rogue switch advertising priority 0 to become root bridge and intercept inter-switch traffic." },

  /* ===== Layer 1 — Physical ===== */
  "Wired Media": { d: "Twisted pair (Cat5e/Cat6/Cat6a) is the most common LAN cabling, supporting speeds up to 10 Gbps. Coaxial cable uses a shielded central conductor and was used for cable TV and older Ethernet. Fiber optic carries light pulses through glass or plastic strands, offering the highest bandwidth (up to 400 Gbps), the longest distances, and immunity to electromagnetic interference — but at higher cost.", x: "Fiber uplinks between buildings, with Cat6 twisted pair to each desk." },
  "Wireless Media": { d: "Radio frequency (Wi-Fi, Bluetooth, cellular) is convenient but susceptible to interception and jamming. Infrared (IrDA) is short-range and line-of-sight. Microwave point-to-point links carry long-distance backbone and satellite traffic but can be intercepted by anyone in the signal path.", x: "Office Wi-Fi (RF) plus a microwave link bridging two distant sites." },
  "Bus": { d: "In a bus topology all devices share a single backbone cable, and data sent by one device is available to all others. It is simple and inexpensive, but a failure in the backbone brings down the entire network and it does not scale or tolerate faults well.", x: "Early 10BASE2 coax Ethernet, where one bad cable segment killed the whole LAN.", f: "bus" },
  "Tree": { d: "A tree topology is a hierarchical combination of star and bus topologies, allowing network expansion through branching. A failure in a branch segment isolates only that branch, but a failure in the backbone affects all downstream devices.", x: "A campus network with a core backbone branching into per-building star segments.", f: "tree" },
  "Star": { d: "In a star topology all devices connect to a central hub or switch — the most common LAN topology. A single device failing does not affect the others, but if the central device fails the whole network goes down. It is easy to install, manage, and troubleshoot.", x: "Office desktops each cabled back to one switch in the wiring closet.", f: "star" },
  "Mesh": { d: "In a mesh topology every device connects to every other device (full mesh) or to several others (partial mesh), giving high redundancy and fault tolerance — if one link fails, traffic reroutes. It is used in WANs and mission-critical networks but is expensive due to the number of connections required.", x: "Core ISP routers fully meshed so traffic reroutes instantly around a failed link.", f: "mesh" },
  "Ring": { d: "In a ring topology each device connects to exactly two neighbors, forming a circular loop, and data travels in one direction (or both in a dual ring). A break can disable the network unless a dual ring or FDDI provides redundancy. Token Ring networks used this topology.", x: "Legacy Token Ring, and modern dual-ring metro fiber that survives a single cut.", f: "ring" },
  "CSMA/CA": { d: "Carrier Sense Multiple Access with Collision Avoidance is the media-access method used by wireless networks (802.11). Before transmitting, a device listens to check the channel is clear, then uses Request to Send (RTS) / Clear to Send (CTS) signaling to reserve it — avoiding collisions, which wireless devices cannot reliably detect.", x: "Wi-Fi clients sending an RTS and waiting for a CTS before transmitting." },
  "CSMA/CD": { d: "Carrier Sense Multiple Access with Collision Detection is the media-access method used by wired Ethernet (802.3). Devices listen before transmitting and detect collisions during transmission; on a collision both stop, wait a random backoff period, and retransmit. Modern full-duplex switches have largely eliminated collisions.", x: "Half-duplex hub Ethernet, where two simultaneous transmissions collide and both retransmit." },
  "Hubs": { d: "A hub is a basic Layer-1 device that connects multiple Ethernet devices so they act as one segment, broadcasting every incoming frame to all ports and creating a single collision domain. Having no intelligence to filter traffic, hubs are obsolete and replaced by switches.", x: "An old hub where any plugged-in PC could sniff the entire segment's traffic." },
  "Repeaters": { d: "A repeater is a Layer-1 device that receives a signal, regenerates (amplifies) it, and retransmits it to extend the distance a signal can travel over a medium, counteracting attenuation. It does not inspect or filter traffic.", x: "A repeater extending an Ethernet run beyond the 100-metre copper limit." },
  "Concentrators": { d: "A concentrator is a multi-port device that serves as a central connection point for cabling from workstations, servers, and peripherals (historically used in Token Ring and ARCnet networks). It functions much like a hub but may include some management features.", x: "A wiring concentrator aggregating workstation cables in a legacy network." },
  "802.1x": { d: "IEEE 802.1X is a port-based network access control (PNAC) standard that provides an encapsulated EAP authentication framework for devices connecting to a network. 'Port-based' simply means it works with any type of network link — a switch port or a wireless access point. Its components are the supplicant (client), the authenticator (switch or AP), and the authentication server (typically RADIUS). It is not a wireless technology per se but an authentication technology usable by any device requiring authentication, including firewalls, routers, proxies, and VPN gateways.", x: "A laptop must pass 802.1X (e.g., EAP-TLS via RADIUS) before the switch port grants network access." },

  /* ===== Networking companion diagram — WAN, wireless, converged, virtualization, commands ===== */
  "X.25": { d: "One of the earliest packet-switched WAN protocols. It uses virtual circuits and performs error checking and flow control at every node, which makes it reliable but slow by modern standards. Largely obsolete.", x: "Legacy point-of-sale and banking terminals dialing into a shared X.25 network." },
  "Frame Relay": { d: "A faster packet-switched WAN successor to X.25 that drops per-hop error correction (leaving it to the endpoints). It uses virtual circuits identified by DLCIs and shares carrier bandwidth between customers.", x: "Connecting 1990s–2000s branch offices over a provider's Frame Relay cloud." },
  "ATM": { d: "Asynchronous Transfer Mode is a cell-switched WAN technology that uses fixed 53-byte cells (5-byte header + 48-byte payload). Fixed cells give predictable timing and built-in Quality of Service, making it good for voice and video.", x: "Telecom backbones and early DSL using ATM for guaranteed-latency traffic." },
  "MPLS": { d: "Multiprotocol Label Switching forwards packets by a short label instead of a full IP routing lookup, which is fast and protocol-independent. It supports traffic engineering, QoS, and carrier VPNs, and is a common modern enterprise WAN.", x: "An enterprise WAN giving voice traffic a higher-priority MPLS label than email." },
  "Wi-Fi": { d: "IEEE 802.11 wireless LAN, operating in the 2.4, 5, and 6 GHz bands. It is convenient but broadcasts over the air, so it must be secured with WPA2/WPA3 encryption and ideally 802.1X authentication.", x: "A home or office wireless LAN with devices associating to an access point." },
  "WiMAX": { d: "IEEE 802.16 broadband wireless for metropolitan-area / last-mile access over long ranges, used where running cable is impractical.", x: "Fixed wireless broadband delivered to rural homes from a tower." },
  "GSM / CDMA": { d: "The two main cellular technologies: GSM (SIM-based, uses time-division access) and CDMA (uses code-division access). They underpin 2G/3G mobile voice and data; modern networks use LTE/5G.", x: "A phone roaming on a GSM carrier using its SIM credentials." },
  "Microwave": { d: "Line-of-sight, point-to-point radio links used for long-distance backbone connections and building-to-building links. Anyone in the beam's path can potentially intercept it, so encryption is important.", x: "A microwave dish linking two campus buildings without trenching fiber." },
  "802.11": { d: "The Wi-Fi standards family: 802.11a (5 GHz), b/g (2.4 GHz), n (both, MIMO), ac (5 GHz, gigabit), and ax / Wi-Fi 6 (both bands, high efficiency in dense areas). Newer amendments add speed, range, and capacity.", x: "Deploying 802.11ax (Wi-Fi 6) in a crowded conference hall for many clients." },
  "WEP": { d: "Wired Equivalent Privacy — the original Wi-Fi encryption. It uses RC4 with a weak initialization vector and is trivially cracked in minutes. It is deprecated and must never be used.", x: "An old router still set to WEP, crackable with freely available tools." },
  "TKIP": { d: "Temporal Key Integrity Protocol was an interim fix (used by the original WPA) that wrapped stronger key management around WEP's RC4 cipher. It is now also deprecated in favor of AES-based encryption.", x: "Legacy WPA (TKIP) on hardware that predates WPA2/AES." },
  "WPA / WPA2": { d: "Wi-Fi Protected Access. WPA was the transitional standard; WPA2 introduced strong AES-CCMP encryption and is the long-standing baseline (WPA3 is the newest). Enterprise mode adds 802.1X/RADIUS authentication.", x: "WPA2-Enterprise Wi-Fi authenticating each user via EAP-TLS through RADIUS." },
  "IPv4 Network Classes": { d: "Classful IPv4 split the address space by leading bits: Class A (1–126, /8, huge networks), Class B (128–191, /16), Class C (192–223, /24, small networks), Class D (224–239, multicast), and Class E (240–255, experimental). Classful addressing was replaced by CIDR for efficiency.", x: "10.0.0.0 is a Class A range; 192.168.0.0 is Class C." },
  "Private IPv4 Addresses": { d: "RFC 1918 reserves non-routable ranges for internal use: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. They are not routed on the public internet and reach it through NAT.", x: "Every home router handing out 192.168.x.x addresses behind one public IP." },
  "VoIP": { d: "Voice over IP carries telephone calls as packets over data networks, typically using SIP for call setup and RTP for the audio stream. It cuts cost but inherits IP risks — eavesdropping, toll fraud, and DoS — so it is secured with SRTP and TLS and often isolated on a voice VLAN.", x: "Zoom, Teams, or a desk phone placing calls over the corporate IP network." },
  "PEAP": { d: "Protected EAP wraps the authentication exchange inside an encrypted TLS tunnel established with a server-side certificate, so credentials are never sent in the clear. It is one of the most common methods for WPA-Enterprise Wi-Fi (developed by Microsoft, Cisco, and RSA).", x: "Corporate Wi-Fi where users log in with their domain password over PEAP." },
  "Reconnaissance": { d: "Attack phase 1: gathering information about the target before touching it. Passive recon uses public sources (whois, DNS, search engines, social media); active recon lightly probes the target. The goal is to map the attack surface.", x: "Running whois and DNS lookups to learn a company's IP ranges and mail servers." },
  "Enumeration": { d: "Attack phase 2: actively interrogating discovered systems to extract specifics — usernames, shares, running services, software versions, and configurations — that narrow down how to break in.", x: "Querying a host to list its open SMB shares and local user accounts." },
  "Vulnerability Analysis": { d: "Attack phase 3: matching the enumerated systems and versions against known weaknesses, usually with vulnerability scanners, to find exploitable gaps and prioritize them.", x: "A Nessus/OpenVAS scan flagging an unpatched service with a known CVE." },
  "Exploitation": { d: "Attack phase 4: actually leveraging a vulnerability to gain unauthorized access, execute code, or escalate privileges — turning a weakness into a foothold.", x: "Using a known exploit against an unpatched service to get a remote shell." },
  "Man-in-the-Middle": { d: "An on-path attacker secretly positions themselves between two communicating parties to intercept, read, and potentially alter the traffic while relaying it, so both sides believe they are talking directly. Defeated by strong encryption plus authentication (TLS, certificate validation).", x: "An attacker on public Wi-Fi using ARP poisoning to read a victim's traffic." },
  "VLAN": { d: "A Virtual LAN logically divides one physical switch into multiple isolated broadcast domains. Devices on different VLANs can't talk without a router/Layer-3 switch, which contains broadcast traffic and the blast radius of attacks like ARP poisoning, and separates sensitive traffic.", x: "Putting VoIP phones, guests, and servers on separate VLANs on the same switch." },
  "SDN": { d: "Software-Defined Networking separates the control plane (the decisions about where traffic goes) from the data plane (the forwarding hardware) and centralizes control in a programmable controller. This makes the network agile and automatable, but the controller becomes a high-value target.", x: "A central SDN controller pushing routing policy to every switch from one place." },
  "Northbound & Southbound APIs": { d: "The two SDN interface directions: the northbound API connects the controller up to applications and orchestration tools (so software can request network behavior), while the southbound API connects the controller down to the network devices it programs (e.g., OpenFlow).", x: "An app requests bandwidth via the northbound API; the controller programs switches over the southbound API." },
  "ipconfig": { d: "A command to view and manage a host's IP configuration — address, subnet mask, default gateway, and DNS (ipconfig on Windows; ifconfig or ip on Linux/macOS). It can also release/renew DHCP leases and flush the DNS cache.", x: "'ipconfig /all' to see every adapter's IP, MAC, and DNS settings." },
  "ping": { d: "Sends ICMP echo requests to test whether a host is reachable and to measure round-trip latency and packet loss — the first connectivity check.", x: "'ping 8.8.8.8' to confirm the machine has internet reachability." },
  "traceroute": { d: "Maps the hop-by-hop path packets take to a destination by sending packets with increasing TTL values and recording each router that replies — useful for locating where a connection breaks or slows (tracert on Windows).", x: "'traceroute example.com' to see which hop is adding latency." },
  "whois": { d: "Queries registration databases for ownership and administrative details of a domain name or IP block — registrar, registrant, name servers, and dates. A staple of passive reconnaissance.", x: "'whois example.com' to find a domain's registrar and name servers." },
  "dig": { d: "Domain Information Groper — a flexible DNS lookup tool that queries DNS records (A, AAAA, MX, NS, TXT, etc.) and shows the resolver's exact response, used to troubleshoot and enumerate DNS.", x: "'dig MX example.com' to list a domain's mail servers." },
  "iSCSI": { d: "Internet Small Computer Systems Interface carries SCSI storage commands over standard TCP/IP, so a server can use remote disk storage as if it were a local drive. It converges the storage network onto the regular IP network — cheaper than dedicated Fibre Channel, but because it shares the data network it should be isolated (e.g., on a storage VLAN) and secured.", x: "A server mounting a remote disk volume over iSCSI across the LAN." },
  "FCoE": { d: "Fibre Channel over Ethernet encapsulates Fibre Channel storage frames directly inside Ethernet frames at Layer 2 (no IP/TCP). It lets storage and data traffic share one high-speed Ethernet fabric, cutting cabling, but it depends on a lossless, well-segmented Layer-2 network.", x: "A data center carrying SAN traffic over the same 10/40GbE switches as servers, via FCoE." },
  /* ===== 4.2 Secure Network Components ===== */
  "Redundant Power": { d: "Dual power supplies, UPS, and generators keep critical network gear running through outages — a core part of secure, available infrastructure.", x: "A core switch with two power supplies on separate circuits behind a UPS and generator." },
  "Warranty & Support": { d: "Vendor warranties and support/maintenance contracts ensure timely repair, firmware updates, and replacement of network hardware across its lifecycle.", x: "A 24x7 four-hour-replacement contract on data-center switches." },
  "Hardware Hardening": { d: "Securing the devices themselves: disable unused ports and services, change default credentials, manage over SSH (not Telnet), and keep firmware patched.", x: "Disabling unused switch ports and Telnet, enabling SSH with strong admin auth." },
  "Copper vs Fiber": { d: "Copper (twisted pair) is cheap but emits EMI and can be tapped; fiber carries light, is immune to EMI, far harder to tap, and spans longer distances — preferred for sensitive and backbone links.", x: "Running fiber between buildings to resist tapping and interference." },
  "Signal Propagation": { d: "Maintaining signal quality within the medium's limits (attenuation, crosstalk, noise); degraded signals cause errors and can leak emanations that are eavesdropped.", x: "Keeping Cat6 runs under 100 m to avoid attenuation and errors." },
  "Posture Assessment": { d: "Network Access Control checks a device's security posture (patch level, AV running, configuration) before granting access, quarantining non-compliant devices.", x: "An unpatched laptop is placed on a remediation VLAN until it updates." },
  "Agent vs Agentless": { d: "NAC can use an installed agent (deep posture data) or run agentless (fingerprint/scan at connection) — a trade-off of visibility versus deployment effort.", x: "Agentless NAC fingerprinting an IoT device that can't run an agent." },
  "Quarantine / Remediation": { d: "Unknown or non-compliant devices are isolated to a restricted VLAN where they can be remediated (patched/updated) before being granted full access.", x: "A guest device quarantined until it meets the access policy." },
  "EDR / HIDS": { d: "Endpoint Detection & Response / Host Intrusion Detection monitor endpoints for malicious behavior, alert, and can automatically isolate the host.", x: "EDR killing a process and isolating a laptop showing ransomware behavior." },
  "Host Firewall": { d: "A software firewall on each endpoint filters inbound/outbound traffic, limiting lateral movement even inside the network.", x: "Defender Firewall blocking inbound SMB on user laptops." },
  "Antivirus": { d: "Signature- and behavior-based malware detection on endpoints — a baseline control, strongest as one layer of defense-in-depth.", x: "AV quarantining a malicious attachment when a user opens it." },
  "Patch & Config Mgmt": { d: "Systematically keeping endpoints patched and configured to a secure baseline reduces the exploitable attack surface.", x: "Intune/WSUS pushing monthly patches and a hardened baseline." },

  /* ===== 4.3 Implement Secure Communication Channels ===== */
  "Video Conferencing": { d: "Real-time video collaboration over IP (e.g., Teams/Zoom); secure it with transport encryption, authentication, waiting rooms, and not exposing meeting IDs.", x: "An org-only Teams call encrypted in transit." },
  "Collaboration Tools": { d: "Chat, file-sharing, and conferencing platforms that converge communications onto IP; require access control, DLP, and encryption.", x: "Slack/Teams with SSO, DLP, and external-sharing controls." },
  "VPN": { d: "A Virtual Private Network creates an encrypted tunnel across an untrusted network so remote users or sites communicate securely (IPSec, TLS/SSL, or WireGuard).", x: "A remote worker on a TLS VPN reaching internal applications." },
  "RDP": { d: "Remote Desktop Protocol gives graphical remote control of a host (TCP 3389). High-risk if exposed — restrict to VPN, require Network Level Authentication and MFA.", x: "An admin reaching a server over RDP only through the VPN." },
  "Bastion / Jump Host": { d: "A hardened, heavily-monitored gateway host that administrators connect through to reach internal systems, shrinking the attack surface and centralizing logging.", x: "All SSH to production must hop through one logged bastion host." },
  "Backhaul Networks": { d: "The links that carry aggregated traffic from edge/access networks back to the core or internet; securing them (encryption, redundancy) protects bulk data in transit.", x: "Encrypted backhaul from cell towers to the operator core." },
  "Satellite": { d: "Long-distance wireless links for remote, maritime, or rural sites; high latency and a broadcast nature mean traffic must be encrypted end-to-end.", x: "A ship's VSAT link tunneled with IPSec over the satellite hop." },
  "Telecom Providers": { d: "Carriers supplying WAN/internet links are third parties: govern them with SLAs, encrypt over their networks, and don't implicitly trust the provider's segment.", x: "Encrypting site-to-site traffic even over a trusted carrier's MPLS." },
  "Vendor Support": { d: "Third-party hardware/software support relationships (remote access, maintenance) must be governed with least privilege, monitoring, time-boxing, and contracts.", x: "A vendor's remote support session via a monitored, time-limited account." },
  "Extranet / B2B": { d: "Controlled network connections to business partners; isolate them with firewalls/DMZ, strong authentication, and agreements so a partner compromise can't spread inward.", x: "A supplier portal in a DMZ with per-partner firewall rules." },
  /* ===== 4.3 secure communication channels (from CISSP_Domain4.pdf) ===== */
  "SIP": { d: "Session Initiation Protocol sets up, manages, and tears down VoIP/multimedia sessions. It is application-layer, runs over TCP or UDP, uses signalling port 5060, and provides integrity via an MD5 hash. SIP only signals the call \u2014 the media itself rides on RTP/SRTP.", x: "SIP negotiating a VoIP call on port 5060 before audio flows over SRTP." },
  "SRTP": { d: "Secure Real-time Transport Protocol is the encrypted version of RTP \u2014 it protects the actual voice/video media stream, giving VoIP confidentiality and integrity.", x: "SRTP encrypting the audio of a VoIP call so it cannot be eavesdropped." },
  "IP Convergence": { d: "Carrying different traffic types \u2014 voice, video, data, images \u2014 over a SINGLE IP network instead of separate networks. It cuts cost and cabling but mixes trust levels, so QoS prioritizes time-sensitive traffic (voice/video) and segmentation isolates it.", x: "Phones, video, and data over one IP network, with QoS giving voice priority." },
  "S/MIME": { d: "Secure/Multipurpose Internet Mail Extensions secures email with CA-issued certificates (centralized key management) \u2014 the enterprise standard. SIGNED messages give integrity, sender authentication, and non-repudiation; ENVELOPED messages add confidentiality (encryption). Supports multimedia attachments.", x: "A signed + enveloped S/MIME email: tamper-evident, attributable, and encrypted." },
  "PGP": { d: "Pretty Good Privacy secures email and files using a decentralized 'web of trust' (no central CA) \u2014 favored for personal/office use. Provides encryption, signing, integrity, and non-repudiation.", x: "Two people exchanging PGP-signed, encrypted email via directly-trusted keys." },
  "Split vs Full Tunnel": { d: "VPN tunnel scope. A SPLIT tunnel lets the client reach the corporate network (via VPN) and the internet directly at the same time \u2014 HIGH RISK, because one host bridges both. A FULL tunnel forces ALL traffic through the VPN and the corporate security stack first \u2014 more secure.", x: "Full tunnel routes a remote worker's web browsing through the company proxy too." },
  "SSL VPN": { d: "A browser-based VPN operating at the session/transport layer using SSL/TLS \u2014 no dedicated client software needed, very user-friendly, and ideal for remote access (often clientless/portal-based).", x: "A remote user reaching internal apps through an HTTPS VPN portal in their browser." },
  "AH": { d: "IPSec's Authentication Header provides authentication and integrity over the WHOLE packet (including headers) plus anti-replay \u2014 but NO encryption (no confidentiality). Because it covers the headers, AH BREAKS NAT (which rewrites them). ESP is usually preferred.", x: "AH proving an entire packet wasn't altered \u2014 but it can't traverse a NAT device." },
  "ESP": { d: "IPSec's Encapsulating Security Payload provides encryption plus authentication and integrity \u2014 but only on the PAYLOAD, not the outer headers. Because the headers aren't covered, ESP is NAT-compatible, which is why most VPNs use it.", x: "ESP encrypting a VPN payload that still passes cleanly through NAT." },
  "IKE": { d: "Internet Key Exchange negotiates IPSec security associations and keys. It combines ISAKMP (the framework/blueprint) with a Diffie-Hellman-based negotiation to securely establish the shared keys.", x: "IKE running a Diffie-Hellman exchange to set up an IPSec tunnel's keys." },
  "Transport Mode": { d: "IPSec transport mode encrypts only the packet's PAYLOAD, leaving the original IP header intact. Used for host-to-host (end-to-end) connections.", x: "Two servers using IPSec transport mode to encrypt data directly between them." },
  "Tunnel Mode": { d: "IPSec tunnel mode encrypts the ENTIRE original packet (including its headers) inside a new IP packet. Used for gateway-to-gateway (site-to-site) VPNs.", x: "Two office firewalls running IPSec tunnel mode to link their networks over the internet." },
  "RADIUS": { d: "Remote Authentication Dial-In User Service is an AAA protocol that COMBINES authentication and authorization (less flexible). It encrypts ONLY the password; all other data travels in cleartext (replay risk). Uses UDP. Common for Wi-Fi/802.1X but less robust than TACACS+.", x: "A wireless controller checking 802.1X logins against a RADIUS server over UDP." },
  "TACACS+": { d: "Terminal Access Controller Access-Control System Plus is the MOST ROBUST remote-access AAA protocol: it uses TCP (reliable delivery), encrypts the ENTIRE transmission (not just the password), and separates authentication, authorization, and accounting independently \u2014 ideal for device administration.", x: "Admins authenticating to routers and switches via TACACS+ with full encryption." },
  "Diameter": { d: "The successor to RADIUS with an improved AAA framework: it encrypts BOTH the username and password and uses IPSec (or TLS) for transport security. Used in modern mobile (4G/5G) core networks.", x: "A 4G/5G core network using Diameter for subscriber AAA." },
};

/* ------------------------------------------------------------
   4.2 Secure Network Components — same vertical infographic shape
   ------------------------------------------------------------ */
const domain42Model = [
  {
    name: "Infrastructure",
    desc: "Operating network hardware reliably and securely is the foundation of availability.",
    ex: "UPS + generator backup and dual PSUs on core switches.",
    columns: [
      { name: "Operation", info: "Reliable, hardened hardware operation.",
        items: [ { label: "Redundant Power", key: "Redundant Power" }, { label: "Warranty & Support", key: "Warranty & Support" }, { label: "Hardware Hardening", key: "Hardware Hardening" } ] }
    ]
  },
  {
    name: "Transmission Media",
    desc: "Protecting the physical medium and the quality/secrecy of the signal it carries.",
    ex: "Fiber backbone runs to resist tapping and EMI.",
    columns: [
      { name: "Media security", info: "Securing the medium and signal.",
        items: [ { label: "Copper vs Fiber", key: "Copper vs Fiber" }, { label: "Signal Propagation", key: "Signal Propagation" }, { label: "Eavesdropping / EMI", key: "Eavesdropping" } ] }
    ]
  },
  {
    name: "Network Access Control",
    desc: "Authenticating and posture-checking devices before they are granted access.",
    ex: "802.1X + posture check quarantines an unpatched laptop.",
    columns: [
      { name: "NAC", info: "Controlling who and what connects.",
        items: [ { label: "802.1X", key: "802.1x" }, { label: "Posture Assessment", key: "Posture Assessment" }, { label: "Agent vs Agentless", key: "Agent vs Agentless" }, { label: "Quarantine / Remediation", key: "Quarantine / Remediation" } ] }
    ]
  },
  {
    name: "Endpoint Security",
    desc: "Protecting the hosts at the edge — the most-targeted part of the network.",
    ex: "EDR + host firewall + patching on every endpoint.",
    columns: [
      { name: "Controls", info: "Host-level protections.",
        items: [ { label: "EDR / HIDS", key: "EDR / HIDS" }, { label: "Host Firewall", key: "Host Firewall" }, { label: "Antivirus", key: "Antivirus" }, { label: "Patch & Config Mgmt", key: "Patch & Config Mgmt" } ] }
    ]
  }
];

/* ------------------------------------------------------------
   4.3 Implement Secure Communication Channels
   ------------------------------------------------------------ */
const domain43Model = [
  {
    name: "Voice, Video & Collaboration",
    desc: "Securing real-time and collaborative communications converged onto the IP network.",
    ex: "VoIP on a separate VLAN with SRTP, and signed/encrypted S/MIME email.",
    columns: [
      { name: "VoIP & Multimedia", info: "Packet voice and the protocols that carry/secure it.",
        items: [ { label: "VoIP", key: "VoIP" }, { label: "SIP", key: "SIP" }, { label: "SRTP", key: "SRTP" }, { label: "IP Convergence", key: "IP Convergence" } ] },
      { name: "Secure Messaging", info: "Securing email (signing + encryption).",
        items: [ { label: "S/MIME", key: "S/MIME" }, { label: "PGP", key: "PGP" } ] },
      { name: "Conferencing", info: "Collaboration platforms.",
        items: [ { label: "Video Conferencing", key: "Video Conferencing" }, { label: "Collaboration Tools", key: "Collaboration Tools" } ] }
    ]
  },
  {
    name: "VPN & Tunneling",
    desc: "Encrypted tunnels across untrusted networks, and how much traffic they carry.",
    ex: "L2TP/IPSec for a site link; a full tunnel for remote staff.",
    columns: [
      { name: "VPN Protocols", info: "Tunnelling protocols, weakest to strongest.",
        items: [ { label: "PPTP", key: "PPTP" }, { label: "L2TP / IPSec", key: "L2TP" }, { label: "SSL VPN", key: "SSL VPN" } ] },
      { name: "Tunnel Scope", info: "How much client traffic uses the VPN.",
        items: [ { label: "Split vs Full Tunnel", key: "Split vs Full Tunnel" } ] }
    ]
  },
  {
    name: "IPSec",
    desc: "The Layer-3 protocol suite underpinning most secure tunnels.",
    ex: "ESP in tunnel mode between two gateways; IKE negotiating the keys.",
    columns: [
      { name: "Protocols", info: "IPSec's building blocks.",
        items: [ { label: "AH", key: "AH" }, { label: "ESP", key: "ESP" }, { label: "IKE", key: "IKE" } ] },
      { name: "Modes", info: "How much of the packet is protected.",
        items: [ { label: "Transport Mode", key: "Transport Mode" }, { label: "Tunnel Mode", key: "Tunnel Mode" } ] }
    ]
  },
  {
    name: "Remote Access (AAA)",
    desc: "Authenticating, authorizing, and accounting for remote and administrative access.",
    ex: "Admins reaching devices via TACACS+; users via a VPN.",
    columns: [
      { name: "AAA Protocols", info: "Centralized authentication servers (weakest to most robust).",
        items: [ { label: "RADIUS", key: "RADIUS" }, { label: "TACACS+", key: "TACACS+" }, { label: "Diameter", key: "Diameter" } ] },
      { name: "Access Methods", info: "Ways to reach the network/devices remotely.",
        items: [ { label: "VPN", key: "VPN" }, { label: "RDP", key: "RDP" }, { label: "SSH", key: "SSH" } ] },
      { name: "Authentication layer", info: "PPP = user auth; IPSec = system/machine auth.",
        items: [ { label: "PPP (user)", key: "PPP" }, { label: "IPSec (system)", key: "IPSec" } ] }
    ]
  },
  {
    name: "Data Communications",
    desc: "Carrying bulk and storage traffic securely between sites and back to the core.",
    ex: "iSCSI storage over the WAN; MPLS prioritizing voice with labels.",
    columns: [
      { name: "Converged Protocols", info: "Storage and label-switched transport over shared networks.",
        items: [ { label: "FCoE", key: "FCoE" }, { label: "iSCSI", key: "iSCSI" }, { label: "MPLS", key: "MPLS" } ] },
      { name: "Backhaul & Links", info: "Long-haul transport links.",
        items: [ { label: "Backhaul Networks", key: "Backhaul Networks" }, { label: "Satellite", key: "Satellite" } ] }
    ]
  },
  {
    name: "Third-party Connectivity",
    desc: "Governing connections to external providers and partners you don't fully control.",
    ex: "Encrypting over a carrier's MPLS; a monitored vendor support account.",
    columns: [
      { name: "External", info: "Connections beyond your perimeter.",
        items: [ { label: "Telecom Providers", key: "Telecom Providers" }, { label: "Vendor / Hardware Support", key: "Vendor Support" }, { label: "Extranet / B2B", key: "Extranet / B2B" } ] }
    ]
  }
];
