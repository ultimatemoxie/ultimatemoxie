import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import { SOCIAL_PROFILES, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  path: "/contact",
  title: "Contact Ultimate Moxie | AI Video & Software Projects",
  description: "Contact Ultimate Moxie to discuss AI video production, websites, web applications, CRM systems, automation projects and remote creative or software opportunities.",
});
export default function ContactPage() { return <>
  <PageHero index="05" eyebrow="LET'S TALK" title={<>Bring the idea.<br /><em>I&apos;ll bring the moxie.</em></>} copy="For AI video, product collaborations, freelance work and thoughtful creative experiments." />
  <section className="contact shell"><div className="contact-channels"><a className="contact-email" href="mailto:ultimatemoxie290@gmail.com"><Mail /><span>EMAIL ME</span><strong>ultimatemoxie290<br className="mobile-only" />@gmail.com</strong><ArrowUpRight /></a><a className="contact-email contact-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Contact Ultimate Moxie on WhatsApp"><MessageCircle /><span>WHATSAPP</span><strong>+234 704 265 2606</strong><small>Chat on WhatsApp ↗</small><ArrowUpRight /></a></div><div className="contact-details"><div><span className="eyebrow">BASED IN</span><strong>Ilorin, Nigeria</strong><p>Available for remote opportunities.</p></div><div><span className="eyebrow">FIND ME</span><a target="_blank" rel="noopener noreferrer" aria-label="Ultimate Moxie on X" href={SOCIAL_PROFILES.x}>X <ArrowUpRight /></a><a target="_blank" rel="noopener noreferrer" aria-label="Ultimate Moxie on LinkedIn" href={SOCIAL_PROFILES.linkedin}>LinkedIn <ArrowUpRight /></a><a target="_blank" rel="noopener noreferrer" aria-label="Ultimate Moxie on GitHub" href={SOCIAL_PROFILES.github}>GitHub <ArrowUpRight /></a></div></div></section>
  </>; }
