import React, { useState } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  Clock,
  Flame,
  TrendingUp,
} from "lucide-react";

const Marketplace = () => {
  const [sortBy, setSortBy] = useState("trending");

  const mockListings = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    title: `Track ${i + 1}`,
    artist: `Artist ${i + 1}`,
    price: `${(Math.random() * 2).toFixed(2)} ETH`,
    highestBid: `${(Math.random() * 1.5).toFixed(2)} ETH`,
    timeLeft: `${Math.floor(Math.random() * 24)}h ${Math.floor(
      Math.random() * 60
    )}m`,
    image: `https://source.unsplash.com/random/400x400?music&sig=${i + 60}`,
  }));

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <h1 className="text-4xl font-bold">Marketplace</h1>
        <div className="flex w-full md:w-auto gap-4">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search marketplace"
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-neon-green/50"
            />
          </div>
          <button className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10">
            <Filter className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10">
            <ArrowUpDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        <SortButton
          icon={<Flame className="w-5 h-5" />}
          label="Hot"
          active={sortBy === "hot"}
          onClick={() => setSortBy("hot")}
        />
        <SortButton
          icon={<TrendingUp className="w-5 h-5" />}
          label="Trending"
          active={sortBy === "trending"}
          onClick={() => setSortBy("trending")}
        />
        <SortButton
          icon={<Clock className="w-5 h-5" />}
          label="Ending Soon"
          active={sortBy === "ending"}
          onClick={() => setSortBy("ending")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all cursor-pointer group"
          >
            <div className="relative">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <button className="w-full py-2 bg-neon-green text-black rounded-full font-medium">
                  Place Bid
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{listing.title}</h3>
              <p className="text-gray-400 text-sm">{listing.artist}</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Current Price</span>
                  <span className="text-neon-green font-medium">
                    {listing.price}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Highest Bid</span>
                  <span className="font-medium">{listing.highestBid}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Ending In</span>
                  <span className="text-red-400">{listing.timeLeft}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SortButton = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
      active ? "bg-neon-green text-black" : "bg-white/5 hover:bg-white/10"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Marketplace;
