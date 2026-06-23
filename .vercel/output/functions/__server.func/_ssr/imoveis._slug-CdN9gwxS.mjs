import { i as __toESM } from "../_runtime.mjs";
import { f as submitInquiry } from "./api-B-dNQuz5.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Slot, F as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { i as cn, n as Input, t as Button } from "./input-BTXCllkk.mjs";
import { n as Textarea, t as Label } from "./textarea-DUswk0VF.mjs";
import { $ as Car, B as Ellipsis, C as MessageCircle, D as Mail, E as MapPin, H as Dumbbell, I as Heart, J as ChevronRight, N as Images, T as Maximize, Y as ChevronLeft, Z as ChefHat, c as TreePine, d as Shield, i as Waves, it as Bath, n as Wind, ot as ArrowRight, p as Share2, r as Wifi, rt as BedDouble, tt as Building2, y as Phone } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./imoveis._slug-DguizRGz.mjs";
import { n as Header, r as PropertyCard, t as Footer } from "./PropertyCard-Vhw8rX1s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/imoveis._slug-CdN9gwxS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Breadcrumb = import_react.forwardRef(({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
	ref,
	"aria-label": "breadcrumb",
	...props
}));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
	ref,
	className: cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className),
	...props
}));
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
	ref,
	className: cn("inline-flex items-center gap-1.5", className),
	...props
}));
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = import_react.forwardRef(({ asChild, className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "a", {
		ref,
		className: cn("transition-colors hover:text-foreground", className),
		...props
	});
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	ref,
	role: "link",
	"aria-disabled": "true",
	"aria-current": "page",
	className: cn("font-normal text-foreground", className),
	...props
}));
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({ children, className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
	role: "presentation",
	"aria-hidden": "true",
	className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
	...props,
	children: children ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
});
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
	role: "presentation",
	"aria-hidden": "true",
	className: cn("flex h-9 w-9 items-center justify-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "sr-only",
		children: "More"
	})]
});
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
var GOOGLE_MAPS_API_KEY = "AIzaSyAxOoTEuUxUbYyeo6uUdszybb60ZOR1KbM";
function PropertyMap({ address }) {
	const src = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(address)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
		title: `Mapa — ${address}`,
		src,
		className: "aspect-[16/10] w-full rounded-md border-0",
		allowFullScreen: true,
		loading: "lazy",
		referrerPolicy: "no-referrer-when-downgrade"
	});
}
var FEATURE_ICONS = {
	pool: Waves,
	gourmet: ChefHat,
	security: Shield,
	ac: Wind,
	gym: Dumbbell,
	garden: TreePine,
	wifi: Wifi,
	parking: Car,
	elevator: Building2,
	balcony: Maximize
};
function PropertyGallery({ property }) {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const images = property.gallery;
	const prev = () => setActiveIndex((i) => i === 0 ? images.length - 1 : i - 1);
	const next = () => setActiveIndex((i) => i === images.length - 1 ? 0 : i + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-lg",
			children: [
				property.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-4 top-4 z-10 rounded bg-gold px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-primary-foreground",
					children: property.badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-4 top-4 z-10 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-colors hover:bg-background",
						"aria-label": "Compartilhar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-colors hover:bg-background",
						"aria-label": "Favoritar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images[activeIndex],
					alt: `${property.title} — foto ${activeIndex + 1}`,
					className: "aspect-[16/9] w-full object-cover md:aspect-[2/1]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: prev,
					className: "absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-colors hover:bg-background",
					"aria-label": "Foto anterior",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: next,
					className: "absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-colors hover:bg-background",
					"aria-label": "Próxima foto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-md bg-background/95 px-4 py-2 text-xs font-medium text-foreground shadow-md transition-colors hover:bg-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { className: "h-4 w-4 text-gold" }), "Ver todas as fotos"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-6 gap-2",
			children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setActiveIndex(i),
				className: `overflow-hidden rounded-md border-2 transition-colors ${i === activeIndex ? "border-gold" : "border-transparent opacity-80 hover:opacity-100"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "",
					className: "aspect-[4/3] w-full object-cover"
				})
			}, i))
		})]
	});
}
function ContactSidebar({ property }) {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	async function handleSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		setSubmitting(true);
		try {
			const result = await submitInquiry({
				propertySlug: property.slug,
				name: String(data.get("nome") ?? ""),
				phone: String(data.get("telefone") ?? ""),
				email: String(data.get("email") ?? ""),
				message: String(data.get("mensagem") ?? "") || void 0
			});
			toast.success(result.message);
			form.reset();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Não foi possível enviar a mensagem.");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border/70 bg-card p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg text-foreground",
					children: "Tenho interesse neste imóvel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-5 space-y-4",
					onSubmit: handleSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "nome",
								children: "Nome completo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "nome",
								name: "nome",
								placeholder: "Seu nome",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "telefone",
								children: "Telefone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "telefone",
									name: "telefone",
									placeholder: "(11) 99999-9999",
									className: "pr-10",
									required: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "E-mail"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								placeholder: "seu@email.com",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "mensagem",
								children: "Mensagem (opcional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "mensagem",
								name: "mensagem",
								placeholder: `Olá, tenho interesse no imóvel ${property.title}.`,
								rows: 3
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: submitting,
							className: "w-full bg-gold text-primary-foreground hover:bg-gold-dark",
							children: submitting ? "Enviando..." : "Enviar mensagem"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border/70 bg-card p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg text-foreground",
					children: "Fale com um consultor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-3 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+551140028922",
						className: "flex items-center gap-3 transition-colors hover:text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 text-gold" }), "(11) 4002-8922"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:contato@lotusimoveis.com.br",
						className: "flex items-center gap-3 transition-colors hover:text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 text-gold" }), "contato@lotusimoveis.com.br"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border/70 bg-card p-6 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg text-foreground",
						children: "Localização"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-hidden rounded-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyMap, { address: property.address })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 flex items-start gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), property.address]
					})
				]
			})
		]
	});
}
function PropertyDetail({ property, similar }) {
	const stats = [
		{
			icon: BedDouble,
			label: `${property.beds} Quartos`
		},
		{
			icon: Bath,
			label: `${property.baths} Banheiros`
		},
		{
			icon: Car,
			label: `${property.parking} Vagas`
		},
		{
			icon: Maximize,
			label: `${property.area}m² Área construída`
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-6 md:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, {
					className: "mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BreadcrumbList, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: "Home"
							})
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "imoveis",
								children: "Imóveis"
							})
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbPage, { children: property.title }) })
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1fr_340px] lg:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyGallery, { property }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-3xl text-foreground md:text-4xl",
									children: property.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 flex items-center gap-2 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }), property.location]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-3xl font-semibold text-gold md:text-4xl",
									children: property.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex flex-wrap gap-6 border-y border-border/70 py-5",
									children: stats.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-5 w-5 text-gold",
											strokeWidth: 1.5
										}), label]
									}, label))
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-foreground",
								children: "Sobre o imóvel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base",
								children: property.description.map((paragraph, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, i))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-foreground",
								children: "Diferenciais do imóvel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4",
								children: property.features.map((feature) => {
									const Icon = FEATURE_ICONS[feature.icon];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center gap-2 rounded-lg border border-border/70 bg-cream/50 px-4 py-5 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-6 w-6 text-gold",
											strokeWidth: 1.5
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-foreground",
											children: feature.label
										})]
									}, feature.label);
								})
							})] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSidebar, { property })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-16 border-t border-border/70 pt-12 md:mt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-foreground",
							children: "Imóveis semelhantes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							hash: "imoveis",
							className: "inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-dark",
							children: ["Ver todos", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7",
						children: similar.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property: p }, p.slug))
					})]
				})
			]
		})
	});
}
function PropertyDetailPage() {
	const { property, similar } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background font-sans text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyDetail, {
				property,
				similar
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { PropertyDetailPage as component };
