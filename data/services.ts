export type ServiceSlug = "ai-video-production" | "web-development" | "crm-automation" | "ai-content-creation" | "ai-launch-pack";

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
  process: Array<[string, string, string?]>;
  tools: string[];
  cta: string;
  ctaLabel: string;
  related: ServiceSlug[];
  workType: "video" | "software" | "crm" | "creative";
  capabilityDetails?: string[];
  bestFor?: string[];
  price?: string;
  priceCurrency?: string;
  heroNote?: string;
  whyTitle?: [string, string];
  whyCopy?: string;
  ctaItems?: string[];
  ctaNote?: string;
  whatsappUrl?: string;
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
    related: ["ai-content-creation", "ai-launch-pack"],
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
    related: ["ai-video-production", "ai-launch-pack"],
    workType: "creative",
  },
  "ai-launch-pack": {
    slug: "ai-launch-pack",
    index: "05",
    eyebrow: "48-HOUR AI LAUNCH PACK",
    title: ["Turn your launch into", "something people remember."],
    seoTitle: "48-Hour AI Launch Pack | Cinematic Promo Content | Ultimate Moxie",
    seoDescription: "Launch your product, story or business with a 48-hour cinematic AI content pack including a promo video, social cutdowns, branded visual and posting copy.",
    heroCopy: "A focused cinematic content package for products, brands, books, music, courses and campaigns — built fast, polished properly, and ready to publish.",
    sectionLabel: "WHAT YOU GET",
    sectionTitle: "One idea, shaped into a launch system.",
    intro: [
      "A focused package for startup founders, SaaS and product launches, ecommerce brands, authors, coaches, musicians, real estate businesses, creators and small agencies that need connected campaign content.",
      "Every deliverable follows one visual direction, so the promo, cutdowns, key visual and posting copy feel like parts of the same launch rather than separate pieces.",
    ],
    capabilities: ["20–30 Second Cinematic Promo", "3 Social Cutdowns", "1 Branded Key Visual", "Posting Copy", "1 Revision Round", "48-Hour Delivery"],
    capabilityDetails: [
      "A polished short-form promotional video designed around the product, story, launch or campaign.",
      "Short edits adapted from the main promo for social posting.",
      "A polished campaign image, poster or launch visual.",
      "Short caption and copy to help publish the content clearly.",
      "One focused revision pass for reasonable changes.",
      "Delivery within 48 hours after all required materials and direction are received.",
    ],
    bestFor: ["Product launches", "SaaS releases", "Startup announcements", "Book launches", "Music releases", "Course launches", "Ecommerce campaigns", "Real estate promotions", "Creator campaigns", "Event promotions"],
    process: [
      ["01", "Send the brief", "You share the product, story, links, assets and goals."],
      ["02", "I shape the concept", "I develop the visual direction, structure and campaign idea."],
      ["03", "I create the launch assets", "Video, cutdowns, visual and copy are produced as one cohesive package."],
      ["04", "Review and deliver", "You review, request the included revision if needed, and receive final assets."],
    ],
    tools: [],
    price: "250",
    priceCurrency: "USD",
    heroNote: "One focused launch package. Clear deliverables. 48-hour turnaround.",
    whyTitle: ["One launch.", "One connected content system."],
    whyCopy: "Instead of commissioning a video, then separately creating social edits, visuals and captions, the Launch Pack turns one idea into a small campaign system designed to work together.",
    cta: "Your next campaign doesn’t need to start from a blank page.",
    ctaLabel: "Book the 48-Hour Launch Pack",
    ctaItems: ["20–30 sec promo", "3 social cutdowns", "Branded key visual", "Posting copy", "One revision", "48-hour delivery"],
    ctaNote: "48-hour turnaround begins after all required project materials and direction are received.",
    whatsappUrl: "https://wa.me/2347042652606?text=Hi%20Moxie%2C%20I%E2%80%99m%20interested%20in%20the%2048-Hour%20AI%20Launch%20Pack%20and%20I%E2%80%99d%20like%20to%20discuss%20my%20project.",
    related: ["ai-video-production", "ai-content-creation"],
    workType: "video",
  },
};

export const serviceList = Object.values(services);
