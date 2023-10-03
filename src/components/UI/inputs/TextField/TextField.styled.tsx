import styled from "styled-components";

export const Label = styled.label<{ $fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 500;
  gap: 4px;
  transition: 0.1s;
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}
`;

export const TextField = styled.input<{
  $fullWidth: boolean;
  $size: "small" | "large";
  $error: boolean;
}>`
  border: none;
  outline: none;
  background: ${({ $error }) => ($error ? "#fbcece" : "#f2f2f2")};
  border-radius: 8px;
  padding: ${({ $size }) => ($size === "small" ? "14px" : "25px")};
  font-size: 16px;
  line-height: 22px;
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}

  &::placeholder {
    ${({ $error }) => $error && "color: #fff;"}
  }

  &:focus {
    outline: 6px solid #fbcece;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
