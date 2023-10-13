import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";

import TextField from "@components/UI/inputs/TextField";
import Button from "@components/UI/buttons";
import theme from "@theme/index";

import * as Styled from "./OrderProduct.styled";
import { useState } from "react";
import Order from "@components/Layout/Header/Order";
import { defaultOrder } from "@common/data/defaultOrder";
import { defaultArticle } from "@common/data/defaultArticle";

const OrderProduct: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation("banner");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Styled.Container>
      <TextField
        onChange={handleChange}
        name="article"
        placeholder={t("linkPlaceholder")}
        fullWidth
      />
      <Order
        size="medium"
        text={t("order")}
        defaultValues={{
          ...defaultOrder(),
          articles: [{ ...defaultArticle, articleLink: inputValue }],
        }}
        disabled={!inputValue}
      />
    </Styled.Container>
  );
};

export default OrderProduct;
