import { VademecumShell } from "@/components/vademecum/vademecum-shell";
import { buildNav } from "@/lib/vademecum/pages";

export default function VademecumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <VademecumShell nav={buildNav()}>{children}</VademecumShell>;
}
