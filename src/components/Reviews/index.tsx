import type Review from "@entities/review";
import * as Styled from "./Reviews.styled";
import { format } from "date-fns";
import { Rating } from "@mui/material";
import { useRouter } from "next/router";

type ReviewsProps = {
  reviewsData: Review[];
};

const Reviews: React.FC<ReviewsProps> = ({ reviewsData }) => {
  const router = useRouter();
  const isUserPage = router.asPath.includes("profile");

  return (
    <section>
      <Styled.ReviewsList>
        {reviewsData.map(
          ({ id, fullName, dateCreated, store, text, rating }) => (
            <Styled.ReviewItem key={id}>
              <Styled.ReviewInfo>
                {!isUserPage && <Styled.UserName>{fullName}</Styled.UserName>}
                <Styled.Date>{format(+dateCreated, "dd.MM.yyyy")}</Styled.Date>

                {store && (
                  <Styled.Store>
                    <Styled.Date>Покупка в магазине: </Styled.Date>
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
