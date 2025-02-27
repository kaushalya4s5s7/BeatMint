import React, { useState } from "react";
import {
  Grid,
  List,
  Filter,
  Search,
  Play,
  Heart,
  MoreHorizontal,
} from "lucide-react";

const Collection = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const mockCollection = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    title: `Track ${i + 1}`,
    artist: `Artist ${i + 1}`,
    plays: Math.floor(Math.random() * 10000),
    likes: Math.floor(Math.random() * 1000),
    price: `${(Math.random() * 2).toFixed(2)} ETH`,
    image: `https://source.unsplash.com/random/400x400?music&sig=${i + 40}`,
  }));

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <h1 className="text-4xl font-bold">Your Collection</h1>
        <div className="flex w-full md:w-auto gap-4">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search your collection"
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-neon-green/50"
            />
          </div>
          <button className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10">
            <Filter className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-full ${
              viewMode === "grid" ? "bg-neon-green text-black" : "bg-white/5"
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-full ${
              viewMode === "list" ? "bg-neon-green text-black" : "bg-white/5"
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockCollection.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <button className="p-2 rounded-full bg-white/20 hover:bg-white/30">
                    <Play className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 hover:bg-white/30">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.artist}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-neon-green">{item.price}</span>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <span>{item.plays.toLocaleString()} plays</span>
                    <span>{item.likes.toLocaleString()} likes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {mockCollection.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.artist}</p>
              </div>
              <div className="text-gray-400 text-sm">
                {item.plays.toLocaleString()} plays
              </div>
              <div className="text-gray-400 text-sm">
                {item.likes.toLocaleString()} likes
              </div>
              <span className="text-neon-green">{item.price}</span>
              <button className="p-2 rounded-full hover:bg-white/10">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
