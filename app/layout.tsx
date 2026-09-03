import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { createPageMetadata } from "@/lib/metadata";
import { PROFESSIONAL_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, SOCIAL_PROFILES } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  ...createPageMetadata({ path: "/" }),
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  applicationName: SITE_NAME,
  authors: [{ name: PROFESSIONAL_NAME, url: SITE_URL }],
  creator: PROFESSIONAL_NAME,
  publisher: SITE_NAME,
  category: "technology",
  keywords: ["Ultimate Moxie", "UltimateMoxie", "Oladosu Abdulmuiz Adeshina", "AI video creator", "cinematic AI video", "software developer", "Next.js developer", "CRM developer", "business automation", "website developer", "Nigerian AI creator", "remote software developer"],
  icons: {
    icon: "/images/moxie-avatar.jpg",
    apple: "/images/moxie-avatar.jpg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PROFESSIONAL_NAME,
      alternateName: [SITE_NAME, "UltimateMoxie", "Oladosu Abdulmuiz"],
      url: SITE_URL,
      image: `${SITE_URL}/images/moxie-avatar.jpg`,
      jobTitle: "AI Creative & Product Builder",
      description: SITE_DESCRIPTION,
      homeLocation: { "@type": "Place", name: "Ilorin, Nigeria" },
      sameAs: Object.values(SOCIAL_PROFILES),
      knowsAbout: ["AI video production", "cinematic visual storytelling", "prompt design", "Next.js development", "web applications", "CRM systems", "business automation", "landing pages"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "UltimateMoxie",
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile-page`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      mainEntity: { "@id": `${SITE_URL}/#person` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><Navigation /><main>{children}</main><Footer /></body></html>;
}
