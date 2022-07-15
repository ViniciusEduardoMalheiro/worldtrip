import { Flex, Grid, Image, Icon } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { FiArrowLeft } from 'react-icons/fi'

export default function Header() {
    const { asPath } = useRouter();
    const notHomePage = asPath !== "/"

    return (
        <Flex bg='white' 
        w='100%' 
        as='header' 
        mx='auto' 
        px='1rem' 
        h={["50px", "100px"]} 
        align='center' 
        justify='center' 
        >
            <Grid
            h='100%'
            mx='auto'
            w='100% '
            maxW='1160px'
            alignItems='center'
            templateColumns='repeat(3, 1fr)'
            justifyContent='center'
            >

                {notHomePage &&  (
                    <Link href='/'>
                    <a>
                        <Icon as={FiArrowLeft} fontSize={['2xl', '3xl', '5xl']} mt='15px' h='34px' />
                    </a>
                    </Link>
                )}

                <Image src='./Logo.svg' 
                w={['81px', '184px']}
                alt='logo'
                justifySelf='center'
                gridColumn='2'
                />
            </Grid>
        </Flex>
    )
}