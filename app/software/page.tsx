import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { softwareProjects } from "@/data/projects";
import { ArrowUpRight, BarChart3, CircleDollarSign, Sparkles } from "lucide-react";

export const metadata: Metadata = { title: "Software", description: "Web applications, AI-assisted products and automation systems by Ultimate Moxie." };

export default function SoftwarePage() {
  const cues = softwareProjects[0];
  return <>
    <PageHero index="02" eyebrow="SOFTWARE + PRODUCTS" title={<>I turn ideas<br />into <em>working products.</em></>} copy="Web applications, AI-assisted products and automation systems designed around real problems." />
    <section className="software-feature shell">
      <Reveal className="product-stage"><div className="browser-bar"><span /><span /><span /><b>CUES / OVERVIEW</b></div><div className="mock-dashboard"><aside><strong>Cues</strong><i /><i /><i /></aside><div className="dashboard-main"><span className="eyebrow">GOOD MORNING</span><h3>Your money,<br />made clearer.</h3><div className="dash-grid"><div><CircleDollarSign /><span>Spending view</span><strong>₦ —</strong></div><div><BarChart3 /><span>Behaviour patterns</span><strong>Insights</strong></div><div><Sparkles /><span>Finance intelligence</span><strong>In development</strong></div></div></div></div></Reveal>
      <div className="product-copy"><div className="eyebrow"><span>01</span><span>VERIFIED BUILD</span></div><h2>{cues.title}</h2><h3>{cues.subtitle}</h3><p>{cues.description}</p><div className="status"><span />{cues.status}</div><div className="stack">{cues.stack.map(item => <span key={item}>{item}</span>)}</div><div className="product-actions"><a className="pill pill-ember" target="_blank" rel="noopener noreferrer" href={cues.liveUrl}>Visit checkcues.com <ArrowUpRight /></a><a className="text-link" target="_blank" rel="noopener noreferrer" href={cues.githubUrl}>View GitHub <ArrowUpRight /></a></div></div>
    </section>
    <section className="coming shell"><span className="eyebrow">NEXT IN THE WORKSHOP</span><div><h2>More useful things<br />are taking shape.</h2><p>Additional software case studies will appear here when they are ready to share.</p></div></section>
  </>;
}
