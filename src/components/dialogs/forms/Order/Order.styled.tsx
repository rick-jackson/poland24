import theme from "@theme/index";
import styled from "styled-components";

export const Customer = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  gap: 12px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const License = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 8px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    margin-top: 12px;
  }
`;
