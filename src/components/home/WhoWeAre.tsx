import { Box, Text, Link, Container } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { BsArrowRight} from 'react-icons/bs';
import { Icon } from "@chakra-ui/react";

function WhoWeAre() {
  return (
    <Container maxW={1300}>
      <Box  textAlign='center' p={36}>
        <Text fontSize="50px" py={8} fontWeight={400} color={'#FFF'} lineHeight={'normal'}>Who we are</Text>
        <Text fontSize="24px " fontWeight={400} textAlign='center' p={10} color={'#FFF'}>We are Fuelling the dreams of pioneers and captivating the hearts of consumers. Our venture studio embarks on a transformative journey <span style={{color:'yellow'}} > with industry expert teams, bridging the realms of Web3 and AI, weaving extraordinary projects that leave a lasting impression.</span></Text>
        <Link  href="#" target="_blank" rel="noopener noreferrer">
          <Text fontSize='2xl' fontWeight={'124px'} textDecoration="underline"  color={'#FFF'} display={'flex'} justifyContent={'center'} p={5}> Know More  
          <Icon as={BsArrowRight}  color={"yellow"} m={2} />
           </Text>
          
        </Link>
      </Box>
    </Container>
  );
}

export default WhoWeAre;

