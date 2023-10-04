import Help from "public/images/icons/help_outline.svg";

import * as Styled from "./Navigation.styled";
import Button from "@components/UI/buttons";

const Navigation: React.FC = () => {
  return (
    <Styled.Navigation>
      <Styled.NavLink>О компании</Styled.NavLink>
      <Styled.NavLink>Список магазину</Styled.NavLink>
      <Styled.NavLink>Отзывы</Styled.NavLink>
      <Styled.NavLink>Вопрос -ответ</Styled.NavLink>
      <a style={{ textDecoration: "none" }} href="#calculator">
        <Styled.NavLink>Калькулятор</Styled.NavLink>
      </a>

      <Styled.NavLink>Контакты</Styled.NavLink>
      <Button size="small" variant="green">
        <Help />
        Помощь в поиске товаров
      </Button>
    </Styled.Navigation>
  );
};

export default Navigation;
