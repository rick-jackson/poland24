import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const login = async ({ email, password }) => {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password);
};
