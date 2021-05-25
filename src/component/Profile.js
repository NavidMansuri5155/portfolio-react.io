import React from 'react';
import "./Profile.css"
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text, WrapItem, Wrap, Circle } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { FaLaptopCode, FaRobot, FaPython } from "react-icons/fa"
import { Avatar } from "@chakra-ui/react"

function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:700px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "170vh", md: "170vh", lg: "170vh", xl: "170vh" }}>
            <div className="Nav">
                <Box alignSelf="flex-start" px="8" py="8">
                    <Heading fontWeight="extrabold" color="cyan.500" size="2xl">
                        NavGurukul
                </Heading>
                    <Text fontSize="2xl" color="gray.400"> PRO Student</Text>
                </Box>
            </div>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl" py="19.5">Product Designer and Developer, specialised in mobile app development.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 1 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "#737373", }} >
                        <Wrap >
                            <WrapItem >
                                <Circle position="absolute" bg="#9D9796" opacity="0.2"
                                    w="106px" h="106px" alignSelf="flex-end" />
                                <Avatar
                                    alignSelf="flex-end"
                                    size="xl"
                                    src="https://avatars.githubusercontent.com/u/44016225?v=4"
                                />
                            </WrapItem>
                        </Wrap>
                        <Icon color="black" p="4" as={FaLaptopCode} w="24" h="24" />
                        <Text color="black" p="3" fontSize="xl" fontWeight="semibold">
                            Full Stack
                        </Text>
                    </Flex>

                    <div className="cardTwo" >
                        <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                            bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "#737373", }}>
                            <Wrap >
                                <WrapItem >
                                    <Circle position="absolute" bg="#9D9796" opacity="0.2"
                                        w="106px" h="106px" alignSelf="flex-end" />
                                    <Avatar
                                        alignSelf="flex-end"
                                        size="xl"
                                        src="https://avatars.githubusercontent.com/u/81804146?v=4"
                                    />
                                </WrapItem>
                            </Wrap>
                            <Icon color="black" p="4" as={FaPython} w="24" h="24" />
                            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                Python
                        </Text>
                        </Flex>
                    </div>
                    <div className="cardTh">
                        <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                            bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                            _hover={{ bg: "#737373", }}

                        >
                            <Wrap >
                                <WrapItem >
                                    <Circle position="absolute" bg="#9D9796" opacity="0.2"
                                        w="106px" h="106px" alignSelf="flex-end" />
                                    <Avatar
                                        alignSelf="flex-end"
                                        size="xl"
                                        src="https://avatars.githubusercontent.com/u/54570265?v=4"
                                    />
                                </WrapItem>
                            </Wrap>
                            <Icon as={FaRobot} p="4" w="24" h="24" color="black" />
                            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                ML
                        </Text>
                        </Flex>
                    </div>
                </Flex>

            </Box>

        </Flex>

    )
}

export default Profile
