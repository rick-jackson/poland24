import Order from "@entities/order";
import { useTranslation } from "next-i18next";
import { OrderName } from "../Title/Title.styled";

import * as Styled from "./Table.styled";

type OrderTableProps = {
  orderData: Order;
  total: number;
};

const OrderTable: React.FC<OrderTableProps> = ({ orderData, total }) => {
  const { t } = useTranslation("order");

  return (
    <Styled.Table>
      <Styled.Head>
        <span></span>
        <span>{t("price")}</span>
        <span>{t("count")}</span>
        <span>{t("sum")}</span>
      </Styled.Head>
      <Styled.Body>
        {orderData.articles.map((el) => (
          <Styled.Row key={el.link}>
            <OrderName href={el.link}>{el.name}</OrderName>
            <Styled.Cell>
              {el.price} {el.currency}
            </Styled.Cell>
            <Styled.Cell>{el.count}</Styled.Cell>
            <Styled.Cell style={{ fontWeight: 500 }}>
              {el.count * el.price} {el.currency}
            </Styled.Cell>
          </Styled.Row>
        ))}
      </Styled.Body>
    </Styled.Table>
    // <table style={{ width: "100%" }}>
    //   <thead>
    //     <tr>
    //       <th></th>
    //       <th style={{ textAlign: "left" }}>{t("price")}</th>
    //       <th style={{ textAlign: "left" }}>{t("count")}</th>
    //       <th style={{ textAlign: "left" }}>{t("sum")}</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {orderData.articles.map((el) => {
    //       const sum = el.count * el.price;
    //       total += sum;

    //       return (
    //         <tr key={el.link}>
    //           <td>
    //             <OrderName href={el.link}>{el.name}</OrderName>
    //           </td>
    //           <td>{el.price} {el.currency}</td>
    //           <td>{el.count}</td>
    //           <td>{sum} {el.currency}</td>
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    // </table>
  );
};

export default OrderTable;
