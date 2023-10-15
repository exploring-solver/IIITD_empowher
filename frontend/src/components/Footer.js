import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} className='w-20' alt="" />
        <div>
          
          <h2 className="text-2xl font-bold">Designed with ❤️ by Team Hoodini</h2>
          <p className="text-sm">Emphower Hackathon 2023</p>
        </div>
        <div>
          <p className="text-sm">Contact Us: team@hoodini.com</p>
          <p className="text-sm">Follow us on social media</p>
          <p className="text-sm">-&gt; Checkout Sakhee AI Assistant Now!!!</p>
          {/* Add social media icons or links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
