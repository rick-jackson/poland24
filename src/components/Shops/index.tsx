import { useState } from "react";
import { Pagination } from "@mui/material";

import type Store from "@entities/store";
import Image from "next/image";

import * as Styled from "./Shops.styled";

type ShopsProps = {
  shopsData: Store[];
};

const Shops: React.FC<ShopsProps> = ({ shopsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const shopsToDisplay = shopsData.slice(startIndex, endIndex);

  const handlePageChange = (_, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Styled.Container>
      <Styled.ShopsList>
        {shopsToDisplay.map((el) => (
          <Styled.ShopCard key={el.name}>
            <Image
              src={el.logo}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "60px", objectFit: "contain" }}
              priority
              alt={el.name}
            />
            <Styled.ShopName>{el.name}</Styled.ShopName>
            <Styled.ShopInfo>
              <Styled.ColumnText>
                <span>Доставка:</span>
                <Styled.BoldText>до {el.daysDelivery} дней</Styled.BoldText>
              </Styled.ColumnText>
              <Styled.ColumnText>
                <span>Комиссия:</span>
                <Styled.BoldText>{el.commission}%</Styled.BoldText>
              </Styled.ColumnText>
            </Styled.ShopInfo>
          </Styled.ShopCard>
        ))}
      </Styled.ShopsList>
      <Pagination
        sx={{ margin: "auto" }}
        count={Math.ceil(shopsData.length / itemsPerPage)}
        page={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />
    </Styled.Container>
  );
};

export default Shops;
