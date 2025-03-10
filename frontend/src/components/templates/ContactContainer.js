import React from "react";
import founder from "../../assets/founder.png";
import peoples from "../../assets/peoples.png";
import upIcon from "../../assets/up.png"; // Import up icon
import { FaRegUser, FaRegHandshake, FaHouse } from "react-icons/fa6";
import { TbWorld, TbPhoneCall } from "react-icons/tb";

function ContactContainer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="dmam-contact-container">
      <div className="dmam-contact-1">
        <div>
          <p>Best Regards</p>
          <ul>
            <li>
              <FaRegUser />
              Harshana Gamage
            </li>
            <li>
              <FaRegHandshake />
              Chairman & Director
            </li>
            <li>
              <FaHouse />
              Gamage Recruiters PVT LTD
            </li>
            <li>
              <TbWorld />
              harshana@gamagerecruiters.com
            </li>
            <li>
              <TbPhoneCall />
              071 6464746
            </li>
          </ul>
        </div>
        <div>
          <img src={peoples} alt="People" />
        </div>
      </div>
      <div className="dmam-contact-2">
        <img src={founder} alt="Founder" />
        {/* Scroll to top button */}
        <img src={upIcon} alt="Scroll Up" className="scroll-up-icon" onClick={scrollToTop} />
      </div>
    </div>
  );
}

export default ContactContainer;
