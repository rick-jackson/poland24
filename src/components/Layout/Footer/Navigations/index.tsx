import * as Styled from "./Navigations.styled";

const Navigations: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Title>НАВИГАЦИЯ:</Styled.Title>
      <Styled.Columns>
        <Styled.Column>
          <Styled.ColumnItem>О компании</Styled.ColumnItem>
          <Styled.ColumnItem>Доставка из магазинов Европы</Styled.ColumnItem>
          <Styled.ColumnItem>Список магазинов</Styled.ColumnItem>
          <Styled.ColumnItem>Отзывы</Styled.ColumnItem>
        </Styled.Column>
        <Styled.Column>
          <Styled.ColumnItem>FAQ</Styled.ColumnItem>
          <Styled.ColumnItem>Товар на складе в Украине</Styled.ColumnItem>
          <Styled.ColumnItem>Правили магазина</Styled.ColumnItem>
        </Styled.Column>
      </Styled.Columns>
    </Styled.Container>
  );
};

export default Navigations;
