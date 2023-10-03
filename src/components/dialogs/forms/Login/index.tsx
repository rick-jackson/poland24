import Button from "@components/UI/buttons";

import CheckBox from "@components/UI/inputs/Checkbox";
import { useForm } from "react-hook-form";
import DialogTextField from "@components/dialogs/inputs/TextField";
import useSignIn from "@gateways/signIn";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import { ButtonText } from "@components/Modal/Authorization/Authorization.styled";

type FormProps = {
  onClose: () => void;
};

const Form: React.FC<FormProps> = ({ onClose }) => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { login, isLoading } = useSignIn();

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "", remember: false },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit((data) => {
      login(data);
      onClose();
    })();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <DialogTextField
          control={control}
          fullWidth
          name="email"
          {...(matches && { size: "large" })}
          type="email"
          placeholder="Введите е-mail"
          required
          error={!!errors.email}
        />
        <DialogTextField
          control={control}
          fullWidth
          name="password"
          {...(matches && { size: "large" })}
          type="password"
          placeholder="Введиите пароль"
          required
          error={!!errors.password}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "16px 0px",
        }}
      >
        <CheckBox name="remember" label="Запомнить меня" />
        <ButtonText>Забыли пароль?</ButtonText>
      </div>

      <Button {...(!matches && { size: "medium" })} type="submit">
        {isLoading ? "loading" : "Войти"}
      </Button>
    </form>
  );
};

export default Form;
