import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import useUserData from "./getUserData";

const useSignIn = () => {
  const [isLoading, setLoading] = useState(false);
  const { getUser } = useUserData();

  const login = async ({ email, password }) => {
    setLoading(true);
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("User login!", { variant: "success" });
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        enqueueSnackbar(`${errorCode} ${errorMessage}`, { variant: "error" });
      });
  };

  return { login, isLoading };
};

export default useSignIn;
