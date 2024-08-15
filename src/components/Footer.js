import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <div>

          
          </div>
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
                <p>Ebiakpo • © 2024</p>
            </ul>
            </div>
        </Flex>
     
      </footer>
    </Box>
  );
};
export default Footer;
