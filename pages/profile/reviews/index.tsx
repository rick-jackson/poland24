import type Review from "@entities/review";
import Reviews from "@components/Reviews";
import ReviewForm from "@components/dialogs/forms/Review";
import { db } from "@firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextPage } from "next";
import BlockTitle from "@components/BlockTitle";
import { UserReviews } from "@components/Reviews/Reviews.styled";
import { useTranslation } from "next-i18next";
import Error from "@components/Error";

type ReviewsPageProps = { reviewsData: Review[]; errorCode: number };

const ReviewsPage: NextPage<ReviewsPageProps> = ({
  reviewsData,
  errorCode,
}) => {
  const { t } = useTranslation("header");

  return (
    <>
      {errorCode ? (
        <Error statusCode={errorCode} />
      ) : (
        <UserReviews>
          <div style={{ width: "100%" }}>
            <BlockTitle title={t("myReviews")} />
            <Reviews reviewsData={reviewsData} />
          </div>
          <ReviewForm />
        </UserReviews>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const userId = context.req.cookies.userId as string;

  if (!userId) return { props: { errorCode: 401 } };

  try {
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
  } catch (error) {
    return {
      props: { errorCode: error?.status },
    };
  }
};

export default ReviewsPage;
