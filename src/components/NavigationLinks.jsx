import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/work', label: 'WORK' },
  { to: '/about', label: 'ABOUT' },
  { to: '/blog', label: 'BLOG' },
  { to: '/contact', label: 'CONTACT' }
];

const NavigationLinks = () => {
  return (
    <nav aria-label="Primary Navigation">
      <div className="grid grid-cols-1 text-6xl lg:text-[11vw] font-[300] font-custom leading-[1.1] lg:leading-[0.95] lg:pl-[7%] lg:pt-[15%] lg:ml-[85%]">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="transform justify-between items-center hover:italic hover:translate-x-2  ease-in-out duration-300 w-fit"
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