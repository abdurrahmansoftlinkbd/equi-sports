// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const SwiperSlider = () => {
  const slides = [
    {
      image:
        "https://i.ibb.co.com/q5XJ4fV/kenny-nguy-n-J97-Bz-KSPZo-U-unsplash.jpg",
      title: "Elevate Your Game with Premium Sports Equipment",
      paragraph:
        "Discover the ultimate collection of high-quality sports gear and accessories tailored to enhance your performance. Whether you are a seasoned athlete or just starting, our curated range caters to all your sporting needs with unbeatable durability and style.",
    },
    {
      image: "path-to-your-image2.jpg",
      title: "Slide 2 Content",
    },
    {
      image: "path-to-your-image3.jpg",
      title: "Slide 3 Content",
    },
  ];

  return (
    <div>
      <Swiper
        pagination={{}}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative ">
              {/* Background Image */}
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-70"></div>

              <h1 className="absolute inset-0 top-10 text-white text-2xl sm:text-4xl font-extraboldbold">
                {slide.title}
              </h1>
              <p className="absolute inset-0  text-white  ">
                {slide.paragraph}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
