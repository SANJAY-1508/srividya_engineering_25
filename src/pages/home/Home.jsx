import React from "react";
import Banners from "../components/Banners";
import Button from "../../components/Buttons";
import { Col, Container, Row } from "react-bootstrap";
import OrgCarousal from "../components/OrgCarousal";
import Placement from "../components/Placement";
import Events from "../components/Events";
import FeatureImg from "../../assets/images/home/features_img.jpg";
import { GiWorld, GiBrain } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { AiFillExperiment } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa6";
import ApplicationImg from "../../assets/images/application.png";
const Home = () => {
  return (
    <>
      <Banners />
      <Button variant="submit_btn" text="Enquiry Now !" className="fixed-btn" />
      {/* about SVCET */}
      <section className="pad-tb">
        <Container>
          <Row>
            <Col lg="6" md="12" sm="12" className="py-3">
              <div className="black-font svcet-font">
                <span className="blue">S</span>ri{" "}
                <span className="blue">V</span>idya
              </div>
              <div className="svcet-font-two regular-font">
                Collge Of Engineering
              </div>
            </Col>
            <Col lg="6" md="12" sm="12" className="py-3">
              <p className="regular-font">
                Srividya College of Engineering, one of the top engineering
                colleges in Tamil Nadu, is dedicated to providing world-class
                technical education and fostering innovation, research, and
                leadership among students. Located near Virudhunagar, the
                college offers state-of-the-art infrastructure, modern
                laboratories, and experienced faculty who ensure a perfect
                balance of academic excellence and practical learning. With a
                strong focus on industry collaboration, entrepreneurship, and
                holistic development, Srividya College of Engineering prepares
                students to excel in the ever-evolving world of technology and
                emerge as skilled professionals ready to lead and innovate.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* about SVCET */}
      <section className="divider">
        <Container>
          <Row>
            <Col xs="12" className="py-5">
              <h3 className="black-font blue">
                A Hub of Excellence in Engineering Education{" "}
              </h3>
              <p className="regular-font">
                Srividya College of Engineering, located near Virudhunagar,
                offers a modern campus that inspires innovation and learning.
                With advanced infrastructure and a team of experienced faculty,
                the college provides top-quality education in engineering and
                technology. Its strong industry connections help students gain
                practical experience and global exposure. Srividya encourages
                creativity, leadership, and research-driven learning. Recognized
                as one of the best engineering colleges in Tamil Nadu, it
                prepares students to become future-ready professionals.{" "}
              </p>
            </Col>
            <Col lg="3" md="6" sm="12">
              <div className="about-box">
                <h5 className="blue bold-font">
                  Bridging Academia and Industry
                </h5>
                <p className="regular-font mb-0">
                  We collaborate with leading industries and technology experts
                  to ensure our students gain practical exposure. Through
                  internships, workshops, and project-based learning, Srividya
                  College helps students connect classroom knowledge with
                  real-world applications, preparing them for global
                  opportunities.
                </p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="12">
              <div className="about-box">
                <h5 className="blue bold-font">
                  Driving Innovation through Research
                </h5>
                <p className="regular-font mb-0">
                  Research at Srividya College is a journey of discovery and
                  advancement. Our dedicated faculty and students collaborate to
                  explore emerging technologies and create impactful solutions.
                  With a focus on interdisciplinary research, we encourage
                  innovative ideas that contribute to both industry and society.
                </p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="12">
              <div className="about-box">
                <h5 className="blue bold-font">
                  Connecting Learning with Industry
                </h5>
                <p className="regular-font mb-0">
                  Through strategic industry partnerships, Srividya College of
                  Engineering ensures students gain valuable hands-on
                  experience. Our practical training, industrial visits, and
                  live projects prepare graduates to meet real-world demands.
                  This synergy between academics and industry builds confident
                  and career-ready professionals.
                </p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="12">
              <div className="about-box">
                <h5 className="blue bold-font">
                  Nurturing Innovation and Knowledge
                </h5>
                <p className="regular-font mb-0">
                  Srividya College of Engineering nurtures students into
                  innovative and skilled professionals. With a balanced blend of
                  technical learning and creativity, the college encourages
                  curiosity and problem-solving. Students gain practical
                  knowledge and confidence to face real-world engineering
                  challenges.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* tieups section */}
      <section className="pad-tb">
        <Container>
          <Row className="text-center py-5">
            <Col lg="12">
              <h3 className="black-font blue py-4">
                Your Gateway to Industry-Ready Opportunities
              </h3>
              <OrgCarousal />
            </Col>
          </Row>
        </Container>
      </section>
      {/* tieups section */}
      {/* acheivers section */}
      <section className="pad-tb">
        <Container>
          <Row className="text-center py-5">
            <Col lg="12">
              <h3 className="black-font blue py-4">
                Your Gateway to Industry-Ready Opportunities
              </h3>
            </Col>
            <Col lg="12">
              <Placement />
            </Col>
          </Row>
        </Container>
      </section>
      {/* acheivers section */}
      {/* life at svcet */}
      <section className="pad-tb">
        <Container>
          <Row className="py-5">
            <Col lg="12">
              <h5 className="regular-font blue ">
                TRANSFORMING EDUCATION, INSPIRING FUTURES
              </h5>
              <h3 className="black-font py-2">
                Innovation | Excellence | Empowerment
              </h3>
              <p className="regular-font">
                At Sri Vidya College of Engineering & Technology (SVCET), one of
                the best engineering colleges in Tamil Nadu, we believe in
                transforming young minds into confident professionals and
                responsible innovators. Our institution blends strong academics,
                hands-on research, and modern learning methods to prepare
                students for the challenges of a dynamic world. With
                industry-aligned programs and expert faculty, we empower
                students to turn ideas into impact and build a meaningful career
                in engineering and technology.
              </p>
            </Col>
            <Col lg="7" className="py-3">
              <h5 className="bold-font">CELEBRATE LIFE AND LEARNING AT</h5>
              <div className="image-text">Srividya</div>

              <p className="regular-font">
                Life at Srividya College of Engineering & Technology (SVCET) is
                a vibrant blend of academic excellence, innovation, and holistic
                development. Our campus buzzes with energy as students engage in
                cutting-edge research, collaborative projects, and diverse
                extracurricular activities. From state-of-the-art labs to
                cultural festivals, SVCET offers an inspiring environment where
                creativity thrives and lifelong friendships are forged.
              </p>
            </Col>
            <Col lg="5" className="py-3">
              <Events />
            </Col>
          </Row>
        </Container>
      </section>
      {/* life at svcet */}
      {/* feature of srividya */}
      <section>
        <Container className="p-0" fluid>
          <Row>
            <Col xs="12" className="p-0">
              <Row>
                <Col lg="6" md="6" sm="12" className="p-0">
                  <img
                    src={FeatureImg}
                    alt="feature img"
                    className="img-fluid w-100"
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="yellow-bg p-5">
                  <div>
                    <h4 className="bold-font">
                      <GiWorld size="30" />{" "}
                      <span className="ms-3">
                        Government-Endorsed Excellence
                      </span>{" "}
                    </h4>
                    <p className="regular-font">
                      Backed by MNRE-funded projects and MHRD approval, SVCET
                      stands as a trusted institution of innovation and academic
                      quality.
                    </p>
                  </div>
                  <div>
                    <h4 className="bold-font">
                      <GiBrain size="30" />{" "}
                      <span className="ms-3">
                        {" "}
                        Skill Development for Real Careers{" "}
                      </span>
                    </h4>
                    <p className="regular-font">
                      Recognized by the Tamil Nadu Skill Development Corporation
                      (TNSDC), we offer practical, job-oriented programs
                      designed to meet real industry demands.
                    </p>
                  </div>
                  <div>
                    <h4 className="bold-font">
                      <FaRegHandshake size="30" />{" "}
                      <span className="ms-3">
                        {" "}
                        Global Learning Partnerships{" "}
                      </span>
                    </h4>
                    <p className="regular-font">
                      Through international academic collaborations, our
                      students gain access to globally recognized certifications
                      and exposure.
                    </p>
                  </div>
                  <div>
                    <h4 className="bold-font">
                      <AiFillExperiment size={30} />{" "}
                      <span className="ms-3">Hands-On Practical Learning </span>
                    </h4>
                    <p className="regular-font">
                      Experience skill-based training, labs, and internships
                      that prepare students to solve real-world challenges with
                      confidence.
                    </p>
                  </div>
                  <div>
                    <h4 className="bold-font">
                      <FaGraduationCap size={30} />{" "}
                      <span className="ms-3">
                        Student-Centric Growth Environment{" "}
                      </span>
                    </h4>
                    <p className="regular-font">
                      We ensure all-round student success with merit
                      scholarships, transport facilities, and a supportive
                      learning culture that nurtures personal and professional
                      growth.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* feature of srividya */}
      {/* applications*/}
      <section className=" pad-tb">
        <Container className="applications-bg">
          <Row className="text-center">
            <Col lg="6" className="text-start py-3">
              <div className="p-3">
                <h3 className="black-font  white ">
                  Building tomorrow’s innovators through today’s transformative
                  learning.
                </h3>
                <Button variant="submit_btn" text="Enquiry Now !" className="submit_btn" />
              </div>
            </Col>
            <Col lg="6" className="align-items-end">
              <img
                src={ApplicationImg}
                alt="feature img"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* applications*/}
    </>
  );
};

export default Home;
