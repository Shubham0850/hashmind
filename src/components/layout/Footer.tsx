import { Box, Flex, Button, Container, Text, Center } from "@chakra-ui/react";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsMedium, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <Box background={"#080808"}>
      <Container
        maxW={1300}
        background={"transparent"}
        padding={"80px 25px 40px 25px"}
        color="white"
      >
        <Box py={6} bg="transparent">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            bg="transparent"
          >
            {/* Left Column */}
            <Box maxW="sm" p={4} bg="transparent">
              <Text
                bg="transparent"
                fontSize={"24px"}
                fontWeight={"600"}
                mb="32px"
              >
                Why HashMind ?
              </Text>

              <Link href={"#"}>
                <Text bg="transparent" mb="15px" fontSize={"18px"}>
                  About Us
                </Text>
              </Link>
              <Link href={"#"}>
                <Text bg="transparent" mb="15px" fontSize={"18px"}>
                  Blog
                </Text>
              </Link>
              <Link href={"#"}>
                <Text bg="transparent" mb="15px" fontSize={"18px"}>
                  Our Heritages
                </Text>
              </Link>
              <Link href={"#"}>
                <Text bg="transparent" mb="15px" fontSize={"18px"}>
                  Documents
                </Text>
              </Link>
              <Link href={"#"}>
                <Text bg="transparent" mb="15px" fontSize={"18px"}>
                  Careers
                </Text>
              </Link>
              <Link href={"#"}>
                <Text bg="transparent" mb="15px" fontSize={"18px"}>
                  Privacy Policy
                </Text>
              </Link>
            </Box>

            {/* Right Column */}
            <Box p={4} bg={"transparent"} width={"50%"}>
              <Text
                fontSize={"24px"}
                fontWeight={"600"}
                bg={"transparent"}
                textAlign={"center"}
                mb={"30px"}
              >
                Subscribe to our newsletter!
              </Text>
              <Flex
                border="2px solid #DDFF55"
                p="15px"
                gap={5}
                rounded={"10px"}
                width={"80%"}
                mx="auto"
                background={"transparent"}
                mb={"80px"}
              >
                <input
                  placeholder="Enter your email"
                  style={{
                    width: "100%",
                    outline: "none",
                    border: "none",
                    background: "transparent",
                    fontSize: "20px",
                  }}
                />
                <Button
                  p="12px 40px"
                  fontSize={18}
                  fontWeight={400}
                  background="#DDFF55"
                  size="md"
                  rounded="full"
                  color="#000000"
                >
                  Subscribe
                </Button>
              </Flex>

              <Flex justifyContent={"space-between"} bg={"transparent"}>
                <Box width={"50%"} bg={"transparent"}>
                  <Text
                    fontSize={"24px"}
                    textAlign={"center"}
                    bg={"transparent"}
                  >
                    Chat with founder
                  </Text>

                  <Center bg={"transparent"}>
                    <Flex gap={10} mt={"36px"} bg={"transparent"}>
                      <Link href={"#"}>
                        <BsTwitter
                          style={{ background: "transparent" }}
                          fontSize={"35px"}
                        />
                      </Link>

                      <Link href={"#"}>
                        <BiLogoLinkedin
                          style={{ background: "transparent" }}
                          fontSize={"35px"}
                        />
                      </Link>
                    </Flex>
                  </Center>
                </Box>

                <Box width={"50%"} bg={"transparent"}>
                  <Text
                    fontSize={"24px"}
                    textAlign={"center"}
                    bg={"transparent"}
                  >
                    Follow us on
                  </Text>

                  <Center bg={"transparent"}>
                    <Flex gap={10} mt={"36px"} bg={"transparent"}>
                      <Link href={"#"}>
                        <BsTwitter
                          fontSize={"35px"}
                          style={{ background: "transparent" }}
                        />
                      </Link>

                      <Link href={"#"}>
                        <BiLogoLinkedin
                          fontSize={"35px"}
                          style={{ background: "transparent" }}
                        />
                      </Link>

                      <Link href={"#"}>
                        <BsMedium
                          fontSize={"35px"}
                          style={{ background: "transparent" }}
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
            mt={"90px"}
            fontSize={"16px"}
          >
            Copyright © 2023 H2O.ai. All rights reserved
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
