import React from 'react';
import landingInsaverImage from '../../assets/Homepage/image-removebg-preview (1) 1.png'


/**
 * FirstComponent
 * Responsive landing section with layered animated images,
 * optimized for extra-large screens.
 */
const InsaverLandingComponent: React.FC = () => {



  return (
    <section className="bg-[#ECF7FB] font-montserrat pt-32 pb-20">
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-6 lg:flex-row items-center justify-between md:px-16 xl:px-0 ">
        {/* Left: Text Section */}
        <div className="md:w-1/2 pl-6 space-y-6">
          <h1 className="font-semibold text-[#183B56] text-5xl ">
            InSaver: Video & StorySaver
          </h1>
          <p className="text-lg text-[#5A7184]">
            Download stories<br />
            from Instagram easily and  securely<br />
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="md:w-1/5 mt-8 md:mt-0 mr-24 flex justify-center items-center">
          {/* Main illustration */}
          <img
            src={landingInsaverImage}
            alt="Landing Illustration"
            className=" max-w-md relative z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default InsaverLandingComponent;