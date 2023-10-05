import BlockTitle from "@components/BlockTitle";
import Aside from "./Aside";
import * as Styled from "./UserPage.styled";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import { HtmlHTMLAttributes } from "react";

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

  return (
    <Styled.Wrapper>
      {matches && <Aside userData={userData} />}
      <Styled.Content {...props}>
        {title && <BlockTitle title={title} />}
        {children}
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default UserPageLayout;
