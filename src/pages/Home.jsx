import { useLoaderData } from "react-router-dom";
import Brands from "../components/Brands";
import Slider from "../components/Slider";
import TopBrands from "../components/TopBrands";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Slider />
      {/* top brands */}
      <TopBrands />
      {/* brands  */}
      <Brands data={data} />
    </div>
  );
};

export default Home;
