import UserPageLayout from "@components/Layout/UserPage";
import { NextPage } from "next";

type ReviewsPageProps = {};

const ReviewsPage: NextPage<ReviewsPageProps> = () => {
  return <UserPageLayout title="Мои отзывы">Content</UserPageLayout>;
};

export default ReviewsPage;
