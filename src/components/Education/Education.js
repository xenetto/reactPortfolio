import React from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Element } from "react-scroll";
import "./Education.css";
import "./bootstrap.css";
import "./responsive.css"


function Education() {
  //  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
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
      <Element name="education">Education</Element>
      </Typography>
      



	  <section class="mytabs_area p_120">
        	<div class="container">
        		<div class="tabs_inner">


					<div class="tab-content" id="myTabContent">
						<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							<ul class="list">
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>March 2017 to present</p>
										</div>
										<div class="media-body">
											<h4>Colorlib</h4>
											<p>Senior Web Developer <br />Santa monica, Los angeles</p>
										</div>
									</div>
								</li>
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>March 2017 to present</p>
										</div>
										<div class="media-body">
											<h4>Colorlib</h4>
											<p>Senior Web Developer <br />Santa monica, Los angeles</p>
										</div>
									</div>
								</li>
								<li>
								<span></span>
									<div class="media">
										<div class="d-flex">
											<p>March 2017 to present</p>
										</div>
										<div class="media-body">
											<h4>Colorlib</h4>
											<p>Senior Web Developer <br />Santa monica, Los angeles</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
							<ul class="list">
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>March 2017 to present</p>
										</div>
										<div class="media-body">
											<h4>Colorlib</h4>
											<p>Senior Web Developer <br />Santa monica, Los angeles</p>
										</div>
									</div>
								</li>
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>March 2017 to present</p>
										</div>
										<div class="media-body">
											<h4>Colorlib</h4>
											<p>Senior Web Developer <br />Santa monica, Los angeles</p>
										</div>
									</div>
								</li>
								<li>
								<span></span>
									<div class="media">
										<div class="d-flex">
											<p>March 2017 to present</p>
										</div>
										<div class="media-body">
											<h4>Colorlib</h4>
											<p>Senior Web Developer <br />Santa monica, Los angeles</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
        		</div>
        	</div>
        </section>






    </React.Fragment>
  );
}

export default Education;
