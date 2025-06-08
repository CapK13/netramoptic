import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './Comps/Navbar';
import Profile from './Shop/Profile';
import Frames from './Comps/Frames';
import Goggles from './Comps/Goggles';
import ReadingGlasses from './Comps/ReadingGlasses';
import Wolfeyes from './Comps/wolfeyes';
import Enfys from './Comps/enfys';
import Scott from './Comps/Scott';
import Knighthorse from './Comps/Knighthorse';
import Kyaans from './Comps/Kyaans';
import Tomhardy from './Comps/Tomhardy';
import Raw7 from './Comps/Raw7';
import Vins from './Comps/Vins';
import Home from './Pages/Home';
import ContactLenses from './Comps/ContactLenses';
import Cart from './Shop/Cart';
import ProductCard from './Comps/ProductCard';
import ProductDetailPage from './Comps/ProductDetailPage';
import Checkout from './Shop/Checkout';
import MenFrames from './Comps/MenFrames';
import WomenFrames from './Comps/WomenFrames';
import KidsFrames from './Comps/KidsFrames';
import TermsAndConditions from './Comps/Footer_Comps/TermsAndConditions';
import FAQ from './Comps/Footer_Comps/FAQ';
import PrivacyPolicy from './Comps/Footer_Comps/PrivacyPolicy'
import AuthPage from './Pages/AuthPage';

const App = () => {
    
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    console.log('Loaded user from localStorage:', storedUser); // ← check this
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  },  []);

  return (
    <>                
      <Navbar user={user} setUser={setUser} />
      <Routes>          
        <Route path="/" element={<Home />} />
        <Route path="/frames" element={<Frames />} />
        <Route path="/goggles" element={<Goggles />} />
        <Route path="/contact-lenses" element={<ContactLenses />} />
        <Route path="/reading-glasses" element={<ReadingGlasses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/frames/men" element={<MenFrames />} />
        <Route path="/frames/women" element={<WomenFrames />} />
        <Route path="/frames/kids" element={<KidsFrames />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/brands/wolfeyes" element={<Wolfeyes />} />
        <Route path="/brands/enfys" element={<Enfys />} />
        <Route path="/brands/scott" element={<Scott />} />
        <Route path="/brands/knighthorse" element={<Knighthorse />} />
        <Route path="/brands/kyaans" element={<Kyaans />} />
        <Route path="/brands/tomhardy" element={<Tomhardy />} />
        <Route path="/brands/vins" element={<Vins />} />
        <Route path="/brands/raw7" element={<Raw7 />} />
        <Route
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />
      </Routes>
      
    </>

  );
};

export default App;
