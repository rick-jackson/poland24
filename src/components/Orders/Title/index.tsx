import { format } from "date-fns";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";

import type Order from "@entities/order";
import theme from "@theme/index";
import { Status } from "@entities/order";
import { FULL_DATE } from "@common/data/dateFormat";
import { STATUS_LABELS_COLORS } from "@common/configs/colors";

import * as Styled from "./Title.styled";

type OrderTitleProps = {
  orderData: Order;
  total: string;
};

const OrderTitle: React.FC<OrderTitleProps> = ({ orderData, total }) => {
  const { articles, status, dateCreated, orderNumber } = orderData;
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation("order");

  const totalBlock = (
    <Styled.ColumnText style={{ marginLeft: "auto" }}>
      <Styled.Text>{t("orderSum")}</Styled.Text>
      <Styled.BoldText>{total}</Styled.BoldText>
    </Styled.ColumnText>
  );

  return (
    <Styled.Content>
      <Styled.Info>
        <Styled.Divider $color={STATUS_LABELS_COLORS[status]} />
        <Styled.ColumnText>
          <Styled.Text>
            №{orderNumber} {t("from")} {format(+dateCreated, FULL_DATE)}
          </Styled.Text>
          <Styled.BoldText>{t(Status[status])}</Styled.BoldText>
        </Styled.ColumnText>
        {matches && totalBlock}
      </Styled.Info>
      <Styled.OrderName href={articles[0].link}>
        {articles[0].name}
      </Styled.OrderName>
      {!matches && totalBlock}
    </Styled.Content>
  );
};

export default OrderTitle;
