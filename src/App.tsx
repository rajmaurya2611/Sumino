// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/homepage';
import AllProductsPage from './pages/AllProducts/allProductsPage';

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
    </Routes>
  );
};

export default App;
