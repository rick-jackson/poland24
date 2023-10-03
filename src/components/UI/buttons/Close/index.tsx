import Close from "public/images/icons/close-small.svg";

import * as Styled from "./Close.styled";
import { ButtonHTMLAttributes } from "react";

const CloseButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <Styled.CloseButton {...props}>
      <Close />
    </Styled.CloseButton>
  );
};

export default CloseButton;
