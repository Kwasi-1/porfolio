import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex bg-light h-screen'>
      <Sidebar />

      {/* Main container split into two halves */}
      <div className="flex w-[90%]  pl-[8%] pr-[5%]">
        
        {/* Left Section (Text) */}
        <div className="flex flex-col justify-end w-[25%] py-28 font-body">
          <div className="space-y-4">
            <h1 className="text-base font-[500] tracking-widest">LAUREN WALLER</h1>
            <div className="text-[13px] leading-6 font-[300]  tracking-wider">
              <p className='mb-4'>Product Designer / Webflow Developer / Framer Developer and Partner.</p>
              <p>Currently working full-time as a Senior Product Designer at <a href="#" className="underline">Detail Technologies</a>.</p>
            </div>
          </div>
        </div>

        {/* Right Section (Links) */}
        <div className="flex justify-center items-center w-[65%] h-[90vh]">
          <div className="grid grid-cols-1 text-[11vw] font-[300] font-custom leading-[1]  pl-[7%]  pt-[10%]">
            <Link to="work" className='hover:italic transform ease-in-out duration-300'>WORK</Link>
            <Link to="#about" className='hover:italic transform ease-in-out duration-300'>ABOUT</Link>
            <Link to="#shop" className='hover:italic transform ease-in-out duration-300'>SHOP</Link>
            <Link to="#contact" className='hover:italic transform ease-in-out duration-300'>CONTACT</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
