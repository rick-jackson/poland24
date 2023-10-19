import { format } from "date-fns";
import { useTranslation } from "next-i18next";

import { FULL_DATE } from "@common/data/dateFormat";
import { Status as StatusEnum } from "@entities/order";
import { STATUS_LABELS_COLORS } from "@common/configs/colors";

import * as Styled from "./Status.styled";

const Status = ({ orderNumber, dateCreated, status }) => {
  const { t } = useTranslation("order");

  return (
    <div style={{display: 'flex'}}>
      <Styled.Divider $color={STATUS_LABELS_COLORS[status]} />
      <Styled.Status>
        <Styled.Text>
          №{orderNumber} {t("from")} {format(+dateCreated, FULL_DATE)}
        </Styled.Text>
        <Styled.BoldText>{t(StatusEnum[status])}</Styled.BoldText>
      </Styled.Status>
    </div>
  );
};

export default Status;
