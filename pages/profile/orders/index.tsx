import UserPageLayout from "@components/Layout/UserPage";
import { NextPage } from "next";

type OrdersPageProps = {};

const OrdersPage: NextPage<OrdersPageProps> = () => {
  return <UserPageLayout title="Мои заказы">Content</UserPageLayout>;
};

export default OrdersPage;
