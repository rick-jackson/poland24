import LogoText from "public/images/logo/dark/logo-text.svg";
import Logo from "public/images/logo/dark/logo.svg";
import LargeLogoText from "public/images/logo/light/large/logo-text.svg";
import LargeLogo from "public/images/logo/light/large/logo.svg";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import Navigation from "./Navigation";
import LocaleSwitcher from "@components/LocaleSwitcher";
import * as Styled from "./Header.styled";
import Profile from "./Profile";
import ExchangeRate from "./ExchangeRate";
import Socials from "./Socials";
import Order from "./Order";

const Header: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { Desktop, Mobile } = Profile();

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Logo href="/">
          {matches ? <Logo /> : <LargeLogo />}
          {matches ? <LogoText /> : <LargeLogoText />}
        </Styled.Logo>
        {!matches && (
          <>
            <Socials />
            <ExchangeRate />
            <Order text="Оформить заказ" size="medium" />
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
