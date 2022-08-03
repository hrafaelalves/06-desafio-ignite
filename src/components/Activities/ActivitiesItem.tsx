import { Box, Image, Text } from "@chakra-ui/react";

interface AcitivitiesItemProps{
    name: string;
    image_url: string;
}

export default function ActivitiesItem({ name, image_url }: AcitivitiesItemProps){
    return(
        <Box display="flex" flexDirection="column" alignItems="center">
            <Image src={image_url} width={85} height={85} color="yellow.500" alt="Vida noturna"/>
            <Text mt="4" fontSize="lg" fontWeight={600}>{name}</Text>
        </Box>
    );
}