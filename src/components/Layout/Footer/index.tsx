import Instagram from "public/images/icons/socials/instagram.svg";
import VK from "public/images/icons/socials/vk.svg";
import Navigations from "./Navigations";
import Contacts from "./Contacts";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import Image from "next/image";

import * as Styled from "./Footer.styled";

const Footer: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const footerLogo = (
    <Styled.FooterLogo>
      <Image
        alt="logo"
        src="/images/logo/light/logo.svg"
        width={46}
        height={46}
      />
      <Image
        alt="logo"
        src="/images/logo/light/logo-text.svg"
        width={250}
        height={42}
        priority
      />
    </Styled.FooterLogo>
  );

  return (
    <Styled.Wrapper>
      <Styled.Container>
        {!matches && footerLogo}
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
          {matches && footerLogo}
          <Styled.Copyright>
            Copyright © 2022 Poland24.com.ua. Все права защищены.
          </Styled.Copyright>
        </div>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Footer;
