import React from 'react';
import Navbar from '../components/templates/NavBar';
import Footer from '../components/templates/Footer';
import '../css/Progrees.css';
import TinderLogo from '../assets/Tinder.png';
import Up from '../assets/up.png';
import Cover from '../assets/progress.png';



  

function Progress() {
        const handleScrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        
    }
    return (
        <div className="mmgp-container">
            <Navbar />
            <div className="mmgp-content">
                <div className="mmgp-section">
                    <div className="mmgp-content">
                    <div className='mmgp-cover'>
                        <img src={Cover} className='mmgp-image'/>
                    <h1 className="mmgp-title">Progress Through the Years</h1>
                    </div>
                    
                    </div>
                </div>
                <div className='mmgp-card-section'>
                <div className='mmgp-card'>
                    <p>Gamage Recruiters was officially established with the vision of providing tailored recruitment solutions to businesses in Sri Lanka.
                    Partnered with companies in the IT and manufacturing industries to provide high-quality recruitment services</p>
                   
                    </div>
                    
                    <div className="mmgp-thunder-container">
                      <img src={TinderLogo} className="mmgp-thunder" alt="Tinder Logo" />
                      <span className="mmgp-span">2019</span>
                    </div>

                    <div className='mmgp-card2'>
                    <p>Despite the global disruptions caused by COVID-19, the company adapted by shifting to virtual recruitment processes.
                    The growing demand for skilled professionals .</p>
                   
                    </div>
                    <div className="mmgp-thunder-container">
                    <img src={TinderLogo} className='mmgp-thunder2' alt="Tinder Logo" /> 
                    <span className='mmgp-span1'>2020</span>
                    </div>
                                

                    <div className='mmgp-card3'>
                    <p>Introduced an Applicant Tracking System (ATS) to automate and streamline the hiring process, reducing time-to-hire for clients.
                    Launched marketing campaigns to raise awareness about the importance of professional recruitment services for small.</p>
                   
                    </div>
                    <div className="mmgp-thunder-container">
                    <img src={TinderLogo} className='mmgp-thunder' alt="Tinder Logo" /> 
                    <span className='mmgp-span'>2021</span>
                    </div>
                    <div className='mmgp-card4'>
                    <p>Rolled out flexible talent acquisition packages tailored to startups and emerging businesses.
                    Began offering skill development workshops for job seekers, enhancing employability and preparing candidates for competitive markets.</p>
                   
                    </div>
                    <div className="mmgp-thunder-container">
                    <img src={TinderLogo} className='mmgp-thunder2' alt="Tinder Logo" /> 
                    <span className='mmgp-span1'>2022</span>
                    </div>
                    <div className='mmgp-card5'>
                    <p>Implemented environmentally friendly practices, such as digital-first recruitment processes, reducing the use of paper and other resources.
                    Partnered with over 50 multinational companies, delivering exceptional talent acquisition results on a global scale</p>
                   
                    </div>
                    
                    <div className="mmgp-thunder-container">
                    <img src={TinderLogo} className="mmgp-thunder" alt="Tinder Logo" />
                    <span className='mmgp-span'>2023</span>
                    </div>

                    <div className="mmgp-up-container" onClick={handleScrollToTop}>
                    <img src={Up} className='mmgp-up' alt="up" />
                   </div>

                    
            
                <div className="mmgp-container3">
                <Footer />
            </div>
            </div>
           
            </div>
            
        </div>
    );
}

export default Progress;
