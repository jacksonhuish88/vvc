import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/about-us.css";
import JJJ from "../img/JJJ.png";
import JJJ2 from "../img/JJJ2.png";
import JJJ3 from "../img/JJJ3.png";
import Footer from "./subcomponents/footer";

const About = () => {
  return (
    <div className='about-us-bg-image-fade'>
      <div className="container-fluid container-custom-padding">
        <div className="row h-100 align-items-center">
          <div className="col-md-5">
            {/* Carousel */}
            <Carousel interval={4000} fade>
              <Carousel.Item>
                <img
                  src={JJJ}
                  alt="First slide"
                  className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={JJJ2}
                  alt="Second slide"
                  className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={JJJ3}
                  alt="Third slide"
                  className="d-block w-100"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-7 text-center about">
            <h2>About Us</h2>
            <p>
              Virtual Visits Gamings (VVG) began through a personal story rooted in the challenges of hospital isolation. 
              My brother, who faced severe medical issues, spent many years in hospitals across the country, often in isolation. 
              During these long periods apart, video games became our bridge - a way to connect, share experiences, and maintain our bond across great distances. 
              These gaming sessions not only brought joy and distraction from the daily rigors of hospital life but also deepened our relationship, proving that play can be both a lifeline and a lasting link. 
              Inspired by this, we founded VVG to extend the same connection and joy to other children facing similar challenges, turning moments of isolation into opportunities for friendship and fun.
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <Footer/>
      </div>
    </div>
  );
};

export default About;

