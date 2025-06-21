import React from 'react'
import CategoryBoxes from './Categorieboxes';
import Welcome from './Welcome';
import { motion } from 'framer-motion';
import BrandGrid from './BrandGrid';
import Footer from '../Comps/Footer';
import TrendingColl from './TrendingColl';
import ProductCategorySlider from './ProductCategorySlider';

const Home = () => {
    return (
        <>
            <div className='md:h-[90vh] h-auto w-full flex max-md:flex-col'>
                <div className="h-full w-1/2 max-md:h-screen max-md:w-full p-2">
                    <Welcome />
                </div>
                <CategoryBoxes />
            </div>
            <div className="h-screen md:h-[70vh] w-full">
                <BrandGrid />
            </div>
            <div className=" md:h-[70vh] w-full">
                <ProductCategorySlider />
            </div>
            <div className="md:h-[70vh] w-full">
                <TrendingColl />
            </div>
            <Footer />
        </>
    )
}

export default Home;