import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../App.css";
const Card = ({ title, description, imageSrc, github }) => {
  return (
    <Box w='500px' h='max-content' bg='white' borderRadius="8px" >
      <Image
       borderRadius="6px"
          alt="Dan Abramov"
          src={imageSrc}
        />
      <VStack spacing={2} p={5} align='left'>
        
        <Heading as='h2' fontSize='20px' color='black'>{title}</Heading>
        <Text color='gray'>{description}</Text>
        <HStack color = 'black'>
          <a href={github}>See More</a>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
