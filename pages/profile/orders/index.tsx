import UserPageLayout from "@components/Layout/UserPage";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";

type OrdersPageProps = {};

const OrdersPage: NextPage<OrdersPageProps> = () => {
  const { t } = useTranslation("header");

  return <UserPageLayout title={t("myOrders")}>Content</UserPageLayout>;
};

export default OrdersPage;
