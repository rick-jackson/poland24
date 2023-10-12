import theme from "@theme/index";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;

  ${theme.breakpoints.up("md")} {
    margin-top: 0px;
    height: 738px;
    width: 100%;
  }
`;

export const Item = styled.div<{ $right: number; $background: string }>`
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${theme.breakpoints.down("md")} {
    &:nth-child(odd) {
      background: #ea0c0c;
    }

    &:nth-child(even) {
      background: #bb0a0a;
    }

    &:nth-child(1) {
      background: #ee3d3d;
    }
  }
  ${theme.breakpoints.up("md")} {
    height: 738px;
    border-radius: 50px 0px 0px 200px;
    width: 784px;
    position: absolute;
    transition: 0.3s;
    flex: auto;
    box-shadow: 0px 24px 33px -9px rgba(0, 0, 0, 0.1);
    right: ${({ $right }) => $right}px;
    justify-content: flex-start;
    padding-top: 40px;
    align-items: flex-start;
    background: ${({ $background }) => $background};

    &:hover {
      right: ${({ $right }) => $right + 300}px;
    }
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: flex-start;

  // ${theme.breakpoints.up("md")} {
  //   img {
  //     position: relative;
  //     left: 0px;

  //     &:nth-child(1) {
  //       left: 0px;
  //     }
  //   }
  // }
`;

export const Title = styled.div`
  ${theme.breakpoints.up("md")} {
    transform: rotate(-90deg);
    width: 265px;
    font-family: Rubik;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    position: relative;
    left: -55px;
  }
  ${theme.breakpoints.down("md")} {
    display: none;
  }
`;

export const Info = styled.p`
  font-family: Rubik;
  font-size: 16px;
  color: #fff;
  max-width: 200px;
  margin-top: 100px;

  ${theme.breakpoints.down("md")} {
    display: none;
  }
`;
