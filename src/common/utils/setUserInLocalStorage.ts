import type User from "@entities/user";
import { setCookie } from "cookies-next";

export const setUserInLocalStorage = (userData: User) => {
  const { email, firstName, lastName, id } = userData;
  setCookie("userId", id);
  localStorage.setItem(
    "userData",
    JSON.stringify({
      email: email,
      firstName: firstName,
      lastName: lastName,
    })
  );
};
