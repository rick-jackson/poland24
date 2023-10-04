import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useRouter } from "next/router";
import { setUserInLocalStorage } from "@common/utils/setUserInLocalStorage";
import type User from "@entities/user";

const useUserData = () => {
  const router = useRouter();

  const getUser = async (userUid) => {
    const userRef = doc(db, "users", userUid);
    await getDoc(userRef).then((res) => {
      setUserInLocalStorage(res.data() as User);
    });
    router.replace(router.asPath);
  };

  return { getUser };
};

export default useUserData;
