export const PROPERTY_PURPOSES = [
  { value: "comprar", label: "Comprar" },
  { value: "alugar", label: "Alugar" },
] as const;

export type PropertyPurpose = (typeof PROPERTY_PURPOSES)[number]["value"];

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
