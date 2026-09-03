import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { videoProjects } from "@/data/projects";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/metadata";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return videoProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = videoProjects.find((item) => item.slug === slug);
  return project ? createPageMetadata({
    path: `/video/${project.slug}`,
    title: `${project.title} | Ultimate Moxie`,
    description: project.description,
  }) : {};
}

export default async function VideoProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = videoProjects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const project = videoProjects[index];
  const nextProject = videoProjects[(index + 1) % videoProjects.length];

  return (
    <>
      <section className="project-detail-hero shell">
        <div className="eyebrow"><span>0{index + 1}</span><span>{project.category}</span></div>
        <Reveal><h1>{project.title}</h1></Reveal>
      </section>
      <section className="project-detail shell" aria-labelledby="project-video-heading">
        <h2 id="project-video-heading" className="sr-only">Watch {project.title}</h2>
        <Reveal className="video-player-wrap">
          <video
            src={project.videoSrc}
            controls
            playsInline
            preload="metadata"
            poster={project.thumbnail}
            aria-label={`${project.title} video player`}
          />
        </Reveal>
        <div className="project-detail-info">
          <div><span className="eyebrow">ABOUT THE PROJECT</span><p className="detail-lead">{project.description}</p>{project.projectNote && <p className="project-note">{project.projectNote}</p>}</div>
          <dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Tools</dt><dd>{project.tools.join(" · ")}</dd></div></dl>
        </div>
        <div className="project-detail-nav">
          <Link className="text-link" href="/video"><ArrowLeft /> Back to AI Video Work</Link>
          <Link className="next-project" href={`/video/${nextProject.slug}`}><span className="eyebrow">NEXT PROJECT</span><strong>{nextProject.title}</strong><ArrowRight /></Link>
        </div>
      </section>
    </>
  );
}
