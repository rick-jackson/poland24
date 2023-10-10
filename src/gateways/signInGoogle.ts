import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { app, db } from "../../firebase";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);
  await signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const [firstName, lastName] = user.displayName.split(" ");

      const userRef = doc(db, "users", user.uid);

      (async () => {
        await getDoc(userRef).then((res) => {
          //@ts-ignore
          if (!res.email) {
            setDoc(userRef, {
              id: user.uid,
              email: user.email,
              firstName,
              lastName,
              phone: user.phoneNumber,
            });
          }
        });
      })();
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
