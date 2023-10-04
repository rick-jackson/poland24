import Link from "@components/Link";
import { Box } from "@mui/material";
import theme from "@theme/index";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;

  ${theme.breakpoints.up("md")} {
    box-shadow: 0px 8px 11px -3px rgba(0, 0, 0, 0.08);
  }
`;

export const Header = styled((props) => <Box component="header" {...props} />)`
  display: flex;
  align-items: center;
  padding: 8px;
  justify-content: space-between;

  ${theme.breakpoints.up("md")} {
    max-width: 1290px;
    margin: auto;
    padding: 25px 0px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
`;
