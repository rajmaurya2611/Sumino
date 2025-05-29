import React from 'react';
import HeaderComponent from '../../components/Homepage/header';
import OurAllProducts from '../../components/AllProducts/ourAllProducts';
import Footer from '../../components/Homepage/footer';
/**
 * Homepage Component
 * This serves as the main entry point of your app and composes the LandingComponent.
 */

const AllProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <HeaderComponent/>
        <OurAllProducts/>
        <Footer/>
    </div>
  );
};

export default AllProductsPage;
