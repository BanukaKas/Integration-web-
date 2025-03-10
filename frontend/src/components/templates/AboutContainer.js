import React from 'react'
import aboutImg from "../../assets/about.png";

function AboutContainer() {
  return (
    <div className="dmam-about-container">
      <div className='dmam-about-1'>
        <img src={aboutImg} />
        <div>
          <p>
            "In the dynamic realm of executive search and recruitment, our
            commitment to client satisfaction is the linchpin of our identity as
            a leading employment agency based in Sri Lanka. With an illustrious
            journey spanning over five years, we have cultivated unparalleled
            expertise and an extensive network, positioning us as trailblazers
            in the industry.
          </p>
          <p>
            This proclamation of success is underscored by our ability to become
            not just service providers but trusted advisors establishing a
            symbiotic relationship that transcends conventional norms. Across
            diverse sectors, both locally and internationally, we have played a
            pivotal role.
          </p>
        </div>
      </div>
      <div className='dmam-about-2'>
        <p>
          As we reflect on our journey, our commitment remains steadfast to
          uphold the highest standards of professionalism, integrity, and
          excellence. We look forward to continuing our mission of facilitating
          unparalleled talent fulfillment, ensuring our clients’ sustained success
          amidst the ever-evolving landscape of the business world."
        </p>
      </div>
    </div>
  );
}

export default AboutContainer;
