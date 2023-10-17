import type Store from "@entities/store";
import AboutUs from "./AboutUs";
import Delivery from "./Banner";
import ShopsSwiper from "./Shops";
import HowItWorks from "./HowItWorks";
import CalculatePrice from "./CalculatePrice";

type HomeProps = {
  shopsData: Store[];
};

const Home: React.FC<HomeProps> = ({ shopsData }) => {
  return (
    <>
      <Delivery />
      <HowItWorks />
      <AboutUs />
      <CalculatePrice />
      <ShopsSwiper shopsData={shopsData} />
    </>
  );
};

export default Home;
