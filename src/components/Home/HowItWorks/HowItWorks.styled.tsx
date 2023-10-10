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
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(1, 1fr);

  ${theme.breakpoints.up("sm")} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${theme.breakpoints.up('lg')} {
    grid-template-columns: repeat(6, 1fr);
  }
`;
