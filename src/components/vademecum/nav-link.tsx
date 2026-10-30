"use client";

import { DrawerClose } from "@/components/ui/drawer";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * Gdzie wyświetlany jest spis: w bocznym menu Vademecum, w panelu menu
 * głównego (telefon) albo w rozwijanym menu na pasku nawigacji (tablet).
 */
export type NavContainer = "sidebar" | "drawer" | "menu";

/** Link, który w menu głównym zamyka panel lub rozwijane menu po kliknięciu. */
export function ContainerLink({
  container,
  children,
  ...props
}: ComponentProps<typeof Link> & { container: NavContainer }) {
  const link = <Link {...props} />;
  if (container === "drawer") {
    return (
      <DrawerClose nativeButton={false} render={link}>
        {children}
      </DrawerClose>
    );
  }
  if (container === "menu") {
    return (
      <NavigationMenuLink closeOnClick render={link}>
        {children}
      </NavigationMenuLink>
    );
  }
  return <Link {...props}>{children}</Link>;
}
