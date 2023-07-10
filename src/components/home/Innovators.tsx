import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  Image,
} from "@chakra-ui/react";

function Card({ title, description, imgSrc }) {
  return (
    <Box
      maxW="sm"
      flex="1"
      bg={"#4A4A4A"}
      rounded={"30px"}
      boxShadow={"0px 0px 40px 0px rgba(0, 0, 0, 0.25);"}
      p={"50px 50px 95px 50px"}
    >
      <Flex align="center" mb="20px" bg={"transparent"}>
        <Image
          src={imgSrc}
          alt="Image"
          w="60px"
          h="60px"
          mr="10px"
          bg={"transparent"}
        />
        <Text
          fontSize="24px"
          fontWeight="bold"
          color={"#DDFF55"}
          bg={"transparent"}
          textAlign={"center"}
        >
          {title}
        </Text>
      </Flex>
      <Text mt={"100px"} fontSize="22px" bg={"transparent"} color="white">
        {description}
      </Text>
    </Box>
  );
}

function NurturingInnovators() {
  return (
    <Container maxW={1300} py={"50px"}>
      <Box bg="transparent">
        <Heading
          textAlign="center"
          mb={"110px"}
          fontSize={"50px"}
          fontWeight={"600"}
          textColor="white"
        >
          Nurturing{" "}
          <b style={{ color: "#DDFF55", fontWeight: "600" }}>Innovators</b>
        </Heading>

        <Flex
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          gap={"50px"}
        >
          <Box>
            <Card
              imgSrc={"/research-driven.png"}
              title={"Research Driven"}
              description={
                "Revolutionising Web3 Consumer Experiences with AI at the Core with Expertise"
              }
            />
            <Box mt="120px" />
            <Card
              imgSrc={"/advice.png"}
              title={"Advice"}
              description={
                "Our experienced advisors offer guidance in product, GTM, community, and scale to empower our portfolio founders."
              }
            />
          </Box>

          <Box pt="150px">
            <Card
              imgSrc={"/build.png"}
              title={"Build"}
              description={
                "Empowering Projects, Unleashing Web3  Consumer Applications with Our Expertise and Ingenuity"
              }
            />
            <Box mt="120px" />
            <Card
              imgSrc={"/alliance.png"}
              title={"Alliance"}
              description={
                "Forging network of Partnerships to Redefine the Web3 and AI Landscape"
              }
            />
          </Box>

          <Box pt="300px">
            <Card
              imgSrc={"/growth.png"}
              title={"Growth"}
              description={
                "We bring proven strategies for early stage companies to get traction and branding"
              }
            />
            <Box mt="120px" />
            <Card
              imgSrc={"/fund.png"}
              title={"Fund"}
              description={
                "We invest in promising founders by deploying our capital and support fundraise by our partnership potential investors"
              }
            />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}

export default NurturingInnovators;
