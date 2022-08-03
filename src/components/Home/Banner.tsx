import { Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export default function Banner(){

    const isWideversion = useBreakpointValue({
      base: false,
      lg: true
    })
    
    return(
      <Flex position="relative" height={335} align="center">
      <Image
        src="/home-banner.jpg"
        width={1440}
        height={335} 
        objectFit="cover"
        alt="Banner da Home"
        position="absolute"
        zIndex={1}
      />

      <Flex width="100%" maxWidth={1150} mx="auto" justifyContent="space-between" zIndex={1}>
        <Flex px="6" maxWidth={520} justifyContent="center" direction="column">
          <Text
            fontSize="4xl"
            color="gray.200"
            fontWeight="500"
          >
              5 Continentes,
              infinitas possibilidades.
          </Text>

          <Text 
            fontSize="larger"
            color="gray.300"
            fontWeight="400"
            mt="4"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Flex>

       {isWideversion && <Image
          src="/airplane.svg"
          width={417}
          height={270} 
          alt="Airplane home"
          mt="32"
        />}           
      </Flex>
    </Flex>
    );
}