import { PageView } from "@/components/vademecum/page-view";
import { START_SLUG } from "@/lib/vademecum/config";
import { getPage } from "@/lib/vademecum/pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Vademecum",
  description:
    "Vademecum – próby indywidualne na stopnie HO i HR: droga wędrownika, układanie próby i drogowskazy.",
};

export default function VademecumPage() {
  const page = getPage(START_SLUG);
  if (!page) notFound();
  return <PageView page={page} />;
}
