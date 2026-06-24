import {
  Anchor,
  Building2,
  Car,
  ChefHat,
  Dumbbell,
  Maximize,
  Shield,
  TreePine,
  Umbrella,
  Waves,
  Wifi,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { PropertyFeature } from "./api";

export type PropertyFeatureIcon = PropertyFeature["icon"];

export type AmenityId =
  | "private_pool"
  | "terrace"
  | "security_24h"
  | "air_conditioning"
  | "private_beach"
  | "marina"
  | "wifi"
  | "parking_space";

export const AMENITY_CATALOG: {
  id: AmenityId;
  label: string;
  icon: PropertyFeatureIcon;
}[] = [
  { id: "private_pool", label: "Piscina privada", icon: "pool" },
  { id: "terrace", label: "Terraço", icon: "balcony" },
  { id: "security_24h", label: "Portaria 24h", icon: "security" },
  { id: "air_conditioning", label: "Ar condicionado", icon: "ac" },
  { id: "private_beach", label: "Praia privada", icon: "beach" },
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
  balcony: Maximize,
  beach: Umbrella,
  marina: Anchor,
};

export function amenitiesToFeatures(
  selectedIds: AmenityId[],
  parking?: number,
): PropertyFeature[] {
  return selectedIds.map((id) => {
    const amenity = AMENITY_CATALOG.find((item) => item.id === id)!;
    if (id === "parking_space" && parking && parking > 0) {
      return {
        label: parking === 1 ? "1 vaga" : `${parking} vagas`,
        icon: "parking",
      };
    }
    return { label: amenity.label, icon: amenity.icon };
  });
}

export function featuresToAmenityIds(features: PropertyFeature[]): AmenityId[] {
  const ids = new Set<AmenityId>();
  for (const feature of features) {
    const match = AMENITY_CATALOG.find((amenity) => amenity.icon === feature.icon);
    if (match) ids.add(match.id);
  }
  return AMENITY_CATALOG.filter((amenity) => ids.has(amenity.id)).map((amenity) => amenity.id);
}
