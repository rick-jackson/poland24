import Order from "@entities/order";
import { useTranslation } from "next-i18next";
import { OrderName } from "../Title/Title.styled";

type OrderTableProps = {
  orderData: Order;
  total: number;
};

const OrderTable: React.FC<OrderTableProps> = ({ orderData, total }) => {
  const { t } = useTranslation("order");

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th></th>
          <th style={{ textAlign: "left" }}>{t("price")}</th>
          <th style={{ textAlign: "left" }}>{t("count")}</th>
          <th style={{ textAlign: "left" }}>{t("sum")}</th>
        </tr>
      </thead>
      <tbody>
        {orderData.articles.map((el) => {
          const sum = el.articleCount * el.articlePrice;
          total += sum;

          return (
            <tr key={el.articleLink}>
              <td>
                <OrderName href={el.articleLink}>{el.articleName}</OrderName>
              </td>
              <td>{el.articlePrice} грн</td>
              <td>{el.articleCount}</td>
              <td>{sum} грн</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default OrderTable;
