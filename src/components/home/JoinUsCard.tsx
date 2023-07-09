import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

const Card = () => {
  return (
    <Container maxW={1300} padding={"100px 25px 150px 25px"}>
      <Box
        alignContent="center"
        width={"100%"}
        bg="white"
        borderWidth="1px"
        borderRadius="40"
        overflow="hidden"
        p={"49px 113px"}
        display="flex"
        alignItems="center"
      >
        <Box flex="1" pr={4} bg="transparent">
          <Heading
            as="h2"
            size="lg"
            mb={2}
            bg="transparent"
            color={"#000"}
            fontWeight={600}
            fontSize={50}
          >
            Build <br />
            With Us.
          </Heading>
          <Text bg="white" fontWeight={400} fontSize={24} color="#414141">
            Join us as a partner, builder or community in our <br />
            creative journey.
          </Text>
        </Box>
        <Button
          p={"12px 40px 12px 40px"}
          fontSize={18}
          fontWeight={600}
          background={"#DDFF55"}
          size={"md"}
          rounded={"full"}
          color={"#000"}
        >
          Join Us Now
        </Button>
      </Box>
    </Container>
  );
};

export default Card;
