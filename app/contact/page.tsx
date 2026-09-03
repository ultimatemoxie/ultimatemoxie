import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Contact" };
const whatsappUrl = "https://wa.me/2347042652606?text=Hi%20Moxie%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%2Fopportunity%20with%20you.";
export default function ContactPage() { return <>
  <PageHero index="05" eyebrow="LET'S TALK" title={<>Bring the idea.<br /><em>I&apos;ll bring the moxie.</em></>} copy="For AI video, product collaborations, freelance work and thoughtful creative experiments." />
  <section className="contact shell"><div className="contact-channels"><a className="contact-email" href="mailto:ultimatemoxie290@gmail.com"><Mail /><span>EMAIL ME</span><strong>ultimatemoxie290<br className="mobile-only" />@gmail.com</strong><ArrowUpRight /></a><a className="contact-email contact-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contact Ultimate Moxie on WhatsApp"><MessageCircle /><span>WHATSAPP</span><strong>+234 704 265 2606</strong><small>Chat on WhatsApp ↗</small><ArrowUpRight /></a></div><div className="contact-details"><div><span className="eyebrow">BASED IN</span><strong>Ilorin, Nigeria</strong><p>Available for remote opportunities.</p></div><div><span className="eyebrow">FIND ME</span><a target="_blank" href="https://x.com/ultimate_moxie">X <ArrowUpRight /></a><a target="_blank" href="https://linkedin.com/in/ultimate-moxie-a4664b292">LinkedIn <ArrowUpRight /></a><a target="_blank" href="https://github.com/ultimatemoxie">GitHub <ArrowUpRight /></a></div></div></section>
  </>; }
