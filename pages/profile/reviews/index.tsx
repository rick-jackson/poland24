import * as Styled from "./UserReviews.styled";
import type Review from "@entities/review";
import Reviews from "@components/Reviews";
import ReviewForm from "@components/dialogs/forms/Review";
import { db } from "../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextPage } from "next";
import BlockTitle from "@components/BlockTitle";

type ReviewsPageProps = { reviewsData: Review[] };

const ReviewsPage: NextPage<ReviewsPageProps> = ({ reviewsData }) => {
  return (
    <Styled.UserReviews>
      <div>
        <BlockTitle title="Мои отзывы" />
        <Reviews reviewsData={reviewsData} />
      </div>
      <ReviewForm />
    </Styled.UserReviews>
  );
};

export const getServerSideProps = async (context) => {
  const userId = context.req.cookies.userId as string;

  const reviewsRef = collection(db, "reviews");
  const q = query(reviewsRef, where("userId", "==", userId));
  const reviewsSnapshot = await getDocs(q);

  const reviewsData: Review[] = [];

  reviewsSnapshot.forEach((doc) => {
    reviewsData.push(doc.data() as Review);
  });

  return {
    props: {
      reviewsData,
    },
  };
};

export default ReviewsPage;
