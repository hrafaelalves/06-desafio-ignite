import { Box, Flex, Grid, Heading, Icon, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";
import CityCard from "../../components/CityCard";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";

interface ContinentData {
    id: number;
    name: string;
    slug: string;
    subtitle: string;
    description: string;
    bg_cover_url: string;
    thumb_url: string;
    amount_countries: number;
    amount_languages: number;
    cities_plus_one_hundred: number;
}

type Cities = {
    id: number;
    name: string;
    country: string;
    flag_url: string;
    thumb_url: string; 
}

interface ContinentProps{
    continent: ContinentData;
    cities: Cities[];
}

export default function ContinentDatails({ continent, cities }: ContinentProps){
    return (
        <>
            <Head>
                <title>{continent.name} | WorldTrip</title>
            </Head>

            <Flex as="main" maxWidth={1440} mx="auto" direction="column" mb="20">
                <Header arrowBack={true}/>

                <ContinentBanner name={continent.name}/>

                <Grid
                templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                width="100%"
                maxWidth={1160}
                mx="auto"
                px="6"
                alignItems="center"
                mt="20"
                >
                    <Text textAlign="justify" fontSize={["lg", "2xl"]} mb={["10", "10", "0"]}>
                        {continent.description}
                    </Text>

                    <SimpleGrid 
                        mx="auto"
                        minChildWidth={["100px", "150px"]}
                        flexDirection="row"
                        width="100%"
                    >
                        <Box display="flex" flexDirection="column" alignItems={["flex-start", "center"]}>
                            <Text lineHeight={["3rem", "4rem"]} fontSize={["3xl", "5xl"]} fontWeight={600} color="yellow.500">{continent.amount_countries}</Text>
                            <Text fontWeight={[500, ]}>países</Text>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems={["flex-start", "center"]}>
                            <Text lineHeight={["3rem", "4rem"]} fontSize={["3xl", "5xl"]} fontWeight={600} color="yellow.500">{continent.amount_languages}</Text>
                            <Text fontWeight={[500, 600]}>línguas</Text>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems={["flex-start", "center"]}>
                            <Text lineHeight={["3rem", "4rem"]} fontSize={["3xl", "5xl"]} fontWeight={600} color="yellow.500">{continent.cities_plus_one_hundred}</Text>
                            <Text fontWeight={[500, 600]} display="flex" alignItems="center" position="relative">
                                cidades +100

                                <Tooltip hasArrow label={continent.subtitle} placement="top">
                                    <Text as="span">
                                        <Icon as={FiInfo} ml="2" mt="2px"/>    
                                    </Text>
                                </Tooltip>
                            </Text>
                        </Box>
                    </SimpleGrid>
                </Grid>

                <Flex direction="column" maxWidth={1160} mx="auto" width="100%" mt="14" 
                px="6">
                    <Heading width="100%" fontWeight={500}>Cidades +100</Heading>

                    <Grid mt="12" gap="6" templateColumns='repeat(auto-fill, minmax(256px, auto))'>
                        {cities && cities.map(city => (
                            <CityCard
                            key={city.id}
                            name={city.name}
                            country={city.country}
                            flag_url={`/${city.flag_url}`}
                            thumb_url={`/${city.thumb_url}`} />
                        ))}
                    </Grid>
                </Flex>
            </Flex>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking' // true, false, blocking
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;
    
    const result = await fetch(`http://localhost:3333/continents/?slug=${slug}`);
    const data = await result.json();

    const result_cities = await fetch(`http://localhost:3333/cities/?continent_id=${data[0].id}`);
    const data_cities = await result_cities.json();

    return {
      props: {
        continent: data[0],
        cities: data_cities
      },
      revalidate: 60 * 30, // 30 minutes
    };
};