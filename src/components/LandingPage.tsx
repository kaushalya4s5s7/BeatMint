import React, { useEffect, useState } from 'react';
import { Twitter, Menu, Play, Disc, Users, Wallet, TrendingUp, Music } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 100) {
        setShowTooltip(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trendingNFTs = [
    {
      title: "Neon Dreams",
      artist: "CyberWave",
      price: "2.5 ETH",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
      title: "Digital Horizon",
      artist: "Meta Wave",
      price: "1.8 ETH",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=500&fit=crop"
    },
    {
      title: "Future Beats",
      artist: "Neural Pulse",
      price: "3.2 ETH",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop"
    }
  ];

  const steps = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Connect Wallet",
      description: "Link your crypto wallet to start collecting music NFTs"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Choose Your Music",
      description: "Browse exclusive tracks from top artists"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Make Your Bid",
      description: "Place bids on your favorite music NFTs"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white scroll-section">
      
      {showTooltip && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 z-20 bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-md">
         
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-4 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Disc className="w-10 h-10 text-neon-green" />
            <div className="hidden md:flex gap-8">
              <a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a>
              <a href="#trending" className="text-gray-400 hover:text-white">Trending</a>
              <a href="#collection" className="text-gray-400 hover:text-white">Collection</a>
              <a href="#community" className="text-gray-400 hover:text-white">Community</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            <button onClick={() => navigate('/')} className="bg-white/10 px-6 py-2 rounded-full text-white hover:bg-white/20 transition-all">
              CONNECT WALLET
            </button>
            <Menu className="md:hidden w-6 h-6" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="gradient-bg absolute inset-0 opacity-30" 
             style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
        <div className="max-w-7xl mx-auto px-6 pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
   <h1 className="hero-title text-5xl md:text-7xl mb-6 md:mb-0 w-full md:w-1/3 slide-in">
     RhythMint<br />
     Music NFTs<br />
     Collection
   </h1>

   <div className="hero-spline w-full md:w-2/3">
     <Spline scene="https://prod.spline.design/Jdw3yQDv4cIITrEG/scene.splinecode" />
   </div>
 </div>

          <div className="max-w-lg slide-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-gray-400 text-lg mb-8">
              Collect exclusive music NFTs from top artists,
              join our community, unlock opportunities.
            </p>
            <button className="bg-neon-green text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all">
              DISCOVER →
            </button>
          </div>
        </div>
      </div>

     {/* How It Works Section */}
<motion.div
  id="how-it-works"
  className="py-24 px-6 bg-deep-black"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeInOut" }}
>
  <div className="max-w-7xl mx-auto">
    <h2 className="hero-title text-6xl mb-12 text-center">
      How It Works
    </h2>

    {/* Animated Cards */}
    <div className="grid md:grid-cols-3 gap-12">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="hover-card p-6 rounded-xl bg-white/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0,255,0,0.2)" }}
        >
          {/* Pulsing Animation */}
          <motion.div
            className="absolute inset-0 bg-neon-green/10 rounded-xl animate-pulse"
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
            }}
          />

          <div className="relative z-10">
            <div className="text-neon-green mb-4">{step.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>
      {/* Trending NFTs Section */}
      <div id="trending" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="hero-title text-6xl mb-12">Trending Music NFTs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trendingNFTs.map((nft, index) => (
              <div key={index} className="hover-card group">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={nft.image} 
                    alt={nft.title}
                    className="w-full aspect-square object-cover transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <button className="bg-neon-green text-black p-3 rounded-full">
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">{nft.title}</h3>
                  <p className="text-gray-400">{nft.artist}</p>
                  <p className="text-neon-green font-bold mt-2">{nft.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div id="community" className="py-24 px-6 bg-deep-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="hero-title text-6xl mb-6">
                Join Our<br />
                Community
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Connect with other music NFT collectors, artists, and enthusiasts.
                Be part of the future of music ownership.
              </p>
              <button className="bg-neon-green text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all">
                Join Discord →
              </button>
            </div>
            <div className="float-animation">
              <Users className="w-64 h-64 text-neon-green mx-auto opacity-80" />
            </div>
          </div>
        </div>
      </div>

      
     
    </div>
  );
}
