import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../assets/images/logo2.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <section className=" footer_bg pad-tb light-dark-bg">
        <Container>
          <Row>
            <Col lg="4">
              <img src={Logo} alt="Logo" className="logo img-fluid" />
              <h4 className="white bold-font mb-0">Address</h4>
              <p className="regular-font white">
                Sri Vidya College of Engineering and Technology, Sivakasi Main
                Road , Virudhunagar Tamilnadu, India - 626005
              </p>
              <h5 className="white bold-font mb-2">Follow Us</h5>
              <div className="d-flex">
                <div className="social-link mx-1">
                  <FaFacebookF />
                </div>
                <div className="social-link mx-1">
                  <BsTwitterX />
                </div>
                <div className="social-link mx-1">
                  <FaLinkedinIn />
                </div>
                <div className="social-link mx-1">
                  <FaInstagram />
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <h4 className="white bold-font mb-4">Quick Links</h4>
              <ul className="list-unstyled footer-links">
                <li>
                  <a href="/" className="white regular-font">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="white regular-font">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/departments" className="white regular-font">
                    Departments
                  </a>
                </li>
                <li>
                  <a href="/admissions" className="white regular-font">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="/contact" className="white regular-font">
                    Contact
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg="4" md="6">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.135079363482!2d77.929853!3d9.5836229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b012cb49e274e6f%3A0x14966a5c43d84872!2sSri%20Vidya%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1762257730133!5m2!1sen!2sin"
    style={{ width: "100%", height: "250px", border: "0", borderRadius: "10px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</Col>


          </Row>
        </Container>
      </section>
      <section className="xxs-font ">
        <footer className="bg-dark text-white text-center p-2 regular-font">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Sri Vidya College of Engineering
            and Technology. All rights reserved. | Maintained by Maintained by{" "}
            <a
              href="https://zentexus.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warning text-decoration-none fw-bold"
            >
              Zentexus Technology
            </a>
          </p>
        </footer>
      </section>
    </>
  );
};

export default Footer;
