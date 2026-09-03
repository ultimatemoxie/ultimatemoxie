import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Braces, Clapperboard } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SelectedWorkCard } from "@/components/selected-work-card";
import { featuredWork, tools } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({ path: "/" });

export default function Home() {
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

      <section className="featured shell">
        <div className="section-heading"><span className="eyebrow">SELECTED WORK · 2025—NOW</span><h2>Built to be<br /><em>experienced.</em></h2></div>
        <div className="featured-grid">{featuredWork.map((project, i) => <Reveal key={project.title}><SelectedWorkCard project={project} index={i} /></Reveal>)}</div>
      </section>

      <section className="about-preview shell"><div className="eyebrow">A BUILDER, NOT A CATEGORY</div><div><Reveal><h2>I don&apos;t separate<br /><em>creativity</em> from<br />technology.</h2></Reveal><div className="about-copy"><p>I enjoy taking ideas from an empty page to something people can actually watch, click, use or experience.</p><Link className="text-link" href="/about">More about me <ArrowRight /></Link></div></div></section>
    </>
  );
}
