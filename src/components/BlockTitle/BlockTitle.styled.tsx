import theme from "@theme/index";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Divider = styled.div`
  width: 4px;
  min-height: 29px;
  background: #ea0c0c;

  ${theme.breakpoints.up("md")} {
    width: 8px;
    min-height: 48px;
  }
`;

export const Text = styled.div`
  font-family: Rubik;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  line-height: 16.8px;
  letter-spacing: initial;

  ${theme.breakpoints.up("md")} {
    margin-left: 24px;
    gap: 22px;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  line-height: 120%;
  font-size: 24px;

  ${theme.breakpoints.up("md")} {
    font-size: 40px;
    font-weight: 800;
  }
`;

export const Subtitle = styled.h4`
  letter-spacing: initial;

  ${theme.breakpoints.up("md")} {
    font-size: 24px;
    font-weight: 400;
  }
`;
