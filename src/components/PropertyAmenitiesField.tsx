import { PropertyAmenityCard } from "@/components/PropertyAmenityCard";
import { PropertyFeaturesGrid } from "@/components/PropertyFeaturesGrid";
import {
  AMENITY_CATALOG,
  amenitiesToFeatures,
  FEATURE_ICONS,
  toggleAmenitySelection,
  type AmenityId,
} from "@/lib/property-features";

type PropertyAmenitiesFieldProps = {
  selected: AmenityId[];
  onChange: (next: AmenityId[]) => void;
  parking?: number;
  submitting?: boolean;
};

export function PropertyAmenitiesField({
  selected,
  onChange,
  parking,
  submitting = false,
}: PropertyAmenitiesFieldProps) {
  function toggleAmenity(id: AmenityId) {
    onChange(toggleAmenitySelection(selected, id));
  }

  const previewFeatures = amenitiesToFeatures(selected, parking);

  return (
    <div className="space-y-4">
      <div
        className="grid grid-cols-2 gap-3 sm:grid-cols-4"
        role="group"
        aria-label="Diferenciais do imóvel"
      >
        {AMENITY_CATALOG.map((amenity) => {
          const Icon = FEATURE_ICONS[amenity.icon];
          return (
            <PropertyAmenityCard
              key={amenity.id}
              icon={Icon}
              label={amenity.label}
              selected={selected.includes(amenity.id)}
              interactive
              disabled={submitting}
              onClick={() => toggleAmenity(amenity.id)}
            />
          );
        })}
      </div>

      {selected.length > 0 ? (
        <div className="space-y-2 rounded-lg border border-border/60 bg-cream/30 p-4">
          <p className="text-xs font-medium text-foreground">
            {selected.length} diferencial{selected.length === 1 ? "" : "is"} selecionado
            {selected.length === 1 ? "" : "s"} — prévia na página do imóvel:
          </p>
          <PropertyFeaturesGrid
            features={previewFeatures}
            parking={parking}
            className="mt-0"
            usePageLabels={false}
            emptyMessage="Nenhum diferencial selecionado."
          />
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">
          Nenhum diferencial selecionado. Clique nos cards acima para adicionar.
        </p>
      )}
    </div>
  );
}
