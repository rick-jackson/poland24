import UserPageLayout from "@components/Layout/UserPage";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { db } from "../../../firebase";
import {
  collection,
  getCountFromServer,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import type Order from "@entities/order";
import Orders from "@components/Orders";

type OrdersPageProps = {
  ordersData: Order[];
};

const OrdersPage: NextPage<OrdersPageProps> = ({ ordersData }) => {
  const { t } = useTranslation("header");

  return (
    <UserPageLayout title={t("myOrders")}>
      <Orders ordersData={ordersData} />
    </UserPageLayout>
  );
};

export const getServerSideProps = async (context) => {
  const userId = context.req.cookies.userId as string;

  const ordersRef = collection(db, "orders");
  const q = query(ordersRef, where("userId", "==", userId));
  const ordersSnapshot = await getDocs(q);

  const ordersData: Order[] = [];

  ordersSnapshot.forEach((doc) => {
    ordersData.push(doc.data() as Order);
  });

  return {
    props: {
      ordersData,
    },
  };
};

export default OrdersPage;
