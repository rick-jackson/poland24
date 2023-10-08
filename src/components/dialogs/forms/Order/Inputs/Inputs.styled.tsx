import theme from "@theme/index";
import styled from "styled-components";

export const Customer = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  gap: 12px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
  }

  ${theme.breakpoints.up("md")} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const License = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 8px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    margin-top: 12px;
  }
`;

export const Checkboxes = styled.div`
  display: flex;
  gap: 16px;
  font-weight: 400;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: rgba(45, 45, 45, 0.6);
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  line-height: 17px;

  &::before {
    content: "";
    display: block;
    background: rgba(45, 45, 45, 0.6);
    width: 3px;
    height: 3px;
    border-radius: 50px;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: 12px;
  }
`;
