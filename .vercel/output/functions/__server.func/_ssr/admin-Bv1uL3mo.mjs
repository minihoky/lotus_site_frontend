import { i as fetchInquiries, o as fetchProperties } from "./api-B-dNQuz5.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Bv1uL3mo.js
var $$splitComponentImporter = () => import("./admin-CKk5Czgl.mjs");
var Route = createFileRoute("/admin/")({
	loader: async () => {
		const [recentProperties, recentInquiries] = await Promise.all([fetchProperties({ sort: "recent" }), fetchInquiries()]);
		return {
			recentProperties,
			recentInquiries
		};
	},
	head: () => ({ meta: [{ title: "Dashboard — Lótus Imóveis Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
