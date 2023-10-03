import Money from "public/images/icons/Money_perspective_matte_s money.svg";
import Note from "public/images/icons/Money_perspective_matte_s note.svg";
import Coin from "public/images/icons/Money_perspective_matte_s coin.svg";
import Car from "public/images/icons/Money_perspective_matte_s car.svg";
import Clock from "public/images/icons/perspective_matte clock.svg";

import * as Styled from "./Description.styled";

const Description: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Item $right={-533} $background="#BB0A0A" style={{ zIndex: 5 }}>
        <Styled.Head>
          <Styled.Title>
            Возможность оплатить кредитными средствами
          </Styled.Title>
          <Clock />
        </Styled.Head>
        <Styled.Info>
          Оплата за заказы у нас производится посредством платежной системы
          PayU. Вы можете вносить оплату как личными , так и кредитными
          средствами (без оплаты каких-либо комиссий за использование кредитных
          средств).
        </Styled.Info>
      </Styled.Item>
      <Styled.Item $right={-213} $background="#BB0A0A" style={{ zIndex: 3 }}>
        <Styled.Head>
          <Styled.Title>Доставка товара за 5-10 дней</Styled.Title>
          <Car />
        </Styled.Head>
        <Styled.Info>
          Доставка товара в Украину 5-10 дней с момента оформления заказа. наша
          компания старается оперативно доставлять заказы в Украину. Среднее
          время доставки от момента оформления заказа до поставки к нам на склад
          в Украине 5-10 дней.
        </Styled.Info>
      </Styled.Item>
      <Styled.Item $right={114} $background="#EE3D3D" style={{ zIndex: 1 }}>
        <Styled.Head>
          <Styled.Title>Комиссия 6,38%</Styled.Title>
          <Coin />
        </Styled.Head>
        <Styled.Info>
          Наша стандартная комиссия 5% + 1,38% комиссия платежной системы для
          новых товаров с фактурой VAT весом до 15 кг Б/у товар доставляется под
          комиссию 16,38% Новый товар без фактуры VAT едет под комиссию 16,38%
          Товар стоимость до 250 плн - стандартная комиссия 250 PLN (касательно
          нового и б/у товара). Габаритный и тяжелый товар просчитывается
          отдельно по запросу.
        </Styled.Info>
      </Styled.Item>
      <Styled.Item $right={-50} $background="#EA0D0D" style={{ zIndex: 2 }}>
        <Styled.Head>
          <Styled.Title>Минимальная предоплаты 30%</Styled.Title>
          <Money />
        </Styled.Head>
        <Styled.Info>
          Наша компания берет минимальную предоплату 30% от общей суммы заказа
          для новых товаров. Остаток оплаты можно оплатить перед отправкой по
          Украине. Предварительно можно заказать фотоотчет заказа (услуга
          платная). Бу товар оплачивается по 100% предоплате Товар из стран
          Евросоюза оплачивается по 50%. Остаток оплачиваем перед отправкой по
          Украине.
        </Styled.Info>
      </Styled.Item>
      <Styled.Item $right={-373} $background="#EA0D0D" style={{ zIndex: 4 }}>
        <Styled.Head>
          <Styled.Title>доставим заказы до 500€ без пошлин</Styled.Title>
          <Note />
        </Styled.Head>
        <Styled.Info>
          Наша компания доставляет товар наземным транспортом в Украину и мы
          можем доставить без оплаты дополнительных пошлин посылки стоимость до
          500 евро. Поможем доставить любой товар стоимость которого не будет
          превышать 500 евро за 1 шт. Если у Вас в заказе несколько наименований
          и их общая стоимость свыше 500 евро - мы также можем помочь в доставке
          данного груза предварительно расконсолидировав его на партии меньшей
          стоимости.
        </Styled.Info>
      </Styled.Item>
    </Styled.Container>
  );
};

export default Description;
