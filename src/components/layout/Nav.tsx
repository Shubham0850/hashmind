import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

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

        {/* Menu Icon */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={
              <FiMenu
                style={{
                  fontSize: "25px",
                  background: "transparent",
                  color: "#fff",
                }}
              />
            }
            aria-label="Menu"
            variant="ghost"
            rounded={"full"}
            onClick={onToggle}
          />
        </Box>

        {/* Links */}
        <Flex gap={20} display={{ base: isOpen ? "flex" : "none", md: "flex" }}>
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

          {/* CTA */}
          <Box display={{ base: "none", md: "block" }}>
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
              aria-label="Search"
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
      </Flex>
    </Container>
  );
}

export default NavBar;
