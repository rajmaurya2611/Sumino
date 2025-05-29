import React from 'react';
import suminoLogo from "../../assets/Homepage/Group 1563.png"; // Adjust the path as necessary

/**
 * HeaderComponent
 * A transparent header with a logo on the left.
 */
const HeaderComponent: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent py-4 px-0 sm:px-8 md:px-8 lg:px-16 ">
  <div className="w-full flex items-center">
        {/* Logo on the left */}
        <div className="">
          <img
            src={suminoLogo}
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>
        {/* Optional: right side nav or actions goes here */}
        <nav className="">
          {/* Example nav links:
          <a href="#features" className="text-white ml-6">Features</a>
          <a href="#pricing" className="text-white ml-6">Pricing</a>
          */}
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
