"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { MIN_QUERY_LENGTH } from "@/lib/vademecum/config";
import { SearchIcon, XIcon } from "lucide-react";
import { type ReactNode, useState } from "react";

import type { NavContainer } from "./nav-link";
import { SearchResults } from "./search-results";

/**
 * Pole wyszukiwania nad spisem treści: podczas wyszukiwania wyniki zastępują
 * spis (`children`).
 */
export function SearchableNav({
  container,
  children,
}: {
  container: NavContainer;
  children: ReactNode;
}) {
  const [query, setQuery] = useState("");
  const searching = query.trim().length >= MIN_QUERY_LENGTH;

  return (
    <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          type="text"
          inputMode="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Escape" && setQuery("")}
          placeholder="Szukaj"
          aria-label="Szukaj w Vademecum"
          autoComplete="off"
        />
        {query && (
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              aria-label="Wyczyść wyszukiwanie"
              onClick={() => setQuery("")}
            >
              <XIcon />
            </InputGroupButton>
          </InputGroupAddon>
        )}
      </InputGroup>

      {searching ? (
        <SearchResults query={query} container={container} />
      ) : (
        children
      )}
    </div>
  );
}
