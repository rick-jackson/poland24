import PageLayout from "@components/Layout/Page";
import type Review from "@entities/review";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useTranslation } from "next-i18next";
import { NextPage } from "next";
import Reviews from "@components/Reviews";
import ReviewForm from "@components/dialogs/forms/Review";

type ReviewsPageProps = {
  reviewsData: Review[];
};

const ReviewsPage: NextPage<ReviewsPageProps> = ({ reviewsData }) => {
  const { t } = useTranslation("navigation");

  return (
    <PageLayout title={t("reviews")}>
      <Reviews reviewsData={reviewsData} />
      <ReviewForm />
    </PageLayout>
  );
};

export const getServerSideProps = async () => {
  const reviewsRef = collection(db, "reviews");
  const reviewsSnapshot = await getDocs(reviewsRef);

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
