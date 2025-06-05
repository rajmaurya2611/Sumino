import React from 'react';
import HeaderComponent from '../../components/Homepage/header';
import InsaverLandingComponent from '../../components/Insaver/insaverLanding';
import ThreeCardCarousel from '../../components/Insaver/carousel';
import AboutSection from '../../components/Insaver/aboutInsaver';
import AppFeatures from '../../components/Insaver/insaverFeatures';
import InsaverFooter from '../../components/Insaver/insaverFooter';

/**
 * Homepage Component
 * This serves as the main entry point of your app and composes the LandingComponent.
 */

const InsaverMain: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <HeaderComponent/>
        <InsaverLandingComponent/>
        <AboutSection/>
        <AppFeatures/>
        <ThreeCardCarousel/>
        <InsaverFooter/>
        
    </div>
  );
};

export default InsaverMain;
