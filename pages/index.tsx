import type { NextPage } from "next";

import Home from "@components/Home";
import { collection, getDocs, limit, query } from "firebase/firestore";
import Store from "@entities/store";
import { db } from "../firebase";

type HomePageProps = {
  shopsData: Store[];
};

const HomePage: NextPage<HomePageProps> = ({ shopsData }) => {
  return <Home shopsData={shopsData} />;
};

export const getServerSideProps = async () => {
  const shopsRef = collection(db, "shops");
  const shopsSnapshot = await getDocs(query(shopsRef, limit(20)));

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
