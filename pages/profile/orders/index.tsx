import UserPageLayout from "@components/Layout/UserPage";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { db } from "@firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import type Order from "@entities/order";
import Orders from "@components/Orders";
import Error from "@components/Error";

type OrdersPageProps = {
  ordersData: Order[];
  errorCode: number;
};

const OrdersPage: NextPage<OrdersPageProps> = ({ ordersData, errorCode }) => {
  const { t } = useTranslation("header");

  return (
    <>
      {errorCode ? (
        <Error statusCode={errorCode} />
      ) : (
        <UserPageLayout title={t("myOrders")}>
          <Orders ordersData={ordersData} />
        </UserPageLayout>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const userId = context.req.cookies.userId as string;
  if (!userId) return { props: { errorCode: 401 } };

  try {
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
  } catch (error) {
    return {
      props: { errorCode: error?.status },
    };
  }
};

export default OrdersPage;
