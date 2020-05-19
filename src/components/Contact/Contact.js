import React from "react";
import { Typography } from "@material-ui/core";
import { Element } from "react-scroll";
import "./Contact.css";
import data from '../../utils/mydata';
import Fade from 'react-reveal/Fade';

export default function ContactForm() {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        id="contact-us"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase",
          fontFamily: '"Bungee", cursive',
        }}>
      <Element name="contact-me">Contact Me</Element>
      </Typography>
      
      <div>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Let’s create your next experience together :
                </h1>
                <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
            </div>
          </Fade>
        </div>

      
            <ul className="info">
              <li><span class="first-block">Full Name:</span><span class="second-block">Louie Jie Mahusay</span></li>
              <li><span class="first-block">Phone:</span><span class="second-block">+ 1235 2355 98</span></li>
              <li><span class="first-block">Email:</span><span class="second-block">info@yoursite.com</span></li>
              <li><span class="first-block">Website:</span><span class="second-block">www.yoursite.com</span></li>
              <li><span class="first-block">Address:</span><span class="second-block">198 West 21th Street, Suite 721 New York NY 10016</span></li>
            </ul>

            <p>
              <ul class="fh5co-social-icons">
                <li><a href="#"><i class="icon-twitter2"></i></a></li>
                <li><a href="#"><i class="icon-facebook3"></i></a></li>
                <li><a href="#"><i class="icon-linkedin2"></i></a></li>
                <li><a href="#"><i class="icon-dribbble2"></i></a></li>
              </ul>
            </p>
 

              <li class="timeline-heading text-center animate-box">
                <div><h3>Education</h3></div>
              </li>
              <li class="timeline-inverted animate-box">
                <div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">Masters Degree</h3>
                    <span class="company">University Name - 2007 - 2009</span>
                  </div>
                  <div class="timeline-body">
                    <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
              </li>
              <li class="animate-box timeline-unverted">
                <div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">Bachelors Degree</h3>
                    <span class="company">University Name - 2002 - 2006</span>
                  </div>
                  <div class="timeline-body">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted animate-box">
                <div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">Diploma Course</h3>
                    <span class="company">College Name - 1999 - 2001</span>
                  </div>
                  <div class="timeline-body">
                    <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
              </li>
              <li class="animate-box timeline-unverted">
                <div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">Graduation</h3>
                    <span class="company">College Name - 1994 - 1998</span>
                  </div>
                  <div class="timeline-body">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </li>
              
    


    </React.Fragment>
  );
}
