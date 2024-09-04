import React from "react";
import { TestimonialCard } from "./TestimonialCard";
import { Box, Grid, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const testimonies = [
    {
      name: "Ebiakpo B A",
      title: "Software Developer",
      description:
      " 'ipisr iit we eiviei ioob sieur nvewiea air ege g jioa oo rg oljhe hsjjsjieh seeieiso gos alsg' 🔥️",
      getImageSrc: () => require("../images/photo15.jpg"),
    },
    {
      name: "Sammy John",
      title: "Chef",
      description:
        " 'ipisr iit we eiviei ioob sieur nvewiea air ege g jioa oo rg oljhe hsjjsjieh seeieiso gos alsg' 🔥️",
      getImageSrc: () => require("../images/photo6.png"),
    },
    {
    name: "Elli Timmy",
      title: "Artist",  
      description:
        " 'ipisr iit we eiviei ioob sieur nvewiea air ege g jioa oo rg oljhe hsjjsjieh seeieiso gos alsg' 🔥️",
      getImageSrc: () => require("../images/photo7.jpg"),
    },
    {
        name: "Ebiakpo B A",
        title: "Software Developer",
        description:
        " 'ipisr iit we eiviei ioob sieur nvewiea air ege g jioa oo rg oljhe hsjjsjieh seeieiso gos alsg' 🔥️",
        getImageSrc: () => require("../images/photo15.jpg"),
      },
      {
        name: "Sammy John",
        title: "Chef",
        description:
          " 'ipisr iit we eiviei ioob sieur nvewiea air ege g jioa oo rg oljhe hsjjsjieh seeieiso gos alsg' 🔥️",
        getImageSrc: () => require("../images/photo6.png"),
      },
      {
      name: "Elli Timmy",
        title: "Artist",  
        description:
          " 'ipisr iit we eiviei ioob sieur nvewiea air ege g jioa oo rg oljhe hsjjsjieh seeieiso gos alsg' 🔥️",
        getImageSrc: () => require("../images/photo7.jpg"),
      },
    
  ];
export const Testimonials =()=>{
    return(
        <FullScreenSection
        backgroundColor="white.900"
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
      >
        <Box px="20px" py="60px" bg="yellow.50">
            <Heading fontSize={42} letterSpacing="4px" color="blue.900" pb="80px">Testimonials</Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap="60px">
           
            {testimonies.map((testimony) => (
                <TestimonialCard
                imageSrc={testimony.getImageSrc()}
                name={testimony.name}
                title={testimony.title}
                description={testimony.description}
                    
                />

           ))}
            </Grid>
        </Box>
        </FullScreenSection>
    )
}