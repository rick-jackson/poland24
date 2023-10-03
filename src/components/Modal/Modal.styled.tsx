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
  width: 100%;
  padding: 32px;
  max-width: 550px;

  ${theme.breakpoints.down("md")} {
    padding: 0px;
    width: calc(100% - 12px);
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  font-weight: 800;
`;
