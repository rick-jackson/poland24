import PageLayout from "@components/Layout/Page";
import { NextPage } from "next";

type ShopsPageProps = {};

const ShopsPage: NextPage<ShopsPageProps> = () => {
  return <PageLayout title="Shops">Shops</PageLayout>;
};

export default ShopsPage;
