import { Flex, Heading, Link, Text, Icon } from '@chakra-ui/react'
import { FiArrowLeft  } from 'react-icons/fi'

export default function CidadeNovaYork () {
    return (
        <>
    <Flex direction='column' px='80px' py='80px' >
        <Link href='/continent' >
          <Icon as={FiArrowLeft} mb='15px' w='48px' h='48px' />  
        </Link>
    
    <Heading>Teste de links</Heading>
    <Text>
        A cidade de Nova York compreende 5 distritos situados no encontro do rio Hudson com o Oceano Atlântico.<br/> No centro da cidade fica Manhattan, um distrito com alta densidade demográfica que está entre os principais<br/> centros comerciais, financeiros e culturais do mundo. Entre seus pontos emblemáticos, destacam-se arranha-céus,<br/> como o Empire State Building, e o enorme Central Park. O teatro da Broadway fica em meio às luzes de neon da Times Square.
    </Text> 
    </Flex>
        </>
   
    )
}