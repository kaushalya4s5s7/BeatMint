import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Disc3,
  Search,
  User,
  TextSelection as Collection,
  Store,
  Twitter,
} from "lucide-react";
import cn from "../utils/cn";

const Navbar = () => {
  const [account, setAccount] = useState<string | null>(null);

  const location = useLocation();

  const connectWallet = async () => {
    navigate("/auth");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Disc3 className="w-8 h-8 text-neon-green" />
            <span className="text-xl font-bold">RhythMint</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              icon={<Disc3 />}
              label="Home"
              isActive={isActive("/")}
            />
            <NavLink
              to="/explore"
              icon={<Search />}
              label="Explore"
              isActive={isActive("/explore")}
            />
            <NavLink
              to="/collection"
              icon={<Collection />}
              label="Collection"
              isActive={isActive("/collection")}
            />
            <NavLink
              to="/marketplace"
              icon={<Store />}
              label="Marketplace"
              isActive={isActive("/marketplace")}
            />
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-neon-green transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <Link
              to="/profile"
              className="p-2 hover:text-neon-green transition-colors"
            >
              <User className="w-5 h-5" />
              <a
                href="/white paper - music recommendation (NFT).pdf"
                download
                className="bg-white/10 px-6 py-2 rounded-full text-white hover:bg-white/20 transition-all"
              >
                Whitepaper
              </a>
              <button className="bg-white/10 px-6 py-2 rounded-full text-white hover:bg-white/20 transition-all"></button>
            </Link>
            <button
              onClick={connectWallet}
              className="bg-neon-green text-black px-4 py-2 rounded-full font-medium hover:bg-neon-green/90 transition-colors"
            >
              Connect Wallet{account ? "Wallet Connected" : "CONNECT WALLET"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  to,
  icon,
  label,
  isActive,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}) => (
  <Link
    to={to}
    className={cn(
      "flex items-center space-x-2 px-3 py-2 rounded-full transition-colors",
      isActive ? "text-neon-green" : "hover:text-neon-green"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default Navbar;
