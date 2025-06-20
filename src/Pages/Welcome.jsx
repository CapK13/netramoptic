import React from 'react';
import { motion } from 'framer-motion';
import GlassHover from './GlassHover';
import ExtraPhotos from '../ExtraPhotos.json';

// Helper function to get random hero_back image
const getRandomHeroImage = () => {
  const images = ExtraPhotos.hero_back;
  return images[Math.floor(Math.random() * images.length)];
};

const sentence = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const word = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Welcome = () => {
  const randomBackground = getRandomHeroImage();

  return (
    <motion.div
      variants={sentence}
      initial="hidden"
      animate="show"
      className="relative flex flex-col justify-center items-center text-white text-center h-full w-full gap-4 px-4 overflow-hidden rounded-xl"
    >
      {/* ✅ Random Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
        style={{ backgroundImage: `url(${randomBackground})` }}
      />

      <GlassHover />

      <motion.p
        variants={word}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight z-10"
      >
        Frames That Fit Your Life.
      </motion.p>
      <motion.p
        variants={word}
        className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 z-10"
      >
        Eyewear for Every Face. Every Mood.
      </motion.p>
    </motion.div>
  );
};

export default Welcome;
