import { useLoaderData } from "react-router-dom";
import Brands from "../components/Brands";
import Slider from "../components/Slider";
import TopBrands from "../components/TopBrands";
import AllBrands from "../components/AllBrands";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Slider />
      {/* top brands */}
      <TopBrands />
      {/* brands  */}
      <Brands data={data} />
      {/* all brands */}
    </div>
  );
};

export default Home;
