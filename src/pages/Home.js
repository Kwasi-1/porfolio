import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex bg-light h-screen'>
      <Sidebar />

      {/* Main container split into two halves */}
      <div className="flex w-full">
        
        {/* Left Section (Text) */}
        <div className="flex flex-col justify-end w-2/5 px-20 py-28">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">LAUREN WALLER</h1>
            <p className="text-xl">
              Product Designer / Webflow Developer / Framer Developer and Partner.<br />
              Currently working full-time as a Senior Product Designer at <a href="#" className="underline">Detail Technologies</a>.
            </p>
          </div>
        </div>

        {/* Right Section (Links) */}
        <div className="flex justify-center items-center w-1/2">
          <div className="grid grid-cols-1 text-5xl font-custom">
            <Link to="work" className='text-[11vw] font-[300] hover:italic transform ease-in-out duration-300'>WORK</Link>
            <Link to="#about" className='text-[11vw] hover:italic transform ease-in-out duration-300'>ABOUT</Link>
            <Link to="#shop" className='text-[11vw] hover:italic transform ease-in-out duration-300'>SHOP</Link>
            <Link to="#contact" className='text-[11vw] hover:italic transform ease-in-out duration-300'>CONTACT</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;