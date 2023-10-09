import type Store from "@entities/store";
import Image from "next/image";
import * as Styled from "./Shops.styled";
import { useForm } from "react-hook-form";
import DialogTextField from "@components/dialogs/inputs/TextField";
import Button from "@components/UI/buttons";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { Pagination } from "@mui/material";
import { useState } from "react";

type ShopsProps = {
  shopsData: Store[];
};

const Shops: React.FC<ShopsProps> = ({ shopsData }) => {
  const { control, handleSubmit: onSubmit } = useForm();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(async ({ id, ...data }: any) => {
      const reviewsRef = doc(db, "shops", id);
      try {
        await setDoc(reviewsRef, data);
        router.replace(router.asPath);
        enqueueSnackbar("Shop added!", { variant: "success" });
      } catch (e) {
        enqueueSnackbar(e.message, { variant: "error" });
      }
    })();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Number of items to display per page

  // Calculate the range of items to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the subset of shops to display on the current page
  const shopsToDisplay = shopsData.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Styled.Container>
      {/* <Styled.Aside>
        <form onSubmit={handleSubmit}>
          <DialogTextField control={control} name="id" placeholder="id" />
          <DialogTextField control={control} name="name" placeholder="name" />
          <DialogTextField control={control} name="logo" placeholder="logo" />
          <DialogTextField
            control={control}
            name="daysDelivery"
            placeholder="daysDelivery"
            type="number"
          />
          <DialogTextField
            control={control}
            name="commission"
            placeholder="commission"
          />
          <Button type="submit" size="medium">
            Submit
          </Button>
        </form>
      </Styled.Aside> */}
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
