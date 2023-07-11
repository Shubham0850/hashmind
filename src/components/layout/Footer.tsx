import {
  Box,
  Flex,
  Button,
  Container,
  Text,
  Center,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsMedium, BsTwitter } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

// Extend the Chakra UI theme to override default styles
const theme = extendTheme({
  styles: {
    global: {
      ".chakra-accordion__item:first-of-type": {
        borderTop: "none",
      },
      ".chakra-accordion__item:last-of-type": {
        borderBottom: "none",
      },
    },
  },
});

function Footer() {
  return (
    <ChakraProvider theme={theme}>
      <Box background={"#080808"}>
        <Container
          maxW={1300}
          background={"transparent"}
          padding={{ base: "80px 25px 40px 25px", md: "80px 50px 40px 50px" }}
          color="white"
        >
          <Box py={6} bg="transparent">
            <Flex
              direction={{ base: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              bg="transparent"
            >
              {/* Left Column */}
              <Box
                maxW="sm"
                p={4}
                bg="transparent"
                mb={{ base: "30px", md: 0 }}
              >
                {/* Hide on mobile */}
                <Text
                  bg="transparent"
                  fontSize={{ base: "20px", md: "24px" }}
                  fontWeight={"600"}
                  mb={{ base: "15px", md: "32px" }}
                  display={{ base: "none", md: "block" }}
                >
                  Why HashMind ?
                </Text>

                {/* Mobile Accordion */}
                <Accordion
                  allowMultiple
                  display={{ base: "block", md: "none" }}
                  className="footer-accordion"
                >
                  <AccordionItem>
                    <h2>
                      <AccordionButton
                        _focus={{ outline: "none" }}
                        _hover={{ bg: "transparent" }}
                        _expanded={{ bg: "transparent" }}
                        bg="black"
                        mb="15px"
                      >
                        <Box flex="1" textAlign="left">
                          {/* Show on mobile */}
                          <Text
                            fontSize={{ base: "20px", md: "24px" }}
                            fontWeight={"600"}
                            mb="15px"
                            ml="2rem"
                            mr="2rem"
                            color="white"
                          >
                            Why HashMind
                          </Text>
                        </Box>
                        <Box as={FaPlus} fontSize="12px" color="white" />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg="black">
                      <Link href={"#"}>
                        <Text
                          bg="transparent"
                          mb="15px"
                          fontSize={{ base: "16px", md: "18px" }}
                          color="white"
                          ml="2rem"
                          mr="2rem"
                        >
                          About Us
                        </Text>
                      </Link>
                      <Link href={"#"}>
                        <Text
                          bg="transparent"
                          mb="15px"
                          fontSize={{ base: "16px", md: "18px" }}
                          color="white"
                          ml="2rem"
                          mr="2rem"
                        >
                          Blog
                        </Text>
                      </Link>
                      <Link href={"#"}>
                        <Text
                          bg="transparent"
                          mb="15px"
                          fontSize={{ base: "16px", md: "18px" }}
                          color="white"
                          ml="2rem"
                          mr="2rem"
                        >
                          Our Heritages
                        </Text>
                      </Link>
                      <Link href={"#"}>
                        <Text
                          bg="transparent"
                          mb="15px"
                          fontSize={{ base: "16px", md: "18px" }}
                          color="white"
                          ml="2rem"
                          mr="2rem"
                        >
                          Documents
                        </Text>
                      </Link>
                      <Link href={"#"}>
                        <Text
                          bg="transparent"
                          mb="15px"
                          fontSize={{ base: "16px", md: "18px" }}
                          color="white"
                          ml="2rem"
                          mr="2rem"
                        >
                          Careers
                        </Text>
                      </Link>
                      <Link href={"#"}>
                        <Text
                          bg="transparent"
                          mb="15px"
                          fontSize={{ base: "16px", md: "18px" }}
                          color="white"
                          ml="2rem"
                          mr="2rem"
                        >
                          Privacy Policy
                        </Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                {/* Desktop Links */}
                <Box display={{ base: "none", md: "block" }} bg="transparent">
                  <Link href={"#"}>
                    <Text
                      bg="transparent"
                      mb="15px"
                      fontSize={{ base: "16px", md: "18px" }}
                    >
                      About Us
                    </Text>
                  </Link>
                  <Link href={"#"}>
                    <Text
                      bg="transparent"
                      mb="15px"
                      fontSize={{ base: "16px", md: "18px" }}
                    >
                      Blog
                    </Text>
                  </Link>
                  <Link href={"#"}>
                    <Text
                      bg="transparent"
                      mb="15px"
                      fontSize={{ base: "16px", md: "18px" }}
                    >
                      Our Heritages
                    </Text>
                  </Link>
                  <Link href={"#"}>
                    <Text
                      bg="transparent"
                      mb="15px"
                      fontSize={{ base: "16px", md: "18px" }}
                    >
                      Documents
                    </Text>
                  </Link>
                  <Link href={"#"}>
                    <Text
                      bg="transparent"
                      mb="15px"
                      fontSize={{ base: "16px", md: "18px" }}
                    >
                      Careers
                    </Text>
                  </Link>
                  <Link href={"#"}>
                    <Text
                      bg="transparent"
                      mb="15px"
                      fontSize={{ base: "16px", md: "18px" }}
                    >
                      Privacy Policy
                    </Text>
                  </Link>
                </Box>
              </Box>

              {/* Right Column */}
              <Box p={4} bg={"transparent"} width={{ base: "100%", md: "50%" }}>
                <Text
                  fontSize={{ base: "20px", md: "24px" }}
                  fontWeight={"600"}
                  bg={"transparent"}
                  textAlign="center"
                  mb={{ base: "30px", md: "30px" }}
                >
                  Subscribe to our newsletter!
                </Text>
                <Flex
                  align={{ base: "center", md: "initial" }}
                  justify="center"
                  gap={5}
                  mb={{ base: "30px", md: "80px" }}
                  bg={"transparent"}
                  border="2px solid #DDFF55"
                  p={2}
                  rounded={"10px"}
                >
                  <Input
                    placeholder="Enter your email"
                    bg="transparent"
                    fontSize={{ base: "16px", md: "20px" }}
                    px="10px"
                    py="8px"
                    outline="none"
                    border={"none"}
                    color="white"
                    _placeholder={{ color: "white" }}
                  />
                  <Button
                    px={{ base: "20px", md: "40px" }}
                    py={{ base: "10px", md: "12px" }}
                    fontSize={{ base: "16px", md: "18px" }}
                    fontWeight={400}
                    background="#DDFF55"
                    rounded="full"
                    color="#000000"
                  >
                    Subscribe
                  </Button>
                </Flex>

                <Flex
                  direction={{ base: "column", md: "row" }}
                  justify={{ base: "center", md: "space-between" }}
                  align="center"
                  bg={"transparent"}
                >
                  <Box
                    width={"100%"}
                    mb={{ base: "30px", md: 0 }}
                    bg={"transparent"}
                  >
                    <Text
                      fontSize={{ base: "20px", md: "24px" }}
                      textAlign="center"
                      bg={"transparent"}
                    >
                      Chat with founder
                    </Text>

                    <Center bg={"transparent"}>
                      <Flex
                        gap={10}
                        mt={"36px"}
                        bg={"transparent"}
                        justify={{ base: "center", md: "initial" }}
                      >
                        <Link href={"#"}>
                          <BsTwitter
                            style={{
                              background: "transparent",
                              fontSize: "35px",
                            }}
                          />
                        </Link>

                        <Link href={"#"}>
                          <BiLogoLinkedin
                            style={{
                              background: "transparent",
                              fontSize: "35px",
                            }}
                          />
                        </Link>
                      </Flex>
                    </Center>
                  </Box>

                  <Box width={"100%"} bg={"transparent"}>
                    <Text
                      fontSize={{ base: "20px", md: "24px" }}
                      textAlign="center"
                      bg={"transparent"}
                    >
                      Follow us on
                    </Text>

                    <Center bg={"transparent"}>
                      <Flex
                        gap={10}
                        mt={"36px"}
                        bg={"transparent"}
                        justify={{ base: "center", md: "initial" }}
                      >
                        <Link href={"#"}>
                          <BsTwitter
                            style={{
                              background: "transparent",
                              fontSize: "35px",
                            }}
                          />
                        </Link>

                        <Link href={"#"}>
                          <BiLogoLinkedin
                            style={{
                              background: "transparent",
                              fontSize: "35px",
                            }}
                          />
                        </Link>

                        <Link href={"#"}>
                          <BsMedium
                            style={{
                              background: "transparent",
                              fontSize: "35px",
                            }}
                          />
                        </Link>
                      </Flex>
                    </Center>
                  </Box>
                </Flex>
              </Box>
            </Flex>

            <Text
              bg={"transparent"}
              textAlign={"center"}
              mt={{ base: "60px", md: "90px" }}
              fontSize={"16px"}
            >
              Copyright © 2023 H2O.ai. All rights reserved
            </Text>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default Footer;
