import theme from "@theme/index";
import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h5`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;

  ${theme.breakpoints.up("md")} {
    text-align: left;
    margin-top: 0;
  }
`;

export const Columns = styled.div`
  margin-top: 7px;
  display: flex;
  justify-content: space-between;

  ${theme.breakpoints.up("md")} {
    gap: 32px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  max-width: 130px;

  ${theme.breakpoints.up("md")} {
    max-width: max-content;
    gap: 8px;
  }
`;

export const ColumnItem = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
