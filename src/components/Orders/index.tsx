import Accordion from "@components/Accordion";
import type Order from "@entities/order";
import OrderTitle from "./Title";
import OrderDescription from "./Description";

type OrdersProps = {
  ordersData: Order[];
};

const Orders: React.FC<OrdersProps> = ({ ordersData }) => {
  return (
    <section style={{ background: "#fff", marginTop: "16px" }}>
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
    </section>
  );
};

export default Orders;
