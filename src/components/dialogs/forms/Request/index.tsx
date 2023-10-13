import { useFieldArray, useForm } from "react-hook-form";
import Title from "@components/dialogs/Title";
import Button from "@components/UI/buttons";
import DialogTextField from "@components/dialogs/inputs/TextField";
import Remove from "public/images/icons/remove.svg";
import * as Styled from "./RequestForm.styled";

const RequestForm: React.FC = () => {
  const { control } = useForm({
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      articles: [{ articleName: "", comment: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "articles",
  });

  return (
    <Styled.FormContainer>
      <Styled.SectionContainer>
        <Title title="Контактна інформація" />
        <Styled.UserFields>
          <DialogTextField
            control={control}
            name="name"
            label="Ім'я"
            placeholder="Ім'я"
            fullWidth
          />
          <DialogTextField
            control={control}
            name="phoneNumber"
            label="Телефон"
            placeholder="Телефон"
            fullWidth
          />
          <DialogTextField
            control={control}
            name="email"
            label="Email"
            placeholder="Email"
            fullWidth
          />
        </Styled.UserFields>
      </Styled.SectionContainer>
      <Styled.GridContainer>
        {fields.map((field, index) => (
          <Styled.Article key={index}>
            <Title title={`Товар ${index + 1}`} />
            <DialogTextField
              control={control}
              name={`articles[${index}].articleName`}
              label="Посилання на товар або найменування товару/артикул"
              fullWidth
            />
            <Styled.ArticleComment>
              <DialogTextField
                control={control}
                name={`articles[${index}].comment`}
                label="Коментар до товару"
                placeholder="Коментар до товару"
                textArea
                fullWidth
              />
              {index > 0 && (
                <Button
                  style={{ flex: "none" }}
                  onClick={() => remove(index)}
                  form="circle"
                  type="button"
                >
                  <Remove />
                </Button>
              )}
            </Styled.ArticleComment>
          </Styled.Article>
        ))}
      </Styled.GridContainer>
      <Styled.ButtonContainer>
        <Button
          variant="secondary"
          type="button"
          onClick={() => append({ articleName: "", comment: "" })}
        >
          Додати товар
        </Button>
        <Button>Надіслати</Button>
      </Styled.ButtonContainer>
    </Styled.FormContainer>
  );
};

export default RequestForm;
