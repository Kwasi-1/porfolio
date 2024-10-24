import React from 'react';

const MainContent = ({ title, paragraphs }) => {
  return (
    <div className="flex flex-col justify-end w-[25%] py-28 mr-[5%] font-body">
      <div className="space-y-4">
        <h1 className="text-base font-[500] tracking-widest uppercase">{title}</h1>
        <div className="text-[13px] leading-6 font-[300] tracking-wider">
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
