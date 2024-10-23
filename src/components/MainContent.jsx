import React from 'react';

const MainContent = () => {
  return (
    <div className="flex flex-col justify-end w-[25%] py-28 font-body">
      <div className="space-y-4">
        <h1 className="text-base font-[500] tracking-widest">LAUREN WALLER</h1>
        <div className="text-[13px] leading-6 font-[300] tracking-wider">
          <p className='mb-4'>
            Product Designer / Webflow Developer / Framer Developer and Partner.
          </p>
          <p>
            Currently working full-time as a Senior Product Designer at{' '}
            <a href="#" className="underline">Detail Technologies</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
