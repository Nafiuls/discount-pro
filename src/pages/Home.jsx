import { useLoaderData } from "react-router-dom";
import Brands from "../components/Brands";
import Slider from "../components/Slider";
import TopBrands from "../components/TopBrands";
import InfoSection from "../components/InfoSection";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Slider />
      {/* top brands */}
      <TopBrands />
      {/* brands  */}
      <Brands data={data} />
      {/* info section */}
      <InfoSection />
    </div>
  );
};

export default Home;
