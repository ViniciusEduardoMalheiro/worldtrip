import { Box, Grid, Flex, Heading, Link, Image, Text } from '@chakra-ui/react'

export default function City () {
    return (
        <>
          <Box borderRadius='4px' overflow='hidden'>
            <Image src='/londres.jpg' h='170px' w='100%' />
            <Flex p='6' align='center' justify='space-between' bg='white' border='1px' borderColor='yellow.300' borderTop='0'>
                <Flex direction='column' >
                  <Heading fontSize='xl' fontWeight='500' >Londres</Heading>
                  <Text mt='3' fontSize='md' color='gray.500' fontWeight='500' >Reino Unido</Text>
                </Flex>
                <Image src='/reino unido.png' h='30px' w='30px' borderRadius='16px' objectFit='cover' />
            </Flex>
        </Box>
        <Box borderRadius='4px' overflow='hidden'>
            <Image src='/paris.jpg' h='170px' w='100%' />
            <Flex p='6' align='center' justify='space-between' bg='white' border='1px' borderColor='yellow.300' borderTop='0'>
                <Flex direction='column' >
                  <Heading fontSize='xl' fontWeight='500' >Paris</Heading>
                  <Text mt='3' fontSize='md' color='gray.500' fontWeight='500' >França</Text>
                </Flex>
                <Image src='/bandeira-paris.png' h='30px' w='30px' borderRadius='16px' objectFit='cover' />
            </Flex>
        </Box>
        <Box borderRadius='4px' overflow='hidden'>
            <Image src='/city roma.jpg' h='170px' w='100%' />
            <Flex p='6' align='center' justify='space-between' bg='white' border='1px' borderColor='yellow.300' borderTop='0'>
                <Flex direction='column' >
                  <Heading fontSize='xl' fontWeight='500' >Roma</Heading>
                  <Text mt='3' fontSize='md' color='gray.500' fontWeight='500' >Itália</Text>
                </Flex>
                <Image src='bandeira-roma.jpg' h='30px' w='30px' borderRadius='16px' objectFit='cover' />
            </Flex>
        </Box>
        <Box borderRadius='4px' overflow='hidden'>
            <Image src='/city praga.jpg' h='170px' w='100%' />
            <Flex p='6' align='center' justify='space-between' bg='white' border='1px' borderColor='yellow.300' borderTop='0'>
                <Flex direction='column' >
                  <Heading fontSize='xl' fontWeight='500' >Praga</Heading>
                  <Text mt='3' fontSize='md' color='gray.500' fontWeight='500' >Republica Theca</Text>
                </Flex>
                <Image src='/bandeira checa.png' h='30px' w='30px' borderRadius='16px' objectFit='cover' />
            </Flex>
        </Box>
        <Box borderRadius='4px' overflow='hidden'>
            <Image src='/city amsterdam.jpg' h='170px' w='100%' />
            <Flex p='6' align='center' justify='space-between' bg='white' border='1px' borderColor='yellow.300' borderTop='0'>
                <Flex direction='column' >
                  <Heading fontSize='xl' fontWeight='500' >Amsterdã</Heading>
                  <Text mt='3' fontSize='md' color='gray.500' fontWeight='500' >Holanda</Text>
                </Flex>
                <Image src='/bandeira amsterdam.png' h='30px' w='30px' borderRadius='16px' objectFit='cover' />
            </Flex>
        </Box>
        <Box borderRadius='4px' overflow='hidden'>
            <Image src='/city rj.jpg' h='170px' w='100%' />
            <Flex p='6' align='center' justify='space-between' bg='white' border='1px' borderColor='yellow.300' borderTop='0'>
                <Flex direction='column' >
                  <Heading fontSize='xl' fontWeight='500' >Rio de Janeiro</Heading>
                  <Text mt='3' fontSize='md' color='gray.500' fontWeight='500' >Brasil</Text>
                </Flex>
                <Image src='/bandeira brasil.jpg' h='30px' w='30px' borderRadius='16px' objectFit='cover' />
            </Flex>
        </Box>
        <Link href='/cidadeNovaYork' >
            <Box borderRadius='4px' overflow='hidden'>
            <Image src='/city york.jpg' h='170px' w='100%' />
            <Flex p='6' align='center' justify='space-between' bg='white' border='1px' borderColor='yellow.300' borderTop='0'>
                <Flex direction='column' >
                  <Heading fontSize='xl' fontWeight='500' >Nova York</Heading>
                  <Text mt='3' fontSize='md' color='gray.500' fontWeight='500' >Estados Unidos</Text>
                </Flex>
                <Image src='/bandeira eua.png' h='30px' w='30px' borderRadius='16px' objectFit='cover' />
            </Flex>
        </Box>
        </Link>
        
        <Box borderRadius='4px' overflow='hidden'>
            <Image src='/city tokyo.jpg' h='170px' w='100%' />
            <Flex p='6' align='center' justify='space-between' bg='white' border='1px' borderColor='yellow.300' borderTop='0'>
                <Flex direction='column' >
                  <Heading fontSize='xl' fontWeight='500' >Tokyo</Heading>
                  <Text mt='3' fontSize='md' color='gray.500' fontWeight='500' >Japão</Text>
                </Flex>
                <Image src='/bandeira japao.jpg' h='30px' w='30px' borderRadius='16px' border='1px solid' objectFit='cover' />
            </Flex>
        </Box>  
        </>
    )
}