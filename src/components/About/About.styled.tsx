import CustomBlockTitle from "@components/BlockTitle";
import theme from "@theme/index";
import styled from "styled-components";

export const BlockTitle = styled(CustomBlockTitle)`
  ${theme.breakpoints.up("md")} {
    h3 {
      font-weight: 700;
      line-height: 120%;
      font-size: 24px;
      width: 330px;
    }
  }
`;
