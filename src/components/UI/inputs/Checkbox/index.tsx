import { InputHTMLAttributes } from "react";
import * as Styled from "./Checkbox.styled";

export type CheckBoxProps = {
  name: string;
  label?: string;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  label = "",
  error = false,
  ...props
}) => {
  return (
    <Styled.Label $error={error} id={name}>
      <Styled.Checkbox id={name} type="checkbox" {...props} />
      {label}
    </Styled.Label>
  );
};

export default CheckBox;
