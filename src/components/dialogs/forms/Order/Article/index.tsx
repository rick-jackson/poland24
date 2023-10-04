import Add from "public/images/icons/add.svg";
import Remove from "public/images/icons/remove.svg";
import DialogCheckBox from "@components/dialogs/inputs/Checkbox";
import DialogTextField from "@components/dialogs/inputs/TextField";
import Button from "@components/UI/buttons";
import { Divider } from "../Title/Title.styled";

import * as Styled from "./Article.styled";
import { defaultArticle } from "@common/data/defaultArticle";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";

type ArticleProps = {
  control: any;
  index: number;
  append: any;
  remove: any;
  isLastField: boolean;
} & any;

const Article: React.FC<ArticleProps> = ({
  control,
  index,
  append,
  remove,
  isLastField,
}) => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Styled.Article>
      <Styled.Detail>
        <DialogTextField
          control={control}
          name="article"
          label={`Товар ${index + 1}`}
          placeholder="Вставте ссылку на товар"
          fullWidth
        />
        <DialogTextField
          control={control}
          name="count"
          label="Количество"
          type="number"
          fullWidth
        />
        <DialogTextField
          control={control}
          name="price"
          label="Стоимость"
          type="number"
          fullWidth
        />
        <DialogTextField
          control={control}
          name="delivery"
          label="Доставка"
          type="number"
          fullWidth
        />
        <div>234</div>
      </Styled.Detail>
      <DialogCheckBox
        style={{ marginTop: "8px" }}
        control={control}
        name="isUsed"
        label="Товар б/у (комиссия 15%, предоплата 100%)"
      />
      <Styled.Comment>
        <DialogTextField
          control={control}
          name="description"
          label="Комментарий к товару"
          placeholder="Описание"
          textArea
          fullWidth
          style={{ height: "100%" }}
        />
        <Styled.Feedback>
          <span>Доставка по Украине : Новой почтой</span>
          <span>Удобный канал для обратной связи:</span>
          <Styled.Checkboxes>
            <DialogCheckBox control={control} name="email" label="Почта" />
            <DialogCheckBox control={control} name="viber" label="Вайбер" />
            <DialogCheckBox
              control={control}
              name="telegram"
              label="Телеграм"
            />
          </Styled.Checkboxes>
          <Divider style={{ margin: 0 }} />
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
        </Styled.Feedback>
      </Styled.Comment>
    </Styled.Article>
  );
};

export default Article;
