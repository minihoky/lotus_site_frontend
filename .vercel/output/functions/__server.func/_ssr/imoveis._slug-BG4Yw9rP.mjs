import { c as fetchSimilarProperties, s as fetchPropertyBySlug } from "./api-BZGsNEkr.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/imoveis._slug-BG4Yw9rP.js
var $$splitComponentImporter = () => import("./imoveis._slug-DCsFfc7v.mjs");
var Route = createFileRoute("/imoveis/$slug")({
	loader: async ({ params }) => {
		const property = await fetchPropertyBySlug(params.slug);
		if (!property) throw notFound();
		return {
			property,
			similar: await fetchSimilarProperties(params.slug)
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.property.title ?? "Imóvel"} — Lótus Imóveis` }, {
		name: "description",
		content: loaderData?.property.description[0] ?? "Detalhes do imóvel"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
