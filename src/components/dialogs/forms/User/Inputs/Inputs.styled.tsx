import theme from "@theme/index";
import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 8px;

  ${theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;

export const Messengers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 8px;
`;

export const Messanger = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 16px;
  font-weight: 700;
`;
