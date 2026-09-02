import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const socials = [
  ["X", "https://x.com/ultimate_moxie"],
  ["LinkedIn", "https://linkedin.com/in/ultimate-moxie-a4664b292"],
  ["GitHub", "https://github.com/ultimatemoxie"],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top eyebrow"><span>START A CONVERSATION</span><span>ILORIN, NIGERIA</span></div>
      <Link href="mailto:ultimatemoxie290@gmail.com" className="footer-statement">Have an idea?<br /><em>Let&apos;s make it real.</em><ArrowUpRight /></Link>
      <div className="footer-bottom">
        <div><strong>Oladosu Abdulmuiz Adeshina</strong><span>Ultimate Moxie</span></div>
        <a href="mailto:ultimatemoxie290@gmail.com">ultimatemoxie290@gmail.com</a>
        <div className="socials">{socials.map(([label, href]) => <a target="_blank" rel="noreferrer" href={href} key={label}>{label}</a>)}</div>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
