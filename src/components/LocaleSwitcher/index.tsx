import { useEffect, useRef, useState } from "react";
import Ukraine from "public/images/icons/flags/ua.svg";
import ArrowDown from "public/images/icons/arrow_drop_down.svg";
import { useTranslation } from "next-i18next";
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";

import * as Styled from "./LocaleSwitcher.styled";
import { setCookie } from "cookies-next";
import Image from "next/image";

const localeConfig = [
  { locale: "ru", label: "Руz", icon: "/images/icons/emoji.png" },
  { locale: "uk", label: "Укр", icon: "/images/icons/flags/ua.png" },
];

const LocaleSwitcher: React.FC = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const { i18n } = useTranslation();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      {/* @ts-ignore */}
      <Styled.LocaleSwitcher ref={anchorRef} onClick={handleToggle}>
        {i18n.language === "uk" ? (
          <>
            <Ukraine />
            Укр
          </>
        ) : (
          <>
            <Image
              alt="ru"
              width={24}
              height={17}
              src="/images/icons/emoji.png"
            />
            Руz
          </>
        )}

        <ArrowDown />
      </Styled.LocaleSwitcher>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onKeyDown={handleListKeyDown}>
                  {localeConfig.map(({ locale, label, icon }) => (
                    <MenuItem
                      sx={{ gap: "8px", alignItems: "center" }}
                      key={locale}
                      onClick={(e) => {
                        handleClose(e);
                        i18n.changeLanguage(locale);
                        setCookie("NEXT_LOCALE", locale);
                      }}
                    >
                      <Image alt={locale} width={24} height={17} src={icon} />{" "}
                      {label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default LocaleSwitcher;
