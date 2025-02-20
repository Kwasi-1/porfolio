import React from 'react';
import Sidebar from '../components/Sidebar';
import NavigationLinks from '../components/NavigationLinks';
import MainContent from '../components/MainContent';

const Home = () => {
  const homeParagraphs = [
    'Product Designer / Webflow Developer / Framer Developer and Partner.',
    'Currently working full-time as a Senior Product Designer at Detail Technologies.'
  ];

  return (
    <div className='flex bg-light text-primary h-screen'>
      <Sidebar />
      
      {/* Main container split into two halves */}
      <div className="flex mx-auto max-w-[90%] pl-[8%] pr-[5%]">
        
        {/* Left Section (Header) */}
        <MainContent title='AFFUL NANA KWASI' paragraphs={homeParagraphs} />

        {/* Right Section (Links) */}
        <div className="flex justify-center items-center w-[65%] h-[90vh]">
          <NavigationLinks />
        </div>

      </div>
    </div>
  );
};

export default Home;
