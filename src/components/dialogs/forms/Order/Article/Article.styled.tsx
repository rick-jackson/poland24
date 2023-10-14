import theme from "@theme/index";
import styled from "styled-components";

export const Article = styled.div`
  margin-top: 24px;
`;

export const Detail = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 0.5fr;
  gap: 8px;

  ${theme.breakpoints.down("md")} {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(3, 1fr);

    label:nth-child(1) {
      grid-column-end: 3;
      grid-column-start: 1;
    }
  }
`;

export const Comment = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
  font-size: 14px;
  font-weight: 500;
  display: grid;
  grid-template-columns: 3fr auto auto;

  ${theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  font-size: 14px;
  font-weight: 600;

  ${theme.breakpoints.down("md")} {
    grid-row-start: 2;
  }
`;

export const Currency = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
`;
