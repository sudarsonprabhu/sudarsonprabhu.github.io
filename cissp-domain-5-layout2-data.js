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
});
