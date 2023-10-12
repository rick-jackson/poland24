import theme from "@theme/index";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import * as Styled from "./Description.styled";

const Description: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Styled.Container>
      <Styled.Item
        $right={matches ? -700 : -610}
        $background="#BB0A0A"
        style={{ zIndex: 5 }}
      >
        <Styled.Head>
          <Styled.Title>
            Возможность оплатить кредитными средствами
          </Styled.Title>
          <Styled.Info>
            Оплата за заказы у нас производится посредством платежной системы
            PayU. Вы можете вносить оплату как личными , так и кредитными
            средствами (без оплаты каких-либо комиссий за использование
            кредитных средств).
          </Styled.Info>
        </Styled.Head>
        <Styled.Logo>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/images/icons/perspective_matte clock.png"
            alt="dfg"
          />
        </Styled.Logo>
      </Styled.Item>
      <Styled.Item
        $right={matches ? -500 : -300}
        $background="#BB0A0A"
        style={{ zIndex: 3 }}
      >
        <Styled.Head>
          <Styled.Title>Доставка товара за 5-10 дней</Styled.Title>
          <Styled.Info>
            Доставка товара в Украину 5-10 дней с момента оформления заказа.
            наша компания старается оперативно доставлять заказы в Украину.
            Среднее время доставки от момента оформления заказа до поставки к
            нам на склад в Украине 5-10 дней.
          </Styled.Info>
        </Styled.Head>
        <Styled.Logo>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/images/icons/Money_perspective_matte_s car.png"
            alt="dfg"
            priority
          />
        </Styled.Logo>
      </Styled.Item>
      <Styled.Item
        $right={matches ? -300 : 0}
        $background="#EE3D3D"
        style={{ zIndex: 1 }}
      >
        <Styled.Head>
          <Styled.Title>Комиссия 6,38%</Styled.Title>
          <Styled.Info>
            Наша стандартная комиссия 5% + 1,38% комиссия платежной системы для
            новых товаров с фактурой VAT весом до 15 кг Б/у товар доставляется
            под комиссию 16,38% Новый товар без фактуры VAT едет под комиссию
            16,38% Товар стоимость до 250 плн - стандартная комиссия 250 PLN
            (касательно нового и б/у товара).
          </Styled.Info>
        </Styled.Head>
        <Styled.Logo>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/images/icons/Money_perspective_matte_s coin.png"
            alt="dfg"
          />
        </Styled.Logo>
      </Styled.Item>
      <Styled.Item
        $right={matches ? -400 : -150}
        $background="#EA0D0D"
        style={{ zIndex: 2 }}
      >
        <Styled.Head>
          <Styled.Title>Минимальная предоплаты 30%</Styled.Title>
          <Styled.Info>
            Наша компания берет минимальную предоплату 30% от общей суммы заказа
            для новых товаров. Остаток оплаты можно оплатить перед отправкой по
            Украине. Предварительно можно заказать фотоотчет заказа (услуга
            платная). Бу товар оплачивается по 100% предоплате Товар из стран
            Евросоюза оплачивается по 50%. Остаток оплачиваем перед отправкой по
            Украине.
          </Styled.Info>
        </Styled.Head>
        <Styled.Logo>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/images/icons/Money_perspective_matte_s money.png"
            alt="dfg"
          />
        </Styled.Logo>
      </Styled.Item>
      <Styled.Item
        $right={matches ? -600 : -460}
        $background="#EA0D0D"
        style={{ zIndex: 4 }}
      >
        <Styled.Head>
          <Styled.Title>доставим заказы до 500€ без пошлин</Styled.Title>
          <Styled.Info>
            Наша компания доставляет товар наземным транспортом в Украину и мы
            можем доставить без оплаты дополнительных пошлин посылки стоимость
            до 500 евро. Поможем доставить любой товар стоимость которого не
            будет превышать 500 евро за 1 шт. Если у Вас в заказе несколько
            наименований и их общая стоимость свыше 500 евро - мы также можем
            помочь в доставке данного груза.
          </Styled.Info>
        </Styled.Head>
        <Styled.Logo>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/images/icons/Money_perspective_matte_s note.png"
            alt="dfg"
          />
        </Styled.Logo>
      </Styled.Item>
    </Styled.Container>
  );
};

export default Description;
