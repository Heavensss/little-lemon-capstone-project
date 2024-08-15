import React from "react";
import { Link } from "react-router-dom";
import Photo1 from "../images/photo1.jpg";
import {FaFacebook, FaGoogle, FaSpotify, FaShopify} from 'react-icons/fa'
import { Avatar, Box,Text, Heading, Img,Image, VStack, useMediaQuery, useColorMode, Button, Flex, AspectRatio } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import bannerImg from "../images/photo14.jpg";

function LandingSection(){
    const {colorMode} = useColorMode();
    const isDark = colorMode ==="dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
      <Box w="full" bg="#364d45" px="200px" py="80px" mb="120px">
        <Flex justifyContent="space-between" alignItems="center" pb="80px">
          <Box>
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
        <AspectRatio w="full" ratio={16/6} mb="-200px" >
          <Img src={bannerImg} alt="banner"/>
        </AspectRatio> 
      </Box>  
)};

export default LandingSection;
