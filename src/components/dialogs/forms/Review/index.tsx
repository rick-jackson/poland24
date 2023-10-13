import BlockTitle from "@components/BlockTitle";
import * as Styled from "./Review.styled";
import { useForm } from "react-hook-form";
import DialogTextField from "@components/dialogs/inputs/TextField";
import DialogRating from "@components/dialogs/inputs/Rating";
import Button from "@components/UI/buttons";
import { defaultReview } from "@common/data/defaultreview";
import type Review from "@entities/review";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@firebase";
import { getCookie } from "cookies-next";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const ReviewForm: React.FC = () => {
  const {
    control,
    handleSubmit: onSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultReview(),
  });

  const { t } = useTranslation("reviews");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(async ({ rating, ...data }: Review) => {
      const userId = getCookie("userId");
      const reviewsRef = doc(collection(db, "reviews"));

      try {
        await setDoc(reviewsRef, {
          ...(userId && { userId }),
          ...data,
          id: reviewsRef.id,
          rating: +rating,
          dateCreated: new Date().valueOf(),
        });
        router.replace(router.asPath);
        reset(defaultReview());
        enqueueSnackbar("Review added!", { variant: "success" });
      } catch (e) {
        enqueueSnackbar(e.message, { variant: "error" });
      }
    })();
  };

  return (
    <div>
      <BlockTitle title={t("saveReview")} />
      <Styled.Form onSubmit={handleSubmit}>
        <DialogTextField
          control={control}
          name="fullName"
          placeholder={t("userName")}
          error={!!errors.fullName}
          fullWidth
          required
        />
        <DialogTextField
          control={control}
          name="email"
          placeholder={t("userEmail")}
          error={!!errors.email}
          fullWidth
        />
        <DialogTextField
          control={control}
          name="text"
          placeholder={t("userReview")}
          error={!!errors.text}
          fullWidth
          textArea
          required
        />
        <DialogTextField
          control={control}
          name="store"
          placeholder={t("store")}
          error={!!errors.store}
          fullWidth
        />
        <Styled.Rating>
          {t("rating")} <DialogRating name="rating" control={control} />
        </Styled.Rating>
        <Button type="submit" size="medium">
          {t("send")}
        </Button>
      </Styled.Form>
    </div>
  );
};

export default ReviewForm;
