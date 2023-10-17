import Instagram from "public/images/icons/socials/instagram.svg";
import VK from "public/images/icons/socials/vk.svg";
import Navigations from "./Navigations";
import Contacts from "./Contacts";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import Logo from "@components/UI/Logo";

import * as Styled from "./Footer.styled";

const Footer: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Styled.Footer>
      <Styled.Container>
        {!matches && (
          <div style={{ margin: "auto" }}>
            <Logo size="medium" variant="dark" />
          </div>
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
          {matches && <Logo size="medium" variant="dark" />}
          <Styled.Copyright>
            Copyright © 2022 Poland24.com.ua. Все права защищены.
          </Styled.Copyright>
        </div>
      </Styled.Container>
    </Styled.Footer>
  );
};

export default Footer;
