import theme from "@theme/index";
import styled from "styled-components";
import CustomButton from "@components/UI/buttons";

export const Container = styled.div`
  padding: 32px 16px;

  ${theme.breakpoints.up("md")} {
    max-width: 1290px;
    margin: auto;
    padding: 0;
    padding-top: 64px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Description = styled.p`
  margin-top: 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;

  ${theme.breakpoints.up("md")} {
    margin-top: 75px;
    font-size: 24px;
    max-width: 590px;
    line-height: 33.6px;
  }
`;

export const Button = styled(CustomButton)`
  margin-top: 24px;

  ${theme.breakpoints.up("md")} {
    margin-top: 65px;
    margin-bottom: 10px;
  }
`;

export const Video = styled.img`
  display: block;
  border-radius: 16px;
  position: relative;
  margin-top: 24px;
  object-fit: cover;

  ${theme.breakpoints.up("md")} {
    margin-top: 0;
    max-height: 420px;
    max-width: 855px;
    flex-basis: 620px;
  }
`;
