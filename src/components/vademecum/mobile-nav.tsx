"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

import { SidebarContent } from "./sidebar";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="outline" size="sm" className="lg:hidden" />}
      >
        <MenuIcon />
        Spis treści
      </SheetTrigger>
      <SheetContent side="left" showCloseButton>
        <SheetHeader className="sr-only">
          <SheetTitle>Spis treści Vademecum</SheetTitle>
          <SheetDescription>Nawigacja i wyszukiwarka</SheetDescription>
        </SheetHeader>
        <div className="overflow-y-auto p-4">
          <SidebarContent onNavigate={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
