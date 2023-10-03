import { buttonConfig } from "@common/configs/button";
import styled from "styled-components";

export const Button = styled.button<{
  $variant?: "primary" | "secondary" | "subtle" | "text";
  $size?: "large" | "medium" | "small";
  $fullwidth?: boolean;
}>`
  padding: ${({ $size }) => buttonConfig.size[$size].padding};
  background: ${({ $variant }) =>
    buttonConfig.variant[$variant].initial.background};
  color: ${({ $variant }) => buttonConfig.variant[$variant].initial.color};
  font-size: ${({ $size }) => buttonConfig.size[$size].fontSize};
  border-radius: ${({ $size }) => buttonConfig.size[$size].borderRadius};
  ${({ $size }) => $size === "large" && " text-transform: upperCase;"}
  ${({ $fullwidth }) => $fullwidth && "width: 100%;"}
  ${({ $variant }) => $variant === "subtle" && "outline: 2px solid #95A4AA;"}
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background: ${({ $variant }) =>
      buttonConfig.variant[$variant].hover.background};
    color: ${({ $variant }) => buttonConfig.variant[$variant].hover.color};
    outline: ${({ $variant, $size }) =>
      `${buttonConfig.size[$size].outline} solid ${buttonConfig.variant[$variant].hover.outline}`};
  }

  &:active {
    background: ${({ $variant }) =>
      buttonConfig.variant[$variant].active.background};
    color: ${({ $variant }) => buttonConfig.variant[$variant].active.color};
    outline: none;
  }

  &:disabled {
    background: ${({ $variant }) =>
      buttonConfig.variant[$variant].disabled.background};
    color: ${({ $variant }) => buttonConfig.variant[$variant].disabled.color};
  }
`;
