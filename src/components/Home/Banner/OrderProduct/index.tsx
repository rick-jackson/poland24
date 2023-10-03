import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";

import TextField from "@components/UI/inputs/TextField";
import Button from "@components/UI/buttons";
import theme from "@theme/index";

import * as Styled from "./OrderProduct.styled";

const OrderProduct: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation("banner");

  return (
    <Styled.Container>
      <TextField name="article" placeholder={t("linkPlaceholder")} fullWidth />
      <Button size="medium" {...(matches && { fullWidth: true })}>
        {t("order")}
      </Button>
    </Styled.Container>
  );
};

export default OrderProduct;
