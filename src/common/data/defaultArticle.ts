import type { Article } from "@entities/order";

export const getInitialtArticle = (): Article => {
  const { pln } = JSON.parse(localStorage.getItem("rate"));

  return {
    name: "",
    link: "",
    count: 0,
    price: 0,
    deliveryPrice: 0,
    isUsed: false,
    description: undefined,
    currency: "zł",
    rate: pln,
  };
};
