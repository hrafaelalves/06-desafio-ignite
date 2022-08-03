import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Navigation, Pagination } from "swiper";
import CarouselItem from "./CarouselItem";
import { ReactNode } from "react";

interface CarouselProps{
  children: ReactNode
}

export default function Carousel({ children }: CarouselProps){
    return(
        <Flex my="12" width="100%" maxWidth={1240} mx="auto" height={450}>
          <Swiper
            navigation={true}
            pagination={true}
            keyboard={true}
            modules={[Navigation, Pagination, Keyboard]}
            loop={true}
          >
            {children}
          </Swiper>
        </Flex>
    );
}