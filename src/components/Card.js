import { Button, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Swal from "sweetalert2";

const Card = ({ id,title, price, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const handleOrder = (id) => {
    console.log(id);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Do you want to confirm order?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Yes, order it!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Orderd!',
            'Your order has been confirmed.',
            'success'
          )
        } 
      })

}

  return (
    <Flex direction="column" rounded="x1" bgColor="#a9c8be">
         <Image src={imageSrc}/>
         <Flex justifyContent="space-between" px="5">
            <Heading as="h3" size="" color="blackAlpha.700"> {title}</Heading>
             <Text fontSize="2xl" fontWeight="semibold" color="blackAlpha.700">N{price}</Text>
         </Flex>
         <Text color="blackAlpha.700" px="5">{description}</Text>
         <Button colorScheme="yellow" mx="150" size="sm" my="5" onClick={() => handleOrder(id)} >Order now</Button>
    </Flex>
  
  );
};

export default Card;
