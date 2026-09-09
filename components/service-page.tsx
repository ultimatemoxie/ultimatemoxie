import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SoftwareProjectCard } from "@/components/software-project-card";
import { VideoProjectCard } from "@/components/project-card";
import { crmProjects, softwareProjects, videoProjects } from "@/data/projects";
import { services, type ServicePageData } from "@/data/services";
import { PROFESSIONAL_NAME, SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";

function ServiceJsonLd({ service }: { service: ServicePageData }) {
  const serviceUrl = `${SITE_URL}/services/${service.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.eyebrow,
    description: service.seoDescription,
    url: serviceUrl,
    provider: {
      "@type": "Person",
      name: PROFESSIONAL_NAME,
      alternateName: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: [{ "@type": "Country", name: "Nigeria" }, { "@type": "Place", name: "Remote" }],
    serviceType: service.eyebrow,
    ...(service.price && service.priceCurrency ? {
      offers: {
        "@type": "Offer",
        url: serviceUrl,
        price: service.price,
        priceCurrency: service.priceCurrency,
        description: "48-Hour AI Launch Pack",
      },
    } : {}),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

function RelatedServices({ service }: { service: ServicePageData }) {
  return <section className="service-related shell"><span className="eyebrow">RELATED SERVICES</span><div>{service.related.map((slug) => <Link key={slug} href={`/services/${slug}`}><span>{services[slug].eyebrow}</span><strong>{services[slug].title.join(" ")}</strong><ArrowRight /></Link>)}</div></section>;
}

function LaunchPackPage({ service }: { service: ServicePageData }) {
  const whatsappUrl = service.whatsappUrl ?? WHATSAPP_URL;

  return (
    <>
      <ServiceJsonLd service={service} />
      <section className="page-hero service-hero launch-pack-hero shell">
        <div className="eyebrow"><span>{service.index}</span><span>{service.eyebrow}</span></div>
        <Reveal><h1><span className="service-title-line">{service.title[0]}</span><br /><em className="service-title-line">{service.title[1]}</em></h1></Reveal>
        <Reveal className="page-hero-copy" delay={0.1}><p>{service.heroCopy}</p></Reveal>
        <Reveal className="launch-pack-hero-offer" delay={0.16}>
          <strong><span>$</span>{service.price}</strong>
          <p>{service.heroNote}</p>
          <div><a className="pill pill-ember" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Book the 48-Hour AI Launch Pack on WhatsApp">Book the Launch Pack <ArrowUpRight /></a><a className="text-link" href="#selected-work">View Sample Work <ArrowRight /></a></div>
        </Reveal>
        <div className="launch-gradient-background" aria-hidden="true">
          {/* This image layer can later be swapped for an autoplay, muted, looped, playsInline video when an animated gradient asset exists. */}
          <Image priority src="/images/launch-pack/launch-gradient-01.png" alt="" fill sizes="100vw" />
          <span />
        </div>
      </section>

      <section className="service-overview launch-pack-included shell">
        <div className="service-section-heading"><span className="eyebrow">{service.sectionLabel}</span><Reveal><h2>{service.sectionTitle}</h2></Reveal></div>
        <div className="service-intro-copy">{service.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="service-capability-grid">{service.capabilities.map((capability, index) => <div key={capability}><span>0{index + 1}</span><h3>{capability}</h3><p>{service.capabilityDetails?.[index]}</p></div>)}</div>
      </section>

      <section className="launch-pack-audience shell">
        <div className="service-section-heading"><span className="eyebrow">BUILT FOR LAUNCH MOMENTS</span><Reveal><h2>Focused content for the moment <em>you go live.</em></h2></Reveal></div>
        <div>{service.bestFor?.map((item, index) => <span key={item}><i>{String(index + 1).padStart(2, "0")}</i>{item}</span>)}</div>
      </section>

      <section className="service-process launch-pack-process shell">
        <div className="service-section-heading"><span className="eyebrow">HOW IT WORKS</span><Reveal><h2>Four steps from brief <em>to launch.</em></h2></Reveal></div>
        <ol>{service.process.map(([number, label, description]) => <li key={number}><span>{number}</span><h3>{label}</h3><p>{description}</p></li>)}</ol>
      </section>

      <section id="selected-work" className="service-work shell">
        <div className="service-section-heading"><span className="eyebrow">SELECTED WORK</span><Reveal><h2>Cinematic work,<br /><em>already in motion.</em></h2></Reveal></div>
        <SelectedServiceWork service={service} />
      </section>

      <section className="launch-pack-why shell">
        <span className="eyebrow">WHY THIS OFFER</span>
        <Reveal><h2>{service.whyTitle?.[0]}<br /><em>{service.whyTitle?.[1]}</em></h2></Reveal>
        <p>{service.whyCopy}</p>
      </section>

      <RelatedServices service={service} />

      <section className="service-cta launch-pack-cta shell">
        <span className="eyebrow">READY TO LAUNCH?</span>
        <h2>Your next campaign<br />doesn’t need to start<br />from a blank page.</h2>
        <div className="launch-pack-cta-details"><strong><span>$</span>{service.price}</strong><ul>{service.ctaItems?.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <a className="pill pill-light" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Book the 48-Hour AI Launch Pack on WhatsApp">{service.ctaLabel} <ArrowUpRight /></a>
        <small>{service.ctaNote}</small>
      </section>
    </>
  );
}

function SelectedServiceWork({ service }: { service: ServicePageData }) {
  if (service.workType === "video") {
    return <div className="service-video-list">{videoProjects.map((project, index) => <Reveal key={project.slug}><VideoProjectCard project={project} index={index} /></Reveal>)}</div>;
  }

  if (service.workType === "software" || service.workType === "crm") {
    const projects = service.workType === "software" ? softwareProjects : crmProjects;
    return <div className="software-project-grid">{projects.map((project, index) => <Reveal key={project.slug}><SoftwareProjectCard project={project} index={index} autoPlayOnOpen={service.workType !== "crm"} /></Reveal>)}</div>;
  }

  return (
    <div className="service-creative-grid">
      {videoProjects.slice(0, 2).map((project, index) => (
        <Reveal key={project.slug}>
          <Link className="service-creative-card" href={`/video/${project.slug}`}>
            <span className="service-creative-media"><Image src={project.thumbnail} alt={project.thumbnailAlt} fill sizes="(max-width: 720px) 100vw, 50vw" /></span>
            <span className="eyebrow">0{index + 1} · {project.category}</span>
            <strong>{project.title}</strong>
            <span className="text-link">See the visual direction <ArrowUpRight /></span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function ServicePage({ service }: { service: ServicePageData }) {
  if (service.slug === "ai-launch-pack") return <LaunchPackPage service={service} />;

  return (
    <>
      <ServiceJsonLd service={service} />
      <PageHero className="service-hero" index={service.index} eyebrow={service.eyebrow} title={<><span className="service-title-line">{service.title[0]}</span><br /><em className="service-title-line">{service.title[1]}</em></>} copy={service.heroCopy} />

      <section className="service-overview shell">
        <div className="service-section-heading"><span className="eyebrow">{service.sectionLabel}</span><Reveal><h2>{service.sectionTitle}</h2></Reveal></div>
        <div className="service-intro-copy">{service.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="service-capability-grid">{service.capabilities.map((capability, index) => <div key={capability}><span>0{index + 1}</span><h3>{capability}</h3></div>)}</div>
      </section>

      <section className="service-process shell">
        <div className="service-section-heading"><span className="eyebrow">PROCESS</span><Reveal><h2>From first question<br /><em>to finished work.</em></h2></Reveal></div>
        <ol>{service.process.map(([number, label]) => <li key={number}><span>{number}</span><h3>{label}</h3></li>)}</ol>
      </section>

      <section className="service-work shell">
        <div className="service-section-heading"><span className="eyebrow">SELECTED WORK</span><Reveal><h2>Existing work,<br /><em>not placeholders.</em></h2></Reveal></div>
        <SelectedServiceWork service={service} />
      </section>

      {(service.slug === "ai-video-production" || service.slug === "ai-content-creation") && <aside className="service-offer-callout shell"><div><span className="eyebrow">48-HOUR AI LAUNCH PACK</span><h2>Need something focused and fast?</h2></div><Link className="pill pill-ember" href="/services/ai-launch-pack">Explore the Launch Pack <ArrowRight /></Link></aside>}

      <section className="service-tools shell"><span className="eyebrow">TOOLS IN THE WORKFLOW</span><div>{service.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></section>

      <RelatedServices service={service} />

      <section className="service-cta shell"><span className="eyebrow">START A CONVERSATION</span><h2>{service.cta}</h2><a className="pill pill-light" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Contact Ultimate Moxie on WhatsApp">{service.ctaLabel} <ArrowUpRight /></a></section>
    </>
  );
}
