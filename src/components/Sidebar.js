import React from 'react';

const Sidebar = () => {
  return (
    <div className=" space-y-4 text-black  bg-red-900 w-28">

      <div className='m-2 bg-green-700 flex flex-col justify-between'>
        {/* Social Links */}
        <div className=''>
        <a href="#" className="text-xs tracking-widest">DR</a>
        <a href="#" className="text-xs tracking-widest">TW</a>
        <a href="#" className="text-xs tracking-widest">LI</a>
        </div>

        {/* Year */}
        <div className="mt-auto text-xs rotate-90">&copy; 2024</div>
      </div>
    </div>
  );
};

export default Sidebar;
