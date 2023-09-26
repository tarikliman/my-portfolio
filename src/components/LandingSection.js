import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Tarık!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    
    <VStack>
    <Avatar  size='xl' src="https://i.ibb.co/60zpsYq/1662488299845.jpg"></Avatar>
    <p>{greeting}</p>

    <Heading mt = {5}>{bio1}</Heading>
    <Heading>{bio2}</Heading>
    </VStack>
   
  </FullScreenSection>
);

export default LandingSection;
