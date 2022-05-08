import React from "react";
import "./aboutus.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import userimag from "./user.jpg";

function Aboutus() {
  return (
    <div>
      <Navbar />
      <div className="about-section">
        <div className="subabout-section">
          <h1 style={{color:'#63e9f7'}}>About Us</h1>
          <h3> Driving the World's TravelIndustry Forward</h3>
          </div>
          <div className="subsub">
          <p>We, King Flayer is flight booking system</p>
          <p>
            Weve created an induştrial-strengthrav fast, and reliable platform
            to the travel industry, We offenyoua sustainable technological edge
            in this extremely competitive industry. that delivers an end-to-end
            fast and reliable platform to the travel industry, We offenyou a
            sustainable techrnological edge in this extremely competitive
            industry.
          </p>
          
        </div>
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <p>
          We are an agile, dynamic group of professionals, the pIoneer of Global
          airtare consolidation. we believe in a culture that supports
          technological innovation, individual expression and creative
          contribution. We collaborate with our customers, innovate together and
          strive to achieve optimal results. We are dedicated to helping our
          customers transform their end-traveler engagements for the better and
          to shape new, Superior travel experiences.
        </p>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={userimag} alt="amar" className="center" />
              <div className="descp">
                <h2>Amar</h2>
                <p className="title">Project Partner</p>
                <p>contibuted admin user interface.</p>
                <p>amar@gmail.com.com</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={userimag} alt="harsh" className="center" />
              <div className="descp">
                <h2>Harsh</h2>
                <p className="title">Project Partner</p>
                <p>
                  contributed home interface and conntivty among diffrent module
                  of projet.
                </p>
                <p>harsh@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={userimag} alt="Mayank" className="center" />
              <div className="descp">
                <h2>Mayank</h2>
                <p className="title">Project Partner</p>
                <p>contibuted Login and SignUp page.</p>
                <p>mayank@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={userimag} alt="Monika" className="center" />
              <div className="descp">
                <h2>Monika</h2>
                <p className="title">Project Partner</p>
                <p>
                  contributed to home page and conntivty among diffrent module
                  of projet.
                </p>
                <p>monika@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={userimag} alt="Manish" className="center" />
              <div className="descp">
                <h2>Manish Rawat</h2>
                <p className="title">Project Partner</p>
                <p>contributed serch flight.</p>
                <p>manishraw098@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={userimag} alt="raghav" className="center" />
              <div className="descp">
                <h2>raghav</h2>
                <p className="title">Project Partner</p>
                <p>contributed book now.</p>
                <p>raghav@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Aboutus
