import type { NextPage } from "next";
import dynamic from "next/dynamic";

import Home from "@components/Home";
const Layout = dynamic(() => import("@components/Layout"), { ssr: false });

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
