import { setCookie } from "cookies-next";

export const setUserInLocalStorage = (userData) => {
  setCookie("userId", userData.uid);
  // setCookie("role", role);

  const [firstName, lastName] = userData.displayName.split(" ");
  localStorage.setItem(
    "userData",
    JSON.stringify({
      email: userData.email,
      firstName,
      lastName,
      photoUrl: userData.photoURL,
    })
  );
};
