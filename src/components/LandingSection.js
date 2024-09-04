import React from "react";
import { Link } from "react-router-dom";
import Photo1 from "../images/photo1.jpg";
import {FaFacebook, FaGoogle, FaSpotify, FaShopify} from 'react-icons/fa'
import { Avatar, Box,Text, Heading, Img,Image, VStack, useMediaQuery, useColorMode, Button, Flex, AspectRatio } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import bannerImg from "../images/photo14.jpg";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
function LandingSection(){
    const {colorMode} = useColorMode();
    const isDark = colorMode ==="dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
      <Box >
      {/* Hero Section */}
      <Box w="full" bg="#364d45"  px={{ base: '50px', md: '70px' }}   py="60px" mb="120px" >
      <Flex justifyContent="space-between" alignItems="center" pb="50px"  >
      <Box >
          <Heading>
            Little Lemon 
          </Heading>
          <Heading as="h3" size="1xl">
            Yen Town
          </Heading>
            <Text color="whiteAlpha.700" pb="20px">
             African Cuisines at its best, <br/>focused on traditional recipes <br/> served in a mordern and comfort way
            </Text>
          </Box>
         
          <Box maxW="300px">  
            <Link to="/booking" color="whiteAlpha.800">
            <Button colorScheme="yellow" size="lg">Reserve Table</Button>
            </Link>
          </Box>
          </Flex>
      <Flex
        bgImage={bannerImg}
        bgSize="cover"
        bgPosition="center"
        h={{ base: '130px', md: '500px' }}
       
        justifyContent="space-between" 
        alignItems="center" 
        mb={{ base: '-130px', md: '-200px' }}
        aspectRatio={16/6}
      >  
      </Flex>
    </Box> 
    </Box> 
    
)};

export default LandingSection;
