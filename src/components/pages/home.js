import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/home.css";
import Kid from "../img/cancerkid.jpg";
import Volunteers from "./subcomponents/volunteers";
import ContactUs from "./subcomponents/contact";
import Footer from "./subcomponents/footer";

const Home = () => {
  return (
    <div className='bg-image-fade'>
      <div className="container-fluid container-custom-padding">
        <div className="row h-100 align-items-center">
          <div className="col-md-5">
            <img src={Kid} alt="cancer kid" className="img-fluid" />
          </div>
          <div className="col-md-7 text-center home">
            <h2>Turning Hospital Stays Into Fun Game Days</h2>
            <p>Hospitals can feel a bit dull, especially during long visits or isolation. Our cheerful volunteers are here to brighten your day with exciting gaming sessions!</p>
            <p>Connect with us to bring the joy of gaming to your hospital stay.</p>
            <button className="btn btn-primary mt-3">
              <a href="#contact-us" className="text-white" style={{ textDecoration: 'none' }}>Connect Now</a>
            </button>
          </div>
        </div>

        {/* VOLUNTEERS */}
        <Volunteers/>

        {/* VOLUNTEERS */}
        <ContactUs/>

        {/* FOOTER */}
        <Footer/>
      </div>
    </div>
  );
};

export default Home;

