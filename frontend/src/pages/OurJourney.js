import React from 'react';
import '../css/OurJourney.css';
import Navbar from '../components/templates/NavBar';
import Footer from "../components/templates/Footer";
import Up from '../assets/up.png';

// Import Images
import heroBackground from '../assets/header_image.png';
import visionImage from '../assets/vision.png';
import missionImage from '../assets/mission.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import { Link } from "react-router-dom";



const OurJourney = () => {
  const specialties = [
    { image: image1, title: "Talent Management Excellence", description: "Leveraging our expertise in talent management, we meticulously identify, assess, and cultivate top-tier professionals to meet your organizational needs and objectives." },
    { image: image2, title: "Executive Search Mastery", description: "Our executive search services employ a rigorous methodology to source, evaluate, and secure high-caliber executives who align seamlessly with your company's vision and strategic goals." },
    { image: image3, title: "Competitive Pricing Structure", description: "Our pricing model is positioned below industry standards, ensuring exceptional value without compromising the quality of our services." },
    { image: image4, title: "Client-Centric Flexibility", description: "We pride ourselves on a flexible approach tailored to the unique requirements of each client. Our adaptability ensures a customized solution that aligns seamlessly with your organizational dynamics." },
    { image: image5, title: "Uninterrupted Communication Channels", description: "We prioritize continuous and transparent communication, providing you with regular updates and insights throughout the engagement process." },
    { image: image6, title: "Round-the-Clock Service", description: "Our dedicated team operates 24/7 to address your needs promptly. With an unwavering commitment to service excellence, we ensure uninterrupted support to meet the demands of your dynamic business environment." }
  ];
 
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    
}
  
  return (
    <div className="our-journey-container">
      <Navbar />

      {/* Hero Section */}
      <header className="mmgp-hero-header" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="mmgp-hero-content">
          <h1 className="mmgp-hero-title">Our Journey</h1>
          <p className="mmgp-hero-subtitle">
            Trusted advisors for five years, connecting talent with opportunity,
            driven by professionalism, integrity, and excellence.
          </p>
          <div className="mmgp-founders-btn-container">
            <button className="mmgp-founders-view-btn">Founder's View</button>
          </div>
        </div>
      </header>

      {/* Vision & Mission Section */}
      <section className="mmgp-vision-mission">
        <div className="mmgp-vision">
          <div className="mmgp-vision-content">
            <img src={visionImage} alt="Vision" className="mmgp-vision-img" loading="lazy" />
            <div className="mmgp-vision-text">
              <h2>VISION</h2>
              <p>Our aim is to become the go-to organization for all human resource and business needs.
                 We are committed to providing exceptional service, expertise, professionalism, honesty, and integrity to all our clients and community members.</p>
            </div>
          </div>
        </div>

        <div className="mmgp-mission">
          <div className="mmgp-mission-content">
            <div className="mmgp-mission-text">
              <h2>MISSION</h2>
              <p>To showcase emerging market talent globally to provide a genuinely local solution to organizational needs.</p>
            </div>
            <img src={missionImage} alt="Mission" className="mmgp-mission-img" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="mmgp-Linear">
      <Link to="/progress" style={{ textDecoration: "none", color: "inherit" }}>
        <h2>Progress Through the Years &gt;&gt;</h2>
      </Link>
      <div className="mmgp-Linear-content"></div>
    </section>

      {/* Services Section */}
      <section className="mmgp-services">
        <h2>Our Services</h2>
        <div className="mmgp-service-list">
          {["Staffing and Recruiting", "Interview Preparation", "HR Consultancy", "Salary Benchmarking", "Global Recruitment Service", "Background Verification","Training and Development","Payroll Outsourcing"].map((service, index) => (
            <button key={index} className="mmgp-service-btn">{service}</button>
          ))}
        </div>
      </section>

      {/* Specialties Section */}
      <section className="mmgp-specialties">
        <h2>Our Specialties</h2>
        <div className="mmgp-specialty-list">
          {specialties.map((specialty, index) => (
            <div key={index} className="mmgp-specialty">
              <div className={`mmgp-specialty-content ${index % 2 === 1 ? 'even' : 'odd'}`}>
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="mmgp-specialty-img"
                  loading="lazy"
                />
                <div className="mmgp-specialty-description">
                  <h3>{specialty.title}</h3>
                  <p>{specialty.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="mmgp-why-join">
        <h2>Why candidates must join with us to land their dream job?</h2>
        <div className="mmgp-why-join-list">
          {[
            { num: "1", title: "Expertise and Specialization", desc: "We specialize in industries and job sectors so candidates can increase their chances of being matched with opportunities that align with their skills and career goals." },
            { num: "2", title: "Access to a Broad Network", desc: "We have extensive networks and relationships with a variety of employers." },
            { num: "3", title: "Professional Guidance", desc: "We offer professionals insights into the job market, industry trends, and effective job search strategies." },
            { num: "4", title: "Streamlined Application Process", desc: "Candidates appreciate the streamlined and efficient application process facilitated by Gamage Recruiters." },
            { num: "5", title: "Confidentiality", desc: "By working with Gamage Recruiters, candidates can explore job opportunities without their current employers being aware." },
            { num: "6", title: "Career Support Services", desc: "We offer additional services such as resume reviews, interview preparation, and career counseling." }
          ].map((item, index) => (
            <div key={index} className="mmgp-why-join-item">
              <h3>{item.num}</h3>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
       <div className="mmgp-up-container" onClick={handleScrollToTop}>
                          <img src={Up} className='mmgp-uping' alt="up" />
        </div>
      <Footer/>
    </div>
  );
};

export default OurJourney;