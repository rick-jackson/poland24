import { useMediaQuery } from "@mui/material";

import OrderProduct from "./OrderProduct";
import Description from "./Description";
import theme from "@theme/index";
import { useTranslation } from "next-i18next";

import * as Styled from "./Banner.styled";

const Delivery: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const { t } = useTranslation('banner');

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Info>
          <Styled.Text>
            <Styled.Title>{t("homeTitle")}</Styled.Title>
            <Styled.Subtitle variant="h2">
              {t("homeDescription")}
            </Styled.Subtitle>
          </Styled.Text>
          <OrderProduct />
        </Styled.Info>
        <Description />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Delivery;
