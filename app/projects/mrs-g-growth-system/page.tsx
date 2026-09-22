import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/metadata";
import { PROFESSIONAL_NAME, SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";

const title = "Mrs. G — Commercial Growth & Conversion System";
const description = "An ongoing commercial-growth case study by Ultimate Moxie, building a measurable path from audience attention and focused offers to tracked paid action and continuous optimization.";

export const metadata: Metadata = createPageMetadata({
  path: "/projects/mrs-g-growth-system",
  title: `${title} | Ultimate Moxie`,
  description,
});

const conversionFlow = [
  "Social content",
  "Campaign-specific tracked link",
  "Focused product landing page",
  "Single primary CTA",
  "Fourthwall checkout",
  "Verified purchase/action",
  "Performance analysis",
  "Next optimization test",
];

const responsibilities = [
  ["Conversion & Funnel", ["Offer-to-audience alignment", "Campaign landing-page structure", "Primary CTA hierarchy", "Conversion-path testing"]],
  ["Analytics & Attribution", ["Campaign-specific tracking plan", "Baseline measurement", "Purchase/action verification", "Performance review framework"]],
  ["Systems & Automation", ["Link and destination routing", "Operational handoff design", "Repeatable campaign workflows", "Privacy-aware reporting structure"]],
  ["Creative & Growth", ["Content-to-offer continuity", "Campaign messaging direction", "Visual hierarchy", "Optimization-test planning"]],
] as const;

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: title,
  description,
  url: `${SITE_URL}/projects/mrs-g-growth-system`,
  creator: { "@type": "Person", name: PROFESSIONAL_NAME, url: SITE_URL },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  about: ["conversion strategy", "funnel architecture", "commercial growth", "analytics", "automation"],
  inLanguage: "en",
};

