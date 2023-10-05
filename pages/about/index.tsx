import About from "@components/About";
import PageLayout from "@components/Layout/Page";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";

type AboutPageProps = {};

const AboutPage: NextPage<AboutPageProps> = () => {
  const { t } = useTranslation("about");

  return (
    <PageLayout title={t("title")}>
      <About />
    </PageLayout>
  );
};

export default AboutPage;
