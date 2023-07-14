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
import Link from "next/link";

function Hero() {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Box pt={{ base: "10px", md: "20px" }} position="relative">
      <Box
        bgImage="/hero-bg.png"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="80vh"
        w="100%"
        display={{ base: "none", md: "block" }}
      >
        <Container
          maxW={1200}
          height={"80vh"}
          display={"flex"}
          alignItems={"center"}
          bg={"transparent"}
        >
          <Box bg="transparent">
            <Text
              fontWeight={500}
              bg="rgba(0, 0, 0, 0)"
              fontSize={{ base: "30px", md: "60px" }}
              width={isMobile ? "100%" : "626px"}
              color="#DDFF55"
              lineHeight={{ base: "40px", md: "70px" }}
            >
              Convergence of Web3 & AI{" "}
              <b style={{ background: "transparent", color: "white" }}>
                Venture Studio
              </b>
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
                className="line"
              >
                Envision.
              </Text>
            </Box>

            <Link href={"https://forms.gle/beQ3jmeJgsinncJT7"} target="_blank">
              <Button
                background="#DDFF55"
                _hover={{ background: "white" }}
                size="lg"
                color={"black"}
              >
                Build With Us
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
      {isMobile && (
        <Box>
          <Image
            src="/hero-bg2.png"
            alt="hero background"
            w="100%"
            display={{ base: "block", md: "none" }}
          />

          <Box
            position={"absolute"}
            bottom={0}
            left={0}
            px={8}
            py={20}
            bg="transparent"
          >
            <Text
              fontWeight={500}
              bg="rgba(0, 0, 0, 0)"
              fontSize={{ base: "30px", md: "60px" }}
              width={isMobile ? "100%" : "626px"}
              color="#DDFF55"
              lineHeight={{ base: "40px", md: "70px" }}
            >
              Convergence of Web3 & AI{" "}
              <b style={{ background: "transparent", color: "white" }}>
                Venture Studio
              </b>
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

            <Link href={"https://forms.gle/beQ3jmeJgsinncJT7"} target="_blank">
              <Button
                background="#DDFF55"
                _hover={{ background: "white" }}
                size="lg"
                color={"black"}
              >
                Build With Us
              </Button>
            </Link>
          </Box>
        </Box>
      )}

      <Link href="#aboutUs">
        <IconButton
          boxShadow="0px 0px 12px 0px rgba(251,251,251,0.75);"
          _hover={{}}
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
      </Link>
    </Box>
  );
}

export default Hero;
