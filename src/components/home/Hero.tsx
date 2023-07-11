import {
  Box,
  Button,
  Container,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";

function Hero() {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Container
      maxW={1300}
      pt={{ base: "10px", md: "20px" }}
      position="relative"
    >
      <Box position="relative" className="hero">
        <Image
          width="100%"
          src="/hero-bg.png"
          alt="hero background"
          display={{ base: "none", md: "block" }}
        />

        <Box
          position="absolute"
          bg="transparent"
          left={0}
          padding={{ base: "80px 0 0 20px", md: "100px 0 0 80px" }}
          bottom={{ base: 20, md: "none" }}
        >
          <Text
            fontWeight={500}
            bg="rgba(0, 0, 0, 0)"
            fontSize={{ base: "30px", md: "60px" }}
            width={isMobile ? "100%" : "626px"}
            color="#DDFF55"
          >
            Convergence of Web3 & AI <b style={{background:'transparent',color:'white'}} >Venture Studio</b>
          </Text>

          <Box
            bg="rgba(0, 0, 0, 0)"
            display="flex"
            py={{ base: 6, md: 10 }}
            zIndex={10}
          >
            <Text
              fontSize={{ base: "30px", md: "40px" }}
              bg="rgba(0, 0, 0, 0)"
              fontWeight={600}
              color="white"
              p={4}
            >
              Let’s
            </Text>
            <Text
              fontSize={{ base: "40px", md: "60px" }}
              bg="rgba(0, 0, 0, 0)"
              fontWeight={600}
              color="#DDFF55"
            >
              Envision.
            </Text>
          </Box>

          <Button background="#DDFF55" _hover={{background:'white'}} size="lg">
            Build With Us
          </Button>
        </Box>
      </Box>

      <IconButton
        boxShadow="box-shadow: 0px 0px 12px 0px rgba(251,251,251,0.75);
        -webkit-box-shadow: 0px 0px 12px 0px rgba(251,251,251,0.75);
        -moz-box-shadow: 0px 0px 12px 0px rgba(251,251,251,0.75);"
        ml={1}
        w="60px"
        h="60px"
        icon={
          <BsArrowDown
            className="blink"
            style={{
              background: "transparent",
              color: "black",
              fontSize: 22,
            }}
          />
        }
        aria-label="User Profile"
        variant="ghost"
        size="md"
        background={"white"}
        rounded={"full"}
        position={"absolute"}
        bottom={"-30px"}
        left={"calc(50% - 30px)"}
        zIndex={10}
      />
    </Container>
  );
}

export default Hero;
