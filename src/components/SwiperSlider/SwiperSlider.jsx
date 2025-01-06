import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

const SwiperSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/q5XJ4fV/kenny-nguy-n-J97-Bz-KSPZo-U-unsplash.jpg"
            text="Elevate Your Game with Premium Sports Equipment"
            desc="Discover the ultimate collection of high-quality sports gear and accessories tailored to enhance your performance. Whether you are a seasoned athlete or just starting, our curated range caters to all your sporting needs with unbeatable durability and style."
            btn="Get Started"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/NsP3x1y/pexels-steshkawillems-1308713.jpg"
            text="Unleash Your Potential with Every Game"
            desc="From precision gear to performance apparel, our collection is designed to push you further. Find everything you need to perform at your best, whether you're on the field, court, or track. With top brands and cutting-edge designs, we’re here to help you achieve greatness."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/PFJxPxT/cristina-anne-costello-QZKFRL-HBUw-unsplash.jpg"
            text="Gear Up for Success with Cutting Edge Innovation"
            desc="Stay ahead of the competition with our innovative sports equipment. From high-tech training tools to durable gear, our products are designed to elevate your performance. Explore our range and gear up for the next level in your athletic journey."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
