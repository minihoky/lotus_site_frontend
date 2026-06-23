import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { $ as Car, D as Mail, E as MapPin, T as Maximize, it as Bath, j as Instagram, rt as BedDouble, y as Phone, z as Facebook } from "../_libs/lucide-react.mjs";
import { t as logo_default } from "./logo-BsOiqFsB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PropertyCard-Vhw8rX1s.js
var import_jsx_runtime = require_jsx_runtime();
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
	});
}
var NAV = [
	{
		label: "INÍCIO",
		href: "#inicio",
		active: true
	},
	{
		label: "IMÓVEIS",
		href: "#imoveis"
	},
	{
		label: "LANÇAMENTOS",
		href: "#lancamentos"
	},
	{
		label: "SOBRE NÓS",
		href: "#sobre"
	},
	{
		label: "CONTATO",
		href: "#contato"
	}
];
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#inicio",
					className: "flex shrink-0 items-center justify-self-start",
					"aria-label": "Lótus Imóveis",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Lótus Imóveis",
						className: "h-14 w-auto md:h-16"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center justify-center gap-7 lg:flex xl:gap-9",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: `text-[11px] font-medium tracking-[0.2em] transition-colors hover:text-gold ${item.active ? "border-b border-gold pb-0.5 text-gold" : "text-foreground/75"}`,
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contato",
					className: "inline-flex items-center justify-self-end gap-2 rounded-md border border-gold px-4 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-foreground transition-colors hover:bg-gold-soft md:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-3.5 w-3.5 text-gold" }), "FALE CONOSCO"]
				})
			]
		})
	});
}
var NAV_LINKS = [
	"Início",
	"Imóveis",
	"Lançamentos",
	"Sobre Nós",
	"Contato"
];
var INFO_LINKS = [
	"Quem Somos",
	"Trabalhe Conosco",
	"Política de Privacidade",
	"Termos de Uso"
];
var CONTACTS = [
	{
		icon: Phone,
		value: "(11) 99999-9999"
	},
	{
		icon: Mail,
		value: "contato@lotusimoveis.com.br"
	},
	{
		icon: MapPin,
		value: "Av. Paulista, 1000 - São Paulo, SP"
	}
];
var SOCIAL = [{
	icon: Instagram,
	href: "#",
	label: "Instagram"
}, {
	icon: Facebook,
	href: "#",
	label: "Facebook"
}];
function Column({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "mb-4 text-[11px] font-semibold tracking-[0.22em] text-gold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2.5",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#",
			className: "text-sm text-muted-foreground transition-colors hover:text-gold",
			children: item
		}) }, item))
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "contato",
		className: "bg-cream pb-8 pt-14 md:pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-sans text-base font-bold tracking-[0.14em] text-gold",
							children: "LÓTUS IMÓVEIS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground",
							children: "Realizando sonhos e construindo histórias com confiança, qualidade e excelência."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-4",
							children: [SOCIAL.map(({ icon: Icon, href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								"aria-label": label,
								className: "text-gold transition-opacity hover:opacity-70",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5",
									strokeWidth: 1.5
								})
							}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "WhatsApp",
								className: "text-gold transition-opacity hover:opacity-70",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-5 w-5" })
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						title: "NAVEGAÇÃO",
						items: NAV_LINKS
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						title: "INFORMAÇÕES",
						items: INFO_LINKS
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mb-4 text-[11px] font-semibold tracking-[0.22em] text-gold",
						children: "CONTATO"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: CONTACTS.map(({ icon: Icon, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2.5 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "mt-0.5 h-4 w-4 shrink-0 text-gold",
								strokeWidth: 1.5
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value })]
						}, value))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 border-t border-border/70 pt-6 text-center text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Lótus Imóveis. Todos os direitos reservados."
				]
			})]
		})
	});
}
function PropertyCard({ property }) {
	const specs = [
		{
			icon: BedDouble,
			value: property.beds
		},
		{
			icon: Bath,
			value: property.baths
		},
		{
			icon: Car,
			value: property.parking
		},
		{
			icon: Maximize,
			value: `${property.area}m²`
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/imoveis/$slug",
		params: { slug: property.slug },
		className: "group block overflow-hidden rounded-lg border border-border/70 bg-card shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden",
			children: [property.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 z-10 rounded bg-gold px-2.5 py-1 text-[9px] font-semibold tracking-[0.16em] text-primary-foreground",
				children: property.badge
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: property.image,
				alt: property.title,
				loading: "lazy",
				width: 800,
				height: 600,
				className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3.5 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl text-foreground",
					children: property.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: property.location
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center gap-4 border-t border-border/70 pt-3.5 text-sm text-muted-foreground",
					children: specs.map(({ icon: Icon, value }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-4 w-4 text-gold",
							strokeWidth: 1.5
						}), value]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold text-gold",
					children: property.price
				})
			]
		})]
	});
}
//#endregion
export { WhatsAppIcon as i, Header as n, PropertyCard as r, Footer as t };
