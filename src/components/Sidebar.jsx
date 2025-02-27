import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname === '/blog';
  const isWorkPage = location.pathname === '/work';
  const isContactPage = location.pathname === '/contact';
  const isBlogPostPage = location.pathname.startsWith('/blog/') && !isBlogPage;

  return (
    <div className="h-16 lg:h-screen flex  items-center">
      <div className="relative lg:fixed flex flex-row lg:flex-col justify-between lg:h-screen items-center w-full lg:w-[6%] lg:pt-[5%] pb-4 lg:pb-10 font-body tracking-[5px] text-[10px] font-[500] px-7 lg:px-0 z-50 mt-4 lg:mt-0">
        <div className="flex flex-row lg:flex-col items-center justify-center lg:space-y-10 space-x-4 lg:space-x-0 tracking-[5px]">
          {/* Social Links (Home Page) */}
          {isHomePage ? (
            <div className="flex flex-row lg:flex-col lg:space-y-10 space-x-4 lg:space-x-0 lg:mt-4  text-center items-center">
              <a href="https://github.com/Kwasi-1" title="GitHub" className="hover:line-through lg:-rotate-90">
                GH
              </a>
              <a href="https://x.com/kwasi11351391" title="Twitter" className="hover:line-through lg:-rotate-90">
                TW
              </a>
              <a href="https://www.linkedin.com/in/nana-kwasi-afful-700a1b283/" title="LinkedIn" className="hover:line-through lg:-rotate-90">
                LI
              </a>
            </div>
          ) : isBlogPostPage ? (
            <Link to="/blog" className="hover:line-through lg:-rotate-90 text-center uppercase mb-0 lg:mb-5 ">
              Blog
            </Link>
          ) : (
            <Link to="/" className="hover:line-through lg:-rotate-90 text-center uppercase mb-0 lg:mb-5">
              Home
            </Link>
          )}

          {/* Divider */}
          <div
            className={`w-[50px] h-[1.5px] lg:w-[1px] lg:h-[100px] ${
              isWorkPage || isContactPage || isBlogPage ? 'bg-light' : 'bg-dark'
            }`}
          ></div>
        </div>

        {/* Year at the bottom */}
        <div className="mt4 lg:mb-4 lg:mt-0 lg:-rotate-90 self-center">&copy; 2024</div>
      </div>
    </div>
  );
};

export default Sidebar;