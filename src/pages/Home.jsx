import Accordion from "../components/Accordion";
import Blogs from "../components/Blogs";
import SwiperSlider from "../components/SwiperSlider/SwiperSlider";

const Home = () => {
  return (
    <>
      <header className="font-poppins">
        <SwiperSlider></SwiperSlider>
      </header>
      <main className="container w-11/12 mx-auto font-poppins mt-24">
        <Blogs></Blogs>
        <Accordion></Accordion>
      </main>
    </>
  );
};

export default Home;
