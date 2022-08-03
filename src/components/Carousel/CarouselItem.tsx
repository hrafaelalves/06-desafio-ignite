import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import Link from "next/link";

interface CarouselItemProps{
    bg_url: string;
    href: string;
    title: string;
    subtitle: string;
}

export default function CarouselItem({ bg_url, href, title, subtitle }: CarouselItemProps){
    return(
        <>
            <Image zIndex={1} src={bg_url} alt="Europe"/>

            <Link href={href} passHref>
                <Flex 
                    as="a"
                    href=""
                    width="100%"
                    height="100%"
                    bg=" linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35))"
                    position="absolute" zIndex={2}
                    align="center"
                    justifyContent="center"
                    direction="column"
                >
                    <Heading fontSize={["4xl", "5xl"]} color="gray.100" fontWeight={700}>
                        {title}
                    </Heading>
                    <Text color="gray.100" fontSize={["lg", "2xl"]}>
                        {subtitle}
                    </Text>
                </Flex>
            </Link>
        </>
    );
}