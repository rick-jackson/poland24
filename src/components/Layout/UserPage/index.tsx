import BlockTitle from "@components/BlockTitle";
import Aside from "./Aside";
import * as Styled from "./UserPage.styled";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";

type UserPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const UserPageLayout: React.FC<UserPageLayoutProps> = ({ title, children }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Styled.Wrapper>
      {matches && <Aside userData={userData} />}
      <Styled.Content>
        <BlockTitle title={title} />
        {children}
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default UserPageLayout;
