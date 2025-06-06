import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Extraphotos from '../ExtraPhotos.json';

const floatIn = {
  hidden: (i) => ({
    opacity: 0,
    x: 100 + i * 20,
    y: 20 * ((i % 2 === 0) ? 1 : -1),
  }),
  show: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
      stiffness: 80,
    },
  }),
};
       
const categories = [
  {     
    label: 'Men',
    image: Extraphotos.mens_glasses,
    path: '/frames/men',
  },
  {
    label: 'Women',
    image: Extraphotos.women_glasses || Extraphotos.womens_glasses,
    path: '/frames/women',
  },
  {
    label: 'Kids',
    image: Extraphotos.kids_glasses2,
    path: '/frames/kids',
  },
];

const CategoryBoxes = () => {
  return (
    <div    
      className="w-full p-4 grid gap-5
      max-md:grid-cols-1 max-md:grid-rows-3
      md:w-1/2 md:h-full md:grid-cols-2 md:grid-rows-2
      md:justify-items-center md:items-center md:px-20"
    >         
      {categories.map((cat, i) => (
        <Link key={i} to={cat.path}>
          <motion.div
            custom={i}
            variants={floatIn}
            initial="hidden"
            animate="show"
            whileHover={{
              scale: 1.05,
              rotate: [0, 1.5, -1.5, 0],
              boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
            }}
            className={`relative overflow-hidden rounded-2xl
            flex items-center justify-center text-white font-bold text-xl cursor-pointer group
            max-md:h-48 max-md:w-full
            md:h-60 md:w-52 
            ${i === 2 ? 'md:col-span-2 md:justify-self-center' : ''}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-105 rounded-xl scale-100"
              style={{ backgroundImage: `url(${cat.image})` }}
            />
            <span className="z-10 md:pb-4 md:self-end">{cat.label}</span>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryBoxes;
