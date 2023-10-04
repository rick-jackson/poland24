import theme from "@theme/index";
import styled from "styled-components";

export const Article = styled.div`
  margin-top: 24px;
`;

export const Detail = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
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

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Checkboxes = styled.div`
  display: flex;
  gap: 16px;
  font-weight: 400;
`;
