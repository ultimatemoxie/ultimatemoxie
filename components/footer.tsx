import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_PROFILES } from "@/lib/site";
import { serviceList } from "@/data/services";

const socials = [
  ["X", SOCIAL_PROFILES.x],
  ["LinkedIn", SOCIAL_PROFILES.linkedin],
  ["GitHub", SOCIAL_PROFILES.github],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top eyebrow"><span>START A CONVERSATION</span><span>ILORIN, NIGERIA</span></div>
      <Link href="mailto:ultimatemoxie290@gmail.com" className="footer-statement">Have an idea?<br /><em>Let&apos;s make it real.</em><ArrowUpRight /></Link>
      <nav className="footer-services" aria-label="Services"><span className="eyebrow">SERVICES</span><div>{serviceList.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}>{service.eyebrow}<ArrowUpRight /></Link>)}</div></nav>
      <div className="footer-bottom">
        <div><strong>Oladosu Abdulmuiz Adeshina</strong><span>Ultimate Moxie</span></div>
        <a href="mailto:ultimatemoxie290@gmail.com">ultimatemoxie290@gmail.com</a>
        <div className="socials">{socials.map(([label, href]) => <a target="_blank" rel="noopener noreferrer" aria-label={`Ultimate Moxie on ${label}`} href={href} key={label}>{label}</a>)}</div>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
