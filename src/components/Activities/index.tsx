import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import ActivitiesItem from "./ActivitiesItem";

export default function Activities(){
    return(
        <SimpleGrid
            pt="24"
            textAlign="center"
            spacing={10}
            maxWidth={1150}
            mx="auto"
            minChildWidth="120px"
            width="100%"
            px="6"
        >
            <ActivitiesItem name="vida noturna" image_url="/cocktail.svg"/>
            <ActivitiesItem name="praia" image_url="/surf.svg"/>
            <ActivitiesItem name="morderno" image_url="/building.svg"/>
            <ActivitiesItem name="clássico" image_url="/museum.svg"/>
            <ActivitiesItem name="e mais.." image_url="/earth.svg"/>
      </SimpleGrid>
    );
}