import type { NextPage } from "next";

import Home from "@components/Home";

const HomePage: NextPage = () => {
  return <Home />;
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;
