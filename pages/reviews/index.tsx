import PageLayout from "@components/Layout/Page";
import { NextPage } from "next";

type ReviewsPageProps = {};

const ReviewsPage: NextPage<ReviewsPageProps> = () => {
  return <PageLayout title="Reviews">Reviews</PageLayout>;
};

export default ReviewsPage;
