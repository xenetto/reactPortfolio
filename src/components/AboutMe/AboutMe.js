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
          margin: "-200px",
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
          <br></br>
          <h3>I give life to designs!</h3>
          <br></br>
          <p>
          Full Stack Developer graduated from UofT, adept at building responsive web applications from front to back-end with the MERN stack (MongoDB, Express, React, Node.js). </p>
          <p>Passionate about learning new technologies, bringing ideas to life, and working with dedicated teams to build efficient and robust applications suited to the user’s needs.</p> 
          <p>Known among staff for strong wit and attention to detail no matter the complexity of the project.</p>
          
          <div class="download_resume">
                            <a class="boxed-btn3" href="#">Download Resume</a>
                        </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
