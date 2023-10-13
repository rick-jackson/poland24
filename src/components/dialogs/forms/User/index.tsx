import type User from "@entities/user";
import { useForm } from "react-hook-form";

import Save from "public/images/icons/save.svg";
import Button from "@components/UI/buttons";
import Inputs from "./Inputs";

import * as Styled from "./Inputs/Inputs.styled";
import { filterEmptyParam } from "@common/utils/filterEmpryParams";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@firebase";
import { useRouter } from "next/router";
import { setUserInLocalStorage } from "@common/utils/setUserInLocalStorage";
import { enqueueSnackbar } from "notistack";
import { defaultUser } from "@common/data/defaultUser";
import { useTranslation } from "next-i18next";

const UserForm: React.FC<{ userData: User }> = ({ userData }) => {
  const { t } = useTranslation("profile");

  const router = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit: onSubmit,
  } = useForm({ defaultValues: defaultUser(userData) });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(async (data: User) => {
      const userRef = doc(db, "users", data.id);
      await setDoc(userRef, {
        ...filterEmptyParam(data),
      })
        .then(() => {
          setUserInLocalStorage(data);
          router.replace(router.asPath);
          enqueueSnackbar("Save!", { variant: "success" });
        })
        .catch((e) => {
          enqueueSnackbar(e.message, { variant: "error" });
        });
    })();
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Inputs control={control} errors={errors} />
      <Button
        type="submit"
        size="medium"
        style={{ margin: "auto", marginTop: "16px" }}
      >
        <Save /> {t("save")}
      </Button>
    </Styled.Form>
  );
};

export default UserForm;
