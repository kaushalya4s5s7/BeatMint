import React from "react";
import { Play, TrendingUp as Trending, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative space-y-6">
        <div className="absolute right-0 top-0 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#39FF14"
              d="M37.5,-64.1C47.9,-56.3,55.4,-44.6,63.5,-32.1C71.6,-19.6,80.3,-6.2,79.5,6.7C78.7,19.6,68.4,32,57.3,41.3C46.2,50.6,34.4,56.8,21.3,62.5C8.3,68.2,-6,73.4,-19.2,71.1C-32.4,68.9,-44.5,59.2,-54.5,47.7C-64.5,36.2,-72.4,22.8,-76.3,7.5C-80.1,-7.8,-79.9,-25,-72.4,-37.5C-64.9,-49.9,-50.1,-57.6,-36.1,-64C-22.1,-70.3,-9,-75.3,2.7,-79.4C14.4,-83.5,27.1,-71.9,37.5,-64.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold">Welcome Back</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RecommendationCard
            title="Daily Mix"
            description="AI-curated tracks based on your taste"
            icon={<Play className="w-6 h-6" />}
          />
          <RecommendationCard
            title="Trending Now"
            description="Most popular NFTs this week"
            icon={<Trending className="w-6 h-6" />}
          />
          <RecommendationCard
            title="Recent Drops"
            description="Latest releases from top artists"
            icon={<Clock className="w-6 h-6" />}
          />
        </div>
      </section>

      <section className="relative space-y-6">
        <div className="absolute left-0 top-1/2 -translate-x-1/2 w-64 h-64 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFFFFF"
              d="M44.5,-76.3C59.2,-69.9,73.8,-60.3,83.5,-46.7C93.2,-33.1,98,-15.5,96.6,1.4C95.2,18.3,87.6,34.6,77.8,48.7C68,62.8,56,74.6,41.7,79.9C27.4,85.2,10.7,83.9,-4.4,80.5C-19.5,77.1,-33,71.6,-47.2,65.1C-61.4,58.6,-76.3,51.1,-84.1,38.7C-91.9,26.3,-92.6,9,-89.7,-7.2C-86.8,-23.4,-80.3,-38.5,-70.1,-49.8C-59.9,-61.1,-46,-68.6,-32.1,-75.5C-18.2,-82.4,-4.3,-88.7,8.7,-87.1C21.7,-85.5,43.3,-76,44.5,-76.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold">Featured NFTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <NFTCard
              key={i}
              title={`Featured Track ${i}`}
              artist="Artist Name"
              price="0.5 ETH"
              image={`https://source.unsplash.com/random/400x400?music&sig=${i}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

const RecommendationCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer border border-white/10">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-white/10 rounded-xl text-white">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  </div>
);

const NFTCard = ({
  title,
  artist,
  price,
  image,
}: {
  title: string;
  artist: string;
  price: string;
  image: string;
}) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-colors cursor-pointer border border-white/10">
    <img
      src={image}
      alt={title}
      className="w-full aspect-square object-cover"
    />
    <div className="p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm">{artist}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-medium">{price}</span>
        <button className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
          Bid Now
        </button>
      </div>
    </div>
  </div>
);
