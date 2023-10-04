import * as React from "react";
import { Drawer } from "@mui/material";

import IconButton from "@components/UI/buttons/IconButton";
import Close from "public/images/icons/close-dark.svg";
import Logo from "public/images/logo/dark/logo.svg";
import Menu from "public/images/icons/menu.svg";

import * as Styled from "./Drawer.styled";
import LocaleSwitcher from "@components/LocaleSwitcher";
import Navigation from "@components/Layout/Header/Navigation";
import Button from "@components/UI/buttons";

export default function TemporaryDrawer({ onOpen }) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => setState(!state);

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={state} onClose={toggleDrawer}>
        <Styled.Container>
          <Styled.Head>
            <Logo />
            <Button
              size="small"
              onClick={() => {
                onOpen();
                toggleDrawer();
              }}
            >
              Оформить заказ
            </Button>
            <Close onClick={toggleDrawer} />
          </Styled.Head>
          <Styled.Info>
            info@poland24.com.ua
            <LocaleSwitcher />
          </Styled.Info>
          <Styled.Divider />
          <Navigation />
        </Styled.Container>
      </Drawer>
    </>
  );
}
