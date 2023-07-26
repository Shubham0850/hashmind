import {
  Box,
  Flex,
  Button,
  Container,
  Text,
  Center,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  extendTheme,
  ChakraProvider,
  useToast,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsMedium, BsTwitter } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import Airtable from "airtable";

// Extend the Chakra UI theme to override default styles
const theme = extendTheme({
  styles: {
    global: {
      ".chakra-accordion__item:first-of-type": {
        borderTop: "none",
      },
      ".chakra-accordion__item:last-of-type": {
        borderBottom: "none",
      },
    },
  },
});

const apiId = process.env.NEXT_PUBLIC_API_BASE_ID;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const base = new Airtable({ apiKey }).base(
  apiId as string
);

function Footer() {
  const [linkExpend, setLinkExpend] = useState(false);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      await base("Subscribers").create([{ fields: { Email: email } }]);
      toast({
        render: () => (
          <Box
            p={3}
            bg="transparent"
            border="2px solid green"
            borderRadius="md"
            color="green.500"
            fontWeight={600}
            textAlign="center"
          >
            <Text fontSize="lg">Success!</Text>
            <Text>You have successfully subscribed.</Text>
          </Box>
        ),
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setEmail("");
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <Box background={"#080808"} id="footer">
      <Container
        maxW={1300}
        background={"transparent"}
        padding={{ base: "80px 25px 40px 25px", md: "80px 50px 40px 50px" }}
        color="white"
      >
        {/* Mobile Accordion */}
        <Box
          width={"100%"}
          bg={"transparent"}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={"transparent"}
          >
            <Text
              fontSize={{ base: "20px", md: "24px" }}
              fontWeight={"600"}
              color="white"
              bg="transparent"
            >
              Why HashMind
            </Text>

            <Box
              onClick={() => setLinkExpend(!linkExpend)}
              bg="transparent"
              as={linkExpend ? FaMinus : FaPlus}
              fontSize="18px"
              color="white"
            />
          </Flex>

          {/* Links */}
          {linkExpend && (
            <Box bg={"transparent"} pt={"25px"}>
              <Link href={"#aboutUs"}>
                <Text
                  bg="transparent"
                  mb="15px"
                  fontSize={{ base: "16px", md: "18px" }}
                  color="white"
                  _hover={{ color: "#DDFF55" }}
                >
                  About Us
                </Text>
              </Link>
              <Link href={"https://medium.com/@hashmindorg"}>
                <Text
                  bg="transparent"
                  mb="15px"
                  fontSize={{ base: "16px", md: "18px" }}
                  color="white"
                >
                  Blog
                </Text>
              </Link>
              <Link href={"#ourHeritage"}>
                <Text
                  bg="transparent"
                  mb="15px"
                  fontSize={{ base: "16px", md: "18px" }}
                  color="white"
                >
                  Our Heritages
                </Text>
              </Link>
              <Link href={"https://hashmind.gitbook.io/about/"} target="_blank">
                <Text
                  bg="transparent"
                  mb="15px"
                  fontSize={{ base: "16px", md: "18px" }}
                  color="white"
                >
                  Documents
                </Text>
              </Link>
              <Link href={"https://forms.gle/fwr2AX5gB1MfWVtLA"}>
                <Text
                  bg="transparent"
                  mb="15px"
                  fontSize={{ base: "16px", md: "18px" }}
                  color="white"
                >
                  Careers
                </Text>
              </Link>
              <Link href={"#"}>
                <Text
                  bg="transparent"
                  mb="15px"
                  fontSize={{ base: "16px", md: "18px" }}
                  color="white"
                >
                  Privacy Policy
                </Text>
              </Link>
            </Box>
          )}
        </Box>
        <Box py={6} bg="transparent">
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            bg="transparent"
          >
            {/* Left Column */}
            <Box maxW="sm" p={4} bg="transparent" mb={{ base: "30px", md: 0 }}>
              {/* Hide on mobile */}
              <Text
                bg="transparent"
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight={"600"}
                mb={{ base: "15px", md: "32px" }}
                display={{ base: "none", md: "block" }}
                _hover={{ color: "#DDFF55" }}
              >
                Why HashMind ?
              </Text>

              {/* Desktop Links */}
              <Box display={{ base: "none", md: "block" }} bg="transparent">
                <Link href={"#aboutUs"}>
                  <Text
                    bg="transparent"
                    mb="15px"
                    fontSize={{ base: "16px", md: "18px" }}
                    _hover={{ color: "#DDFF55" }}
                  >
                    About Us
                  </Text>
                </Link>
                <Link href="https://medium.com/@hashmindorg">
                  <Text
                    bg="transparent"
                    mb="15px"
                    fontSize={{ base: "16px", md: "18px" }}
                    _hover={{ color: "#DDFF55" }}
                  >
                    Blog
                  </Text>
                </Link>
                <Link href={"#ourHeritage"}>
                  <Text
                    bg="transparent"
                    mb="15px"
                    fontSize={{ base: "16px", md: "18px" }}
                    _hover={{ color: "#DDFF55" }}
                  >
                    Our Heritages
                  </Text>
                </Link>
                <Link
                  href={"https://hashmind.gitbook.io/about/"}
                  target="_blank"
                >
                  <Text
                    bg="transparent"
                    mb="15px"
                    fontSize={{ base: "16px", md: "18px" }}
                    _hover={{ color: "#DDFF55" }}
                  >
                    Documents
                  </Text>
                </Link>
                <Link href="https://forms.gle/fwr2AX5gB1MfWVtLA">
                  <Text
                    bg="transparent"
                    mb="15px"
                    fontSize={{ base: "16px", md: "18px" }}
                    _hover={{ color: "#DDFF55" }}
                  >
                    Careers
                  </Text>
                </Link>
                {/* <Link href={"#"}>
                  <Text
                    bg="transparent"
                    mb="15px"
                    fontSize={{ base: "16px", md: "18px" }}
                    _hover={{ color: "#DDFF55" }}
                  >
                    Privacy Policy
                  </Text>
                </Link> */}
              </Box>
            </Box>

            {/* Right Column */}
            <Box
              p={{ base: 0, md: 4 }}
              bg={"transparent"}
              width={{ base: "100%", md: "50%" }}
            >
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                fontWeight={"600"}
                bg={"transparent"}
                textAlign="center"
                mb={{ base: "30px", md: "30px" }}
              >
                Subscribe to our newsletter!
              </Text>

              <form
                style={{ background: "transparent" }}
                onSubmit={handleSubmit}
              >
                <Stack
                  direction={{ base: "row", md: "row" }}
                  mb={{ base: "30px", md: "80px" }}
                  bg={"transparent"}
                  border="2px solid #DDFF55"
                  rounded={"10px"}
                  justify="center"
                  gap={5}
                  p={4}
                  align={{ base: "center", md: "initial" }}
                >
                  <Input
                    placeholder="Enter your email"
                    bg={"transparent"}
                    font-weight="400"
                    fontSize={{ base: "16px", md: "20px" }}
                    px={{ base: "8px", md: "10px" }}
                    py={{ base: "8px", md: "12px" }}
                    type="email"
                    value={email}
                    outline="none"
                    border="none"
                    _placeholder={{ color: "#7D7D7D" }}
                    boxShadow="none !important"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    px={{ base: "30px", md: "40px" }}
                    py={{ base: "10px", md: "12px" }}
                    fontSize={{ base: "14px", md: "18px" }}
                    fontWeight={400}
                    background="#DDFF55"
                    rounded="full"
                    color="#000000"
                    type="submit"
                  >
                    {loading ? "Submitting..." : "Subscribe"}
                  </Button>
                </Stack>
              </form>

              <Flex
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center", md: "space-between" }}
                align="center"
                bg={"transparent"}
              >
                <Box
                  width={"100%"}
                  mb={{ base: "30px", md: 0 }}
                  bg={"transparent"}
                >
                  <Text
                    fontSize={{ base: "20px", md: "24px" }}
                    textAlign="center"
                    bg={"transparent"}
                  >
                    Chat with founder
                  </Text>

                  <Center bg={"transparent"}>
                    <Flex
                      gap={10}
                      mt={"36px"}
                      bg={"transparent"}
                      justify={{ base: "center", md: "initial" }}
                    >
                      <Link
                        href={"https://twitter.com/Arjunweb3in"}
                        target="_blank"
                        className="hoverEffect"
                      >
                        <BsTwitter
                          style={{
                            background: "transparent",
                            fontSize: "35px",
                          }}
                        />
                      </Link>

                      <Link
                        href={"https://www.linkedin.com/in/arjungmn/"}
                        target="_blank"
                        className="hoverEffect"
                      >
                        <BiLogoLinkedin
                          style={{
                            background: "transparent",
                            fontSize: "35px",
                          }}
                        />
                      </Link>
                    </Flex>
                  </Center>
                </Box>

                <Box width={"100%"} bg={"transparent"}>
                  <Text
                    fontSize={{ base: "20px", md: "24px" }}
                    textAlign="center"
                    bg={"transparent"}
                  >
                    Follow us on
                  </Text>

                  <Center bg={"transparent"}>
                    <Flex
                      gap={10}
                      mt={"36px"}
                      bg={"transparent"}
                      justify={{ base: "center", md: "initial" }}
                    >
                      <Link
                        href={"https://twitter.com/hashmindAI"}
                        target="_blank"
                        className="hoverEffect"
                      >
                        <BsTwitter
                          style={{
                            background: "transparent",
                            fontSize: "35px",
                          }}
                        />
                      </Link>

                      <Link
                        href={"https://www.linkedin.com/company/hashmind/"}
                        target="_blank"
                        className="hoverEffect"
                      >
                        <BiLogoLinkedin
                          style={{
                            background: "transparent",
                            fontSize: "35px",
                          }}
                        />
                      </Link>

                      <Link
                        href={"https://medium.com/@hashmindorg"}
                        target="blank"
                        className="hoverEffect"
                      >
                        <BsMedium
                          style={{
                            background: "transparent",
                            fontSize: "35px",
                          }}
                        />
                      </Link>
                    </Flex>
                  </Center>
                </Box>
              </Flex>
            </Box>
          </Flex>

          <Text
            bg={"transparent"}
            textAlign={"center"}
            mt={{ base: "60px", md: "90px" }}
            fontSize={"16px"}
          >
            Copyright © 2023 HashMind. All rights reserved
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
