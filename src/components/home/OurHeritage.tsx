import { Box, Container, Flex, Text, Grid } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function OurHeritage() {
  return (
    <Container maxW={1300} padding={"50px 25px"}>
      <Box>
        <Box mb={{ base: "30px", md: "60px" }}>
          <Text
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={400}
            mb={{ base: "8px", md: "12px" }}
            color={"#df5"}
          >
            OUR HERITAGE
          </Text>
          <Text
            fontSize={{ base: "33px", md: "60px" }}
            fontWeight={600}
            lineHeight={"normal"}
            color="white"
          >
            We are the
            <br /> Architects of <b>tomorrow</b>
          </Text>
        </Box>

        <Flex
          flexDirection={{ base: "column", md: "row" }}
          bg="transparent"
          p={"0px 50px"}
        >
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
            gap={4}
          >
            <Flex
              borderRight={{ base: "none", md: "1px solid #df5" }}
              borderBottom={{ base: "1px solid #df5", md: "none" }}
              pr={4}
              justifyContent="center"
              alignItems="center"
            >
              <Box py={{ base: "20px", md: "50px" }}>
                <Image
                  width={60}
                  height={60}
                  src="/thumb-icon.svg"
                  alt="thumb icon"
                />
                <Text
                  mt={{ base: "12px", md: "22px" }}
                  fontSize={"24px"}
                  fontWeight={600}
                  color="white"
                >
                  We pioneer
                  <br /> convergence
                </Text>
              </Box>
            </Flex>

            <Flex
              borderRight={{ base: "none", md: "1px solid #df5" }}
              borderBottom={{ base: "1px solid #df5", md: "none" }}
              pr={4}
              justifyContent="center"
              alignItems="center"
            >
              <Box py={{ base: "20px", md: "50px" }}>
                <Image
                  width={60}
                  height={60}
                  src="/idea-icon.svg"
                  alt="Idea icon"
                />
                <Text
                  mt={{ base: "12px", md: "22px" }}
                  fontSize={"24px"}
                  fontWeight={600}
                  color="white"
                >
                  We redefine <br />
                  possibilities
                </Text>
              </Box>
            </Flex>

            <Flex
              borderRight={{ base: "none", md: "1px solid #df5" }}
              borderBottom={{ base: "1px solid #df5", md: "none" }}
              pr={4}
              justifyContent="center"
              alignItems="center"
            >
              <Box py={{ base: "20px", md: "50px" }}>
                <Image
                  width={60}
                  height={60}
                  src="/coding-icon.svg"
                  alt="coding icon"
                />
                <Text
                  mt={{ base: "12px", md: "22px" }}
                  fontSize={"24px"}
                  fontWeight={600}
                  color="white"
                >
                  We build
                  <br /> for Demand
                </Text>
              </Box>
            </Flex>

            <Flex pr={4} justifyContent="center" alignItems="center">
              <Box py={{ base: "20px", md: "50px" }}>
                <Image
                  width={60}
                  height={60}
                  src="/globe-icon.svg"
                  alt="globe icon"
                />
                <Text
                  mt={{ base: "12px", md: "22px" }}
                  fontSize={"24px"}
                  fontWeight={600}
                  color="white"
                >
                  Societal impact
                  <br /> is the goal
                </Text>
              </Box>
            </Flex>
          </Grid>
        </Flex>
      </Box>
    </Container>
  );
}

export default OurHeritage;
