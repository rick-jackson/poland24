import * as Styled from "./About.styled";
import AboutCompany from "public/images/icons/about-company.svg";
import { useTranslation } from "next-i18next";

const About: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <>
      <Styled.Image>
        <AboutCompany />
      </Styled.Image>
      <Styled.Content>
        <Styled.BlockTitle title={t("topic")} />
        <div>
          {new Array(9).fill(null).map((_, index) => (
            <Styled.Paragraph key={index}>
              {t(`paragraph${index + 1}`)}
            </Styled.Paragraph>
          ))}
        </div>
      </Styled.Content>
    </>
  );
};

export default About;
