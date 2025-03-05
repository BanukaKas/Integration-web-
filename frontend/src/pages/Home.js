import { React, useState } from 'react';
import tel from '../assets/10th card.png';
import insuarance from '../assets/11th card.png';
import edu from '../assets/12th card.png';
import fcmg from '../assets/1st card.png';
import ecommerce from '../assets/2nd card.png';
import manufacturing from '../assets/3rd card.png';
import it from '../assets/4th card.png';
import pe from '../assets/5th card.png';
import hr from '../assets/6th card.png';
import hospitality from '../assets/7th card.png';
import ship from '../assets/8th card.png';
import acc from '../assets/9th card.png';
import brand1 from '../assets/Rectangle 376.png';
import brand2 from '../assets/Rectangle 377.png';
import brand3 from '../assets/Rectangle 378.png';
import brand4 from '../assets/Rectangle 379.png';
import brand5 from '../assets/Rectangle 381.png';
import brand6 from '../assets/Rectangle 382.png';
import brand7 from '../assets/Rectangle 383.png';
import brand8 from '../assets/Rectangle 384.png';
import brand9 from '../assets/Rectangle 385.png';
import brand10 from '../assets/Rectangle 386.png';
import brand11 from '../assets/Rectangle 387.png';
import brand12 from '../assets/Rectangle 389.png';
import brand13 from '../assets/Rectangle 390.png';
import brand14 from '../assets/Rectangle 391.png';
import brand15 from '../assets/Rectangle 392.png';
import brand16 from '../assets/Rectangle 393.png';
import brand17 from '../assets/Rectangle 394.png';
import wave4 from '../assets/wave4.png';
import logo from '../assets/logo.png';
import aboutUs from '../assets/about-us.jpg';
import waveImage from '../assets/wave.png';
import cblLogo from '../assets/CBLLogo.png';
import genxtLogo from '../assets/gen.png';
import jayanayakeLogo from '../assets/jana.png';
import upIcon from '../assets/up.png';
import Footer from '../components/templates/Footer';
import Navbar from '../components/templates/NavBar';
import '../css/Home.css';
import '../css/home2.css';