export default function MrsGGrowthSystemPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd).replace(/</g, "\\u003c") }} />

      <section className="growth-hero shell">
        <div className="growth-hero-meta eyebrow"><span>FLAGSHIP CASE STUDY</span><span>ONGOING COMMERCIAL GROWTH PILOT</span></div>
        <Reveal><h1><span>MRS. G</span>Commercial Growth<br />&amp; Conversion System</h1></Reveal>
        <div className="growth-hero-bottom">
          <p>Turning a large social audience into a measurable path from content → focused offers → tracked purchases.</p>
          <dl><div><dt>Role</dt><dd>Conversion Strategist, Funnel Builder &amp; Growth Operator</dd></div><div><dt>Status</dt><dd><i aria-hidden="true" /> Ongoing Commercial Growth Pilot</dd></div></dl>
        </div>
      </section>

      <section className="growth-brand-proof shell" aria-labelledby="brand-proof-title">
        <div className="growth-brand-proof-visual">
          <Image
            src="/images/projects/mrs-g-brand-proof.png"
            alt="Mrs. G Instagram profile alongside the officiallymrsg.com website, showing the path from social audience to commercial destination"
            fill
            priority
            sizes="(max-width: 720px) 100vw, 1440px"
          />
        </div>
        <div className="growth-brand-proof-copy">
          <div><span className="eyebrow">PUBLIC BRAND CONTEXT</span><h2 id="brand-proof-title">An established audience.<br /><em>An active commercial ecosystem.</em></h2></div>
          <p>Mrs. G is an openly identified fictional AI character brand with a large public social audience, books, digital products and an active commercial ecosystem.</p>
        </div>
        <dl className="growth-proof-stats">
          <div><dt>100M+</dt><dd>Video views</dd></div>
          <div><dt>150K</dt><dd>Followers across the brand ecosystem</dd></div>
          <div><dt>114K</dt><dd>Instagram followers</dd></div>
          <div><dt>2</dt><dd>Books</dd></div>
          <div><dt>4</dt><dd>Languages</dd></div>
        </dl>
        <div className="growth-public-links">
          <p>Public brand figures shown on officiallymrsg.com and the @officiallymrsg Instagram profile.</p>
          <div><a className="pill pill-light" href="https://officiallymrsg.com/" target="_blank" rel="noopener noreferrer">Visit live website <ArrowUpRight /></a><a className="text-link" href="https://instagram.com/officiallymrsg" target="_blank" rel="noopener noreferrer">View Instagram <ArrowUpRight /></a></div>
        </div>
      </section>

      <section className="growth-overview shell">
        <div className="growth-section-heading"><span className="eyebrow">01 · ENGAGEMENT OVERVIEW</span><Reveal><h2>Attention is valuable.<br /><em>A path to action makes it useful.</em></h2></Reveal></div>
        <div className="growth-overview-grid">
          <p className="growth-lead">The engagement is structured as an ongoing commercial-growth pilot: connecting audience attention to clear intent, a focused destination, tracked paid action and the next informed optimization test.</p>
          <div className="growth-system-art"><Image src="/images/projects/mrs-g-growth-system.svg" alt="Mrs. G commercial growth system from audience attention to optimization" fill sizes="(max-width: 720px) 100vw, 65vw" /></div>
        </div>
      </section>

      <section className="growth-challenge shell">
        <div className="growth-section-heading"><span className="eyebrow">02 · THE CHALLENGE</span><Reveal><h2>A large audience does not automatically become <em>commercial clarity.</em></h2></Reveal></div>
        <p className="growth-lead">The work begins by reducing friction between what the audience sees, what they understand, where they land and which action can be measured.</p>
      </section>

      <section className="growth-diagnosis shell" aria-labelledby="diagnosis-title">
        <div className="growth-section-heading"><span className="eyebrow">03 · THREE-PART DIAGNOSIS</span><Reveal><h2 id="diagnosis-title">Where momentum<br /><em>was leaking.</em></h2></Reveal></div>
        <div className="growth-diagnosis-grid">
          <article><span>01</span><h3>Fragmented conversion paths</h3><p>Audience attention could travel toward multiple destinations without one campaign-specific route or primary action.</p></article>
          <article><span>02</span><h3>Weak content-to-product continuity</h3><p>The promise made in content needed a clearer connection to the offer, destination and next step.</p></article>
          <article><span>03</span><h3>Attribution gaps</h3><p>Without a consistent tracked path, it was difficult to connect a campaign touchpoint with a verified purchase or action.</p></article>
        </div>
      </section>

      <section className="growth-flow shell" aria-labelledby="flow-title">
        <div className="growth-section-heading"><span className="eyebrow">04 · CONVERSION-SYSTEM FLOW</span><Reveal><h2 id="flow-title">One connected path.<br /><em>Every step accountable.</em></h2></Reveal></div>
        <ol>{conversionFlow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < conversionFlow.length - 1 && <ArrowRight aria-hidden="true" />}</li>)}</ol>
      </section>

      <section className="growth-architecture shell" aria-labelledby="architecture-title">
        <div className="growth-section-heading"><span className="eyebrow">05 · WEBSITE / FUNNEL ARCHITECTURE</span><Reveal><h2 id="architecture-title">A brand home that routes<br /><em>each intent clearly.</em></h2></Reveal></div>
        <div className="architecture-map">
          <div className="architecture-root"><span>HOMEPAGE</span><strong>Brand / intent router</strong></div>
          <div className="architecture-branches">
            <article><span>01</span><h3>Books</h3><p>Act Your Age</p><p>Harder to Ignore</p></article>
            <article><span>02</span><h3>Private Edition</h3><p>Subscription path</p></article>
            <article><span>03</span><h3>Shop</h3><p>Merchandise</p></article>
            <article><span>04</span><h3>Free</h3><p>Lead-generation resources</p></article>
          </div>
        </div>
      </section>

      <section className="growth-responsibilities shell" aria-labelledby="responsibilities-title">
        <div className="growth-section-heading"><span className="eyebrow">06 · RESPONSIBILITIES</span><Reveal><h2 id="responsibilities-title">Strategy, systems and creative—<br /><em>operated as one loop.</em></h2></Reveal></div>
        <div className="responsibility-grid">{responsibilities.map(([group, items], index) => <article key={group}><span>0{index + 1}</span><h3>{group}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="growth-evidence shell" aria-labelledby="evidence-title">
        <div className="growth-section-heading"><span className="eyebrow">07 · SELECTED VISUAL EVIDENCE</span><Reveal><h2 id="evidence-title">The system, shown<br /><em>without exposing private data.</em></h2></Reveal></div>
        <div className="evidence-grid">
          <figure><div className="evidence-path"><span>CONTENT</span><ArrowRight /><span>OFFER</span><ArrowRight /><span>ACTION</span><ArrowRight /><span>LEARNING</span></div><figcaption><strong>Campaign path map</strong><span>Public-facing conversion logic from attention to the next test.</span></figcaption></figure>
          <figure><div className="evidence-router"><strong>BRAND / INTENT ROUTER</strong><div><span>BOOKS</span><span>PRIVATE EDITION</span><span>SHOP</span><span>FREE</span></div></div><figcaption><strong>Destination architecture</strong><span>A focused route for each audience intent and offer family.</span></figcaption></figure>
        </div>
        <p className="privacy-note">Only public, non-sensitive system evidence is presented. Customer, order, subscriber, contract, credential, internal-access and private analytics information is intentionally excluded.</p>
      </section>

      <section className="growth-tools shell">
        <span className="eyebrow">08 · TOOLS / SYSTEM COMPONENTS</span>
        <div>{["Fourthwall checkout", "Campaign-specific tracked links", "Focused landing pages", "Analytics & attribution layer", "Automation workflows", "Reporting workspace"].map((tool) => <span key={tool}>{tool}</span>)}</div>
      </section>

      <section className="growth-results shell">
        <span className="eyebrow">09 · RESULTS — ONGOING</span>
        <Reveal><h2>Measure first.<br /><em>Claim only what is verified.</em></h2></Reveal>
        <p>“The commercial growth pilot is currently active. Baseline measurement, campaign attribution and focused conversion tests are being established before performance claims are published. Verified outcomes will be added as sufficient data becomes available.”</p>
      </section>

      <section className="growth-cta shell">
        <span className="eyebrow">BUILD THE COMMERCIAL PATH</span>
        <Reveal><h2>Audience attention is a start.<br /><em>Build the system that follows.</em></h2></Reveal>
        <a className="pill pill-light" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Discuss a commercial growth project with Ultimate Moxie">Discuss a growth system <ArrowUpRight /></a>
        <Link className="text-link" href="/#work">View more selected work <ArrowRight /></Link>
      </section>
    </>
  );
}
