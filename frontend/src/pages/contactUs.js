import Navbar from '../components/templates/NavBar';
import Footer from "../components/templates/Footer";
import "../css/ContactUs.css";
import phone from "../assets/Vector.png";
import email from "../assets/Vector1.png";
import visitus from "../assets/Vector2.png";
import map from "../assets/map.png";
import double_up from "../assets/Double Up.png"
import ellipse from "../assets/Ellipse 18.png"
import axios from 'axios';
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
    const [values, setValues] = useState({
        name: '',
        phone_number: '',
        email: '',
        message: '',
    });

    const [mailingEmail, setMailingEmail] = useState("");

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleMailingChange = (event) => {
        setMailingEmail(event.target.value);
        console.log("Mailing email:", event.target.value); // Debugging line
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            console.log("Sending data:", values); // Debugging line
            const response = await axios.post('http://localhost:7000/contact_us', values, {
                headers: { "Content-Type": "application/json" }
            });
            toast.success("Message sent successfully!");
            setValues({ name: '', phone_number: '', email: '', message: '' }); // Clear form
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            toast.error("Failed to send message!");
        }
    };
    

    const handleMailingSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:7000/mailing_list', { email: mailingEmail })
            .then(res => {
                toast.success("Subscribed successfully!");
                setMailingEmail(""); // Clear input
            })
            .catch(error => toast.error("Subscription failed!"));
    };

    return (
        <>
            <ToastContainer />
            <div className="mmgp-home-container">
                <Navbar />
                <div className="mmgp-home-main-content">
                    <div className="mmgp-home-hero-section">
                        <div className="mmgp-home-overlay"></div>
                        <div className="mmgp-home-hero-content">
                            <h1 className="mmgp-home-hero-title">Contact Us</h1>
                        </div>
                    </div>

                    <div className="mmgp-main-container">
                        <div className="mmgp-form-container">
                            <div className="mmgp-mailing-section">
                                <span>Our Mailing Section</span>
                                <p>Stay informed with the latest updates! Submit now and receive an automatic confirmation email after submitting your details.</p>
                                <form onSubmit={handleMailingSubmit}>
                                    <div className="mmgp-mailing-section-email">
                                        <input 
                                            type="email" 
                                            placeholder="Email" 
                                            name="email" 
                                            value={mailingEmail} 
                                            onChange={handleMailingChange} 
                                        
                                        />
                                    </div>
                                    <button type="submit">Submit</button>
                                </form>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="mmgp-input">
                                    <div className="mmgp-input-name">
                                        <input 
                                            placeholder="Name" 
                                            name="name" 
                                            value={values.name}
                                            onChange={handleChange} 
                                            required
                                        />
                                    </div>
                                    <div className="mmgp-input-phone">
                                        <input 
                                            placeholder="Phone Number" 
                                            name="phone_number" 
                                            value={values.phone_number}
                                            onChange={handleChange} 
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mmgp-input-email">
                                    <input 
                                        placeholder="Email" 
                                        name="email" 
                                        value={values.email}
                                        onChange={handleChange} 
                                        required
                                    />
                                </div>
                                <textarea 
                                    placeholder="Message" 
                                    rows="4" 
                                    name="message" 
                                    value={values.message}
                                    onChange={handleChange} 
                                    required
                                />
                                <br />
                                <button type="submit">Submit</button>
                            </form>
                        </div>

                        <div className="mmgp-contact-container">
                            <div className="mmgp-reachout-section">
                                <div className="mmgp-reachout-section-a">
                                    <a href="tel:0774795371">
                                        <img src={phone} alt="Phone" />
                                    </a>  
                                    <span>077 479 5371</span>
                                </div>
                                <p>Reach out to us anytime!</p>
                            </div>

                            <div className="mmgp-email-section">
                                <div className="mmgp-email-section-a">
                                    <a href="mailto:gamagerecruiters@gmail.com">
                                        <img src={email} alt="Email" />
                                    </a>
                                    <span>gamagerecruiters@gmail.com</span>
                                </div>
                                <p>Get in touch with us via email</p>
                            </div>

                            <div className="mmgp-visitus-section">
                                <div className="mmgp-visitus-section-a">
                                    <a href="https://maps.app.goo.gl/egwvnT7dbuMzXUhP8">
                                        <img src={visitus} alt="Visit Us" />
                                    </a>
                                    <span>676/1 Colombo - Galle Main Rd, Panadura</span>
                                </div>
                                <p>Visit Us</p>
                            </div>
                        </div>

                        <a href="https://maps.app.goo.gl/egwvnT7dbuMzXUhP8">
                            <div className="mmgp-map-section">
                                <img src={map} alt="Map" />
                            </div>
                        </a>

                        <div className="mmgp-up-arrow">
                            <div className="mmgp-ellipse">
                                <img src={ellipse} alt="Ellipse" />
                            </div>
                            <a href="/contactus">
                                <div className="mmgp-double-up">
                                    <img src={double_up} alt="Double Up" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default ContactUs;
