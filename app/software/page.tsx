import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SoftwareProjectCard } from "@/components/software-project-card";
import { crmProjects, softwareProjects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Software", description: "Web applications, AI-assisted products and automation systems by Ultimate Moxie." };

export default function SoftwarePage() {
  const cues = softwareProjects[0];
  const websites = softwareProjects.filter(project => !project.featured);
  return <>
    <PageHero index="02" eyebrow="SOFTWARE + PRODUCTS" title={<>I turn ideas<br />into <em>working products.</em></>} copy="Web applications, AI-assisted products and automation systems designed around real problems." />
    <section className="software-feature shell">
      <Reveal className="product-stage"><a className="cues-feature-media" href={cues.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit Cues at checkcues.com"><Image src={cues.thumbnail!} alt="Cues campaign artwork showing people using the personal finance product" fill sizes="(max-width: 1024px) 100vw, 55vw" /></a></Reveal>
      <div className="product-copy"><div className="eyebrow"><span>01</span><span>FEATURED PRODUCT</span></div><h2>{cues.title}</h2><h3>{cues.subtitle}</h3><p>{cues.description}</p><div className="status"><span />{cues.status}</div><div className="stack">{cues.stack?.map(item => <span key={item}>{item}</span>)}</div><div className="product-actions"><a className="pill pill-ember" target="_blank" rel="noopener noreferrer" href={cues.liveUrl ?? "https://checkcues.com"}>Visit checkcues.com <ArrowUpRight /></a>{cues.githubUrl && <a className="text-link" target="_blank" rel="noopener noreferrer" href={cues.githubUrl}>View GitHub <ArrowUpRight /></a>}</div></div>
    </section>
    <section className="software-projects shell">
      <div className="software-projects-heading"><span className="eyebrow">WEBSITES &amp; LANDING PAGES</span><h2>Digital places<br /><em>built with purpose.</em></h2></div>
      <div className="software-project-grid">{websites.map((project, index) => <Reveal key={project.slug}><SoftwareProjectCard project={project} index={index} /></Reveal>)}</div>
    </section>
    {crmProjects.length > 0 && <section className="software-projects crm-projects shell"><div className="software-projects-heading"><span className="eyebrow">CRM &amp; AUTOMATION</span><h2>Systems that keep<br /><em>work moving.</em></h2></div><div className="software-project-grid">{crmProjects.map((project, index) => <Reveal key={project.slug}><SoftwareProjectCard project={project} index={index} /></Reveal>)}</div></section>}
  </>;
}
