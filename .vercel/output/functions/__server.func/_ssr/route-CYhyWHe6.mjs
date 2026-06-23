import { d as Outlet, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { i as cn } from "./input-BTXCllkk.mjs";
import { A as LayoutDashboard, K as CircleQuestionMark, M as Image, R as FileText, S as MessageSquare, W as CreditCard, Y as ChevronLeft, a as Users, d as Shield, et as CalendarDays, g as Quote, k as LifeBuoy, m as Settings, tt as Building2, u as Star, v as Plug, w as Megaphone } from "../_libs/lucide-react.mjs";
import { a as SidebarGroupContent, c as SidebarInset, d as SidebarMenuItem, f as SidebarProvider, g as useSidebar, i as SidebarGroup, l as SidebarMenu, n as SidebarContent, o as SidebarGroupLabel, p as SidebarRail, r as SidebarFooter, s as SidebarHeader, t as Sidebar, u as SidebarMenuButton } from "./sidebar-W6Qbug9h.mjs";
import { t as logo_default } from "./logo-BsOiqFsB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-CYhyWHe6.js
var import_jsx_runtime = require_jsx_runtime();
var navGroups = [
	{
		label: "GESTÃO",
		items: [
			{
				label: "Imóveis",
				icon: Building2,
				href: "#"
			},
			{
				label: "Reservas",
				icon: CalendarDays,
				href: "#"
			},
			{
				label: "Clientes",
				icon: Users,
				href: "#"
			},
			{
				label: "Mensagens",
				icon: MessageSquare,
				href: "#"
			},
			{
				label: "Pagamentos",
				icon: CreditCard,
				href: "#"
			},
			{
				label: "Avaliações",
				icon: Star,
				href: "#"
			}
		]
	},
	{
		label: "CONTEÚDO",
		items: [
			{
				label: "Páginas",
				icon: FileText,
				href: "#"
			},
			{
				label: "Banners",
				icon: Megaphone,
				href: "#"
			},
			{
				label: "Depoimentos",
				icon: Quote,
				href: "#"
			},
			{
				label: "Mídia",
				icon: Image,
				href: "#"
			}
		]
	},
	{
		label: "CONFIGURAÇÕES",
		items: [
			{
				label: "Usuários",
				icon: Users,
				href: "#"
			},
			{
				label: "Funções",
				icon: Shield,
				href: "#"
			},
			{
				label: "Configurações",
				icon: Settings,
				href: "#"
			},
			{
				label: "Integrações",
				icon: Plug,
				href: "#"
			}
		]
	}
];
function CollapseButton() {
	const { toggleSidebar } = useSidebar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: toggleSidebar,
		className: "flex w-full items-center gap-2 rounded-md px-2 py-2 text-xs text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Recolher menu" })]
	});
}
function AdminSidebar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sidebar, {
		collapsible: "icon",
		className: "border-sidebar-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarHeader, {
				className: "border-b border-sidebar-border px-4 py-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin",
					className: "flex flex-col items-center gap-2 group-data-[collapsible=icon]:px-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Lótus Imóveis",
						className: "h-12 w-auto brightness-110 group-data-[collapsible=icon]:h-8"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarContent, {
				className: "gap-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroup, {
					className: "px-2 pt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuButton, {
						asChild: true,
						isActive: true,
						className: cn("data-[active=true]:bg-gold data-[active=true]:text-primary-foreground", "data-[active=true]:hover:bg-gold/90 data-[active=true]:hover:text-primary-foreground"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dashboard" })]
						})
					}) }) }) })
				}), navGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarGroup, {
					className: "px-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupLabel, {
						className: "text-[10px] font-semibold tracking-[0.15em] text-sidebar-foreground/45",
						children: group.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenu, { children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuButton, {
						asChild: true,
						tooltip: item.label,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.href,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
						})
					}) }, item.label)) }) })]
				}, group.label))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFooter, {
				className: "border-t border-sidebar-border p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuButton, {
					asChild: true,
					tooltip: "Suporte",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Suporte" })]
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuButton, {
					asChild: true,
					tooltip: "Central de ajuda",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Central de ajuda" })]
					})
				}) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapseButton, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarRail, {})
		]
	});
}
function AdminLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarProvider, {
		defaultOpen: true,
		className: "admin-shell min-h-svh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarInset, {
			className: "bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})]
	});
}
//#endregion
export { AdminLayout as component };
