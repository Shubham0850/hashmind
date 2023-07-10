import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const Section = () => {
  return (
    <Container py={{ base: "30px", md: "50px" }} maxW={1300}>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "initial", md: "center" }}
      >
        <Box flex="1" textColor="white" mb={{ base: "30px", md: 0 }}>
          <Text
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={400}
            textTransform={"uppercase"}
            color="#DF5"
            lineHeight={"normal"}
            mb="24px"
          >
            Consumer Layer
          </Text>
          <Text
            fontSize={{ base: "23px", md: "50px" }}
            fontWeight={600}
            mb="50px"
            lineHeight="normal"
            width="100%"
          >
            “We are shaping the consumer space by combining the potential of{" "}
            <b style={{ color: "#df5" }}>Web3 and AI.”</b>
          </Text>
          <Text
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight={400}
            width={{ base: "100%", md: "50%" }}
            paddingLeft={1}
            lineHeight="normal"
            display={{ base: "none", md: "block" }}
          >
            <b style={{ color: "#df5" }}>User adoption</b> is the catalyst for
            the flourishing, democratizing, and paradigm-shifting potential of
            crypto and Web3. We build Web3's transformative capabilities with AI
            to deliver desirable crypto ventures.
          </Text>
        </Box>
        <Box display="flex" justifyContent={{ base: "center", md: "flex-end" }}>
          <Image
            src="/web3-banner.png"
            alt="web3-banner"
            width={{ base: "100%", md: "343px" }}
            height={{ base: "auto", md: "364px" }}
          />
        </Box>
        <Text
          fontSize={{ base: "18px", md: "24px" }}
          fontWeight={400}
          width={{ base: "100%", md: "50%" }}
          paddingLeft={1}
          mt={"40px"}
          lineHeight="normal"
          display={{ base: "block", md: "none" }}
        >
          <b style={{ color: "#df5" }}>User adoption</b> is the catalyst for the
          flourishing, democratizing, and paradigm-shifting potential of crypto
          and Web3. We build Web3's transformative capabilities with AI to
          deliver desirable crypto ventures.
        </Text>
      </Flex>
    </Container>
  );
};

export default Section;
