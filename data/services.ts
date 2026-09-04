export type ServiceSlug = "ai-video-production" | "web-development" | "crm-automation" | "ai-content-creation";

export type ServicePageData = {
  slug: ServiceSlug;
  index: string;
  eyebrow: string;
  title: [string, string];
  seoTitle: string;
  seoDescription: string;
  heroCopy: string;
  sectionLabel: string;
  sectionTitle: string;
  intro: string[];
  capabilities: string[];
  process: Array<[string, string]>;
  tools: string[];
  cta: string;
  ctaLabel: string;
  related: ServiceSlug[];
  workType: "video" | "software" | "crm" | "creative";
};

export const services: Record<ServiceSlug, ServicePageData> = {
  "ai-video-production": {
    slug: "ai-video-production",
    index: "01",
    eyebrow: "AI VIDEO PRODUCTION",
    title: ["Cinematic AI video,", "built from idea to final frame."],
    seoTitle: "AI Video Production & Cinematic AI Video Creator | Ultimate Moxie",
    seoDescription: "Ultimate Moxie creates cinematic AI videos, commercials, music visuals, trailers and short-form content using AI generation, image-to-video, editing, sound design and creative direction.",
    heroCopy: "Concept development, visual direction and AI production shaped into cinematic work people can watch and remember.",
    sectionLabel: "WHAT I CREATE",
    sectionTitle: "A complete creative pipeline.",
    intro: [
      "Ultimate Moxie takes AI video from the first idea through concept development, visual direction and scene planning to the final edit.",
      "The workflow can include image prompting, AI image generation, image-to-video or text-to-video, cinematic camera direction, character consistency, editing, sound design, voice and music integration, and final delivery.",
    ],
    capabilities: ["AI commercials", "Music videos", "Cinematic trailers", "Product visuals", "Short films", "Social content", "Campaign visuals", "Concept trailers"],
    process: [["01", "Concept"], ["02", "Visual System"], ["03", "Scene Generation"], ["04", "Motion"], ["05", "Edit & Sound"], ["06", "Final Delivery"]],
    tools: ["Veo 3.1", "Kling", "Runway", "Midjourney", "ChatGPT", "ElevenLabs", "Suno", "CapCut"],
    cta: "Have a story, product or idea that needs a cinematic world?",
    ctaLabel: "Let’s build it",
    related: ["ai-content-creation", "web-development"],
    workType: "video",
  },
  "web-development": {
    slug: "web-development",
    index: "02",
    eyebrow: "WEB DEVELOPMENT",
    title: ["Web experiences", "that look good and work harder."],
    seoTitle: "Web Development, Landing Pages & Web Applications | Ultimate Moxie",
    seoDescription: "Ultimate Moxie builds responsive websites, landing pages and web applications focused on clear design, usability, conversion and practical business needs.",
    heroCopy: "Responsive websites and product interfaces built around clarity, usability, conversion and practical business needs.",
    sectionLabel: "WHAT I BUILD",
    sectionTitle: "Useful digital places and products.",
    intro: [
      "Ultimate Moxie builds portfolio and business websites, conversion-focused landing pages, SaaS interfaces and web applications that make the next action clear.",
      "Work can cover responsive frontend development, product dashboards, integrations and deployment—from the structure of the experience to the functionality behind it.",
    ],
    capabilities: ["Websites", "Landing Pages", "SaaS Products", "Dashboards", "Internal Tools", "Client Portals"],
    process: [["01", "Understand the goal"], ["02", "Structure the experience"], ["03", "Build the interface"], ["04", "Connect functionality"], ["05", "Test responsiveness"], ["06", "Deploy"]],
    tools: ["Next.js", "React", "TypeScript", "Supabase", "GitHub", "AI-assisted development"],
    cta: "Need a website, landing page or product interface built around a real business goal?",
    ctaLabel: "Let’s talk",
    related: ["crm-automation", "ai-content-creation"],
    workType: "software",
  },
  "crm-automation": {
    slug: "crm-automation",
    index: "03",
    eyebrow: "CRM & AUTOMATION",
    title: ["Less repetitive work.", "Better systems."],
    seoTitle: "CRM Development & Business Automation | Ultimate Moxie",
    seoDescription: "Ultimate Moxie builds CRM systems, workflow automation and practical business tools that help teams manage leads, follow-ups, data and repetitive processes.",
    heroCopy: "Practical CRM systems and automation workflows for organizing leads, follow-ups, data and repeatable business processes.",
    sectionLabel: "WHAT CAN BE AUTOMATED?",
    sectionTitle: "Start with the work that repeats.",
    intro: [
      "CRM and automation work begins with the real process: how leads arrive, where data lives, what needs a follow-up and which repetitive steps slow the team down.",
      "The resulting system can connect lead management, imports, enrichment and email workflows with pipeline organization, API integrations, internal dashboards and clearer data movement between tools.",
    ],
    capabilities: ["Lead collection", "Lead qualification", "Contact organization", "Follow-up preparation", "Status tracking", "Repetitive admin workflows", "Data movement between tools", "Reporting workflows"],
    process: [["01", "Map the current workflow"], ["02", "Find repetitive bottlenecks"], ["03", "Design the system"], ["04", "Build the automation"], ["05", "Test edge cases"], ["06", "Refine and deploy"]],
    tools: ["Next.js", "Supabase", "Gmail integrations", "APIs"],
    cta: "If your team is still doing the same repetitive task manually every day, there may be a better system.",
    ctaLabel: "Let’s map it",
    related: ["web-development", "ai-content-creation"],
    workType: "crm",
  },
  "ai-content-creation": {
    slug: "ai-content-creation",
    index: "04",
    eyebrow: "AI CONTENT CREATION",
    title: ["AI content with", "an actual creative direction."],
    seoTitle: "AI Content Creation, Prompt Design & Visual Campaigns | Ultimate Moxie",
    seoDescription: "Ultimate Moxie creates AI-assisted visual content, campaign concepts, image prompts, motion concepts and branded creative systems for digital marketing and storytelling.",
    heroCopy: "Visual concepts, prompts and branded content systems shaped by creative direction—not generated at random.",
    sectionLabel: "FROM IDEA TO VISUAL SYSTEM",
    sectionTitle: "Direction before generation.",
    intro: [
      "AI tools are part of the creative workflow, not a substitute for direction. The work starts by understanding the message and defining a visual language that fits it.",
      "That direction can become AI imagery, campaign concepts, branded image systems, social visuals, storyboards, concept frames, product visuals and short-form visual campaigns with consistent prompts and art direction.",
    ],
    capabilities: ["AI image creation", "Visual campaign concepts", "Branded image systems", "Social media visuals", "Prompt design", "Storyboards", "Product visuals", "Content ideation"],
    process: [["01", "Understand the message"], ["02", "Define visual direction"], ["03", "Design prompts"], ["04", "Generate and refine"], ["05", "Build consistency"], ["06", "Adapt for platforms"]],
    tools: ["Midjourney", "ChatGPT", "Veo 3.1", "Kling", "Canva", "CapCut"],
    cta: "Need a campaign, visual concept or content system that does not look like generic AI output?",
    ctaLabel: "Let’s build the direction first",
    related: ["ai-video-production", "web-development"],
    workType: "creative",
  },
};

export const serviceList = Object.values(services);
