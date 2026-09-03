import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { VideoProjectCard } from "@/components/project-card";
import { videoProjects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/video",
  title: "AI Video Creator & Cinematic AI Portfolio | Ultimate Moxie",
  description: "Explore cinematic AI commercials, AI music videos and short films by Ultimate Moxie, created with visual storytelling, prompt design, image-to-video, Veo, Kling, editing and sound design.",
});

export default function VideoPage() {
  return <>
    <PageHero index="01" eyebrow="AI VIDEO + CREATIVE" title={<>Stories don&apos;t need<br />bigger budgets.<br /><em>They need better ideas.</em></>} copy="AI video production for cinematic commercials, music videos and short films—combining prompt design, image-to-video, editing, visual storytelling and sound design with Veo and Kling." />
    <section className="projects-list shell"><div className="list-heading"><span className="eyebrow">SELECTED FILMS</span><span className="eyebrow">03 PROJECTS</span></div>{videoProjects.map((project, i) => <Reveal key={project.slug}><VideoProjectCard project={project} index={i} /></Reveal>)}</section>
  </>;
}
