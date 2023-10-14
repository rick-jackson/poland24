import Add from "public/images/icons/add.svg";
import Remove from "public/images/icons/remove.svg";
import DialogCheckBox from "@components/dialogs/inputs/Checkbox";
import DialogTextField from "@components/dialogs/inputs/TextField";
import Button from "@components/UI/buttons";

import * as Styled from "./Article.styled";
import { defaultArticle } from "@common/data/defaultArticle";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import { useEffect, useState } from "react";
import { calculateTotalCost } from "@common/utils/calculateTotalCost";
import DialogSwitch from "@components/dialogs/inputs/Switch";
import { useTranslation } from "next-i18next";

type ArticleProps = {
  control: any;
  index: number;
  append: any;
  remove: any;
  register: any;
  isLastField: boolean;
} & any;

const Article: React.FC<ArticleProps> = ({
  control,
  index,
  append,
  remove,
  isLastField,
  field,
  errors,
  watch,
  setValue,
  setTotalSum,
  totalSum,
  exchangeRate,
}) => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [total, setTotal] = useState<number>(0);

  const toggleCurrency = () => {
    setValue(
      `articles[${index}].currency`,
      watch(`articles[${index}].currency`) === "€" ? "zł" : "€"
    );
  };

  const [eur, pln] = exchangeRate;

  const productPrice = +watch(`articles[${index}].price`);
  const shippingCost = +watch(`articles[${index}].deliveryPrice`);
  const count = +watch(`articles[${index}].count`);
  const isUsedArticle = watch(`articles[${index}].isUsed`);
  const currency = watch(`articles[${index}].currency`);

  useEffect(() => {
    const totalArticle =
      calculateTotalCost(
        productPrice,
        shippingCost,
        currency,
        [pln.rate, eur.rate],
        isUsedArticle
      ) * count;
    setTotal(totalArticle);
    setTotalSum({ ...totalSum, [`article${index}`]: totalArticle });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productPrice, shippingCost, currency, isUsedArticle, count]);

  const { t } = useTranslation("order");

  return (
    <Styled.Article>
      <Styled.Detail>
        <DialogTextField
          control={control}
          name={`articles[${index}].link`}
          label={`Товар ${index + 1}`}
          placeholder={t("articleLink")}
          fullWidth
          defaultValue={field.link}
          required
          error={!!errors.articles && errors.articles[index]?.link}
        />
        <DialogTextField
          control={control}
          name={`articles[${index}].count`}
          label={t("articleCount")}
          type="number"
          fullWidth
          defaultValue={field.count}
          required
          error={!!errors.articles && errors.articles[index]?.count}
        />
        <DialogTextField
          control={control}
          name={`articles[${index}].price`}
          label={`${t("articlePrice")}, ${currency}`}
          type="number"
          fullWidth
          defaultValue={field.price}
          required
          error={!!errors.articles && errors.articles[index]?.price}
        />
        <DialogTextField
          control={control}
          name={`articles[${index}].deliveryPrice`}
          label={`${t("delivery")}, ${currency}`}
          type="number"
          fullWidth
          defaultValue={field.deliveryPrice}
          required
          error={!!errors.articles && errors.articles[index]?.deliveryPrice}
        />
        <Styled.Currency>
          <span>
            {t("priceIn")} {currency}
          </span>
          <DialogSwitch
            control={control}
            name="currency"
            onChange={toggleCurrency}
            style={{ margin: "auto 0 !important" }}
          />
        </Styled.Currency>
      </Styled.Detail>
      <DialogTextField
        style={{ marginTop: "8px" }}
        control={control}
        name={`articles[${index}].name`}
        placeholder="Название товара"
        defaultValue={field.name}
        fullWidth
        required
        error={!!errors.articles && errors.articles[index]?.name}
      />
      <DialogCheckBox
        style={{ marginTop: "8px" }}
        control={control}
        name={`articles[${index}].isUsed`}
        label={t("usedArticle")}
        defaultValue={field.isUsed}
      />
      <Styled.Comment>
        <DialogTextField
          control={control}
          name={`articles[${index}].description`}
          label={t("articleComment")}
          placeholder={t("commentDescription")}
          textArea
          fullWidth
          style={{ height: "100%" }}
          defaultValue={field.description}
          required
          error={!!errors.articles && errors.articles[index]?.description}
        />
        <Styled.Total>
          {t("positionPrice")}
          <span style={{ fontSize: "24px" }}>₴ {total}</span>
          <span style={{ fontSize: "24px" }}>
            {currency}{" "}
            {(+total / (currency === "zł" ? +pln.rate : +eur.rate)).toFixed(2)}
          </span>
        </Styled.Total>
        {isLastField ? (
          <Button
            {...(matches && { size: "medium" })}
            form="circle"
            type="button"
            variant="green"
            onClick={() => append(defaultArticle)}
            style={{ marginTop: "auto", ...(matches && { gridRowStart: 2 }) }}
          >
            <Add />
          </Button>
        ) : (
          <Button
            {...(matches && { size: "medium" })}
            onClick={() => remove(index + 1)}
            form="circle"
            type="button"
            style={{ marginTop: "auto" }}
          >
            <Remove />
          </Button>
        )}
      </Styled.Comment>
    </Styled.Article>
  );
};

export default Article;
