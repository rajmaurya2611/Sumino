import React from 'react';
import { Button } from 'antd';
import landingImage from "../../assets/Homepage/Group 1361498813.png";
import motionImage1 from "../../assets/Homepage/Group 1580.png";
import motionImage2 from "../../assets/Homepage/Group 5836.png";

/**
 * FirstComponent
 * Responsive landing section with layered animated images,
 * optimized for extra-large screens.
 */
const FirstComponent: React.FC = () => {
  return (
    <section className="bg-[#ECF7FB] font-montserrat pt-20">
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-6 lg:flex-row items-center justify-between md:px-16 xl:px-0 ">
        {/* Left: Text Section */}
        <div className="md:w-1/2 pl-6 space-y-6">
          <h1 className="font-semibold text-[#183B56] text-5xl ">
            We Craft;<br />
            Deploy & Create<br />
            Scalable Apps
          </h1>
          <p className="text-lg text-[#5A7184]">
            Build. Launch. Repeat.<br />
            Productive & Creative Tools!<br />
            Make Your Day-to-Day Easy. 
          </p>
          <Button type="primary" size="large">
            Explore Apps
          </Button>
        </div>

        {/* Right: Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center items-center">
          {/* Main illustration */}
          <img
            src={landingImage}
            alt="Landing Illustration"
            className="w-full max-w-md relative z-0"
          />
          {/* Floating overlay left */}
          <img
            src={motionImage1}
            alt="Decoration Left"
            className="absolute top-16 left-0 w-1/3 max-w-sm z-10 animate-float-slow"
          />
          {/* Floating overlay right */}
          <img
            src={motionImage2}
            alt="Decoration Right"
            // style={{ animationDelay: "-4s" }}
            className="absolute top-30 right-28 xl:right-28 w-1/6 max-w-sm z-10 animate-float-slow"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstComponent;