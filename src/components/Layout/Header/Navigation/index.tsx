import Help from "public/images/icons/help_outline.svg";

import * as Styled from "./Navigation.styled";
import Button from "@components/UI/buttons";
import Link from "@components/Link";

const Navigation: React.FC = () => {
  return (
    <Styled.Navigation>
      <Link href="/about">
        <Styled.NavLink>О компании</Styled.NavLink>
      </Link>
      <Link href="/shops">
        <Styled.NavLink>Список магазину</Styled.NavLink>
      </Link>
      <Link href="/reviews">
        <Styled.NavLink>Отзывы</Styled.NavLink>
      </Link>
      <Link href="/faq">
        <Styled.NavLink>Вопрос -ответ</Styled.NavLink>
      </Link>
      <Link
        href={{
          pathname: "/",
          hash: "calculator",
        }}
      >
        <Styled.NavLink>Калькулятор</Styled.NavLink>
      </Link>
      <Link href="/contacts">
        <Styled.NavLink>Контакты</Styled.NavLink>
      </Link>
      <Button size="small" variant="green">
        <Help />
        Помощь в поиске товаров
      </Button>
    </Styled.Navigation>
  );
};

export default Navigation;
