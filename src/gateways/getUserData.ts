import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

const useUserData = () => {
  const router = useRouter();

  const getUser = async (userUid) => {
    const userRef = doc(db, "users", userUid);
    await getDoc(userRef).then((res) => {
      const { email, firstName, lastName } = res.data();
      setCookie("userId", userUid);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
        })
      );
    });
    router.replace(router.asPath);
  };

  return { getUser };
};

export default useUserData;
