import { useForm } from "react-hook-form";

import Button from "@components/UI/buttons";

import DialogTextField from "@components/dialogs/inputs/TextField";
import createUser from "@gateways/createUser";
import { useState } from "react";
import { CircularProgress, useMediaQuery } from "@mui/material";
import DialogCheckBox from "@components/dialogs/inputs/Checkbox";
import { useRouter } from "next/router";
import theme from "@theme/index";

type FormProps = {
  onClose: () => void;
};

const Form: React.FC<FormProps> = ({ onClose }) => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      repeatPassword: "",
      license: false,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    onSubmit(async ({ license, repeatPassword, ...data }: any) => {
      if (!watch("license")) {
        setError("license", { type: "custom", message: "custom message" });
        return;
      }

      await createUser(data);
      onClose();

      router.replace(router.asPath);
    })();

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "24px",
          marginBottom: "16px",
        }}
      >
        <DialogTextField
          control={control}
          fullWidth
          name="fullName"
          {...(matches && { size: "large" })}
          type="text"
          placeholder="Имя фамилия"
          error={!!errors.fullName}
          required
        />
        <DialogTextField
          control={control}
          fullWidth
          name="email"
          {...(matches && { size: "large" })}
          type="email"
          placeholder="E-mail"
          error={!!errors.email}
          required
        />
        <DialogTextField
          control={control}
          fullWidth
          name="phone"
          {...(matches && { size: "large" })}
          type="tel"
          placeholder="Номер телефона"
          error={!!errors.phone}
          required
        />
        <DialogTextField
          control={control}
          fullWidth
          name="password"
          {...(matches && { size: "large" })}
          type="password"
          placeholder="Пароль"
          error={!!errors.password}
          required
        />
        <DialogTextField
          control={control}
          fullWidth
          name="repeatPassword"
          {...(matches && { size: "large" })}
          type="password"
          placeholder="Повторить пароль"
          error={watch("password") !== watch("repeatPassword")}
          required
        />
        <DialogCheckBox
          control={control}
          name="license"
          label="согласен с публичным договором предоставлния услуг"
          error={!!errors.license}
        />
      </div>
      <Button type="submit" {...(!matches && { size: "medium" })}>
        {isLoading ? <CircularProgress color="inherit" /> : "Регистрация"}
      </Button>
    </form>
  );
};

export default Form;
