import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  Image,
} from "@chakra-ui/react";

interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
}

function Card({ title, description, imgSrc }: CardProps) {
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
        {/* <Heading
          textAlign="center"
          mb={{ base: "55px", md: "110px" }}
          fontSize={{ base: "27px", md: "50px" }}
          fontWeight={"600"}
          textColor="white"
        >
          Nurturing{" "}
        </Heading> */}

        <Box
          overflow={"hidden"}
          height={{base: "45px", md: "70px"}}
          mb={{ base: "55px", md: "110px" }}
        >
          <div className="words">
            <span className="animated-text-2">
              Nutruring{" "}
              <b style={{ color: "#DDFF55", fontWeight: "600" }}>Innovators</b>
            </span>
            <span className="animated-text-2">
              Evolving{" "}
              <b style={{ color: "#DDFF55", fontWeight: "600" }}>Porjects</b>
            </span>
            <span className="animated-text-2">
              Thriving{" "}
              <b style={{ color: "#DDFF55", fontWeight: "600" }}>Consumers</b>
            </span>
          </div>
        </Box>

        <Flex
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          gap={"50px"}
        >
          <Box>
            <Card
              imgSrc={"/Research Driven.gif"}
              title={"Research Driven"}
              description={
                "Revolutionising Web3 Consumer Experiences with AI at the Core with Expertise"
              }
            />
            <Box mt={{ base: "50px", md: "120px" }} />
            <Card
              imgSrc={"/Advice.gif"}
              title={"Advice"}
              description={
                "Our experienced advisors offer guidance in product, GTM, community, and scale to empower our portfolio founders."
              }
            />
          </Box>

          <Box pt={{ base: "0px", md: "150px" }}>
            <Card
              imgSrc={"/build.gif"}
              title={"Build"}
              description={
                "Empowering Projects, Unleashing Web3  Consumer Applications with Our Expertise and Ingenuity"
              }
            />
            <Box mt={{ base: "50px", md: "120px" }} />
            <Card
              imgSrc={"/Alliance.gif"}
              title={"Alliance"}
              description={
                "Forging network of Partnerships to Redefine the Web3 and AI Landscape"
              }
            />
          </Box>

          <Box pt={{ base: "0px", md: "300px" }}>
            <Card
              imgSrc={"/growth.gif"}
              title={"Growth"}
              description={
                "We bring proven strategies for early stage companies to get traction and branding"
              }
            />
            <Box mt={{ base: "50px", md: "120px" }} />
            <Card
              imgSrc={"/Fund.gif"}
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
