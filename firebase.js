import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "poland24-d6ea0.firebaseapp.com",
  projectId: "poland24-d6ea0",
  storageBucket: "poland24-d6ea0.appspot.com",
  messagingSenderId: "435695805026",
  appId: "1:435695805026:web:132b3840777dd97e5da73b",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
