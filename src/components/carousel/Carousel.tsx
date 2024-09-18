// Carousel.tsx
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";

import { Box } from "@chakra-ui/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import CarouselSkeleton from "../skeletonComponentes/CarouselSkeleton";

const image1 = "/cardsImages/venezuelan-food-tequenos.jpg";
const image2 = "/cardsImages/ensalada-pollo-palta.jpg";

const Carousel = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <Box
      marginTop="1rem"
      height="250px"
      width="100%"
      mb={4}
      borderRadius="20px"
    >
      {isLoading ? (
        <CarouselSkeleton />
      ) : (
        <Swiper
          className="Swiper"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
        >
          <SwiperSlide className="swiper-slide">
            <img src={image1} alt="Venezuelan Food" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="Ensalada Pollo Palta" />
          </SwiperSlide>
        </Swiper>
      )}
    </Box>
  );
};

export default Carousel;
