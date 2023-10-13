import { useState } from "react";
import { useMediaQuery } from "@mui/material";

import TextField from "@components/UI/inputs/TextField";
import Button from "@components/UI/buttons";
import theme from "@theme/index";

import * as Styled from "./CalculatePrice.styled";

const CalculatePrice: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"€" | "zł">("zł");
  const [total, setTotal] = useState<number>(0);
  const [inputValue, setInputValue] = useState<{
    price: number;
    delivery: number;
    article: boolean;
  }>({
    price: undefined,
    delivery: undefined,
    article: false,
  });

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    const { price, delivery, article } = inputValue;
    if (!price || !delivery) return;
    else if (activeTab === "zł") {
      setTotal(
        +price <= 250 ? +delivery + 50 : +delivery + (+price / 100) * 16.38
      );
    } else {
      setTotal(
        price <= 50 ? +delivery + 10 : +delivery + (+price / 100) * 16.38
      );
    }
  };

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const deliveryOfcurrency = activeTab === "zł" ? 250 : 50;

  return (
    <Styled.Wrapper id="calculator">
      <Styled.Container>
        <Styled.Description>
          <Styled.Title>
            Расчитай стоимость доставки товаров из Польши
          </Styled.Title>
          <Styled.DescriptionItem>
            Комиссия сервиса для товаров с фактурой VAT стоимостью от{" "}
            {deliveryOfcurrency}
            {activeTab}: 16,38%
          </Styled.DescriptionItem>
          <Styled.DescriptionItem>
            Комиссия сервиса для товаров стоимостью до {deliveryOfcurrency}
            {activeTab} (VAT/ без VAT): {activeTab === "zł" ? 250 : 10}
            {activeTab}.
          </Styled.DescriptionItem>
          <Styled.DescriptionItem>
            Комиссия сервиса для товаров без фактуры VAT стоимостью от{" "}
            {deliveryOfcurrency}
            {activeTab}: 15%
          </Styled.DescriptionItem>
        </Styled.Description>
        <Styled.Calculator>
          <Styled.Tabs $activeTab={activeTab}>
            <Styled.Tab
              onClick={() => {
                setTotal(null);
                setActiveTab("zł");
              }}
            >
              zł
            </Styled.Tab>
            <Styled.Tab
              onClick={() => {
                setTotal(null);
                setActiveTab("€");
              }}
            >
              €
            </Styled.Tab>
          </Styled.Tabs>
          <Styled.Inputs>
            <TextField
              fullWidth
              name="price"
              type="number"
              placeholder={`Цена*, ${activeTab}`}
              onChange={handleChange}
              {...(!matches && { size: "large" })}
              value={inputValue.price}
            />
            <TextField
              fullWidth
              name="delivery"
              type="number"
              onChange={handleChange}
              placeholder={`Доставка*, ${activeTab}`}
              {...(!matches && { size: "large" })}
              value={inputValue.delivery}
            />
          </Styled.Inputs>
          <Button
            onClick={handleClick}
            variant="secondary"
            {...(matches && { fullwidth: true, size: "medium" })}
          >
            Расчитать
          </Button>
          <Styled.Divider />
          {!!+total && (
            <Styled.Sum>
              Сумма,
              <div style={{ display: "flex", alignItems: "center" }}>
                <Styled.CurrencySum>
                  {activeTab}
                  <Styled.Total>{total.toFixed(2)}</Styled.Total>
                </Styled.CurrencySum>
                <Styled.CurrencySum>
                  ₴
                  <Styled.Total>
                    {(activeTab === "zł" ? total * 8 : total * 40).toFixed(2)}
                  </Styled.Total>
                </Styled.CurrencySum>
              </div>
            </Styled.Sum>
          )}
        </Styled.Calculator>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default CalculatePrice;
