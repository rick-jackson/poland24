import DialogTextField from "@components/dialogs/inputs/TextField";
import DialogCheckBox from "@components/dialogs/inputs/Checkbox";
import Article from "../Article";
import { useTranslation } from "next-i18next";

import * as Styled from "./Inputs.styled";
import { useFieldArray } from "react-hook-form";
import Title from "@components/dialogs/Title";
import { useEffect, useState } from "react";
import { getExchangeRate } from "@gateways/getExchangeRate";

const OrderFormInputs = ({ control, register, errors, watch, setValue }) => {
  const [totalSum, setTotalSum] = useState(0);
  const [exchangeRate, setExchangeRate] = useState<Record<string, unknown>[]>([
    { rate: 0 },
    { rate: 0 },
  ]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "articles",
  });

  useEffect(() => {
    (async () => {
      try {
        const data: Record<string, unknown>[] = await getExchangeRate();
        setExchangeRate(
          data.filter((el) => el.cc === "PLN" || el.cc === "EUR")
        );
      } catch (e) {
        setExchangeRate([]);
      }
    })();
  }, []);

  const { t } = useTranslation("order");

  return (
    <>
      <Title title={t("orderCount")} />
      {fields.map((field, index: number) => (
        <Article
          key={index}
          control={control}
          index={index}
          append={append}
          remove={remove}
          register={register}
          field={field}
          isLastField={fields.length - 1 === index}
          errors={errors}
          watch={watch}
          setValue={setValue}
          setTotalSum={setTotalSum}
          totalSum={totalSum}
          exchangeRate={exchangeRate}
        />
      ))}
      <Styled.Total>
        <Styled.BoldText>{t("deliveryThroughoutUkraine")}</Styled.BoldText>
        <div>
          <Styled.BoldText>{t("feedbackChannel")}</Styled.BoldText>
          <Styled.Checkboxes>
            <DialogCheckBox
              control={control}
              name="isEmail"
              label={t("post")}
            />
            <DialogCheckBox
              control={control}
              name="isViber"
              label={t("viber")}
            />
            <DialogCheckBox
              control={control}
              name="isTelegram"
              label={t("telegram")}
            />
          </Styled.Checkboxes>
        </div>
        <div style={{ display: "flex", gap: "8px", fontWeight: 500 }}>
          <Styled.BoldText>
            {t("approximately")}, ₴
            <span
              style={{ fontSize: "24px", fontWeight: 700, display: "block" }}
            >
              {Object.values(totalSum)
                .reduce((acc, value) => {
                  return (acc += value);
                }, 0)
                .toFixed(2)}
            </span>
          </Styled.BoldText>
        </div>
      </Styled.Total>
      <Title title={t("customerData")} />
      <Styled.Customer>
        <DialogTextField
          control={control}
          name="fullName"
          placeholder={t("fullName")}
          fullWidth
          required
          error={!!errors.fullName}
        />
        <DialogTextField
          control={control}
          name="phone"
          placeholder={t("phoneNumber")}
          type="tel"
          fullWidth
          required
          error={!!errors.phone}
        />
        <DialogTextField
          control={control}
          name="email"
          placeholder="Email"
          type="email"
          fullWidth
        />
        <DialogTextField
          control={control}
          name="post"
          placeholder={t("city")}
          fullWidth
          required
          error={!!errors.post}
        />
        <DialogTextField
          control={control}
          name="reservedPost"
          placeholder={t("reservedPost")}
          fullWidth
        />
      </Styled.Customer>
      <Styled.License>
        <DialogTextField
          textArea
          control={control}
          name="comment"
          placeholder={t("comment")}
          fullWidth
          style={{ height: "100%" }}
        />
        <div
          style={{
            flex: "none",
            display: "flex",
            gap: "8px",
            flexDirection: "column",
          }}
        >
          <DialogCheckBox
            name="isCall"
            control={control}
            label={t("notCall")}
            style={{ fontSize: "12px" }}
          />
          <DialogCheckBox
            name="isLicense"
            control={control}
            label={t("terms")}
            style={{ fontSize: "12px" }}
          />

          <Styled.List>
            {new Array(6).fill(null).map((_, index) => (
              <Styled.ListItem key={index}>
                {t(`info${index + 1}`)}
              </Styled.ListItem>
            ))}
          </Styled.List>
        </div>
      </Styled.License>
    </>
  );
};

export default OrderFormInputs;
