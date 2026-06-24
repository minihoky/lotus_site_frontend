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

function applyFilters(properties: Property[], filters: HeroSearchFilters): Property[] {
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
      const matchesLocation = property.location.toLowerCase().includes(query);
      const matchesCode = property.code?.toLowerCase().includes(query) ?? false;
      const matchesSlug = property.slug.toLowerCase().includes(query);
      if (!matchesLocation && !matchesCode && !matchesSlug) {
        return false;
      }
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

function Index() {
  const properties = Route.useLoaderData();
  const [filters, setFilters] = useState<HeroSearchFilters>({});
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  useEffect(() => {
    setFilteredProperties(applyFilters(properties, filters));
  }, [properties, filters]);

  const condominiums = useMemo(() => buildCondominiums(properties), [properties]);

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
        <Hero condominiums={condominiums} onSearch={handleSearch} />
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
