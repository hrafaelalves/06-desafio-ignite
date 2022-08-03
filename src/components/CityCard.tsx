import { Avatar, Flex, GridItem, Heading, Image, Text } from "@chakra-ui/react";

interface CityCardProps{
    name: string;
    flag_url: string;
    country: string;
    thumb_url: string;
}

export default function CityCard({ name, flag_url, country, thumb_url }: CityCardProps){
    return(
        <GridItem>
            <Image width="100%" height={173} objectFit="cover" src={thumb_url} alt={name} />

            <Flex justifyContent="space-between" p="5" py="6" align="center" borderBottomRightRadius={4} borderBottomLeftRadius={4} border="1px" borderColor="yellow.500" borderTop={0}>
                <Flex direction="column">
                    <Heading fontWeight={600} fontSize="lg" as="h3">{name}</Heading>
                    <Text>{country}</Text>
                </Flex>

                <Avatar src={flag_url} width="36px" height="36px"/>
            </Flex>
        </GridItem>
    );
}