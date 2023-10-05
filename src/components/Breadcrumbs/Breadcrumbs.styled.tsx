import CustomLinkLink from "@components/Link";
import styled from "styled-components";

export const Breadcrumbs = styled.div`
  margin-top: 4px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const Link = styled(CustomLinkLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
`;

export const Item = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
