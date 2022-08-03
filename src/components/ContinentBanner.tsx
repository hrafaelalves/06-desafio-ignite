import { Flex, Heading, Image, Text } from "@chakra-ui/react";

interface ContinentBannerProps{
    name: string;
}

export default function ContinentBanner({ name }: ContinentBannerProps){
    return(
      <Flex position="relative" height={[300, 400, 500]} align="center">
        <Image
            src="/europe.jpg"
            width={1440}
            height="100%" 
            objectFit="cover"
            alt="Banner da Home"
            position="absolute"
            zIndex={1}
        />

        <Flex
          zIndex={2}
          maxWidth={1160}
          width="100%"
          height="100%"
          mx="auto"
          justifyContent="flex-start"
          alignItems="flex-end"
        >
            <Heading mb="12" color="gray.200" 
              px="6">
                {name}
            </Heading>
        </Flex>
    </Flex>
    );
}