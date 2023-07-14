import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Text,
  Button,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import SliderNav from "./SliderNav";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container maxW={1300}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        py={4}
        bg="transparent"
        color="white"
      >
        {/* Logo */}

        <Link
          href="/"
          fontSize="xl"
          fontWeight="bold"
          _hover={{ textDecoration: "none" }}
        >
          <Text fontSize={24} color={"#DDFF55"} fontWeight={600}>
            #Mind
          </Text>
        </Link>

        {/* Links */}
        <Flex
          gap={20}
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          <Link
            href="/"
            mr={4}
            _hover={{
              color: "#DDFF55",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
          <Link
            href={"#footer"}
            mr={4}
            _hover={{
              color: "#DDFF55",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Our Thesis
          </Link>
          <Link
            href="https://medium.com/@hashmindorg"
            mr={4}
            _hover={{
              color: "#DDFF55",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Blog
          </Link>
          <Link
            href={"#footer"}
            mr={4}
            _hover={{
              color: "#DDFF55",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Contact
          </Link>
        </Flex>

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
      </Flex>

      <SliderNav isOpen={isOpen} onToggle={onToggle} />
    </Container>
  );
}

export default NavBar;
