import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import {FaReact} from "react-icons/fa"
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "2" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hola !, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Navid Mansuri<FaReact color="#61DBFB" /></Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>I am a Navid Mansuri from Gujarat, a web developer (software engineer), I have studied in Navgurukul inside Himachal Pradesh.</Text>

                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://github.com/NavidMansuri5155")
                    }>Hire Me</Button>
                    

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "3" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px"  src='https://avatars.githubusercontent.com/u/68747323?s=400&u=1c3dd215d5126263dd38ccad23ae8794537a5d2b&v=4' />
            </Flex>
            

        </Stack>
    )
}

export default Header