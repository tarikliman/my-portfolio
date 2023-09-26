import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Movie App",
    description:
      "Discover and save your favorite movies with the Movie App. It is a web-based application built using React 🔥️",
    getImageSrc: () => require("../images/movie-app-ss.png"),
    github: "https://github.com/tarikliman/movie-app"
  }
  ,
  {
    title: "Restaurant Website",
    description:
      "This project is a restaurant/cafe company website developed using pure HTML, CSS and JavaScript.",
    getImageSrc: () => require("../images/restaurantss.png"),
    github: "https://github.com/tarikliman/restaurant-website"
  }
  ,
  {
    title: "Quiz Maker",
    description:
      "The Quiz Maker Project is a web-based application built using React that allows users to create and customize exam papers, quizzes, and tests.",
    getImageSrc: () => require("../images/quiz-maker-ss.png"),
    github: "https://github.com/tarikliman/quiz-maker"
  }
  ,
  {
    title: "My Portfolio",
    description:
      "The app is designed to provide an overview of my background, skills, and the projects I've worked on.",
    getImageSrc: () => require("../images/portoflio-ss.png"),
    github: "https://github.com/tarikliman/my-portfolio"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            github = {project.github}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
