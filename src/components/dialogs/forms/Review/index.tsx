import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { useTranslation } from "next-i18next";
import { collection, doc, setDoc } from "firebase/firestore";

import type Review from "@entities/review";
import { db } from "@firebase";
import ReviewFormInputs from "./inputs";
import Button from "@components/UI/buttons";
import BlockTitle from "@components/BlockTitle";
import { defaultReview } from "@common/data/defaultreview";

import * as Styled from "./Review.styled";

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
          createdDate: new Date().valueOf(),
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
        <ReviewFormInputs control={control} errors={errors} />
        <Button type="submit" size="medium">
          {t("send")}
        </Button>
      </Styled.Form>
    </div>
  );
};

export default ReviewForm;
