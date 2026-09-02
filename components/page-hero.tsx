import { Reveal } from "./reveal";

export function PageHero({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: React.ReactNode; copy: string }) {
  return (
    <section className="page-hero shell">
      <div className="eyebrow"><span>{index}</span><span>{eyebrow}</span></div>
      <Reveal><h1>{title}</h1></Reveal>
      <Reveal className="page-hero-copy" delay={0.1}><p>{copy}</p></Reveal>
    </section>
  );
}
