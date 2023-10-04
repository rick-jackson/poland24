import Faq from "@components/Faq";
import PageLayout from "@components/Layout/Page";
import { NextPage } from "next";

type FaqPageProps = {};

const FaqPage: NextPage<FaqPageProps> = () => {
  return (
    <PageLayout title="FAQ">
      <Faq />
    </PageLayout>
  );
};

export default FaqPage;
