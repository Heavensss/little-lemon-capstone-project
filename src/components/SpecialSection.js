import React from "react";
import FullScreenSection from "./FullScreenSection";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import Swal from "sweetalert2";

const projects = [
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

const ProjectsSection = () => {
  
  return (
    <FullScreenSection
      backgroundColor="white.900"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h2" id="projects-section">
        This weeks specials
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {projects.map((project) => (
           <Box
           p={4}
           shadow="md"
           borderWidth="1px"
           borderRadius="md"
           bg="white"
          >
          <Card
            key={project.id}
            title={project.title}
            price={project.price}
            description={project.description}
            imageSrc={project.getImageSrc()}  
          />
          </Box>
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
