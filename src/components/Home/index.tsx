import AboutUs from "./AboutUs";
import Delivery from "./Banner";
import HowItWorks from "./HowItWorks";
import CalculatePrice from "./CalculatePrice";

import * as Styled from "./Home.styled";

const Home: React.FC = () => {
  return (
    <Styled.Container>
      <Delivery />
      <HowItWorks />
      <AboutUs />
      <CalculatePrice />
    </Styled.Container>
  );
};

export default Home;
