// Statische HTML-demo genereren uit dezelfde content-bestanden als de Astro-site.
// Draait met gewoon Node (geen build/installatie nodig). Output: ../hrmforce-demo/
import { readFileSync, writeFileSync, mkdirSync, cpSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { home, clients } from "./src/data/home.js";
import { pages } from "./src/data/pages.js";
import { assessments } from "./src/data/assessments.js";
import { ui, languages } from "./src/i18n/ui.js";

const __dir = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dir, "..", "hrmforce-site-compleet");
mkdirSync(OUT, { recursive: true });
cpSync(join(__dir, "src/styles/global.css"), join(OUT, "style.css"));

const LANGS = ["nl", "en", "de", "fr", "es", "ro"];
const SUB_LANGS = ["nl","en","de","fr","es","ro"]; // talen met volledige subpagina's in deze demo
const hasSubs = (l) => SUB_LANGS.includes(l);
const pre = (l) => (l === "nl" ? "" : l + "-");
const t = (l, k) => ui[l]?.[k] ?? ui.nl[k] ?? k;

const SUBKEYS = ["hrm-oplossingen", "advies", "over-ons", "contact", "support"];
// Bestandsnaam voor een pagina in een taal (met fallback naar home als de subpagina niet bestaat).
function file(key, l) {
  if (key === "home") return `${pre(l)}index.html`;
  if (key === "assessment") return "assessment-big-five.html";
  if (SUBKEYS.includes(key) && !hasSubs(l)) return `${pre(l)}index.html`;
  return `${pre(l)}${key}.html`;
}

const NOTE = `<div style="background:#fff8f3;border-bottom:1px dashed #d95d15;color:#8a4a25;font-size:13px;text-align:center;padding:8px">HTML-demo uit de Astro-content · 6 talen · taalwissel rechtsboven · homepage in alle talen, subpagina's nu in NL/EN</div>`;

function header(l, active, key) {
  const logo = "https://hrmforce.com/wp-content/uploads/2022/03/HRM-LOGO.svg";
  const a = (k) => (active === k ? ' class="active"' : "");
  const langSwitch = LANGS.map(
    (c) => `<a href="${file(key, c)}" style="margin-left:8px;opacity:${c === l ? 1 : 0.7};color:#fff">${languages[c]}</a>`
  ).join("");
  return `${NOTE}
<div class="topbar"><div class="wrap">
  <a href="https://assessment.hrmforce.com/Login.aspx">${t(l,"topbar.login")}</a>
  <span class="langs">${langSwitch}</span>
  <a href="${file("contact", l)}" style="color:#fff;font-weight:600">${t(l,"topbar.demo")} &rarr;</a>
</div></div>
<header><div class="wrap nav">
  <a class="logo" href="${file("home", l)}"><img src="${logo}" alt="hrmforce"></a>
  <nav class="menu">
    <a href="shop.html"${a("shop")}>${t(l,"nav.shop")}</a>
    <a href="${file("assessment", l)}"${a("assessments")}>${t(l,"nav.assessments")}</a>
    <a href="${file("hrm-oplossingen", l)}"${a("solutions")}>${t(l,"nav.solutions")}</a>
    <a href="${file("advies", l)}"${a("advice")}>${t(l,"nav.advice")}</a>
    <a href="${file("over-ons", l)}"${a("about")}>${t(l,"nav.about")}</a>
    <a href="${file("contact", l)}"${a("contact")}>${t(l,"nav.contact")}</a>
  </nav>
  <div class="nav-cta">
    <a href="shop.html" class="btn btn-ghost">${t(l,"cta.shop")}</a>
    <a href="${file("contact", l)}" class="btn btn-primary">${t(l,"cta.demo")}</a>
  </div>
</div></header>`;
}

