import { Box, Container, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

function NavBar() {
  return (
    <Container maxW={1200}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        p={4}
        bg="transparent"
        color="white"
      >
        {/* Logo */}
        <Box>
          <Link href="/" fontSize="xl" fontWeight="bold">
            <Text fontSize={24} color={"#DDFF55"} fontWeight={600}>
              #Mind
            </Text>
          </Link>
        </Box>

        {/* Links */}
        <Flex gap={20}>
          <Link href="/" mr={4}>
            Home
          </Link>
          <Link href="#" mr={4}>
            Our Thesis
          </Link>
          <Link href="#" mr={4}>
            Blog
          </Link>
          <Link href="#" mr={4}>
            Contact
          </Link>
        </Flex>

        {/* CTA */}
        <Box>
          <IconButton
            ml={2}
            icon={
              <FiSearch
                style={{
                  background: "transparent",
                  color: "black",
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              />
            }
            aria-label="User Profile"
            variant="ghost"
            size="md"
            background={"#DDFF55"}
            rounded={"full"}
          />

          <IconButton
            ml={2}
            icon={
              <BiUser
                style={{
                  background: "transparent",
                  color: "black",
                  fontSize: 22,
                }}
              />
            }
            aria-label="User Profile"
            variant="ghost"
            size="md"
            background={"#DDFF55"}
            rounded={"full"}
          />
        </Box>
      </Flex>
    </Container>
  );
}

export default NavBar;
