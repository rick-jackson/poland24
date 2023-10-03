import { InputHTMLAttributes } from "react";
import * as Styled from "./TextField.styled";

export type TextFieldProps = {
  name: string;
  label?: string;
  error?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  size?: "small" | "large";
  type?: "text" | "number" | "counter" | "password" | "email" | "tel";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">;

const TextField: React.FC<TextFieldProps> = ({
  name,
  label = "",
  error = false,
  size = "small",
  type = "text",
  placeholder = "",
  fullWidth = false,
  ...props
}) => {
  return (
    <Styled.Label id={name} $fullWidth={fullWidth}>
      {label}
      <Styled.TextField
        id={name}
        type={type}
        $size={size}
        $error={error}
        $fullWidth={fullWidth}
        placeholder={placeholder}
        {...props}
      />
    </Styled.Label>
  );
};

export default TextField;
