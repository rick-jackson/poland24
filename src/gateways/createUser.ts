import { app, db } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const createUser = async ({ email, password, fullName, phone }) => {
  const [firstName, lastName] = fullName.split(" ");
  const auth = getAuth(app);

  await createUserWithEmailAndPassword(auth, email, password).then(
    async (userCredential) => {
      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        id: user.uid,
        email,
        firstName,
        lastName,
        phone,
      });
    }
  );
};

export default createUser;
