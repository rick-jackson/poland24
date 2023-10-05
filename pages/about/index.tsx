import About from "@components/About";
import PageLayout from "@components/Layout/Page";
import { NextPage } from "next";

type AboutPageProps = {};

const AboutPage: NextPage<AboutPageProps> = () => {
  return (
    <PageLayout title="О компании">
      <About />
    </PageLayout>
  );
};

export default AboutPage;
