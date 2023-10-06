import type Order from "@entities/order";
import * as Styled from "./Title.styled";
import { format } from "date-fns";
import { Status } from "@entities/order";
import { useTranslation } from "next-i18next";
import { STATUS_LABELS_COLORS } from "@common/configs/colors";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";

type OrderTitleProps = {
  orderData: Order;
};

const OrderTitle: React.FC<OrderTitleProps> = ({ orderData }) => {
  const { articles, status, dateCreated, orderNumber } = orderData;
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation("order");

  const total = (
    <Styled.ColumnText style={{ marginLeft: "auto" }}>
      <Styled.Text>{t("orderSum")}</Styled.Text>
      <Styled.BoldText>
        {articles.reduce((acc, { articlePrice, articleCount }) => {
          const sum = +articlePrice * articleCount;
          return (acc += sum);
        }, 0)}
      </Styled.BoldText>
    </Styled.ColumnText>
  );

  return (
    <Styled.Content>
      <Styled.Info>
        <Styled.Divider $color={STATUS_LABELS_COLORS[status]} />
        <Styled.ColumnText>
          <Styled.Text>
            №{orderNumber} {t("from")} {format(+dateCreated, "dd.MM.yyyy")}
          </Styled.Text>
          <Styled.BoldText>{t(Status[status])}</Styled.BoldText>
        </Styled.ColumnText>
          {matches && total}
      </Styled.Info>
      <Styled.OrderName href={articles[0].articleLink}>
        {articles[0].articleName}
      </Styled.OrderName>
      {!matches && total}
    </Styled.Content>
  );
};

export default OrderTitle;
