import { useState } from "react";
import imageHero from "@/assets/hero-living.png";
import { ArrowRight, Building2, ChevronDown, DollarSign, Home, MapPin, Search } from "lucide-react";

export type HeroSearchFilters = {
  type?: string;
  location?: string;
  area?: number;
  price?: string;
};

type HeroProps = {
  propertyTypes: string[];
  locations: string[];
  areas: number[];
  prices: string[];
  onSearch: (filters: HeroSearchFilters) => void;
};

type FilterKey = "type" | "location" | "area" | "price";

const FILTERS: { key: FilterKey; icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string }[] =
  [
    { key: "type", icon: Home, label: "Comprar" },
    { key: "location", icon: MapPin, label: "Tipo de imóvel" },
    { key: "area", icon: Building2, label: "Cidade ou bairro" },
    { key: "price", icon: DollarSign, label: "Faixa de preço" },
  ];

export function Hero({ propertyTypes, locations, areas, prices, onSearch }: HeroProps) {
  const [openDropdown, setOpenDropdown] = useState<FilterKey | null>(null);
  const [selectedType, setSelectedType] = useState<string | undefined>();
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>();
  const [selectedArea, setSelectedArea] = useState<number | undefined>();
  const [selectedPrice, setSelectedPrice] = useState<string | undefined>();

  function toggleDropdown(key: FilterKey) {
    setOpenDropdown((prev) => (prev === key ? null : key));
  }

  function handleSearchClick() {
    onSearch({
      type: selectedType,
      location: selectedLocation,
      area: selectedArea,
      price: selectedPrice,
    });
  }

  function getButtonLabel(key: FilterKey, defaultLabel: string): string {
    if (key === "type" && selectedType) return selectedType;
    if (key === "location" && selectedLocation) return selectedLocation;
    if (key === "area" && selectedArea !== undefined) return `${selectedArea}m²`;
    if (key === "price" && selectedPrice) return selectedPrice;
    return defaultLabel;
  }

  function renderOptions(key: FilterKey) {
    if (key === "type") {
      return propertyTypes;
    }
    if (key === "location") {
      return locations;
    }
    if (key === "area") {
      return areas.map((area) => `${area}`);
    }
    return prices;
  }

  function handleOptionClick(key: FilterKey, value: string) {
    if (key === "type") {
      setSelectedType(value);
    } else if (key === "location") {
      setSelectedLocation(value);
    } else if (key === "area") {
      const numeric = Number(value);
      setSelectedArea(Number.isFinite(numeric) ? numeric : undefined);
    } else if (key === "price") {
      setSelectedPrice(value);
    }
    setOpenDropdown(null);
  }

  return (
    <section id="inicio" className="relative bg-background">
      <div className="relative min-h-[480px] md:min-h-[540px] lg:min-h-[600px]">
        <img
          src={imageHero}
          alt="Sala de estar luxuosa"
          width={2400}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/10" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 py-14 md:py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.24em] text-gold">
              BEM-VINDO À LÓTUS IMÓVEIS
            </p>
            <h1 className="font-display text-[2.75rem] leading-[1.08] text-foreground md:text-5xl lg:text-[3.5rem]">
              Realizando sonhos,
              <br />
              construindo histórias.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Encontre o imóvel ideal com quem entende de confiança, qualidade e excelência.
            </p>
            <a
              href="#imoveis"
              className="mt-7 inline-flex items-center gap-2.5 rounded-md bg-gold px-6 py-3 text-[11px] font-semibold tracking-[0.22em] text-primary-foreground transition-colors hover:bg-gold-dark"
            >
              VER IMÓVEIS
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-14 md:pb-16">
        <div className="-mt-10 rounded-xl border border-border/80 bg-card p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:-mt-12 md:p-3">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[repeat(4,1fr)_auto]">
            {FILTERS.map(({ key, icon: Icon, label }) => (
              <div key={key} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(key)}
                  className="flex w-full items-center justify-between gap-3 rounded-lg border border-border/80 bg-background px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:border-gold/50"
                  aria-haspopup="listbox"
                  aria-expanded={openDropdown === key}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    {getButtonLabel(key, label)}
                  </span>
                  <ChevronDown className="h-3.5 w-3.5 opacity-40" />
                </button>
                {openDropdown === key ? (
                  <div className="absolute left-0 right-0 top-full z-20 mt-1 max-h-64 overflow-y-auto rounded-lg border border-border/80 bg-background py-1 text-sm shadow-lg">
                    {renderOptions(key).map((option) => (
                      <button
                        key={option}
                        type="button"
                        className="flex w-full items-center px-4 py-2 text-left text-foreground hover:bg-muted"
                        onClick={() => handleOptionClick(key, option)}
                      >
                        {key === "area" ? `${option}m²` : option}
                      </button>
                    ))}
                    {renderOptions(key).length === 0 ? (
                      <div className="px-4 py-2 text-xs text-muted-foreground">
                        Nenhuma opção disponível no momento.
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
            <button
              type="button"
              onClick={handleSearchClick}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3 text-[11px] font-semibold tracking-[0.22em] text-primary-foreground transition-colors hover:bg-gold-dark md:px-8"
            >
              <Search className="h-4 w-4" />
              BUSCAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
