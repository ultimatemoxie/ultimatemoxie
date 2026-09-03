import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

type PageMetadata = {
  title?: string;
  description?: string;
  path: `/${string}` | "/";
};

export function createPageMetadata({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
  path,
}: PageMetadata): Metadata {
  const canonical = new URL(path, SITE_URL).toString();

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [{
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Ultimate Moxie — AI Creative and Product Builder",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
