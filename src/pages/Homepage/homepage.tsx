import React from 'react';
import FirstComponent from '../../components/Homepage/firstComponent';
import HeaderComponent from '../../components/Homepage/header';
import OurServices from '../../components/Homepage/ourServices';
import OurProducts from '../../components/Homepage/ourProducts';

/**
 * Homepage Component
 * This serves as the main entry point of your app and composes the LandingComponent.
 */

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <HeaderComponent/>
        <FirstComponent />
        <OurServices/>
        <OurProducts/>
    </div>
  );
};

export default Homepage;
