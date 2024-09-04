import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Photo15 from "../images/photo15.jpg";

export const TestimonialCard =({ imageSrc,name, title, description })=>{
    return(
        <Box w="full" p="40px" bg="white">
            <Flex alignItems="center" pb="30px">
                <Avatar src={imageSrc} mr="20px"></Avatar>
                <Box>  
                <Heading fontSize={16} color="blue.900" >{name}</Heading>
                <Text fontSize={12} color="gray.500">
                    {title}
                </Text>
                </Box>
            </Flex>
            <Text color="blue.700" font14>
                {description}
            </Text>

        </Box>
    );
};