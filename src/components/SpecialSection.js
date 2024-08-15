import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import Swal from "sweetalert2";

const specials = [
  {
    id: 1,
    title: "Nigerian Jollof Rice",
    price: 1500.00,
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo5.jpg"),
  },
  {
    id: 2,
    title: "Banga Soup",
    price: 2000.00,
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo6.png"),
  },
  {
    id: 3,
    title: "Native Soup",
    price: 1800,
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo7.jpg"),
  },
  
];

const SpecialSection = () => {
  
  return (
    <FullScreenSection
      backgroundColor="white.900"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color="black">
        This weeks specials
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {specials.map((special) => (
          <Card
            key={special.id}
            title={special.title}
            price={special.price}
            description={special.description}
            imageSrc={special.getImageSrc()}
            
          />

        ))}
      </Box>
    </FullScreenSection>
  );
};

export default SpecialSection;
