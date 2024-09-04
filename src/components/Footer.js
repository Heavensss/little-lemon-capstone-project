import React from "react";
import {Box, Text,Link, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
        bg="gray.200"
        py={4}
        justify="center"
        align="center"
        direction="column"
        justifyContent="space-between"
        alignItems="center"
          
          
         
        >
        <Flex justify="center" align="center" mt={2}>
          
       
          <div>
                <h3>Contact</h3>
            <ul>
            <li>Address: <br/> 123 Yen Town , Bayelsa</li>
                <li>Phone: <br/> +234 123 456 789</li>
                <li>Email: <br/> littlelemon@yentown.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>
                
              <Text>
              Ebiakpo &copy; 2024 Our Company. All rights reserved.
              </Text>
            </ul>
            </div>
            </Flex>
        </Flex>
     
      </footer>
    </Box>
  );
};
export default Footer;
