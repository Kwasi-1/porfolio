import React from 'react';
import Sidebar from '../components/Sidebar';
import NavigationLinks from '../components/NavigationLinks';
import MainContent from '../components/MainContent';
import WorkTogether from '../components/WorkTogether';

const Home = () => {
  const homeParagraphs = [
    'Frontend Developer | React | Next.js | TypeScript | Internationalization',
    'Passionate about building interactive, scalable, and accessible web applications.',
    // 'Currently working on an LMS platform for school websites in Ghana and neighboring African countries.'
  ];

  return (
    <div className='flex flex-col lg:flex-row bg-light text-primary min-h-screen'>
      {/* Sidebar */}
      <Sidebar />

      {/* Work Together CTA */}
      <WorkTogether />

      {/* Main container split into two halves */}
      <div className="flex flex-col lg:flex-row wfull lg:max-w-[90%] lg:pl-[8%] lg:pr-[5%]">
        
        {/* Left Section (Header) */}
        <MainContent title='AFFUL NANA KWASI' paragraphs={homeParagraphs} paddingTop="pt-8 lg:pt-[30%]" />

        {/* Right Section (Links) */}
        <div className="flex justify-center items-center w-full lg:w-[65%] lg:h-[90vh]">
          <NavigationLinks />
        </div>

      </div>
    </div>
  );
};

export default Home;