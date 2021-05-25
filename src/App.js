import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrFacebookOption } from "react-icons/gr"
import Header from "./component/Header";
import Profile from "./component/Profile";
import Social from "./component/Social";


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={3}>
      <Flex w="100%">
        <Heading
          ml="2" size="md-40" fontSize="1.5xl" fontWeight='semibold' color="cyan.400">Web Developer</Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true'></IconButton>
        <IconButton ml={2} icon={<GrFacebookOption />} isRound='true'></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' ></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' ></IconButton>
        <IconButton ml={7} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header />
      <Profile />
      <Social />
      

    </VStack>
  );
}

export default App;