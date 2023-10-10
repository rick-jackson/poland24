import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  collection,
  doc,
  documentId,
  getCountFromServer,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { app, db } from "../../firebase";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

export const useSignInWithGoogle = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();

    const auth = getAuth(app);
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        const [firstName, lastName] = user.displayName.split(" ");

        const userRef = doc(db, "users", user.uid);

        const snap = await getCountFromServer(
          query(collection(db, "users"), where(documentId(), "==", user.uid))
        );

        if (!snap.data().count) {
          await setDoc(userRef, {
            id: user.uid,
            email: user.email,
            firstName,
            lastName,
            phone: user.phoneNumber,
          });
        }
        enqueueSnackbar("Login!", { variant: "success" });
        setLoading(false);
      })
      .catch((error) => {
        enqueueSnackbar(error.message, { variant: "error" });
        setLoading(false);
      });
  };

  return { loading, handleSignIn };
};
