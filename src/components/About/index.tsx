import * as Styled from "./About.styled";
import AboutCompany from "public/images/icons/about-company.svg";

const About: React.FC = () => {
  return (
    <>
      <div
        style={{ maxHeight: "360px", maxWidth: "800px", marginLeft: "auto" }}
      >
        <AboutCompany />
      </div>
      <div style={{ display: "flex", marginTop: "30px", gap: "16px" }}>
        <Styled.BlockTitle title="Можете оформить запрос и в кратчайшие сроки постараемся найти необходимы товар в странах Евросоюза." />
        <p style={{ fontSize: "24px", fontWeight: 400 }}>
          Компания Poland24 является одной из первых на территории Украины
          предложившей своим клиентам услуги по доставке товаров из Польши в
          Украину. Мы начали свою деятельность в 2012 году. Изначально наша
          компания занимались доставкой компьютерной техники для ряда клиентов в
          Украине.
        </p>
      </div>
    </>
  );
};

export default About;
