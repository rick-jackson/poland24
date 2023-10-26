import Button from "@components/UI/buttons";

import CheckBox from "@components/UI/inputs/Checkbox";
import { useForm } from "react-hook-form";
import DialogTextField from "@components/dialogs/inputs/TextField";

import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";
import { ButtonText } from "@components/Modal/Authorization/Authorization.styled";
import { login } from "@gateways/signIn";
import { enqueueSnackbar } from "notistack";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@firebase";
import { emailPattern } from "@common/data/pattern";

type FormProps = {
  onClose: () => void;
};

const customErrorMessages = {
  email: {
    required: "Це поле обов'язкове",
    pattern: {
      value: emailPattern,
      message: "Введіть коректний email",
    },
  },
  password: {
    required: "Це поле обов'язкове",
  },
};

const Form: React.FC<FormProps> = ({ onClose }) => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm({
    defaultValues: { email: "", password: "", remember: false },
  });

  const email = watch("email");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      setError("email", { type: "custom", message: "Невірний формат" });
    }
    onSubmit(async (data) => {
      try {
        await login(data);
        onClose();
        enqueueSnackbar("Login!", { variant: "success" });
      } catch (e) {
        enqueueSnackbar(`${e.message}`, { variant: "error" });
      }
    })();
  };

  const handleResetPassword = async () => {
    if (!emailPattern.test(email)) {
      setError("email", { type: "custom", message: "Невірний формат" });
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        enqueueSnackbar(
          `Лист для оновлення пароля відправлено на пошту ${email}!`,
          {
            variant: "success",
          }
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        enqueueSnackbar(errorMessage, { variant: "error" });
      });
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
          error={errors.email}
        />
        <DialogTextField
          control={control}
          fullWidth
          name="password"
          {...(matches && { size: "large" })}
          type="password"
          placeholder="Введиите пароль"
          required
          error={errors.password}
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
        <ButtonText onClick={handleResetPassword} type="button">
          Забыли пароль?
        </ButtonText>
      </div>

      <Button {...(!matches && { size: "medium" })} type="submit">
        Войти
      </Button>
    </form>
  );
};

export default Form;
