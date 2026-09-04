"use client";

import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";
import type { SoftwareProject } from "@/data/projects";

export function SoftwareProjectCard({ project, index, autoPlayOnOpen = true }: { project: SoftwareProject; index: number; autoPlayOnOpen?: boolean }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="software-project-card">
      {project.videoSrc && playing ? (
        <div className="software-project-media software-project-video">
          <video src={project.videoSrc} controls playsInline preload="metadata" poster={project.thumbnail} autoPlay={autoPlayOnOpen} aria-label={`${project.title} demo`} />
        </div>
      ) : project.videoSrc ? (
        <button className="software-project-media software-project-play" type="button" onClick={() => setPlaying(true)} aria-label={`Play ${project.title} demo`}>
          {project.thumbnail && <Image src={project.thumbnail} alt={project.thumbnailAlt ?? `${project.title} interface`} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" />}
          <span><Play fill="currentColor" /></span>
        </button>
      ) : project.liveUrl ? (
        <a className="software-project-media" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} live site`}>
          {project.thumbnail && <Image src={project.thumbnail} alt={project.thumbnailAlt ?? `${project.title} website screenshot`} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" />}
        </a>
      ) : null}
      <div className="software-project-copy">
        <div className="software-project-meta"><span>0{index + 1}</span><span>{project.category}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.role && <p className="software-project-role"><strong>Role</strong>{project.role}</p>}
        {project.stack?.length ? <div className="stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div> : null}
        <div className="software-project-actions">
          {project.liveUrl && <a className="pill pill-ember" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit Live Site <ArrowUpRight /></a>}
          {project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View Code <ArrowUpRight /></a>}
        </div>
      </div>
    </article>
  );
}
