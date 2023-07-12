import { Box, Text, Link, Container, VStack } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";

function WhoWeAre() {
  return (
    <Container maxW={1300} id="aboutUs">
      <Box textAlign="center" p={{ base: 0, md: 36 }}>
        <Text
          fontSize={{ base: "40px", md: "50px" }}
          py={8}
          fontWeight={400}
          color={"#FFF"}
          lineHeight={"normal"}
        >
          Who we are
        </Text>
        <Text
          fontSize={{ base: "18px", md: "24px" }}
          fontWeight={400}
          textAlign="center"
          p={10}
          color={"#FFF"}
        >
          We are fueling the dreams of pioneers and captivating the hearts of
          consumers. Our venture studio embarks on a transformative journey{" "}
          <span style={{ color: "yellow" }}>
            {" "}
            with industry expert teams, bridging the realms of Web3 and AI,
            weaving extraordinary projects that leave a lasting impression.
          </span>
        </Text>
        <VStack align="center" spacing={4}>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={"bold"}
              textDecoration="underline"
              color={"#FFF"}
              display={"flex"}
              alignItems="center"
              p={5}
            >
              Know More
              <Icon className="blink" as={BsArrowRight} color={"yellow"} m={2} />
            </Text>
          </Link>
        </VStack>
      </Box>
    </Container>
  );
}

export default WhoWeAre;
