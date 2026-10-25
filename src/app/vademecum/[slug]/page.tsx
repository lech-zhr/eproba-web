import { PageView } from "@/components/vademecum/page-view";
import { START_SLUG } from "@/lib/vademecum/config";
import { getPage } from "@/lib/vademecum/pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  return { title: page ? `${page.title} – Vademecum` : "Vademecum" };
}

export default async function VademecumSubpage({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page || page.slug === START_SLUG) notFound();
  return <PageView page={page} />;
}
