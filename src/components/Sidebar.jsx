import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {

  const location = useLocation();

  const isHomePage = location.pathname ==='/';
  const isWorkPage = location.pathname === '/work';
  const isContactPage = location.pathname === '/contact';

  return (
    <div className='h-screen flex '>
      <div className="fixed flex flex-col justify-between h-screen items-center w-[6%] pt-[5%] pb-10 font-body tracking-[5px] text-[10px] font-[500]">
        
        <div className='flex flex-col items-center space-y-10 tracking-[5px] '>
          {/* Social Links */}
          {isHomePage ? (
            <div className="flex flex-col space-y-10 mt-4 text-center items-center">
              <a href="#" title='github' className="textxs hover:line-through -rotate-90">GH</a>
              <a href="#" title='twitter' className="textxs hover:line-through -rotate-90">TW</a>
              <a href="#" title='linkedIn' className="textxs hover:line-through -rotate-90">LI</a>
            </div> 
            ) : (
            <Link to='/' className='-rotate-90 hover:line-through text-center uppercase mb-5 '>Home</Link>
          )}
          <div className={`w-[1px] h-[100px] ${( isWorkPage || isContactPage) ? 'bg-light' : 'bg-dark'}`}></div>
        </div>

        {/* Year at the bottom */}
        <div className="mb-4 -rotate-90 self-center">&copy; 2024</div>

      </div>
    </div>
  );
};

export default Sidebar;
