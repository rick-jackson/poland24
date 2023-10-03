import type { ButtonHTMLAttributes } from "react";

import * as Styled from "./Button.styled";

type ButtonProps = {
  variant?: "primary" | "secondary" | "subtle" | "text";
  size?: "large" | "medium" | "small";
  fullwidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "large",
  fullwidth = false,
  ...props
}) => {
  return (
    <Styled.Button
      $variant={variant}
      $size={size}
      $fullwidth={fullwidth}
      {...props}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
