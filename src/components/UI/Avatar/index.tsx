import type User from "@entities/user";

import * as Styled from "./Avatar.styled";
import { auth } from "../../../../firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import Setting from "public/images/icons/settings_input_composite.svg";
import TeaDrink from "public/images/icons/tea-drink.svg";
import Message from "public/images/icons/message.svg";
import Logout from "public/images/icons/exit_to_app.svg";

type AvatarProps = Partial<Pick<User, "firstName" | "lastName" | "email">>;

const Avatar: React.FC<AvatarProps> = ({ firstName, lastName, email }) => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.replace(router.asPath);
    } catch (error) {
      console.error("Помилка виходу:", error);
    }
  };

  return (
    <>
      <Styled.Avatar
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(e) => {
          email ? router.push("/profile") : handleClick(e);
        }}
      >
        <Styled.Circle>
          {firstName[0]}
          {lastName[0]}
        </Styled.Circle>
        <Styled.FullName>
          {lastName} {firstName}
          {email && <Styled.Email>{email}</Styled.Email>}
        </Styled.FullName>
      </Styled.Avatar>
      <Styled.Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Styled.MenuItem
          onClick={() => {
            handleClose();
            router.push("/profile");
          }}
        >
          <Styled.Icon>
            <Setting />
          </Styled.Icon>
          Редактировать профиль
        </Styled.MenuItem>
        <Styled.MenuItem onClick={handleClose}>
          <Styled.Icon>
            <TeaDrink />
          </Styled.Icon>
          Мои закази
        </Styled.MenuItem>
        <Styled.MenuItem onClick={handleClose}>
          <Styled.Icon>
            <Message />
          </Styled.Icon>
          Мои отзиви
        </Styled.MenuItem>
        <Styled.MenuItem
          onClick={handleLogout}
          sx={{
            justifyContent: "space-between",
            paddingLeft: "16px !important",
          }}
        >
          Виход <Logout />
        </Styled.MenuItem>
      </Styled.Menu>
    </>
  );
};

export default Avatar;
