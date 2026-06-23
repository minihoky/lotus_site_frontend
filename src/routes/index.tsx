import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Hero, type HeroSearchFilters } from "@/components/sections/Hero";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Differentials } from "@/components/sections/Differentials";
import { CTABanner } from "@/components/sections/CTABanner";
import { Footer } from "@/components/sections/Footer";
import { fetchProperties, type Property } from "@/lib/properties";

export const Route = createFileRoute("/")({
  loader: () => fetchProperties({ sort: "recent" }),
  head: () => ({
    meta: [
      { title: "Lótus Imóveis — Realizando sonhos, construindo histórias" },
      {
        name: "description",
        content:
          "Imobiliária de alto padrão em São Paulo. Encontre casas, apartamentos e lançamentos com confiança, qualidade e excelência.",
      },
      { property: "og:title", content: "Lótus Imóveis" },
      {
        property: "og:description",
        content: "Encontre o imóvel ideal com quem entende de confiança, qualidade e excelência.",
      },
    ],
  }),
  component: Index,
});

function getPropertyType(title: string): string {
  const firstWord = title.trim().split(/\s+/)[0] ?? "";
  return firstWord;
}

function buildFilterOptions(properties: Property[]) {
  const types = new Set<string>();
  const locations = new Set<string>();
  const areas = new Set<number>();
  const prices = new Set<string>();

  for (const property of properties) {
    types.add(getPropertyType(property.title));
    locations.add(property.location);
    areas.add(property.area);
    prices.add(property.price);
  }

  return {
    types: Array.from(types).sort((a, b) => a.localeCompare(b, "pt-BR")),
    locations: Array.from(locations).sort((a, b) => a.localeCompare(b, "pt-BR")),
    areas: Array.from(areas).sort((a, b) => a - b),
    prices: Array.from(prices),
  };
}

function applyFilters(properties: Property[], filters: HeroSearchFilters): Property[] {
  return properties.filter((property) => {
    if (filters.type && getPropertyType(property.title) !== filters.type) {
      return false;
    }
    if (filters.location && property.location !== filters.location) {
      return false;
    }
    if (filters.area !== undefined && property.area !== filters.area) {
      return false;
    }
    if (filters.price && property.price !== filters.price) {
      return false;
    }
    return true;
  });
}

function Index() {
  const properties = Route.useLoaderData();
  const [filters, setFilters] = useState<HeroSearchFilters>({});
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  useEffect(() => {
    setFilteredProperties(applyFilters(properties, filters));
  }, [properties, filters]);

  const filterOptions = useMemo(() => buildFilterOptions(properties), [properties]);

  function handleSearch(newFilters: HeroSearchFilters) {
    setFilters(newFilters);
    setHasSearched(true);

    if (typeof window !== "undefined") {
      const section = document.getElementById("imoveis");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />
      <main>
        <Hero
          propertyTypes={filterOptions.types}
          locations={filterOptions.locations}
          areas={filterOptions.areas}
          prices={filterOptions.prices}
          onSearch={handleSearch}
        />
        <FeaturedProperties
          properties={filteredProperties}
          emptySearch={hasSearched && filteredProperties.length === 0}
        />
        <Differentials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
