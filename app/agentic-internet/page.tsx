import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { AGENTIC_RESEARCH_LINKS } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  path: "/agentic-internet",
  title: "Building for the Agentic Internet | Ultimate Moxie",
  description: "Research and experiments on personal AI agents, agent-ready businesses, business connectors and agentic commerce from Ultimate Moxie.",
});

const learnings = [
  ["01", "THE MODEL IS NOT THE AGENT", "The model provides intelligence. The surrounding harness provides memory, tools, permissions, loops, guardrails and reliability."],
  ["02", "MEMORY IS ARCHITECTURE", "Personal agents need different kinds of context: current context, durable facts, procedural preferences and historical events."],
  ["03", "ACTIONABILITY MATTERS", "A business being understandable to an agent is not enough. Eventually agents need safe, structured ways to act."],
  ["04", "PERMISSIONS ARE INFRASTRUCTURE", "“The agent can access this tool” is different from: “The agent may perform this action.”"],
  ["05", "HUMAN FALLBACK MATTERS", "Some tasks cannot be fully automated yet. A good agent system should know how to pause, escalate to a human and resume."],
  ["06", "BETTER ENVIRONMENTS MAY MATTER AS MUCH AS SMARTER AGENTS", "Some agent failures are not intelligence failures. The environment simply was not designed for software to act inside it."],
] as const;

const experiments = [
  ["PERSONAL CONTEXT", "Does a structured AgentMe profile reduce the number of times users need to re-explain themselves to an agent?"],
  ["MEMORY", "When does selective memory retrieval improve performance, and when does it only add latency?"],
  ["PERMISSIONS", "Are external approval rules more reliable than telling a model “do not do this”?"],
  ["AGENT-READY BUSINESSES", "Can AgentReady scores predict where real agents struggle?"],
  ["BUSINESS CONNECTORS", "Can a structured connector help an agent complete a task with a Nigerian business that primarily operates through WhatsApp?"],
  ["HUMAN FALLBACK", "How much human intervention is actually required before an agent can complete real commercial tasks?"],
] as const;

const direction = ["HUMAN", "PERSONAL PROFILE", "PERSONAL AGENT", "MEMORY + TOOLS + PERMISSIONS", "AGENTIC INTERNET", "BUSINESS CONNECTOR", "BUSINESS"];

function ArrowFlow({ items }: { items: readonly string[] }) {
  return <ol className="research-arrow-flow">{items.map((item, index) => <li key={item}><span>{item}</span>{index < items.length - 1 && <ArrowRight aria-hidden="true" />}</li>)}</ol>;
}

