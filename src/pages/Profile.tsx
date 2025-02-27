import React from "react";
import { Settings, Share2, Grid, List, Music, Heart } from "lucide-react";

const Profile = () => {
  const mockUser = {
    name: "Alex Thompson",
    username: "@alexthompson",
    avatar: "https://source.unsplash.com/random/200x200?portrait",
    banner: "https://source.unsplash.com/random/1600x400?abstract",
    stats: {
      collected: 47,
      created: 12,
      followers: 892,
      following: 156,
    },
  };

  return (
    <div className="space-y-8 -mt-8">
      <div className="relative">
        <img
          src={mockUser.banner}
          alt="Profile banner"
          className="w-full h-48 md:h-64 object-cover rounded-b-2xl"
        />
        <div className="absolute bottom-0 translate-y-1/2 left-8 p-1 bg-black rounded-2xl">
          <img
            src={mockUser.avatar}
            alt={mockUser.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="pt-20 md:pt-24">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{mockUser.name}</h1>
            <p className="text-gray-400">{mockUser.username}</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10">
              <Settings className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 bg-neon-green text-black rounded-full font-medium">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="flex gap-8 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">{mockUser.stats.collected}</div>
            <div className="text-gray-400">Collected</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{mockUser.stats.created}</div>
            <div className="text-gray-400">Created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{mockUser.stats.followers}</div>
            <div className="text-gray-400">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{mockUser.stats.following}</div>
            <div className="text-gray-400">Following</div>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10">
        <div className="flex gap-4">
          <button className="px-4 py-2 text-neon-green border-b-2 border-neon-green">
            Collected
          </button>
          <button className="px-4 py-2 text-gray-400 hover:text-white">
            Created
          </button>
          <button className="px-4 py-2 text-gray-400 hover:text-white">
            Favorited
          </button>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search your collection"
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-neon-green/50"
          />
        </div>
        <button className="p-2 rounded-full bg-white/5 hover:bg-white/10">
          <Grid className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full bg-white/5 hover:bg-white/10">
          <List className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all cursor-pointer group"
          >
            <div className="relative">
              <img
                src={`https://source.unsplash.com/random/400x400?music&sig=${
                  i + 20
                }`}
                alt={`Collection item ${i + 1}`}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                <button className="p-2 rounded-full bg-white/20 hover:bg-white/30">
                  <Music className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-white/20 hover:bg-white/30">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Track Title {i + 1}</h3>
              <p className="text-gray-400 text-sm">Artist Name</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-neon-green">0.5 ETH</span>
                <span className="text-xs text-gray-400">#1234</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
