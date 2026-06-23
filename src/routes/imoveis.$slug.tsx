import { createFileRoute, notFound } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PropertyDetail } from "@/components/sections/PropertyDetail";
import { fetchPropertyBySlug, fetchSimilarProperties } from "@/lib/properties";

export const Route = createFileRoute("/imoveis/$slug")({
  loader: async ({ params }) => {
    const property = await fetchPropertyBySlug(params.slug);
    if (!property) throw notFound();
    const similar = await fetchSimilarProperties(params.slug);
    return { property, similar };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.property.title ?? "Imóvel"} — Lótus Imóveis`,
      },
      {
        name: "description",
        content: loaderData?.property.description[0] ?? "Detalhes do imóvel",
      },
    ],
  }),
  component: PropertyDetailPage,
});

function PropertyDetailPage() {
  const { property, similar } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />
      <main>
        <PropertyDetail property={property} similar={similar} />
      </main>
      <Footer />
    </div>
  );
}
