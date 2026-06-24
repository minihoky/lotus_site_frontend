import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { F as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { E as MapPin, F as House, L as Gem, U as DollarSign, X as ChevronDown, a as Users, at as Award, f as ShieldCheck, h as Search, ot as ArrowRight, tt as Building2 } from "../_libs/lucide-react.mjs";
import { i as WhatsAppIcon, n as Header, r as PropertyCard, t as Footer } from "./PropertyCard-Vhw8rX1s.mjs";
import { t as Route } from "./routes-CbArFDJO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dt8DJMox.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_living_default = "/assets/hero-living-CYE2m0Jr.png";
var FILTERS = [
	{
		key: "type",
		icon: House,
		label: "Comprar"
	},
	{
		key: "location",
		icon: MapPin,
		label: "Tipo de imóvel"
	},
	{
		key: "area",
		icon: Building2,
		label: "Cidade ou bairro"
	},
	{
		key: "price",
		icon: DollarSign,
		label: "Faixa de preço"
	}
];
function Hero({ propertyTypes, locations, areas, prices, onSearch }) {
	const [openDropdown, setOpenDropdown] = (0, import_react.useState)(null);
	const [selectedType, setSelectedType] = (0, import_react.useState)();
	const [selectedLocation, setSelectedLocation] = (0, import_react.useState)();
	const [selectedArea, setSelectedArea] = (0, import_react.useState)();
	const [selectedPrice, setSelectedPrice] = (0, import_react.useState)();
	function toggleDropdown(key) {
		setOpenDropdown((prev) => prev === key ? null : key);
	}
	function handleSearchClick() {
		onSearch({
			type: selectedType,
			location: selectedLocation,
			area: selectedArea,
			price: selectedPrice
		});
	}
	function getButtonLabel(key, defaultLabel) {
		if (key === "type" && selectedType) return selectedType;
		if (key === "location" && selectedLocation) return selectedLocation;
		if (key === "area" && selectedArea !== void 0) return `${selectedArea}m²`;
		if (key === "price" && selectedPrice) return selectedPrice;
		return defaultLabel;
	}
	function renderOptions(key) {
		if (key === "type") return propertyTypes;
		if (key === "location") return locations;
		if (key === "area") return areas.map((area) => `${area}`);
		return prices;
	}
	function handleOptionClick(key, value) {
		if (key === "type") setSelectedType(value);
		else if (key === "location") setSelectedLocation(value);
		else if (key === "area") {
			const numeric = Number(value);
			setSelectedArea(Number.isFinite(numeric) ? numeric : void 0);
		} else if (key === "price") setSelectedPrice(value);
		setOpenDropdown(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-[480px] md:min-h-[540px] lg:min-h-[600px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_living_default,
					alt: "Sala de estar luxuosa",
					width: 2400,
					height: 1200,
					className: "absolute inset-0 h-full w-full object-cover object-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto flex h-full max-w-7xl items-center px-6 py-14 md:py-16 lg:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 text-[11px] font-semibold tracking-[0.24em] text-gold",
								children: "BEM-VINDO À LÓTUS IMÓVEIS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-[2.75rem] leading-[1.08] text-foreground md:text-5xl lg:text-[3.5rem]",
								children: [
									"Realizando sonhos,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"construindo histórias."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground",
								children: "Encontre o imóvel ideal com quem entende de confiança, qualidade e excelência."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#imoveis",
								className: "mt-7 inline-flex items-center gap-2.5 rounded-md bg-gold px-6 py-3 text-[11px] font-semibold tracking-[0.22em] text-primary-foreground transition-colors hover:bg-gold-dark",
								children: ["VER IMÓVEIS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 mx-auto max-w-7xl px-6 pb-14 md:pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mt-10 rounded-xl border border-border/80 bg-card p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:-mt-12 md:p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-2 md:grid-cols-[repeat(4,1fr)_auto]",
					children: [FILTERS.map(({ key, icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggleDropdown(key),
							className: "flex w-full items-center justify-between gap-3 rounded-lg border border-border/80 bg-background px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:border-gold/50",
							"aria-haspopup": "listbox",
							"aria-expanded": openDropdown === key,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-4 w-4 text-gold",
									strokeWidth: 1.5
								}), getButtonLabel(key, label)]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 opacity-40" })]
						}), openDropdown === key ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute left-0 right-0 top-full z-20 mt-1 max-h-64 overflow-y-auto rounded-lg border border-border/80 bg-background py-1 text-sm shadow-lg",
							children: [renderOptions(key).map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "flex w-full items-center px-4 py-2 text-left text-foreground hover:bg-muted",
								onClick: () => handleOptionClick(key, option),
								children: key === "area" ? `${option}m²` : option
							}, option)), renderOptions(key).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-4 py-2 text-xs text-muted-foreground",
								children: "Nenhuma opção disponível no momento."
							}) : null]
						}) : null]
					}, key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleSearchClick,
						className: "inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3 text-[11px] font-semibold tracking-[0.22em] text-primary-foreground transition-colors hover:bg-gold-dark md:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }), "BUSCAR"]
					})]
				})
			})
		})]
	});
}
var IMAGES = {
	hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2400&q=85&auto=format&fit=crop",
	property1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&auto=format&fit=crop",
	property2: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80&auto=format&fit=crop",
	property3: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80&auto=format&fit=crop",
	emptySearch: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=640&q=80&auto=format&fit=crop"
};
var INITIAL_VISIBLE = 6;
function FeaturedProperties({ properties, emptySearch = false }) {
	const [showAll, setShowAll] = (0, import_react.useState)(false);
	const visibleProperties = showAll ? properties : properties.slice(0, INITIAL_VISIBLE);
	const hasMore = properties.length > INITIAL_VISIBLE;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "imoveis",
		className: "bg-background py-16 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2.5 text-[11px] font-semibold tracking-[0.24em] text-gold",
					children: "SELEÇÃO ESPECIAL"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl text-foreground md:text-[2.75rem]",
					children: "Imóveis em destaque"
				})] }), hasMore && !showAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setShowAll(true),
					className: "inline-flex items-center gap-2 rounded-md border border-gold px-5 py-2.5 text-[11px] font-semibold tracking-[0.2em] text-foreground transition-colors hover:bg-gold-soft",
					children: ["VER TODOS OS IMÓVEIS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-gold" })]
				}) : null]
			}), emptySearch ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-10 text-center md:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMAGES.emptySearch,
						alt: "Imóvel não encontrado",
						width: 480,
						height: 320,
						className: "w-full max-w-sm rounded-lg object-cover opacity-90"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-8 font-display text-2xl text-foreground md:text-3xl",
						children: "O imóvel não existe"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground",
						children: "Não encontramos nenhum imóvel com os filtros selecionados. Tente ajustar sua busca."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7",
				children: visibleProperties.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property: p }, p.slug))
			})]
		})
	});
}
var ITEMS = [
	{
		icon: ShieldCheck,
		title: "Segurança",
		description: "Transações seguras e processos transparentes."
	},
	{
		icon: Users,
		title: "Atendimento Personalizado",
		description: "Entendemos suas necessidades e oferecemos as melhores soluções."
	},
	{
		icon: Gem,
		title: "Imóveis Selecionados",
		description: "Imóveis de alto padrão e localizações estratégicas."
	},
	{
		icon: Award,
		title: "Experiência e Credibilidade",
		description: "Anos de experiência no mercado imobiliário com excelência."
	}
];
function Differentials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sobre",
		className: "bg-cream py-16 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2.5 text-[11px] font-semibold tracking-[0.24em] text-gold",
					children: "POR QUE ESCOLHER A LÓTUS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl text-foreground md:text-[2.75rem]",
					children: "Nossos diferenciais"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gold/25",
					children: ITEMS.map(({ icon: Icon, title, description }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:px-8 first:lg:pl-0 last:lg:pr-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-9 w-9 text-gold",
								strokeWidth: 1.25
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-[15px] font-semibold text-foreground",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: description
							})
						]
					}, i))
				})
			]
		})
	});
}
var low_default = "/assets/low-Diu5i9Ey.png";
var other_logo_default = "/assets/other-logo-B0HSPALU.png";
function CTABanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-cover bg-center bg-no-repeat",
		style: { backgroundImage: `url(${low_default})` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl leading-tight text-foreground md:text-4xl",
					children: "Vamos encontrar o imóvel perfeito para você."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contato",
					className: "mt-6 inline-flex items-center gap-3 rounded-md border border-gold bg-cream/70 px-6 py-3 text-xs font-semibold tracking-[0.15em] text-foreground transition-colors hover:bg-cream",
					children: ["FALE COM UM ESPECIALISTA", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4 text-gold" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center md:justify-center lg:pl-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: other_logo_default,
					alt: "Lótus Imóveis",
					className: "h-20 w-auto md:h-24 lg:h-28"
				})
			})]
		})
	});
}
function getPropertyType(title) {
	return title.trim().split(/\s+/)[0] ?? "";
}
function buildFilterOptions(properties) {
	const types = /* @__PURE__ */ new Set();
	const locations = /* @__PURE__ */ new Set();
	const areas = /* @__PURE__ */ new Set();
	const prices = /* @__PURE__ */ new Set();
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
		prices: Array.from(prices)
	};
}
function applyFilters(properties, filters) {
	return properties.filter((property) => {
		if (filters.type && getPropertyType(property.title) !== filters.type) return false;
		if (filters.location && property.location !== filters.location) return false;
		if (filters.area !== void 0 && property.area !== filters.area) return false;
		if (filters.price && property.price !== filters.price) return false;
		return true;
	});
}
function Index() {
	const properties = Route.useLoaderData();
	const [filters, setFilters] = (0, import_react.useState)({});
	const [hasSearched, setHasSearched] = (0, import_react.useState)(false);
	const [filteredProperties, setFilteredProperties] = (0, import_react.useState)(properties);
	(0, import_react.useEffect)(() => {
		setFilteredProperties(applyFilters(properties, filters));
	}, [properties, filters]);
	const filterOptions = (0, import_react.useMemo)(() => buildFilterOptions(properties), [properties]);
	function handleSearch(newFilters) {
		setFilters(newFilters);
		setHasSearched(true);
		if (typeof window !== "undefined") {
			const section = document.getElementById("imoveis");
			if (section) section.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background font-sans text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
					propertyTypes: filterOptions.types,
					locations: filterOptions.locations,
					areas: filterOptions.areas,
					prices: filterOptions.prices,
					onSearch: handleSearch
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProperties, {
					properties: filteredProperties,
					emptySearch: hasSearched && filteredProperties.length === 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Differentials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
