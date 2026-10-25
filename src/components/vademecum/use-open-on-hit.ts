import { useState } from "react";

import { useVademecum } from "./vademecum-context";

interface Openable {
  id: string;
  /** Elementy wewnątrz pozycji, które mogą być celem wyniku wyszukiwania. */
  hitIds: string[];
}

/**
 * Stan rozwiniętych pozycji akordeonu. Wynik wyszukiwania wskazujący na
 * element wewnątrz pozycji rozwija ją, także gdy strona dopiero się montuje.
 */
export function useOpenOnHit(items: Openable[], initiallyOpen: string[] = []) {
  const { hit } = useVademecum();
  const owner = (id: string | undefined) =>
    id ? items.find((item) => item.hitIds.includes(id)) : undefined;

  const [open, setOpen] = useState(() => {
    const target = owner(hit?.id);
    return target && !initiallyOpen.includes(target.id)
      ? [...initiallyOpen, target.id]
      : initiallyOpen;
  });
  const [handledHit, setHandledHit] = useState(hit);

  if (hit !== handledHit) {
    setHandledHit(hit);
    const target = owner(hit?.id);
    if (target && !open.includes(target.id)) setOpen([...open, target.id]);
  }

  return [open, setOpen] as const;
}
