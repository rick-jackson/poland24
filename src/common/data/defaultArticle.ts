import type { Article } from "@entities/order";

export const defaultArticle: Article = {
  articleName: "",
  articleLink: "",
  articleCount: undefined,
  articlePrice: undefined,
  articleDeliveryPrice: undefined,
  isUsedArticle: false,
  articleDescription: undefined,
};
