import { useMediaQuery } from "@mui/material";

import BlockTitle from "@components/BlockTitle";
import Button from "@components/UI/buttons";
import InfoItem from "./InfoItem";
import theme from "@theme/index";

import * as Styled from "./HowItWorks.styled";
import Order from "@components/Layout/Header/Order";

const HowItWorks: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <BlockTitle title="Как это работает" />
        <Styled.InfoList>
          <InfoItem
            index={"01"}
            title="Вы выбираете товар"
            text="Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов."
          />
          <InfoItem
            index={"02"}
            title="Предоставляете ссылку"
            text="Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов."
          />
          <InfoItem
            index={"03"}
            title="Внести предоплату"
            text="Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов."
          />
          <InfoItem
            index={"04"}
            title="Выкупаем товар и везем в Украину"
            text="Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов."
          />
          <InfoItem
            index={"05"}
            title="Оплатить остаток"
            text="Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов."
          />
          <InfoItem
            index={"06"}
            title="Получите товар"
            text="Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов."
          />
        </Styled.InfoList>
        <div style={{ margin: "auto", marginTop: "48px" }}>
          <Order text="Заказать" />
        </div>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default HowItWorks;
