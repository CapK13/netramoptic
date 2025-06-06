import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Netram Optic</h2>
          <p className="text-sm">
            Your trusted source for stylish eyewear. We bring vision and fashion together.
          </p>
        </div>
          
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/privacypolicy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/termsandconditions" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/frames/men" className="hover:underline">Men's Frames</a></li>
            <li><a href="/frames/women" className="hover:underline">Women's Frames</a></li>
            <li><a href="/frames/kids " className="hover:underline">Kids' Glasses</a></li>
            <li><a href="/goggles" className="hover:underline">Sunglasses</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: support@netram.com</p>
          <p className="text-sm mb-4">Phone: +91 98765 43210</p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-sky-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-red-600"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Netram Optic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
