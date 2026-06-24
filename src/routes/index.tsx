import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Differentials } from "@/components/sections/Differentials";
import { CTABanner } from "@/components/sections/CTABanner";
import { Footer } from "@/components/sections/Footer";
import { fetchCondominiums, fetchProperties, type Property } from "@/lib/properties";
import {
  applyPropertyFilters,
  condominiumsFromProperties,
  mergeCondominiumLists,
  type HeroSearchFilters,
} from "@/lib/property-search";

export const Route = createFileRoute("/")({
  loader: async () => {
    const [properties, apiCondominiums] = await Promise.all([
      fetchProperties({ sort: "recent" }),
      fetchCondominiums().catch(() => [] as string[]),
    ]);

    const condominiums = mergeCondominiumLists(
      apiCondominiums,
      condominiumsFromProperties(properties),
    );

    return { properties, condominiums };
  },
  staleTime: 60_000,
  head: () => ({
    meta: [
      { title: "Lótus Imóveis — Investir com visão, transformando escolhas em valor" },
      {
        name: "description",
        content:
          "Encontre oportunidades imobiliárias selecionadas com estratégia, segurança e excelência.",
      },
      { property: "og:title", content: "Lótus Imóveis" },
      {
        property: "og:description",
        content:
          "Encontre oportunidades imobiliárias selecionadas com estratégia, segurança e excelência.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { properties, condominiums } = Route.useLoaderData();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [hasSearched, setHasSearched] = useState(false);

  function handleSearch(filters: HeroSearchFilters) {
    setHasSearched(true);
    setFilteredProperties(applyPropertyFilters(properties, filters));

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
