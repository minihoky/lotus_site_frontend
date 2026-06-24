import {
  Anchor,
  Building2,
  Car,
  ChefHat,
  Dumbbell,
  PanelTop,
  Shield,
  TreePine,
  Umbrella,
  Waves,
  Wifi,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { PropertyAmenityId, PropertyFeature } from "./api";

export type AmenityId = PropertyAmenityId;

export type PropertyFeatureIcon = PropertyFeature["icon"];

export const AMENITY_CATALOG: {
  id: AmenityId;
  label: string;
  icon: PropertyFeatureIcon;
}[] = [
  { id: "private_pool", label: "Piscina privativa", icon: "pool" },
  { id: "terrace", label: "Terraço", icon: "balcony" },
  { id: "security_24h", label: "Portaria 24h", icon: "security" },
  { id: "air_conditioning", label: "Ar condicionado", icon: "ac" },
  { id: "private_beach", label: "Praia privativa", icon: "beach" },
  { id: "marina", label: "Marina", icon: "marina" },
  { id: "wifi", label: "Wi-Fi", icon: "wifi" },
  { id: "parking_space", label: "Vaga de estacionamento", icon: "parking" },
];

export const FEATURE_ICONS: Record<PropertyFeatureIcon, LucideIcon> = {
  pool: Waves,
  gourmet: ChefHat,
  security: Shield,
  ac: Wind,
  gym: Dumbbell,
  garden: TreePine,
  wifi: Wifi,
  parking: Car,
  elevator: Building2,
  balcony: PanelTop,
  beach: Umbrella,
  marina: Anchor,
};

const AMENITY_BY_ID = new Map(AMENITY_CATALOG.map((amenity) => [amenity.id, amenity]));

const AMENITY_ID_SET = new Set<AmenityId>(AMENITY_CATALOG.map((amenity) => amenity.id));

const LABEL_ALIASES: Partial<Record<AmenityId, RegExp[]>> = {
  private_pool: [/piscina/i, /swimming\s*pool/i, /private\s*pool/i],
  terrace: [/terra[cç]o/i, /terrace/i, /varanda/i, /balcon/i],
  security_24h: [/portaria/i, /seguran[cç]a/i, /24\s*h/i, /security/i],
  air_conditioning: [/ar\s*condicionado/i, /air\s*conditioning/i, /\bac\b/i],
  private_beach: [/praia/i, /private\s*beach/i, /beach/i],
  marina: [/marina/i],
  wifi: [/wi[\s-]?fi/i],
  parking_space: [/vaga/i, /estacionamento/i, /parking/i],
};

export function sortAmenityIds(ids: AmenityId[]): AmenityId[] {
  const selected = new Set(ids);
  return AMENITY_CATALOG.filter((amenity) => selected.has(amenity.id)).map((amenity) => amenity.id);
}

export function toggleAmenitySelection(selected: AmenityId[], id: AmenityId): AmenityId[] {
  const next = selected.includes(id)
    ? selected.filter((item) => item !== id)
    : [...selected, id];
  return sortAmenityIds(next);
}

export function catalogFeaturesForDisplay(
  features: PropertyFeature[],
  parking?: number,
): PropertyFeature[] {
  const ids = featuresToAmenityIds(features);
  if (ids.length === 0) return [];
  return amenitiesToFeatures(ids, parking);
}

export function amenitiesToFeatures(
  selectedIds: AmenityId[],
  parking?: number,
): PropertyFeature[] {
  return sortAmenityIds(selectedIds).map((id) => {
    const amenity = AMENITY_BY_ID.get(id)!;

    if (id === "parking_space" && parking && parking > 0) {
      return {
        label: parking === 1 ? "1 vaga" : `${parking} vagas`,
        icon: "parking",
        amenityId: id,
      };
    }

    return {
      label: amenity.label,
      icon: amenity.icon,
      amenityId: id,
    };
  });
}

function amenityIdForFeature(feature: PropertyFeature): AmenityId | undefined {
  if (feature.amenityId && AMENITY_ID_SET.has(feature.amenityId)) {
    return feature.amenityId;
  }

  const byLabel = AMENITY_CATALOG.find(
    (amenity) => amenity.label.toLowerCase() === feature.label.toLowerCase(),
  );
  if (byLabel) return byLabel.id;

  for (const amenity of AMENITY_CATALOG) {
    const aliases = LABEL_ALIASES[amenity.id];
    if (aliases?.some((pattern) => pattern.test(feature.label))) {
      return amenity.id;
    }
  }

  if (feature.icon === "parking") {
    return "parking_space";
  }

  return AMENITY_CATALOG.find((amenity) => amenity.icon === feature.icon)?.id;
}

export function featuresToAmenityIds(features: PropertyFeature[]): AmenityId[] {
  const ids = new Set<AmenityId>();
  for (const feature of features) {
    const id = amenityIdForFeature(feature);
    if (id) ids.add(id);
  }
  return sortAmenityIds([...ids]);
}

export function resolveFeaturesForDisplay(features: PropertyFeature[]): PropertyFeature[] {
  const seen = new Set<string>();
  const resolved: PropertyFeature[] = [];

  for (const feature of features ?? []) {
    if (!FEATURE_ICONS[feature.icon]) continue;

    const amenityId = amenityIdForFeature(feature);
    const amenity = amenityId ? AMENITY_BY_ID.get(amenityId) : undefined;

    let displayFeature: PropertyFeature;
    if (amenity && amenityId === "parking_space" && /vaga/i.test(feature.label)) {
      displayFeature = {
        label: feature.label,
        icon: "parking",
        amenityId,
      };
    } else if (amenity && amenityId) {
      displayFeature = {
        label: amenity.label,
        icon: amenity.icon,
        amenityId,
      };
    } else {
      displayFeature = feature;
    }

    const dedupeKey = displayFeature.amenityId ?? `${displayFeature.icon}:${displayFeature.label}`;
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);

    resolved.push(displayFeature);
  }

  return resolved;
}
