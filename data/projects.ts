export type VideoProject = {
  title: string;
  slug: string;
  category: string;
  description: string;
  role: string;
  tools: string[];
  projectNote?: string;
  thumbnail: string;
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
    videoSrc: "/videos/dracus-ai-short-film.mp4",
    tone: "burnt",
  },
];

export const softwareProjects = [
  {
    title: "Cues",
    subtitle: "Personal Finance Intelligence",
    description: "A responsive personal finance product in development to help people understand their spending habits and financial behaviour.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "GitHub"],
    status: "In development",
    liveUrl: "https://checkcues.com",
    githubUrl: "https://github.com/ultimatemoxie",
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
  videoSrc?: string;
  liveUrl?: string;
};

export const featuredWork: FeaturedProject[] = [
  { title: "NESCAFÉ Spec Commercial", category: "AI Video / Commercial", kind: "video", tone: "ember", href: "/video/nescafe-spec-commercial", mediaType: "video", thumbnail: "/images/projects/nescafe-spec-thumbnail.png", videoSrc: "/videos/nescafe-spec-commercial.mp4" },
  { title: "Cues", category: "Software / Fintech", kind: "software", tone: "cream", href: "https://checkcues.com", liveUrl: "https://checkcues.com", mediaType: "external", thumbnail: "/images/moxie-system-dashboard-concept.png" },
  { title: "AI Music Video", category: "AI Video / Film", kind: "video", tone: "amber", href: "/video/ai-music-video", mediaType: "image", thumbnail: "/images/projects/ai-music-video-thumbnail.png" },
  { title: "Next build in progress", category: "Product / Development", kind: "software", tone: "dark", href: "/software", mediaType: "placeholder" },
];

export const tools = ["Veo 3.1", "Kling", "Runway", "CapCut", "Midjourney", "ChatGPT", "ElevenLabs", "Next.js", "TypeScript", "Tailwind", "GitHub", "Google Sheets"];
