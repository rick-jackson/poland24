import { useEffect, useState } from "react";

import { getExchangeRate } from "@gateways/getExchangeRate";
import * as Styled from "./ExchangeRate.styled";

const ExchangeRate: React.FC = () => {
  const [exchangeRate, setExchangeRate] = useState([]);
  const [eur, pln] = exchangeRate;

  useEffect(() => {
    (async () => {
      try {
        const data: Record<string, string>[] = await getExchangeRate();
        setExchangeRate(
          data.filter((el) => el.cc === "PLN" || el.cc === "EUR")
        );
      } catch (e) {
        setExchangeRate([]);
      }
    })();
  }, []);

  return (
    <div>
      <div>
        <Styled.Currency>zł</Styled.Currency>
        {pln?.rate.toFixed(2) || "?"}
      </div>
      <div>
        <Styled.Currency>€</Styled.Currency>
        {eur?.rate.toFixed(2) || "?"}
      </div>
    </div>
  );
};

export default ExchangeRate;
