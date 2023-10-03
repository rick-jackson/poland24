import theme from "@theme/index";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 100%;
`;

export const Container = styled.div`
  padding: 32px 17px 0px 17px;

  ${theme.breakpoints.up("md")} {
    padding: 0;
    padding-top: 64px;
    max-width: 1290px;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

export const InfoList = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${theme.breakpoints.up("md")} {
    margin-top: 64px;
    flex-direction: row;
    gap: 4px;
  }
`;
