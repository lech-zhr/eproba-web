import { Badge } from "@/components/ui/badge";
import { pageHref } from "@/lib/vademecum/config";
import type { Inline } from "@/lib/vademecum/types";
import Link from "next/link";

function InlineNode({ node }: { node: Inline }) {
  if (typeof node === "string") return node;
  switch (node.t) {
    case "strong":
    case "b":
      return (
        <strong className="font-semibold">
          <InlineContent content={node.c} />
        </strong>
      );
    case "em":
      return (
        <em>
          <InlineContent content={node.c} />
        </em>
      );
    case "sup":
      return (
        <sup>
          <InlineContent content={node.c} />
        </sup>
      );
    case "br":
      return <br />;
    case "link":
      return (
        <Link
          href={pageHref(node.page)}
          className="font-semibold underline underline-offset-4"
        >
          <InlineContent content={node.c} />
        </Link>
      );
    case "hr-chip":
      return (
        <Badge variant="secondary" className="mx-0.5 h-4 px-1.5 text-[0.65rem]">
          HR
        </Badge>
      );
    case "xref":
      return (
        <em className="text-muted-foreground mt-1 block text-sm">
          <InlineContent content={node.c} />
        </em>
      );
  }
}

export function InlineContent({ content }: { content: Inline[] }) {
  return content.map((node, i) => <InlineNode key={i} node={node} />);
}
