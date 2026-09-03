export type VideoProject = {
  title: string;
  slug: string;
  category: string;
  description: string;
  role: string;
  tools: string[];
  projectNote?: string;
  thumbnail: string;
  thumbnailAlt: string;
  videoSrc: string;
  tone: "ember" | "amber" | "burnt";
};

export const videoProjects: VideoProject[] = [
  {
    title: "NESCAFÉ Cinematic Spec Commercial",
    slug: "nescafe-spec-commercial",
    category: "AI VIDEO / COMMERCIAL",
    description: "A cinematic product advertisement created as an independent concept for NESCAFÉ. The commercial presents the product through polished visuals, engaging camera movement, atmospheric lighting, and professional sound design.",
    role: "Creative concept development, product-focused scene planning, prompt writing, AI visual generation, animation, editing, music selection, sound design, and final delivery.",
    tools: ["Veo 3.1", "Kling", "CapCut", "ChatGPT", "ElevenLabs"],
    projectNote: "This is an independently created spec commercial and was not commissioned or officially endorsed by NESCAFÉ.",
    thumbnail: "/images/projects/nescafe-spec-thumbnail.png",
    thumbnailAlt: "NESCAFÉ cinematic AI spec commercial by Ultimate Moxie",
    videoSrc: "/videos/nescafe-spec-commercial.mp4",
    tone: "ember",
  },
  {
    title: "AI-Generated Cinematic Music Video",
    slug: "ai-music-video",
    category: "AI VIDEO / MUSIC VIDEO",
    description: "A cinematic music video combining live-action performance with AI-generated environments and visual effects. The project was designed to create a seamless connection between the real performer and imaginative digital locations.",
    role: "Concept development, scene planning, prompt writing, visual generation, image-to-video animation, editing, sound design, and final delivery.",
    tools: ["Veo 3.1", "Kling", "CapCut", "ChatGPT", "ElevenLabs"],
    thumbnail: "/images/projects/ai-music-video-thumbnail.png",
    thumbnailAlt: "Cinematic AI music video created by Ultimate Moxie",
    videoSrc: "/videos/ai-music-video.mp4",
    tone: "amber",
  },
  {
    title: "The Undiscovered World — Cinematic Adventure",
    slug: "the-undiscovered-world",
    category: "AI VIDEO / CINEMATIC FILM",
    description: "A cinematic adventure exploring a mysterious world through atmospheric environments, visual storytelling, dramatic camera movement, and immersive sound design.",
    role: "Concept development, world-building, scene planning, prompt writing, visual generation, animation, editing, sound design, and final delivery.",
    tools: ["Kling", "ChatGPT", "CapCut"],
    thumbnail: "/images/projects/dracus-thumbnail.png",
    thumbnailAlt: "The Undiscovered World cinematic AI short film by Ultimate Moxie",
    videoSrc: "/videos/dracus-ai-short-film.mp4",
    tone: "burnt",
  },
];

export type SoftwareProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  videoSrc?: string;
  liveUrl?: string;
  githubUrl?: string;
  stack?: string[];
  role?: string;
  featured?: boolean;
  subtitle?: string;
  status?: string;
};

export const softwareProjects: SoftwareProject[] = [
  {
    slug: "cues",
    title: "Cues",
    category: "SOFTWARE / FINTECH",
    subtitle: "Personal Finance Intelligence",
    description: "A budgeting and statement-insight product that helps users understand spending patterns, financial behaviour, and money flow with more clarity.",
    thumbnail: "/images/projects/cues-thumbnail.png",
    thumbnailAlt: "Cues personal finance campaign artwork by Ultimate Moxie",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "GitHub"],
    status: "In development",
    liveUrl: "https://checkcues.com",
    githubUrl: "https://github.com/ultimatemoxie",
    featured: true,
  },
  {
    slug: "shopify-partnership",
    title: "Shopify Partnership",
    category: "WEBSITE / E-COMMERCE",
    description: "A responsive Shopify-focused growth and landing page built around conversion-oriented presentation, service positioning, and clear calls to action.",
    thumbnail: "/images/projects/shopify-partnership.png",
    thumbnailAlt: "Shopify Partnership landing page website project",
    liveUrl: "https://grow-shopy-spark.lovable.app/",
  },
  {
    slug: "pink-purse-power",
    title: "Pink Purse Power",
    category: "WEBSITE / FINANCIAL SERVICES",
    description: "A polished financial-services website focused on credit education, financial coaching, and clear consultation pathways, with a warm editorial visual system.",
    thumbnail: "/images/projects/pink-purse-power.png",
    thumbnailAlt: "Pink Purse Power financial services website project",
    liveUrl: "https://pink-purse-power-web.lovable.app/",
  },
  {
    slug: "wellsteer-training",
    title: "WellSteer Training",
    category: "WEBSITE / TRAINING & INDUSTRIAL SERVICES",
    description: "A training and enrollment website for WellSteer Oilfield Technology Services, focused on digital flow assurance training for oil and gas professionals.",
    thumbnail: "/images/projects/wellsteer-training.png",
    thumbnailAlt: "WellSteer Training course website project",
    liveUrl: "https://wellsteertraining.com/",
  },
];

