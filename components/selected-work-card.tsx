"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";
import type { FeaturedProject } from "@/data/projects";

export function SelectedWorkCard({ project, index }: { project: FeaturedProject; index: number }) {
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const external = project.mediaType === "external";
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  const poster = (
    <div className={`featured-visual${project.thumbnail ? " has-project-media" : ""}`}>
      {project.thumbnail && <Image src={project.thumbnail} alt={`${project.title} project thumbnail`} fill sizes="(max-width: 720px) 100vw, 50vw" />}
      {project.thumbnail && <span className="featured-media-shade" aria-hidden="true" />}
      <span className="featured-index">0{index + 1}</span>
      {project.mediaType === "video" ? <span className="featured-play" aria-hidden="true"><Play fill="currentColor" /></span> : <ArrowDownRight />}
    </div>
  );

  return (
    <article className={`featured-card featured-${project.tone} feature-${index + 1}`}>
      {project.mediaType === "video" && playing && !failed ? (
        <div className="featured-visual has-project-media featured-video-active">
          <video src={project.videoSrc} controls playsInline preload="metadata" poster={project.thumbnail} autoPlay aria-label={`${project.title} video player`} onError={() => { setFailed(true); setPlaying(false); }} />
        </div>
      ) : project.mediaType === "video" ? (
        <button className="featured-media-button" type="button" aria-label={`Play ${project.title}`} onClick={() => { setFailed(false); setPlaying(true); }}>{poster}</button>
      ) : (
        <Link href={project.href} {...linkProps}>{poster}</Link>
      )}
      <div className="featured-caption">
        <Link href={project.href} {...linkProps}><span>{project.category}</span><h3>{project.title}</h3>{external && <small>Visit checkcues.com ↗</small>}</Link>
        <Link href={project.href} aria-label={external ? "Visit Cues live product" : `View ${project.title}`} {...linkProps}><ArrowUpRight /></Link>
      </div>
    </article>
  );
}
