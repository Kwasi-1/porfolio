import React from 'react';
import Sidebar from '../components/Sidebar';
import NavigationLinks from '../components/NavigationLinks';
import MainContent from '../components/MainContent';
import WorKTogether from '../components/WorkTogether';

const Home = () => {
  const homeParagraphs = [
    'Frontend Developer | React | Next.js | TypeScript | Internationalization',
    'Passionate about building interactive, scalable, and accessible web applications.',
    // 'Currently working on an LMS platform for school websites in Ghana and neighboring African countries.'
  ];

  return (
    <div className='flex bg-light text-primary h-screen'>
      <Sidebar />
      <WorKTogether/>
      
      {/* Main container split into two halves */}
      <div className="flex max-w-[90%] pl-[8%] pr-[5%]">
        
        {/* Left Section (Header) */}
        <MainContent title='AFFUL NANA KWASI' paragraphs={homeParagraphs} paddingTop="pt-[30%]" />

        {/* Right Section (Links) */}
        <div className="flex justify-center items-center w-[65%] h-[90vh]">
          <NavigationLinks />
        </div>

      </div>
    </div>
  );
};

export default Home;
