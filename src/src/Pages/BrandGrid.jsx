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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-6xl">     
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
                                    scale: 1.05,
                                    boxShadow: '0px 0px 25px rgba(255, 255, 255, 0.2)',
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                className="bg-white border border-gray-300 rounded-xl h-32 flex items-center justify-center p-4 cursor-pointer"
                            >
                                {logo ? (
                                    <img
                                        src={logo}
                                        alt={`${brand} logo`}
                                        className="max-h-16 max-w-24 sm:max-h-20 sm:max-w-28 md:max-h-24 md:max-w-32 object-cover"
                                    />
                                ) : (
                                    <span className="text-black text-xl font-semibold">
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
