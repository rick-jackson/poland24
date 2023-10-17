import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { collection, getDocs } from "firebase/firestore";

import type Store from "@entities/store";
import { db } from "@firebase";
import Shops from "@components/Shops";
import PageLayout from "@components/Layout/Page";

type ShopsPageProps = {
  shopsData: Store[];
};

const ShopsPage: NextPage<ShopsPageProps> = ({ shopsData }) => {
  const { t } = useTranslation("navigation");

  return (
    <PageLayout title={t("shops")}>
      <Shops shopsData={shopsData} />
    </PageLayout>
  );
};

export const getServerSideProps = async () => {
  const shopsRef = collection(db, "shops");
  const shopsSnapshot = await getDocs(shopsRef);

  const shopsData: Store[] = [];

  shopsSnapshot.forEach((doc) => {
    shopsData.push(doc.data() as Store);
  });

  return {
    props: {
      shopsData,
    },
  };
};

export default ShopsPage;
