import { Flex, Heading, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, A11y])
import Link from 'next/link'

export default function Slider () {
      

    return (
        <Flex
        w="100%"
        maxW="1240px"
        mx="auto"
        mb={['5', '10']}
        h={['250px', '450px']}
        >
        <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
            }}
            style={{ width: '100%', flex: '1' }}
            >

            <SwiperSlide>
                <Flex
                w='100%'
                h='100%'
                align='center'
                justify='center'
                direction='column'
                bgImage="url(/europe.png)"
                bgRepeat='no-repeat'
                bgSize='cover'
                textAlign='center'
                bgPosition='center'
                >
                    <Link href='/continent/europe' >
                        <a >
                            <Heading color='#F5F8FA' >Europa</Heading>
                            <Text color='#DADADA' >O continente mais antigo</Text>
                        </a>
                    </Link>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex
                w='100%'
                h='100%'
                align='center'
                justify='center'
                direction='column'
                bgImage="url(/europe.png)"
                bgRepeat='no-repeat'
                bgSize='cover'
                textAlign='center'
                bgPosition='center'
                >
                    <Link href='/continent/europe' >
                        <a >
                            <Heading color='#F5F8FA' >Europa</Heading>
                            <Text color='#DADADA' >O continente mais antigo</Text>
                        </a>
                    </Link>
                </Flex>
            </SwiperSlide>
            </Swiper>
        </Flex>
    )
}