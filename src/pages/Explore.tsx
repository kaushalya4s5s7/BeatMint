import React, { useState } from "react";
import { Search, Filter, Disc3 } from "lucide-react";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const genres = ["All", "Electronic", "Hip Hop", "Rock", "Jazz", "Classical"];
  const mockNFTs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    title: `Track ${i + 1}`,
    artist: `Artist ${i + 1}`,
    genre: genres[Math.floor(Math.random() * (genres.length - 1)) + 1],
    price: `${(Math.random() * 2).toFixed(2)} ETH`,
    image: `https://source.unsplash.com/random/400x400?music&sig=${i}`,
  }));

  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="absolute right-0 top-0 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFFFFF"
              d="M47.7,-73.2C62.3,-67.3,75,-55.3,83.1,-40.5C91.2,-25.7,94.7,-8,90.9,7.8C87.1,23.5,76,37.3,64.4,49.7C52.8,62.1,40.7,73.1,26.1,78.5C11.4,83.9,-5.7,83.7,-21.8,78.9C-37.9,74.1,-52.9,64.7,-65.4,52.2C-77.9,39.7,-87.9,24.1,-89.1,7.8C-90.3,-8.5,-82.8,-25.5,-72.3,-38.8C-61.8,-52.1,-48.3,-61.7,-34.5,-67.9C-20.7,-74.1,-6.7,-77,5.9,-76.1C18.5,-75.3,33.1,-79.1,47.7,-73.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <h1 className="text-4xl font-bold">Explore NFTs</h1>
          <div className="flex w-full md:w-auto gap-4">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tracks, artists, or collections"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full focus:outline-none focus:border-white/20"
              />
            </div>
            <button className="p-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre.toLowerCase())}
            className={`px-4 py-2 rounded-full whitespace-nowrap backdrop-blur-lg ${
              selectedGenre === genre.toLowerCase()
                ? "bg-white text-black"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute left-0 bottom-0 translate-y-1/2 w-64 h-64 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFFFFF"
              d="M39.9,-67.9C52.6,-60.3,64.6,-51.3,74.1,-39.2C83.7,-27.1,90.8,-11.8,89.4,2.8C88,17.4,78.1,31.3,67.7,43.5C57.3,55.7,46.4,66.2,33.2,72.8C20,79.4,4.5,82.1,-10.3,79.9C-25.1,77.7,-39.2,70.6,-51.7,61.1C-64.2,51.6,-75.1,39.7,-79.6,25.7C-84.1,11.7,-82.3,-4.4,-77.6,-19.3C-72.9,-34.2,-65.4,-47.9,-53.9,-56.1C-42.4,-64.3,-27,-67,-12.3,-69.4C2.4,-71.8,27.2,-75.5,39.9,-67.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockNFTs.map((nft) => (
            <div
              key={nft.id}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <button className="w-full py-2 bg-white text-black rounded-full font-medium">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{nft.title}</h3>
                    <p className="text-gray-400 text-sm">{nft.artist}</p>
                  </div>
                  <span className="font-medium">{nft.price}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                    {nft.genre}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
