import React, { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpLoginPage from './components/SignUpLoginPage';
import ProfileSetupPage from './components/ProfileSetupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/auth" element={<SignUpLoginPage />} />
        <Route path="/profile" element={<ProfileSetupPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;