import React from 'react';

const MainContent = ({ title, paragraphs, paddingTop }) => {
  return (
    <div className={`flex flex-col w-full lg:w-[30%] lg:fixed h-auto lg:h-screen px-[10%] py-8 lg:py-24 lg:mr-[5%] font-body ${paddingTop} px-[5%] lg:px-[3%]`}>
      <div className="space-y-4">
        <h1 className="text-[14px] lg:text-base font-[500] tracking-widest uppercase">{title}</h1>
        <div className="text-[12px] lg:text-[13px] leading-6 font-[300] tracking-wider">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={`mb-4 ${index === paragraphs.length - 1 ? 'mb-0' : ''}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;