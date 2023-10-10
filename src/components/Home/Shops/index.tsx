import type Store from "@entities/store";
import { useState } from "react";
import * as Styled from "./Shops.styled";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BlockTitle from "@components/BlockTitle";
import { useMediaQuery } from "@mui/material";
import theme from "@theme/index";

type ShopsSwiperProps = {
  shopsData: Store[];
};

const ShopsSwiper: React.FC<ShopsSwiperProps> = ({ shopsData }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <BlockTitle title="Каталог магазинов" />
      </Styled.Content>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={matches ? 1 : 5}
        spaceBetween={30}
        pagination={{
          type: matches ? "bullets" : "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {shopsData.map((el) => (
          <SwiperSlide
            key={el.name}
            style={{
              padding: "40px 32px",
              background: "#fff",
              borderRadius: "10px",
            }}
          >
            <img src={el.logo} alt={el.name} height={56} />
            <Styled.ShopName>{el.name}</Styled.ShopName>
            <Styled.ShopDescription>
              Швидка та надійна доставка товарів з магазину Amazon.pl (Амазон
              Польща) до України.
            </Styled.ShopDescription>
            <Styled.DaysDelivery>
              Сроки доставки:{" "}
              <span style={{ fontSize: "16px", fontWeight: 700 }}>
                {el.daysDelivery} дней
              </span>
            </Styled.DaysDelivery>
            <span style={{ fontSize: "14px" }}>
              Комиссия на доставку{" "}
              <span style={{ fontSize: "16px", fontWeight: 700 }}>
                {el.commission}%
              </span>
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Wrapper>
  );
};

export default ShopsSwiper;
