import PageLayout from "@components/Layout/Page";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useTranslation } from "next-i18next";
import { NextPage } from "next";
import type Store from "@entities/store";
import Shops from "@components/Shops";

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