function footer(l) {
  return `<footer><div class="wrap">
  <div class="fgrid">
    <div><div class="flogo">hrmforce</div><p>${t(l,"footer.tagline")}</p></div>
    <div><h4>${t(l,"footer.quick")}</h4><ul>
      <li><a href="${file("assessment",l)}">${t(l,"footer.assessments")}</a></li>
      <li><a href="#">${t(l,"footer.knowledge")}</a></li>
      <li><a href="${file("advies",l)}">${t(l,"footer.training")}</a></li>
      <li><a href="shop.html">${t(l,"nav.shop")}</a></li></ul></div>
    <div><h4>${t(l,"footer.more")}</h4><ul>
      <li><a href="${file("over-ons",l)}">${t(l,"footer.about")}</a></li>
      <li><a href="#">${t(l,"footer.partners")}</a></li>
      <li><a href="${file("support",l)}">${t(l,"footer.support")}</a></li></ul></div>
    <div><h4>${t(l,"footer.contact")}</h4><p>Solitudolaan 396<br>1096 DS Amsterdam</p>
      <p style="margin-top:10px">T: +31 (0)88 88 321 88<br>E: service@hrmforce.com</p></div>
  </div>
  <div class="fbottom"><span>Copyright hrmforce &copy; 2009&ndash;2026</span><span>${t(l,"footer.rights")}</span></div>
</div></footer>`;
}

const doc = (l, title, body) => `<!DOCTYPE html><html lang="${l}"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title><link rel="stylesheet" href="style.css"></head>
<body>${body}<script>document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>q.parentElement.classList.toggle('open')));</script>
</body></html>`;

