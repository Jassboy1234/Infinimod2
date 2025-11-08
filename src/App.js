import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Features from './Features.jsx';
import Home from './Home.jsx'; // or whatever your main component is
// ...existing code...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;