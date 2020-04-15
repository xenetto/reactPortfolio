import React from "react";
import portfolio from "../../utils/portfolio.jpeg";
import { Typography } from "@material-ui/core";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <img src={portfolio} alt="profile_photo" className="img" />
        <h1>Sahar Sagharichi</h1>
        <div className="subtitle">
          <h3>I am a Full stack web developer. I give life to designs</h3>
          <p>
          Motivated Full Stack web developer adept at building responsive web applications from front to back-end with the MERN stack (MongoDB, Express.js, React.js, Node.js). Passionate about learning new technologies, bringing ideas to life, and working with dedicated teams to build efficient and robust applications suited to the user’s needs. Holds a Master’s Degree in IT Engineering(E-Commerce).
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
