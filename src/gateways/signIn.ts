import { app } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const login = async ({ email, password }) => {
  const auth = getAuth(app);
  await signInWithEmailAndPassword(auth, email, password);
};
