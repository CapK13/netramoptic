import React, { useEffect, useRef } from 'react';
import Prods from '../pro2.json';
import TrendingCard from './TrendingCard';

const TrendingColl = () => {
  const scrollRef = useRef(null);

  const trendingFrames = Prods.frames
    .filter(frame => frame.pro_rating)
    .sort((a, b) => b.pro_rating - a.pro_rating)
    .slice(0, 10);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (container) {
        scrollAmount += 240;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black py-10 px-4">
      <h2 className="text-3xl md:text-3xl font-bold text-white text-center mb-6">
        🔥 Trending Collection
      </h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 hide-scrollbar px-1"
      >
        {trendingFrames.map((frame) => (
          <div key={frame.pro_id} className="snap-start flex-shrink-0">
            <TrendingCard product={frame} />
          </div>
        ))}
      </div>
            
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TrendingColl;
