import LogoText from "public/images/logo/light/logo-text.svg";
import Logo from "public/images/logo/light/logo.svg";
import Instagram from "public/images/icons/socials/instagram.svg";
import VK from "public/images/icons/socials/vk.svg";
import Navigations from "./Navigations";
import Contacts from "./Contacts";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";

import * as Styled from "./Footer.styled";

const Footer: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Styled.Wrapper>
      <Styled.Container>
        {!matches && (
          <Styled.FooterLogo>
            <Logo />
            <LogoText />
          </Styled.FooterLogo>
        )}
        <Contacts />
        <Styled.Socials>
          <span>Мы в соц.сетяц:</span>
          <Styled.SocialsIcons>
            <VK />
            <Instagram />
          </Styled.SocialsIcons>
        </Styled.Socials>
        <Navigations />
        <Styled.Divider />
        <div>
          {matches && (
            <Styled.FooterLogo>
              <Logo />
              <LogoText />
            </Styled.FooterLogo>
          )}
          <Styled.Copyright>
            Copyright © 2022 Poland24.com.ua. Все права защищены.
          </Styled.Copyright>
        </div>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Footer;
