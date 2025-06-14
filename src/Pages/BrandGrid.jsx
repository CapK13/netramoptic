import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ExtraPhotos from '../ExtraPhotos.json';
        
const brands = [
    'Wolfeyes', 'Scott', 'Enfys', 'knighthorse',
    'kyaans', 'Tomhardy', 'vins', 'Raw7'
];

const BrandGrid = () => {
    return (
        <div className="min-h-screen md:min-h-[70vh] w-full flex items-center justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-6xl max-md:scale-90">
                {brands.map((brand, index) => {
                    const formattedName = brand.replace(/\s+/g, '-').toLowerCase();
                    const keyForLogo = `${formattedName}_logo`; // e.g., scott_logo
                    const logo = ExtraPhotos[keyForLogo];

                    return (
                        <Link
                            key={index}
                            to={`/brands/${formattedName}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.07,
                                    boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.15)',
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    type: 'tween',
                                    ease: 'easeOut',
                                    duration: 0.35,
                                }}
                                className="bg-white border border-gray-200 rounded-2xl h-40 sm:h-48 md:h-40 flex items-center justify-center cursor-pointer shadow-md"
                            >
                                {logo ? (
                                    <img
                                        src={logo}
                                        alt={`${brand} logo`}
                                        className="w-full h-full object-contain "
                                    />
                                ) : (
                                    <span className="text-black text-xl font-semibold text-center">
                                        {brand}
                                    </span>
                                )}
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default BrandGrid;
