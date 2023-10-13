import PageLayout from "@components/Layout/Page";
import Request from "@components/Request";
import { NextPage } from "next";

const RequestPage: NextPage = () => {
  return (
    <PageLayout>
      <Request />
    </PageLayout>
  );
};

export const getServerSideProps = () => {
  return {
    props: {},
  };
};

export default RequestPage;
