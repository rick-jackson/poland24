import type User from "@entities/user";

export const defaultUser = (data: User) => {
  return {
    ...data,
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    email: data.email || "",
    phone: data.phone || null,
    city: data.city || "",
    post: data.post || "",
    viber: data.viber || "",
    telegram: data.telegram || "",
  };
};
