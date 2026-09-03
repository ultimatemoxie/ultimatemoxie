import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/about",
  title: "About Ultimate Moxie | Oladosu Abdulmuiz Adeshina",
  description: "Meet Oladosu Abdulmuiz Adeshina, also known as Ultimate Moxie—a Nigerian AI video creator, software developer and automation builder based in Ilorin, Nigeria.",
});
export default function AboutPage() { return <>
  <PageHero index="03" eyebrow="ABOUT THE BUILDER" title={<>One mind.<br />Two disciplines.<br /><em>Endless curiosity.</em></>} copy="I move comfortably between cinematic frames and product systems—because the most interesting ideas rarely stay in one lane." />
  <section className="about-page shell"><Reveal className="about-portrait"><Image src="/images/moxie-avatar.jpg" alt="Ultimate Moxie, AI Creative and Product Builder" width={700} height={700} /></Reveal><div className="about-story"><span className="eyebrow">OLADOSU ABDULMUIZ ADESHINA</span><h2>I like the moment when an idea stops being abstract.</h2><p>I&apos;m an AI Creative &amp; Product Builder based in Ilorin, Nigeria. My creative work spans cinematic promotional videos, trailers, advertisements and short-form content. My product work focuses on web applications, AI-assisted development and practical automation.</p><p>Whether I&apos;m shaping a scene or a software flow, the job is similar: understand the idea, remove what is unnecessary, and build an experience that communicates clearly.</p><Link className="pill pill-ember" href="/contact">Build something together <ArrowRight /></Link></div></section>
  <section className="principles shell"><span className="eyebrow">HOW I APPROACH THE WORK</span><div>{[["01","Story before spectacle"],["02","Systems with a human point"],["03","Make, test, refine"]].map(([n,t]) => <div key={n}><span>{n}</span><h3>{t}</h3></div>)}</div></section>
  </>; }
