import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

const Card = () => {
  return (
    <Container maxW={1300}>
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
        <Box flex="1" pr={4} bg="white">
          <Heading
            as="h2"
            size="lg"
            mb={2}
            bg="white"
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
          fontWeight={400}
          background={"#DDFF55"}
          size={"md"}
          rounded={"full"}
        >
          Join us now
        </Button>
      </Box>
    </Container>
  );
};

export default Card;
