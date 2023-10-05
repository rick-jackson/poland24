import type Review from "@entities/review";
import * as Styled from "./Reviews.styled";
import { format } from "date-fns";
import { Rating } from "@mui/material";

type ReviewsProps = {
  reviewsData: Review[];
};

const Reviews: React.FC<ReviewsProps> = ({ reviewsData }) => {
  console.log(reviewsData);
  return (
    <Styled.ReviewsList>
      {reviewsData.map(
        ({
          id,
          user: { firstName, lastName },
          dateCreated,
          store,
          text,
          rating,
        }) => (
          <Styled.ReviewItem key={id}>
            <Styled.ReviewInfo>
              <Styled.UserName>
                {firstName} {lastName}
              </Styled.UserName>
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
  );
};

export default Reviews;
