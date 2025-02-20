import React from 'react';
import Sidebar from '../components/Sidebar';
import ProjectsList from '../components/ProjectsList';
import MainContent from '../components/MainContent';

const Work = () => {
  const workParagraphs = [
    'This is a showcase of my best work in a variety of fields including Graphic and Web Design, No-Code Development, Product Design, and Product Management.',
    'The world of digital design and development is constantly evolving and so has my role over the last 15 years. I’m still learning and gaining new skills every day.'
  ];

  return (
    <div className="flex bg-dark text-accent min-h-screen">
      <Sidebar />

      {/* Main container split into two halves */}
      <div className="relative mx-auto max-w-[90%] pt-16 pl-[8%] pr-[5%]">

        {/* Left Section (Header) */}
        <div className="fixed ">
        <MainContent title="work" paragraphs={workParagraphs} />
        </div>
        {/* Right Section (Scrollable Project List) */}
        {/* <div className="flex justify-center items-center pr-10"> */}
          <ProjectsList />
        {/* </div> */}

      </div>
    </div>
  );
};

export default Work;
