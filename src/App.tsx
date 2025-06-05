// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/homepage';
import AllProductsPage from './pages/AllProducts/allProductsPage';
import InsaverMain from './pages/Insaver/insaverMain';
import InsaverPrivacyPolicy from './pages/Insaver/insaver_privacy';

/**
 * App Component
 * Renders the main Homepage component
 */
const App: React.FC = () => {
  return (
    <Routes>
      {/* redirect old landing */}
      <Route path="/" element={<Homepage />} />

      {/* your other pages */}
      <Route path="/products"  element={<AllProductsPage />} />

      <Route path="/products/insaver"  element={<InsaverMain />} />

       <Route path="/products/insaver/privacypolicy"  element={<InsaverPrivacyPolicy/>} />
    </Routes>
  );
};

export default App;
