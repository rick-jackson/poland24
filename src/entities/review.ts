import type User from "./user";

type Review = {
  id: string;
  dateCreated: number;
  rating: number;
  store: string;
  text: string;
  user: Pick<User, "firstName" | "lastName">;
};

export default Review;
