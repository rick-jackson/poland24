import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { useTranslation } from "next-i18next";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";

import type User from "@entities/user";
import Inputs from "./Inputs";
import { app, db } from "@firebase";
import Button from "@components/UI/buttons";
import Save from "public/images/icons/save.svg";
import { defaultUser } from "@common/data/defaultUser";
import { filterEmptyParam } from "@common/utils/filterEmpryParams";
import { setUserInLocalStorage } from "@common/utils/setUserInLocalStorage";

import * as Styled from "./Inputs/Inputs.styled";

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
        .then(async () => {
          const auth = getAuth(app);
          await updateProfile(auth.currentUser, {
            displayName: `${data.firstName} ${data.lastName}`,
          });
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