function MainPage() {
    const [formData, setFormData] = useState({
        fullname: '',
        companyname: '',
        jobtitle: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {   
        e.preventDefault();
        console.log("Form Submitted:",formData);
        const response = await fetch('http://localhost:7000/api/inquiery,', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fullname: formData.fullname,
                companyname: formData.companyname,
                jobtitle: formData.jobtitle,
                phone: formData.phone,
                email: formData.email,
                message: formData.message
              }),
        });

        const data = await response.json();
        alert(data.message);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="user-home-container">
            <Navbar />
            <div className="user-home-main-content">
                <div className="user-home-hero-section">
                    <div className="user-home-overlay"></div>
                    <div className="user-home-hero-content">
                        <h1 className="user-home-hero-title">GAMAGE RECRUITERS</h1>
                        <p className="user-home-hero-description">
                            Our Go-To Platform For Connecting Top Talent With Great Opportunities. 
                            <br/>&nbsp;&nbsp;&nbsp;Find Jobs Or Post Them To Hire The Best—Seamlessly And Efficiently!
                        </p>
                        <button className="user-home-contact-button">Contact Us</button>
                        <div className="user-home-hero-image"><img src={wave4}/></div>
                    </div>
                </div>
                <div className="user-home-industries-section">
                    <h2 className="user-home-industries-title">INDUSTRIES</h2><br/>
                    <div className='dmam-industries-scroll'>
                        <div className='dmam-industries-container'>
                            <div className='dmam-industry-card'><img src={fcmg}/>
                            <div className='dmam-industry-card-overlay'>FMCG</div>
                            <p>
                                <strong>FMCG(Fast-Moving <br/> Consumer Goods)</strong>
                                <br/>The FMCG industry focuses on
                                <br/> producing, distributing, and selling
                                <br/>everyday essentials such as food,
                                <br/> beverages, personal care products, and
                                <br/> household items. Known for high
                                <br/> demand and rapid turnover, this sector
                                <br/>thrives on efficiency, innovation, and
                                <br/> meeting consumer needs.
                            </p>
                        </div>

                        <div className='dmam-industry-card'><img src={ecommerce}/>
                        <div className='dmam-industry-card-overlay'>E-commerce</div>
                                <p data-transition-direction="left">
                                    <strong>E-commerce</strong>
                                    <br/>The E-commerce industry revolutionizes retail by<br/> enabling businesses to
                                    sell products and services online.<br/>This sector thrives on innovation,
                                    offering seamless<br/> shopping experiences, diverse product ranges,<br/> and 
                                    convenient delivery options catering to the <br/>modern consumer's demand
                                    for speed and accessibility.
                                </p>
                        </div>
                            
                        <div className='dmam-industry-card'><img src={manufacturing}/>
                        <div className='dmam-industry-card-overlay'>Manufacturing</div>
                                <p data-transition-direction="down">
                                    <strong>Manufacturing</strong>
                                    <br/>The Manufacturing industry drives economic growth by<br/>transforming raw 
                                    materials into finished goods<br/> through advanced processes and 
                                    technology. Spanning<br/> sectors such as automotive, electronics, and 
                                    textiles,<br/> it emphasizes innovation, efficiency, and quality to meet 
                                    <br/>global market demands.
                                </p>
                        </div>

                        <div className='dmam-industry-card'><img src={it}/>
                        <div className='dmam-industry-card-overlay'>Information Technology</div>
                                <p data-transition-direction="right">
                                    <strong>Information<br/> Technology (IT)</strong>
                                    <br/>The Information Technology industry powers innovation<br/> and connectivity
                                    by developing, managing, and<br/> implementing technology solutions. From
                                    <br/>software development to cybersecurity and cloud<br/>computing, IT drives 
                                    digital transformation and supports<br/> businesses in achieving
                                    efficiency and growth.
                                </p>
                        </div>

                        <div className='dmam-industry-card'><img src={pe}/>
                        <div className='dmam-industry-card-overlay'>Power & Energy</div>
                            <p>
                                    <strong>Power & Energy</strong>
                                    <br/>The Power & Energy industry is the backbone of<br/> modern infrastructure, 
                                    providing essential energy <br/>solutions through renewable and non-
                                    renewable <br/>resources. Focused on innovation and sustainability,<br/> it drives 
                                    economic growth and supports global<br/> energy demands while
                                    transitioning toward greener<br/> technologies
                            </p>
                        </div>

                        <div className='dmam-industry-card'><img src={hr}/>
                        <div className='dmam-industry-card-overlay'>Human Resources</div>
                            <p data-transition-direction="left">
                                    <strong>Human Resources<br/> (HR)</strong>
                                    <br/>The Human Resources industry focuses on managing<br/> and developing an 
                                    organization's workforce. It<br/> encompasses recruitment, training, employee
                                    <br/>relations, and strategic planning, playing a crucial role<br/> in building a  
                                    productive, engaged, and thriving <br/>workplace.
                            </p>
                        </div>

                        <div className='dmam-industry-card'><img src={hospitality}/>
                        <div className='dmam-industry-card-overlay'>Hospitality</div>
                            <p data-transition-direction="down">
                                    <strong>Hospitality</strong>
                                    <br/>The Hospitality industry is dedicated to delivering<br/> exceptional experiences
                                    through services such as<br/> lodging, dining, and event management.
                                    <br/>Centered on customer satisfaction, it thrives on <br/>innovation, attention to 
                                    <br/>detail, and creating memorable moments for guests.
                            </p>
                        </div>

                        <div className='dmam-industry-card'><img src={ship}/>
                        <div className='dmam-industry-card-overlay'>Shipping & Freight</div>
                            <p data-transition-direction="right">
                                    <strong>Shipping & Freight</strong>
                                    <br/>The Shipping and Freight industry is the lifeline<br/> of global trade,  
                                    specializing in the transportation<br/>of goods via sea, air, and land. It ensures
                                    <br/>efficient logistics, supply chain management, and<br/> timely delivery,  
                                    connecting businesses<br/> and markets worldwide.
                            </p>
                        </div>

                        <div className='dmam-industry-card'><img src={acc}/>
                        <div className='dmam-industry-card-overlay'>Accounting & Finance</div>
                            <p>
                                    <strong>Accounting & Finance</strong>
                                    <br/>The Accounting and Finance industry drives <br/>business success by  
                                    managing financial operations,<br/> ensuring compliance, and providing 
                                    strategic insights.<br/> From bookkeeping to financial planning, it plays a 
                                    <br/>pivotal role in sustaining organizational<br/> growth and stability.
                            </p>
                        </div>

                        <div className='dmam-industry-card'><img src={tel}/>
                        <div className='dmam-industry-card-overlay'>Telecommunication</div>
                            <p data-transition-direction="left">
                                    <strong>Telecommunication</strong>
                                    <br/>The Telecommunication industry connects the world <br/>through advanced 
                                    communication technologies,<br/> including mobile networks, internet 
                                    services, and<br/> satellite systems. It drives global connectivity, enabling  
                                    <br/>seamless communication and powering the digital age.
                            </p>
                        </div>

                        <div className='dmam-industry-card'><img src={insuarance}/>
                        <div className='dmam-industry-card-overlay'>Insurance</div>
                            <p data-transition-direction="down">
                                    <strong>Insurance</strong>
                                    <br/>The Insurance industry provides financial protection<br/> and risk   
                                    management solutions for individuals and<br/> businesses. By offering 
                                    coverage for health,<br/> property, life, and more, it ensures security, peace of 
                                    <br/>mind, and resilience against unforeseen events.
                            </p>
                        </div>

                        <div className='dmam-industry-card'><img src={edu}/>
                        <div className='dmam-industry-card-overlay'>Education</div>
                            <p data-transition-direction="right">
                                    <strong>Education</strong>
                                    <br/>The Education industry empowers individuals and <br/>communities through  
                                    learning and skill development.<br/> By offering diverse programs, innovative
                                    teaching<br/> methods, and lifelong learning opportunities, it shapes<br/> future 
                                    leaders and drives societal progress.
                            </p>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div id="about-us" className="user-home-about-section">
                    <div className="user-home-about-container">
                        <div className="user-home-about-image">
                            <img src={logo} alt="Company Logo" className="user-home-about-logo" />
                            <img src={aboutUs} alt="About Us" className="user-home-about-img" />
                        </div>
                        <div className="user-home-about-content">
                            <h2 className="user-home-about-title">ABOUT US</h2>
                            <h4 className="user-home-about-h4">Welcome to Gamage Recruiters!</h4>
                            <p className="user-home-about-p1">
                                At Gamage Recruiters, we connect talented individuals with
                                promising opportunities, driving careers and organizational growth.
                                As an executive search firm, we focus on excellence in
                                every placement. Join us in shaping futures where aspirations meet
                                opportunities.
                            </p>
                        </div>
                    </div>
                </div> 
                {/* Client Feedback Section */}
                <div id="testimonials"className="user-home-feedback-section">
                    <div className="user-home-feedback-title-container">
                        <img src={waveImage} alt="Wave Background" className="user-home-feedback-wave" />
                        <h2 className="user-home-feedback-title">CLIENT FEEDBACK</h2>
                 
                    <div className="testimonial-container">
                        <div className="testimonial">
                            <img src={cblLogo} alt="CBL Logo" className="testimonial-logo" />
                            <h2>Chamila Senarathne</h2>
                            <h3>General Manager HR - CBL Food Cluster</h3>
                            <p>'I’ve had the privilege of working with Gamage Recruiters, and I must commend their exceptional professionalism and collaborative work partnership throughout the talent acquisition process. Their unique and disciplined approach ensures they find the best fit for the role. Having worked with them for a considerable time, I wholeheartedly recommend Gamage Recruiters for executive hires .'</p>
                        </div>
                        <div className="testimonial">
                            <img src={genxtLogo} alt="GenXT Logo" className="testimonial-logo" />
                            <h2>Amali Rathnapala</h2>
                            <h3>Manager HR- Gnext</h3>
                            <p>'Your recruitment service was instrumental in fulfilling our urgent and critical hiring needs. It allowed us to discreetly recruit for senior positions without alerting the market, ensuring confidentiality throughout the process. Additionally, your ability to source qualified candidates with specialized expertise in our specific industry was invaluable. This tailored approach not only saved us time but also ensured that we secured the right talent for key roles.'</p>
                        </div>
                        <div className="testimonial">
                            <img src={jayanayakeLogo} alt="Jayanayake Logo" className="testimonial-logo" />
                            <h2>R.Jayasinghe</h2>
                            <h3>Director - Transocean DUTY FREE (PVT) LTD</h3>
                            <p>'I wholeheartedly recommend Gamage Recruiters.<br>
                            </br>Working with them has been an absolute game-changer in our talent acquisition journey. Their exceptional professionalism and collaborative spirit shine through every step of the process. If you're on the lookout for a recruiting partner that goes above and beyond, Gamage Recruiters PVT LTD is the one. I recommend them without hesitation for any executive hiring needs'
</p>
                        </div>
                    </div>
                </div>
                </div>
                

            <div className="dmam-gradient-section">
                    <h2 className="dmam-clients-title">OUR CLIENTS</h2><br/><br/>
                    <p className="dmam-clients-subtitle">Trusted By <strong>GREAT BRANDS</strong></p><br/><br/>
                    <div className="dmam-client-scroll">
                        <div className='dmam-client-container'>
                            <div className='dmam-client-card'><img src={brand1}/></div>
                            <div className='dmam-client-card'><img src={brand2}/></div>
                            <div className='dmam-client-card'><img src={brand3}/></div>
                            <div className='dmam-client-card'><img src={brand4}/></div>
                            <div className='dmam-client-card'><img src={brand5}/></div>
                            <div className='dmam-client-card'><img src={brand6}/></div>
                            <div className='dmam-client-card'><img src={brand7}/></div>
                            <div className='dmam-client-card'><img src={brand8}/></div>
                            <div className='dmam-client-card'><img src={brand9}/></div>
                            <div className='dmam-client-card'><img src={brand10}/></div>
                            <div className='dmam-client-card'><img src={brand11}/></div>
                            <div className='dmam-client-card'><img src={brand12}/></div>
                            <div className='dmam-client-card'><img src={brand13}/></div>
                            <div className='dmam-client-card'><img src={brand14}/></div>
                            <div className='dmam-client-card'><img src={brand15}/></div>
                            <div className='dmam-client-card'><img src={brand16}/></div>
                            <div className='dmam-client-card'><img src={brand17}/></div>
                        </div>
                    </div><br/><br/>
             

            <div className="dmam-inquiries-container">
                <h2 className="dmam-inquiries-title">SEND YOUR INQUIRIES</h2>
                <p className="dmam-inquiries-subtitle">Please feel free to get in touch using the form below.<br/> We'd like to hear from you.</p>
                
                <form className="dmam-inquiries-form" onSubmit={handleSubmit}>
                    <div className="dmam-input-group">
                        <input type="text" name="fullname" placeholder="FULL NAME" value={formData.fullname} onChange={handleChange} required/>
                        <input type="text" name="companyname" placeholder="COMPANY NAME" value={formData.companyname} onChange={handleChange} required />
                    </div>
                    <div className="dmam-input-group">
                        <input type="text" name="jobtitle" placeholder="JOB TITLE" value={formData.jobtitle} onChange={handleChange} required/>
                        <input type="tel"  name="phone" placeholder="PHONE NUMBER" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <input type="email" name="email" placeholder="EMAIL" value={formData.email} onChange={handleChange} required/>
                    <textarea placeholder="TYPE YOUR MESSAGE...."  name="message" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit" >Submit</button>
                </form>
            </div>
            <img src={upIcon} alt="Scroll Up" className="scroll-up-icon" onClick={scrollToTop} />
        </div>
        
        <div className="container3">
            <Footer />
        </div>
    </div>
    );
}

export default MainPage;
