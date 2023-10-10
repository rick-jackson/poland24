import type Review from "@entities/review";
import * as Styled from "./Reviews.styled";
import { format } from "date-fns";
import { Rating } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

type ReviewsProps = {
  reviewsData: Review[];
};

const Reviews: React.FC<ReviewsProps> = ({ reviewsData }) => {
  const router = useRouter();
  const { t } = useTranslation("reviews");
  const isUserPage = router.asPath.includes("profile");

  return (
    <section style={{ height: "100%" }}>
      <Styled.ReviewsList>
        {!reviewsData.length && (
          <span style={{ margin: "auto", fontWeight: 700, fontSize: "18px" }}>
            {t("emptyList")}
          </span>
        )}
        {reviewsData.map(
          ({ id, fullName, dateCreated, store, text, rating }) => (
            <Styled.ReviewItem key={id}>
              <Styled.ReviewInfo>
                {!isUserPage && <Styled.UserName>{fullName}</Styled.UserName>}
                <Styled.Date>{format(+dateCreated, "dd.MM.yyyy")}</Styled.Date>

                {store && (
                  <Styled.Store>
                    <Styled.Date>{t("shoppingInStores")} </Styled.Date>
                    {store}
                  </Styled.Store>
                )}
              </Styled.ReviewInfo>
              <Rating size="large" readOnly value={rating} />
              <Styled.Description>{text}</Styled.Description>
            </Styled.ReviewItem>
          )
        )}
      </Styled.ReviewsList>
    </section>
  );
};

export default Reviews;
