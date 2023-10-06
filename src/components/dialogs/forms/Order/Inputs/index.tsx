import DialogTextField from "@components/dialogs/inputs/TextField";
import DialogCheckBox from "@components/dialogs/inputs/Checkbox";
import Article from "../Article";

import * as Styled from "./Inputs.styled";
import { useFieldArray } from "react-hook-form";
import Title from "@components/dialogs/Title";

const OrderFormInputs = ({ control, register, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "articles",
  });

  return (
    <>
      <Title title="Заказ" />
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
        />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "12px",
        }}
      >
        <span>Доставка по Украине : Новой почтой</span>
        <div>
          <span>Удобный канал для обратной связи:</span>
          <Styled.Checkboxes>
            <DialogCheckBox control={control} name="isEmail" label="Почта" />
            <DialogCheckBox control={control} name="isViber" label="Вайбер" />
            <DialogCheckBox
              control={control}
              name="isTelegram"
              label="Телеграм"
            />
          </Styled.Checkboxes>
        </div>
        <div style={{ display: "flex", gap: "8px", fontWeight: 500 }}>
          <span>Ориентировочно, zł</span>
          <span>Ориентировочно, ₴</span>
        </div>
      </div>
      <Title title="Данные заказчика" />
      <Styled.Customer>
        <DialogTextField
          control={control}
          name="fullName"
          placeholder="Фамилия"
          fullWidth
          required
          error={!!errors.fullName}
        />
        <DialogTextField
          control={control}
          name="phone"
          placeholder="Номер телефона"
          type="tel"
          fullWidth
          required
          error={!!errors.phone}
        />
        <DialogTextField
          control={control}
          name="email"
          placeholder="email"
          type="email"
          fullWidth
        />
        <DialogTextField
          control={control}
          name="post"
          placeholder="Город и отделение новой почты"
          fullWidth
          required
          error={!!errors.post}
        />
        <DialogTextField
          control={control}
          name="reservedPost"
          placeholder="Резервное грузовое отделение"
          fullWidth
        />
      </Styled.Customer>
      <Styled.License>
        <DialogTextField
          textArea
          control={control}
          name="comment"
          placeholder="Комментарий"
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
            label="Не перезванивайте мне, я подтверждаю заказа."
            style={{ fontSize: "12px" }}
          />
          <DialogCheckBox
            name="isLicense"
            control={control}
            label="Я соглашаюсь и принимаю коммерческие условия покупки и доставки*"
            style={{ fontSize: "12px" }}
          />

          <Styled.List>
            <Styled.ListItem>
              Комиссия сервиса для товаров с фактурой VAT стоимостью от 250zł:
              6,38%
            </Styled.ListItem>
            <Styled.ListItem>
              Комиссия сервиса для товаров с фактурой VAT стоимостью до 250zl :
              50zł.
            </Styled.ListItem>
            <Styled.ListItem>
              Комиссия сервиса для товаров без фактуры VAT стоимостью от 250zl:
              15%
            </Styled.ListItem>
            <Styled.ListItem>
              Вы должны будете внести предоплату в размере(для новых товаров):
              30%
            </Styled.ListItem>
            <Styled.ListItem>
              Вы должны будете внести предоплату в размере(для б/у товаров):
              100%
            </Styled.ListItem>
            <Styled.ListItem>
              Крупногабаритные и б/у товары не подлежат возврату.
            </Styled.ListItem>
          </Styled.List>
        </div>
      </Styled.License>
    </>
  );
};

export default OrderFormInputs;
