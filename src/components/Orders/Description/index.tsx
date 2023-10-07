import type OrderType from "@entities/order";
import Title from "@components/dialogs/Title";
import { useTranslation } from "next-i18next";
import Button from "@components/UI/buttons";
import * as Styled from "./Description.styled";
import OrderTable from "../Table";
import Order from "@components/Layout/Header/Order";

type OrderDescriptionProps = {
  orderData: OrderType;
  total: number;
};

const OrderDescription: React.FC<OrderDescriptionProps> = ({
  orderData,
  total,
}) => {
  const { t } = useTranslation("order");

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
          <OrderTable orderData={orderData} total={total} />
          <Styled.Total>
            {t("total")}: {total} грн
          </Styled.Total>
        </Styled.Articles>
      </Styled.Content>
      <Styled.Buttons>
        <Order text={t("edit")} size="medium" defaultValues={orderData} />
        <Button size="medium">{t("pay")}</Button>
      </Styled.Buttons>
    </>
  );
};

export default OrderDescription;
