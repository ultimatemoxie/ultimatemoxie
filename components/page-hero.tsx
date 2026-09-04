import { Reveal } from "./reveal";

export function PageHero({ index, eyebrow, title, copy, className = "" }: { index: string; eyebrow: string; title: React.ReactNode; copy: string; className?: string }) {
  return (
    <section className={`page-hero shell ${className}`.trim()}>
      <div className="eyebrow"><span>{index}</span><span>{eyebrow}</span></div>
      <Reveal><h1>{title}</h1></Reveal>
      <Reveal className="page-hero-copy" delay={0.1}><p>{copy}</p></Reveal>
    </section>
  );
}
