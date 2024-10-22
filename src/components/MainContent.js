import React from 'react';

const MainContent = () => {
  return (
    <div className="text-center space-y-12">
      {/* Large Typography */}
      <h1 className="text-[10rem] leading-none font-bold">WORK</h1>
      <h1 className="text-[10rem] leading-none font-bold">ABOUT</h1>
      <h1 className="text-[10rem] leading-none font-bold">SHOP</h1>
      <h1 className="text-[10rem] leading-none font-bold">CONTACT</h1>

      {/* Profile */}
      <div className="absolute bottom-16 left-8 text-left">
        <h2 className="text-sm font-medium">LAUREN WALLER</h2>
        <p className="text-sm">Product Designer / Webflow Developer / Framer Developer and Partner.</p>
        <p className="text-sm mt-2">
          Currently working full-time as a Senior Product Designer at{' '}
          <a href="#" className="underline">Detail Technologies</a>
        </p>
      </div>
    </div>
  );
};

export default MainContent;
