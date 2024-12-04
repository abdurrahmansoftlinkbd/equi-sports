// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const SwiperSlider = () => {
  const slides = [
    {
      image:
        "https://i.ibb.co.com/q5XJ4fV/kenny-nguy-n-J97-Bz-KSPZo-U-unsplash.jpg",
      title: "Elevate Your Game with Premium Sports Equipment",
      paragraph:
        "Discover the ultimate collection of high-quality sports gear and accessories tailored to enhance your performance. Whether you are a seasoned athlete or just starting, our curated range caters to all your sporting needs with unbeatable durability and style.",
      button: "Get Started",
    },
    {
      image: "https://i.ibb.co.com/NsP3x1y/pexels-steshkawillems-1308713.jpg",
      title: "Unleash Your Potential with Every Game",
      paragraph:
        "From precision gear to performance apparel, our collection is designed to push you further. Find everything you need to perform at your best, whether you're on the field, court, or track. With top brands and cutting-edge designs, we’re here to help you achieve greatness.",
    },
    {
      image:
        "https://i.ibb.co.com/PFJxPxT/cristina-anne-costello-QZKFRL-HBUw-unsplash.jpg",
      title: "Gear Up for Success with Cutting-Edge Innovation",
      paragraph:
        "Stay ahead of the competition with our innovative sports equipment. From high-tech training tools to durable gear, our products are designed to elevate your performance. Explore our range and gear up for the next level in your athletic journey.",
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
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-70"></div>

              <h1 className="absolute inset-0 top-36 left-14 text-white w-2/3 text-5xl font-bold">
                {slide.title}
              </h1>
              <p className="absolute inset-0 top-[17rem] left-14 w-3/5 text-white  ">
                {slide.paragraph}
              </p>
              {slide?.button ? (
                <Link
                  to="/allSportsEquipment"
                  className="absolute inset-0 top-[42%] left-14 w-40 bg-primary border-primary hover:bg-light hover:border-light text-white btn"
                >
                  {slide?.button}
                </Link>
              ) : (
                ""
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
