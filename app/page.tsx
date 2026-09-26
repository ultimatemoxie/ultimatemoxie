import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Braces, Clapperboard } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SelectedWorkCard } from "@/components/selected-work-card";
import { featuredWork, tools } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { AGENTIC_RESEARCH_LINKS } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  path: "/",
  description: "Ultimate Moxie is an AI Creative & Product Builder creating cinematic AI video, software, automation and experiments for the emerging agentic internet.",
});

export default function Home() {
  const followBuildUrl = AGENTIC_RESEARCH_LINKS.agentReadyUrl ?? AGENTIC_RESEARCH_LINKS.xUrl;

  return (
    <>
      <section className="hero shell">
        <div className="hero-background" aria-hidden="true">
          <Image
            priority
            src="/images/ultimate-moxie-clay-portrait-banner.png"
            alt=""
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 1024px) 100vw, 1440px"
          />
        </div>
        <div className="hero-copy-wash" aria-hidden="true" />
        <div className="hero-meta eyebrow"><span>AI CREATIVE + PRODUCT BUILDER</span><span>ILORIN, NIGERIA · AVAILABLE REMOTELY</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal><h1>I build things<br />people can<span className="hero-mobile-break"><br /></span> <em>watch,</em><br /><span>use &amp; remember.</span></h1></Reveal>
            <Reveal className="hero-description" delay={0.12}><p>I&apos;m Oladosu Abdulmuiz Adeshina, also known as Ultimate Moxie—an AI Creative &amp; Product Builder creating cinematic AI video, software products, websites, CRM systems and automation workflows.</p><div className="hero-actions"><Link className="pill pill-ember" href="#work">Explore My Work <ArrowRight /></Link><Link className="text-link" href="/resume">View Resume <ArrowUpRight /></Link></div></Reveal>
          </div>
        </div>
        <div className="discipline-strip">{["AI VIDEO", "SOFTWARE", "AUTOMATION", "PRODUCT THINKING"].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}</div>
      </section>

      <section className="toolbelt"><div className="eyebrow shell">CURRENT TOOLBELT</div><div className="marquee"><div>{[...tools, ...tools].map((tool, i) => <span key={`${tool}-${i}`}>{tool}<i>✦</i></span>)}</div></div></section>

      <section id="work" className="build-section shell">
        <div className="section-intro"><div className="eyebrow">WHAT I BUILD</div><Reveal><h2>Two sides of<br /><em>the same builder.</em></h2></Reveal><p>Moving between story and system—always building toward a clear, useful experience.</p></div>
        <div className="discipline-cards">
          <Link href="/video" className="discipline-card video-card"><span className="card-number">01</span><div className="card-icon"><Clapperboard /></div><div><span className="eyebrow">THE CREATIVE DISCIPLINE</span><h3>AI VIDEO</h3><p>Cinematic commercials<br />Music videos<br />Trailers<br />Visual storytelling</p></div><span className="card-cta">Enter the Studio <ArrowUpRight /></span></Link>
          <Link href="/software" className="discipline-card software-card"><span className="card-number">02</span><div className="card-icon"><Braces /></div><div><span className="eyebrow">THE PRODUCT DISCIPLINE</span><h3>SOFTWARE</h3><p>Web applications<br />Websites &amp; landing pages<br />CRM &amp; automation<br />SaaS products</p></div><span className="card-cta">Explore the Builds <ArrowUpRight /></span></Link>
        </div>
      </section>

      <section id="agentic-internet" className="agentic-section shell" aria-labelledby="agentic-title">
        <div className="agentic-grid" aria-hidden="true" />
        <div className="agentic-header">
          <div className="eyebrow">CURRENT RESEARCH · 2026</div>
          <h2 id="agentic-title">BUILDING FOR<br /><em>THE AGENTIC INTERNET.</em></h2>
          <div className="agentic-intro">
            <p>The internet was designed for humans to search, click and transact. I&apos;m exploring what businesses need when AI agents begin doing those things on our behalf.</p>
            <p>Through Myric, I&apos;m researching how businesses become discoverable, understandable and actionable by AI agents—with a particular interest in what this means for African businesses and conversational commerce.</p>
          </div>
        </div>

        <div className="agentic-comparison" aria-label="A comparison of the human web and the agentic web">
          <div className="agentic-path">
            <span className="eyebrow">HUMAN WEB</span>
            <ol>{["Search", "Website", "Browse", "Click", "Buy"].map((step) => <li key={step}><i aria-hidden="true" /><span>{step}</span></li>)}</ol>
          </div>
          <div className="agentic-versus" aria-hidden="true"><span>VERSUS</span></div>
          <div className="agentic-path agentic-path-active">
            <span className="eyebrow">AGENTIC WEB</span>
            <ol>{["Ask", "Agent discovers", "Understands", "Evaluates", "Acts"].map((step) => <li key={step}><i aria-hidden="true" /><span>{step}</span></li>)}</ol>
          </div>
        </div>

        <div className="agentic-areas">
          {[
            ["01", "AGENT READINESS", "Can AI agents reliably understand a business?", "Identity · products · pricing · availability · policies · structured data"],
            ["02", "AGENT ACTIONS", "Can an agent actually do something useful?", "Contact · quote · booking · inventory · checkout · APIs · connectors"],
            ["03", "AGENTIC COMMERCE", "What changes when software buys on behalf of people?", "Discovery · trust · permissions · payments · transactions"],
          ].map(([number, title, copy, detail]) => (
            <article className="agentic-area" key={number}>
              <span className="agentic-area-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <small>{detail}</small>
            </article>
          ))}
        </div>

        <div className="agentic-experiment">
          <div className="agentic-experiment-meta"><span className="eyebrow">EXPERIMENT 001</span><span className="agentic-status">BUILDING IN PUBLIC</span></div>
          <div className="agentic-experiment-body">
            <div><h3>AgentReady</h3><p>An experimental Myric project for testing how understandable and actionable a business is to AI agents.</p></div>
            <div className="agentic-actions">
              <a className="pill pill-light" href={followBuildUrl} target="_blank" rel="noopener noreferrer" aria-label="Follow the AgentReady build on X">Follow the Build <ArrowUpRight /></a>
              {AGENTIC_RESEARCH_LINKS.youtubeUrl ? <a className="text-link" href={AGENTIC_RESEARCH_LINKS.youtubeUrl} target="_blank" rel="noopener noreferrer">Watch the Research <ArrowUpRight /></a> : <span className="agentic-disabled-link" aria-disabled="true">Watch the Research <small>YouTube link coming soon</small></span>}
            </div>
          </div>
        </div>

        <blockquote className="agentic-quote">“I&apos;m not trying to build another AI assistant.<br /><em>I&apos;m interested in building what businesses need when the assistant becomes the customer.</em>”</blockquote>

        <div className="agentic-africa">
          <span className="eyebrow">BUILDING FROM AFRICA</span>
          <div><p>Many businesses here run through combinations of websites, WhatsApp, Instagram, payments, spreadsheets and human workflows rather than perfectly structured APIs.</p><p>That makes Africa an interesting place to study what agent-ready infrastructure actually needs to look like.</p></div>
        </div>

        <div className="agentic-journey">
          <p>I&apos;m documenting the research, failures and experiments as I go.</p>
          <div>
            <a className="pill pill-ember" href={AGENTIC_RESEARCH_LINKS.xUrl} target="_blank" rel="noopener noreferrer" aria-label="Follow Ultimate Moxie on X">Follow on X <ArrowUpRight /></a>
            {AGENTIC_RESEARCH_LINKS.youtubeUrl ? <a className="pill pill-outline" href={AGENTIC_RESEARCH_LINKS.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch Ultimate Moxie on YouTube">Watch on YouTube <ArrowUpRight /></a> : <span className="pill pill-outline agentic-disabled-button" aria-disabled="true">Watch on YouTube <small>Coming soon</small></span>}
          </div>
        </div>
      </section>

      <section className="home-launch-offer shell">
        <div><span className="eyebrow">FEATURED OFFER</span><strong><span>$</span>250</strong></div>
        <Reveal><h2>Need launch content <em>fast?</em></h2></Reveal>
        <div className="home-launch-offer-copy"><p>The 48-Hour AI Launch Pack turns one idea into a cinematic promo, social cutdowns, a branded key visual and posting copy.</p><Link className="pill pill-light" href="/services/ai-launch-pack">Explore the Launch Pack <ArrowRight /></Link></div>
      </section>

      <section className="featured shell">
        <div className="section-heading"><span className="eyebrow">SELECTED WORK · 2025—NOW</span><h2>Built to be<br /><em>experienced.</em></h2></div>
        <div className="featured-grid">{featuredWork.map((project, i) => <Reveal key={project.title}><SelectedWorkCard project={project} index={i} /></Reveal>)}</div>
      </section>

      <section className="about-preview shell"><div className="eyebrow">A BUILDER, NOT A CATEGORY</div><div><Reveal><h2>I don&apos;t separate<br /><em>creativity</em> from<br />technology.</h2></Reveal><div className="about-copy"><p>I enjoy taking ideas from an empty page to something people can actually watch, click, use or experience.</p><Link className="text-link" href="/about">More about me <ArrowRight /></Link></div></div></section>
    </>
  );
}
