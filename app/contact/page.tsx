import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() { return <>
  <PageHero index="05" eyebrow="LET'S TALK" title={<>Bring the idea.<br /><em>I&apos;ll bring the moxie.</em></>} copy="For AI video, product collaborations, freelance work and thoughtful creative experiments." />
  <section className="contact shell"><a className="contact-email" href="mailto:ultimatemoxie290@gmail.com"><Mail /><span>EMAIL ME</span><strong>ultimatemoxie290<br className="mobile-only" />@gmail.com</strong><ArrowUpRight /></a><div className="contact-details"><div><span className="eyebrow">BASED IN</span><strong>Ilorin, Nigeria</strong><p>Available for remote opportunities.</p></div><div><span className="eyebrow">FIND ME</span><a target="_blank" href="https://x.com/ultimate_moxie">X <ArrowUpRight /></a><a target="_blank" href="https://linkedin.com/in/ultimate-moxie-a4664b292">LinkedIn <ArrowUpRight /></a><a target="_blank" href="https://github.com/ultimatemoxie">GitHub <ArrowUpRight /></a></div></div></section>
  </>; }
