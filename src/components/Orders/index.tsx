import Accordion from "@components/Accordion";
import type Order from "@entities/order";
import OrderTitle from "./Title";
import OrderDescription from "./Description";
import { useTranslation } from "next-i18next";

import * as Styled from "./Orders.styled";

type OrdersProps = {
  ordersData: Order[];
};

const Orders: React.FC<OrdersProps> = ({ ordersData }) => {
  const { t } = useTranslation("order");

  return (
    <Styled.Wrapper>
      {!ordersData.length && (
        <Styled.NoOrders>{t('emptyList')}</Styled.NoOrders>
      )}
      <Styled.OrdersList>
        {ordersData.map((order) => {
          const total = order.articles.reduce(
            (acc, { articlePrice, articleCount }) => {
              const sum = +articlePrice * articleCount;
              return (acc += sum);
            },
            0
          );

          return (
            //@ts-ignore
            <Accordion
              key={order.id}
              title={<OrderTitle orderData={order} total={total} />}
              sx={{ padding: "0 16px" }}
            >
              {<OrderDescription orderData={order} total={total} />}
            </Accordion>
          );
        })}
      </Styled.OrdersList>
    </Styled.Wrapper>
  );
};

export default Orders;
