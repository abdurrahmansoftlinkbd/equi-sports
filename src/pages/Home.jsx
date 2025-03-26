import { useLoaderData } from "react-router-dom";
import Accordion from "../components/Accordion";
import Blogs from "../components/Blogs";
import Equipments from "../components/Equipments";
import SwiperSlider from "../components/SwiperSlider/SwiperSlider";
import Categories from "../components/Categories";
import { Fade } from "react-awesome-reveal";
import Subscriptions from "../components/Subscriptions";

const Home = () => {
  const equipments = useLoaderData();

  return (
    <>
      <header className="font-poppins">
        <SwiperSlider></SwiperSlider>
      </header>
      <main className="container w-11/12 mx-auto font-poppins mt-24">
        <Fade direction="down" triggerOnce={true}>
          <h2 className="text-5xl font-poppins font-bold text-center mb-6 uppercase">
            Sports <span className="text-primary">Equipments</span>
          </h2>
        </Fade>
        <Categories equipments={equipments}></Categories>
        <Equipments equipments={equipments}></Equipments>
        <Fade triggerOnce={true}>
          <Subscriptions></Subscriptions>
        </Fade>
        <Fade triggerOnce={true}>
          <Blogs></Blogs>
        </Fade>
        <Accordion></Accordion>
      </main>
    </>
  );
};

export default Home;
