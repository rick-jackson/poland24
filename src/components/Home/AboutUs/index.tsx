import BlockTitle from "@components/BlockTitle";
import * as Styled from "./AboutUs.styled";
import { useRouter } from "next/router";

const AboutUs: React.FC = () => {
  const router = useRouter();
  return (
    <Styled.Container>
      <div>
        <BlockTitle
          title="О нас"
          subtitle="15 лет опыт производства. Знаем все доставке"
        />
        <Styled.Description>
          Компания Poland24 осуществляет доставку из любого
          магазина/поставщика/производителя стран Евросоюза, которые
          осуществляют доставку товара курьером в Польшу.
        </Styled.Description>
        <Styled.Button
          variant="subtle"
          size="medium"
          onClick={() => router.push("/about")}
        >
          Подробнее
        </Styled.Button>
      </div>
      <Styled.Video src="/images/map.png" alt="map" />
    </Styled.Container>
  );
};

export default AboutUs;
