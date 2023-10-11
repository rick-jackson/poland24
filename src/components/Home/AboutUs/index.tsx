import BlockTitle from "@components/BlockTitle";
import * as Styled from "./AboutUs.styled";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const AboutUs: React.FC = () => {
  const { t } = useTranslation("home");
  const router = useRouter();

  return (
    <Styled.Container>
      <div>
        <BlockTitle title={t("aboutTitle")} subtitle={t("aboutSubtitle")} />
        <Styled.Description>{t("aboutDescription")}</Styled.Description>
        <Styled.Button
          variant="subtle"
          size="medium"
          onClick={() => router.push("/about")}
        >
          {t("aboutDetail")}
        </Styled.Button>
      </div>
      <Styled.Video src="/images/map.png" alt="map" />
    </Styled.Container>
  );
};

export default AboutUs;
