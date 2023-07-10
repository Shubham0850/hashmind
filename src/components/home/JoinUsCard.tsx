import { Box, Button, Container, Heading, Text, Stack } from "@chakra-ui/react";

const Card = () => {
  return (
    <Container maxW={1300} padding={{ base: "100px 25px", md: "100px 25px 150px 25px" }}>
      <Box
        width="100%"
        bg="white"
        borderWidth="1px"
        borderRadius={40}
        overflow="hidden"
        p={{ base: "55px 50px", md: "49px 113px" }}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "initial", md: "center" }}
        justifyContent={{ base: "initial", md: "space-between" }}
      >
        <Stack spacing={{ base: 4, md: 8 }} pr={{ base: 0, md: 4 }} bg="transparent" mb={{base: "50px", md: "0px"}}>
          <Heading
            as="h2"
            size="lg"
            mb={2}
            color={"#000"}
            fontWeight={600}
            fontSize={{ base: "30px", md: "50px" }}
            lineHeight={{ base: "36px", md: "56px" }}
            bg={"transparent"}
          >
            Build <br />
            With Us.
          </Heading>
          <Text color="#414141" bg={"transparent"} fontWeight={400} fontSize={{ base: "18px", md: "24px" }}>
            Join us as a partner, builder, or community in our creative journey.
          </Text>
        </Stack>
        <Button
          p={{ base: "10px 20px", md: "12px 40px" }}
          fontSize={{ base: "14px", md: "18px" }}
          fontWeight={600}
          background={"#DDFF55"}
          size={"md"}
          rounded={"full"}
          color={"#000"}
          alignSelf={{ base: "flex-start", md: "center" }}
        >
          Join Us Now
        </Button>
      </Box>
    </Container>
  );
};

export default Card;
