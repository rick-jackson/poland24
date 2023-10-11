import { setUserInLocalStorage } from "@common/utils/setUserInLocalStorage";
import { app, db } from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";

const useCreateUser = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const saveUser = async ({ email, password, fullName, phone }) => {
    const [firstName, lastName] = fullName.split(" ");
    const auth = getAuth(app);
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        await updateProfile(auth.currentUser, { displayName: fullName });
        const user = userCredential.user;
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
          id: user.uid,
          email,
          firstName,
          lastName,
          phone,
        });
        setUserInLocalStorage(user);
        router.replace(router.asPath);
      }
    );
    setLoading(false);
  };

  return { saveUser, isLoading };
};

export default useCreateUser;
