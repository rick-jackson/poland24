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
        <Accordion
          key={order.id}
          //@ts-ignore
          title={<OrderTitle orderData={order} />}
          description={<OrderDescription orderData={order} />}
          sx={{ padding: "0 16px" }}
        />
      ))}
    </section>
  );
};

export default Orders;
