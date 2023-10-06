import type Order from "@entities/order";
import Title from "@components/dialogs/Title";
import { useTranslation } from "next-i18next";
import { OrderName } from "../Title/Title.styled";
import Button from "@components/UI/buttons";
import * as Styled from "./Description.styled";

type OrderDescriptionProps = {
  orderData: Order;
};

const OrderDescription: React.FC<OrderDescriptionProps> = ({ orderData }) => {
  const { t } = useTranslation("order");
  let total = 0;

  return (
    <>
      <Styled.Content>
        <Styled.DeliveryInfo>
          <Title title={t("orderInfo")} />
          <span>
            <Styled.Text>{t("carrier")}: </Styled.Text>
            <Styled.BoldText>{t("novaPoshta")}</Styled.BoldText>
          </span>
          <span>
            <Styled.Text>{t("address")}: </Styled.Text>
            <Styled.BoldText>{orderData.post}</Styled.BoldText>
          </span>
          <span>
            <Styled.Text>{t("recipient")}: </Styled.Text>
            <Styled.BoldText>{orderData.fullName}</Styled.BoldText>
          </span>
          <span>
            <Styled.Text>{t("phone")}: </Styled.Text>
            <Styled.BoldText>{orderData.phone}</Styled.BoldText>
          </span>
          <span>
            <Styled.Text>{t("email")}: </Styled.Text>
            <Styled.BoldText>{orderData.email}</Styled.BoldText>
          </span>
        </Styled.DeliveryInfo>
        <Styled.Articles>
          <Title title={t("order")} />
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
                      <OrderName href={el.articleLink}>
                        {el.articleName}
                      </OrderName>
                    </td>
                    <td>{el.articlePrice} грн</td>
                    <td>{el.articleCount}</td>
                    <td>{sum} грн</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Styled.Total>
            {t("total")}: {total} грн
          </Styled.Total>
        </Styled.Articles>
      </Styled.Content>
      <Styled.Buttons>
        <Button size="medium" variant="secondary">
          {t("edit")}
        </Button>
        <Button size="medium">{t("pay")}</Button>
      </Styled.Buttons>
    </>
  );
};

export default OrderDescription;
