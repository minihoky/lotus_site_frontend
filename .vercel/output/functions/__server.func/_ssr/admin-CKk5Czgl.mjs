import { i as __toESM } from "../_runtime.mjs";
import { a as fetchNotificationCount, d as postNotification, l as fetchUnreadInquiries, n as deleteInquiry, p as updateProperty, r as deleteProperty, t as createProperty, u as markNotificationsRead } from "./api-B-dNQuz5.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as require_jsx_runtime, a as Overlay2, c as Title2, d as DialogContent$1, f as DialogDescription$1, h as DialogTitle$1, i as Description2, l as Dialog$1, m as DialogPortal$1, n as Cancel, o as Portal2, p as DialogOverlay$1, r as Content2, s as Root2, t as Action, u as DialogClose } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Route } from "./admin-Bv1uL3mo.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as cn, n as Input, r as buttonVariants, t as Button } from "./input-BTXCllkk.mjs";
import { n as Textarea, t as Label } from "./textarea-DUswk0VF.mjs";
import { E as MapPin, G as Circle, J as ChevronRight, O as LoaderCircle, P as ImagePlus, Q as Check, T as Maximize, U as DollarSign, V as EllipsisVertical, X as ChevronDown, Y as ChevronLeft, _ as Plus, a as Users, b as Pencil, et as CalendarDays, it as Bath, l as Trash2, nt as Bell, o as Upload, q as ChevronUp, rt as BedDouble, s as TrendingUp, t as X, tt as Building2, u as Star } from "../_libs/lucide-react.mjs";
import { a as Label2, c as Root2$1, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2$1, o as Portal2$1, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { h as Skeleton, m as SidebarTrigger } from "./sidebar-W6Qbug9h.mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/radix-ui__react-avatar.mjs";
import { a as XAxis, c as Bar, d as ResponsiveContainer, f as Tooltip, i as YAxis, l as Pie, n as PieChart, o as Area, p as Legend, r as BarChart, s as CartesianGrid, t as AreaChart, u as Cell } from "../_libs/recharts+[...].mjs";
import { d as formatDistanceToNow, n as subMinutes, t as ptBR } from "../_libs/date-fns.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CKk5Czgl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function formatPriceForInput(value) {
	return value.toLocaleString("pt-BR");
}
function descriptionToText(description) {
	return description.join("\n\n");
}
function isBlobUrl(url) {
	return url.startsWith("blob:");
}
function RequiredLabel({ htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
		htmlFor,
		className: "text-sm font-medium text-foreground",
		children: [
			children,
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-destructive",
				"aria-hidden": "true",
				children: "*"
			})
		]
	});
}
function SectionHeading({ number, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
		className: "text-base font-semibold text-foreground",
		children: [
			number,
			". ",
			title
		]
	});
}
function ImageUploadZone({ id, label, hint, preview, onSelect, onRemove, multiple = false }) {
	const inputRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				htmlFor: id,
				className: "text-sm font-medium text-foreground",
				children: [
					label,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-destructive",
						"aria-hidden": "true",
						children: "*"
					})
				]
			}),
			preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-lg border border-border/70",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: preview,
					alt: "",
					className: "aspect-video w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "secondary",
					size: "icon",
					className: "absolute right-2 top-2 h-8 w-8 rounded-full bg-background/90 shadow-sm",
					onClick: onRemove,
					"aria-label": "Remover imagem",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => inputRef.current?.click(),
				className: "flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border/70 bg-muted/30 px-6 py-10 text-center transition-colors hover:border-gold/50 hover:bg-gold-soft/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-10 w-10 items-center justify-center rounded-full bg-gold-soft text-gold-dark",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium text-foreground",
						children: "Clique para enviar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: hint
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				id,
				type: "file",
				accept: "image/*",
				multiple,
				className: "sr-only",
				onChange: (event) => {
					const files = event.target.files;
					if (files?.length) onSelect(files);
					event.target.value = "";
				}
			})
		]
	});
}
function GalleryUploadZone({ id, label, items, onSelect, onRemove }) {
	const inputRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				htmlFor: id,
				className: "text-sm font-medium text-foreground",
				children: [
					label,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-destructive",
						"aria-hidden": "true",
						children: "*"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-lg border border-border/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.preview,
						alt: "",
						className: "aspect-square w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						size: "icon",
						className: "absolute right-1.5 top-1.5 h-7 w-7 rounded-full bg-background/90 shadow-sm",
						onClick: () => onRemove(index),
						"aria-label": "Remover imagem",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
					})]
				}, item.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => inputRef.current?.click(),
					className: "flex aspect-square flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-border/70 bg-muted/30 px-3 text-center transition-colors hover:border-gold/50 hover:bg-gold-soft/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "h-5 w-5 text-gold-dark" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-foreground",
						children: "Adicionar"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "PNG, JPG ou WEBP. Você pode selecionar várias imagens de uma vez."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				id,
				type: "file",
				accept: "image/*",
				multiple: true,
				className: "sr-only",
				onChange: (event) => {
					const files = event.target.files;
					if (files?.length) onSelect(files);
					event.target.value = "";
				}
			})
		]
	});
}
function AddPropertyModal({ open, onOpenChange, property }) {
	const router = useRouter();
	const formRef = (0, import_react.useRef)(null);
	const isEdit = Boolean(property);
	const [coverFile, setCoverFile] = (0, import_react.useState)(null);
	const [coverPreview, setCoverPreview] = (0, import_react.useState)(null);
	const [galleryItems, setGalleryItems] = (0, import_react.useState)([]);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	function resetForm() {
		if (coverPreview && isBlobUrl(coverPreview)) URL.revokeObjectURL(coverPreview);
		galleryItems.forEach((item) => {
			if (isBlobUrl(item.preview)) URL.revokeObjectURL(item.preview);
		});
		setCoverFile(null);
		setCoverPreview(null);
		setGalleryItems([]);
		formRef.current?.reset();
	}
	function loadPropertyData(nextProperty) {
		setCoverFile(null);
		setCoverPreview(nextProperty.image);
		setGalleryItems(nextProperty.gallery.map((url) => ({
			key: url,
			preview: url
		})));
	}
	(0, import_react.useEffect)(() => {
		if (!open) return;
		if (property) loadPropertyData(property);
		else resetForm();
	}, [open, property?.slug]);
	function handleOpenChange(nextOpen) {
		if (!nextOpen) resetForm();
		onOpenChange(nextOpen);
	}
	function handleCoverSelect(files) {
		const file = files[0];
		if (!file) return;
		if (coverPreview && isBlobUrl(coverPreview)) URL.revokeObjectURL(coverPreview);
		setCoverFile(file);
		setCoverPreview(URL.createObjectURL(file));
	}
	function handleGallerySelect(files) {
		const newItems = Array.from(files).map((file) => ({
			key: crypto.randomUUID(),
			preview: URL.createObjectURL(file),
			file
		}));
		setGalleryItems((current) => [...current, ...newItems]);
	}
	function handleGalleryRemove(index) {
		setGalleryItems((current) => {
			const next = [...current];
			const [removed] = next.splice(index, 1);
			if (removed && isBlobUrl(removed.preview)) URL.revokeObjectURL(removed.preview);
			return next;
		});
	}
	async function handleSubmit(event) {
		event.preventDefault();
		if (!Boolean(coverFile || coverPreview && !isBlobUrl(coverPreview))) {
			toast.error("Selecione uma imagem de capa.");
			return;
		}
		if (galleryItems.length === 0) {
			toast.error("Adicione pelo menos uma imagem na galeria.");
			return;
		}
		if (!isEdit && (!coverFile || galleryItems.some((item) => !item.file))) {
			toast.error("Envie as imagens do imóvel.");
			return;
		}
		const formData = new FormData(event.currentTarget);
		const title = String(formData.get("title") ?? "").trim();
		const location = String(formData.get("location") ?? "").trim();
		const description = String(formData.get("description") ?? "").trim();
		const price = String(formData.get("price") ?? "").trim();
		const address = String(formData.get("address") ?? "").trim();
		const beds = Number(formData.get("beds"));
		const baths = Number(formData.get("baths"));
		const parking = Number(formData.get("parking"));
		const area = Number(formData.get("area"));
		const existingGalleryUrls = galleryItems.filter((item) => !item.file).map((item) => item.preview);
		const newGalleryFiles = galleryItems.filter((item) => item.file).map((item) => item.file);
		const existingCoverUrl = !coverFile && coverPreview && !isBlobUrl(coverPreview) ? coverPreview : void 0;
		setSubmitting(true);
		try {
			if (isEdit && property) {
				const updated = await updateProperty({
					slug: property.slug,
					title,
					beds,
					baths,
					parking,
					area,
					description,
					location,
					address: address || void 0,
					price,
					badge: property.badge,
					coverImage: coverFile ?? void 0,
					existingCoverUrl,
					gallery: newGalleryFiles,
					existingGalleryUrls
				});
				toast.success(`Imóvel "${updated.title}" atualizado com sucesso!`);
			} else {
				const created = await createProperty({
					title,
					beds,
					baths,
					parking,
					area,
					description,
					location,
					address: address || void 0,
					price,
					coverImage: coverFile,
					gallery: newGalleryFiles
				});
				toast.success(`Imóvel "${created.title}" criado com sucesso!`);
			}
			await router.invalidate();
			handleOpenChange(false);
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Não foi possível salvar o imóvel.");
		} finally {
			setSubmitting(false);
		}
	}
	const formKey = property?.slug ?? "new";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: cn("max-h-[90vh] max-w-[680px] gap-0 overflow-y-auto rounded-2xl border-border/60 p-8 shadow-xl sm:p-10", "duration-300 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", "data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "space-y-1.5 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-xl font-semibold",
					children: isEdit ? "Editar imóvel" : "Adicionar novo imóvel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: isEdit ? "Atualize as informações do imóvel." : "Preencha as informações do imóvel." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				ref: formRef,
				onSubmit: handleSubmit,
				className: "mt-8 space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							number: 1,
							title: "Título do imóvel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequiredLabel, {
								htmlFor: "property-title",
								children: "Título do imóvel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "property-title",
								name: "title",
								defaultValue: property?.title ?? "",
								placeholder: "Ex: Apartamento Luxo com Vista Mar",
								className: "h-10 rounded-lg border-border/70",
								required: true,
								disabled: submitting
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							number: 2,
							title: "Informações do imóvel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequiredLabel, {
										htmlFor: "property-beds",
										children: "Número de Quartos"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "property-beds",
										name: "beds",
										type: "number",
										min: 0,
										defaultValue: property?.beds ?? "",
										placeholder: "Ex: 3",
										className: "h-10 rounded-lg border-border/70",
										required: true,
										disabled: submitting
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequiredLabel, {
										htmlFor: "property-baths",
										children: "Número de Banheiros"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "property-baths",
										name: "baths",
										type: "number",
										min: 0,
										defaultValue: property?.baths ?? "",
										placeholder: "Ex: 2",
										className: "h-10 rounded-lg border-border/70",
										required: true,
										disabled: submitting
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequiredLabel, {
										htmlFor: "property-parking",
										children: "Número de Vagas"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "property-parking",
										name: "parking",
										type: "number",
										min: 0,
										defaultValue: property?.parking ?? "",
										placeholder: "Ex: 2",
										className: "h-10 rounded-lg border-border/70",
										required: true,
										disabled: submitting
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequiredLabel, {
										htmlFor: "property-area",
										children: "Área construída (m²)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "property-area",
											name: "area",
											type: "number",
											min: 1,
											defaultValue: property?.area ?? "",
											placeholder: "Ex: 120",
											className: "h-10 rounded-r-none rounded-l-lg border-border/70",
											required: true,
											disabled: submitting
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-10 items-center rounded-r-lg border border-l-0 border-border/70 bg-muted px-3 text-sm text-muted-foreground",
											children: "m²"
										})]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							number: 3,
							title: "Descrição do imóvel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequiredLabel, {
								htmlFor: "property-description",
								children: "Descrição do imóvel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "property-description",
								name: "description",
								defaultValue: property ? descriptionToText(property.description) : "",
								placeholder: "Ex: Apartamento amplo com vista para o mar, acabamento de alto padrão e área de lazer completa...",
								className: "min-h-[120px] resize-y rounded-lg border-border/70",
								required: true,
								disabled: submitting
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							number: 4,
							title: "Imagem de capa"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUploadZone, {
							id: "property-cover",
							label: "Imagem de capa",
							hint: "PNG, JPG ou WEBP até 5 MB",
							preview: coverPreview,
							onSelect: handleCoverSelect,
							onRemove: () => {
								if (coverPreview && isBlobUrl(coverPreview)) URL.revokeObjectURL(coverPreview);
								setCoverFile(null);
								setCoverPreview(null);
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							number: 5,
							title: "Galeria de imagens"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryUploadZone, {
							id: "property-gallery",
							label: "Imagens do imóvel",
							items: galleryItems,
							onSelect: handleGallerySelect,
							onRemove: handleGalleryRemove
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							number: 6,
							title: "Localização"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequiredLabel, {
									htmlFor: "property-location",
									children: "Localização"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "property-location",
										name: "location",
										defaultValue: property?.location ?? "",
										placeholder: "Ex: Vila Mariana, São Paulo - SP",
										className: "h-10 rounded-lg border-border/70 pl-9",
										required: true,
										disabled: submitting
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "property-address",
										className: "text-sm font-medium text-foreground",
										children: "Endereço completo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "property-address",
										name: "address",
										defaultValue: property?.address ?? "",
										placeholder: "Ex: Rua Domingos de Morais, 2564 — Vila Mariana, São Paulo - SP",
										className: "h-10 rounded-lg border-border/70",
										disabled: submitting
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Se não informado, a localização será usada como endereço."
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							number: 7,
							title: "Preço"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequiredLabel, {
								htmlFor: "property-price",
								children: "Preço do imóvel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-10 items-center rounded-l-lg border border-r-0 border-border/70 bg-muted px-3 text-sm text-muted-foreground",
									children: "R$"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "property-price",
									name: "price",
									defaultValue: property ? formatPriceForInput(property.priceValue) : "",
									placeholder: "Ex: 1.250.000,00",
									className: "h-10 rounded-l-none rounded-r-lg border-border/70",
									required: true,
									disabled: submitting
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "gap-2 pt-2 sm:justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							className: "h-10 rounded-lg border-border/70 px-6",
							onClick: () => handleOpenChange(false),
							disabled: submitting,
							children: "Cancelar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "h-10 rounded-lg bg-gold px-6 text-primary-foreground hover:bg-gold-dark",
							disabled: submitting,
							children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Salvando..."] }) : isEdit ? "Salvar alterações" : "Salvar imóvel"
						})]
					})
				]
			}, formKey)]
		})
	});
}
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
var DropdownMenu = Root2$1;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2$1.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function AdminHeader() {
	const [addPropertyOpen, setAddPropertyOpen] = (0, import_react.useState)(false);
	const [dispatching, setDispatching] = (0, import_react.useState)(false);
	const queryClient = useQueryClient();
	const router = useRouter();
	const { data: notificationCount = 0 } = useQuery({
		queryKey: ["notification-count"],
		queryFn: fetchNotificationCount,
		refetchInterval: 15e3
	});
	async function handleNotificationClick() {
		if (dispatching) return;
		setDispatching(true);
		try {
			const unread = await fetchUnreadInquiries();
			if (unread.length === 0) {
				toast.info("Nenhuma reserva nova no momento.");
				return;
			}
			await Promise.all(unread.map((inquiry) => postNotification({
				name: inquiry.name,
				date: inquiry.createdAt
			})));
			await markNotificationsRead(unread.map((inquiry) => inquiry.id));
			await Promise.all([queryClient.invalidateQueries({ queryKey: ["notification-count"] }), router.invalidate()]);
			toast.success(unread.length === 1 ? `1 notificação de reserva enviada.` : `${unread.length} notificações de reserva enviadas.`);
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Não foi possível processar as notificações.");
		} finally {
			setDispatching(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-10 border-b border-border/60 bg-cream/80 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 px-4 py-4 lg:px-6 lg:py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTrigger, { className: "mt-0.5 lg:hidden" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl font-semibold text-foreground lg:text-2xl",
						children: "Bem-vindo(a), Admin! 👋"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm text-muted-foreground",
						children: "Veja o que está acontecendo na Lótus Imóveis hoje."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-2 sm:gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "icon",
						className: "relative",
						onClick: handleNotificationClick,
						disabled: dispatching,
						"aria-label": notificationCount > 0 ? `${notificationCount} notificações de reserva` : "Notificações de reserva",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" }), notificationCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full", "border-2 border-blue-500 bg-blue-500 px-1 text-[10px] font-semibold leading-none text-white"),
							children: notificationCount > 99 ? "99+" : notificationCount
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex items-center gap-2 rounded-lg border border-border/60 bg-background px-2 py-1.5 transition-colors hover:bg-muted/50 sm:gap-3 sm:px-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
									className: "h-8 w-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
										src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
										alt: "Admin"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: "AD" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden text-left sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium leading-none",
										children: "Admin"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-xs text-muted-foreground",
										children: "Administrador"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "hidden h-4 w-4 text-muted-foreground sm:block" })
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						className: "w-48",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: "Meu perfil" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: "Configurações" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: "Sair" })
						]
					})] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "h-10 rounded-md bg-gold px-5 text-primary-foreground hover:bg-gold-dark",
					onClick: () => setAddPropertyOpen(true),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }),
						"Adicionar imóvel",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-70" })
					]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddPropertyModal, {
			open: addPropertyOpen,
			onOpenChange: setAddPropertyOpen
		})]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var AlertDialog = Root2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props
})] }));
AlertDialogContent.displayName = Content2.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}));
AlertDialogCancel.displayName = Cancel.displayName;
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var THEMES = {
	light: "",
	dark: ".dark"
};
var ChartContext = import_react.createContext(null);
function useChart() {
	const context = import_react.useContext(ChartContext);
	if (!context) throw new Error("useChart must be used within a <ChartContainer />");
	return context;
}
var ChartContainer = import_react.forwardRef(({ id, className, children, config, ...props }, ref) => {
	const uniqueId = import_react.useId();
	const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContext.Provider, {
		value: { config },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-chart": chartId,
			ref,
			className: cn("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className),
			...props,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartStyle, {
				id: chartId,
				config
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children })]
		})
	});
});
ChartContainer.displayName = "Chart";
var ChartStyle = ({ id, config }) => {
	const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);
	if (!colorConfig.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: Object.entries(THEMES).map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
		const color = itemConfig.theme?.[theme] || itemConfig.color;
		return color ? `  --color-${key}: ${color};` : null;
	}).join("\n")}
}
`).join("\n") } });
};
var ChartTooltip = Tooltip;
var ChartTooltipContent = import_react.forwardRef(({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }, ref) => {
	const { config } = useChart();
	const tooltipLabel = import_react.useMemo(() => {
		if (hideLabel || !payload?.length) return null;
		const [item] = payload;
		const itemConfig = getPayloadConfigFromPayload(config, item, `${labelKey || item?.dataKey || item?.name || "value"}`);
		const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
		if (labelFormatter) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("font-medium", labelClassName),
			children: labelFormatter(value, payload)
		});
		if (!value) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("font-medium", labelClassName),
			children: value
		});
	}, [
		label,
		labelFormatter,
		payload,
		hideLabel,
		labelClassName,
		config,
		labelKey
	]);
	if (!active || !payload?.length) return null;
	const nestLabel = payload.length === 1 && indicator !== "dot";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: cn("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className),
		children: [!nestLabel ? tooltipLabel : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-1.5",
			children: payload.filter((item) => item.type !== "none").map((item, index) => {
				const itemConfig = getPayloadConfigFromPayload(config, item, `${nameKey || item.name || item.dataKey || "value"}`);
				const indicatorColor = color || item.payload.fill || item.color;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center"),
					children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [itemConfig?.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
							"h-2.5 w-2.5": indicator === "dot",
							"w-1": indicator === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
							"my-0.5": nestLabel && indicator === "dashed"
						}),
						style: {
							"--color-bg": indicatorColor,
							"--color-border": indicatorColor
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [nestLabel ? tooltipLabel : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: itemConfig?.label || item.name
							})]
						}), item.value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono font-medium tabular-nums text-foreground",
							children: item.value.toLocaleString()
						})]
					})] })
				}, item.dataKey);
			})
		})]
	});
});
ChartTooltipContent.displayName = "ChartTooltip";
var ChartLegend = Legend;
var ChartLegendContent = import_react.forwardRef(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
	const { config } = useChart();
	if (!payload?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className),
		children: payload.filter((item) => item.type !== "none").map((item) => {
			const itemConfig = getPayloadConfigFromPayload(config, item, `${nameKey || item.dataKey || "value"}`);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
				children: [itemConfig?.icon && !hideIcon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(itemConfig.icon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 w-2 shrink-0 rounded-[2px]",
					style: { backgroundColor: item.color }
				}), itemConfig?.label]
			}, item.value);
		})
	});
});
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config, payload, key) {
	if (typeof payload !== "object" || payload === null) return;
	const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
	let configLabelKey = key;
	if (key in payload && typeof payload[key] === "string") configLabelKey = payload[key];
	else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") configLabelKey = payloadPayload[key];
	return configLabelKey in config ? config[configLabelKey] : config[key];
}
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function parseStoredDate(value) {
	const trimmed = value.trim();
	if (!trimmed) return null;
	if (trimmed.includes("T")) {
		const date = new Date(trimmed);
		return Number.isNaN(date.getTime()) ? null : date;
	}
	const sqliteMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?/);
	if (sqliteMatch) {
		const [, year, month, day, hour, minute, second] = sqliteMatch;
		const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second ?? 0)));
		return Number.isNaN(date.getTime()) ? null : date;
	}
	const date = new Date(trimmed);
	return Number.isNaN(date.getTime()) ? null : date;
}
function isInCurrentMonth$1(createdAt, now = /* @__PURE__ */ new Date()) {
	const date = parseStoredDate(createdAt);
	if (!date) return false;
	return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
}
function formatRelativeTime(createdAt, now = /* @__PURE__ */ new Date()) {
	const date = parseStoredDate(createdAt);
	if (!date) return createdAt;
	return formatDistanceToNow(date, {
		addSuffix: true,
		locale: ptBR,
		now
	});
}
function formatRelativeTimeFromDate(date, now = /* @__PURE__ */ new Date()) {
	return formatDistanceToNow(date, {
		addSuffix: true,
		locale: ptBR,
		now
	});
}
function RelativeTime({ date, className }) {
	const [label, setLabel] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const update = () => {
			setLabel(formatRelativeTime(date, /* @__PURE__ */ new Date()));
		};
		update();
		const intervalId = window.setInterval(update, 6e4);
		return () => window.clearInterval(intervalId);
	}, [date]);
	if (!label) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		"aria-hidden": "true"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children: label
	});
}
function ActivityRelativeTime({ minutesAgo }) {
	const [label, setLabel] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const update = () => {
			const now = /* @__PURE__ */ new Date();
			setLabel(formatRelativeTimeFromDate(subMinutes(now, minutesAgo), now));
		};
		update();
		const intervalId = window.setInterval(update, 6e4);
		return () => window.clearInterval(intervalId);
	}, [minutesAgo]);
	if (!label) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "shrink-0 text-xs text-muted-foreground",
		"aria-hidden": "true"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "shrink-0 text-xs text-muted-foreground",
		children: label
	});
}
function Calendar({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": `${day.date.getFullYear()}-${String(day.date.getMonth() + 1).padStart(2, "0")}-${String(day.date.getDate()).padStart(2, "0")}`,
		"data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
		"data-range-start": modifiers.range_start,
		"data-range-end": modifiers.range_end,
		"data-range-middle": modifiers.range_middle,
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
function useHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setHydrated(true);
	}, []);
	return hydrated;
}
function ReservationCalendar() {
	const hydrated = useHydrated();
	const [selectedDate, setSelectedDate] = (0, import_react.useState)(void 0);
	(0, import_react.useEffect)(() => {
		if (hydrated) setSelectedDate(/* @__PURE__ */ new Date());
	}, [hydrated]);
	if (!hydrated || !selectedDate) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
		className: "mx-auto h-[280px] w-full max-w-sm rounded-md",
		"aria-hidden": true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-3 flex justify-end",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			size: "sm",
			className: "h-7 text-xs",
			onClick: () => setSelectedDate(/* @__PURE__ */ new Date()),
			children: "Hoje"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
		mode: "single",
		month: selectedDate,
		onMonthChange: setSelectedDate,
		selected: selectedDate,
		onSelect: (date) => date && setSelectedDate(date),
		className: "mx-auto w-full rounded-md border p-3"
	})] });
}
function useSystemTime(intervalMs = 6e4) {
	const hydrated = useHydrated();
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		const update = () => setNow(/* @__PURE__ */ new Date());
		update();
		const intervalId = window.setInterval(update, intervalMs);
		return () => window.clearInterval(intervalId);
	}, [hydrated, intervalMs]);
	return now;
}
var stats = [
	{
		label: "Imóveis ativos",
		value: "42",
		change: "↑ 0% vs mês anterior",
		trend: "up"
	},
	{
		label: "Reservas confirmadas",
		value: "128",
		change: "↑ 0% vs mês anterior",
		trend: "up"
	},
	{
		label: "Receita (mês)",
		value: "R$ 96.540",
		change: "↑ 0% vs mês anterior",
		trend: "up"
	},
	{
		label: "Novos clientes",
		value: "36",
		change: "↑ 0% vs mês anterior",
		trend: "up"
	}
];
var reservationChartData = [
	{
		day: "Seg",
		confirmadas: 12,
		pendentes: 4,
		canceladas: 1
	},
	{
		day: "Ter",
		confirmadas: 15,
		pendentes: 3,
		canceladas: 0
	},
	{
		day: "Qua",
		confirmadas: 10,
		pendentes: 6,
		canceladas: 1
	},
	{
		day: "Qui",
		confirmadas: 18,
		pendentes: 5,
		canceladas: 0
	},
	{
		day: "Sex",
		confirmadas: 14,
		pendentes: 4,
		canceladas: 1
	},
	{
		day: "Sáb",
		confirmadas: 8,
		pendentes: 3,
		canceladas: 1
	},
	{
		day: "Dom",
		confirmadas: 6,
		pendentes: 3,
		canceladas: 0
	}
];
var revenueChartData = [
	{
		day: "1",
		value: 2800
	},
	{
		day: "5",
		value: 4200
	},
	{
		day: "10",
		value: 3100
	},
	{
		day: "15",
		value: 5600
	},
	{
		day: "20",
		value: 4800
	},
	{
		day: "25",
		value: 6200
	},
	{
		day: "30",
		value: 5400
	}
];
var sourceChannelsData = [
	{
		name: "Site",
		value: 45,
		fill: "var(--color-chart-1)"
	},
	{
		name: "Instagram",
		value: 25,
		fill: "var(--color-chart-2)"
	},
	{
		name: "Google",
		value: 15,
		fill: "var(--color-chart-3)"
	},
	{
		name: "Indicação",
		value: 10,
		fill: "var(--color-chart-4)"
	},
	{
		name: "Outros",
		value: 5,
		fill: "var(--color-chart-5)"
	}
];
var activities = [
	{
		id: "1",
		type: "property",
		title: "Novo imóvel cadastrado",
		description: "Apartamento Jardins foi publicado",
		minutesAgo: 120
	},
	{
		id: "2",
		type: "reservation",
		title: "Nova reserva recebida",
		description: "Maria Silva reservou Apartamento Jardins",
		minutesAgo: 180
	},
	{
		id: "3",
		type: "review",
		title: "Nova avaliação",
		description: "João Santos avaliou Casa Alto da Boa Vista",
		minutesAgo: 300,
		rating: 5
	},
	{
		id: "4",
		type: "reservation",
		title: "Reserva confirmada",
		description: "Ana Costa — Cobertura Itaim Bibi",
		minutesAgo: 480
	},
	{
		id: "5",
		type: "property",
		title: "Imóvel atualizado",
		description: "Studio Vila Olímpia — preço alterado",
		minutesAgo: 1440
	}
];
var statIcons = [
	Building2,
	CalendarDays,
	DollarSign,
	Users
];
var reservationChartConfig = {
	confirmadas: {
		label: "Confirmadas",
		color: "var(--color-chart-2)"
	},
	pendentes: {
		label: "Pendentes",
		color: "var(--color-chart-4)"
	},
	canceladas: {
		label: "Canceladas",
		color: "var(--color-chart-3)"
	}
};
var revenueChartConfig = { value: {
	label: "Receita",
	color: "var(--color-chart-1)"
} };
var sourceChartConfig = {
	Site: {
		label: "Site",
		color: "var(--color-chart-1)"
	},
	Instagram: {
		label: "Instagram",
		color: "var(--color-chart-2)"
	},
	Google: {
		label: "Google",
		color: "var(--color-chart-3)"
	},
	Indicação: {
		label: "Indicação",
		color: "var(--color-chart-4)"
	},
	Outros: {
		label: "Outros",
		color: "var(--color-chart-5)"
	}
};
function StatusBadge({ status, reservationCount }) {
	const styles = {
		Publicado: "border-emerald-200 bg-emerald-50 text-emerald-700",
		Confirmada: "border-emerald-200 bg-emerald-50 text-emerald-700",
		"Em destaque": "border-amber-200 bg-amber-50 text-amber-700",
		Pendente: "border-amber-200 bg-amber-50 text-amber-700",
		Reserva: "border-blue-200 bg-blue-50 text-blue-700",
		Rascunho: "border-border bg-muted text-muted-foreground"
	};
	const label = status === "Reserva" && reservationCount !== void 0 && reservationCount > 0 ? `Reserva ${reservationCount}` : status;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		className: cn("shrink-0 whitespace-nowrap font-normal", styles[status]),
		children: label
	});
}
function isInCurrentMonth(createdAt, now) {
	return isInCurrentMonth$1(createdAt, now);
}
function countCustomersThisMonth(inquiries, now) {
	return inquiries.filter((inquiry) => isInCurrentMonth(inquiry.createdAt, now)).length;
}
function countListingsThisMonth(properties, now) {
	return properties.filter((property) => isInCurrentMonth(property.createdAt, now)).length;
}
function countConfirmedReservationsThisMonth(inquiries, now) {
	return inquiries.filter((inquiry) => isInCurrentMonth(inquiry.createdAt, now) && inquiry.readAt !== null).length;
}
function formatMonthlyRevenue(value) {
	return `R$ ${value.toLocaleString("pt-BR")}`;
}
function StatsRow({ hydrated, monthlyListingCount, monthlyConfirmedReservations, monthlyRevenue, monthlyCustomerCount }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
		children: stats.map((stat, index) => {
			if (index === 0) return {
				...stat,
				value: String(monthlyListingCount)
			};
			if (index === 1) return {
				...stat,
				value: String(monthlyConfirmedReservations)
			};
			if (index === 2) return {
				...stat,
				value: formatMonthlyRevenue(monthlyRevenue)
			};
			if (index === 3) return {
				...stat,
				value: String(monthlyCustomerCount)
			};
			return stat;
		}).map((stat, i) => {
			const Icon = statIcons[i];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "border-border/60 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("flex h-10 w-10 items-center justify-center rounded-lg", i === 0 && "bg-blue-50 text-blue-600", i === 1 && "bg-emerald-50 text-emerald-600", i === 2 && "bg-amber-50 text-amber-600", i === 3 && "bg-violet-50 text-violet-600"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-emerald-500" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: stat.label
						}),
						hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-2xl font-semibold tracking-tight",
							children: stat.value
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-1 h-8 w-16" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-emerald-600",
							children: stat.change
						})
					]
				})
			}, stat.label);
		})
	});
}
function propertyStatus(property, reservationCount) {
	if (reservationCount > 0) return "Reserva";
	if (property.badge === "DESTAQUE") return "Em destaque";
	if (property.badge === "LANÇAMENTO") return "Publicado";
	return "Publicado";
}
function PropertyListingRow({ property, reservationCountByPropertySlug }) {
	const reservationCount = reservationCountByPropertySlug.get(property.slug) ?? 0;
	const router = useRouter();
	const [editOpen, setEditOpen] = (0, import_react.useState)(false);
	const [deleteOpen, setDeleteOpen] = (0, import_react.useState)(false);
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	async function handleDelete() {
		setDeleting(true);
		try {
			await deleteProperty(property.slug);
			toast.success(`Imóvel "${property.title}" excluído com sucesso.`);
			await router.invalidate();
			setDeleteOpen(false);
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Não foi possível excluir o imóvel.");
		} finally {
			setDeleting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "flex items-start gap-3 rounded-lg border border-border/50 p-2.5 transition-colors hover:bg-muted/30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: property.image,
					alt: property.title,
					className: "size-14 shrink-0 rounded-md object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start gap-x-2 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1 basis-[min(100%,10rem)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "break-words text-sm font-medium leading-snug",
								children: property.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 break-words text-xs leading-snug text-muted-foreground",
								children: property.location
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							status: propertyStatus(property, reservationCount),
							reservationCount: reservationCount > 0 ? reservationCount : void 0
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "shrink-0 text-sm font-semibold text-gold-dark",
							children: property.price
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex shrink-0 items-center gap-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "h-3 w-3 shrink-0" }), property.beds]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex shrink-0 items-center gap-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bath, { className: "h-3 w-3 shrink-0" }), property.baths]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex shrink-0 items-center gap-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "h-3 w-3 shrink-0" }),
										property.area,
										"m²"
									]
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "icon",
						className: "size-8 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Abrir menu do imóvel"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
					align: "end",
					className: "w-40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onClick: () => setEditOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" }), "Editar"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						className: "text-destructive focus:text-destructive",
						onClick: () => setDeleteOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), "Excluir"]
					})]
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddPropertyModal, {
			open: editOpen,
			onOpenChange: setEditOpen,
			property
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
			open: deleteOpen,
			onOpenChange: setDeleteOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Excluir imóvel?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogDescription, { children: [
				"Esta ação não pode ser desfeita. O imóvel \"",
				property.title,
				"\" será removido permanentemente."
			] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
				disabled: deleting,
				children: "Cancelar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
				className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				disabled: deleting,
				onClick: (event) => {
					event.preventDefault();
					handleDelete();
				},
				children: deleting ? "Excluindo..." : "Excluir"
			})] })] })
		})
	] });
}
function RecentPropertiesCard({ properties, reservationCountByPropertySlug }) {
	const [showAll, setShowAll] = (0, import_react.useState)(false);
	const initialVisible = 6;
	const visibleProperties = showAll ? properties : properties.slice(0, initialVisible);
	const hasMore = properties.length > initialVisible;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "border-border/60 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "flex flex-row items-center justify-between pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-base font-semibold",
				children: "Imóveis recentes"
			}), hasMore && !showAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				className: "text-gold hover:text-gold-dark",
				onClick: () => setShowAll(true),
				children: "Ver todas"
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "pt-0",
			children: properties.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-6 text-center text-sm text-muted-foreground",
				children: "Nenhum imóvel cadastrado ainda."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[min(28rem,60vh)] overflow-y-auto overflow-x-hidden overscroll-y-contain [scrollbar-gutter:stable]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3 pr-1 pb-2",
					children: visibleProperties.map((property) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyListingRow, {
						property,
						reservationCountByPropertySlug
					}, property.slug))
				})
			})
		})]
	});
}
function getInitials(name) {
	return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("");
}
function ReservationListingRow({ inquiry }) {
	const router = useRouter();
	const [deleteOpen, setDeleteOpen] = (0, import_react.useState)(false);
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	const isUnread = inquiry.readAt === null;
	async function handleDelete() {
		setDeleting(true);
		try {
			await deleteInquiry(inquiry.id);
			toast.success(`Reserva de "${inquiry.name}" excluída com sucesso.`);
			await router.invalidate();
			setDeleteOpen(false);
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Não foi possível excluir a reserva.");
		} finally {
			setDeleting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-start gap-3 rounded-lg border p-2.5 transition-colors", isUnread ? "border-border/70 bg-cream" : "border-border/50 hover:bg-muted/30"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
				className: "h-9 w-9 shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
					className: "bg-gold-soft text-xs font-medium text-gold-dark",
					children: getInitials(inquiry.name)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "break-words text-sm font-medium leading-snug",
						children: inquiry.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 break-words text-xs text-muted-foreground",
						children: inquiry.propertyTitle ?? "Imóvel não informado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 break-words text-xs text-muted-foreground",
						children: [
							inquiry.phone,
							" · ",
							inquiry.email
						]
					}),
					inquiry.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 break-words text-xs leading-snug text-foreground/80",
						children: inquiry.message
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-xs text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelativeTime, { date: inquiry.createdAt })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon",
				className: "size-8 shrink-0 text-muted-foreground hover:text-destructive",
				onClick: () => setDeleteOpen(true),
				"aria-label": "Excluir reserva",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
		open: deleteOpen,
		onOpenChange: setDeleteOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Excluir reserva?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogDescription, { children: [
			"Esta ação não pode ser desfeita. A reserva de \"",
			inquiry.name,
			"\" será removida permanentemente."
		] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
			disabled: deleting,
			children: "Cancelar"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
			className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			disabled: deleting,
			onClick: (event) => {
				event.preventDefault();
				handleDelete();
			},
			children: deleting ? "Excluindo..." : "Excluir"
		})] })] })
	})] });
}
function RecentReservationsCard({ inquiries }) {
	const [showAll, setShowAll] = (0, import_react.useState)(false);
	const initialVisible = 6;
	const visibleInquiries = showAll ? inquiries : inquiries.slice(0, initialVisible);
	const hasMore = inquiries.length > initialVisible;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "border-border/60 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "flex flex-row items-center justify-between pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-base font-semibold",
				children: "Reservas recentes"
			}), hasMore && !showAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				className: "text-gold hover:text-gold-dark",
				onClick: () => setShowAll(true),
				children: "Ver todas"
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "pt-0",
			children: inquiries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-6 text-center text-sm text-muted-foreground",
				children: "Nenhuma reserva recebida ainda."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[min(28rem,60vh)] overflow-y-auto overflow-x-hidden overscroll-y-contain [scrollbar-gutter:stable]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3 pr-1 pb-2",
					children: visibleInquiries.map((inquiry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationListingRow, { inquiry }, inquiry.id))
				})
			})
		})]
	});
}
function ChartsRow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-border/60 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex flex-row items-center justify-between pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base font-semibold",
						children: "Resumo de reservas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						defaultValue: "7d",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "h-8 w-[130px] text-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "7d",
							children: "Últimos 7 dias"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "30d",
							children: "Últimos 30 dias"
						})] })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
					config: reservationChartConfig,
					className: "aspect-[4/3] h-[200px] w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
						data: reservationChartData,
						margin: {
							top: 5,
							right: 5,
							left: -20,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "day",
								tickLine: false,
								axisLine: false,
								tickMargin: 8
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								tickLine: false,
								axisLine: false,
								tickMargin: 8
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								type: "monotone",
								dataKey: "confirmadas",
								stackId: "1",
								stroke: "var(--color-confirmadas)",
								fill: "var(--color-confirmadas)",
								fillOpacity: .4
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								type: "monotone",
								dataKey: "pendentes",
								stackId: "1",
								stroke: "var(--color-pendentes)",
								fill: "var(--color-pendentes)",
								fillOpacity: .4
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								type: "monotone",
								dataKey: "canceladas",
								stackId: "1",
								stroke: "var(--color-canceladas)",
								fill: "var(--color-canceladas)",
								fillOpacity: .4
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Confirmadas (72)" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pendentes (28)" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Canceladas (4)" })
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-border/60 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex flex-row items-center justify-between pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base font-semibold",
						children: "Receita dos últimos 30 dias"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-lg font-semibold text-foreground",
						children: [
							"R$ 96.540",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-normal text-emerald-600",
								children: "↑ 0%"
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						defaultValue: "30d",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "h-8 w-[130px] text-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "30d",
							children: "Últimos 30 dias"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "90d",
							children: "Últimos 90 dias"
						})] })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
					config: revenueChartConfig,
					className: "aspect-[4/3] h-[200px] w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: revenueChartData,
						margin: {
							top: 5,
							right: 5,
							left: -20,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "day",
								tickLine: false,
								axisLine: false,
								tickMargin: 8
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								tickLine: false,
								axisLine: false,
								tickMargin: 8
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "value",
								fill: "var(--color-value)",
								radius: [
									4,
									4,
									0,
									0
								]
							})
						]
					})
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-border/60 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
					className: "pb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-base font-semibold",
						children: "Canais de origem"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
					config: sourceChartConfig,
					className: "mx-auto aspect-square h-[200px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { hideLabel: true }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
							data: sourceChannelsData,
							dataKey: "value",
							nameKey: "name",
							innerRadius: 55,
							outerRadius: 80,
							strokeWidth: 2,
							children: sourceChannelsData.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.fill }, entry.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLegend, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLegendContent, { nameKey: "name" }) })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-xs text-muted-foreground",
					children: "Total de 128 reservas"
				})] })]
			})
		]
	});
}
function CalendarAndActivities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "border-border/60 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "flex flex-row items-center justify-between pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base font-semibold",
					children: "Calendário de reservas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						defaultValue: "month",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "h-7 w-[80px] text-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "month",
								children: "Mês"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "week",
								children: "Semana"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "day",
								children: "Dia"
							})
						] })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationCalendar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-4 rounded-sm bg-emerald-500" }), "Check-in"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-4 rounded-sm bg-gold" }), "Check-out"]
				})]
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "border-border/60 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				className: "pb-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base font-semibold",
					children: "Atividades recentes"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: activities.map((activity, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex gap-3 pl-1",
					children: [
						index < activities.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-[15px] top-8 h-[calc(100%+4px)] w-px bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full", activity.type === "property" && "bg-blue-50 text-blue-600", activity.type === "reservation" && "bg-emerald-50 text-emerald-600", activity.type === "review" && "bg-amber-50 text-amber-600"),
							children: activity.type === "review" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4" }) : activity.type === "property" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1 pb-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: activity.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityRelativeTime, { minutesAgo: activity.minutesAgo })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: activity.description
								}),
								activity.rating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 flex gap-0.5",
									children: Array.from({ length: activity.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-amber-400 text-amber-400" }, i))
								})
							]
						})
					]
				}, activity.id))
			}) })]
		})]
	});
}
function buildReservationCountByPropertySlug(inquiries) {
	const counts = /* @__PURE__ */ new Map();
	for (const inquiry of inquiries) {
		if (!inquiry.propertySlug) continue;
		counts.set(inquiry.propertySlug, (counts.get(inquiry.propertySlug) ?? 0) + 1);
	}
	return counts;
}
function DashboardContent({ recentProperties, recentInquiries }) {
	const hydrated = useHydrated();
	const now = useSystemTime();
	const reservationCountByPropertySlug = buildReservationCountByPropertySlug(recentInquiries);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsRow, {
				hydrated,
				monthlyListingCount: hydrated && now ? countListingsThisMonth(recentProperties, now) : 0,
				monthlyConfirmedReservations: hydrated && now ? countConfirmedReservationsThisMonth(recentInquiries, now) : 0,
				monthlyRevenue: 0,
				monthlyCustomerCount: hydrated && now ? countCustomersThisMonth(recentInquiries, now) : 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentPropertiesCard, {
					properties: recentProperties,
					reservationCountByPropertySlug
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentReservationsCard, { inquiries: recentInquiries })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartsRow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarAndActivities, {})
		]
	});
}
function AdminDashboard() {
	const { recentProperties, recentInquiries } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex-1 px-4 py-6 lg:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardContent, {
			recentProperties,
			recentInquiries
		})
	})] });
}
//#endregion
export { AdminDashboard as component };
