import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpLogin() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!(window as any).ethereum) {
        alert(
          "MetaMask is not installed. Please install it to use this feature."
        );
        return;
      }
      const accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts && accounts.length > 0) {
        // Here you would typically send the email, password, and wallet address to your backend
        console.log("Connected account:", accounts[0]);
        console.log("Email:", email);
        // Navigate to profile setup
        navigate("/profile-setup");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect wallet");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">RhythMint</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24">
        <div className="max-w-md mx-auto bg-white/5 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? "Login" : "Sign Up"} to RhythMint
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-full transition-all"
            >
              {isLogin ? "Login" : "Sign Up"} with MetaMask
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-white/60 hover:text-white"
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
