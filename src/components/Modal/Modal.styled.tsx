import theme from "@theme/index";
import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  color: #2d2d2d;
  border-radius: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${theme.breakpoints.up("md")} {
    padding: 32px;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  font-weight: 800;
`;
