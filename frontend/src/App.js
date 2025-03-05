import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/templates/Footer";
import TestimonialSection from './pages/Testimonial';
import OurJourney from './pages/OurJourney';
import ContactUs from './pages/contactUs';
import Progress from './pages/progrees';

function App() {
  return (
      <Router>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={< Home/>} />
          <Route path='/testimonial' element={<TestimonialSection/>}/>
          <Route path='/ourjourney' element={<OurJourney/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/progress' element={<Progress/>}/>
        </Routes>
      </Router>
  );
}

export default App;
