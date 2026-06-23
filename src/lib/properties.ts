export type {
  Property,
  PropertyBadge,
  PropertyFeature,
  PropertyFilters,
  PropertySort,
  InquiryInput,
  Inquiry,
  ReservationNotification,
  CreatePropertyFormInput,
  UpdatePropertyFormInput,
} from "./api";

export {
  fetchProperties,
  fetchRecentProperties,
  fetchPropertyBySlug,
  fetchSimilarProperties,
  fetchInquiries,
  submitInquiry,
  deleteInquiry,
  fetchNotificationCount,
  fetchUnreadInquiries,
  postNotification,
  markNotificationsRead,
  createProperty,
  updateProperty,
  deleteProperty,
} from "./api";
