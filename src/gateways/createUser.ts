import { setCookie } from "cookies-next";
import { app, db } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { enqueueSnackbar } from "notistack";

const createUser = ({ email, password, fullName, phone }) => {
  const [firstName, lastName] = fullName.split(" ");
  const auth = getAuth(app);

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        id: user.uid,
        email,
        firstName,
        lastName,
        phone,
      });

      setCookie("userId", user.uid);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          email,
          firstName,
          lastName,
        })
      );

      enqueueSnackbar("User added!", { variant: "success" });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      enqueueSnackbar(`${errorCode} ${errorMessage}`, { variant: "error" });
    });
};

export default createUser;
