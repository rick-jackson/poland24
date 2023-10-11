import Add from "public/images/icons/add.svg";
import Remove from "public/images/icons/remove.svg";
import DialogCheckBox from "@components/dialogs/inputs/Checkbox";
import DialogTextField from "@components/dialogs/inputs/TextField";
import Button from "@components/UI/buttons";

import * as Styled from "./Article.styled";
import { defaultArticle } from "@common/data/defaultArticle";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";

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
}) => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Styled.Article>
      <Styled.Detail>
        <DialogTextField
          control={control}
          name={`articles[${index}].articleLink`}
          label={`Товар ${index + 1}`}
          placeholder="Вставте ссылку на товар"
          fullWidth
          defaultValue={field.articleLink}
          required
          error={!!errors.articles && errors.articles[index]?.articleLink}
          pattern="/^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w]*)*\/?$/i"
        />
        <DialogTextField
          control={control}
          name={`articles[${index}].articleCount`}
          label="Количество"
          type="number"
          fullWidth
          defaultValue={field.articleCount}
          required
          error={!!errors.articles && errors.articles[index]?.articleCount}
        />
        <DialogTextField
          control={control}
          name={`articles[${index}].articlePrice`}
          label="Стоимость"
          type="number"
          fullWidth
          defaultValue={field.articlePrice}
          required
          error={!!errors.articles && errors.articles[index]?.articlePrice}
        />
        <DialogTextField
          control={control}
          name={`articles[${index}].articleDeliveryPrice`}
          label="Доставка"
          type="number"
          fullWidth
          defaultValue={field.articleDeliveryPrice}
          required
          error={
            !!errors.articles && errors.articles[index]?.articleDeliveryPrice
          }
        />
        <div>234</div>
      </Styled.Detail>
      <DialogTextField
        style={{ marginTop: "8px" }}
        control={control}
        name={`articles[${index}].articleName`}
        placeholder="Название товара"
        defaultValue={field.articleName}
        fullWidth
        required
        error={!!errors.articles && errors.articles[index]?.articleName}
      />
      <DialogCheckBox
        style={{ marginTop: "8px" }}
        control={control}
        name={`articles[${index}].isUsedArticle`}
        label="Товар б/у (комиссия 15%, предоплата 100%)"
        defaultValue={field.isUsedArticle}
      />
      <Styled.Comment>
        <DialogTextField
          control={control}
          name={`articles[${index}].articleDescription`}
          label="Комментарий к товару"
          placeholder="Описание"
          textArea
          fullWidth
          style={{ height: "100%" }}
          defaultValue={field.articleDescription}
          required
          error={
            !!errors.articles && errors.articles[index]?.articleDescription
          }
        />
        <Styled.Total>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Стоимость позиции: </span>
            {isLastField ? (
              <Button
                {...(matches && { size: "medium" })}
                form="circle"
                variant="green"
                style={{ flex: "none" }}
                onClick={() => append(defaultArticle)}
              >
                <Add />
              </Button>
            ) : (
              <Button
                {...(matches && { size: "medium" })}
                onClick={() => remove(index)}
                form="circle"
                style={{ flex: "none" }}
              >
                <Remove />
              </Button>
            )}
          </div>
        </Styled.Total>
      </Styled.Comment>
    </Styled.Article>
  );
};

export default Article;
