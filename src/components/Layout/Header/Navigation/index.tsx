import Help from "public/images/icons/help_outline.svg";

import * as Styled from "./Navigation.styled";
import Button from "@components/UI/buttons";
import Link from "@components/Link";

const Navigation: React.FC = () => {
  return (
    <Styled.Navigation>
      <Styled.NavLink>О компании</Styled.NavLink>
      <Styled.NavLink>Список магазину</Styled.NavLink>
      <Styled.NavLink>Отзывы</Styled.NavLink>
      <Styled.NavLink>Вопрос -ответ</Styled.NavLink>
      <Link
        href={{
          pathname: "/",
          hash: "calculator",
        }}
      >
        <Styled.NavLink>Калькулятор</Styled.NavLink>
      </Link>

      <Styled.NavLink>Контакты</Styled.NavLink>
      <Button size="small" variant="green">
        <Help />
        Помощь в поиске товаров
      </Button>
    </Styled.Navigation>
  );
};

export default Navigation;
