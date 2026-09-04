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
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.eyebrow,
    description: service.seoDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Person",
      name: PROFESSIONAL_NAME,
      alternateName: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: [{ "@type": "Country", name: "Nigeria" }, { "@type": "Place", name: "Remote" }],
    serviceType: service.eyebrow,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
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

      <section className="service-tools shell"><span className="eyebrow">TOOLS IN THE WORKFLOW</span><div>{service.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></section>

      <section className="service-related shell"><span className="eyebrow">RELATED SERVICES</span><div>{service.related.map((slug) => <Link key={slug} href={`/services/${slug}`}><span>{services[slug].eyebrow}</span><strong>{services[slug].title.join(" ")}</strong><ArrowRight /></Link>)}</div></section>

      <section className="service-cta shell"><span className="eyebrow">START A CONVERSATION</span><h2>{service.cta}</h2><a className="pill pill-light" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Contact Ultimate Moxie on WhatsApp">{service.ctaLabel} <ArrowUpRight /></a></section>
    </>
  );
}
