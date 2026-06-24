import type { Property, PropertyFilters } from "./api";

export const PROPERTY_PURPOSES = [
  { value: "comprar", label: "Comprar" },
  { value: "alugar", label: "Alugar" },
] as const;

export type PropertyPurpose = (typeof PROPERTY_PURPOSES)[number]["value"];

export type HeroSearchFilters = {
  purpose?: PropertyPurpose;
  propertyType?: string;
  condominium?: string;
  locationOrCode?: string;
  minPrice?: number;
  maxPrice?: number;
};

export function heroSearchToPropertyFilters(filters: HeroSearchFilters): PropertyFilters {
  const result: PropertyFilters = {};

  if (filters.purpose) result.purpose = filters.purpose;
  if (filters.propertyType) result.propertyType = filters.propertyType;
  if (filters.condominium) result.condominium = filters.condominium;
  if (filters.locationOrCode) result.q = filters.locationOrCode.trim();
  if (filters.minPrice !== undefined && filters.minPrice > 0) result.minPrice = filters.minPrice;
  if (filters.maxPrice !== undefined && filters.maxPrice > 0) result.maxPrice = filters.maxPrice;

  return result;
}

export function applyPropertyFilters(properties: Property[], filters: HeroSearchFilters): Property[] {
  return properties.filter((property) => {
    if (filters.purpose && property.purpose !== filters.purpose) {
      return false;
    }
    if (filters.propertyType && property.propertyType !== filters.propertyType) {
      return false;
    }
    if (filters.condominium && property.condominium !== filters.condominium) {
      return false;
    }
    if (filters.locationOrCode) {
      const query = filters.locationOrCode.toLowerCase();
      const searchable = [
        property.location,
        property.address,
        property.title,
        property.code,
        property.slug,
      ];
      const matches = searchable.some((field) => field?.toLowerCase().includes(query));
      if (!matches) return false;
    }
    if (filters.minPrice !== undefined && property.priceValue < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== undefined && property.priceValue > filters.maxPrice) {
      return false;
    }
    return true;
  });
}

export const PROPERTY_TYPES = [
  "Apartamento",
  "Casa",
  "Casa unifamiliar",
  "Casa em Condomínio",
  "Sobrado",
  "Casa de campo",
  "Casa de campo em condomínio",
  "Cobertura",
  "Chácara",
  "Galpão",
  "Prédio comercial",
  "Terreno",
  "Terreno em Condomínio",
  "Edifício",
  "Espaço comercial",
  "Condomínio",
] as const;

export type PropertyType = (typeof PROPERTY_TYPES)[number];

export function parseBrazilianPrice(input: string): number {
  const trimmed = input.trim();
  if (!trimmed) return 0;

  const normalized = trimmed.replace(/[^\d,.]/g, "");
  if (!normalized) return 0;

  if (normalized.includes(",")) {
    const withoutThousands = normalized.replace(/\./g, "").replace(",", ".");
    const value = Number.parseFloat(withoutThousands);
    return Number.isFinite(value) ? Math.round(value) : 0;
  }

  const value = Number.parseInt(normalized.replace(/\./g, ""), 10);
  return Number.isFinite(value) ? value : 0;
}

export function formatBrazilianPrice(value: number): string {
  return `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatPriceInput(value: number): string {
  if (value <= 0) return "";
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function handlePriceInputChange(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  const cents = Number.parseInt(digits, 10);
  if (!Number.isFinite(cents)) return "";
  return (cents / 100).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
