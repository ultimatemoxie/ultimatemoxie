import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { VideoProjectCard } from "@/components/project-card";
import { videoProjects } from "@/data/projects";

export const metadata: Metadata = { title: "AI Video", description: "Cinematic AI commercials, music videos, trailers and visual storytelling by Ultimate Moxie." };

export default function VideoPage() {
  return <>
    <PageHero index="01" eyebrow="AI VIDEO + CREATIVE" title={<>Stories don&apos;t need<br />bigger budgets.<br /><em>They need better ideas.</em></>} copy="AI Film · Commercials · Music Videos · Visual Direction" />
    <section className="projects-list shell"><div className="list-heading"><span className="eyebrow">SELECTED FILMS</span><span className="eyebrow">03 PROJECTS</span></div>{videoProjects.map((project, i) => <Reveal key={project.slug}><VideoProjectCard project={project} index={i} /></Reveal>)}</section>
  </>;
}
