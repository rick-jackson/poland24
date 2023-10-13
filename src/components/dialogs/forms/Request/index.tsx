import { useFieldArray, useForm } from "react-hook-form";
import Title from "@components/dialogs/Title";
import Button from "@components/UI/buttons";
import DialogTextField from "@components/dialogs/inputs/TextField";
import Remove from "public/images/icons/remove.svg";
import * as Styled from "./RequestForm.styled";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@firebase";
import { filterEmptyParam } from "@common/utils/filterEmpryParams";
import { enqueueSnackbar } from "notistack";
import { defaultRequest } from "@common/data/defaultRequest";
import { useState } from "react";

const RequestForm: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: defaultRequest,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "articles",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(async (data) => {
      setLoading(true);
      try {
        const requestRef = doc(collection(db, "request"));
        await setDoc(requestRef, {
          ...filterEmptyParam(data),
        });
        enqueueSnackbar("Request added!", { variant: "success" });
        reset(defaultRequest);
      } catch (e) {
        enqueueSnackbar(e.message, { variant: "error" });
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <Styled.FormContainer onSubmit={handleSubmit}>
      <Styled.SectionContainer>
        <Title title="Контактна інформація" />
        <Styled.UserFields>
          <DialogTextField
            control={control}
            name="name"
            label="Ім'я"
            placeholder="Ім'я"
            fullWidth
            required
            error={!!errors.name}
          />
          <DialogTextField
            control={control}
            name="phoneNumber"
            label="Телефон"
            placeholder="Телефон"
            fullWidth
            required
            error={!!errors.phoneNumber}
          />
          <DialogTextField
            control={control}
            name="email"
            label="Email"
            placeholder="Email"
            fullWidth
            required
            error={!!errors.email}
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
              required
              error={!!errors.articles && !!errors.articles[index]?.articleName}
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
                  {...(matches && { size: "medium" })}
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
          {...(matches && { size: "medium" })}
          onClick={() => append({ articleName: "", comment: "" })}
        >
          Додати товар
        </Button>
        <Button {...(matches && { size: "medium" })}>
          {loading ? "Loading" : "Надіслати"}
        </Button>
      </Styled.ButtonContainer>
    </Styled.FormContainer>
  );
};

export default RequestForm;
