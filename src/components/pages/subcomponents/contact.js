import React from "react";
import "./css/contact-us.css";

function ContactUs() {
  return (
    <section className="container-fluid text-center text-white contact-us" id="contact-us">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12 p-3">
          <h1>Contact Us Now</h1>
          <p className="lead">
            Want to set up a gaming session?
          </p>
          <p className="lead">
            Want to become a volunteer?
          </p>
          <p className="lead">
            Fill out the form and we will get right back to you!
          </p>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12 p-3">
          <iframe 
            src="//docs.google.com/forms/d/e/1FAIpQLSfbuASJwta9RLYGE5ybVgpGi6x01ll6JHlZOoKUmln8iEc-_Q/viewform?embedded=true" 
            style={{ width: '100%', height: '450px', border: '0' }}
            title="Fore Seasons Contact">Loading…</iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
