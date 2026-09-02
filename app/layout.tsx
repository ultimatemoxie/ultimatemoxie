import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Ultimate Moxie — AI Creative & Product Builder", template: "%s — Ultimate Moxie" },
  description: "Portfolio of Oladosu Abdulmuiz Adeshina, an AI creative and product builder working across cinematic AI video, software and automation.",
  metadataBase: new URL("https://ultimatemoxie.com"),
  openGraph: { title: "Ultimate Moxie — AI Creative & Product Builder", description: "Cinematic AI video, software and automation by Oladosu Abdulmuiz Adeshina.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navigation /><main>{children}</main><Footer /></body></html>;
}
