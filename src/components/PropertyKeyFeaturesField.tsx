import { useState } from "react";
import { X } from "lucide-react";
import { PropertyAmenityCard } from "@/components/PropertyAmenityCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { PropertyFeature } from "@/lib/api";
import {
  addKeyFeature,
  AMENITY_CATALOG,
  FEATURE_ICONS,
  keyFeatureDisplayLabel,
} from "@/lib/property-features";

type PropertyKeyFeaturesFieldProps = {
  value: PropertyFeature[];
  onChange: (next: PropertyFeature[]) => void;
  submitting?: boolean;
};

export function PropertyKeyFeaturesField({
  value,
  onChange,
  submitting = false,
}: PropertyKeyFeaturesFieldProps) {
  const [inputValue, setInputValue] = useState("");

  function handleAddTag(rawLabel?: string) {
    const label = (rawLabel ?? inputValue).trim();
    if (!label) return;

    const { features, added } = addKeyFeature(value, label);
    if (added) onChange(features);
    setInputValue("");
  }

  function removeFeature(index: number) {
    onChange(value.filter((_, itemIndex) => itemIndex !== index));
  }

  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="property-key-features" className="text-sm font-medium text-foreground">
          Key Real Estate Features
        </Label>
        <Input
          id="property-key-features"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleAddTag();
            }
          }}
          list="property-key-features-suggestions"
          placeholder="Ex: Private swimming pool, Wi-Fi, Terrace..."
          className="h-10 rounded-lg border-border/70"
          disabled={submitting}
        />
        <datalist id="property-key-features-suggestions">
          {AMENITY_CATALOG.map((amenity) => (
            <option key={amenity.id} value={amenity.pageLabel} />
          ))}
        </datalist>
        <p className="text-xs text-muted-foreground">
          Digite um diferencial e pressione Enter para adicioná-lo.
        </p>
      </div>

      {value.length > 0 ? (
        <div
          className="grid grid-cols-2 gap-3 sm:grid-cols-4"
          role="list"
          aria-label="Diferenciais selecionados"
        >
          {value.map((feature, index) => {
            const Icon = FEATURE_ICONS[feature.icon];
            const key = feature.amenityId ?? `${feature.icon}-${index}`;

            return (
              <div key={key} className="relative" role="listitem">
                <PropertyAmenityCard icon={Icon} label={keyFeatureDisplayLabel(feature)} />
                <button
                  type="button"
                  className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-background/95 text-muted-foreground shadow-sm transition-colors hover:text-destructive"
                  onClick={() => removeFeature(index)}
                  disabled={submitting}
                  aria-label={`Remover ${keyFeatureDisplayLabel(feature)}`}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
