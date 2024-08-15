import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import logo from "../images/Logo .svg";

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#354b42"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
              <HStack spacing={6}>   
                <a href="/" className="logo">
                  <img src={logo} alt="" />
                  </a>
              </HStack>
            </nav>
            <nav> 
            <HStack spacing={8}>
              <a href="/" onClick={()=>handleClick("home")}>Home</a>
              <a href="/" onClick={()=>handleClick("about")}>About</a>
              <a href="/" onClick={()=>handleClick("reservations")}>Reservations</a>
              <a href="/booking" onClick={()=>handleClick("booking")}>Booking</a>
              <a href="/" onClick={()=>handleClick("login")}>Login</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;