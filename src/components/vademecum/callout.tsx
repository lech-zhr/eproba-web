import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { InfoIcon, TriangleAlertIcon } from "lucide-react";
import type { ReactNode } from "react";

export function Callout({
  kind,
  title,
  children,
}: {
  kind: "info" | "note";
  title?: string;
  children: ReactNode;
}) {
  const Icon = kind === "note" ? TriangleAlertIcon : InfoIcon;
  return (
    <Alert
      role="note"
      className={cn(
        "my-1",
        kind === "info" ? "bg-muted/50" : "border-warning/40 bg-warning/5",
      )}
    >
      <Icon className={kind === "note" ? "text-warning" : undefined} />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription className="text-foreground/90 flex flex-col gap-2 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </AlertDescription>
    </Alert>
  );
}
