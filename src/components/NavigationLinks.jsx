import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/work', label: 'WORK' },
  { to: '#about', label: 'ABOUT' },
  { to: '#shop', label: 'SHOP' },
  { to: '#contact', label: 'CONTACT' }
];

const NavigationLinks = () => {
  return (
    <nav aria-label="Primary Navigation">
      <div className="grid grid-cols-1 text-[10vw] font-[300] font-custom leading-[1] pl-[7%] pt-[13%]">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="justify-between items-center hover:italic hover:translate-x-[5px] transform ease-in-out duration-300 w-fit"
            aria-label={link.label}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavigationLinks;
