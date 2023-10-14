import type Order from "@entities/order";
import { defaultArticle } from "./defaultArticle";

export const defaultOrder = (orderData?: any): Partial<Order> => {
  return {
    isEmail: orderData?.isEmail || false,
    isViber: orderData?.isViber || false,
    isTelegram: orderData?.isTelegram || false,
    fullName: orderData?.fullName || "",
    phone: orderData?.phone || "380",
    email: orderData?.email || "",
    post: orderData?.post || "",
    reservedPost: orderData?.reservedPost || "",
    comment: orderData?.comment || "",
    isCall: orderData?.isCall || false,
    isLicense: orderData?.isLicense || true,
    articles: orderData?.articles || [defaultArticle],
  };
};
