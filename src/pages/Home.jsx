import { useLoaderData } from "react-router-dom";
import Accordion from "../components/Accordion";
import Blogs from "../components/Blogs";
import Equipments from "../components/Equipments";
import SwiperSlider from "../components/SwiperSlider/SwiperSlider";
import Categories from "../components/Categories";

const Home = () => {
  const equipments = useLoaderData();

  return (
    <>
      <header className="font-poppins">
        <SwiperSlider></SwiperSlider>
      </header>
      <main className="container w-11/12 mx-auto font-poppins mt-24">
        <h2 className="text-5xl font-bold text-center mb-14">
          Sports <span className="text-primary">Equipments</span>
        </h2>
        <Categories equipments={equipments}></Categories>
        <Equipments equipments={equipments}></Equipments>
        <Blogs></Blogs>
        <Accordion></Accordion>
      </main>
    </>
  );
};

export default Home;
