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
      {ordersData.map((order) => (
        //@ts-ignore
        <Accordion
          key={order.id}
          title={<OrderTitle orderData={order} />}
          sx={{ padding: "0 16px" }}
        >
          {<OrderDescription orderData={order} />}
        </Accordion>
      ))}
    </section>
  );
};

export default Orders;