export default function AgenticInternetPage() {
  return (
    <>
      <section className="research-hero shell">
        <div className="agentic-grid" aria-hidden="true" />
        <div className="research-hero-top"><span className="eyebrow">CURRENT RESEARCH · 2026</span><span className="agentic-status">RESEARCHING · BUILDING · TESTING IN PUBLIC</span></div>
        <h1>BUILDING FOR<br /><em>THE AGENTIC INTERNET</em></h1>
        <p>Researching the infrastructure between personal AI agents and real businesses—with a focus on how this transition could work in Nigeria and Africa.</p>
      </section>

      <section className="research-thesis shell" aria-labelledby="thesis-title">
        <div className="research-section-heading"><span className="eyebrow">01 · CORE THESIS</span><h2 id="thesis-title">A DIFFERENT KIND<br />OF INTERNET <em>USER.</em></h2></div>
        <div className="research-thesis-copy"><p>The internet was originally designed for humans clicking through pages.</p><p>AI agents introduce a different kind of user. Businesses may eventually need to be understandable and usable not only by humans, but by software acting on behalf of humans.</p><p>At the same time, personal agents need better ways to understand the people they represent—their goals, tools, routines, permissions, memory and working style. This research explores both sides of that transition.</p></div>
        <div className="research-flow-compare">
          <div><span className="eyebrow">THE HUMAN WEB</span><ArrowFlow items={["Search", "Website", "Human", "Action"]} /></div>
          <div><span className="eyebrow">THE AGENTIC WEB</span><ArrowFlow items={["Goal", "Agent", "Business Capability", "Action"]} /></div>
        </div>
      </section>

      <section className="research-sides shell" aria-labelledby="sides-title">
        <div className="research-section-heading"><span className="eyebrow">02 · RESEARCH TERRITORY</span><h2 id="sides-title">TWO SIDES I&apos;M<br /><em>EXPLORING.</em></h2></div>
        <article className="research-side research-side-light">
          <div className="research-side-label"><span>HUMAN → AGENT</span><strong>Personal Agent Infrastructure</strong></div>
          <div className="research-side-body"><h3>How does an AI agent understand the person it represents?</h3><p>Personal context · working style · memory · routines · tools · permissions · autonomy · approval boundaries · agent portability</p></div>
          <div className="research-product-feature"><div><span className="eyebrow">FEATURE · MVP</span><h3>AgentMe</h3></div><div><strong>Set up your personal AI agent in minutes.</strong><p>AgentMe interviews users about how they work and turns their tools, preferences, routines, memory choices and permission boundaries into a structured Personal Agent Blueprint and ready-to-use agent prompt.</p><ul><li>Structured personal profile</li><li>Permission and memory rules</li><li>Recurring workflows</li><li>Suggested agent capabilities</li><li>Full Master Agent Prompt</li><li>Portable JSON profile</li></ul><small>MVP complete · currently preparing public release</small></div></div>
        </article>
        <article className="research-side">
          <div className="research-side-label"><span>AGENT → BUSINESS</span><strong>Business Agent Infrastructure</strong></div>
          <div className="research-side-body"><h3>How does an AI agent reliably interact with businesses?</h3><p>Discoverability · offerings · structured data · APIs / MCP · quotes · availability · booking · transactions · permissions · human escalation · resumable workflows</p></div>
          <div className="research-product-feature">
            <div><span className="eyebrow">FEATURE · LIVE</span><h3>AgentReady <em>by Myric</em></h3></div>
            <div><p>An experimental research tool that evaluates how easily AI agents can understand and act on a business website across identity, offering, discovery, trust, communication, actionability and transaction signals.</p><ul><li>Evidence-backed scoring</li><li>Analysis coverage</li><li>Persistent reports</li><li>Structured recommendations</li><li>Unknown-state handling</li><li>Production Supabase persistence</li></ul>{AGENTIC_RESEARCH_LINKS.agentReadyUrl ? <a className="pill pill-light" href={AGENTIC_RESEARCH_LINKS.agentReadyUrl} target="_blank" rel="noopener noreferrer">Run an AgentReady assessment <ArrowUpRight /></a> : <span className="research-config-note">Assessment URL awaiting configuration</span>}</div>
          </div>
          <div className="research-product-feature research-product-secondary"><div><span className="eyebrow">EXPERIMENT</span><h3>Myric Business Connector</h3></div><div><p>A structured quote and business-connector experiment for AI agents and Nigerian SMEs—including businesses that still operate through WhatsApp, spreadsheets and human staff.</p><ul><li>Supplier discovery and offerings</li><li>Pricing states and turnaround</li><li>Quote requests and approvals</li><li>Human fallback</li><li>Resumable task state and tracing</li><li>MCP-compatible tools</li></ul><small>Controlled MVP complete · preparing first real Nigerian business pilot</small></div></div>
        </article>
      </section>

      <section className="research-built shell" aria-labelledby="built-title">
        <div className="research-section-heading"><span className="eyebrow">03 · CURRENT BUILDS</span><h2 id="built-title">WHAT I&apos;VE BUILT<br /><em>SO FAR.</em></h2></div>
        <div className="research-build-grid">{[["AgentReady", "Live"], ["AgentMe", "MVP"], ["Myric Connector", "Experiment"]].map(([name, status], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><small>{status}</small></article>)}</div>
      </section>

      <section className="research-nigeria shell" aria-labelledby="nigeria-title">
        <div className="research-section-heading"><span className="eyebrow">04 · BUILDING FROM AFRICA</span><h2 id="nigeria-title">WHY NIGERIA IS<br /><em>INTERESTING.</em></h2></div>
        <div className="research-nigeria-copy"><p>Many business workflows combine Instagram, WhatsApp, human staff, spreadsheets and bank transfers. That complexity makes Nigeria a useful environment for asking what agent-ready infrastructure needs to look like in practice.</p><blockquote>“I don&apos;t think every Nigerian business needs to rebuild itself around APIs. A more realistic path may be to wrap existing workflows with structured interfaces that agents can understand and use.”</blockquote></div>
        <div className="research-flow-compare"><div><span className="eyebrow">CURRENT WORKFLOW</span><ArrowFlow items={["Instagram", "WhatsApp", "Human staff", "Spreadsheet", "Bank transfer"]} /></div><div><span className="eyebrow">POSSIBLE AGENT LAYER</span><ArrowFlow items={["Customer", "Personal Agent", "Myric Connector", "Business systems + human fallback", "Result"]} /></div></div>
      </section>

      <section className="research-learnings shell" aria-labelledby="learnings-title">
        <div className="research-section-heading"><span className="eyebrow">05 · FIELD NOTES</span><h2 id="learnings-title">WHAT I&apos;VE<br /><em>LEARNED.</em></h2></div>
        <div className="research-learning-grid">{learnings.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="research-testing shell" aria-labelledby="testing-title">
        <div className="research-section-heading"><span className="eyebrow">06 · OPEN QUESTIONS</span><h2 id="testing-title">WHAT I&apos;M<br /><em>TESTING NOW.</em></h2></div>
        <div className="research-question-list">{experiments.map(([title, question], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{question}</p></div></article>)}</div>
      </section>

      <section className="research-public shell" aria-labelledby="public-title">
        <div className="research-section-heading"><span className="eyebrow">07 · LEARNING IN PUBLIC</span><h2 id="public-title">FOLLOW THE<br /><em>WORK IN PROGRESS.</em></h2></div>
        <div className="research-video">
          <div className="research-video-frame"><iframe src={AGENTIC_RESEARCH_LINKS.featuredVideoEmbedUrl} title="The Internet Is Getting a New User: AI Agents" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
          <div><span className="eyebrow">EPISODE 1 · BUILDING FOR THE AGENTIC INTERNET</span><h3>The Internet Is Getting a New User: AI Agents</h3><p>A look at what changes when AI systems move from answering questions to acting on behalf of people.</p><a className="pill pill-light" href={AGENTIC_RESEARCH_LINKS.featuredVideoUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube <ArrowUpRight /></a></div>
        </div>
        <div className="research-topics"><span className="eyebrow">UPCOMING TOPICS</span><div>{["personal agents", "memory", "MCP", "agent-ready businesses", "WhatsApp + AI agents", "agentic commerce", "permissions", "business connectors", "agent experiments in Nigeria"].map(topic => <span key={topic}>{topic}</span>)}</div></div>
      </section>

      <section className="research-build-with shell" aria-labelledby="build-with-title">
        <div><span className="eyebrow">08 · BUILD WITH ME</span><h2 id="build-with-title">COMPARE NOTES.<br /><em>TEST ASSUMPTIONS.</em></h2></div>
        <div><p>Most of this work is being shared publicly through experiments, screenshots, failures, research notes and working prototypes.</p><p>I&apos;m especially interested in talking with AI-agent builders, Nigerian business owners, API/MCP developers, founders working on agent infrastructure and researchers exploring agentic commerce.</p><strong>If you&apos;re working on similar problems, I&apos;d love to compare notes.</strong><a className="pill pill-ember" href={AGENTIC_RESEARCH_LINKS.xUrl} target="_blank" rel="noopener noreferrer">Follow the research on X <ArrowUpRight /></a></div>
      </section>

      <section className="research-direction shell" aria-labelledby="direction-title">
        <div className="research-section-heading"><span className="eyebrow">09 · LONG-TERM DIRECTION</span><h2 id="direction-title">THE SYSTEM I&apos;M<br /><em>WORKING TOWARD.</em></h2></div>
        <ol>{direction.map((item, index) => <li key={item}><span>{item}</span>{index < direction.length - 1 && <ArrowDown aria-hidden="true" />}</li>)}</ol>
        <div className="research-direction-notes"><p><strong>AgentMe</strong> explores the human side.</p><p><strong>AgentReady</strong> explores business readiness.</p><p><strong>Myric Connector</strong> explores interaction.</p><p><strong>The Experiment Lab</strong> tests the assumptions connecting them.</p></div>
        <Link className="text-link" href="/">Return to the portfolio <ArrowRight /></Link>
      </section>
    </>
  );
}
