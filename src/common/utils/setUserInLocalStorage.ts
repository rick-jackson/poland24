import { setCookie } from "cookies-next";

export const setUserInLocalStorage = (userData) => {

  console.log(userData)
  setCookie("userId", userData.uid || userData.id);
  // setCookie("role", role);
  let firstName;
  let lastName;

  if (userData.displayName) {
    const user = userData.displayName.split(" ");
    firstName = user[0];
    lastName = user[1];
  } else {
    firstName = userData.firstName;
    lastName = userData.lastName;
  }

  localStorage.setItem(
    "userData",
    JSON.stringify({
      email: userData.email,
      firstName,
      lastName,
      photoUrl: userData.photoURL,
      post: userData.post,
      city: userData.city,
    })
  );
};
