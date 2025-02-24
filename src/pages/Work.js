import React from 'react';
import Sidebar from '../components/Sidebar';
import ProjectsList from '../components/ProjectsList';
import MainContent from '../components/MainContent';
import Layout from '../Layout';

const Work = () => {
  const workParagraphs = [
    'This is a showcase of my best work in frontend development, UI engineering, performance optimization, and web accessibility.',
    'The web is always evolving, and so is my approach to building fast, scalable applications. I craft interactive, user-friendly experiences with React, Next.js, and TypeScript.'
  ];

  return (
    <Layout backgroundColor="#1a1818">
      <div className="flex bg-dark text-accent min-h-screen">
        <Sidebar />

        {/* Main container split into two halves */}
        <div className="flex min-h-screen max-w-[90%] pt32 pl-[8%] pr-[5%]">

          {/* Left Section (Header) */}
          <MainContent title="work" paragraphs={workParagraphs} paddingTop="pt-[28%]" />

          {/* Right Section (Scrollable Project List) */}
          <ProjectsList />

        </div>
      </div>
    </Layout>
  );
};

export default Work;
