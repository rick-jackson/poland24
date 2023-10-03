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

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Burger = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #95a4aa;
  border: none;
`;

export const Socials = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

export const Messangers = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Mail = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50px;
  cursor: pointer;
`;

export const ExchangeRate = styled.div``;

export const Currency = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-right: 8px;
`;
