import theme from "@theme/index";
import styled from "styled-components";

export const RequestPageWrapper = styled.section``;

export const Content = styled.div`
  display: flex;
  gap: 40px;

  ${theme.breakpoints.down("md")} {
    gap: 8px;
    flex-direction: column;
  }
`;

export const Description = styled.p`
  margin-top: 48px;
  font-size: 24px;
  font-weight: 400;

  ${theme.breakpoints.down("md")} {
    font-size: 14px;
    margin-top: 18px;
  }
`;
