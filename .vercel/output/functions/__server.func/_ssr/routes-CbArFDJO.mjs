import { o as fetchProperties } from "./api-BZGsNEkr.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CbArFDJO.js
var $$splitComponentImporter = () => import("./routes-Dt8DJMox.mjs");
var Route = createFileRoute("/")({
	loader: () => fetchProperties({ sort: "recent" }),
	head: () => ({ meta: [
		{ title: "Lótus Imóveis — Realizando sonhos, construindo histórias" },
		{
			name: "description",
			content: "Imobiliária de alto padrão em São Paulo. Encontre casas, apartamentos e lançamentos com confiança, qualidade e excelência."
		},
		{
			property: "og:title",
			content: "Lótus Imóveis"
		},
		{
			property: "og:description",
			content: "Encontre o imóvel ideal com quem entende de confiança, qualidade e excelência."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
