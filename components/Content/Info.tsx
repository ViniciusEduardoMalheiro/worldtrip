import { Flex, Text, Heading, Tooltip, Icon, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react"
import { RiInformationLine } from 'react-icons/ri'

export default function Info () {
    return (
        <Flex
        align='center'
        justify='space-between'
        >
            <Flex direction='column' justify='center' align={['flex-start', 'flex-start', 'center']} >
              <Heading fontSize={['2xl', '5xl']} color='#FFBA08' fontWeight='500' >50</Heading>
              <Text fontWeight='600' fontSize={['md', 'xl']} color='#47585B'>países</Text>
            </Flex>

            <Flex direction='column' justify='center' align={['flex-start', 'flex-start', 'center']} >
              <Heading fontSize={['2xl', '5xl']} color='#FFBA08' fontWeight='500' >60</Heading>
              <Text fontWeight='600'  fontSize={['md', 'xl']} color='#47585B'>línguas</Text>
            </Flex>
            
            <Flex direction='column' justify='center' align={['flex-start', 'flex-start', 'center']} >
                <Heading fontSize={['2xl', '5xl']} color='#FFBA08' fontWeight='500' >27</Heading>
                  
                <Text fontWeight='600'  fontSize={['md', 'xl']} color='#47585B'>cidades +100
                <Popover>
                    <PopoverTrigger>
                        <span>
                            <Icon cursor='pointer' as={RiInformationLine} ml='1' color='gray.400' w={['1-px', '16px']} h={['1-px', '16px']} />
                        </span>
                    </PopoverTrigger>
                    <PopoverContent bg='gray.700' color='yellow.400' >
                        <PopoverArrow bg='gray.700' />
                        <PopoverCloseButton />
                        <PopoverBody
                        fontWeight='400'
                        fontSize='lg'
                        
                        >
                            Paris, Europa, Chile, Europa, Canadá, China, etc...
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                </Text>
            </Flex>
            
        </Flex>
    )
}