import React from "react";
import Navbar from "../components/templates/NavBar";
import Footer from "../components/templates/Footer";
import "../css/Testimonial.css";
import client from '../assets/client.png';
import upIcon from '../assets/up.png'

const testimonials = [
  {
    name: "Sarah Williams",
    role: "HR Manager",
    message: "Delivered Top Candidates That Matched Our Needs Perfectly.",
    image: client, // Replace with actual image URL
  },

  {
    name: "Sarah Williams",
    role: "HR Manager",
    message: "Delivered Top Candidates That Matched Our Needs Perfectly.",
    image: client, // Replace with actual image URL
  },

  {
    name: "Sarah Williams",
    role: "HR Manager",
    message: "Delivered Top Candidates That Matched Our Needs Perfectly.",
    image: client, // Replace with actual image URL
  },

  {
    name: "Sarah Williams",
    role: "HR Manager",
    message: "Delivered Top Candidates That Matched Our Needs Perfectly.",
    image:client, // Replace with actual image URL
  },

  {
    name: "Sarah Williams",
    role: "HR Manager",
    message: "Delivered Top Candidates That Matched Our Needs Perfectly.",
    image:client, // Replace with actual image URL
  },

  {
    name: "Sarah Williams",
    role: "HR Manager",
    message: "Delivered Top Candidates That Matched Our Needs Perfectly.",
    image: client, // Replace with actual image URL
  },

];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function TestimonialCard({ testimonial }) {
  return (
    <div className="dmam-card">
      <h2 className="dmam-quote-a">❝</h2>
      <p className="dmam-quote ">{testimonial.message} </p>
      <div className="dmam-profile">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="dmam-img"
        />
        <div className="dmam-info">
          <h3 className="dmam-name">{testimonial.name}</h3>
          <p className="dmam-role">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialSection() {
  return (
    <div className="dmam-testimonial-container">
        <Navbar/>
        <div className="dmam-section">
            <br/><br/>
      <h2 className="dmam-title">What Our Client Say</h2>
      <div className="dmam-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
      <img src={upIcon} alt="Scroll Up" className="scroll-up-icon" onClick={scrollToTop} />
    </div>
    <div className="container3">
        <Footer />
    </div>
    </div>
  );
}

export default TestimonialSection;
