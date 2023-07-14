import { Box, Flex, IconButton, Link, useDisclosure } from "@chakra-ui/react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

interface SliderNavProps {
  onToggle: () => void;
  isOpen: boolean;
}

function SliderNav({ onToggle, isOpen }: SliderNavProps) {
  return (
    <Flex
      h="100vh"
      width={"100vw"}
      position="fixed"
      direction={"row"}
      display={isOpen ? "flex" : "none"}
      top="0"
      left="0"
      zIndex={100}
      background={"transparent"}
    >
      <Flex
        direction="column"
        width="70%"
        justify={"space-between"}
        bg="rgba(0, 0, 0)"
      >
        {/* Links */}
        <Flex
          direction="column"
          justify="center"
          align="center"
          bg={"transparent"}
          color={"white"}
        >
          <Link href="/" width={"100%"} bg={"transparent"}>
            <Box
              width={"100%"}
              p={5}
              bg={"transparent"}
              borderBottom={"1px solid #888"}
            >
              Home
            </Box>
          </Link>
          <Link href="#footer" width={"100%"} bg={"transparent"}>
            <Box
              width={"100%"}
              p={5}
              bg={"transparent"}
              borderBottom={"1px solid #888"}
            >
              Our Thesis
            </Box>
          </Link>

          <Link
            href="https://medium.com/@hashmindorg"
            width={"100%"}
            bg={"transparent"}
          >
            <Box
              width={"100%"}
              p={5}
              bg={"transparent"}
              borderBottom={"1px solid #888"}
            >
              Blog
            </Box>
          </Link>
          <Link href="#footer" width={"100%"} bg={"transparent"}>
            <Box
              width={"100%"}
              p={5}
              bg={"transparent"}
              borderBottom={"1px solid #888"}
            >
              Contact
            </Box>
          </Link>
        </Flex>
      </Flex>

      <Box width={"30%"} bg={"rgba(0, 0, 0, 0.5)"} onClick={onToggle}></Box>
    </Flex>
  );
}

export default SliderNav;
