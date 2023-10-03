import Button from "@components/UI/buttons";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import styled from "styled-components";

export const Navigation = styled.nav`
  max-width: 1290px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const NavLink = styled(({ children }) => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Button
      {...(!matches && { fullwidth: true })}
      size={!matches ? "medium" : "small"}
      variant="text"
    >
      {children}
    </Button>
  );
})`
  &:nth-child(1) {
    padding-left: 0;
  }
`;

export const HelperButton = styled.button`
  padding: 0 16px;
  font-weight: 700;
  font-size: 14px;
  background: #00ba88;
  border-radius: 6px;
  border: none;
  color: #fff;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 6px;
`;
