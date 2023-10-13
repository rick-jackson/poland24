import { doc, setDoc } from "firebase/firestore";
import { db } from "@firebase";

export const editOrder = async (orderData) => {
  console.log(orderData);
  await setDoc(doc(db, "orders", orderData.id), orderData);
};
