import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname === '/blog';
  const isWorkPage = location.pathname === '/work';
  const isContactPage = location.pathname === '/contact';
  const isBlogPostPage = location.pathname.startsWith('/blog/') && !isBlogPage; // Detects dynamic blog posts

  return (
    <div className="h-screen flex">
      <div className="fixed flex md:flex-col justify-between md:h-screen items-center w-[100%] md:w-[6%] pt-[5%] pb-10 font-body tracking-[5px] text-[10px] font-[500]">
        
        <div className="flex md:flex-col items-center space-y-10 tracking-[5px]">
          {/* Social Links (Home Page) */}
          {isHomePage ? (
            <div className="flex flex-col space-y-10 mt-4 text-center items-center">
              <a href="https://github.com/Kwasi-1" title="GitHub" className=" hover:line-through -rotate-90">GH</a>
              <a href="https://x.com/kwasi11351391" title="Twitter" className=" hover:line-through -rotate-90">TW</a>
              <a href="https://www.linkedin.com/in/nana-kwasi-afful-700a1b283/" title="LinkedIn" className=" hover:line-through -rotate-90">LI</a>
            </div>
          ) : isBlogPostPage ? (
            // Show "Blog" for blog post pages
            <Link to="/blog" className="-rotate-90 hover:line-through text-center uppercase mb-5">Blog</Link>
          ) : (
            // Show "Home" for all other pages
            <Link to="/" className="-rotate-90 hover:line-through text-center uppercase mb-5">Home</Link>
          )}

          <div className={`w-[1px] h-[100px] ${(isWorkPage || isContactPage) ? 'bg-light' : 'bg-dark'}`}></div>
        </div>

        {/* Year at the bottom */}
        <div className="mb-4 -rotate-90 self-center">&copy; 2024</div>
      </div>
    </div>
  );
};

export default Sidebar;
