import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service-page";
import { serviceList, services, type ServiceSlug } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

type ServiceRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceList.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  return service ? createPageMetadata({ path: `/services/${service.slug}`, title: service.seoTitle, description: service.seoDescription }) : {};
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) notFound();
  return <ServicePage service={service} />;
}
