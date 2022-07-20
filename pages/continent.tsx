import { Flex, Text } from '@chakra-ui/react'
import BannerPag2 from '../components/BannerPag2'
import Header from '../components/Header'
import Content from '../components/Content'
import Cidades from '../components/Cidades'

export default function Continent () {
    return (
    <Flex direction='column'>
        <Header />
        <BannerPag2 />

        <Flex
        direction='column'
        maxWidth='1160px'
        mx='auto'
        mb='10px'
        px='1rem'
        >
            <Content />
            <Cidades />
        </Flex>
        
    </Flex>
    )
}