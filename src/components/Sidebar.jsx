import React from 'react';
import { useLocation } from 'react-router-dom';


const Sidebar = () => {

  const location = useLocation('/')

  return (
    // <div className='h-screen flex '>
      <div className="flex flex-col justify-between h-screen items-center w-[6%] pt-[5%] pb-10">

        {/* Social Links */}
        <div className="flex flex-col space-y-10 mt-4 text-center items-center">
          <a href="#" className="text-xs tracking-widest hover:line-through -rotate-90">DR</a>
          <a href="#" className="text-xs tracking-widest hover:line-through -rotate-90">TW</a>
          <a href="#" className="text-xs tracking-widest hover:line-through -rotate-90">LI</a>
          <div className='w-[1px] h-[100px] bg-dark'></div>
        </div>


        {/* Year at the bottom */}
        <div className="mb-4 text-xs -rotate-90 self-center">&copy; 2024</div>

      </div>
    // </div>
  );
};

export default Sidebar;
