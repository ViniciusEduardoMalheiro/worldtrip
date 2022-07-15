import { Flex, Heading, Text } from '@chakra-ui/react'

export default function BannerPag2 () {
    return (
        <Flex
        w='100%'
        h={['150px', '300px', '500px']}
        bgImage="url('/background pag2.png')"
        bgPosition='center'
        bgRepeat='no-repeat'
        px={['0', '0', '24']}
        pt={['0', '0', '72']}
        align='center'
        justify={['center', 'center', 'flex-start']}
        
        >
            <Heading color='#F5F8FA'
            textAlign={['center', 'left']}
            fontSize={['1.75rem', '5xl']}
            fontWeight='500'
            >
                Europa
            </Heading>
        </Flex> 

        
    )
}