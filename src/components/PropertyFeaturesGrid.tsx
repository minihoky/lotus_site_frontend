import type { PropertyFeature } from "@/lib/api";
import { PropertyAmenityCard } from "@/components/PropertyAmenityCard";
import { FEATURE_ICONS, resolveFeaturesForDisplay } from "@/lib/property-features";
import { cn } from "@/lib/utils";

type PropertyFeaturesGridProps = {
  features: PropertyFeature[];
  className?: string;
};

export function PropertyFeaturesGrid({ features, className }: PropertyFeaturesGridProps) {
  const items = resolveFeaturesForDisplay(features ?? []);

  if (items.length === 0) {
    return (
      <p className="mt-4 text-sm text-muted-foreground">
        Nenhum diferencial cadastrado para este imóvel.
      </p>
    );
  }

  return (
    <div className={cn("mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4", className)}>
      {items.map((feature, index) => {
        const Icon = FEATURE_ICONS[feature.icon];
        const key = feature.amenityId
          ? `${feature.amenityId}-${index}`
          : `${feature.icon}-${feature.label}-${index}`;

        return (
          <PropertyAmenityCard
            key={key}
            icon={Icon}
            label={feature.label}
          />
        );
      })}
    </div>
  );
}
