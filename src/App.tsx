import React, { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignUpLogin from "./pages/SignUpLogin";
import Navbar from "./components/Navbar";
import ProfileSetup from "./pages/ProfileSetup";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Marketplace from "./pages/MarketPlace";
import Collection from "./pages/Collection";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-black text-white">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<SignUpLogin />} />
              <Route path="/profile-setup" element={<ProfileSetup />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </main>
        </div>
        m
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
