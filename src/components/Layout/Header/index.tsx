import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import theme from "@theme/index";
import Navigation from "./Navigation";
import LocaleSwitcher from "@components/LocaleSwitcher";
import * as Styled from "./Header.styled";
import Profile from "./Profile";
import ExchangeRate from "./ExchangeRate";
import Socials from "./Socials";
import Image from "next/image";
import Order from "./Order";

const Header: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { Desktop, Mobile } = Profile();
  const { t } = useTranslation("header");

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Logo href="/">
          <Image
            alt="logo"
            src="/images/logo/light/large/logo.svg"
            width={matches ? 32 : 46}
            height={matches ? 32 : 46}
          />
          <Image
            alt="logo"
            src="/images/logo/light/large/logo-text.svg"
            width={matches ? 170 : 250}
            height={matches ? 26 : 42}
          />
        </Styled.Logo>
        {!matches && (
          <>
            <Socials />
            <ExchangeRate />
            <Order text={t("toOrder")} size="medium" />
            <Desktop />
            <LocaleSwitcher />
          </>
        )}
        <Mobile />
      </Styled.Header>
      {!matches && <Navigation />}
    </Styled.Wrapper>
  );
};

export default Header;
