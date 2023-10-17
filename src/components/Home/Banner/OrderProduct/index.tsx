import { useTranslation } from "next-i18next";
import { useState } from "react";

import Order from "@components/Layout/Header/Order";
import TextField from "@components/UI/inputs/TextField";
import { defaultOrder } from "@common/data/defaultOrder";
import { defaultArticle } from "@common/data/defaultArticle";

import * as Styled from "./OrderProduct.styled";

const OrderProduct: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
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
          articles: [{ ...defaultArticle, link: inputValue }],
        }}
        disabled={!inputValue}
      />
    </Styled.Container>
  );
};

export default OrderProduct;