export type CrmProject = SoftwareProject & {
  role?: string;
  videoSrc?: string;
};

export const crmProjects: CrmProject[] = [
  {
    slug: "crm-demo-01",
    title: "CRM Demo 01",
    category: "CRM / AUTOMATION",
    description: "A CRM system focused on lead management, pipeline visibility, follow-ups, task organization, and automation workflows.",
    role: "Product planning, workflow design, CRM structure, automation logic, interface development, testing, and implementation.",
    thumbnail: "/images/projects/crm-demo-01-thumbnail.png",
    thumbnailAlt: "CRM Demo 01 lead management dashboard",
    videoSrc: "/videos/crm-demo-01.mp4",
  },
  {
    slug: "crm-demo-02",
    title: "CRM Demo 02",
    category: "CRM / AUTOMATION",
    description: "A CRM and client-management workflow designed to organize leads, conversations, opportunities, reminders, reporting, and operational follow-up.",
    role: "Product planning, workflow design, CRM structure, automation logic, interface development, testing, and implementation.",
    thumbnail: "/images/projects/crm-demo-02-thumbnail.png",
    thumbnailAlt: "CRM Demo 02 client management workflow",
    videoSrc: "/videos/crm-demo-02.mp4",
  },
];

export type FeaturedProject = {
  title: string;
  category: string;
  kind: "video" | "software";
  tone: "ember" | "cream" | "amber" | "dark";
  href: string;
  mediaType: "video" | "external" | "image" | "placeholder";
  thumbnail?: string;
  thumbnailAlt?: string;
  videoSrc?: string;
  liveUrl?: string;
  ctaLabel?: string;
};

export const featuredWork: FeaturedProject[] = [
  { title: "NESCAFÉ Spec Commercial", category: "AI Video / Commercial", kind: "video", tone: "ember", href: "/video/nescafe-spec-commercial", mediaType: "video", thumbnail: "/images/projects/nescafe-spec-thumbnail.png", thumbnailAlt: "NESCAFÉ cinematic AI spec commercial by Ultimate Moxie", videoSrc: "/videos/nescafe-spec-commercial.mp4" },
  { title: "Cues", category: "Software / Fintech", kind: "software", tone: "cream", href: "https://checkcues.com", liveUrl: "https://checkcues.com", ctaLabel: "Visit checkcues.com ↗", mediaType: "external", thumbnail: "/images/projects/cues-thumbnail.png", thumbnailAlt: "Cues personal finance campaign artwork by Ultimate Moxie" },
  { title: "AI Music Video", category: "AI Video / Film", kind: "video", tone: "amber", href: "/video/ai-music-video", mediaType: "image", thumbnail: "/images/projects/ai-music-video-thumbnail.png", thumbnailAlt: "Cinematic AI music video created by Ultimate Moxie" },
  { title: "Shopify Partnership", category: "Website / E-commerce", kind: "software", tone: "dark", href: "https://grow-shopy-spark.lovable.app/", liveUrl: "https://grow-shopy-spark.lovable.app/", ctaLabel: "Visit Live Site ↗", mediaType: "external", thumbnail: "/images/projects/shopify-partnership.png", thumbnailAlt: "Shopify Partnership landing page website project" },
];

export const tools = ["Veo 3.1", "Kling", "Runway", "CapCut", "Midjourney", "ChatGPT", "ElevenLabs", "Next.js", "TypeScript", "Tailwind", "GitHub", "Google Sheets"];
