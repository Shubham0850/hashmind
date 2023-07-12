import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { AiOutlineBulb } from "react-icons/ai";
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
        px={10}
        bg="transparent"
        color="white"
      >
        {/* Logo */}
        <Flex gap={40}>
          <Link href="/" fontSize="xl" fontWeight="bold">
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
              href="#"
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
              href="#"
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
              href="#"
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

        {/* CTA */}
        <Button bg="#DDFF55" _hover={{ background: "white" }} size="lg">
          Coming Soon
        </Button>
      </Flex>

      <SliderNav isOpen={isOpen} onToggle={onToggle} />
    </Container>
  );
}

export default NavBar;
