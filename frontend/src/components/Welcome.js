import React from "react";
import Robot from "../assets/robot.webp";
import Container from "./WelcomeStyle.js";


const Welcome = ({ currentUser }) => {
  return (
    <Container>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to Start Messaging</h3>
    </Container>
  );
};
 
export default Welcome;
