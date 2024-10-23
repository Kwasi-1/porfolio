import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLinks = () => {
  return (
    <div className="grid grid-cols-1 text-[11vw] font-[300] font-custom leading-[1] pl-[7%] pt-[10%]">
      <Link to="work" className='hover:italic transform ease-in-out duration-300'>WORK</Link>
      <Link to="#about" className='hover:italic transform ease-in-out duration-300'>ABOUT</Link>
      <Link to="#shop" className='hover:italic transform ease-in-out duration-300'>SHOP</Link>
      <Link to="#contact" className='hover:italic transform ease-in-out duration-300'>CONTACT</Link>
    </div>
  );
};

export default NavigationLinks;
