import React from 'react';

const WorkTogether = () => {
  return (
    <a
      href="mailto:affulnana04@gmail.com?subject=Collaboration Inquiry"
      className="hidden lg:fixed lg:top-0 lg:right-0 lg:m-6 rounded-2xl p-4 z-50 w-[90%] lg:w-[380px] h-[80px] lg:h-[150px] bg-dark text-accent shadow-2xl lg:flex justify-center items-center text-center hover:scale-105 transform transition-transform duration-300"
    >
      <span className="text-sm lg:text-lg font-semibold font-custom tracking-wide">
        Want to Work Together? <br className="hidden lg:block" /> Let’s Collaborate!
      </span>
    </a>
  );
};

export default WorkTogether;