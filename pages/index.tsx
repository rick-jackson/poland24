import type { GetServerSideProps, NextPage } from "next";
import { collection, getDocs, limit, query } from "firebase/firestore";

import { db } from "@firebase";
import Home from "@components/Home";
import Store from "@entities/store";

type HomePageProps = {
  shopsData: Store[];
};

const HomePage: NextPage<HomePageProps> = ({ shopsData }) => {
  return <Home shopsData={shopsData} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const shopsRef = collection(db, "shops");
  const shopsSnapshot = await getDocs(query(shopsRef, limit(16)));

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

export default HomePage;
