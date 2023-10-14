import type { Article } from "@entities/order";

export const defaultArticle: Article = {
  name: "",
  link: "",
  count: 0,
  price: 0,
  deliveryPrice: 0,
  isUsed: false,
  description: undefined,
  currency: "zł",
};
