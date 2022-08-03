import { Box, Divider, Flex, Heading, Image, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "../components/Header";
import Banner from "../components/Home/Banner";
import { Keyboard, Navigation, Pagination } from "swiper";
import Link from "next/link";
import Activities from "../components/Activities";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import CarouselItem from "../components/Carousel/CarouselItem";
import Head from "next/head";

interface ContinentsData{
  id: number;
  slug: number;
  name: string,
  subtitle: string,
  description: string,
  bg_cover_url: string,
  thumb_url: string,
  amount_countries: number,
  amount_languages: number,
  cities_plus_one_hundred: number,
}

export default function Home() {


  const [continents, setContinents] = useState<ContinentsData[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/continents')
    .then(result => result.json())
    .then(result => setContinents(result));
  }, [])

  return (
    <>
      <Head>
        <title>Início | WorldTrip</title>
      </Head>
      
      <Flex as="main" maxWidth={1440} mx="auto" direction="column">
        <Header />
        
        <Banner />

        <Activities />

        <Divider my="20" orientation='horizontal' borderColor="gray.600" width={90} border="2px" borderStyle="solid" mx="auto"/>
      
        <Flex direction="column">
          <Heading maxWidth={600} textAlign="center" mx="auto">
            Vamos nessa? <br />
            Então escolha seu continente
          </Heading>

          <Carousel>
            {continents && continents.map(continent => (
              <SwiperSlide key={continent.id}>
                <CarouselItem
                  bg_url={`/${continent.thumb_url}`}
                  href={`/continents/${continent.slug}`}
                  title={continent.name}
                  subtitle={continent.subtitle} />
              </SwiperSlide>
            ))}
          </Carousel>
        </Flex>
      </Flex>
    </>

  )
}
