import React, { useState } from "react";
import Footer from "../components/templates/Footer";
import "../css/Applyus.css";
import sampleImage from "../assets/office3.jpeg"; // Replace with actual image
import logo from "../assets/logo.png"; // Adjust path if needed

function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    email: "",
    mobile: "",
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate file size
    if (formData.resume && formData.resume.size > process.env.REACT_APP_MAX_FILE_SIZE) {
      alert(`File size must be less than ${process.env.REACT_APP_MAX_FILE_SIZE / 1000000}MB`);
      return;
    }

    // Validate file type
    if (formData.resume && !formData.resume.name.endsWith(process.env.REACT_APP_ALLOWED_FILE_TYPES)) {
      alert(`Only ${process.env.REACT_APP_ALLOWED_FILE_TYPES} files are allowed`);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("experience_years", formData.experience);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile_number", formData.mobile);
    formDataToSend.append("cv_resume", formData.resume);
    formDataToSend.append("job_id", 1);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/apply`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        // Reset form
        setFormData({
          name: "",
          experience: "",
          email: "",
          mobile: "",
          resume: null,
        });
      } else {
        const errorData = await response.json();
        alert(errorData.msg || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the application.");
    }
  };

  return (
    <div className="karw-page">
      {/* <Navbar /> */}

      <div className="karw-container">
        {/* Left Side - Form */}
        <div className="karw-form-section">
          {/* Logo */}
          <div className="karw-logo-container">
            <img src={logo} alt="Company Logo" className="karw-company-logo" />
          </div>

          <h2>Apply Now</h2>
          <p>This is your chance, apply soon.</p>
          <form onSubmit={handleSubmit}>
            <div className="karw-input-group">
              <div className="karw-input-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="karw-input-field">
                <label htmlFor="experience">How many years Experience do you?</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="karw-input-group">
              <div className="karw-input-field">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="karw-input-field">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="karw-file-upload">
              <label>Upload CV/Resume</label>
              <input type="file" accept=".pdf" onChange={handleFileUpload} />
              <label>Only PDF format available.</label>
                 <label>Max file size 12 MB.</label>
            </div>

            <button type="submit" className="karw-submit-btn">Submit</button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="karw-image-section">
          <img src={sampleImage} alt="Teamwork" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ApplyPage;