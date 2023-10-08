import type User from "@entities/user";
import { setCookie } from "cookies-next";

export const setUserInLocalStorage = (userData: User) => {
  const { email, firstName, lastName, id, role } = userData;
  setCookie("userId", id);
  setCookie("role", role);
  localStorage.setItem(
    "userData",
    JSON.stringify({
      email: email,
      firstName: firstName,
      lastName: lastName,
    })
  );
};
