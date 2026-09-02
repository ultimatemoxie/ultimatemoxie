"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { VideoProject } from "@/data/projects";

export function VideoProjectCard({ project, index }: { project: VideoProject; index: number }) {
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  return (
    <article className="video-project">
      {playing && !loadFailed ? (
        <div className="project-media project-video-active">
          <video
            src={project.videoSrc}
            controls
            playsInline
            preload="metadata"
            poster={project.thumbnail}
            autoPlay
            aria-label={`${project.title} video player`}
            onError={() => { setLoadFailed(true); setPlaying(false); }}
          />
        </div>
      ) : (
        <motion.button type="button" className={`project-media project-media-trigger tone-${project.tone}`} onClick={() => { setLoadFailed(false); setPlaying(true); }} aria-label={`Play ${project.title}`} whileHover={reduced ? undefined : { scale: 0.985 }} transition={{ duration: 0.35 }}>
          <Image src={project.thumbnail} alt={`${project.title} video poster`} fill sizes="(max-width: 720px) 100vw, 1440px" />
          <span className="project-media-shade" aria-hidden="true" />
          <span className="media-index">0{index + 1}</span>
          <span className="play" aria-hidden="true"><Play fill="currentColor" /></span>
        </motion.button>
      )}
      <div className="project-info">
        <div><span className="eyebrow">{project.category}</span><h2><Link href={`/video/${project.slug}`}>{project.title}</Link></h2></div>
        <p>{project.description}</p>
        <dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Tools</dt><dd>{project.tools.join(" · ")}</dd></div></dl>
        <Link className="text-link" href={`/video/${project.slug}`}>View project <ArrowUpRight /></Link>
      </div>
    </article>
  );
}
