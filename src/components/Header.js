import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:johnexample@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

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
  const [translateValue, setTranslateValue] = useState("translateY(0)");
  let oldScrollY = 0;

  const handleScroll = () => {
    if(window.scrollY > oldScrollY) {
      setTranslateValue("translateY(-200px)");
    }else{
      setTranslateValue("translateY(0)");
    }
    oldScrollY = window.scrollY;
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
 

  return (
    <Box
      transform= {translateValue}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
            {socials.map((social) => {
              return (<a href={social.url} ><FontAwesomeIcon icon = {social.icon} size = "2x" /> </a>)
            })}
            </HStack>
            
          </nav>
          <nav>
            <HStack spacing={8}>
                <a onClick = {handleClick("projects")} >Projects</a>
                <a onClick = {handleClick("contactme")} >Contact Me</a>
           
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
