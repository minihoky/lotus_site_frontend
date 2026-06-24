import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Differentials } from "@/components/sections/Differentials";
import { CTABanner } from "@/components/sections/CTABanner";
import { Footer } from "@/components/sections/Footer";
import { fetchProperties, type Property } from "@/lib/properties";
import {
  applyPropertyFilters,
  heroSearchToPropertyFilters,
  type HeroSearchFilters,
} from "@/lib/property-search";

export const Route = createFileRoute("/")({
  loader: () => fetchProperties({ sort: "recent" }),
  staleTime: 60_000,
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

function buildCondominiums(properties: Property[]): string[] {
  const names = new Set<string>();
  for (const property of properties) {
    if (property.condominium) {
      names.add(property.condominium);
    }
  }
  return Array.from(names).sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function Index() {
  const properties = Route.useLoaderData();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const condominiums = useMemo(() => buildCondominiums(properties), [properties]);

  async function handleSearch(filters: HeroSearchFilters) {
    setHasSearched(true);
    setIsSearching(true);

    try {
      const results = await fetchProperties(heroSearchToPropertyFilters(filters));
      setFilteredProperties(results);
    } catch {
      setFilteredProperties(applyPropertyFilters(properties, filters));
    } finally {
      setIsSearching(false);
    }

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
        <Hero condominiums={condominiums} onSearch={handleSearch} />
        <FeaturedProperties
          properties={filteredProperties}
          emptySearch={hasSearched && !isSearching && filteredProperties.length === 0}
          isLoading={isSearching}
        />
        <Differentials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
