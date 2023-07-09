import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function OurHeritage() {
  return (
    <Container maxW={1300}>
      <Box>
        <Box mb={"60px"}>
          <Text fontSize={"24px"} fontWeight={400} mb={"12px"} color={"#df5"}>
            OUR HERITAGE
          </Text>
          <Text fontSize={"60px"} fontWeight={600} lineHeight={"normal"}>
            We are the
            <br /> Architects of <b>tomorrow</b>
          </Text>
        </Box>

        <Flex flexDirection="column" bg="transparent" p={4}>
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Flex
              width="25%"
              borderRight="1px solid #df5"
              pr={4}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box py="50px">
                <Image
                  width={60}
                  height={60}
                  src="/thumb-icon.svg"
                  alt="thumb icon"
                />
                <Text mt={"22px"} fontSize={"24px"} fontWeight={600}>
                  We pioneer
                  <br /> convergence
                </Text>
              </Box>
            </Flex>

            <Flex
              width="25%"
              borderRight="1px solid #df5"
              pr={4}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box py="50px">
                <Image
                  width={60}
                  height={60}
                  src="/idea-icon.svg"
                  alt="Idea icon"
                />
                <Text mt={"22px"} fontSize={"24px"} fontWeight={600}>
                  We redefine <br />
                  possibilities
                </Text>
              </Box>
            </Flex>

            <Flex
              width="25%"
              borderRight="1px solid #df5"
              pr={4}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box py="50px">
                <Image
                  width={60}
                  height={60}
                  src="/coding-icon.svg"
                  alt="coding icon"
                />
                <Text mt={"22px"} fontSize={"24px"} fontWeight={600}>
                  We build
                  <br /> for Demand
                </Text>
              </Box>
            </Flex>

            <Flex
              width="25%"
              pr={4}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box py="50px">
                <Image
                  width={60}
                  height={60}
                  src="/globe-icon.svg"
                  alt="globe icon"
                />
                <Text mt={"22px"} fontSize={"24px"} fontWeight={600}>
                  Societal impact
                  <br /> is the goal
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}

export default OurHeritage;
