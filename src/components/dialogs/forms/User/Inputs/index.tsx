import Title from "@components/dialogs/Title";
import DialogTextField from "@components/dialogs/inputs/TextField";
import Image from "next/image";

import * as Styled from "./Inputs.styled";

type InputsProps = {
  control: any;
  errors: any;
};

const Inputs: React.FC<InputsProps> = ({ control, errors }) => {
  return (
    <>
      <Title title="Личные данные" />
      <Styled.Inputs>
        <DialogTextField
          control={control}
          name="firstName"
          placeholder="Имя"
          error={!!errors.firstName}
          fullWidth
          required
        />
        <DialogTextField
          control={control}
          name="lastName"
          placeholder="Фамилия"
          error={!!errors.lastName}
          fullWidth
          required
        />
        <DialogTextField
          control={control}
          name="email"
          placeholder="Email"
          error={!!errors.email}
          fullWidth
          required
        />
        <DialogTextField
          control={control}
          name="phone"
          placeholder="Номер телефона"
          error={!!errors.phone}
          type="number"
          fullWidth
          required
        />
        <DialogTextField
          control={control}
          name="city"
          placeholder="Город"
          error={!!errors.city}
          fullWidth
        />
        <DialogTextField
          control={control}
          name="post"
          placeholder="Відділення НП"
          error={!!errors.post}
          fullWidth
        />
      </Styled.Inputs>
      <Title title="Мессенджеры для связи" />
      <Styled.Messengers>
        <Styled.Messanger>
          <Image
            alt="viber"
            width={32}
            height={32}
            src="/images/icons/socials/014-viber.svg"
          />
          Viber
        </Styled.Messanger>
        <DialogTextField
          control={control}
          name="viber"
          placeholder="Имя пользователя"
          error={!!errors.viber}
          fullWidth
        />
        <Styled.Messanger>
          <Image
            alt="telegram"
            width={32}
            height={32}
            src="/images/icons/socials/017-telegram.svg"
          />
          Telegram
        </Styled.Messanger>
        <DialogTextField
          control={control}
          name="telegram"
          placeholder="Имя пользователя"
          error={!!errors.telegram}
          fullWidth
        />
      </Styled.Messengers>
    </>
  );
};

export default Inputs;
