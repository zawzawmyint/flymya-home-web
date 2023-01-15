import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container } from "@mui/material";

const SwiperPage = () => {
  const allImage = [
    {
      img: "https://gos3.ibcdn.com/img-1584081208.jpg",
      title: "Breakfast",
    },
    {
      img: "https://v3-be-public.s3.ap-southeast-1.amazonaws.com/uploads/promotions/16/qU2DJoPPMF3Xfz2KMMuQT7N24nu5mY91K0ByIAnk.webp",
      title: "Burger",
    },
    {
      img: "https://i.pinimg.com/550x/d0/3d/fe/d03dfe5fecf385e7972ada22767a5801.jpg",
      title: "Camera",
    },
    {
      img: "https://www.myanmarinterlink.com/wp-content/uploads/2018/04/tour-banner2.jpg",
      title: "Coffee",
    },
  ];
  return (
    <Container maxWidth="lg">
      <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={true}
        className="mySwiper p-4 mt-2 shadow-lg "
        modules={[Navigation, Autoplay]}
      >
        {allImage.map((image, index) => {
          return (
            <SwiperSlide key={index} className="mySwiper1">
              <Box className=" bg-[#DEE0DF] ">
                <img
                  src={image.img}
                  alt="Picture of the author"
                  className="w-full h-[200px] rounded-lg"
                />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SwiperPage;