function renderHome(l) {
  const h = home[l];
  const cardHref = (r) => (r === "assessments" ? file("assessment", l) : file(r === "solutions" ? "hrm-oplossingen" : r === "advice" ? "advies" : "over-ons", l));
  const bullets = h.hero.bullets.length ? `<ul>${h.hero.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : "";
  const logos = h.logos ? `<section class="logos"><div class="wrap">${h.logos.eyebrow ? `<div class="eyebrow">${h.logos.eyebrow}</div>` : ""}
    <h2 class="section-title">${h.logos.title}</h2>
    <div class="logo-grid">${clients.map((c) => `<div>${c}</div>`).join("")}</div></div></section>` : "";
  const works = h.works ? `<section><div class="wrap center"><div class="eyebrow">${h.works.eyebrow}</div>
    <h2 class="section-title">${h.works.title}</h2><p class="lead">${h.works.lead}</p>
    <div class="steps">${h.works.steps.map((s) => `<div class="step"><div class="n">${s.n}</div><h3>${s.h}</h3><p>${s.p}</p></div>`).join("")}</div></div></section>` : "";
  const blog = h.blog ? `<section class="blog"><div class="wrap"><div class="eyebrow">${h.blog.eyebrow}</div>
    <h2 class="section-title">${h.blog.title}</h2>
    <div class="posts">${h.blog.posts.map((p) => `<div class="post"><div class="img"></div><div class="body"><span class="tag">${p.tag}</span><h3>${p.h}</h3><span class="date">${p.date}</span></div></div>`).join("")}</div></div></section>` : "";
  const faq = h.faq ? `<section><div class="wrap"><div class="center"><div class="eyebrow">${h.faq.eyebrow}</div>
    <h2 class="section-title" style="margin-bottom:42px">${h.faq.title}</h2></div>
    <div style="max-width:820px;margin:0 auto">${h.faq.items.map((f) => `<div class="faq-item"><div class="faq-q">${f.q}<span class="pl">+</span></div><div class="faq-a"><p>${f.a}</p></div></div>`).join("")}</div></div></section>` : "";
  const trust = h.ctaBand.trust.length ? `<div class="trust">${h.ctaBand.trust.map((x) => `<span>${x}</span>`).join("")}</div>` : "";
  const body = `${header(l, "home", "home")}
  <section class="hero"><div class="wrap">
    <div><h1>${h.hero.pre}<em>${h.hero.em}</em>${h.hero.post}</h1>
      <p class="sub">${h.hero.sub}</p>${bullets}
      <a href="${file("assessment", l)}" class="btn btn-primary">${h.hero.cta}</a></div>
    <div class="hero-card"><div class="screen"><span class="chip">Rapport</span>
      <div class="bar b1"></div><div class="bar b2"></div><div class="bar b3"></div>
      <div class="donut"></div><p style="text-align:center;font-size:13px;color:var(--muted);margin-top:12px">${h.hero.caption}</p></div></div>
  </div></section>
  <section><div class="wrap center">${h.intro.eyebrow ? `<div class="eyebrow">${h.intro.eyebrow}</div>` : ""}
    <h2 class="section-title">${h.intro.title}</h2><p class="lead">${h.intro.lead}</p>
    <div class="cards">${h.cards.map((c) => `<div class="card"><div class="ic">${c.ic}</div><h3>${c.h}</h3><p>${c.p}</p><a href="${cardHref(c.route)}">${c.cta}</a></div>`).join("")}</div>
  </div></section>
  ${logos}${works}${blog}${faq}
  <section class="cta"><div class="wrap"><h2>${h.ctaBand.title}</h2><p>${h.ctaBand.text}</p>
    <div class="btns"><a href="${file("contact", l)}" class="btn btn-primary">${h.ctaBand.primary}</a>
    <a href="${file("assessment", l)}" class="btn btn-light">${h.ctaBand.secondary}</a></div>${trust}</div></section>
  ${footer(l)}`;
  return doc(l, h.metaTitle, body);
}

function renderSub(l, key, active) {
  const p = pages[l][key];
  const cta = l === "nl"
    ? { title: "Ontdek welke aanpak past bij jouw HR-vraagstuk", text: "Bespreek je situatie met een hrmforce-specialist.", primary: "Plan een demo", secondary: "Bekijk de assessments" }
    : { title: "Discover the approach that fits your HR challenge", text: "Discuss your situation with an hrmforce specialist.", primary: "Book a demo", secondary: "View the assessments" };
  const mid = p.isContact
    ? `<section class="formsec"><div class="wrap" style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start">
        <div><h2 class="section-title" style="font-size:24px">Hrmforce</h2>
          <p style="color:var(--muted)">Solitudolaan 396<br>1096 DS Amsterdam</p>
          <p style="margin-top:14px;color:var(--muted)">T: +31 (0)88 88 321 88<br>E: service@hrmforce.com</p></div>
        <form class="formcard" onsubmit="event.preventDefault();alert('Demo-formulier');">
          <div class="fg"><label>${p.form.name} *</label><input required></div>
          <div class="fg"><label>${p.form.company}</label><input></div>
          <div class="frow"><div class="fg"><label>${p.form.email} *</label><input type="email" required></div>
          <div class="fg"><label>${p.form.phone}</label><input></div></div>
          <div class="fg"><label>${p.form.message} *</label><textarea rows="4" required></textarea></div>
          <button class="btn btn-primary">${p.form.submit}</button></form>
      </div></section>`
    : `<section><div class="wrap">
        ${(p.intro || []).map((x) => `<p style="color:var(--text);font-size:17px;max-width:820px;margin-bottom:14px">${x}</p>`).join("")}
        <div class="cards" style="margin-top:34px">${(p.cards || []).map((c) => `<div class="card"><h3>${c.h}</h3><p>${c.p}</p></div>`).join("")}</div>
      </div></section>`;
  const body = `${header(l, active, key)}
  <div class="crumb"><div class="wrap"><a href="${file("home", l)}">Home</a> › <span>${p.title}</span></div></div>
  <section class="ahero"><div class="wrap" style="display:block">
    <div class="eyebrow" style="color:var(--gold)">${p.eyebrow}</div>
    <h1>${p.title}</h1>
    <p style="color:#c4d2e6;font-size:19px;max-width:760px;margin-top:8px">${p.lead}</p></div></section>
  ${mid}
  <section class="cta"><div class="wrap"><h2>${cta.title}</h2><p>${cta.text}</p>
    <div class="btns"><a href="${file("contact", l)}" class="btn btn-primary">${cta.primary}</a>
    <a href="${file("assessment", l)}" class="btn btn-light">${cta.secondary}</a></div></div></section>
  ${footer(l)}`;
  return doc(l, p.metaTitle, body);
}

function renderAssessment() {
  const l = "nl";
  const a = assessments[0];
  const body = `${header(l, "assessments", "assessment")}
  <div class="crumb"><div class="wrap"><a href="index.html">Home</a> › <a href="assessment-big-five.html">Online assessments</a> › <span>${a.title}</span></div></div>
  <section class="ahero"><div class="wrap">
    <div><div class="eyebrow" style="color:var(--gold)">Online assessments</div><h1>${a.title}</h1>
      <div class="meta-row"><span class="lbl">Fase</span><span class="val">${a.phase}</span></div>
      <div class="meta-row"><span class="lbl">Doel</span><span class="val">${a.goal}</span></div>
      <div class="btns"><a href="contact.html" class="btn btn-primary">Gratis demo</a><a href="#request" class="btn btn-light">Direct starten</a></div>
      <div class="guarantee"><strong style="color:#fff">Niet tevreden? Geld terug!</strong><span><span class="stars">★★★★★</span> 10.000+ deelnemers · <b style="color:#fff">4,9/5</b></span></div></div>
    <div class="device"><div class="screen"><span class="chip">Voorbeeldrapport</span>
      ${a.traits.map((tr, i) => `<div class="traitbar"><span>${tr}</span><div class="track"><div class="fill" style="width:${40 + ((i * 13) % 50)}%"></div></div></div>`).join("")}</div></div>
  </div></section>
  <div class="infobar"><div class="wrap"><div class="info-grid">
    <div><div class="lbl">Tijd</div><div class="v">${a.time}</div></div>
    <div><div class="lbl">Vorm</div><div class="v">${a.form}</div></div>
    <div><div class="lbl">Feedback</div><div class="v">${a.feedback}</div></div>
    <div><div class="lbl">Extra</div><div class="v">${a.extra}</div></div></div></div></div>
  <section><div class="wrap"><div class="eyebrow">Uitleg</div><h2 class="section-title">${a.title}</h2>
    <div class="explain"><div>
      ${a.intro.map((p) => `<p>${p}</p>`).join("")}
      <ul class="traits">${a.traits.map((tr) => `<li>${tr}</li>`).join("")}</ul>
      ${a.body.map((p) => `<p>${p}</p>`).join("")}
      <a href="#request" class="btn btn-primary" style="margin-top:8px">Direct starten</a></div>
      <div class="pentagon"><div class="ring"></div><p style="color:var(--muted);font-size:14px">De vijf dimensies van het Big Five-model.</p></div></div></div></section>
  <section class="quote"><div class="wrap"><div class="avatar">${a.quote.initials}</div>
    <div><h3>${a.quote.heading}</h3><blockquote>"${a.quote.text}"</blockquote>
    <div class="who"><b>${a.quote.author}</b> — ${a.quote.role}</div></div></div></section>
  <section><div class="wrap"><div class="center"><div class="eyebrow">Veelgestelde vragen</div>
    <h2 class="section-title" style="margin-bottom:42px">Alles over ${a.title}</h2></div>
    <div style="max-width:820px;margin:0 auto">${a.faq.map((f) => `<div class="faq-item"><div class="faq-q">${f.q}<span class="pl">+</span></div><div class="faq-a"><p>${f.a}</p></div></div>`).join("")}</div></div></section>
  <section class="formsec" id="request"><div class="wrap"><div class="center"><div class="eyebrow">Aanvragen</div>
    <h2 class="section-title">${a.title} aanvragen</h2></div>
    <form class="formcard" onsubmit="event.preventDefault();alert('Demo-formulier');">
      <div class      <div class="fg"><label>Voornaam *</label><input required></div>
      <div class="fg"><label>Werk e-mail *</label><input type="email" required></div>
      <button class="btn btn-primary">Verzenden</button></form></div></section>
  ${footer(l)}`;
  return doc(l, a.metaTitle, body);
}

const subs = [
  ["hrm-oplossingen", "solutions"],
  ["advies", "advice"],
  ["over-ons", "about"],
  ["support", ""],
  ["contact", "contact"],
];
let count = 0;
for (const l of LANGS) {
  writeFileSync(join(OUT, file("home", l)), renderHome(l)); count++;
}
for (const l of SUB_LANGS) {
  for (const [key, active] of subs) {
    writeFileSync(join(OUT, `${pre(l)}${key}.html`), renderSub(l, key, active)); count++;
  }
}
writeFileSync(join(OUT, "assessment-big-five.html"), renderAssessment()); count++;
console.log(`Klaar: ${count} paginas gegenereerd`);
