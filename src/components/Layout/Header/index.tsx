import LogoText from "public/images/logo/dark/logo-text.svg";
import Logo from "public/images/logo/dark/logo.svg";
import LargeLogoText from "public/images/logo/light/large/logo-text.svg";
import LargeLogo from "public/images/logo/light/large/logo.svg";
import Telegram from "public/images/icons/socials/017-telegram.svg";
import Viber from "public/images/icons/socials/014-viber.svg";
import Mail from "public/images/icons/mail_outline_grey.svg";
import Menu from "public/images/icons/menu.svg";
import User from "public/images/icons/white-user.svg";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import Modal from "@components/Modal";
import useModal from "@common/hooks/useModal";
import Navigation from "./Navigation";
import Authorization from "@components/Modal/Authorization";
import Button from "@components/UI/buttons";
import LocaleSwitcher from "@components/LocaleSwitcher";
import { getCookie } from "cookies-next";
import Avatar from "@components/UI/Avatar";

import * as Styled from "./Header.styled";
import { getExchangeRate } from "@gateways/getExchangeRate";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [exchangeRate, setExchangeRate] = useState([]);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { open, handleOpen, handleClose } = useModal();
  const userId = getCookie("userId");
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    (async () => {
      try {
        const data: Record<string, string>[] = await getExchangeRate();
        setExchangeRate(
          data.filter((el) => el.cc === "PLN" || el.cc === "EUR")
        );
      } catch (e) {
        setExchangeRate([]);
      }
    })();
  }, []);

  const [eur, pln] = exchangeRate;

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Logo>
          {matches ? <Logo /> : <LargeLogo />}
          {matches ? <LogoText /> : <LargeLogoText />}
        </Styled.Logo>
        {!matches && (
          <>
            <Styled.Socials>
              <Styled.Messangers>
                Наши мессенджеры
                <Styled.Icons>
                  <Styled.IconButton>
                    <Viber />
                  </Styled.IconButton>
                  <Styled.IconButton>
                    <Telegram />
                  </Styled.IconButton>
                </Styled.Icons>
              </Styled.Messangers>
              <Styled.Mail>
                <Mail />
                info@poland24.com.ua
              </Styled.Mail>
            </Styled.Socials>
            <Styled.ExchangeRate>
              <div>
                <Styled.Currency>zł</Styled.Currency>
                {pln?.rate.toFixed(2) || "?"}
              </div>
              <div>
                <Styled.Currency>€</Styled.Currency>
                {eur?.rate.toFixed(2) || "?"}
              </div>
            </Styled.ExchangeRate>
            <Button size="medium">Оформить заказ</Button>
            {!!userData && !!userId ? (
              <Avatar
                firstName={userData.firstName}
                lastName={userData.lastName}
              />
            ) : (
              <Button
                style={{ color: "#2D2D2D" }}
                size="medium"
                variant="text"
                onClick={handleOpen}
              >
                Вход /Реестрация
              </Button>
            )}

            <LocaleSwitcher />
          </>
        )}

        {matches && (
          <div style={{ display: "flex", gap: "6px" }}>
            {userId ? (
              <Avatar
                firstName={userData.firstName}
                lastName={userData.lastName}
              />
            ) : (
              <Styled.Burger onClick={handleOpen}>
                <User style={{ height: "24px" }} />
              </Styled.Burger>
            )}
            <Styled.Burger>
              <Menu />
            </Styled.Burger>
          </div>
        )}
      </Styled.Header>
      {!matches && <Navigation />}
      <Modal isOpen={open} onClose={handleClose}>
        <Authorization onClose={handleClose} />
      </Modal>
    </Styled.Wrapper>
  );
};

export default Header;
