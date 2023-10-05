import styled from "styled-components";
import UserPageLayout from "@components/Layout/UserPage";
import theme from "@theme/index";

export const UserReviews = styled(UserPageLayout)`
  gap: 13px;

  ${theme.breakpoints.up("md")} {
    padding-right: 0;
    display: flex;
  }
`;
