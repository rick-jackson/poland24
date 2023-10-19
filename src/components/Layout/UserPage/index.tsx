import BlockTitle from "@components/BlockTitle";
import Aside from "./Aside";
import * as Styled from "./UserPage.styled";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import { HtmlHTMLAttributes } from "react";
import { getCookie } from "cookies-next";
import { adminMenuRoutes, menuRoutes } from "@common/configs/menu";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "@components/Link";
import Image from "next/image";
import { MenuItem } from "@components/UI/Avatar/Avatar.styled";
import Avatar from "@components/UI/Avatar";

type UserPageLayoutProps = {
  title?: string;
  children: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

const UserPageLayout: React.FC<UserPageLayoutProps> = ({
  title,
  children,
  ...props
}) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const routes = getCookie("role") === "ADMIN" ? adminMenuRoutes : menuRoutes;
  const { t } = useTranslation("header");
  const router = useRouter();

  return (
    <Styled.Wrapper>
      {matches && <Aside userData={userData} />}
      <Styled.Content {...props}>
        {title && <BlockTitle title={title} />}
        {children}
      </Styled.Content>
      {!matches && (
        <Styled.NavBar $routesCount={routes.length}>
          {routes.map(({ link, label, icon }) => (
            <Link key={link} href={link}>
              <Styled.MenuItem $isActive={link === router.asPath}>
                <Image src={icon} width={24} height={24} alt="order" />
                {t(label)}
              </Styled.MenuItem>
            </Link>
          ))}
          <MenuItem style={{ justifyContent: "center" }}>
            <Avatar {...userData} />
          </MenuItem>
        </Styled.NavBar>
      )}
    </Styled.Wrapper>
  );
};

export default UserPageLayout;
