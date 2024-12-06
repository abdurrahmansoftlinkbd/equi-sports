import { useLoaderData } from "react-router-dom";
import Accordion from "../components/Accordion";
import Blogs from "../components/Blogs";
import Equipments from "../components/Equipments";
import SwiperSlider from "../components/SwiperSlider/SwiperSlider";

const Home = () => {
  const equipments = useLoaderData();

  return (
    <>
      <header className="font-poppins">
        <SwiperSlider></SwiperSlider>
      </header>
      <main className="container w-11/12 mx-auto font-poppins mt-24">
        <Equipments equipments={equipments}></Equipments>
        <Blogs></Blogs>
        <Accordion></Accordion>
      </main>
    </>
  );
};

export default Home;
