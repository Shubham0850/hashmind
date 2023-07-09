import { Box, Button, Container, Text } from "@chakra-ui/react";

function Hero() {
  return (
    <Container maxW={1300}>
       <Box
      backgroundImage="url('hero-bg.png')"
      backgroundSize="cover"
      border-radius= '52.462px'
      height="622px"
      width='1301px'
      display="flex"
      alignItems="center"
      paddingLeft={'80px'}
    >
      <Box marginLeft={8} bg="rgba(0, 0, 0, 0)"  >
        
        <Text fontWeight={500} bg="rgba(0, 0, 0, 0)"  style={{fontSize:'60px',width:'626px', }} color="#DDFF55">
        Convergence of Web3 & AI Venture Studio
        
        </Text>
       
   
        <Box  bg="rgba(0, 0, 0, 0)" display={'flex'} py={10}>
      <Text fontSize="40px" bg="rgba(0, 0, 0, 0)" fontWeight="600" color="white" p={4}>
      Let’s
        </Text>
        <Text fontSize="60px" bg="rgba(0, 0, 0, 0)"  fontWeight="600" color="#DDFF55" >
        Envision.
        </Text>

      </Box>
      
      <Button colorScheme="yellow"  size="lg">
          Build With Us
        </Button>

      </Box> 
    
      
       
    </Box>
    </Container>
   
  );
}

export default Hero;
