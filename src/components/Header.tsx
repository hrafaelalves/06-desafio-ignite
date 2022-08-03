import { Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";

import { FaChevronLeft } from 'react-icons/fa';

interface HeaderProps{
    arrowBack?: boolean
}

export default function Header({ arrowBack = false }: HeaderProps){
    return(
        <Flex 
            as="header"
            maxWidth={1440}
            justifyContent="center"
            align="center"
            height="6.25rem"
            mx="auto"
            width="100%"
        >
            { arrowBack && (
                <Link href="/" passHref>
                    <Flex as="a" ml="8">
                        <Icon as={FaChevronLeft} fontSize="24"/>
                    </Flex>
                </Link>
            )}
            
            <Flex flex={1} justifyContent="center">
                <Image src="/worldtrip-logo.svg" alt="WorldTrip" width={184} height={45}/>
            </Flex>
        </Flex>
    );
}