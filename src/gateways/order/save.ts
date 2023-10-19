import {
  collection,
  doc,
  getCountFromServer,
  setDoc,
} from "firebase/firestore";
import { db } from "@firebase";
import { filterEmptyParam } from "@common/utils/filterEmpryParams";
import { getCookie } from "cookies-next";

export const createOrder = async (orderData) => {
  const userId = getCookie("userId");
  const ordersRef = doc(collection(db, "orders"));
  const ordersCount = (
    await getCountFromServer(collection(db, "orders"))
  ).data().count;

  await setDoc(ordersRef, {
    ...filterEmptyParam(orderData),
    orderNumber: +ordersCount + 1,
    status: "IN_PROGRESS",
    userId,
    id: ordersRef.id,
    createdDate: new Date().valueOf(),
  });
};
