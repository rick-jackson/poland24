import { useFieldArray, useForm } from "react-hook-form";
import Title from "./Title";
import Article from "./Article";
import { defaultArticle } from "@common/data/defaultArticle";
import DialogTextField from "@components/dialogs/inputs/TextField";
import DialogCheckBox from "@components/dialogs/inputs/Checkbox";
import Button from "@components/UI/buttons";
import * as Styled from "./Order.styled";

const OrderForm: React.FC = () => {
  const { control, register } = useForm({
    defaultValues: {
      articles: [defaultArticle],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "articles",
  });

  return (
    <div>
      <Title title="Заказ" />
      {fields.map((_, index: number) => (
        <Article
          key={index}
          control={control}
          index={index}
          append={append}
          remove={remove}
          isLastField={fields.length - 1 === index}
        />
      ))}
      <Title title="Данные заказчика" />
      <Styled.Customer>
        <DialogTextField
          control={control}
          name="lastName"
          placeholder="Фамилия"
          fullWidth
        />
        <DialogTextField
          control={control}
          name="phone"
          placeholder="Номер телефона"
          type="tel"
          fullWidth
        />
        <DialogTextField
          control={control}
          name="email"
          placeholder="email"
          type="email"
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
            name="license"
            control={control}
            label="Я соглашаюсь и принимаю коммерческие условия покупки и доставки*"
            style={{ fontSize: "12px" }}
          />

          <ul
            style={{
              padding: 0,
              margin: 0,
              fontSize: "12px",
              color: "rgba(45, 45, 45, 0.60)",
            }}
          >
            <li>
              Комиссия сервиса для товаров с фактурой VAT стоимостью от 250zł:
              6,38%
            </li>
            <li>
              Комиссия сервиса для товаров с фактурой VAT стоимостью до 250zl :
              50zł.
            </li>
            <li>
              Комиссия сервиса для товаров без фактуры VAT стоимостью от 250zl:
              15%
            </li>
            <li>
              Вы должны будете внести предоплату в размере(для новых товаров):
              30%
            </li>
            <li>
              Вы должны будете внести предоплату в размере(для б/у товаров):
              100%
            </li>
            <li>Крупногабаритные и б/у товары не подлежат возврату.</li>
          </ul>
        </div>
      </Styled.License>
      <Button style={{ margin: "auto", marginTop: "16px" }} type="submit">
        Отправить
      </Button>
    </div>
  );
};

export default OrderForm;
