export type Article = {
  articleName: string;
  articleCount: number;
  articleDeliveryPrice: number;
  articleDescription: string;
  articleLink: string;
  articlePrice: number;
  isUsedArticle: boolean;
};

type Order = {
  id: string;
  userId: string;
  post: string;
  phone: number;
  isViber: boolean;
  isTelegram: boolean;
  isEmail: boolean;
  isCall: boolean;
  fullName: string;
  email: string;
  dateCreated: number;
  comment: string;
  articles: Article[];
  status: Status;
  orderNumber: number;
};

export enum Status {
  IN_PROGRESS = "inProgress",
  SUCCESS = "success",
  CANCELLED = "cancelled",
  FAILED = "failed",
}

export default Order;
