import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import theme from "@theme/index";
import Navigation from "./Navigation";
import LocaleSwitcher from "@components/LocaleSwitcher";
import * as Styled from "./Header.styled";
import Profile from "./Profile";
import ExchangeRate from "./ExchangeRate";
import Socials from "./Socials";
import Order from "./Order";
import Logo from "@components/UI/Logo";

const Header: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { Desktop, Mobile } = Profile();
  const { t } = useTranslation("header");

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Logo {...(matches && { size: "small" })} />
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
