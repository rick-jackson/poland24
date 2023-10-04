import { ButtonHTMLAttributes } from "react";

import Close from "public/images/icons/close-small.svg";
import Button from "@components/UI/buttons";

const CloseButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <Button {...props} form="circle" size="medium" variant="secondary">
      <Close />
    </Button>
  );
};

export default CloseButton;
