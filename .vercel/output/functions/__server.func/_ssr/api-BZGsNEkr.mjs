//#region node_modules/.nitro/vite/services/ssr/assets/api-BZGsNEkr.js
function getApiBase() {
	return "https://lotus-sit-dev-4.onrender.com";
}
async function apiFetch(path, init) {
	const url = `${getApiBase()}${path}`;
	const response = await fetch(url, {
		...init,
		headers: {
			"Content-Type": "application/json",
			...init?.headers
		}
	});
	if (!response.ok) {
		const body = await response.json().catch(() => ({}));
		const message = typeof body === "object" && body !== null && "error" in body ? String(body.error) : `Request failed (${response.status})`;
		throw new Error(message);
	}
	return response.json();
}
function toQuery(filters) {
	if (!filters) return "";
	const params = new URLSearchParams();
	if (filters.q) params.set("q", filters.q);
	if (filters.badge) params.set("badge", filters.badge);
	if (filters.location) params.set("location", filters.location);
	if (filters.minBeds !== void 0) params.set("minBeds", String(filters.minBeds));
	if (filters.minPrice !== void 0) params.set("minPrice", String(filters.minPrice));
	if (filters.maxPrice !== void 0) params.set("maxPrice", String(filters.maxPrice));
	if (filters.limit !== void 0) params.set("limit", String(filters.limit));
	if (filters.sort) params.set("sort", filters.sort);
	const qs = params.toString();
	return qs ? `?${qs}` : "";
}
async function fetchProperties(filters) {
	return (await apiFetch(`/api/properties${toQuery(filters)}`)).data;
}
async function fetchPropertyBySlug(slug) {
	try {
		return (await apiFetch(`/api/properties/${slug}`)).data;
	} catch (err) {
		if (err instanceof Error && err.message === "Property not found") return void 0;
		throw err;
	}
}
async function fetchSimilarProperties(slug, limit = 3) {
	return (await apiFetch(`/api/properties/${slug}/similar?limit=${limit}`)).data;
}
async function submitInquiry(input) {
	return (await apiFetch("/api/inquiries", {
		method: "POST",
		body: JSON.stringify(input)
	})).data;
}
async function fetchInquiries(limit) {
	return (await apiFetch(`/api/inquiries${limit !== void 0 ? `?limit=${limit}` : ""}`)).data;
}
async function deleteInquiry(id) {
	await apiFetch(`/api/inquiries/${id}`, { method: "DELETE" });
}
async function fetchNotificationCount() {
	return (await apiFetch("/api/notifications/count")).data.count;
}
async function fetchUnreadInquiries() {
	return (await apiFetch("/api/notifications/unread")).data;
}
async function postNotification(input) {
	await apiFetch("/api/notifications", {
		method: "POST",
		body: JSON.stringify(input)
	});
}
async function markNotificationsRead(ids) {
	await apiFetch("/api/notifications/mark-read", {
		method: "POST",
		body: JSON.stringify(ids ? { ids } : {})
	});
}
async function submitPropertyForm(path, method, input) {
	const base = getApiBase();
	const formData = new FormData();
	formData.append("title", input.title);
	formData.append("beds", String(input.beds));
	formData.append("baths", String(input.baths));
	formData.append("parking", String(input.parking));
	formData.append("area", String(input.area));
	formData.append("description", input.description);
	formData.append("location", input.location);
	if (input.address) formData.append("address", input.address);
	formData.append("price", input.price);
	if (input.badge) formData.append("badge", input.badge);
	if ("existingCoverUrl" in input && input.existingCoverUrl) formData.append("existingCoverUrl", input.existingCoverUrl);
	if ("existingGalleryUrls" in input && input.existingGalleryUrls.length > 0) formData.append("existingGallery", JSON.stringify(input.existingGalleryUrls));
	if (input.coverImage) formData.append("coverImage", input.coverImage);
	for (const file of input.gallery) formData.append("gallery", file);
	const response = await fetch(`${base}${path}`, {
		method,
		body: formData
	});
	if (!response.ok) {
		const body = await response.json().catch(() => ({}));
		const message = typeof body === "object" && body !== null && "error" in body ? String(body.error) : `Request failed (${response.status})`;
		throw new Error(message);
	}
	return (await response.json()).data;
}
async function createProperty(input) {
	return submitPropertyForm("/api/properties", "POST", input);
}
async function updateProperty(input) {
	return submitPropertyForm(`/api/properties/${input.slug}`, "PUT", input);
}
async function deleteProperty(slug) {
	await apiFetch(`/api/properties/${slug}`, { method: "DELETE" });
}
//#endregion
export { fetchNotificationCount as a, fetchSimilarProperties as c, postNotification as d, submitInquiry as f, fetchInquiries as i, fetchUnreadInquiries as l, deleteInquiry as n, fetchProperties as o, updateProperty as p, deleteProperty as r, fetchPropertyBySlug as s, createProperty as t, markNotificationsRead as u };
