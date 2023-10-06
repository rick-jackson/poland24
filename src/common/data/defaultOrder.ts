import { defaultArticle } from "./defaultArticle";

export const defaultOrder = () => {
  return {
    articleName: "",
    isEmail: false,
    isViber: false,
    isTelegram: false,
    fullName: "",
    phone: "",
    email: "",
    post: "",
    reservedPost: "",
    comment: "",
    isCall: false,
    isLicense: true,
    articles: [defaultArticle],
  };
};
