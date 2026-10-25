"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

import { SidebarContent } from "./sidebar";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen} swipeDirection="left">
      <DrawerTrigger
        render={<Button variant="outline" size="sm" className="lg:hidden" />}
      >
        <MenuIcon />
        Spis treści
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex-row items-center justify-between">
          <DrawerTitle>Spis treści Vademecum</DrawerTitle>
          <DrawerClose
            render={
              <Button
                aria-label="Zamknij spis treści"
                variant="ghost"
                size="icon"
              />
            }
          >
            <XIcon className="size-5" />
          </DrawerClose>
          <DrawerDescription className="sr-only">
            Nawigacja i wyszukiwarka
          </DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto p-4">
          <SidebarContent onNavigate={() => setOpen(false)} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
