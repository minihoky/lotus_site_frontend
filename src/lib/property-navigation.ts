import type { ParsedLocation } from "@tanstack/react-router";
import type { MakeRouteMatchUnion } from "@tanstack/react-router";

import type { Property } from "@/lib/properties";

export type PropertyLinkState = {
  property?: Property;
};

/** True when a list/card payload has enough fields to render the detail page. */
export function isPropertyDetailReady(property: Property): boolean {
  return Boolean(
    property.slug &&
    property.title &&
    property.description.length > 0 &&
    (property.gallery.length > 0 || property.image),
  );
}

export function getPropertyFromLinkState(state: unknown, slug: string): Property | undefined {
  if (!state || typeof state !== "object") return undefined;

  const property = (state as PropertyLinkState).property;
  if (!property || property.slug !== slug) return undefined;
  if (!isPropertyDetailReady(property)) return undefined;

  return property;
}

export function findPropertyInMatches(
  matches: Array<MakeRouteMatchUnion>,
  slug: string,
): Property | undefined {
  for (const match of matches) {
    if (match.routeId !== "/" || !match.loaderData) continue;

    const properties = match.loaderData;
    if (!Array.isArray(properties)) continue;

    const found = properties.find(
      (item): item is Property =>
        typeof item === "object" &&
        item !== null &&
        "slug" in item &&
        (item as Property).slug === slug,
    );

    if (found && isPropertyDetailReady(found)) return found;
  }

  return undefined;
}

export function resolveCachedProperty(
  slug: string,
  location: ParsedLocation,
  matches: Array<MakeRouteMatchUnion>,
): Property | undefined {
  return getPropertyFromLinkState(location.state, slug) ?? findPropertyInMatches(matches, slug);
}
