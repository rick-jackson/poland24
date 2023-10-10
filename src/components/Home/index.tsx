import type Store from "@entities/store";
import AboutUs from "./AboutUs";
import Delivery from "./Banner";
import ShopsSwiper from "./Shops";
import HowItWorks from "./HowItWorks";
import CalculatePrice from "./CalculatePrice";

import * as Styled from "./Home.styled";

type HomeProps = {
  shopsData: Store[];
};

const Home: React.FC<HomeProps> = ({ shopsData }) => {
  return (
    <Styled.Container>
      <Delivery />
      <HowItWorks />
      <AboutUs />
      <CalculatePrice />
      <ShopsSwiper shopsData={shopsData} />
    </Styled.Container>
  );
};

export default Home;
