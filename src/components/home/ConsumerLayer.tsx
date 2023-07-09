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
    <Container py="50px" maxW={1300}>
      <Flex alignItems="center">
        <Box flex="1" textColor="white">
          <Text
            fontSize="24px"
            fontWeight="400"
            textTransform={"uppercase"}
            color="#DF5"
            lineHeight={"normal"}
            mb="24px"
          >
            Consumer Layer
          </Text>
          <Text
            fontSize="50px"
            fontWeight="600"
            mb="50px"
            lineHeight="normal"
            width="85%"
          >
            “We are shaping the consumer space by combining potential of{" "}
            <b style={{ color: "#df5" }}>Web3 and AI.”</b>
          </Text>
          <Text
            fontSize={24}
            fontWeight={400}
            width="50%"
            paddingLeft={1}
            lineHeight="normal"
          >
            <b style={{ color: "#df5" }}>User adoption</b> is the catalyst for
            the flourishing, democratising, and paradigm-shifting potential of
            crypto and Web3. We build Web3's transformative with AI capabilities
            to deliver desirable crypto ventures.
          </Text>
        </Box>
        <Box display="flex" justifyItems="center">
          <Image
            src="/web3-banner.png"
            alt="web3-banner"
            width="343px"
            height="364px"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Section;
